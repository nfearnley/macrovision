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
            name: name
        },
    };

    return makeEntity("Eiffel Tower", "Building", views);
}

function makeBuildings() {
    const results = [];
    
    results.push(makeBuilding(
        "Eiffel Tower",
        math.unit(324, "meter"),
        {source: "./media/buildings/eiffel-tower.svg"}
    ));

    return results;
}