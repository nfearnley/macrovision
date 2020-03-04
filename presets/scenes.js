const scenes = {};

scenes["Demo"] = () => {
    removeAllEntities();

    let entity = availableEntitiesByName["Fen"].constructor();
    displayEntity(entity, entity.defaultView, 0, 1);

    entity = availableEntitiesByName["Deerpuff"].constructor();
    displayEntity(entity, entity.defaultView, 0, 1);

    entity = availableEntitiesByName["Sofia"].constructor();
    entity.views[entity.view].height = entity.sizes[2].height;
    displayEntity(entity, entity.defaultView, 0, 1);

    entity = availableEntitiesByName["Vivian"].constructor();
    entity.views[entity.view].height = entity.sizes[2].height;
    displayEntity(entity, entity.defaultView, 0, 1);


    arrangeEntities(getSortedEntities());
    
    entity = availableEntitiesByName["Houston"].constructor();
    displayEntity(entity, entity.defaultView, 0.5, 1);
    fitWorld(true);
}

scenes["Military"] = () => {
    removeAllEntities();

    let entity = availableEntitiesByName["Asana (Mech)"].constructor();
    displayEntity(entity, entity.defaultView, 0, 1);

    entity = availableEntitiesByName["Napalm"].constructor();
    displayEntity(entity, entity.defaultView, 0, 1);

    entity = availableEntitiesByName["Chez"].constructor();
    displayEntity(entity, entity.defaultView, 0, 1);

    entity = availableEntitiesByName["Leopard 2 Rev. 1"].constructor();
    displayEntity(entity, entity.defaultView, 0, 1);

    entity = availableEntitiesByName["Asana"].constructor();
    displayEntity(entity, entity.defaultView, 0, 1);

    entity = availableEntitiesByName["Ashtrek"].constructor();
    entity.views[entity.view].height = entity.sizes[0].height;
    displayEntity(entity, entity.defaultView, 0, 1);

    arrangeEntities(getSortedEntities());
    fitWorld(true);
}

function makeSlice(min, max) {
    return () => {
        const characters = availableEntities["characters"].filter(x => {
            const entity = x.constructor();
            return math.compare(entity.views[entity.view].height, min) == 1 && math.compare(entity.views[entity.view].height, max) != 1
        });
    
        characters.forEach(character => {
            const entity = character.constructor();
            displayEntity(entity, entity.view, 0, 1);
        });
    
        arrangeEntities(getSortedEntities());
        fitWorld(true);
    }
}

scenes["x < 10m"] = makeSlice(math.unit(0, "meters"), math.unit(10, "meters"));
scenes["10m < x <= 100m"] = makeSlice(math.unit(10, "meters"), math.unit(100, "meters"));
scenes["100m < x <= 1km"] = makeSlice(math.unit(100, "meters"), math.unit(1000, "meters"));
scenes["1km < x <= 10km"] = makeSlice(math.unit(1000, "meters"), math.unit(10000, "meters"));
scenes["10km < x <= 100km"] = makeSlice(math.unit(10000, "meters"), math.unit(100000, "meters"));
scenes["100km < x <= 1000km"] = makeSlice(math.unit(100000, "meters"), math.unit(1000000, "meters"));
scenes["Everyone"] = makeSlice(math.unit(0.000000000000000001, "meters"), math.unit(1000000e100, "meters"));

scenes["Kurri"] = () => {
    availableEntities["characters"].filter(x => {
        const entity = x.constructor();
        return entity.info.author == "Kurrikage";
    }).forEach(maker => {
        const entity = maker.constructor();
        displayEntity(entity, entity.view, 0, 1);
    });
    
    arrangeEntities(getSortedEntities());
    fitWorld(true);


}