const scenes = {};

scenes["Default"] = () => {
    importScene({ "entities": [{ "name": "Fen", "scale": 1, "view": "back", "x": "0", "y": "0" }], "world": { "height": 2.9053707516337908, "unit": "meters" }, "version": 0 });
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