let selected = null;
let selectedEntity = null;

let entityIndex = 0;

let clicked = null;
let dragging = false;
let clickTimeout = null;
let dragOffsetX = null;
let dragOffsetY = null;

const config = {
    height: math.unit(10, "meters")
}

const entities = {

}

function updateSizes() {
    drawScale();
    Object.entries(entities).forEach(([key, entity]) => {
        const element = document.querySelector("#entity-" + key);
        const canvasHeight = document.querySelector("#display").clientHeight;
        const pixels = math.divide(entity.height, config.height) * canvasHeight;

        element.style.setProperty("--height", pixels + "px");
    });
}

function drawScale() {
    function drawTicks(/** @type {CanvasRenderingContext2D} */ ctx, pixelsPer) {
        for (let y = ctx.canvas.clientHeight - 50; y >= 50; y -= pixelsPer) {
            drawTick(ctx, 50, y);
        }
    }

    function drawTick(/** @type {CanvasRenderingContext2D} */ ctx, x, y) {
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

        ctx.strokeStyle = oldStyle;
    }
    const canvas = document.querySelector("#display");

    /** @type {CanvasRenderingContext2D} */

    const ctx = canvas.getContext("2d");

    const pixelsPer = (ctx.canvas.clientHeight - 100) / config.height.value;

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

    drawTicks(ctx, pixelsPer);
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
    dragOffsetX = e.clientX - rect.left;
    dragOffsetY = e.clientY - rect.top;
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

function select(target) {
    if (selected) {
        selected.classList.remove("selected");
    }

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

    img.style.left = x + "px";
    img.style.top = y + "px";

    img.addEventListener("mousedown", e => clickDown(e));
    document.addEventListener("mouseup", e => clickUp());

    img.id = "entity-" + entityIndex;
    img.dataset.key = entityIndex;

    entities[entityIndex] = entity;

    entityIndex += 1;

    const world = document.querySelector("#entities");
    world.appendChild(img);
}

document.addEventListener("DOMContentLoaded", () => {
    for (let x = 0; x < 5; x++) {
        const entity = makeEntity();
        entity.name = "Green is my pepper";
        entity.author = "Fen"
        const x = 300 + Math.random() * 600;
        const y = 300 + Math.random() * 400;
        displayEntity(entity, x, y);
    }

    updateSizes();

    document.querySelector("#options-height-value").addEventListener("input", e => {
        updateWorldHeight();
    })

    document.querySelector("#options-height-unit").addEventListener("input", e => {
        updateWorldHeight();
    })
});

window.addEventListener("resize", () => {
    updateSizes();
})

document.addEventListener("mousemove", (e) => {
    if (clicked) {
        clicked.style.left = (e.clientX - dragOffsetX) + "px";
        clicked.style.top = (e.clientY - dragOffsetY) + "px";
    }
});

function updateWorldHeight() {
    const value = document.querySelector("#options-height-value").value;
    const unit = document.querySelector("#options-height-unit").value;

    config.height = math.unit(value + " " + unit)

    updateSizes();
}
