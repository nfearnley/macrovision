let selected = null;
let selectedEntity = null;

let entityIndex = 0;

let clicked = null;
let dragging = false;
let clickTimeout = null;
let dragOffsetX = null;
let dragOffsetY = null;

let altHeld = false;

const unitChoices = {
    length: [
        "meters",
        "millimeters",
        "centimeters",
        "kilometers",
        "inches",
        "feet",
        "miles",
    ],
    area: [
        "cm^2",
        "meters^2"
    ],
    mass: [
        "kilograms"
    ]
}
const config = {
    height: math.unit(1500, "meters"),
    minLineSize: 50,
    maxLineSize: 250,
    autoFit: false
}

const availableEntities = {

}

const entities = {

}

function constrainRel(coords) {
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
    return { x: coords.x, y: 1 + (coords.y - 1) * math.divide(oldHeight, newHeight) };
}

function rel2abs(coords) {
    const canvasWidth = document.querySelector("#display").clientWidth - 100;
    const canvasHeight = document.querySelector("#display").clientHeight - 50;

    return { x: coords.x * canvasWidth + 50, y: coords.y * canvasHeight };
}

function abs2rel(coords) {
    const canvasWidth = document.querySelector("#display").clientWidth - 100;
    const canvasHeight = document.querySelector("#display").clientHeight - 50;

    return { x: (coords.x - 50) / canvasWidth, y: coords.y / canvasHeight };
}

function updateEntityElement(entity, element) {
    const position = rel2abs({ x: element.dataset.x, y: element.dataset.y });
    const view = element.dataset.view;

    element.style.left = position.x + "px";
    element.style.top = position.y + "px";
    const canvasHeight = document.querySelector("#display").clientHeight;
    const pixels = math.divide(entity.views[view].height, config.height) * (canvasHeight - 100);
    element.style.setProperty("--height", pixels + "px");

    element.querySelector(".entity-name").innerText = entity.name;

    const bottomName = document.querySelector("#bottom-name-" + element.dataset.key);

    let entX = document.querySelector("#entities").getBoundingClientRect().x;
    bottomName.style.left = position.x + entX + "px";
    bottomName.style.top = "95vh";
    bottomName.innerText = entity.name;
}

function updateSizes() {
    drawScale();
    Object.entries(entities).forEach(([key, entity]) => {
        const element = document.querySelector("#entity-" + key);
        updateEntityElement(entity, element);
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

function makeEntity(name, author, views) {
    const entityTemplate = {
        name: name,
        author: author,
        scale: 1,
        views: views,
        defaults: [],
        init: function () {
            Object.entries(this.views).forEach(([viewKey, view]) => {
                view.parent = this;
                if (this.defaultView === undefined) {
                    this.defaultView = viewKey;
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
            delete this.init;
            return this;
        }
    }.init();

    return entityTemplate;
}

function clickDown(target, x, y) {
    clicked = target;
    const rect = target.getBoundingClientRect();
    let entX = document.querySelector("#entities").getBoundingClientRect().x;
    let entY = document.querySelector("#entities").getBoundingClientRect().y;
    dragOffsetX = x - rect.left + entX;
    dragOffsetY = y - rect.top + entY;
    clickTimeout = setTimeout(() => { dragging = true }, 200)
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
        clicked = null;
    }

}

function deselect() {
    if (selected) {
        selected.classList.remove("selected");
    }
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

    configViewList(selectedEntity, target.dataset.view);
    configEntityOptions(selectedEntity, target.dataset.view);
    configViewOptions(selectedEntity, target.dataset.view);
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

    entity.defaults.forEach(defaultInfo => {
        const button = document.createElement("button");
        button.classList.add("options-button");
       
        button.innerText = defaultInfo.name;

        button.addEventListener("click", e => {
            entity.views[entity.defaultView].height = defaultInfo.height;
            updateSizes();
        });

        defaultHolder.appendChild(button);
    });
}

function updateEntityOptions(entity, view) {
    const scaleInput = document.querySelector("#options-entity-scale");
    scaleInput.value = entity.scale;
}

function clearEntityOptions() {
    const holder = document.querySelector("#options-entity");

    holder.innerHTML = "";
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
            const convertedAmount = entity.views[view][key].to(currentUnit);
            input.value = math.round(convertedAmount.value, 5);
        }

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
    if (w > 4000) {
        ratioW = w / 4000;
        w /= ratioW;
        h /= ratioW;
    }
    if (h > 4000) {
        ratioH = h / 4000;
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
        x += 0.8 / order.length
    });

    updateSizes();
}

function removeAllEntities() {
    Object.keys(entities).forEach(key => {
        removeEntity(document.querySelector("#entity-" + key));
    });
}

function removeEntity(element) {
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

    if (image.bottom) {
        img.style.setProperty("--offset", ((-1 + image.bottom) * 100) + "%")
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

    box.id = "entity-" + entityIndex;
    box.dataset.key = entityIndex;
    box.dataset.view = view;

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
}

document.addEventListener("DOMContentLoaded", () => {
    const stuff = [makeFen].concat(makeBuildings().map(x => x.constructor))

    let x = 0.2;

    stuff.forEach(entity => {
        displayEntity(entity(), entity().defaultView, x, 1);
        x += 0.7 / stuff.length;
    })

    window.addEventListener("wheel", e => {

        const dir = e.deltaY < 0 ? 0.9 : 1.1;

        config.height = math.multiply(config.height, dir);
        updateSizes();
        updateWorldOptions();
    })
    document.querySelector("body").appendChild(testCtx.canvas);

    updateSizes();

    document.querySelector("#options-height-value").addEventListener("input", e => {
        updateWorldHeight();
    })

    document.querySelector("#options-height-unit").addEventListener("input", e => {
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
        selected.dataset.view = e.target.value
        const image = entities[selected.dataset.key].views[e.target.value].image
        selected.querySelector(".entity-image").src = image.source;
        

        if (image.bottom) {
            selected.querySelector(".entity-image").style.setProperty("--offset", ((-1 + image.bottom) * 100) + "%")
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
            const viewA = document.querySelector("#entity-" + a).dataset.view;
            const viewB = document.querySelector("#entity-" + b).dataset.view;
            const heightA = entA.views[viewA].height.to("meter").value;
            const heightB = entB.views[viewB].height.to("meter").value;
            return heightA - heightB;
        });

        arrangeEntities(order);
    });

    document.querySelector("#options-world-fit").addEventListener("click", fitWorld);

    document.querySelector("#options-world-autofit").addEventListener("input", e => {
        config.autoFit = e.target.value;
        

        if (config.autoFit) {
            fitWorld();
        }
    });

    document.addEventListener("keydown", e => {
        console.log(e)
        if (e.key == "Delete") {
            if (selected) {
                removeEntity(selected);
                selected = null;
            }
        }
    })
    prepareEntities();
});

function prepareEntities() {
    availableEntities["buildings"] = makeBuildings();
    availableEntities["characters"] = makeCharacters();
    availableEntities["objects"] = makeObjects();
    availableEntities["vehicles"] = makeVehicles();

    availableEntities["characters"].sort((x,y) => {
        return x.name < y.name ? -1 : 1
    });
    const holder = document.querySelector("#spawners");
    Object.entries(availableEntities).forEach(([category, entityList]) => {
        const select = document.createElement("select");
        select.id = "create-entity-" + category;
        for (let i = 0; i < entityList.length; i++) {
            const entity = entityList[i];
            const option = document.createElement("option");
            option.value = i;
            option.innerText = entity.name;
            select.appendChild(option);
        };

        const button = document.createElement("button");

        button.innerText = "Create";
        button.addEventListener("click", e => {
            const newEntity = entityList[select.value].constructor()
            displayEntity(newEntity, newEntity.defaultView, 0.5, 1);
        });

        holder.appendChild(button);
        holder.appendChild(select);
    });
}

window.addEventListener("resize", () => {
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

function fitWorld() {
    let max = math.unit(0, "meter");

    Object.entries(entities).forEach(([key, entity]) => {
        const view = document.querySelector("#entity-" + key).dataset.view;

        max = math.max(max, entity.views[view].height);
    });

    setWorldHeight(config.height, math.multiply(max, 1.1));
}

function updateWorldHeight() {
    const value = Math.max(1, document.querySelector("#options-height-value").value);
    const unit = document.querySelector("#options-height-unit").value;
    const oldHeight = config.height;

    setWorldHeight(oldHeight, math.unit(value, unit));
}

function setWorldHeight(oldHeight, newHeight) {
    config.height = newHeight;

    Object.entries(entities).forEach(([key, entity]) => {
        const element = document.querySelector("#entity-" + key);
        const newPosition = adjustAbs({ x: element.dataset.x, y: element.dataset.y }, oldHeight, config.height);
        element.dataset.x = newPosition.x;
        element.dataset.y = newPosition.y;
    });

    updateSizes();
}
