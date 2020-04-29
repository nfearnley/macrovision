const scenes = {};

scenes["Default"] = () => {
    importScene({ "entities": [{ "name": "Fen", "scale": 1, "view": "back", "x": "0.5152113970588236", "y": "1" }], "world": { "height": 2.9053707516337908, "unit": "meters" } });
    fitWorld(true);
}
scenes["Demo"] = () => {
    importScene({"entities":[{"name":"Fen","scale":44.58712323880864,"view":"back","x":"0.3983191636029412","y":"1"},{"name":"Cars","scale":1,"view":"Toyota Prius C (Side)","x":"0.255755974264706","y":"1"},{"name":"Aircraft","scale":1,"view":"Cessena 172 (Side)","x":"0.2915096507352941","y":"0.23103070175438598"},{"name":"Buses","scale":1,"view":"City Bus (Front)","x":"0.2189338235294118","y":"1"},{"name":"Two-Story Home","scale":1,"view":"building","x":"0.6674977022058823","y":"1"},{"name":"Statue of Liberty","scale":1,"view":"building","x":"0.8289636948529412","y":"1"},{"name":"Street Lamps","scale":1,"view":"freeway","x":"0.18566176470588233","y":"1"},{"name":"Human","scale":1,"view":"man1","x":"0.5784696691176471","y":"1"},{"name":"Human","scale":1,"view":"woman1","x":"0.4","y":"1"},{"name":"Bus Stop","scale":1,"view":"building","x":"0.19779411764705887","y":"1"}],"world":{"height":110.00000000000011,"unit":"meters"},"canvasWidth":1360})
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

scenes["<10m"] = makeSlice(math.unit(0, "meters"), math.unit(10, "meters"));
scenes["10m-100m"] = makeSlice(math.unit(10, "meters"), math.unit(100, "meters"));
scenes["100m-1km"] = makeSlice(math.unit(100, "meters"), math.unit(1000, "meters"));
scenes["1km-10km"] = makeSlice(math.unit(1000, "meters"), math.unit(10000, "meters"));
scenes["10km-100km"] = makeSlice(math.unit(10000, "meters"), math.unit(100000, "meters"));
scenes["100km-1000km"] = makeSlice(math.unit(100000, "meters"), math.unit(1000000, "meters"));
scenes["Everyone"] = () => {

    config.height = math.unit(11, "meters");
    let entities = availableEntities.characters.map(maker => {
        return maker.constructor();
    })

    if (confirm("This scene will load " + entities.length + " entities -- are you sure?")) {
        entities.reduce((counter, entity) => {
            entity.views[entity.view].height = math.unit(1, "meter");
            const count = availableEntities.characters.length;
            const x = 0.05 + math.floor(counter / 10) / math.ceil(count / 10);
            const y = (counter % 10) / 10 + 0.1;
            displayEntity(entity, entity.view, x, y);
            return counter + 1;
        }, 0);
        updateSizes(true);
    }
    
    
}

scenes["EVERYTHING"] = () => {
    config.height = math.unit(11, "meters");
    let entities = Object.values(availableEntitiesByName).map(maker => {
        return maker.constructor();
    })
    
    if (confirm("This scene will load " + entities.length + " entities -- are you sure?")) {
        entities.reduce((counter, entity) => {
            entity.views[entity.view].height = math.unit(1, "meter");
            const count = Object.values(availableEntitiesByName).length;
            const x = 0.05 + math.floor(counter / 10) / math.ceil(count / 10);
            const y = (counter % 10) / 10 + 0.1;
            displayEntity(entity, entity.view, x, y);
            return counter + 1;
        }, 0);
        updateSizes(true);
    }
}

scenes["EVERY VIEW AAAAA"] = () => {
    config.height = math.unit(11, "meters");
    let entities = Object.values(availableEntitiesByName).map(maker => {
        return maker.constructor();
    }).flatMap(entity => {
        return Object.keys(entity.views).map(view => {
            const newEntity = availableEntitiesByName[entity.identifier].constructor();
            newEntity.view = view;
            return newEntity;
        });
    })
    
    if (confirm("This scene will load " + entities.length + " entities -- are you sure?")) {
        entities.reduce((counter, entity) => {
            entity.views[entity.view].height = math.unit(1, "meter");
            const count = Object.values(availableEntitiesByName).length;
            const x = 0.05 + math.floor(counter / 10) / math.ceil(count / 10);
            const y = (counter % 10) / 10 + 0.1;
            displayEntity(entity, entity.view, x, y);
            return counter + 1;
        }, 0);
        updateSizes(true);
    }
}


function makeOwnerScene(owners) {
    return () => {
        owners.flatMap(owner => {
            return availableEntities["characters"].filter(x => {
                const entity = x.constructor();
                const owners = ownersOf(entity.views[entity.view].image.source);
                if (owners)
                    return owners.indexOf(owner) != -1;
                else
                    return false;
            })
        }).map(maker => {
            return maker.constructor();
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

function makeOwnerSceneViews(owners) {
    return () => {
        owners.flatMap(owner => {
            return availableEntities["characters"].filter(x => {
                const entity = x.constructor();
                const owners = ownersOf(entity.views[entity.view].image.source);
                if (owners)
                    return owners.indexOf(owner) != -1;
                else
                    return false;
            })
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

scenes["Kurri"] = makeOwnerScene(["kurrikage"]);

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
        return size + 1;
    }, 1)

    arrangeEntities(getSortedEntities());
    fitWorld(true);
}

scenes["Fidverse"] = () => {
    makeOwnerSceneViews(["fidchell", "cam"])();
    document.querySelector("#entity-" + (entityIndex - 1)).dataset.x = 0.5;
    document.querySelector("#entity-" + (entityIndex - 2)).dataset.x = 0.25;
    document.querySelector("#entity-" + (entityIndex - 3)).dataset.x = 0.75;
    updateSizes();
    fitWorld(true, 1);
}