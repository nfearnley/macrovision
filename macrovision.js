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
    return {x: coords.x, y: 1 + (coords.y - 1) * math.divide(oldHeight, newHeight)};
}

function rel2abs(coords) {
    const canvasWidth = document.querySelector("#display").clientWidth - 50;
    const canvasHeight = document.querySelector("#display").clientHeight - 50;

    return {x: coords.x * canvasWidth, y: coords.y * canvasHeight};
}

function abs2rel(coords) {
    const canvasWidth = document.querySelector("#display").clientWidth - 50;
    const canvasHeight = document.querySelector("#display").clientHeight - 50;

    return {x: coords.x / canvasWidth, y: coords.y / canvasHeight};
}

function updateEntityElement(entity, element) {
    const position = rel2abs({x: element.dataset.x, y: element.dataset.y});

    element.style.left = position.x + "px";
    element.style.top = position.y + "px";
    const canvasHeight = document.querySelector("#display").clientHeight;
    const pixels = math.divide(entity.height, config.height) * canvasHeight;
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
        const oldStyle = ctx.strokeStyle;

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

        ctx.beginPath();
        ctx.fillText(value.format({precision: 3}), x+20, y+20);

        ctx.strokeStyle = oldStyle;
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
        height: math.unit(Math.random() * 2 + 1, "meters")
    }

    return entityTemplate;
}

function clickDown(e) {
    clicked = e.target;
    const rect = e.target.getBoundingClientRect();
    let entX = document.querySelector("#entities").getBoundingClientRect().x;
    let entY = document.querySelector("#entities").getBoundingClientRect().y;
    dragOffsetX = e.clientX - rect.left + entX - rect.width / 2;
    dragOffsetY = e.clientY - rect.top + entY - rect.height;
    clickTimeout = setTimeout(() => {dragging = true}, 100)
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
}

function select(target) {
    deselect();
    selected = target;
    selectedEntity = entities[target.dataset.key];

    selected.classList.add("selected");

    entityInfo(selectedEntity);
}

function entityInfo(entity) {
    document.querySelector("#entity-name").innerText = "Name: " + entity.name;
    document.querySelector("#entity-author").innerText = "Author: " + entity.author;
    document.querySelector("#entity-height").innerText = "Height: " + entity.height.format({ precision: 3 });
}

function displayEntity(entity, x, y) {
    const location = entity.location;

    const img = document.createElement("img");
    img.src = "./pepper.png"
    img.classList.add("entity");

    img.dataset.x = x;
    img.dataset.y = y;

    img.addEventListener("mousedown", e => {clickDown(e); e.stopPropagation()});

    img.id = "entity-" + entityIndex;
    img.dataset.key = entityIndex;

    entities[entityIndex] = entity;

    entityIndex += 1;

    const world = document.querySelector("#entities");
    world.appendChild(img);
    updateEntityElement(entity, img);
}

document.addEventListener("DOMContentLoaded", () => {
    for (let x = 0; x < 5; x++) {
        const entity = makeEntity();
        entity.name = "Green is my pepper";
        entity.author = "Fen"
        const x = 0.25 + Math.random() * 0.5;
        const y = 0.25 + Math.random() * 0.5;
        displayEntity(entity, x, y);
    }

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
        const position = snapRel(abs2rel({x: e.clientX - dragOffsetX, y: e.clientY - dragOffsetY}));
        clicked.dataset.x = position.x;
        clicked.dataset.y = position.y;
        updateEntityElement(entities[clicked.dataset.key], clicked);
    }
});

function updateWorldHeight() {
    const value = document.querySelector("#options-height-value").value;
    const unit = document.querySelector("#options-height-unit").value;
    const oldHeight = config.height;

    config.height = math.unit(value + " " + unit)
    
    Object.entries(entities).forEach(([key, entity]) => {
        const element = document.querySelector("#entity-" + key);
        const newPosition = adjustAbs({x: element.dataset.x, y: element.dataset.y}, oldHeight, config.height);
        element.dataset.x = newPosition.x;
        element.dataset.y = newPosition.y;
    });

    updateSizes();
}
