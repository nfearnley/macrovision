function makeObject(name, viewInfo) {
    views = {};

    Object.entries(viewInfo).forEach(([key, value]) => {
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

    return makeEntity({ name: name }, views);
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

    results.push({
        name: "Lamp",
        constructor: () => makeObject(
            "Lamp",
            {
                lamp: {
                    height: math.unit(30, "inches"),
                    mass: math.unit(10, "lbs"),
                    image: { source: "./media/objects/lamp.svg" },
                    name: "Lamp"
                }
            }
        )
    });

    results.push({
        name: "Human",
        constructor: () => makeObject(
            "Human",
            {
                woman1: {
                    height: math.unit(5 + 4/12, "feet"),
                    mass: math.unit(140, "lbs"),
                    image: { source: "./media/objects/humans/woman-1.svg" },
                    name: "Woman 1"
                },
                man1: {
                    height: math.unit(5 + 6/12, "feet"),
                    mass: math.unit(150, "lbs"),
                    image: { source: "./media/objects/humans/man-1.svg" },
                    name: "Man 1"
                },
            }
        )
    });

    results.push({
        name: "Nail Polish",
        constructor: () => makeObject(
            "Nail Polish",
            {
                bottle: {
                    height: math.unit(3.25, "inches"),
                    mass: math.unit(66, "g"),
                    image: { source: "./media/objects/nail-polish.svg" },
                    name: "Bottle"
                }
            }
        )
    });

    results.push({
        name: "Shot Glass",
        constructor: () => makeObject(
            "Shot Glass",
            {
                glass: {
                    height: math.unit(2 + 3/8, "inches"),
                    mass: math.unit(75, "g"),
                    image: { source: "./media/objects/shot-glass.svg" },
                    name: "Bottle"
                }
            }
        )
    });

    results.push({
        name: "Beer Bottle",
        constructor: () => makeObject(
            "Beer Bottle",
            {
                longneck: {
                    height: math.unit(9, "inches"),
                    mass: math.unit(200, "g"),
                    image: { source: "./media/objects/beer-bottle.svg" },
                    name: "Longneck Bottle"
                }
            }
        )
    });
    
    results.sort((b1, b2) => {
        e1 = b1.constructor();
        e2 = b2.constructor();
        return -math.subtract(e1.views[e1.defaultView].height, e2.views[e2.defaultView].height).value;
    });

    return results;
}
