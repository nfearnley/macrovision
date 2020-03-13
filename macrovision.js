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

const unitChoices = {
    length: [
        "meters",
        "angstroms",
        "millimeters",
        "centimeters",
        "kilometers",
        "inches",
        "feet",
        "stories",
        "miles",
        "AUs",
        "lightyears",
        "parsecs",
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
    minLineSize: 50,
    maxLineSize: 250,
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

function updateEntityElement(entity, element, zIndex) {
    const position = rel2abs({ x: element.dataset.x, y: element.dataset.y });
    const view = entity.view;

    element.style.left = position.x + "px";
    element.style.top = position.y + "px";
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
    bottomName.style.top = "95vh";
    bottomName.innerText = entity.name;

    if (zIndex) {
        element.style.zIndex = zIndex;
    }
}

function updateSizes() {
    drawScale();

    let ordered = Object.entries(entities);

    ordered.sort((e1, e2) => {
        if (e1[1].priority != e2[1].priority) {
            return e2[1].priority - e1[1].priority;
        } else {
            return e1[1].views[e1[1].view].height.toNumber("meters") - e2[1].views[e2[1].view].height.toNumber("meters")
        }
        
    });

    let zIndex = ordered.length;

    ordered.forEach(entity => {
        const element = document.querySelector("#entity-" + entity[0]);
        updateEntityElement(entity[1], element, zIndex);
        zIndex -= 1;
    });


}

function drawScale() {
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

    let pixelsPer = (ctx.canvas.clientHeight - 100) / config.height.value;
    let heightPer = config.height.clone();
    heightPer.value = 1;

    if (pixelsPer < config.minLineSize) {
        heightPer.value /= pixelsPer / config.minLineSize;
        pixelsPer = config.minLineSize;
    }

    if (pixelsPer > config.maxLineSize) {
        heightPer.value /= pixelsPer / config.maxLineSize;
        pixelsPer = config.maxLineSize;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(1, 1);
    ctx.canvas.width = canvas.clientWidth;
    ctx.canvas.height = canvas.clientHeight;

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

function makeEntity(info, views, sizes) {
    const entityTemplate = {
        name: info.name,
        identifier: info.name,
        scale: 1,
        info: info,
        views: views,
        sizes: sizes === undefined ? [] : sizes,
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

    clearAttribution();

    selected = null;
    clearViewList();
    clearEntityOptions();
    clearViewOptions();
}

function select(target) {
    deselect();
    selected = target;
    selectedEntity = entities[target.dataset.key];

    selected.classList.add("selected");
    
    displayAttribution(selectedEntity.views[selectedEntity.view].image.source);

    configViewList(selectedEntity, selectedEntity.view);
    configEntityOptions(selectedEntity, selectedEntity.view);
    configViewOptions(selectedEntity, selectedEntity.view);
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

    heightInput.value = math.round(converted, 3);
}

function configEntityOptions(entity, view) {
    const holder = document.querySelector("#options-entity");

    holder.innerHTML = "";

    const scaleLabel = document.createElement("div");
    scaleLabel.classList.add("options-label");
    scaleLabel.innerText = "Scale";

    const scaleRow = document.createElement("div");
    scaleRow.classList.add("options-row");

    const scaleInput = document.createElement("input");
    scaleInput.classList.add("options-field-numeric");
    scaleInput.id = "options-entity-scale";

    scaleInput.addEventListener("input", e => {
        entity.scale = e.target.value == 0 ? 1 : e.target.value;

        if (config.autoFit) {
            fitWorld();
        }
        updateSizes();
        updateEntityOptions(entity, view);
        updateViewOptions(entity, view);
    });

    scaleInput.setAttribute("min", 1);
    scaleInput.setAttribute("type", "number");
    scaleInput.value = entity.scale;

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
        updateSizes();
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
            updateEntityOptions(entity, view);
            updateViewOptions(entity, view);
            checkFitWorld();
            updateSizes();
        });

        defaultHolder.appendChild(button);
    });

    document.querySelector("#options-order-display").innerText = entity.priority;
    document.querySelector("#options-ordering").style.display = "flex";
}

function updateEntityOptions(entity, view) {
    const scaleInput = document.querySelector("#options-entity-scale");
    scaleInput.value = entity.scale;

    document.querySelector("#options-order-display").innerText = entity.priority;
}

function clearEntityOptions() {
    const holder = document.querySelector("#options-entity");

    holder.innerHTML = "";

    document.querySelector("#options-entity-defaults").innerHTML = "";
    document.querySelector("#options-ordering").style.display = "none";
}

function configViewOptions(entity, view) {
    const holder = document.querySelector("#options-view");

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

        input.value = entity.views[view][key].value;

        const select = document.createElement("select");
        select.id = "options-view-" + key + "-select"

        unitChoices[val.type].forEach(name => {
            const option = document.createElement("option");
            option.innerText = name;
            select.appendChild(option);
        });


        input.addEventListener("input", e => {
            const value = input.value == 0 ? 1 : input.value;
            entity.views[view][key] = math.unit(value, select.value);

            if (config.autoFit) {
                fitWorld();
            }
            updateSizes();
            updateEntityOptions(entity, view);
            updateViewOptions(entity, view, key);
        });

        select.setAttribute("oldUnit", select.value);

        select.addEventListener("input", e => {
            const value = input.value == 0 ? 1 : input.value;
            const oldUnit = select.getAttribute("oldUnit");
            entity.views[view][key] = math.unit(value, oldUnit).to(select.value);
            input.value = entity.views[view][key].toNumber(select.value);

            select.setAttribute("oldUnit", select.value);

            if (config.autoFit) {
                fitWorld();
            }

            updateSizes();
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
            input.value = math.round(convertedAmount, 5);
        }

    });
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
    const holder = document.querySelector("#options-view");

    holder.innerHTML = "";
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
    // retrieve the element underneath and trigger it's click event
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
    document.querySelector("#options-attribution").style.display = "none";
}

function displayAttribution(file) {
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
        console.warn("No authors: " + file);
    } else if (authors === undefined) {
        const div = document.createElement("div");
        div.innerText = "Not yet entered";
        authorHolder.innerHTML = "";
        authorHolder.appendChild(div);
        console.warn("No authors: " + file);
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
        console.warn("No owners: " + file);
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
    delete entities[element.dataset.key];
    const bottomName = document.querySelector("#bottom-name-" + element.dataset.key);
    bottomName.parentElement.removeChild(bottomName);
    element.parentElement.removeChild(element);


}
function displayEntity(entity, view, x, y) {
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

    displayAttribution(image.source);

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
    entityIndex += 1;

    updateEntityElement(entity, box);

    if (config.autoFit) {
        fitWorld();
    }

    select(box);
}


window.onblur = function () {
    altHeld = false;
    shiftHeld = false;
}

window.onfocus = function () {
    window.dispatchEvent(new Event("keydown"));
}

function doSliderScale() {
    setWorldHeight(config.height, math.multiply(config.height, (9 + sliderScale) / 10));
}

function doSliderEntityScale() {
    if (selected) {
        const entity = entities[selected.dataset.key];
        entity.scale *= (9 + sliderEntityScale) / 10;
        updateSizes();
        updateEntityOptions(entity, entity.view);
        updateViewOptions(entity, entity.view);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    prepareEntities();

    document.querySelector("#options-world-show-names").addEventListener("input", e => {
        document.body.classList[e.target.checked ? "add" : "remove"]("toggle-entity-name");
    });

    document.querySelector("#options-world-show-bottom-names").addEventListener("input", e => {
        document.body.classList[e.target.checked ? "add" : "remove"]("toggle-bottom-name");
    });

    document.querySelector("#options-world-show-height-bars").addEventListener("input", e => {
        document.body.classList[e.target.checked ? "add" : "remove"]("toggle-height-bars");
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

    document.querySelector("#slider-scale").addEventListener("mousedown", e => {
        dragScaleHandle = setInterval(doSliderScale, 50);
        e.stopPropagation();
    });

    document.querySelector("#slider-scale").addEventListener("touchstart", e => {
        dragScaleHandle = setInterval(doSliderScale, 50);
        e.stopPropagation();
    });

    document.querySelector("#slider-scale").addEventListener("input", e => {
        const val = Number(e.target.value);
        if (val < 1) {
            sliderScale = (val + 1) / 2;
        } else {
            sliderScale = val;
        }
    });

    document.querySelector("#slider-scale").addEventListener("change", e => {
        clearInterval(dragScaleHandle);
        dragScaleHandle = null;
        e.target.value = 1;
    });

    document.querySelector("#slider-entity-scale").addEventListener("mousedown", e => {
        dragEntityScaleHandle = setInterval(doSliderEntityScale, 50);
        e.stopPropagation();
    });

    document.querySelector("#slider-entity-scale").addEventListener("touchstart", e => {
        dragEntityScaleHandle = setInterval(doSliderEntityScale, 50);
        e.stopPropagation();
    });

    document.querySelector("#slider-entity-scale").addEventListener("input", e => {
        const val = Number(e.target.value);
        if (val < 1) {
            sliderEntityScale = (val + 1) / 2;
        } else {
            sliderEntityScale = val;
        }
    });

    document.querySelector("#slider-entity-scale").addEventListener("change", e => {
        clearInterval(dragEntityScaleHandle);
        dragEntityScaleHandle = null;
        e.target.value = 1;
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
        document.querySelector("#help").classList.add("visible");
    });


    document.querySelector("#close-help").addEventListener("click", e => {
        document.querySelector("#help").classList.remove("visible");
    });

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

    param = new URL(window.location.href).searchParams.get("scene");

    if (param === null)
        scenes["Demo"]();
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
            scenes["Demo"]();

            // probably wasn't valid data 
        }
    }
    fitWorld();
    document.querySelector("#world").addEventListener("wheel", e => {


        if (shiftHeld) {
            const dir = e.deltaY > 0 ? 0.9 : 1.1;
            if (selected) {
                const entity = entities[selected.dataset.key];
                entity.views[entity.view].height = math.multiply(entity.views[entity.view].height, dir);
                updateEntityOptions(entity, entity.view);
                updateViewOptions(entity, entity.view);
                updateSizes();
            }

        } else {
            const dir = e.deltaY < 0 ? 0.9 : 1.1;
            setWorldHeight(config.height, math.multiply(config.height, dir));
            updateWorldOptions();
        }
        checkFitWorld();
    })
    document.querySelector("body").appendChild(testCtx.canvas);

    updateSizes();

    document.querySelector("#options-height-value").addEventListener("input", e => {
        updateWorldHeight();
    })
    unitSelector.addEventListener("input", e => {
        checkFitWorld();
        updateWorldHeight();
    })

    world.addEventListener("mousedown", e => deselect());
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

    document.querySelector("#options-world-fit").addEventListener("click", () => fitWorld(true));

    document.querySelector("#options-world-autofit").addEventListener("input", e => {
        config.autoFit = e.target.checked;


        if (config.autoFit) {
            fitWorld();
        }
    });

    document.querySelector("#options-world-autofit-mode").addEventListener("input", e => {
        config.autoFitMode = e.target.value;

        if (config.autoFit) {
            fitWorld();
        }
    })

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

    document.addEventListener("paste", e => {
        try {
            const data = JSON.parse(e.clipboardData.getData("text"));
            if (data.entities === undefined) {
                return;
            }
            if (data.world === undefined) {
                return;
            }

            importScene(data);
        } catch (err) {
            console.error(err);

            // probably wasn't valid data 
        }
    });

    document.querySelector("#menu-permalink").addEventListener("click", e => {
        linkScene();
    });

    document.querySelector("#menu-export").addEventListener("click", e => {
        copyScene();
    });

    document.querySelector("#menu-save").addEventListener("click", e => {
        saveScene();
    });

    document.querySelector("#menu-load").addEventListener("click", e => {
        loadScene();
    });
});

function prepareEntities() {
    availableEntities["buildings"] = makeBuildings();
    availableEntities["landmarks"] = makeLandmarks();
    availableEntities["characters"] = makeCharacters();
    availableEntities["objects"] = makeObjects();
    availableEntities["naturals"] = makeNaturals();
    availableEntities["vehicles"] = makeVehicles();
    availableEntities["cities"] = makeCities();
    availableEntities["pokemon"] = makePokemon();

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

        button.innerText = "Create";
        button.addEventListener("click", e => {
            const newEntity = entityList[select.value].constructor()
            displayEntity(newEntity, newEntity.defaultView, 0.5, 1);
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

window.addEventListener("resize", () => {
    entityX = document.querySelector("#entities").getBoundingClientRect().x;
    canvasWidth = document.querySelector("#display").clientWidth - 100;
    canvasHeight = document.querySelector("#display").clientHeight - 50;
    updateSizes();
})

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
    }
}

const fitModes = {
    "max": {
        start: 0,
        binop: math.max,
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

function fitWorld(manual=false, factor=1.1) {
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
    config.height = newHeight.to(document.querySelector("#options-height-unit").value)

    const unit = document.querySelector("#options-height-unit").value;
    document.querySelector("#options-height-value").value = config.height.toNumber(unit);
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

function loadScene() {
    try {
        const data = JSON.parse(localStorage.getItem("macrovision-save"));
        importScene(data);
    } catch (err) {
        alert("Something went wrong while loading (maybe you didn't have anything saved. Check the F12 console for the error.")
        console.error(err);
    }
}

function saveScene() {
    try {
        const string = JSON.stringify(exportScene());
        localStorage.setItem("macrovision-save", string);
    } catch (err) {
        alert("Something went wrong while saving (maybe I don't have localStorage permissions, or exporting failed). Check the F12 console for the error.")
        console.error(err);
    }
}

function exportScene() {
    const results = {};

    results.entities = [];

    Object.entries(entities).forEach(([key, entity]) => {
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
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

function linkScene() {
    loc = new URL(window.location);


    window.location = loc.protocol + "//" + loc.host + loc.pathname + "?scene=" + b64EncodeUnicode(JSON.stringify(exportScene()));
}
function copyScene() {
    const results = exportScene();

    navigator.clipboard.writeText(JSON.stringify(results))

    alert("Scene copied to clipboard. Paste text into the page to load the scene.");
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

    updateSizes();
}
