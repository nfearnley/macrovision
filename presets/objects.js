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
            name: value.name,
            rename: value.rename
        }

        if (value.mass) {
            views[key].attributes.mass = {
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

    results.push({
        name: "Coin",
        constructor: () => makeObject(
            "Coin",
            {
                penny: {
                    height: math.unit(0.75, "inches"),
                    mass: math.unit(2.5, "g"),
                    image: { source: "./media/objects/circle.svg" },
                    name: "Penny",
                    rename: true
                },
                nickel: {
                    height: math.unit(0.835, "inches"),
                    mass: math.unit(5, "g"),
                    image: { source: "./media/objects/circle.svg" },
                    name: "Nickel",
                    rename: true
                },
                dime: {
                    height: math.unit(0.705, "inches"),
                    mass: math.unit(2.268, "g"),
                    image: { source: "./media/objects/circle.svg" },
                    name: "Dime",
                    rename: true
                },
                quarter: {
                    height: math.unit(0.955, "inches"),
                    mass: math.unit(5.67, "g"),
                    image: { source: "./media/objects/circle.svg" },
                    name: "Quarter",
                    rename: true
                },
                dollar: {
                    height: math.unit(1.043, "inches"),
                    mass: math.unit(8.1, "g"),
                    image: { source: "./media/objects/circle.svg" },
                    name: "Dollar Coin",
                    rename: true
                },
            }
        )
    });

    results.push({
        name: "Pencil",
        constructor: () => makeObject(
            "Pencil",
            {
                pencil: {
                    height: math.unit(7.5, "inches"),
                    mass: math.unit(7, "g"),
                    image: { source: "./media/objects/pencil.svg" },
                    name: "Pencil"
                }
            }
        )
    });

    results.push({
        name: "Balls",
        constructor: () => makeObject(
            "Balls",
            {
                golf: {
                    height: math.unit(1.62, "inches"),
                    mass: math.unit(45, "g"),
                    image: { source: "./media/objects/circle.svg" },
                    name: "Golfball",
                    rename: true
                },
                tennis: {
                    height: math.unit(2.6, "inches"),
                    mass: math.unit(57, "g"),
                    image: { source: "./media/objects/circle.svg" },
                    name: "Tennisball",
                    rename: true
                },
                baseball: {
                    height: math.unit(2.9, "inches"),
                    mass: math.unit(145, "g"),
                    image: { source: "./media/objects/circle.svg" },
                    name: "Baseball",
                    rename: true
                },
                volleyball: {
                    height: math.unit(8, "inches"),
                    mass: math.unit(270, "g"),
                    image: { source: "./media/objects/circle.svg" },
                    name: "Volleyball",
                    rename: true
                }
            }
        )
    });

    results.push({
        name: "Paperclip",
        constructor: () => makeObject(
            "Paperclip",
            {
                paperclip: {
                    height: math.unit(1.834, "inches"),
                    mass: math.unit(1, "g"),
                    image: { source: "./media/objects/paperclip.svg" },
                    name: "Paperclip"
                }
            }
        )
    });

    results.push({
        name: "Pebbles",
        constructor: () => makeObject(
            "Pebbles",
            {
                gravelGrain: {
                    height: math.unit(20, "mm"),
                    image: { source: "./media/objects/pebble.svg" },
                    name: "Grain of gravel",
                    rename: true
                },
                sandGrain: {
                    height: math.unit(0.5, "mm"),
                    image: { source: "./media/objects/pebble.svg" },
                    name: "Grain of sand",
                    rename: true
                },
                siltGrain: {
                    height: math.unit(0.03, "mm"),
                    image: { source: "./media/objects/pebble.svg" },
                    name: "Grain of silt",
                    rename: true
                },
            }
        )
    });

    results.push({
        name: "Credit Card",
        constructor: () => makeObject(
            "Credit Card",
            {
                creditCard: {
                    height: math.unit(53.98, "mm"),
                    image: { source: "./media/objects/credit-card.svg" },
                    name: "Credit card",
                },
                creditCardVertical: {
                    height: math.unit(85.60, "mm"),
                    image: { source: "./media/objects/credit-card-vertical.svg" },
                    name: "Credit card (vertical)",
                },
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
