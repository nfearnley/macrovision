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
            name: value.name
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

function makePlanet(name, diameter, mass, image) {
    return {
        name: name,
        constructor: () => makeObject(
            name,
            {
                body: {
                    height: diameter,
                    mass: mass,
                    image: (image === undefined ? {
                        source: "./media/objects/planet-generic.svg"
                    } : image),
                    name: "Body"
                }
            }
        )
    };
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
                    image: { source: "./media/objects/soda-can.svg" },
                    name: "Side"
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
                    image: { source: "./media/objects/sewing-pin.svg" },
                    name: "Side"
                },
                top: {
                    height: math.unit(2, "millimeters"),
                    image: { source: "./media/objects/pin-head.svg" },
                    name: "Head"
                }
            }
        )
    });

    results.push(makePlanet("Mercury", math.unit(4879, "km"), math.unit(0.330e24, "kg")));
    results.push(makePlanet("Venus", math.unit(12104, "km"), math.unit(4.87e24, "kg")));
    results.push(makePlanet("Earth", math.unit(12756, "km"), math.unit(5.97e24, "kg")));
    results.push(makePlanet("Moon", math.unit(3475, "km"), math.unit(0.073e24, "kg")));
    results.push(makePlanet("Mars", math.unit(6792, "km"), math.unit(0.642e24, "kg")));
    results.push(makePlanet("Jupiter", math.unit(142984, "km"), math.unit(1898e24, "kg")));
    results.push(makePlanet("Saturn", math.unit(120536, "km"), math.unit(568e24, "kg"), {source: "./media/objects/saturn.svg"}));
    results.push(makePlanet("Uranus", math.unit(51118, "km"), math.unit(86.8e24, "kg")));
    results.push(makePlanet("Neptune", math.unit(49528, "km"), math.unit(102e24, "kg")));
    results.push(makePlanet("Pluto", math.unit(2370, "km"), math.unit(0.0146e24, "kg")));

    return results;
}