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

        if (value.volume) {
            views[key].attributes.capacity = {
                name: "Volume",
                power: 3,
                type: "volume",
                base: value.volume
            }
        }
    });

    return makeEntity({ name: name }, views);
}

SHOE_REFERENCE = 60
function addShoeView(object, name, points) {
    object[name] = {
        height: math.unit(points / SHOE_REFERENCE, "inches"),
        image: { source: "./media/objects/shoes/shoe_" + name + ".svg" },
        name: name.replace(/-/g, " ").replace(/\b\w/g, x => x.toUpperCase()),
        rename: true
    }
}

function makeHeight(info, category, prefix = "", type = "objects") {
    const views = {};


    info.forEach(object => {
        let src;

        // this lets us provide our own source if needed
        // useful for reusing existing art
        if (object[3]) {
            src = object[3];
        } else {
            src = "./media/" + type + "/" + category.replace(/ /g, "-").toLowerCase() + "/" + prefix + object[0] + ".svg";
        }

        views[object[0]] = {
            height: math.unit(object[1], object[2]),
            image: { source: src },
            name: object[0].replace(/-/g, " ").replace(/\b\w/g, x => x.toUpperCase()),
            rename: true
        }
    });

    return {
        name: category,
        constructor: () => makeObject(
            category,
            views
        )
    }
}

function makeHeightWeight(info, category, prefix = "", type = "objects") {
    const views = {};
    info.forEach(object => {
        let src;
        // this lets us provide our own source if needed
        // useful for reusing existing art
        if (object[5]) {
            src = object[5];
        } else {
            src = "./media/" + type + "/" + category.replace(/ /g, "-").toLowerCase() + "/" + prefix + object[0] + ".svg";
        }
        views[object[0]] = {
            height: math.unit(object[1], object[2]),
            mass: math.unit(object[3], object[4]),
            image: { source: src },
            name: object[0].replace(/-/g, " ").replace(/\b\w/g, x => x.toUpperCase()),
            rename: true
        }
    });

    return {
        name: category,
        constructor: () => makeObject(
            category,
            views
        )
    }
}


function makeHeightWeightSphere(info, category, prefix = "", type = "objects") {
    const views = {};
    info.forEach(object => {
        let src;
        // this lets us provide our own source if needed
        // useful for reusing existing art
        if (object[5]) {
            src = object[5];
        } else {
            src = "./media/" + type + "/" + category.replace(/ /g, "-").toLowerCase() + "/" + prefix + object[0] + ".svg";
        }
        views[object[0]] = {
            height: math.unit(object[1], object[2]),
            mass: math.unit(object[3], object[4]),
            volume: math.unit(Math.PI * 4 / 3 * Math.pow((object[1]/2), 3), object[2] + "^3"),
            image: { source: src },
            name: object[0].replace(/-/g, " ").replace(/\b\w/g, x => x.toUpperCase()),
            rename: true
        }
    });

    return {
        name: category,
        constructor: () => makeObject(
            category,
            views
        )
    }
}

function makeShoes() {
    const views = {};

    [
        ["flip-flops", 154.239],
        ["knee-boots", 841.827],
        ["trainers", 260.607],
        ["stilettos", 418.839]
    ].forEach(shoe => {
        addShoeView(views, shoe[0], shoe[1])
    });

    return {
        name: "Shoes",
        constructor: () => makeObject(
            "Shoes",
            views
        )
    }
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
                    height: math.unit(2 + 3 / 8, "inches"),
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

    results.push({
        name: "Molecular",
        constructor: () => makeObject(
            "Molecular",
            {
                hydrogen: {
                    height: math.unit(1.06e-10, "mm"),
                    mass: math.unit(1, "dalton"),
                    image: { source: "./media/objects/circle.svg" },
                    name: "Hydrogen atom",
                    rename: true
                },
                proton: {
                    height: math.unit(1e-15, "mm"),
                    mass: math.unit(1, "dalton"),
                    image: { source: "./media/objects/circle.svg" },
                    name: "Proton",
                    rename: true
                },
            }
        )
    });
    results.push(makeShoes());

    results.push({
        name: "Flagpole",
        constructor: () => makeObject(
            "Flagpole",
            {
                residential: {
                    height: math.unit(20, "feet"),
                    image: { source: "./media/objects/flagpole.svg" },
                    name: "Residential"
                },
                medium: {
                    height: math.unit(50, "feet"),
                    image: { source: "./media/objects/flagpole.svg" },
                    name: "Medium"
                },
                large: {
                    height: math.unit(100, "feet"),
                    image: { source: "./media/objects/flagpole.svg" },
                    name: "Large"
                },
            }
        )
    });

    results.push({
        name: "Vending Machine",
        constructor: () => makeObject(
            "Vending Machine",
            {
                object: {
                    height: math.unit(183, "cm"),
                    mass: math.unit(347, "kg"),
                    image: { source: "./media/objects/vending-machine.svg" },
                    name: "Vending Machine"
                }
            }
        )
    })


    results.push({
        name: "International Space Station",
        constructor: () => makeObject(
            "International Space Station",
            {
                object: {
                    height: math.unit(209, "feet"),
                    mass: math.unit(925300, "lbs"),
                    image: { source: "./media/objects/international-space-station.svg" },
                    name: "International Space Station"
                }
            }
        )
    })

    results.push(makeHeight(
        [
            ["king", 4, "inches"],
            ["queen", 351 / 407 * 4, "inches"],
            ["bishop", 340 / 407 * 4, "inches"],
            ["knight", 309 / 407 * 4, "inches"],
            ["rook", 271 / 407 * 4, "inches"],
            ["pawn", 197 / 407 * 4, "inches"],
        ],
        "Chess Pieces",
        "chess_"
    ));

    results.push({
        name: "Strand",
        constructor: () => {
            views = {};

            viewInfo = {
                opticalFibre: {
                    name: "Optical Fibre",
                    thickness: math.unit(0.375, "mm")
                },
                hair: {
                    name: "Hair",
                    thickness: math.unit(0.07, "mm")
                },
                spiderSilk: {
                    name: "Spider Silk",
                    thickness: math.unit(0.003, "mm")
                },
                suspensionCables: {
                    name: "Suspension Bridge Cables",
                    thickness: math.unit(3, "feet")
                },
                capillary: {
                    name: "Capillary",
                    thickness: math.unit(7.5, "micrometers")
                },
                vein: {
                    name: "Vein",
                    thickness: math.unit(10, "mm")
                },
                thread: {
                    name: "Thread",
                    thickness: math.unit(0.4, "mm")
                },
                powerCord: {
                    name: "Power Cord",
                    thickness: math.unit(0.25, "inches")
                },
                pianoWireBass: {
                    name: "Piano Wire (Bass)",
                    thickness: math.unit(8.5, "mm")
                },
                pianoWireTreble: {
                    name: "Piano Wire (Treble)",
                    thickness: math.unit(0.85, "mm")
                },
                guitarString: {
                    name: "Guitar String",
                    thickness: math.unit(0.03, "inches")
                },
                powerLineThin: {
                    name: "Power Line (Thin)",
                    thickness: math.unit(0.325, "inches")
                },
                powerLineThick: {
                    name: "Power Line (Thick)",
                    thickness: math.unit(0.720, "inches")
                },
                carbonNanotube: {
                    name: "Carbon Nanotube",
                    thickness: math.unit(4, "nm")
                }

            }

            Object.entries(viewInfo).forEach(([key, value]) => {
                views[key] = {
                    attributes: {
                        height: {
                            name: "Height",
                            power: 1,
                            type: "length",
                            base: math.multiply(value.thickness, 253.4385 / 5)
                        },
                        thickness: {
                            name: "Thickness",
                            power: 1,
                            type: "length",
                            base: value.thickness
                        },
                    },
                    image: {
                        source: "./media/objects/strand.svg"
                    },
                    name: value.name,
                    rename: true
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

            return makeEntity({ name: "Strand" }, views);
        }
    })

    results.push(makeHeight(
        [
            ["animal-cell", 25, "micrometers"],
            ["plant-cell", 75, "micrometers"],
            ["mitochondria", 0.5, "micrometer"],
            ["bacteria", 0.3, "micrometer"],
            ["red-blood-cell", 6.5, "micrometer"],
            ["white-blood-cell", 13, "micrometer"],
            ["amoeba-proteus", 500, "micrometers"],
            ["chaos-carolinensis", 1500, "micrometers"]
        ],
        "Cells",
        "cell_"
    ))

    results.push(makeHeight(
        [
            ["stop-sign", 36, "inches"],
            ["yield-sign", 36, "inches"],
            ["pedestrian-crossing", 30, "inches"],
            ["highway-exit", 150, "inches"]
        ],
        "Signs",
        ""
    ))
    

    results.push({
        name: "Game Consoles",
        constructor: () => makeVehicleGroup([
            {
                name: "Switch",
                mass: math.unit(10.48, "ounces"),
                sides: {
                    "Front": { height: math.unit(4.01, "inches") },
                    "Top": { height: math.unit(1.13, "inches") },
                    "Side": { height: math.unit(4.01, "inches") },
                }
            }
        ],
            "Game Consoles",
            "",
            "objects")
    })


    results.sort((b1, b2) => {
        e1 = b1.constructor();
        e2 = b2.constructor();
        return -math.subtract(e1.views[e1.defaultView].height, e2.views[e2.defaultView].height).value;
    });


    return results;
}
