let selected = null;
let selectedEntity = null;

let entityIndex = 0;

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

        console.log(pixels);
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
        console.log(ctx.strokeStyle);

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x+20, y);
        ctx.strokeStyle = "#000000";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x+20, y);
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
    ctx.scale(1,1);
    ctx.canvas.width  = canvas.clientWidth;
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
        location: {
            x: 0,
            y: 0
        },
        height: math.unit(Math.random() * 2 + 1, "meters")
    }
    
    return entityTemplate;
}

function select(target) {
    if (selected) {
        selected.classList.remove("selected");
    }

    selected = target;
    selectedEntity = entities[target.dataset.key];

    console.log(selectedEntity)
    selected.classList.add("selected");

    entityInfo(selectedEntity);
}

function entityInfo(entity) {
    document.querySelector("#entity-name").innerText = "Name: " + entity.name;
    document.querySelector("#entity-author").innerText = "Author: " + entity.author;
    document.querySelector("#entity-height").innerText = "Height: " + entity.height.format({precision: 3});
}

function displayEntity(entity) {
    const location = entity.location;

    const img = document.createElement("img");
    img.src = "./pepper.png"
    img.classList.add("entity");

    img.style.left = location.x + "px";
    img.style.top = location.y + "px";

    img.addEventListener("click", e => select(e.target));

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
        entity.location.x = 300 + Math.random() * 600;
        entity.location.y = 300 + Math.random() * 400;
        displayEntity(entity);
    }

    updateSizes();
});

window.addEventListener("resize", () => {
    updateSizes();
})
