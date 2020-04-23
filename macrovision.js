let selected = null;
let selectedEntity = null;

let entityIndex = 0;

let clicked = null;
let dragging = false;
let clickTimeout = null;
let dragOffsetX = null;
let dragOffsetY = null;

let shiftHeld = false;
let altHeld = false;

let entityX;
let canvasWidth;
let canvasHeight;

let dragScale = 1;
let dragScaleHandle = null;

let dragEntityScale = 1;
let dragEntityScaleHandle = null;

let scrollDirection = 0;
let scrollHandle = null;

let zoomDirection = 0;
let zoomHandle = null;

let sizeDirection = 0;
let sizeHandle = null;

let worldSizeDirty = false;



math.createUnit("humans", {
    definition: "5.75 feet"
});

math.createUnit("story", {
    definition: "12 feet",
    prefixes: "long"
});
math.createUnit("stories", {
    definition: "12 feet",
    prefixes: "long"
});
math.createUnit("earths", {
    definition: "12756km",
    prefixes: "long"
});
math.createUnit("parsec", {
    definition: "3.086e16 meters",
    prefixes: "long"
})
math.createUnit("parsecs", {
    definition: "3.086e16 meters",
    prefixes: "long"
})
math.createUnit("lightyears", {
    definition: "9.461e15 meters",
    prefixes: "long"
})
math.createUnit("AU", {
    definition: "149597870700 meters"
})
math.createUnit("AUs", {
    definition: "149597870700 meters"
})
math.createUnit("dalton", {
    definition: "1.66e-27 kg",
    prefixes: "long"
});
math.createUnit("daltons", {
    definition: "1.66e-27 kg",
    prefixes: "long"
});
math.createUnit("solarradii", {
    definition: "695990 km",
    prefixes: "long"
});
math.createUnit("solarmasses", {
    definition: "2e30 kg",
    prefixes: "long"
});
math.createUnit("galaxy", {
    definition: "105700 lightyears",
    prefixes: "long"
});
math.createUnit("galaxies", {
    definition: "105700 lightyears",
    prefixes: "long"
});
math.createUnit("universe", {
    definition: "93.016e9 lightyears",
    prefixes: "long"
});
math.createUnit("universes", {
    definition: "93.016e9 lightyears",
    prefixes: "long"
});

const unitChoices = {
    length: [
        "meters",
        "angstroms",
        "millimeters",
        "centimeters",
        "kilometers",
        "inches",
        "feet",
        "humans",
        "stories",
        "miles",
        "earths",
        "solarradii",
        "AUs",
        "lightyears",
        "parsecs",
        "galaxies",
        "universes"
    ],
    area: [
        "meters^2",
        "cm^2",
        "kilometers^2",
        "acres",
        "miles^2"
    ],
    mass: [
        "kilograms",
        "milligrams",
        "grams",
        "tonnes",
        "lbs",
        "ounces",
        "tons"
    ]
}
const config = {
    height: math.unit(1500, "meters"),
    minLineSize: 100,
    maxLineSize: 150,
    autoFit: false,
    autoFitMode: "max"
}

const availableEntities = {

}

const availableEntitiesByName = {

}

const entities = {

}

function constrainRel(coords) {
    if (altHeld) {
        return coords;
    }
    return {
        x: Math.min(Math.max(coords.x, 0), 1),
        y: Math.min(Math.max(coords.y, 0), 1)
    }
}
function snapRel(coords) {
    return constrainRel({
        x: coords.x,
        y: altHeld ? coords.y : (Math.abs(coords.y - 1) < 0.05 ? 1 : coords.y)
    });
}

function adjustAbs(coords, oldHeight, newHeight) {
    const ratio = math.divide(oldHeight, newHeight);
    return { x: 0.5 + (coords.x - 0.5) * math.divide(oldHeight, newHeight), y: 1 + (coords.y - 1) * math.divide(oldHeight, newHeight) };
}

function rel2abs(coords) {
    return { x: coords.x * canvasWidth + 50, y: coords.y * canvasHeight };
}

function abs2rel(coords) {
    return { x: (coords.x - 50) / canvasWidth, y: coords.y / canvasHeight };
}

function updateEntityElement(entity, element) {
    const position = rel2abs({ x: element.dataset.x, y: element.dataset.y });
    const view = entity.view;

    element.style.left = position.x + "px";
    element.style.top = position.y + "px";
    element.style.setProperty("--xpos", position.x + "px");
    element.style.setProperty("--entity-height", "'" + entity.views[view].height.to(config.height.units[0].unit.name).format({ precision: 2 }) + "'");
    const pixels = math.divide(entity.views[view].height, config.height) * (canvasHeight - 50);
    const extra = entity.views[view].image.extra;
    const bottom = entity.views[view].image.bottom;
    const bonus = (extra ? extra : 1) * (1 / (1 - (bottom ? bottom : 0)));
    element.style.setProperty("--height", pixels * bonus + "px");
    element.style.setProperty("--extra", pixels * bonus - pixels + "px");

    if (entity.views[view].rename)
        element.querySelector(".entity-name").innerText = entity.name == "" ? "" : entity.views[view].name;
    else
        element.querySelector(".entity-name").innerText = entity.name;

    const bottomName = document.querySelector("#bottom-name-" + element.dataset.key);

    bottomName.style.left = position.x + entityX + "px";
    bottomName.style.bottom = "0vh";
    bottomName.innerText = entity.name;

    const topName = document.querySelector("#top-name-" + element.dataset.key);

    topName.style.left = position.x + entityX + "px";
    topName.style.top = "20vh";
    topName.innerText = entity.name;

    if (entity.views[view].height.toNumber("meters") / 10 > config.height.toNumber("meters")) {
        topName.classList.add("top-name-needed");
    } else {
        topName.classList.remove("top-name-needed");
    }
}

function updateSizes(dirtyOnly = false) {
    drawScale(dirtyOnly);

    let ordered = Object.entries(entities);

    ordered.sort((e1, e2) => {
        if (e1[1].priority != e2[1].priority) {
            return e2[1].priority - e1[1].priority;
        } else {
            return e1[1].views[e1[1].view].height.value - e2[1].views[e2[1].view].height.value
        }

    });

    let zIndex = ordered.length;

    ordered.forEach(entity => {
        const element = document.querySelector("#entity-" + entity[0]);
        element.style.zIndex = zIndex;
        if (!dirtyOnly || entity[1].dirty) {
            updateEntityElement(entity[1], element, zIndex);
            entity[1].dirty = false;
        }
        zIndex -= 1;
    });


}

function drawScale(ifDirty = false) {
    if (ifDirty && !worldSizeDirty)
        return;
    function drawTicks(/** @type {CanvasRenderingContext2D} */ ctx, pixelsPer, heightPer) {
        let total = heightPer.clone();
        total.value = 0;
        for (let y = ctx.canvas.clientHeight - 50; y >= 50; y -= pixelsPer) {
            drawTick(ctx, 50, y, total);
            total = math.add(total, heightPer);
        }
    }

    function drawTick(/** @type {CanvasRenderingContext2D} */ ctx, x, y, value) {
        const oldStroke = ctx.strokeStyle;
        const oldFill = ctx.fillStyle;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 20, y);
        ctx.strokeStyle = "#000000";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + 20, y);
        ctx.lineTo(ctx.canvas.clientWidth - 70, y);
        ctx.strokeStyle = "#aaaaaa";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(ctx.canvas.clientWidth - 70, y);
        ctx.lineTo(ctx.canvas.clientWidth - 50, y);
        ctx.strokeStyle = "#000000";
        ctx.stroke();

        const oldFont = ctx.font;
        ctx.font = 'normal 24pt coda';
        ctx.fillStyle = "#dddddd";

        ctx.beginPath();
        ctx.fillText(value.format({ precision: 3 }), x + 20, y + 35);

        ctx.font = oldFont;
        ctx.strokeStyle = oldStroke;
        ctx.fillStyle = oldFill;
    }
    const canvas = document.querySelector("#display");

    /** @type {CanvasRenderingContext2D} */

    const ctx = canvas.getContext("2d");

    let pixelsPer = (ctx.canvas.clientHeight - 100) / config.height.toNumber();

    heightPer = 1;


    if (pixelsPer < config.minLineSize) {
        const factor = math.ceil(config.minLineSize / pixelsPer);
        heightPer *= factor;
        pixelsPer *= factor;
    }

    if (pixelsPer > config.maxLineSize) {
        const factor = math.ceil(pixelsPer / config.maxLineSize);
        heightPer /= factor;
        pixelsPer /= factor;
    }

    heightPer = math.unit(heightPer, config.height.units[0].unit.name)
    

    ctx.scale(1, 1);
    ctx.canvas.width = canvas.clientWidth;
    ctx.canvas.height = canvas.clientHeight;
    
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#333";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50, ctx.canvas.clientHeight - 50);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(ctx.canvas.clientWidth - 50, 50);
    ctx.lineTo(ctx.canvas.clientWidth - 50, ctx.canvas.clientHeight - 50);
    ctx.stroke();

    drawTicks(ctx, pixelsPer, heightPer);
}

// Entities are generated as needed, and we make a copy
// every time - the resulting objects get mutated, after all.
// But we also want to be able to read some information without 
// calling the constructor -- e.g. making a list of authors and
// owners. So, this function is used to generate that information.
// It is invoked like makeEntity so that it can be dropped in easily,
// but returns an object that lets you construct many copies of an  entity,
// rather than creating a new entity.
function createEntityMaker(info, views, sizes) {
    const maker = {};

    maker.name = info.name;
    maker.constructor = () => makeEntity(info, views, sizes);
    maker.authors = [];
    maker.owners = [];

    Object.values(views).forEach(view => {
        const authors = authorsOf(view.image.source);
        if (authors) {
            authors.forEach(author => {
                if (maker.authors.indexOf(author) == -1) {
                    maker.authors.push(author);
                }
            });
        }
        const owners = ownersOf(view.image.source);
        if (owners) {
            owners.forEach(owner => {
                if (maker.owners.indexOf(owner) == -1) {
                    maker.owners.push(owner);
                }
            });
        }
    });

    return maker;
}

// This function serializes and parses its arguments to avoid sharing
// references to a common object. This allows for the objects to be 
// safely mutated.

function makeEntity(info, views, sizes) {
    const entityTemplate = {
        name: info.name,
        identifier: info.name,
        scale: 1,
        info: JSON.parse(JSON.stringify(info)),
        views: JSON.parse(JSON.stringify(views), math.reviver),
        sizes: sizes === undefined ? [] : JSON.parse(JSON.stringify(sizes), math.reviver),
        init: function () {
            const entity = this;
            Object.entries(this.views).forEach(([viewKey, view]) => {
                view.parent = this;
                if (this.defaultView === undefined) {
                    this.defaultView = viewKey;
                    this.view = viewKey;
                }

                Object.entries(view.attributes).forEach(([key, val]) => {
                    Object.defineProperty(
                        view,
                        key,
                        {
                            get: function () {
                                return math.multiply(Math.pow(this.parent.scale, this.attributes[key].power), this.attributes[key].base);
                            },
                            set: function (value) {
                                const newScale = Math.pow(math.divide(value, this.attributes[key].base), 1 / this.attributes[key].power);
                                this.parent.scale = newScale;
                            }
                        }
                    )
                });
            });

            this.sizes.forEach(size => {
                if (size.default === true) {
                    this.views[this.defaultView].height = size.height;
                    this.size = size;
                }
            });

            if (this.size === undefined && this.sizes.length > 0) {
                this.views[this.defaultView].height = this.sizes[0].height;
                this.size = this.sizes[0];
                console.warn("No default size set for " + info.name);
            } else if (this.sizes.length == 0) {
                this.sizes = [
                    {
                        name: "Normal",
                        height: this.views[this.defaultView].height
                    }
                ];
                this.size = this.sizes[0];
            }

            this.desc = {};

            Object.entries(this.info).forEach(([key, value]) => {
                Object.defineProperty(
                    this.desc,
                    key,
                    {
                        get: function () {
                            let text = value.text;

                            if (entity.views[entity.view].info) {
                                if (entity.views[entity.view].info[key]) {
                                    text = combineInfo(text, entity.views[entity.view].info[key]);
                                }
                            }

                            if (entity.size.info) {
                                if (entity.size.info[key]) {
                                    text = combineInfo(text, entity.size.info[key]);
                                }
                            }

                            return { title: value.title, text: text };
                        }
                    }
                )
            });

            delete this.init;
            return this;
        }
    }.init();

    return entityTemplate;
}

function combineInfo(existing, next) {
    switch (next.mode) {
        case "replace":
            return next.text;
        case "prepend":
            return next.text + existing;
        case "append":
            return existing + next.text;
    }

    return existing;
}

function clickDown(target, x, y) {
    clicked = target;
    const rect = target.getBoundingClientRect();
    let entX = document.querySelector("#entities").getBoundingClientRect().x;
    let entY = document.querySelector("#entities").getBoundingClientRect().y;
    dragOffsetX = x - rect.left + entX;
    dragOffsetY = y - rect.top + entY;
    clickTimeout = setTimeout(() => { dragging = true }, 200)
    target.classList.add("no-transition");
}

// could we make this actually detect the menu area?

function hoveringInDeleteArea(e) {
    return e.clientY < document.body.clientHeight / 10;
}

function clickUp(e) {
    clearTimeout(clickTimeout);

    if (clicked) {
        if (dragging) {
            dragging = false;

            if (hoveringInDeleteArea(e)) {
                removeEntity(clicked);
                document.querySelector("#menubar").classList.remove("hover-delete");
            }
        } else {
            select(clicked);
        }
        clicked.classList.remove("no-transition");
        clicked = null;
    }

}

function deselect() {
    if (selected) {
        selected.classList.remove("selected");
    }

    document.getElementById("options-selected-entity-none").selected = "selected";

    clearAttribution();

    selected = null;
    clearViewList();
    clearEntityOptions();
    clearViewOptions();

    document.querySelector("#delete-entity").disabled = true;

    document.querySelector("#grow").disabled = true;
    document.querySelector("#shrink").disabled = true;
    document.querySelector("#fit").disabled = true;
}

function select(target) {
    deselect();
    selected = target;
    selectedEntity = entities[target.dataset.key];

    document.getElementById("options-selected-entity-" + target.dataset.key).selected = "selected";

    selected.classList.add("selected");

    displayAttribution(selectedEntity.views[selectedEntity.view].image.source);

    configViewList(selectedEntity, selectedEntity.view);
    configEntityOptions(selectedEntity, selectedEntity.view);
    configViewOptions(selectedEntity, selectedEntity.view);

    document.querySelector("#delete-entity").disabled = false;

    document.querySelector("#grow").disabled = false;
    document.querySelector("#shrink").disabled = false;
    document.querySelector("#fit").disabled = false;
}

function configViewList(entity, selectedView) {
    const list = document.querySelector("#entity-view");

    list.innerHTML = "";

    list.style.display = "block";

    Object.keys(entity.views).forEach(view => {
        const option = document.createElement("option");
        option.innerText = entity.views[view].name;
        option.value = view;

        if (view === selectedView) {
            option.selected = true;
        }
        list.appendChild(option);
    });
}

function clearViewList() {
    const list = document.querySelector("#entity-view");

    list.innerHTML = "";
    list.style.display = "none";
}

function updateWorldOptions(entity, view) {
    const heightInput = document.querySelector("#options-height-value");
    const heightSelect = document.querySelector("#options-height-unit");

    const converted = config.height.toNumber(heightSelect.value);

    setNumericInput(heightInput, converted);
}

function configEntityOptions(entity, view) {
    const holder = document.querySelector("#options-entity");

    document.querySelector("#entity-category-header").style.display = "block";
    document.querySelector("#entity-category").style.display = "block";

    holder.innerHTML = "";

    const scaleLabel = document.createElement("div");
    scaleLabel.classList.add("options-label");
    scaleLabel.innerText = "Scale";

    const scaleRow = document.createElement("div");
    scaleRow.classList.add("options-row");

    const scaleInput = document.createElement("input");
    scaleInput.classList.add("options-field-numeric");
    scaleInput.id = "options-entity-scale";

    scaleInput.addEventListener("change", e => {
        entity.scale = e.target.value == 0 ? 1 : e.target.value;
        entity.dirty = true;
        if (config.autoFit) {
            fitWorld();
        } else {
            updateSizes(true);
        }
        updateEntityOptions(entity, view);
        updateViewOptions(entity, view);
    });

    scaleInput.addEventListener("keydown", e => {
        e.stopPropagation();
    })

    scaleInput.setAttribute("min", 1);
    scaleInput.setAttribute("type", "number");
    setNumericInput(scaleInput, entity.scale);

    scaleRow.appendChild(scaleInput);
    holder.appendChild(scaleLabel);
    holder.appendChild(scaleRow);

    const nameLabel = document.createElement("div");
    nameLabel.classList.add("options-label");
    nameLabel.innerText = "Name";

    const nameRow = document.createElement("div");
    nameRow.classList.add("options-row");

    const nameInput = document.createElement("input");
    nameInput.classList.add("options-field-text");
    nameInput.value = entity.name;

    nameInput.addEventListener("input", e => {
        entity.name = e.target.value;
        entity.dirty = true;
        updateSizes(true);
    })

    nameInput.addEventListener("keydown", e => {
        e.stopPropagation();
    })

    nameRow.appendChild(nameInput);

    holder.appendChild(nameLabel);
    holder.appendChild(nameRow);

    const defaultHolder = document.querySelector("#options-entity-defaults");

    defaultHolder.innerHTML = "";

    entity.sizes.forEach(defaultInfo => {
        const button = document.createElement("button");
        button.classList.add("options-button");

        button.innerText = defaultInfo.name;

        button.addEventListener("click", e => {
            entity.views[entity.defaultView].height = defaultInfo.height;
            entity.dirty = true;
            updateEntityOptions(entity, entity.view);
            updateViewOptions(entity, entity.view);
            if (!checkFitWorld()) {
                updateSizes(true);
            }

        });

        defaultHolder.appendChild(button);
    });

    document.querySelector("#options-order-display").innerText = entity.priority;
    document.querySelector("#options-ordering").style.display = "flex";
}

function updateEntityOptions(entity, view) {
    const scaleInput = document.querySelector("#options-entity-scale");
    setNumericInput(scaleInput, entity.scale);

    document.querySelector("#options-order-display").innerText = entity.priority;
}

function clearEntityOptions() {
    document.querySelector("#entity-category-header").style.display = "none";
    document.querySelector("#entity-category").style.display = "none";
    /*
    const holder = document.querySelector("#options-entity");

    holder.innerHTML = "";

    document.querySelector("#options-entity-defaults").innerHTML = "";
    document.querySelector("#options-ordering").style.display = "none";
    document.querySelector("#options-ordering").style.display = "none";*/
}

function configViewOptions(entity, view) {
    const holder = document.querySelector("#options-view");

    document.querySelector("#view-category-header").style.display = "block";
    document.querySelector("#view-category").style.display = "block";

    holder.innerHTML = "";

    Object.entries(entity.views[view].attributes).forEach(([key, val]) => {
        const label = document.createElement("div");
        label.classList.add("options-label");
        label.innerText = val.name;

        holder.appendChild(label);

        const row = document.createElement("div");
        row.classList.add("options-row");

        holder.appendChild(row);

        const input = document.createElement("input");
        input.classList.add("options-field-numeric");
        input.id = "options-view-" + key + "-input";
        input.setAttribute("type", "number");
        input.setAttribute("min", 1);

        setNumericInput(input, entity.views[view][key].value);

        const select = document.createElement("select");
        select.classList.add("options-field-unit");
        select.id = "options-view-" + key + "-select"

        unitChoices[val.type].forEach(name => {
            const option = document.createElement("option");
            option.innerText = name;
            select.appendChild(option);
        });


        input.addEventListener("change", e => {
            const value = input.value == 0 ? 1 : input.value;
            entity.views[view][key] = math.unit(value, select.value);
            entity.dirty = true;
            if (config.autoFit) {
                fitWorld();
            } else {
                updateSizes(true);
            }
            updateEntityOptions(entity, view);
            updateViewOptions(entity, view, key);
        });

        input.addEventListener("keydown", e => {
            e.stopPropagation();
        })

        select.setAttribute("oldUnit", select.value);

        // TODO does this ever cause a change in the world?
        select.addEventListener("input", e => {
            const value = input.value == 0 ? 1 : input.value;
            const oldUnit = select.getAttribute("oldUnit");
            entity.views[entity.view][key] = math.unit(value, oldUnit).to(select.value);
            entity.dirty = true;
            setNumericInput(input, entity.views[entity.view][key].toNumber(select.value));

            select.setAttribute("oldUnit", select.value);

            if (config.autoFit) {
                fitWorld();
            } else {
                updateSizes(true);
            }

            updateEntityOptions(entity, view);
            updateViewOptions(entity, view, key);
        });

        row.appendChild(input);
        row.appendChild(select);
    });

}

function updateViewOptions(entity, view, changed) {
    Object.entries(entity.views[view].attributes).forEach(([key, val]) => {
        if (key != changed) {
            const input = document.querySelector("#options-view-" + key + "-input");
            const select = document.querySelector("#options-view-" + key + "-select");

            const currentUnit = select.value;
            const convertedAmount = entity.views[view][key].toNumber(currentUnit);
            setNumericInput(input, convertedAmount);
        }

    });
}

function setNumericInput(input, value, round = 3) {
    input.value = math.round(value, round);
}

function getSortedEntities() {
    return Object.keys(entities).sort((a, b) => {
        const entA = entities[a];
        const entB = entities[b];
        const viewA = entA.view;
        const viewB = entB.view;
        const heightA = entA.views[viewA].height.to("meter").value;
        const heightB = entB.views[viewB].height.to("meter").value;
        return heightA - heightB;
    });
}

function clearViewOptions() {
    document.querySelector("#view-category-header").style.display = "none";
    document.querySelector("#view-category").style.display = "none";
}

// this is a crime against humanity, and also stolen from
// stack overflow
// https://stackoverflow.com/questions/38487569/click-through-png-image-only-if-clicked-coordinate-is-transparent

const testCanvas = document.createElement("canvas");
testCanvas.id = "test-canvas";

const testCtx = testCanvas.getContext("2d");
function testClick(event) {

    // oh my god I can't believe I'm doing this

    const target = event.target;
    if (navigator.userAgent.indexOf("Firefox") != -1) {
        clickDown(target.parentElement, event.clientX, event.clientY);
        return;
    }

    // Get click coordinates

    let w = target.width;
    let h = target.height;
    let ratioW = 1, ratioH = 1;

    // Limit the size of the canvas so that very large images don't cause problems)
    if (w > 1000) {
        ratioW = w / 1000;
        w /= ratioW;
        h /= ratioW;
    }
    if (h > 1000) {
        ratioH = h / 1000;
        w /= ratioH;
        h /= ratioH;
    }

    const ratio = ratioW * ratioH;

    var x = event.clientX - target.getBoundingClientRect().x,
        y = event.clientY - target.getBoundingClientRect().y,
        alpha;
    testCtx.canvas.width = w;
    testCtx.canvas.height = h;

    // Draw image to canvas
    // and read Alpha channel value
    testCtx.drawImage(target, 0, 0, w, h);
    alpha = testCtx.getImageData(Math.floor(x / ratio), Math.floor(y / ratio), 1, 1).data[3]; // [0]R [1]G [2]B [3]A
    // If pixel is transparent,
    // retrieve the element underneath and trigger its click event
    if (alpha === 0) {
        const oldDisplay = target.style.display;
        target.style.display = "none";
        const newTarget = document.elementFromPoint(event.clientX, event.clientY);
        newTarget.dispatchEvent(new MouseEvent(event.type, {
            "clientX": event.clientX,
            "clientY": event.clientY
        }));
        target.style.display = oldDisplay;
    } else {
        clickDown(target.parentElement, event.clientX, event.clientY);
    }
}

function arrangeEntities(order) {
    let x = 0.1;

    order.forEach(key => {
        document.querySelector("#entity-" + key).dataset.x = x;
        x += 0.8 / (order.length - 1);
    });

    updateSizes();
}

function removeAllEntities() {
    Object.keys(entities).forEach(key => {
        removeEntity(document.querySelector("#entity-" + key));
    });
}

function clearAttribution() {
    document.querySelector("#attribution-category-header").style.display = "none";
    document.querySelector("#options-attribution").style.display = "none";
}

function displayAttribution(file) {
    document.querySelector("#attribution-category-header").style.display = "block";
    document.querySelector("#options-attribution").style.display = "inline";
    const authors = authorsOfFull(file);
    const owners = ownersOfFull(file);
    const source = sourceOf(file);

    const authorHolder = document.querySelector("#options-attribution-authors");
    const ownerHolder = document.querySelector("#options-attribution-owners");
    const sourceHolder = document.querySelector("#options-attribution-source");

    if (authors === []) {
        const div = document.createElement("div");
        div.innerText = "Unknown";
        authorHolder.innerHTML = "";
        authorHolder.appendChild(div);
    } else if (authors === undefined) {
        const div = document.createElement("div");
        div.innerText = "Not yet entered";
        authorHolder.innerHTML = "";
        authorHolder.appendChild(div);
    } else {
        authorHolder.innerHTML = "";

        const list = document.createElement("ul");
        authorHolder.appendChild(list);
        authors.forEach(author => {
            const authorEntry = document.createElement("li");
            if (author.url) {
                const link = document.createElement("a");
                link.href = author.url;
                link.innerText = author.name;
                authorEntry.appendChild(link);
            } else {
                const div = document.createElement("div");
                div.innerText = author.name;
                authorEntry.appendChild(div);
            }
            list.appendChild(authorEntry);
        });

    }

    if (owners === []) {
        const div = document.createElement("div");
        div.innerText = "Unknown";
        ownerHolder.innerHTML = "";
        ownerHolder.appendChild(div);
    } else if (owners === undefined) {
        const div = document.createElement("div");
        div.innerText = "Not yet entered";
        ownerHolder.innerHTML = "";
        ownerHolder.appendChild(div);
    } else {
        ownerHolder.innerHTML = "";

        const list = document.createElement("ul");
        ownerHolder.appendChild(list);
        owners.forEach(owner => {
            const ownerEntry = document.createElement("li");
            if (owner.url) {
                const link = document.createElement("a");
                link.href = owner.url;
                link.innerText = owner.name;
                ownerEntry.appendChild(link);
            } else {
                const div = document.createElement("div");
                div.innerText = owner.name;
                ownerEntry.appendChild(div);
            }
            list.appendChild(ownerEntry);
        });

    }

    if (source === null) {
        const div = document.createElement("div");
        div.innerText = "No link";
        sourceHolder.innerHTML = "";
        sourceHolder.appendChild(div);
    } else if (source === undefined) {
        const div = document.createElement("div");
        div.innerText = "Not yet entered";
        sourceHolder.innerHTML = "";
        sourceHolder.appendChild(div);
    } else {
        sourceHolder.innerHTML = "";
        const link = document.createElement("a");
        link.style.display = "block";
        link.href = source;
        link.innerText = new URL(source).host;
        sourceHolder.appendChild(link);
    }
}

function removeEntity(element) {
    if (selected == element) {
        deselect();
    }

    const option = document.querySelector("#options-selected-entity-" + element.dataset.key);
    option.parentElement.removeChild(option);

    delete entities[element.dataset.key];
    const bottomName = document.querySelector("#bottom-name-" + element.dataset.key);
    const topName = document.querySelector("#top-name-" + element.dataset.key);
    bottomName.parentElement.removeChild(bottomName);
    topName.parentElement.removeChild(topName);
    element.parentElement.removeChild(element);

}

function checkEntity(entity) {
    Object.values(entity.views).forEach(view => {
        if (authorsOf(view.image.source) === undefined) {
            console.warn("No authors: " + view.image.source);
        }
    });
}

function displayEntity(entity, view, x, y, selectEntity = false, refresh = false) {
    checkEntity(entity);

    const box = document.createElement("div");
    box.classList.add("entity-box");

    const img = document.createElement("img");
    img.classList.add("entity-image");
    img.addEventListener("dragstart", e => {
        e.preventDefault();
    });

    const nameTag = document.createElement("div");
    nameTag.classList.add("entity-name");
    nameTag.innerText = entity.name;
    box.appendChild(img);
    box.appendChild(nameTag);

    const image = entity.views[view].image;
    img.src = image.source;

    if (image.bottom !== undefined) {
        img.style.setProperty("--offset", ((-1 + image.bottom) * 100) + "%")
    } else {
        img.style.setProperty("--offset", ((-1) * 100) + "%")
    }

    box.dataset.x = x;
    box.dataset.y = y;

    img.addEventListener("mousedown", e => { testClick(e); e.stopPropagation() });
    img.addEventListener("touchstart", e => {
        const fakeEvent = {
            target: e.target,
            clientX: e.touches[0].clientX,
            clientY: e.touches[0].clientY
        };
        testClick(fakeEvent);
    });

    const heightBar = document.createElement("div");
    heightBar.classList.add("height-bar");

    box.appendChild(heightBar);

    box.id = "entity-" + entityIndex;
    box.dataset.key = entityIndex;
    entity.view = view;

    entity.priority = 0;
    entities[entityIndex] = entity;
    entity.index = entityIndex;

    const world = document.querySelector("#entities");
    world.appendChild(box);

    const bottomName = document.createElement("div");
    bottomName.classList.add("bottom-name");
    bottomName.id = "bottom-name-" + entityIndex;
    bottomName.innerText = entity.name;

    bottomName.addEventListener("click", () => select(box));

    world.appendChild(bottomName);

    const topName = document.createElement("div");
    topName.classList.add("top-name");
    topName.id = "top-name-" + entityIndex;
    topName.innerText = entity.name;

    topName.addEventListener("click", () => select(box));

    world.appendChild(topName);

    const entityOption = document.createElement("option");
    entityOption.id = "options-selected-entity-" + entityIndex;
    entityOption.value = entityIndex;
    entityOption.innerText = entity.name;

    document.getElementById("options-selected-entity").appendChild(entityOption);
    entityIndex += 1;
    if (config.autoFit) {
        fitWorld();
    }

    if (selectEntity)
        select(box);

    entity.dirty = true;

    if (refresh)
        updateSizes(true);
}


window.onblur = function () {
    altHeld = false;
    shiftHeld = false;
}

window.onfocus = function () {
    window.dispatchEvent(new Event("keydown"));
}

// thanks to https://developers.google.com/web/fundamentals/native-hardware/fullscreen

function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    }
    else {
        cancelFullScreen.call(doc);
    }
}

function handleResize() {
    const oldCanvasWidth = canvasWidth;
    entityX = document.querySelector("#entities").getBoundingClientRect().x;
    canvasWidth = document.querySelector("#display").clientWidth - 100;
    canvasHeight = document.querySelector("#display").clientHeight - 50;

    const change = oldCanvasWidth / canvasWidth;

    doHorizReposition(change);

    updateSizes();
}

function doHorizReposition(change) {
    Object.keys(entities).forEach(key => {
        const element = document.querySelector("#entity-" + key);
        const x = element.dataset.x;
        element.dataset.x = (x - 0.5) * change + 0.5;
    });
}

function prepareMenu() {

    const menubar = document.querySelector("#popout-menu");

    [
        [
            {
                name: "Show/hide sidebar",
                id: "menu-toggle-sidebar",
                icon: "fas fa-chevron-circle-down",
                rotates: true
            },
            {
                name: "Fullscreen",
                id: "menu-fullscreen",
                icon: "fas fa-compress"
            }
        ],
        [
            {
                name: "Clear",
                id: "menu-clear",
                icon: "fas fa-file"
            }
        ],
        [
            {
                name: "Sort by height",
                id: "menu-order-height",
                icon: "fas fa-sort-numeric-up"
            }
        ],
        [
            {
                name: "Permalink",
                id: "menu-permalink",
                icon: "fas fa-link"
            },
            {
                name: "Export to clipboard",
                id: "menu-export",
                icon: "fas fa-share"
            },
            {
                name: "Import from clipboard",
                id: "menu-import",
                icon: "fas fa-share"
            },
            {
                name: "Save",
                id: "menu-save",
                icon: "fas fa-download"
            },
            {
                name: "Load",
                id: "menu-load",
                icon: "fas fa-upload"
            },
            {
                name: "Load Autosave",
                id: "menu-load-autosave",
                icon: "fas fa-redo"
            }
        ]
    ].forEach(group => {
        // we no longer group things, so I'll just ignore the groups
        // for now
        group.forEach(entry => {
            const buttonHolder = document.createElement("div");
            buttonHolder.classList.add("menu-button-holder");
            const button = document.createElement("button");
            button.id = entry.id;
            button.classList.add("menu-button");
            const icon = document.createElement("i");
            icon.classList.add(...entry.icon.split(" "));

            if (entry.rotates) {
                icon.classList.add("rotate-backward", "transitions");
            }

            const actionText = document.createElement("span");
            actionText.innerText = entry.name;
            actionText.classList.add("menu-text");

            const srText = document.createElement("span");
            srText.classList.add("sr-only");
            srText.innerText = entry.name;

            button.appendChild(icon);
            button.appendChild(srText);

            buttonHolder.appendChild(button);
            buttonHolder.appendChild(actionText);
            menubar.appendChild(buttonHolder);
        });
    });

    if (checkHelpDate()) {
        document.querySelector("#open-help").classList.add("highlighted");
    }
}

const lastHelpChange = 1587679987757;

function checkHelpDate() {
    try {
        const old = localStorage.getItem("help-viewed");

        if (old === null || old < lastHelpChange) {
            return true;
        }

        return false;
    } catch {
        console.warn("Could not set the help-viewed date");
        return false;
    }
}

function setHelpDate() {
    try {
        localStorage.setItem("help-viewed", Date.now());
    } catch {
        console.warn("Could not set the help-viewed date");
    }
}

function doScroll() {
    document.querySelectorAll(".entity-box").forEach(element => {
        element.dataset.x = parseFloat(element.dataset.x) + scrollDirection / 180;
    });
    updateSizes();
    scrollDirection *= 1.05;
}

function doZoom() {
    const oldHeight = config.height;

    setWorldHeight(oldHeight, math.multiply(oldHeight, 1 + zoomDirection / 10));
    zoomDirection *= 1.05;
}

function doSize() {
    if (selected) {
        const entity = entities[selected.dataset.key];
        const oldHeight = entity.views[entity.view].height;
        entity.views[entity.view].height = math.multiply(oldHeight, 1 + sizeDirection / 20);
        entity.dirty = true;
        updateEntityOptions(entity, entity.view);
        updateViewOptions(entity, entity.view);
        updateSizes(true);
        sizeDirection *= 1.05;

        const ownHeight = entity.views[entity.view].height.toNumber("meters");
        const worldHeight = config.height.toNumber("meters");

        console.log(ownHeight, worldHeight)
        if (ownHeight > worldHeight) {
            setWorldHeight(config.height, entity.views[entity.view].height)
        } else if (ownHeight * 10 < worldHeight) {
            setWorldHeight(config.height, math.multiply(entity.views[entity.view].height, 10));
        }
    }
}


document.addEventListener("DOMContentLoaded", () => {
    prepareMenu();
    prepareEntities();

    document.querySelector("#copy-screenshot").addEventListener("click", e => {
        copyScreenshot();
        toast("Copied to clipboard!");
    });

    document.querySelector("#save-screenshot").addEventListener("click", e => {
        saveScreenshot();
    });
    document.querySelector("#toggle-menu").addEventListener("click", e => {
        const popoutMenu = document.querySelector("#popout-menu");
        if (popoutMenu.classList.contains("visible")) {
            popoutMenu.classList.remove("visible");
        } else {
            const rect = e.target.getBoundingClientRect();
            popoutMenu.classList.add("visible");
            popoutMenu.style.left = rect.x + rect.width + 10 + "px";
            popoutMenu.style.top = rect.y + rect.height + 10 + "px";
        }
        e.stopPropagation();
    });

    document.querySelector("#popout-menu").addEventListener("click", e => {
        e.stopPropagation();
    });

    document.addEventListener("click", e => {
        document.querySelector("#popout-menu").classList.remove("visible");
    });

    window.addEventListener("unload", () => saveScene("autosave"));
    document.querySelector("#options-selected-entity").addEventListener("input", e => {
        if (e.target.value == "none") {
            deselect()
        } else {
            select(document.querySelector("#entity-" + e.target.value));
        }

    });

    document.querySelector("#menu-toggle-sidebar").addEventListener("click", e => {
        const sidebar = document.querySelector("#options");
        if (sidebar.classList.contains("hidden")) {
            sidebar.classList.remove("hidden");
            e.target.classList.remove("rotate-forward");
            e.target.classList.add("rotate-backward");
        } else {
            sidebar.classList.add("hidden");
            e.target.classList.add("rotate-forward");
            e.target.classList.remove("rotate-backward");
        }
        handleResize();
    });

    document.querySelector("#menu-fullscreen").addEventListener("click", toggleFullScreen);

    document.querySelector("#options-show-extra").addEventListener("input", e => {
        document.body.classList[e.target.checked ? "add" : "remove"]("show-extra-options");
    });

    document.querySelector("#options-world-show-names").addEventListener("input", e => {
        document.body.classList[e.target.checked ? "add" : "remove"]("toggle-entity-name");
    });

    document.querySelector("#options-world-show-bottom-names").addEventListener("input", e => {
        document.body.classList[e.target.checked ? "add" : "remove"]("toggle-bottom-name");
    });

    document.querySelector("#options-world-show-top-names").addEventListener("input", e => {
        document.body.classList[e.target.checked ? "add" : "remove"]("toggle-top-name");
    });

    document.querySelector("#options-world-show-height-bars").addEventListener("input", e => {
        document.body.classList[e.target.checked ? "add" : "remove"]("toggle-height-bars");
    });

    document.querySelector("#options-world-show-entity-glow").addEventListener("input", e => {
        document.body.classList[e.target.checked ? "add" : "remove"]("toggle-entity-glow");
    });

    document.querySelector("#options-world-show-bottom-cover").addEventListener("input", e => {
        document.body.classList[e.target.checked ? "add" : "remove"]("toggle-bottom-cover");
    });

    document.querySelector("#options-world-show-scale").addEventListener("input", e => {
        document.body.classList[e.target.checked ? "add" : "remove"]("toggle-scale");
    });

    document.querySelector("#options-order-forward").addEventListener("click", e => {
        if (selected) {
            entities[selected.dataset.key].priority += 1;
        }
        document.querySelector("#options-order-display").innerText = entities[selected.dataset.key].priority;
        updateSizes();
    });

    document.querySelector("#options-order-back").addEventListener("click", e => {
        if (selected) {
            entities[selected.dataset.key].priority -= 1;
        }
        document.querySelector("#options-order-display").innerText = entities[selected.dataset.key].priority;
        updateSizes();
    });

    const sceneChoices = document.querySelector("#scene-choices");

    Object.entries(scenes).forEach(([id, scene]) => {
        const option = document.createElement("option");
        option.innerText = id;
        option.value = id;
        sceneChoices.appendChild(option);
    });

    document.querySelector("#load-scene").addEventListener("click", e => {
        const chosen = sceneChoices.value;
        removeAllEntities();
        scenes[chosen]();
    });
    entityX = document.querySelector("#entities").getBoundingClientRect().x;
    canvasWidth = document.querySelector("#display").clientWidth - 100;
    canvasHeight = document.querySelector("#display").clientHeight - 50;

    document.querySelector("#open-help").addEventListener("click", e => {
        setHelpDate();
        document.querySelector("#open-help").classList.remove("highlighted");
        document.querySelector("#help").classList.add("visible");
    });


    document.querySelector("#close-help").addEventListener("click", e => {
        document.querySelector("#help").classList.remove("visible");
    });

    document.querySelector("#options-height-value").addEventListener("change", e => {
        updateWorldHeight();
    })

    document.querySelector("#options-height-value").addEventListener("keydown", e => {
        e.stopPropagation();
    })

    const unitSelector = document.querySelector("#options-height-unit");

    unitChoices.length.forEach(lengthOption => {
        const option = document.createElement("option");

        option.innerText = lengthOption;
        option.value = lengthOption;

        if (lengthOption === "meters") {
            option.selected = true;
        }

        unitSelector.appendChild(option);
    });

    unitSelector.setAttribute("oldUnit", "meters");

    unitSelector.addEventListener("input", e => {
        checkFitWorld();
        const scaleInput = document.querySelector("#options-height-value");
        const newVal = math.unit(scaleInput.value, unitSelector.getAttribute("oldUnit")).toNumber(e.target.value);
        setNumericInput(scaleInput, newVal);
        updateWorldHeight();
        unitSelector.setAttribute("oldUnit", unitSelector.value);
    });

    param = new URL(window.location.href).searchParams.get("scene");

    if (param === null) {
        scenes["Default"]();
    }

    else {
        try {
            const data = JSON.parse(b64DecodeUnicode(param));
            if (data.entities === undefined) {
                return;
            }
            if (data.world === undefined) {
                return;
            }

            importScene(data);
        } catch (err) {
            console.error(err);
            scenes["Default"]();

            // probably wasn't valid data 
        }
    }
    document.querySelector("#world").addEventListener("wheel", e => {


        if (shiftHeld) {
            if (selected) {
                const dir = e.deltaY > 0 ? 10 / 11 : 11 / 10;
                const entity = entities[selected.dataset.key];
                entity.views[entity.view].height = math.multiply(entity.views[entity.view].height, dir);
                entity.dirty = true;
                updateEntityOptions(entity, entity.view);
                updateViewOptions(entity, entity.view);
                updateSizes(true);
            } else {
                document.querySelectorAll(".entity-box").forEach(element => {
                    element.dataset.x = parseFloat(element.dataset.x) + (e.deltaY < 0 ? 0.1 : -0.1);
                });
                updateSizes();
            }

        } else {
            const dir = e.deltaY < 0 ? 10 / 11 : 11 / 10;
            setWorldHeight(config.height, math.multiply(config.height, dir));
            updateWorldOptions();
        }
        checkFitWorld();
    })
    document.querySelector("body").appendChild(testCtx.canvas);

    updateSizes();

    world.addEventListener("mousedown", e => deselect());
    document.querySelector("#entities").addEventListener("mousedown", deselect);
    document.querySelector("#display").addEventListener("mousedown", deselect);
    document.addEventListener("mouseup", e => clickUp(e));
    document.addEventListener("touchend", e => {
        const fakeEvent = {
            target: e.target,
            clientX: e.changedTouches[0].clientX,
            clientY: e.changedTouches[0].clientY
        };
        clickUp(fakeEvent);
    });

    document.querySelector("#entity-view").addEventListener("input", e => {
        const entity = entities[selected.dataset.key];
        entity.view = e.target.value;

        const image = entities[selected.dataset.key].views[e.target.value].image;
        selected.querySelector(".entity-image").src = image.source;

        displayAttribution(image.source);

        if (image.bottom !== undefined) {
            selected.querySelector(".entity-image").style.setProperty("--offset", ((-1 + image.bottom) * 100) + "%")
        } else {
            selected.querySelector(".entity-image").style.setProperty("--offset", ((-1) * 100) + "%")
        }
        updateSizes();
        updateEntityOptions(entities[selected.dataset.key], e.target.value);
        updateViewOptions(entities[selected.dataset.key], e.target.value);
    });

    clearViewList();

    document.querySelector("#menu-clear").addEventListener("click", e => {
        removeAllEntities();
    });

    document.querySelector("#delete-entity").disabled = true;
    document.querySelector("#delete-entity").addEventListener("click", e => {
        if (selected) {
            removeEntity(selected);
            selected = null;
        }
    });

    document.querySelector("#menu-order-height").addEventListener("click", e => {
        const order = Object.keys(entities).sort((a, b) => {
            const entA = entities[a];
            const entB = entities[b];
            const viewA = entA.view;
            const viewB = entB.view;
            const heightA = entA.views[viewA].height.to("meter").value;
            const heightB = entB.views[viewB].height.to("meter").value;
            return heightA - heightB;
        });

        arrangeEntities(order);
    });

    // TODO: write some generic logic for this lol

    document.querySelector("#scroll-left").addEventListener("mousedown", e => {
        scrollDirection = 1;
        clearInterval(scrollHandle);
        scrollHandle = setInterval(doScroll, 1000 / 20);
        e.stopPropagation();
    });

    document.querySelector("#scroll-right").addEventListener("mousedown", e => {
        scrollDirection = -1;
        clearInterval(scrollHandle);
        scrollHandle = setInterval(doScroll, 1000 / 20);
        e.stopPropagation();
    });

    document.querySelector("#scroll-left").addEventListener("touchstart", e => {
        scrollDirection = 1;
        clearInterval(scrollHandle);
        scrollHandle = setInterval(doScroll, 1000 / 20);
        e.stopPropagation();
    });

    document.querySelector("#scroll-right").addEventListener("touchstart", e => {
        scrollDirection = -1;
        clearInterval(scrollHandle);
        scrollHandle = setInterval(doScroll, 1000 / 20);
        e.stopPropagation();
    });

    document.addEventListener("mouseup", e => {
        clearInterval(scrollHandle);
        scrollHandle = null;
    });

    document.addEventListener("touchend", e => {
        clearInterval(scrollHandle);
        scrollHandle = null;
    });

    document.querySelector("#zoom-in").addEventListener("mousedown", e => {
        zoomDirection = -1;
        clearInterval(zoomHandle);
        zoomHandle = setInterval(doZoom, 1000 / 20);
        e.stopPropagation();
    });

    document.querySelector("#zoom-out").addEventListener("mousedown", e => {
        zoomDirection = 1;
        clearInterval(zoomHandle);
        zoomHandle = setInterval(doZoom, 1000 / 20);
        e.stopPropagation();
    });

    document.querySelector("#zoom-in").addEventListener("touchstart", e => {
        zoomDirection = -1;
        clearInterval(zoomHandle);
        zoomHandle = setInterval(doZoom, 1000 / 20);
        e.stopPropagation();
    });

    document.querySelector("#zoom-out").addEventListener("touchstart", e => {
        zoomDirection = 1;
        clearInterval(zoomHandle);
        zoomHandle = setInterval(doZoom, 1000 / 20);
        e.stopPropagation();
    });

    document.addEventListener("mouseup", e => {
        clearInterval(zoomHandle);
        zoomHandle = null;
    });

    document.addEventListener("touchend", e => {
        clearInterval(zoomHandle);
        zoomHandle = null;
    });

    document.querySelector("#shrink").addEventListener("mousedown", e => {
        sizeDirection = -1;
        clearInterval(sizeHandle);
        sizeHandle = setInterval(doSize, 1000 / 20);
        e.stopPropagation();
    });

    document.querySelector("#grow").addEventListener("mousedown", e => {
        sizeDirection = 1;
        clearInterval(sizeHandle);
        sizeHandle = setInterval(doSize, 1000 / 20);
        e.stopPropagation();
    });

    document.querySelector("#shrink").addEventListener("touchstart", e => {
        sizeDirection = -1;
        clearInterval(sizeHandle);
        sizeHandle = setInterval(doSize, 1000 / 20);
        e.stopPropagation();
    });

    document.querySelector("#grow").addEventListener("touchstart", e => {
        sizeDirection = 1;
        clearInterval(sizeHandle);
        sizeHandle = setInterval(doSize, 1000 / 20);
        e.stopPropagation();
    });

    document.addEventListener("mouseup", e => {
        clearInterval(sizeHandle);
        sizeHandle = null;
    });

    document.addEventListener("touchend", e => {
        clearInterval(sizeHandle);
        sizeHandle = null;
    });

    document.querySelector("#fit").addEventListener("click", e => {
        const x = parseFloat(selected.dataset.x);

        Object.keys(entities).forEach(id => {
            const element = document.querySelector("#entity-" + id);
            const newX = parseFloat(element.dataset.x) - x + 0.5;
            element.dataset.x = newX;
        });

        const entity = entities[selected.dataset.key];
        const height = math.multiply(entity.views[entity.view].height, 1.1);
        setWorldHeight(config.height, height);
    });

    document.querySelector("#fit").addEventListener("mousedown", e => {
        e.stopPropagation();
    });

    document.querySelector("#fit").addEventListener("touchstart", e => {
        e.stopPropagation();
    });

    document.querySelector("#options-world-fit").addEventListener("click", () => fitWorld(true));

    document.querySelector("#options-world-autofit").addEventListener("input", e => {
        config.autoFit = e.target.checked;


        if (config.autoFit) {
            fitWorld();
        }
    });

    document.addEventListener("keydown", e => {
        if (e.key == "Delete") {
            if (selected) {
                removeEntity(selected);
                selected = null;
            }
        }
    })

    document.addEventListener("keydown", e => {
        if (e.key == "Shift") {
            shiftHeld = true;
            e.preventDefault();
        } else if (e.key == "Alt") {
            altHeld = true;
            e.preventDefault();
        }
    });

    document.addEventListener("keyup", e => {
        if (e.key == "Shift") {
            shiftHeld = false;
            e.preventDefault();
        } else if (e.key == "Alt") {
            altHeld = false;
            e.preventDefault();
        }

    });

    window.addEventListener("resize", handleResize);

    // TODO: further investigate why the tool initially starts out with wrong
    // values under certain circumstances (seems to be narrow aspect ratios -
    // maybe the menu bar is animating when it shouldn't)

    setTimeout(handleResize, 250);
    setTimeout(handleResize, 500);
    setTimeout(handleResize, 750);
    setTimeout(handleResize, 1000);


    document.querySelector("#menu-permalink").addEventListener("click", e => {
        linkScene();
    });

    document.querySelector("#menu-export").addEventListener("click", e => {
        copyScene();
    });

    document.querySelector("#menu-import").addEventListener("click", e => {
        pasteScene();
    });

    document.querySelector("#menu-save").addEventListener("click", e => {
        saveScene();
    });

    document.querySelector("#menu-load").addEventListener("click", e => {
        loadScene();
    });

    document.querySelector("#menu-load-autosave").addEventListener("click", e => {
        loadScene("autosave");
    });

    document.addEventListener("paste", e => {

        let index = 0;
        let item = null;
        let found = false;

        for (; index < e.clipboardData.items.length; index++) {
            item = e.clipboardData.items[index];
            if (item.type == "image/png") {
                found = true;
                break;
            }
        }

        if (!found) {
            return;
        }
        
        console.log(item)
        console.log(item.type)

        let url = null;

        const file = item.getAsFile();

        customEntityFromFile(file);
    });

    document.querySelector("#world").addEventListener("dragover", e => {
        e.preventDefault();
    })

    document.querySelector("#world").addEventListener("drop", e => {
        e.preventDefault();
        if (e.dataTransfer.files.length > 0) {
            let entX = document.querySelector("#entities").getBoundingClientRect().x;
            let entY = document.querySelector("#entities").getBoundingClientRect().y;
            let coords = abs2rel({x: e.clientX-entX, y: e.clientY-entY});
            customEntityFromFile(e.dataTransfer.files[0], coords.x, coords.y);
        }
    })
    clearEntityOptions();
    clearViewOptions();
    clearAttribution();
});

function customEntityFromFile(file, x=0.5, y=0.5) {
    file.arrayBuffer().then(buf => {
        arr = new Uint8Array(buf);
        blob = new Blob([arr], {type: file.type });
        url = window.URL.createObjectURL(blob)
        makeCustomEntity(url, x, y);
    });
}

function makeCustomEntity(url, x=0.5, y=0.5) {
    const maker = createEntityMaker(
        {
            name: "Custom Entity"
        },
        {
            custom: {
                attributes: {
                    height: {
                        name: "Height",
                        power: 1,
                        type: "length",
                        base: math.unit(6, "feet")
                    }
                },
                image: {
                    source: url
                },
                name: "Image",
                info: {},
                rename: false
            }
        },
        []
    );

    const entity = maker.constructor();

    entity.scale = config.height.toNumber("feet") / 20;

    entity.ephemeral = true;
    displayEntity(entity, "custom", x, y, true, true);
}
function prepareEntities() {
    availableEntities["buildings"] = makeBuildings();
    availableEntities["characters"] = makeCharacters();
    availableEntities["cities"] = makeCities();
    availableEntities["fiction"] = makeFiction();
    availableEntities["food"] = makeFood();
    availableEntities["landmarks"] = makeLandmarks();
    availableEntities["naturals"] = makeNaturals();
    availableEntities["objects"] = makeObjects();
    availableEntities["pokemon"] = makePokemon();
    availableEntities["species"] = makeSpecies();
    availableEntities["vehicles"] = makeVehicles();

    availableEntities["characters"].sort((x, y) => {
        return x.name.toLowerCase() < y.name.toLowerCase() ? -1 : 1
    });
    const holder = document.querySelector("#spawners");
    const categorySelect = document.createElement("select");
    categorySelect.id = "category-picker";

    holder.appendChild(categorySelect);

    Object.entries(availableEntities).forEach(([category, entityList]) => {
        const select = document.createElement("select");
        select.id = "create-entity-" + category;
        for (let i = 0; i < entityList.length; i++) {
            const entity = entityList[i];
            const option = document.createElement("option");
            option.value = i;
            option.innerText = entity.name;
            select.appendChild(option);

            availableEntitiesByName[entity.name] = entity;
        };

        const button = document.createElement("button");
        button.id = "create-entity-" + category + "-button";

        button.innerHTML = "<i class=\"far fa-plus-square\"></i>";

        button.addEventListener("click", e => {
            const newEntity = entityList[select.value].constructor()
            displayEntity(newEntity, newEntity.defaultView, 0.5, 1, true, true);
        });

        const categoryOption = document.createElement("option");
        categoryOption.value = category
        categoryOption.innerText = category;

        if (category == "characters") {
            categoryOption.selected = true;
            select.classList.add("category-visible");
            button.classList.add("category-visible");
        }

        categorySelect.appendChild(categoryOption);
        holder.appendChild(select);
        holder.appendChild(button);
    });

    console.log("Loaded " + Object.keys(availableEntitiesByName).length + " entities");

    categorySelect.addEventListener("input", e => {
        const oldSelect = document.querySelector("select.category-visible");
        oldSelect.classList.remove("category-visible");
        const oldButton = document.querySelector("button.category-visible");
        oldButton.classList.remove("category-visible");

        const newSelect = document.querySelector("#create-entity-" + e.target.value);
        newSelect.classList.add("category-visible");
        const newButton = document.querySelector("#create-entity-" + e.target.value + "-button");
        newButton.classList.add("category-visible");
    });
}

document.addEventListener("mousemove", (e) => {
    if (clicked) {
        const position = snapRel(abs2rel({ x: e.clientX - dragOffsetX, y: e.clientY - dragOffsetY }));
        clicked.dataset.x = position.x;
        clicked.dataset.y = position.y;
        updateEntityElement(entities[clicked.dataset.key], clicked);

        if (hoveringInDeleteArea(e)) {
            document.querySelector("#menubar").classList.add("hover-delete");
        } else {
            document.querySelector("#menubar").classList.remove("hover-delete");
        }
    }
});

document.addEventListener("touchmove", (e) => {
    if (clicked) {
        e.preventDefault();
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;

        const position = snapRel(abs2rel({ x: x - dragOffsetX, y: y - dragOffsetY }));
        clicked.dataset.x = position.x;
        clicked.dataset.y = position.y;
        updateEntityElement(entities[clicked.dataset.key], clicked);

        // what a hack
        // I should centralize this 'fake event' creation...
        if (hoveringInDeleteArea({ clientY: y })) {
            document.querySelector("#menubar").classList.add("hover-delete");
        } else {
            document.querySelector("#menubar").classList.remove("hover-delete");
        }
    }
}, { passive: false });

function checkFitWorld() {
    if (config.autoFit) {
        fitWorld();
        return true;
    }
    return false;
}

const fitModes = {
    "max": {
        start: 0,
        binop: Math.max,
        final: (total, count) => total
    },
    "arithmetic mean": {
        start: 0,
        binop: math.add,
        final: (total, count) => total / count
    },
    "geometric mean": {
        start: 1,
        binop: math.multiply,
        final: (total, count) => math.pow(total, 1 / count)
    }
}

function fitWorld(manual = false, factor = 1.1) {
    const fitMode = fitModes[config.autoFitMode]
    let max = fitMode.start

    let count = 0;

    Object.entries(entities).forEach(([key, entity]) => {
        const view = entity.view;

        let extra = entity.views[view].image.extra;
        extra = extra === undefined ? 1 : extra;

        max = fitMode.binop(max, math.multiply(extra, entity.views[view].height.toNumber("meter")));
        count += 1;
    });

    max = fitMode.final(max, count)

    max = math.unit(max, "meter")

    if (manual)
        altHeld = true;
    setWorldHeight(config.height, math.multiply(max, factor));
    if (manual)
        altHeld = false;
}

function updateWorldHeight() {
    const unit = document.querySelector("#options-height-unit").value;
    const value = Math.max(0.000000001, document.querySelector("#options-height-value").value);
    const oldHeight = config.height;

    setWorldHeight(oldHeight, math.unit(value, unit));
}

function setWorldHeight(oldHeight, newHeight) {
    worldSizeDirty = true;
    config.height = newHeight.to(document.querySelector("#options-height-unit").value)

    const unit = document.querySelector("#options-height-unit").value;
    setNumericInput(document.querySelector("#options-height-value"), config.height.toNumber(unit));
    Object.entries(entities).forEach(([key, entity]) => {
        const element = document.querySelector("#entity-" + key);
        let newPosition;

        if (!altHeld) {
            newPosition = adjustAbs({ x: element.dataset.x, y: element.dataset.y }, oldHeight, config.height);
        } else {
            newPosition = { x: element.dataset.x, y: element.dataset.y };
        }

        element.dataset.x = newPosition.x;
        element.dataset.y = newPosition.y;
    });

    updateSizes();
}

function loadScene(name = "default") {
    try {
        const data = JSON.parse(localStorage.getItem("macrovision-save-" + name));
        if (data === null) {
            return false;
        }
        importScene(data);
        return true;
    } catch (err) {
        alert("Something went wrong while loading (maybe you didn't have anything saved. Check the F12 console for the error.")
        console.error(err);
        return false;
    }
}

function saveScene(name = "default") {
    try {
        const string = JSON.stringify(exportScene());
        localStorage.setItem("macrovision-save-" + name, string);
    } catch (err) {
        alert("Something went wrong while saving (maybe I don't have localStorage permissions, or exporting failed). Check the F12 console for the error.")
        console.error(err);
    }
}

function deleteScene(name = "default") {
    try {
        localStorage.removeItem("macrovision-save-" + name)
    } catch (err) {
        console.error(err);
    }
}
function exportScene() {
    const results = {};

    results.entities = [];

    Object.entries(entities).filter(([key, entity]) => entity.ephemeral !== true).forEach(([key, entity]) => {
        const element = document.querySelector("#entity-" + key);
        results.entities.push({
            name: entity.identifier,
            scale: entity.scale,
            view: entity.view,
            x: element.dataset.x,
            y: element.dataset.y
        });
    });

    const unit = document.querySelector("#options-height-unit").value;
    results.world = {
        height: config.height.toNumber(unit),
        unit: unit
    }

    results.canvasWidth = canvasWidth;

    return results;
}

// btoa doesn't like anything that isn't ASCII
// great

// thanks to https://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings
// for providing an alternative

function b64EncodeUnicode(str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
}

function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

function linkScene() {
    loc = new URL(window.location);


    window.location = loc.protocol + "//" + loc.host + loc.pathname + "?scene=" + b64EncodeUnicode(JSON.stringify(exportScene()));
}
function copyScene() {
    const results = exportScene();

    navigator.clipboard.writeText(JSON.stringify(results));
}

function pasteScene() {
    try {
        navigator.clipboard.readText().then(text => {
            const data = JSON.parse(text);
            if (data.entities === undefined) {
                return;
            }
            if (data.world === undefined) {
                return;
            }

            importScene(data);
        }).catch(err => alert(err));
    } catch (err) {
        console.error(err);

        // probably wasn't valid data 
    }
}
// TODO - don't just search through every single entity 
// probably just have a way to do lookups directly

function findEntity(name) {
    return availableEntitiesByName[name];
}

function importScene(data) {
    removeAllEntities();

    data.entities.forEach(entityInfo => {
        const entity = findEntity(entityInfo.name).constructor();
        entity.scale = entityInfo.scale
        displayEntity(entity, entityInfo.view, entityInfo.x, entityInfo.y);
    });

    config.height = math.unit(data.world.height, data.world.unit);
    document.querySelector("#options-height-unit").value = data.world.unit;

    if (data.canvasWidth) {
        doHorizReposition(data.canvasWidth / canvasWidth);
    }

    updateSizes();
}

function renderToCanvas() {
    const ctx = document.querySelector("#display").getContext("2d");
    Object.entries(entities).sort((ent1, ent2) => {
        z1 = document.querySelector("#entity-" + ent1[0]).style.zIndex;
        z2 = document.querySelector("#entity-" + ent2[0]).style.zIndex;
        return z1 - z2;
    }).forEach(([id, entity]) => {
        element = document.querySelector("#entity-" + id);
        img = element.querySelector("img");

        let x = parseFloat(element.dataset.x);
        let y = parseFloat(element.dataset.y);

        let coords = rel2abs({x: x, y: y});

        let offset = img.style.getPropertyValue("--offset");
        offset = parseFloat(offset.substring(0, offset.length-1))
        x = coords.x - img.getBoundingClientRect().width/2;
        y = coords.y - img.getBoundingClientRect().height * (-offset/100);

        let xSize = img.getBoundingClientRect().width;
        let ySize = img.getBoundingClientRect().height;

        ctx.drawImage(img, x, y, xSize, ySize);
    });
}

function exportCanvas(callback) {
    /** @type {CanvasRenderingContext2D} */
    const ctx = document.querySelector("#display").getContext("2d");
    const blob = ctx.canvas.toBlob(callback);
}

function generateScreenshot(callback) {
    renderToCanvas();

    /** @type {CanvasRenderingContext2D} */
    const ctx = document.querySelector("#display").getContext("2d");

    ctx.fillStyle = "#555";
    ctx.font = "normal normal lighter 16pt coda";
    ctx.fillText("macrovision.crux.sexy", 10, 25);
    
    exportCanvas(blob => {
        callback(blob);
    });   
}

function copyScreenshot() {
    generateScreenshot(blob => {
        navigator.clipboard.write([
            new ClipboardItem({
                "image/png": blob
            })
        ]);
    });   
    drawScale(false);
}

function saveScreenshot() {
    generateScreenshot(blob => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.setAttribute("download", "macrovision.png");
        a.click();
    });   
    drawScale(false);
}

function toast(msg) {
    div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("toast");

    document.body.appendChild(div);

    setTimeout(() => {
        document.body.removeChild(div);
    }, 5000)
}