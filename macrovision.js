let selected = null;

function select(entity) {
    if (selected) {
        selected.classList.remove("selected");
    }

    selected = entity;
    selected.classList.add("selected");
}

function createEntity() {
    const entity = document.createElement("div");
    entity.classList.add("entity");

    entity.addEventListener("click", e => select(e.target));


    const world = document.querySelector("#entities");
    world.appendChild(entity);
}

document.addEventListener("DOMContentLoaded", () => {
    createEntity();
});
