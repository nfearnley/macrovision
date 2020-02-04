let selected = null;
let selectedEntity = null;

let entityIndex = 0;

let clicked = null;
let dragging = false;
let clickTimeout = null;
let dragOffsetX = null;
let dragOffsetY = null;

let altHeld = false;

const config = {
    height: math.unit(10, "meters"),
    minLineSize: 50,
    maxLineSize: 250
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
    const canvasWidth = document.querySelector("#display").clientWidth - 50;
    const canvasHeight = document.querySelector("#display").clientHeight - 50;

    return { x: coords.x * canvasWidth, y: coords.y * canvasHeight };
}

function abs2rel(coords) {
    const canvasWidth = document.querySelector("#display").clientWidth - 50;
    const canvasHeight = document.querySelector("#display").clientHeight - 50;

    return { x: coords.x / canvasWidth, y: coords.y / canvasHeight };
}

function updateEntityElement(entity, element) {
    const position = rel2abs({ x: element.dataset.x, y: element.dataset.y });
    const view = element.dataset.view;

    element.style.left = position.x + "px";
    element.style.top = position.y + "px";
    const canvasHeight = document.querySelector("#display").clientHeight;
    const pixels = math.divide(entity.views[view].height, config.height) * canvasHeight;
    element.style.setProperty("--height", pixels + "px");

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

function makeEntity() {
    const entityTemplate = {
        name: "",
        author: "",
        scale: 1,
        views: {
            body: {
                baseHeight: math.unit(Math.random() * 1 + 1, "meter"),
                get height() {
                    return math.multiply(this.parent.scale, this.baseHeight);
                },
                set height(value) {
                    this.parent.scale = math.divide(value, this.baseHeight);
                }
            }
        },
        init: function () {
            console.log(this);
            Object.entries(this.views).forEach(([key, val]) => {
                val.parent = this;
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
    dragOffsetX = x - rect.left + entX - rect.width / 2;
    dragOffsetY = y - rect.top + entY - rect.height;
    clickTimeout = setTimeout(() => { dragging = true }, 200)
}

function clickUp() {
    clearTimeout(clickTimeout);

    if (clicked) {
        if (dragging) {
            dragging = false;
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
    clearEntityOptions();
    clearViewOptions();
}

function select(target) {
    deselect();
    selected = target;
    selectedEntity = entities[target.dataset.key];

    selected.classList.add("selected");

    entityInfo(selectedEntity, target.dataset.view);
    configEntityOptions(selectedEntity);
    configViewOptions(selectedEntity, target.dataset.view);
}

function entityInfo(entity, view) {
    document.querySelector("#entity-name").innerText = "Name: " + entity.name;
    document.querySelector("#entity-author").innerText = "Author: " + entity.author;
    document.querySelector("#entity-height").innerText = "Height: " + entity.views[view].height.format({ precision: 3 });
}

function configEntityOptions(entity) {
    const holder = document.querySelector("#options-entity");

    holder.innerHTML = "";

    const scaleLabel = document.createElement("div");
    scaleLabel.classList.add("options-label");
    scaleLabel.innerText = "Scale";

    const scaleRow = document.createElement("div");
    scaleRow.classList.add("options-row");

    const scaleInput = document.createElement("input");
    scaleInput.classList.add("options-field-numeric");

    scaleInput.addEventListener("input", e => {
        entity.scale = e.target.value;
        updateSizes();
    });

    scaleInput.setAttribute("min", 1);
    scaleInput.setAttribute("type", "number");
    scaleInput.value = entity.scale;

    scaleRow.appendChild(scaleInput);
    holder.appendChild(scaleLabel);
    holder.appendChild(scaleRow);
}

function clearEntityOptions() {
    const holder = document.querySelector("#options-entity");

    holder.innerHTML = "";
}

function configViewOptions(entity, view) {

}

function clearViewOptions(entity, view) {

}

// this is a crime against humanity, and also stolen from
// stack overflow
// https://stackoverflow.com/questions/38487569/click-through-png-image-only-if-clicked-coordinate-is-transparent

const testCtx = document.createElement("canvas").getContext("2d");

function testClick(event) {

    const target = event.target;
    // Get click coordinates
    var x = event.clientX - target.getBoundingClientRect().x,
        y = event.clientY - target.getBoundingClientRect().y,
        w = testCtx.canvas.width = target.width,
        h = testCtx.canvas.height = target.height,
        alpha;

    console.log(x, y);
    // Draw image to canvas
    // and read Alpha channel value
    testCtx.drawImage(target, 0, 0, w, h);
    alpha = testCtx.getImageData(x, y, 1, 1).data[3]; // [0]R [1]G [2]B [3]A


    console.log(alpha)
    // If pixel is transparent,
    // retrieve the element underneath and trigger it's click event
    if (alpha === 0) {
        const oldDisplay = target.style.display;
        target.style.display = "none";
        const newTarget = document.elementFromPoint(event.clientX, event.clientY);
        newTarget.dispatchEvent(new MouseEvent("mousedown", {
            "clientX": event.clientX,
            "clientY": event.clientY
        }));
        target.style.display = oldDisplay;
    } else {
        clickDown(target.parentElement, event.clientX, event.clientY);
    }
}

function displayEntity(entity, view, x, y) {
    const box = document.createElement("div");
    box.classList.add("entity-box");

    const img = document.createElement("img");
    img.classList.add("entity-image");
    const nameTag = document.createElement("div");
    nameTag.classList.add("entity-name");
    nameTag.innerText = entity.name;
    box.appendChild(img);
    box.appendChild(nameTag);

    img.src = "./man.svg"

    box.dataset.x = x;
    box.dataset.y = y;

    img.addEventListener("mousedown", e => { testClick(e); e.stopPropagation() });

    box.id = "entity-" + entityIndex;
    box.dataset.key = entityIndex;
    box.dataset.view = view;

    entities[entityIndex] = entity;

    entityIndex += 1;

    const world = document.querySelector("#entities");
    world.appendChild(box);
    updateEntityElement(entity, box);
}

document.addEventListener("DOMContentLoaded", () => {
    for (let x = 0; x < 5; x++) {
        const entity = makeEntity();
        entity.name = "Dude";
        entity.author = "Fen"
        const x = 0.25 + Math.random() * 0.5;
        const y = 0.25 + Math.random() * 0.5;
        displayEntity(entity, "body", x, y);
    }
    document.querySelector("body").appendChild(testCtx.canvas);

    updateSizes();

    document.querySelector("#options-height-value").addEventListener("input", e => {
        updateWorldHeight();
    })

    document.querySelector("#options-height-unit").addEventListener("input", e => {
        updateWorldHeight();
    })

    world.addEventListener("mousedown", e => deselect());
    document.addEventListener("mouseup", e => clickUp());
});

window.addEventListener("resize", () => {
    updateSizes();
})

document.addEventListener("mousemove", (e) => {
    if (clicked) {
        const position = snapRel(abs2rel({ x: e.clientX - dragOffsetX, y: e.clientY - dragOffsetY }));
        clicked.dataset.x = position.x;
        clicked.dataset.y = position.y;
        updateEntityElement(entities[clicked.dataset.key], clicked);
    }
});

function updateWorldHeight() {
    const value = Math.max(1, document.querySelector("#options-height-value").value);
    const unit = document.querySelector("#options-height-unit").value;
    const oldHeight = config.height;

    config.height = math.unit(value + " " + unit)

    Object.entries(entities).forEach(([key, entity]) => {
        const element = document.querySelector("#entity-" + key);
        const newPosition = adjustAbs({ x: element.dataset.x, y: element.dataset.y }, oldHeight, config.height);
        element.dataset.x = newPosition.x;
        element.dataset.y = newPosition.y;
    });

    updateSizes();
}
