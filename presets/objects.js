function makeObject(name, viewInfo) {
    views = {};
    console.log(viewInfo)

    Object.entries(viewInfo).forEach(([key, value]) => {
        console.log(key)
        views[key] = {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: value.height
                }
            },
            image: value.image,
            name: "Object"
        }

        if (value.mass) {
            views[key].attributes[key] = {
                name: "Mass",
                power: 3,
                type: "mass",
                base: value.mass
            };
        }
    });

    console.log(views)
    return makeEntity(name, "Object", views);
}

function makeObjects() {
    const results = [];

    results.push({
        name: "Soda Can",
        constructor: () => makeObject(
            "Soda Can",
            {
                front: {
                    height: math.unit(4.83, "inches"),
                    mass: math.unit(15, "grams"),
                    image: { source: "./media/objects/soda-can.svg" }
                }
            }
        )
    });

    results.push({
        name: "Sewing Pin",
        constructor: () => makeObject(
            "Sewing Pin",
            {
                side: {
                    height: math.unit(1.5, "inches"),
                    image: { source: "./media/objects/sewing-pin.svg" }
                },
                top: {
                    height: math.unit(2, "millimeters"),
                    image: { source: "./media/objects/pin-head.svg" }
                }
            }
        )
    });

    return results;
}