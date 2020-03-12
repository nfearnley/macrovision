const scenes = {};

scenes["Demo"] = () => {
    importScene({"entities":[{"name":"Fen","scale":13.37613697164259,"view":"back","x":"0.4739888072901602","y":"1"},{"name":"Cars","scale":1,"view":"Toyota Prius C (Side)","x":"0.5446325587240624","y":"1"},{"name":"Flagpole","scale":1,"view":"medium","x":"0.6884494749664603","y":"1"},{"name":"Aircraft","scale":1,"view":"Cessena 172 (Side)","x":"0.5554263161666061","y":"0.22135128477620036"},{"name":"Bus","scale":1,"view":"side","x":"0.3384726446176792","y":"1"},{"name":"Leopard 2 Rev. 1","scale":1,"view":"side","x":"0.6168929701770606","y":"1"},{"name":"Trees","scale":1,"view":"sycamore","x":"0.19678198200160846","y":"1"},{"name":"18-Wheeler","scale":1,"view":"side","x":"0.7563502890715608","y":"1"},{"name":"Cars","scale":1,"view":"Toyota Prius C (Top)","x":"0.5363900938385269","y":"0.7215473541048467"},{"name":"Human","scale":1,"view":"woman1","x":"0.4756975717747481","y":"1"},{"name":"Human","scale":1,"view":"man1","x":"0.47400075247875356","y":"0.2538019287833828"}],"world":{"height":38.5,"unit":"meters"}})
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

function makeOwnerScene(owner) {
    return () => {
        availableEntities["characters"].filter(x => {
            const entity = x.constructor();
            const owners = ownersOf(entity.views[entity.view].image.source);
            if (owners)
                return owners.indexOf(owner) != -1;
            else
                return false;
        }).map(maker => {
            return maker.constructor();
        }).sort((e1, e2) => {
            return e1.sizes[e1.sizes.length - 1].height.toNumber() - e2.sizes[e2.sizes.length - 1].height.toNumber()
        }).forEach(entity => {
            displayEntity(entity, entity.view, 0, 1);
        });
        
        arrangeEntities(getSortedEntities());
        fitWorld(true);
    }
}

function makeOwnerSceneViews(owner) {
    return () => {
        availableEntities["characters"].filter(x => {
            const entity = x.constructor();
            const owners = ownersOf(entity.views[entity.view].image.source);
            if (owners)
                return owners.indexOf(owner) != -1;
            else
                return false;
        }).map(maker => {
            return maker.constructor();
        }).flatMap(entity => {
            return Object.keys(entity.views).map(view => {
                const newEnt = availableEntitiesByName[entity.identifier].constructor();
                newEnt.view = view;
                return newEnt;
            });
        }).sort((e1, e2) => {
            return e1.views[e1.view].height.toNumber() - e2.views[e2.view].height.toNumber()
        }).forEach(entity => {
            console.log(entity)
            displayEntity(entity, entity.view, 0, 1);
        });
        
        arrangeEntities(getSortedEntities());
        fitWorld(true);
    }
}

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

scenes["Neopuc"] = () => {
    availableEntities["characters"].filter(x => {
        const entity = x.constructor();
        const owners = ownersOf(entity.views[entity.view].image.source);
        if (owners)
            return owners.indexOf("neopuc") != -1;
        else
            return false;
    }).map(maker => {
        return maker.constructor();
    }).sort((e1, e2) => {
        return e1.sizes[e1.sizes.length - 1].height.toNumber() - e2.sizes[e2.sizes.length - 1].height.toNumber()
    }).reduce((size, entity) => {
        entity.views[entity.view].height = math.unit(100 * Math.sqrt(size) * (entity.name == "Ilisha Devya" ? 2 : 1), "meters");
        displayEntity(entity, entity.view, 0, 1);
        return size+1;
    }, 1)
    
    arrangeEntities(getSortedEntities());
    fitWorld(true);
}

scenes["Fidverse"] = () => {
    makeOwnerSceneViews("fidchell")();
    document.querySelector("#entity-" + (entityIndex-1)).dataset.x = 0.5;
    document.querySelector("#entity-" + (entityIndex-2)).dataset.x = 0.25;
    updateSizes();
    fitWorld(true, 1);
}