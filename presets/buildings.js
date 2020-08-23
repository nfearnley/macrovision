

function makeBuilding(name, height, image) {
    views = {
        building: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: height
                }
            },
            image: image,
            name: "building"
        },
    };

    return makeEntity({ name: name }, views);
}


function makeSkyscraper(name, image) {
    views = {
        building: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(1, "meter")
                }
            },
            image: image,
            name: "building"
        },
    };

    const sizes = [];

    sizes.push({
        name: "Short",
        height: math.unit(15, "stories")
    });
    sizes.push({
        name: "Medium",
        height: math.unit(40, "stories"),
        default: true
    });
    sizes.push({
        name: "Supertall",
        height: math.unit(350, "meters")
    });
    sizes.push({
        name: "Megatall",
        height: math.unit(650, "meters")
    });

    const entity = makeEntity({ name: name }, views, sizes);

    return entity;
}

async function makeBuildings() {
    var dataBuilding = await loadJson("data/buildings.json");
    var dataSkyscraper = await loadJson("data/buildings-skyscraper.json");
    var dataHeight = await loadJson("data/buildings-height.json");

    const results = [];

    results.push(...dataBuilding.map(function(d) {
        return {
            name: d.name,
            constructor: () => makeBuilding(
                d.name,
                d.height,
                d.image
            )
        };
    }));

    results.push(...dataSkyscraper.map(function(d) {
        return {
            name: d.name,
            constructor: () => makeSkyscraper(
                d.name,
                d.image
            )
        };
    }));

    results.push(...dataHeight.map(function(d) {
        return makeHeight(
            d.info,
            d.category,
            d.prefix,
            d.type
        )
    }));

    results.sort((b1, b2) => {
        e1 = b1.constructor();
        e2 = b2.constructor();
        return -math.subtract(e1.views[e1.defaultView].height, e2.views[e2.defaultView].height).value;
    });

    return results;
}
