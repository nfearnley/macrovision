function makeObject(name, height, mass, image) {
    views = {
        object: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: height
                },
                mass: {
                    name: "Mass",
                    power: 3,
                    type: "mass",
                    base: mass
                }
            },
            image: image,
            name: "Object"
        }
    };

    return makeEntity(name, "Object", views);
}

function makeObjects() {
    const results = [];

    results.push({
        name: "Soda Can",
        constructor: () => makeObject(
            "Soda Can",
            math.unit(4.83, "inches"),
            math.unit(15, "grams"),
            { source: "./media/objects/soda-can.svg" }
        )
    });

    return results;
}