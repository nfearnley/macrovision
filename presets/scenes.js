const scenes = {};

scenes["military"] = () => {
    removeAllEntities();

    let entity = availableEntitiesByName["Asana (Mech)"].constructor();
    displayEntity(entity, entity.defaultView, 0, 1);

    entity = availableEntitiesByName["Napalm"].constructor();
    displayEntity(entity, entity.defaultView, 0, 1);

    entity = availableEntitiesByName["Leopard 2 Rev. 1"].constructor();
    displayEntity(entity, entity.defaultView, 0, 1);


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
    fitWorld();
}