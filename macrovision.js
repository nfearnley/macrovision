let selected = null;
let selectedEntity = null;

let entityIndex = 0;

let clicked = null;
let dragging = false;
let clickTimeout = null;
let dragOffsetX = null;
let dragOffsetY = null;

let panning = false;
let panReady = true;
let panOffsetX = null;
let panOffsetY = null;

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

const tagDefs = {
    "anthro": "Anthro",
    "feral": "Feral",
    "taur": "Taur",
    "naga": "Naga",
    "goo": "Goo"
}

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
math.createUnit("multiverse", {
    definition: "1e30 lightyears",
    prefixes: "long"
});
math.createUnit("multiverses", {
    definition: "1e30 lightyears",
    prefixes: "long"
});

math.createUnit("people", {
    definition: "75 liters",
    prefixes: "long"
});
math.createUnit("olympicPools", {
    definition: "2500 m^3",
    prefixes: "long"
});
math.createUnit("oceans", {
    definition: "700000000 km^3",
    prefixes: "long"
});
math.createUnit("earthVolumes", {
    definition: "1.0867813e12 km^3",
    prefixes: "long"
});
math.createUnit("universeVolumes", {
    definition: "4.2137775e+32 lightyears^3",
    prefixes: "long"
});
math.createUnit("multiverseVolumes", {
    definition: "5.2359878e+89 lightyears^3",
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
        "universes",
        "multiverses"
    ],
    area: [
        "meters^2",
        "cm^2",
        "kilometers^2",
        "acres",
        "miles^2"
    ],
    volume: [
        "liters",
        "milliliters",
        "m^3",
        "gallons",
        "people",
        "olympicPools",
        "oceans",
        "earthVolumes",
        "universeVolumes",
        "multiverseVolumes",
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
    x: 0,
    y: 0,
    minLineSize: 100,
    maxLineSize: 150,
    autoFit: false
}

const availableEntities = {

}

const availableEntitiesByName = {

}

const entities = {

}

function constrainRel(coords) {
    const worldWidth = config.height.toNumber("meters") / canvasHeight * canvasWidth;
    const worldHeight = config.height.toNumber("meters");

    if (altHeld) {
        return coords;
    }
    return {
        x: Math.min(Math.max(coords.x, -worldWidth / 2 + config.x), worldWidth / 2 + config.x),
        y: Math.min(Math.max(coords.y, config.y), worldHeight + config.y)
    }
}
function snapRel(coords) {
    return constrainRel({
        x: coords.x,
        y: altHeld ? coords.y : (Math.abs(coords.y - 1) < 0.05 ? 1 : coords.y)
    });
}

function adjustAbs(coords, oldHeight, newHeight) {
    const ratio = math.divide(newHeight, oldHeight);

    const x = coords.x * ratio;
    const y = coords.y * ratio;

    return { x: x, y: y};
}

function pos2pix(coords) {
    const worldWidth = config.height.toNumber("meters") / canvasHeight * canvasWidth;
    const worldHeight = config.height.toNumber("meters");

    const x = ((coords.x - config.x) / worldWidth + 0.5) * canvasWidth + 50;
    const y = (1 - (coords.y - config.y) / worldHeight) * canvasHeight;

    return { x: x, y: y };
}

function pix2pos(coords) {
    const worldWidth = config.height.toNumber("meters") / canvasHeight * canvasWidth;
    const worldHeight = config.height.toNumber("meters");

    const x = (((coords.x - 50) / canvasWidth) - 0.5) * worldWidth + config.x;
    const y = (1 - (coords.y / canvasHeight)) * worldHeight + config.y;

    return { x: x, y: y };
}

function updateEntityElement(entity, element) {
    const position = pos2pix({ x: element.dataset.x, y: element.dataset.y });
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

    if (config.lockYAxis) {
        config.y = 0;
    }

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
        total.value = math.unit(config.y, "meters").toNumber(config.unit);
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

    if (heightPer == 0) {
        console.error("The world size is invalid! Refusing to draw the scale...");
        return;
    }
    heightPer = math.unit(heightPer, document.querySelector("#options-height-unit").value);
    

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
    maker.info = info;
    maker.sizes = sizes;

    maker.constructor = () => makeEntity(info, views, sizes);
    maker.authors = [];
    maker.owners = [];
    maker.nsfw = false;

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

        if (isNsfw(view.image.source)) {
            maker.nsfw = true;
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

                if (view.default) {
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

    if (e.which != 1) {
        return;
    }

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

function deselect(e) {
    if (e !== undefined && e.which != 1) {
        return;
    }
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

        if (isNsfw(entity.views[view].image.source)) {
            option.classList.add("nsfw")
        }

        if (view === selectedView) {
            option.selected = true;

            if (option.classList.contains("nsfw")) {
                list.classList.add("nsfw");
            } else {
                list.classList.remove("nsfw");
            }
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

            if (config.autoFitSize) {
                const x = parseFloat(selected.dataset.x);

                Object.keys(entities).forEach(id => {
                    const element = document.querySelector("#entity-" + id);
                    const newX = parseFloat(element.dataset.x) - x + 0.5;
                    element.dataset.x = newX;
                });
        
                const entity = entities[selected.dataset.key];
                const height = math.multiply(entity.views[entity.view].height, 1.1);
                setWorldHeight(config.height, height);
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

        setNumericInput(input, entity.views[view][key].toNumber(select.value));

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

function setNumericInput(input, value, round = 6) {
    if (typeof value == "string") {
        value = parseFloat(value)
    }
    input.value = value.toPrecision(round);
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
    fitWorld();
    const worldWidth = config.height.toNumber("meters") / canvasHeight * canvasWidth;
    let x = -worldWidth * 0.45 + config.x;
    order.forEach(key => {
        document.querySelector("#entity-" + key).dataset.x = x;
        document.querySelector("#entity-" + key).dataset.y = config.y;
        x += worldWidth * 0.9 / (order.length - 1);
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

    img.addEventListener("mousedown", e => { if (e.which == 1) { testClick(e); if (clicked) { e.stopPropagation() } } });
    img.addEventListener("touchstart", e => {
        const fakeEvent = {
            target: e.target,
            clientX: e.touches[0].clientX,
            clientY: e.touches[0].clientY,
            which:  1
        };
        testClick(fakeEvent);
        if (clicked) { e.stopPropagation() }
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

    if (refresh && config.autoFitAdd) {
        const x = parseFloat(selected.dataset.x);
        const y = parseFloat(selected.dataset.y);

        config.x = x;
        config.y = y;

        const entity = entities[selected.dataset.key];
        const height = math.multiply(entity.views[entity.view].height, 1.1);
        setWorldHeight(config.height, height);
    }
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

    updateSizes();
}

function prepareSidebar() {
    const menubar = document.querySelector("#sidebar-menu");

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
        },
        {
            name: "Clear",
            id: "menu-clear",
            icon: "fas fa-file"
        },
        {
            name: "Sort by height",
            id: "menu-order-height",
            icon: "fas fa-sort-numeric-up"
        },
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
            icon: "fas fa-share",
            classes: ["flipped"]
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
        },
        {
            name: "Add Image",
            id: "menu-add-image",
            icon: "fas fa-camera"
        }
    ].forEach(entry => {
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

        if (entry.classes) {
            entry.classes.forEach(cls => icon.classList.add(cls));
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
}

function checkBodyClass(cls) {
    return document.body.classList.contains(cls);
}
function toggleBodyClass(cls, setting) {
    if (setting) {
        document.body.classList.add(cls);
    } else {
        document.body.classList.remove(cls);
    }
}

const settingsData = {
    "lock-y-axis": {
        name: "Lock Y-Axis",
        desc: "Keep the camera at ground-level",
        type: "toggle",
        default: true,
        get value() {
            return config.lockYAxis;
        },
        set value(param) {
            config.lockYAxis = param;
            if (param) {
                config.y = 0;
                updateSizes();
                document.querySelector("#scroll-up").disabled = true;
                document.querySelector("#scroll-down").disabled = true;
            } else {
                document.querySelector("#scroll-up").disabled = false;
                document.querySelector("#scroll-down").disabled = false;
            }
        }
    },
    "auto-scale": {
        name: "Auto-Size World",
        desc: "Constantly zoom to fit the largest entity",
        type: "toggle",
        default: false,
        get value() {
            return config.autoFit;
        },
        set value(param) {
            config.autoFit = param;
            checkFitWorld();
        }
    },
    "zoom-when-adding": {
        name: "Zoom When Adding",
        desc: "Zoom to fit when you add a new entity",
        type: "toggle",
        default: true,
        get value() {
            return config.autoFitAdd;
        },
        set value(param) {
            config.autoFitAdd = param;
        }
    },
    "zoom-when-sizing": {
        name: "Zoom When Sizing",
        desc: "Zoom to fit when you select an entity's size",
        type: "toggle",
        default: true,
        get value() {
            return config.autoFitSize;
        },
        set value(param) {
            config.autoFitSize = param;
        }
    },
    "names": {
        name: "Show Names",
        desc: "Display names over entities",
        type: "toggle",
        default: true,
        get value() {
            return checkBodyClass("toggle-entity-name");
        },
        set value(param) {
            toggleBodyClass("toggle-entity-name", param);
        }
    },
    "bottom-names": {
        name: "Bottom Names",
        desc: "Display names at the bottom",
        type: "toggle",
        default: false,
        get value() {
            return checkBodyClass("toggle-bottom-name");
        },
        set value(param) {
            toggleBodyClass("toggle-bottom-name", param);
        }
    },
    "top-names": {
        name: "Show Arrows",
        desc: "Point to entities that are much larger than the current view",
        type: "toggle",
        default: false,
        get value() {
            return checkBodyClass("toggle-top-name");
        },
        set value(param) {
            toggleBodyClass("toggle-top-name", param);
        }
    },
    "height-bars": {
        name: "Height Bars",
        desc: "Draw dashed lines to the top of each entity",
        type: "toggle",
        default: false,
        get value() {
            return checkBodyClass("toggle-height-bars");
        },
        set value(param) {
            toggleBodyClass("toggle-height-bars", param);
        }
    },
    "glowing-entities": {
        name: "Glowing Edges",
        desc: "Makes all entities glow",
        type: "toggle",
        default: false,
        get value() {
            return checkBodyClass("toggle-entity-glow");
        },
        set value(param) {
            toggleBodyClass("toggle-entity-glow", param);
        }
    },
    "solid-ground": {
        name: "Solid Ground",
        desc: "Draw solid ground at the y=0 line",
        type: "toggle",
        default: false,
        get value() {
            return checkBodyClass("toggle-bottom-cover");
        },
        set value(param) {
            toggleBodyClass("toggle-bottom-cover", param);
        }
    },
    "show-scale": {
        name: "Show Scale",
        desc: "Show the scale",
        type: "toggle",
        default: true,
        get value() {
            return checkBodyClass("toggle-scale");
        },
        set value(param) {
            toggleBodyClass("toggle-scale", param);
        }
    },
}

function prepareSettings(userSettings) {
    const menubar = document.querySelector("#settings-menu");

    Object.entries(settingsData).forEach(([id, entry]) => {
        const holder = document.createElement("label");
        holder.classList.add("settings-holder");
        
        const input = document.createElement("input");
        input.id = "setting-" + id;

        const name = document.createElement("label");
        name.innerText = entry.name;
        name.classList.add("settings-name");
        name.setAttribute("for", input.id);

        const desc = document.createElement("label");
        desc.innerText = entry.desc;
        desc.classList.add("settings-desc");
        desc.setAttribute("for", input.id);

        if (entry.type == "toggle") {
            input.type = "checkbox";

            input.checked = userSettings[id] === undefined ? entry.default : userSettings[id];
            
            holder.setAttribute("for", input.id);

            input.appendChild(name);
            input.appendChild(desc);
            holder.appendChild(input);
            holder.appendChild(name);
            holder.appendChild(desc);
            menubar.appendChild(holder);

            const update = () => {
                if (input.checked) {
                    holder.classList.add("enabled");
                    holder.classList.remove("disabled");
                } else {
                    holder.classList.remove("enabled");
                    holder.classList.add("disabled");
                }
                
                entry.value = input.checked;
            }
            
            update();

            input.addEventListener("change", update);
        }
    })
}

function prepareMenu() {
    prepareSidebar();

    if (checkHelpDate()) {
        document.querySelector("#open-help").classList.add("highlighted");
    }
}

function getUserSettings() {
    try {
        const settings = JSON.parse(localStorage.getItem("settings"));
        return settings === null ? {} : settings;
    } catch {
        return {};
    }
}

function exportUserSettings() {
    const settings = {};
    Object.entries(settingsData).forEach(([id, entry]) => {
        settings[id] = entry.value;
    });

    return settings;
}

function setUserSettings(settings) {
    try {
        localStorage.setItem("settings", JSON.stringify(settings));
    } catch {
        // :(
    }
}
const lastHelpChange = 1587847743294;

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

function doYScroll() {
    const worldHeight = config.height.toNumber("meters");
    config.y += scrollDirection * worldHeight / 180;
    updateSizes();
    scrollDirection *= 1.05;
}
function doXScroll() {
    const worldWidth = config.height.toNumber("meters") / canvasHeight * canvasWidth;
    config.x += scrollDirection * worldWidth / 180 ;
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
        entity.views[entity.view].height = math.multiply(oldHeight, sizeDirection < 0 ? -1/sizeDirection : sizeDirection);
        entity.dirty = true;
        updateEntityOptions(entity, entity.view);
        updateViewOptions(entity, entity.view);
        updateSizes(true);
        sizeDirection *= 1.01;

        const ownHeight = entity.views[entity.view].height.toNumber("meters");
        const worldHeight = config.height.toNumber("meters");

        if (ownHeight > worldHeight) {
            setWorldHeight(config.height, entity.views[entity.view].height)
        } else if (ownHeight * 10 < worldHeight) {
            setWorldHeight(config.height, math.multiply(entity.views[entity.view].height, 10));
        }
    }
}

function prepareHelp() {
    const toc = document.querySelector("#table-of-contents");
    const holder = document.querySelector("#help-contents-holder");
    document.querySelectorAll("#help-contents h2").forEach(header => {
        const li = document.createElement("li");
        
        li.innerText = header.textContent;

        li.addEventListener("click", e => {
            holder.scrollTop = header.offsetTop;
        });

        toc.appendChild(li);

    });
}

document.addEventListener("DOMContentLoaded", () => {
    prepareMenu();
    prepareEntities();
    prepareHelp();

    document.querySelector("#open-help").addEventListener("click", e => {
        setHelpDate();
        document.querySelector("#help-menu").classList.add("visible");
        document.querySelector("#open-help").classList.remove("highlighted");
    });

    document.querySelector("#close-help").addEventListener("click", e => {
        document.querySelector("#help-menu").classList.remove("visible");
    });

    document.querySelector("#copy-screenshot").addEventListener("click", e => {
        copyScreenshot();
        toast("Copied to clipboard!");
    });

    document.querySelector("#save-screenshot").addEventListener("click", e => {
        saveScreenshot();
    });
    document.querySelector("#toggle-menu").addEventListener("click", e => {
        const popoutMenu = document.querySelector("#sidebar-menu");
        if (popoutMenu.classList.contains("visible")) {
            popoutMenu.classList.remove("visible");
        } else {
            document.querySelectorAll(".popout-menu").forEach(menu => menu.classList.remove("visible"));
            const rect = e.target.getBoundingClientRect();
            popoutMenu.classList.add("visible");
            popoutMenu.style.left = rect.x + rect.width + 10 + "px";
            popoutMenu.style.top = rect.y + rect.height + 10 + "px";
        }
        e.stopPropagation();
    });

    document.querySelector("#sidebar-menu").addEventListener("click", e => {
        e.stopPropagation();
    });

    document.addEventListener("click", e => {
        document.querySelector("#sidebar-menu").classList.remove("visible");
    });


    document.querySelector("#toggle-settings").addEventListener("click", e => {
        const popoutMenu = document.querySelector("#settings-menu");
        if (popoutMenu.classList.contains("visible")) {
            popoutMenu.classList.remove("visible");
        } else {
            document.querySelectorAll(".popout-menu").forEach(menu => menu.classList.remove("visible"));
            const rect = e.target.getBoundingClientRect();
            popoutMenu.classList.add("visible");
            popoutMenu.style.left = rect.x + rect.width + 10 + "px";
            popoutMenu.style.top = rect.y + rect.height + 10 + "px";
        }
        e.stopPropagation();
    });

    document.querySelector("#settings-menu").addEventListener("click", e => {
        e.stopPropagation();
    });

    document.addEventListener("click", e => {
        document.querySelector("#settings-menu").classList.remove("visible");
    });



    window.addEventListener("unload", () => {
        saveScene("autosave");
        setUserSettings(exportUserSettings());
    });

    document.querySelector("#options-selected-entity").addEventListener("input", e => {
        if (e.target.value == "None") {
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
                const worldWidth = config.height.toNumber("meters") / canvasHeight * canvasWidth;
                config.x += (e.deltaY > 0 ? 1 : -1) * worldWidth / 20 ;
                updateSizes();
                updateSizes();
            }

        } else {
            if (config.autoFit) {
                toastRateLimit("Zoom is locked! Check Settings to disable.", "zoom-lock", 1000);
            } else {
                const dir = e.deltaY < 0 ? 10 / 11 : 11 / 10;
                setWorldHeight(config.height, math.multiply(config.height, dir));
                updateWorldOptions();
            }
            
        }
        checkFitWorld();
    })

    document.querySelector("#world").addEventListener("mousedown", e => {
        // only middle mouse clicks
        if (e.which == 2) {
            panning = true;
            panOffsetX = e.clientX;
            panOffsetY = e.clientY;

            Object.keys(entities).forEach(key => {
                document.querySelector("#entity-" + key).classList.add("no-transition");
            });
        }
    });

    document.querySelector("#world").addEventListener("mouseup", e => {
        if (e.which == 2) {
            panning = false;
            Object.keys(entities).forEach(key => {
                document.querySelector("#entity-" + key).classList.remove("no-transition");
            });
        }
    });

    document.querySelector("#world").addEventListener("touchstart", e => {
        panning = true;
        panOffsetX = e.touches[0].clientX;
        panOffsetY = e.touches[0].clientY;
        e.preventDefault();
        Object.keys(entities).forEach(key => {
            document.querySelector("#entity-" + key).classList.add("no-transition");
        });
    });

    document.querySelector("#world").addEventListener("touchend", e => {
        panning = false;
        Object.keys(entities).forEach(key => {
            document.querySelector("#entity-" + key).classList.remove("no-transition");
        });
    });

    document.querySelector("body").appendChild(testCtx.canvas);

    updateSizes();

    world.addEventListener("mousedown", e => deselect(e));
    world.addEventListener("touchstart", e => deselect({
        which: 1,
    }));
    document.querySelector("#entities").addEventListener("mousedown", deselect);
    document.querySelector("#display").addEventListener("mousedown", deselect);
    document.addEventListener("mouseup", e => clickUp(e));
    document.addEventListener("touchend", e => {
        const fakeEvent = {
            target: e.target,
            clientX: e.changedTouches[0].clientX,
            clientY: e.changedTouches[0].clientY,
            which: 1
        };
        clickUp(fakeEvent);
    });

    const viewList = document.querySelector("#entity-view");

    document.querySelector("#entity-view").addEventListener("input", e => {
        const entity = entities[selected.dataset.key];
        entity.view = e.target.value;

        const image = entities[selected.dataset.key].views[e.target.value].image;
        selected.querySelector(".entity-image").src = image.source;

        configViewOptions(entity, entity.view);

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

    document.querySelector("#entity-view").addEventListener("input", e => {
        if (viewList.options[viewList.selectedIndex].classList.contains("nsfw")) {
            viewList.classList.add("nsfw");
        } else {
            viewList.classList.remove("nsfw");
        }
    })

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
        scrollDirection = -1;
        clearInterval(scrollHandle);
        scrollHandle = setInterval(doXScroll, 1000 / 20);
        e.stopPropagation();
    });

    document.querySelector("#scroll-right").addEventListener("mousedown", e => {
        scrollDirection = 1;
        clearInterval(scrollHandle);
        scrollHandle = setInterval(doXScroll, 1000 / 20);
        e.stopPropagation();
    });

    document.querySelector("#scroll-left").addEventListener("touchstart", e => {
        scrollDirection = -1;
        clearInterval(scrollHandle);
        scrollHandle = setInterval(doXScroll, 1000 / 20);
        e.stopPropagation();
    });

    document.querySelector("#scroll-right").addEventListener("touchstart", e => {
        scrollDirection = 1;
        clearInterval(scrollHandle);
        scrollHandle = setInterval(doXScroll, 1000 / 20);
        e.stopPropagation();
    });


    document.querySelector("#scroll-up").addEventListener("mousedown", e => {
        scrollDirection = 1;
        clearInterval(scrollHandle);
        scrollHandle = setInterval(doYScroll, 1000 / 20);
        e.stopPropagation();
    });

    document.querySelector("#scroll-down").addEventListener("mousedown", e => {
        scrollDirection = -1;
        clearInterval(scrollHandle);
        scrollHandle = setInterval(doYScroll, 1000 / 20);
        e.stopPropagation();
    });

    document.querySelector("#scroll-up").addEventListener("touchstart", e => {
        scrollDirection = 1;
        clearInterval(scrollHandle);
        scrollHandle = setInterval(doYScroll, 1000 / 20);
        e.stopPropagation();
    });

    document.querySelector("#scroll-down").addEventListener("touchstart", e => {
        scrollDirection = -1;
        clearInterval(scrollHandle);
        scrollHandle = setInterval(doYScroll, 1000 / 20);
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
        const y = parseFloat(selected.dataset.y);
        config.x = x;
        config.y = y;

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

    document.querySelector("#options-reset-pos-x").addEventListener("click", () => { config.x = 0; updateSizes(); });
    document.querySelector("#options-reset-pos-y").addEventListener("click", () => { config.y = 0; updateSizes(); });

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

    document.querySelector("#menu-add-image").addEventListener("click", e => {
        document.querySelector("#file-upload-picker").click();
    });

    document.querySelector("#file-upload-picker").addEventListener("change", e => {
        if (e.target.files.length > 0) {
            for (let i=0; i<e.target.files.length; i++) {
                customEntityFromFile(e.target.files[i]);
            }
        }
            
    })

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
            let coords = pix2pos({x: e.clientX-entX, y: e.clientY-entY});
            customEntityFromFile(e.dataTransfer.files[0], coords.x, coords.y);
        }
    })
    clearEntityOptions();
    clearViewOptions();
    clearAttribution();

    // we do this last because configuring settings can cause things
    // to happen (e.g. auto-fit)
    prepareSettings(getUserSettings());
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

const filterDefs = {
    none: {
        id: "none",
        name: "No Filter",
        extract: maker => [],
        render: name => name,
        sort: (tag1, tag2) => tag1[1].localeCompare(tag2[1])
    },
    author: {
        id: "author",
        name: "Authors",
        extract: maker => maker.authors ? maker.authors : [],
        render: author => attributionData.people[author].name,
        sort: (tag1, tag2) => tag1[1].localeCompare(tag2[1])
    },
    owner: {
        id: "owner",
        name: "Owners",
        extract: maker => maker.owners ? maker.owners : [],
        render: owner => attributionData.people[owner].name,
        sort: (tag1, tag2) => tag1[1].localeCompare(tag2[1])
    },
    species: {
        id: "species",
        name: "Species",
        extract: maker => maker.info && maker.info.species ? getSpeciesInfo(maker.info.species) : [],
        render: species => speciesData[species].name,
        sort: (tag1, tag2) => tag1[1].localeCompare(tag2[1])
    },
    tags: {
        id: "tags",
        name: "Tags",
        extract: maker => maker.info && maker.info.tags ? maker.info.tags : [],
        render: tag => tagDefs[tag],
        sort: (tag1, tag2) => tag1[1].localeCompare(tag2[1])
    },
    size: {
        id: "size",
        name: "Normal Size",
        extract: maker => maker.sizes && maker.sizes.length > 0 ? Array.from(maker.sizes.reduce((result, size) => {
            if (result && !size.default) {
                return result;
            }
            let meters = size.height.toNumber("meters");
            if (meters < 1e-1) {
                return ["micro"];
            } else if (meters < 1e1) {
                return ["moderate"];
            } else {
                return ["macro"];
            }
        }, null)) : [],
        render: tag => { return {
            "micro": "Micro",
            "moderate": "Moderate",
            "macro": "Macro"
        }[tag]},
        sort: (tag1, tag2) => {
            const order = {
                "micro": 0,
                "moderate": 1,
                "macro": 2
            };

            return order[tag1[0]] - order[tag2[0]];
        }
    },
    allSizes: {
        id: "allSizes",
        name: "Possible Size",
        extract: maker => maker.sizes ? Array.from(maker.sizes.reduce((set, size) => {
            
            const height = size.height;

            let result = Object.entries(sizeCategories).reduce((result, [name, value]) => {
                if (result) {
                    return result;
                } else {
                    if (math.compare(height, value) <= 0) {
                        return name;
                    }
                }
            }, null);

            set.add(result ? result : "infinite");

            return set;
        }, new Set())) : [],
        render: tag => tag[0].toUpperCase() + tag.slice(1),
        sort: (tag1, tag2) => {
            const order = [
                "atomic", "microscopic", "tiny", "small", "moderate", "large", "macro", "megamacro", "planetary", "stellar",
                "galactic", "universal", "omniversal", "infinite"
            ]

            return order.indexOf(tag1[0]) - order.indexOf(tag2[0]);
        }
    }
}

const sizeCategories = {
    "atomic": math.unit(100, "angstroms"),
    "microscopic": math.unit(100, "micrometers"),
    "tiny": math.unit(100, "millimeters"),
    "small": math.unit(1, "meter"),
    "moderate": math.unit(3, "meters"),
    "large": math.unit(10, "meters"),
    "macro": math.unit(300, "meters"),
    "megamacro": math.unit(1000, "kilometers"),
    "planetary": math.unit(10, "earths"),
    "stellar": math.unit(10, "solarradii"),
    "galactic": math.unit(10, "galaxies"),
    "universal": math.unit(10, "universes"),
    "omniversal": math.unit(10, "multiverses")
};

function prepareEntities() {
    availableEntities["buildings"] = makeBuildings();
    availableEntities["characters"] = makeCharacters();
    availableEntities["cities"] = makeCities();
    availableEntities["fiction"] = makeFiction();
    availableEntities["food"] = makeFood();
    availableEntities["landmarks"] = makeLandmarks();
    availableEntities["naturals"] = makeNaturals();
    availableEntities["objects"] = makeObjects();
    availableEntities["dildos"] = makeDildos();
    availableEntities["pokemon"] = makePokemon();
    availableEntities["species"] = makeSpecies();
    availableEntities["vehicles"] = makeVehicles();

    availableEntities["characters"].sort((x, y) => {
        return x.name.toLowerCase() < y.name.toLowerCase() ? -1 : 1
    });
    const holder = document.querySelector("#spawners");
    const filterHolder = document.querySelector("#filters");

    const categorySelect = document.createElement("select");
    categorySelect.id = "category-picker";
    const filterSelect = document.createElement("select");
    filterSelect.id = "filter-picker";

    holder.appendChild(categorySelect);
    filterHolder.appendChild(filterSelect);

    const filterSets = {};

    Object.values(filterDefs).forEach(filter => {
        filterSets[filter.id] = new Set();
    })

    Object.entries(availableEntities).forEach(([category, entityList]) => {
        const select = document.createElement("select");
        select.id = "create-entity-" + category;
        select.classList.add("entity-select");
        for (let i = 0; i < entityList.length; i++) {
            const entity = entityList[i];
            const option = document.createElement("option");
            option.value = i;
            option.innerText = entity.name;
            select.appendChild(option);

            if (entity.nsfw) {
                option.classList.add("nsfw");
            }

            Object.values(filterDefs).forEach(filter => {
                filter.extract(entity).forEach(result => {
                    filterSets[filter.id].add(result);
                });
            });            

            availableEntitiesByName[entity.name] = entity;
        };

        select.addEventListener("change", e => {
            if (select.options[select.selectedIndex].classList.contains("nsfw")) {
                select.classList.add("nsfw");
            } else {
                select.classList.remove("nsfw");
            }
        })

        const button = document.createElement("button");
        button.id = "create-entity-" + category + "-button";
        button.classList.add("entity-button");

        button.innerHTML = "<i class=\"far fa-plus-square\"></i>";

        button.addEventListener("click", e => {
            const newEntity = entityList[select.value].constructor()
            displayEntity(newEntity, newEntity.defaultView, 0, 0, true, true);
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

    Object.values(filterDefs).forEach(filter => {
        const option = document.createElement("option");
        option.innerText = filter.name;
        option.value = filter.id;
        filterSelect.appendChild(option);

        const filterNameSelect = document.createElement("select");
        filterNameSelect.classList.add("filter-select");
        filterNameSelect.id = "filter-" + filter.id;
        filterHolder.appendChild(filterNameSelect);

        const button = document.createElement("button");
        button.classList.add("filter-button");
        button.id = "create-filtered-" + filter.id + "-button";
        filterHolder.appendChild(button);

        const counter = document.createElement("div");
        counter.classList.add("button-counter");
        counter.innerText = "10";
        button.appendChild(counter);
        const i = document.createElement("i");
        i.classList.add("fas");
        i.classList.add("fa-plus");
        button.appendChild(i);

        button.addEventListener("click", e => {
            const makers = Array.from(document.querySelector(".entity-select.category-visible")).filter(element => !element.classList.contains("filtered"));
            const count = makers.length + 2;
            let index = 1;

            if (makers.length > 50) {
                if (!confirm("Really spawn " + makers.length + " things at once?")) {
                    return;
                }
            }

            const worldWidth = config.height.toNumber("meters") / canvasHeight * canvasWidth;

            makers.map(element => {
                const category = document.querySelector("#category-picker").value;
                const maker = availableEntities[category][element.value];
                const entity = maker.constructor()
                displayEntity(entity, entity.view, -worldWidth * 0.45 + config.x + worldWidth * 0.9 * index / (count - 1), config.y);
                index += 1;
            });
            updateSizes(true);
        });

        Array.from(filterSets[filter.id]).map(name => [name, filter.render(name)]).sort(filterDefs[filter.id].sort).forEach(name => {
            const option = document.createElement("option");
            option.innerText = name[1];
            option.value = name[0];
            filterNameSelect.appendChild(option);
        });
        
        filterNameSelect.addEventListener("change", e => {
            updateFilter();
        });
    });

    console.log("Loaded " + Object.keys(availableEntitiesByName).length + " entities");

    categorySelect.addEventListener("input", e => {
        const oldSelect = document.querySelector(".entity-select.category-visible");
        oldSelect.classList.remove("category-visible");
        const oldButton = document.querySelector(".entity-button.category-visible");
        oldButton.classList.remove("category-visible");

        const newSelect = document.querySelector("#create-entity-" + e.target.value);
        newSelect.classList.add("category-visible");
        const newButton = document.querySelector("#create-entity-" + e.target.value + "-button");
        newButton.classList.add("category-visible");

        recomputeFilters();
        updateFilter();
    });

    recomputeFilters();

    filterSelect.addEventListener("input", e => {
        const oldSelect = document.querySelector(".filter-select.category-visible");
        if (oldSelect)
            oldSelect.classList.remove("category-visible");

        const newSelect = document.querySelector("#filter-" + e.target.value);
        if (newSelect)
            newSelect.classList.add("category-visible");

        updateFilter();
    });
}

// Only display authors and owners if they appear
// somewhere in the current entity list
function recomputeFilters() {
    const category = document.querySelector("#category-picker").value;

    const filterSets = {};

    Object.values(filterDefs).forEach(filter => {
        filterSets[filter.id] = new Set();
    });
    
    document.querySelectorAll(".entity-select.category-visible > option").forEach(element => {
        const entity = availableEntities[category][element.value];
        
        Object.values(filterDefs).forEach(filter => {
            filter.extract(entity).forEach(result => {
                filterSets[filter.id].add(result);
            });
        });
    });

    Object.values(filterDefs).forEach(filter => {
        // always show the "none" option
        let found = filter.id == "none";

        document.querySelectorAll("#filter-" + filter.id + " > option").forEach(element => {
            if (filterSets[filter.id].has(element.value) || filter.id == "none") {
                element.classList.remove("filtered");
                element.disabled = false;
                found = true;
            } else {
                element.classList.add("filtered");
                element.disabled = true;
            }
        });


        const filterOption = document.querySelector("#filter-picker > option[value='" + filter.id + "']");
        if (found) {
            filterOption.classList.remove("filtered");
            filterOption.disabled = false;
        } else {
            filterOption.classList.add("filtered");
            filterOption.disabled = true;
        }
    });

    document.querySelector("#filter-picker").value = "none";
    document.querySelector("#filter-picker").dispatchEvent(new Event("input"));
}

function updateFilter() {
    const category = document.querySelector("#category-picker").value;
    const type = document.querySelector("#filter-picker").value;
    const filterKeySelect = document.querySelector(".filter-select.category-visible");

    clearFilter();

    if (!filterKeySelect) {
        return;
    }

    const key = filterKeySelect.value;

    let current = document.querySelector(".entity-select.category-visible").value;
    let replace = false;
    let first = null;

    let count = 0;

    document.querySelectorAll(".entity-select.category-visible > option").forEach(element => {
        let keep = type == "none";

        if (filterDefs[type].extract(availableEntities[category][element.value]).indexOf(key) >= 0) {
            keep = true;
        }

        if (!keep) {
            element.classList.add("filtered");
            element.disabled = true;

            if (current == element.value) {
                replace = true;
            }
        } else {
            count += 1;
            if (!first) {
                first = element.value;
            }
        } 
    });

    const button = document.querySelector(".filter-select.category-visible + button");

    if (button) {
        button.querySelector(".button-counter").innerText = count;
    }

    if (replace) {
        document.querySelector(".entity-select.category-visible").value = first;
        document.querySelector("#create-entity-" + category).dispatchEvent(new Event("change"));
    }
}

function clearFilter() {
    document.querySelectorAll(".entity-select.category-visible > option").forEach(element => {
        element.classList.remove("filtered");
        element.disabled = false;
    });
}

document.addEventListener("mousemove", (e) => {
    if (clicked) {
        const position = snapRel(pix2pos({ x: e.clientX - dragOffsetX, y: e.clientY - dragOffsetY }));
        clicked.dataset.x = position.x;
        clicked.dataset.y = position.y;
        updateEntityElement(entities[clicked.dataset.key], clicked);

        if (hoveringInDeleteArea(e)) {
            document.querySelector("#menubar").classList.add("hover-delete");
        } else {
            document.querySelector("#menubar").classList.remove("hover-delete");
        }
    }
    if (panning && panReady) {
        
        const worldWidth = config.height.toNumber("meters") / canvasHeight * canvasWidth;
        const worldHeight = config.height.toNumber("meters");

        config.x -= (e.clientX - panOffsetX) / canvasWidth * worldWidth;
        config.y += (e.clientY - panOffsetY) / canvasHeight * worldHeight;
        panOffsetX = e.clientX;
        panOffsetY = e.clientY;
        updateSizes();
        panReady = false;
        setTimeout(() => panReady=true, 1000/120);
    }
});

document.addEventListener("touchmove", (e) => {
    if (clicked) {
        e.preventDefault();
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;

        const position = snapRel(pix2pos({ x: x - dragOffsetX, y: y - dragOffsetY }));
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
    if (panning && panReady) {
        
        const worldWidth = config.height.toNumber("meters") / canvasHeight * canvasWidth;
        const worldHeight = config.height.toNumber("meters");

        config.x -= (e.touches[0].clientX - panOffsetX) / canvasWidth * worldWidth;
        config.y += (e.touches[0].clientY - panOffsetY) / canvasHeight * worldHeight;
        panOffsetX = e.touches[0].clientX;
        panOffsetY = e.touches[0].clientY;
        updateSizes();
        panReady = false;
        setTimeout(() => panReady=true, 50);
    }
}, { passive: false });

function checkFitWorld() {
    if (config.autoFit) {
        fitWorld();
        return true;
    }
    return false;
}

function fitWorld(manual = false, factor = 1.1) {
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;

    let count = 0;

    const worldWidth = config.height.toNumber("meters") / canvasHeight * canvasWidth;
    const worldHeight = config.height.toNumber("meters");


    Object.entries(entities).forEach(([key, entity]) => {
        const view = entity.view;

        let extra = entity.views[view].image.extra;
        extra = extra === undefined ? 1 : extra;

        const image = document.querySelector("#entity-" + key + " > .entity-image");
        const x = parseFloat(document.querySelector("#entity-" + key).dataset.x);

        let width = image.width;
        let height = image.height;

        // only really relevant if the images haven't loaded in yet
        if (height == 0) {
            height = 100;
        }
        if (width == 0) {
            width = height;
        }
        const xBottom = x - entity.views[view].height.toNumber("meters") * width / height / 2;
        const xTop = x + entity.views[view].height.toNumber("meters") * width / height / 2;

        const y = parseFloat(document.querySelector("#entity-" + key).dataset.y);
        const yBottom = y;
        const yTop = entity.views[view].height.toNumber("meters") + yBottom;

        minX = Math.min(minX, xBottom);
        maxX = Math.max(maxX, xTop);
        minY = Math.min(minY, yBottom);
        maxY = Math.max(maxY, yTop);

        count += 1;
    });

    let ySize = (maxY - minY) * factor;
    let xSize = (maxX - minX) * factor;

    if (xSize / ySize > worldWidth / worldHeight) {
        ySize *= ((xSize / ySize) / (worldWidth / worldHeight));
    }

    config.x = (maxX + minX) / 2;
    config.y = minY;

    height = math.unit(ySize, "meter")

    setWorldHeight(config.height, math.multiply(height, factor));
}

// TODO why am I doing this
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

        if (altHeld) {
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
        unit: unit,
        x: config.x,
        y: config.y
    }

    results.version = migrationDefs.length;

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

const migrationDefs = [
    /*
    Migration: 0 -> 1
    
    Adds x and y coordinates for the camera
    */

    data => {
        data.world.x = 0;
        data.world.y = 0;
    }
]
    

function migrateScene(data) {
    if (data.version === undefined) {
        alert("This save was created before save versions were tracked. The scene may import incorrectly.");
        console.trace()
        data.version = 0;
    } else if (data.version < migrationDefs.length) {
        migrationDefs[data.version](data);
        data.version += 1;
        migrateScene(data);
    }
}

function importScene(data) {
    removeAllEntities();

    migrateScene(data);

    data.entities.forEach(entityInfo => {
        const entity = findEntity(entityInfo.name).constructor();
        entity.scale = entityInfo.scale
        displayEntity(entity, entityInfo.view, entityInfo.x, entityInfo.y);
    });

    config.height = math.unit(data.world.height, data.world.unit);
    config.x = data.world.x;
    config.y = data.world.y;

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

        let coords = pos2pix({x: x, y: y});

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

const rateLimits = {};

function toast(msg) {
    let div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("toast");

    document.body.appendChild(div);

    setTimeout(() => {
        document.body.removeChild(div);
    }, 5000)
}

function toastRateLimit(msg, key, delay) {
    if (!rateLimits[key]) {
        toast(msg);
        rateLimits[key] = setTimeout(() => {
            delete rateLimits[key]
        }, delay);
    }
}