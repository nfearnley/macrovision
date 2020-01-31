let selected = null;


function drawScale() {
    function drawTicks(/** @type {CanvasRenderingContext2D} */ ctx) {
        for (let y = ctx.canvas.clientHeight - 50; y >= 50; y -= 50) {
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
        console.log(ctx.strokeStyle);
    }
    const canvas = document.querySelector("#display");

    /** @type {CanvasRenderingContext2D} */

    const ctx = canvas.getContext("2d");
    ctx.scale(1,1);
    console.log(canvas.clientWidth);
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

    drawTicks(ctx);
}

function makeEntity() {
    const entityTemplate = {
        name: "",
        author: "",
        location: {
            x: 0,
            y: 0
        }
    }
    
    return entityTemplate;
}

function select(target) {
    if (selected) {
        selected.classList.remove("selected");
    }

    selected = target;
    selected.classList.add("selected");
}

function displayEntity(entity) {
    const location = entity.location;

    const div = document.createElement("div");
    div.classList.add("entity");

    div.style.left = location.x + "px";
    div.style.top = location.y + "px";

    div.addEventListener("click", e => select(e.target));


    const world = document.querySelector("#entities");
    world.appendChild(div);
}

document.addEventListener("DOMContentLoaded", () => {
    for (let x = 0; x < 5; x++) {
        const entity = makeEntity();
        entity.location.x = 300 + Math.random() * 600;
        entity.location.y = 300 + Math.random() * 400;
        displayEntity(entity);
    }

    drawScale();
});
