let selected = null;

function select(target) {
    if (selected) {
        selected.classList.remove("selected");
    }

    selected = target;
    selected.classList.add("selected");
}

function createEntity(entity) {
    const div = document.createElement("div");
    div.classList.add("entity");

    div.style.left = entity.x;
    div.style.top = entity.y;

    div.addEventListener("click", e => select(e.target));


    const world = document.querySelector("#entities");
    world.appendChild(div);
}

document.addEventListener("DOMContentLoaded", () => {
    createEntity({x: "300px", y: "300px"});
    createEntity({x: "400px", y: "300px"});
    createEntity({x: "500px", y: "300px"});
});
