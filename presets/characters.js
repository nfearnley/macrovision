const characterMakers = [];

math.createUnit("parsec", {
    definition: "3.086e16 meters",
    prefixes: "long"
})
math.createUnit("parsecs", {
    definition: "3.086e16 meters",
    prefixes: "long"
})
math.createUnit("lightyears", {
    definition: "9.461e15 meters",
    prefixes: "long"
})
math.createUnit("AU", {
    definition: "149597870700 meters"
})
math.createUnit("AUs", {
    definition: "149597870700 meters"
})
function makeCharacter(name, author, viewInfo, defaultSizes, defaultSize, extraInfo) {
    if (extraInfo === undefined) {
        extraInfo = {}
    }
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
            info: value.info,
            rename: value.rename
        }

        if (value.weight) {
            views[key].attributes.weight = {
                name: "Mass",
                power: 3,
                type: "mass",
                base: value.weight
            };
        }
    });

    const entity = makeEntity(Object.assign(extraInfo, { name: name, author: author }), views, defaultSizes);

    if (defaultSize) {
        entity.views[entity.defaultView].height = defaultSize;
    }

    return entity;
}

characterMakers["Fen"] = () => {
    return makeCharacter(
        "Fen",
        "chemicalcrux",
        {
            back: {
                height: math.unit(2.2428, "meter"),
                weight: math.unit(124.738, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/fen/back.svg",
                    extra: 1025/935
                },
                info: {
                    description: {
                        mode: "append",
                        text: "\n\nHe is not currently looking at you."
                    }
                }
            },
            full: {
                height: math.unit(1.34, "meter"),
                weight: math.unit(225, "kg"),
                name: "Full",
                image: {
                    source: "./media/characters/fen/full.svg"
                },
                info: {
                    description: {
                        mode: "append",
                        text: "\n\nMunch."
                    }
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(2.2428, "meter")
            },
            {
                name: "Big",
                height: math.unit(12, "feet")
            },
            {
                name: "Minimacro",
                height: math.unit(30, "meter"),
                default: true,
                info: {
                    description: {
                        mode: "append",
                        text: "\n\nTOO DAMN BIG"
                    }
                }
            },
            {
                name: "Macro",
                height: math.unit(100, "meter"),
                info: {
                    description: {
                        mode: "append",
                        text: "\n\nTOO DAMN BIG"
                    }
                }
            },
            {
                name: "Macro+",
                height: math.unit(1000, "meter")
            },
            {
                name: "Megamacro",
                height: math.unit(10, "miles")
            }
        ],
        math.unit(100, "meter"),
        {
            description: {
                title: "Bio",
                text: "Very furry. Sheds on everything."
            }
        }
    )
};

characterMakers["Sofia"] = () => {
    return makeCharacter(
        "Sofia",
        "ZakuraTech",
        {
            front: {
                height: math.unit(183, "cm"),
                weight: math.unit(80, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/sofia/front.svg",
                    bottom: 0.01,
                    extra: 1 / (1 - 0.01)
                }
            },
            frontAlt: {
                height: math.unit(183, "cm"),
                weight: math.unit(80, "kg"),
                name: "Front (alt)",
                image: {
                    source: "./media/characters/sofia/front-alt.svg"
                }
            },
            back: {
                height: math.unit(183, "cm"),
                weight: math.unit(80, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/sofia/back.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(1.83, "meter")
            },
            {
                name: "Macro",
                height: math.unit(96, "feet")
            },
            {
                name: "Megamerger",
                height: math.unit(650, "feet")
            },
        ],
        math.unit(96, "feet")
    )
};

characterMakers["March"] = () => {
    return makeCharacter(
        "March",
        "March-Dragon",
        {
            front: {
                height: math.unit(7, "feet"),
                weight: math.unit(100, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/march/front.svg",
                    extra: (1 / (1 - 0.015)),
                    bottom: 0.015
                }
            },
            foot: {
                height: math.unit(0.9, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/march/foot.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7.9, "feet")
            },
            {
                name: "Macro",
                height: math.unit(220, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(2.98, "km"),
                default: true
            },   
            {
                name: "Gigamacro",
                height: math.unit(15963, "km")
            },
            {
                name: "Teramacro",
                height: math.unit(2980000000, "km")
            },
            {
                name: "Examacro",
                height: math.unit(250, "parsecs")
            },
        ]
    )
};

function makeMarch() {
    const views = {
        front: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(100, "kg")
                }
            },
            image: {
                source: "./media/characters/march/front.svg"
            },
            name: "Front"
        },
        foot: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(0.9, "feet")
                }
            },
            image: {
                source: "./media/characters/march/foot.svg"
            },
            name: "Foot"
        }
    };

    const entity = makeEntity({ name: "March", author: "March-Dragon" }, views, []);

    entity.sizes.push({
        name: "Normal",
        height: math.unit(7.9, "feet")
    });

    entity.sizes.push({
        name: "Macro",
        height: math.unit(220, "meters")
    });

    entity.sizes.push({
        name: "Megamacro",
        height: math.unit(2.98, "km")
    });

    entity.sizes.push({
        name: "Gigamacro",
        height: math.unit(15963, "km")
    });

    entity.sizes.push({
        name: "Teramacro",
        height: math.unit(2980000000, "kilometers")
    });

    entity.sizes.push({
        name: "Examacro",
        height: math.unit(250, "parsecs")
    });

    entity.views.front.height = math.unit(2.98, "km");
    return entity;
}

function makeNoir() {
    const views = {
        front: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(6, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(60, "kg")
                }
            },
            image: {
                source: "./media/characters/noir/front.svg",
                bottom: 0.01
            },
            name: "Front"
        }
    };

    const entity = makeEntity({ name: "Noir", author: "March-Dragon" }, views, []);

    entity.sizes.push({
        name: "Normal",
        height: math.unit(6.6, "feet")
    });

    entity.sizes.push({
        name: "Macro",
        height: math.unit(500, "feet")
    });

    entity.sizes.push({
        name: "Megamacro",
        height: math.unit(2.5, "km")
    });

    entity.sizes.push({
        name: "Gigamacro",
        height: math.unit(22500, "km")
    });

    entity.sizes.push({
        name: "Teramacro",
        height: math.unit(2500000000, "kilometers")
    });

    entity.sizes.push({
        name: "Examacro",
        height: math.unit(200, "parsecs")
    });

    entity.views.front.height = math.unit(2.5, "km");
    return entity;
}

function makeOkuri() {
    const views = {
        front: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(100, "kg")
                }
            },
            image: {
                source: "./media/characters/okuri/front.svg"
            },
            name: "Front"
        },
        back: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(100, "kg")
                }
            },
            image: {
                source: "./media/characters/okuri/back.svg"
            },
            name: "Back"
        }
    };

    const entity = makeEntity({ name: "Okuri", author: "OrionMechadragon" }, views, []);
    entity.views.front.height = math.unit(100, "miles");
    return entity;
}

function makeManny() {
    const views = {
        front: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(100, "kg")
                }
            },
            image: {
                source: "./media/characters/manny/front.svg"
            },
            name: "Front"
        },
        back: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(100, "kg")
                }
            },
            image: {
                source: "./media/characters/manny/back.svg"
            },
            name: "Back"
        }
    };

    const entity = makeEntity({ name: "Manny", author: "Dialuca01" }, views, []);

    entity.sizes.push({
        name: "Normal",
        height: math.unit(7, "feet")
    });
    entity.sizes.push({
        name: "Macro",
        height: math.unit(78, "feet")
    });
    entity.sizes.push({
        name: "Macro+",
        height: math.unit(300, "meters")
    });
    entity.sizes.push({
        name: "Macro++",
        height: math.unit(2400, "feet")
    });
    entity.sizes.push({
        name: "Megamacro",
        height: math.unit(5167, "meters")
    });
    entity.sizes.push({
        name: "Gigamacro",
        height: math.unit(41769, "miles")
    });

    entity.views.front.height = math.unit(78, "feet");
    return entity;
}

function makeAdake() {
    const views = {
        front: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(100, "kg")
                }
            },
            image: {
                source: "./media/characters/adake/front-1.svg"
            },
            name: "Front"
        },
        frontAlt: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(100, "kg")
                }
            },
            image: {
                source: "./media/characters/adake/front-2.svg",
                bottom: 0.005
            },
            name: "Front (Alt)"
        },
        back: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(100, "kg")
                }
            },
            image: {
                source: "./media/characters/adake/back.svg",
            },
            name: "Back"
        },
        kneel: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(5.385, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(100, "kg")
                }
            },
            image: {
                source: "./media/characters/adake/kneel.svg",
                bottom: 0.05
            },
            name: "Kneeling"
        },
    };

    const entity = makeEntity({ name: "Adake", author: "Dialuca01" }, views, []);

    entity.sizes.push({
        name: "Normal",
        height: math.unit(7, "feet")
    });
    entity.sizes.push({
        name: "Macro",
        height: math.unit(78, "feet")
    });
    entity.sizes.push({
        name: "Macro+",
        height: math.unit(300, "meters")
    });
    entity.sizes.push({
        name: "Macro++",
        height: math.unit(2400, "feet")
    });
    entity.sizes.push({
        name: "Megamacro",
        height: math.unit(5167, "meters")
    });
    entity.sizes.push({
        name: "Gigamacro",
        height: math.unit(41769, "miles")
    });
    entity.views.front.height = math.unit(78, "feet");
    return entity;
}

function makeElijah() {
    const views = {
        side: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(50, "kg")
                }
            },
            image: {
                source: "./media/characters/elijah/side.svg",
                bottom: 0.01
            },
            name: "Side"
        },
        foot: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(2, "feet")
                }
            },
            image: {
                source: "./media/characters/elijah/foot.svg",
            },
            name: "Foot"
        }
    };

    const entity = makeEntity({ name: "Elijah", author: "Elijah" }, views, []);

    entity.sizes.push({
        name: "Normal",
        height: math.unit(1.65, "meters")
    });

    entity.sizes.push({
        name: "Macro",
        height: math.unit(55, "meters")
    });

    entity.sizes.push({
        name: "Macro+",
        height: math.unit(105, "meters")
    });

    entity.views.side.height = math.unit(55, "meters");
    return entity;
}

function makeRai() {
    const views = {
        front: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(80, "kg")
                }
            },
            image: {
                source: "./media/characters/rai/front.svg"
            },
            name: "Front"
        },
        side: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(80, "kg")
                }
            },
            image: {
                source: "./media/characters/rai/side.svg"
            },
            name: "Side"
        },
        back: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(80, "kg")
                }
            },
            image: {
                source: "./media/characters/rai/back.svg"
            },
            name: "Back"
        }
    };

    const entity = makeEntity({ name: "Rai", author: "shadowblade945" }, views, []);
    entity.views.front.height = math.unit(302, "feet");
    return entity;
}

function makeJazzy() {
    const views = {
        front: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(80, "kg")
                }
            },
            image: {
                source: "./media/characters/jazzy/front.svg",
                bottom: 0.01
            },
            name: "Front"
        },
        back: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(80, "kg")
                }
            },
            image: {
                source: "./media/characters/jazzy/back.svg"
            },
            name: "Back"
        }
    };

    const entity = makeEntity({ name: "Jazzy", author: "Jazzywolf" }, views, []);
    entity.views.front.height = math.unit(216, "feet");
    return entity;
}

function makeFlamm() {
    const views = {
        front: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(80, "kg")
                }
            },
            image: {
                source: "./media/characters/flamm/front.svg"
            },
            name: "Front"
        }
    };

    const entity = makeEntity({ name: "Flamm", author: "Flamm" }, views, []);

    entity.sizes.push({
        name: "Normal",
        height: math.unit(9.5, "feet")
    });

    entity.sizes.push({
        name: "Macro",
        height: math.unit(200, "feet")
    });

    entity.views.front.height = math.unit(200, "feet");
    return entity;
}

characterMakers["Zephiro"] = () => {
    return makeCharacter(
        "Zephiro",
        "Zephiro",
        {
            front: {
                height: math.unit(7, "feet"),
                weight: math.unit(80, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/zephiro/front.svg",
                    extra: 2309/2162 * (1 / (1 - 0.069)),
                    bottom: 0.069
                }
            },
            side: {
                height: math.unit(7, "feet"),
                weight: math.unit(80, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/zephiro/side.svg",
                    extra: 2403/2279 * (1 / (1 - 0.015)),
                    bottom: 0.015
                }
            },
            back: {
                height: math.unit(7, "feet"),
                weight: math.unit(80, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/zephiro/back.svg",
                    extra: 2373/2244 * (1 / (1 - 0.013)),
                    bottom: 0.013
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(3, "inches")
            },
            {
                name: "Normal",
                height: math.unit(5 + 3/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(118, "feet")
            },   
        ]
    )
};

function makeFory() {
    const views = {
        front: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(90, "kg")
                }
            },
            image: {
                source: "./media/characters/fory/front.svg"
            },
            name: "Front"
        }
    };

    const entity = makeEntity({ name: "Fory", author: "Manny" }, views, []);


    entity.sizes.push({
        name: "Normal",
        height: math.unit(5, "feet")
    });

    entity.sizes.push({
        name: "Macro",
        height: math.unit(50, "feet")
    });

    entity.views.front.height = math.unit(50, "feet");
    return entity;
}

function makeKurrikage() {
    const views = {
        front: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(90, "kg")
                }
            },
            image: {
                source: "./media/characters/kurrikage/front.svg"
            },
            name: "Front"
        },
        back: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(90, "kg")
                }
            },
            image: {
                source: "./media/characters/kurrikage/back.svg"
            },
            name: "Back"
        },
        paw: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(1.5, "feet")
                }
            },
            image: {
                source: "./media/characters/kurrikage/paw.svg"
            },
            name: "Paw"
        },
        staff: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(6.7, "feet")
                }
            },
            image: {
                source: "./media/characters/kurrikage/staff.svg"
            },
            name: "Staff"
        },
        peek: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(1.05, "feet")
                }
            },
            image: {
                source: "./media/characters/kurrikage/peek.svg",
                bottom: 0.08
            },
            name: "Peeking"
        }
    };

    const entity = makeEntity({ name: "Kurrikage", author: "Kurrikage" }, views, []);
    entity.views.front.height = math.unit(12, "feet");

    entity.sizes.push({
        name: "Normal",
        height: math.unit(12, "feet"),
        default: true
    });
    entity.sizes.push({
        name: "Big",
        height: math.unit(20, "feet")
    });
    entity.sizes.push({
        name: "Macro",
        height: math.unit(500, "feet")
    });
    entity.sizes.push({
        name: "Megamacro",
        height: math.unit(20, "miles")
    });

    return entity;
}

characterMakers["Shingo"] = () => {
    return makeCharacter(
        "Shingo",
        "Shingo",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(75, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/shingo/front.svg",
                    extra: 3511/3338 * (1 / (1 - 0.005)),
                    bottom: 0.005
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(4, "inches")
            },
            {
                name: "Normal",
                height: math.unit(6, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(108, "feet")
            }
        ]
    )
};

function makeAigey() {
    const views = {
        side: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(6, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(75, "kg")
                }
            },
            image: {
                source: "./media/characters/aigey/side.svg"
            },
            name: "Side"
        }
    };

    const entity = makeEntity({ name: "Aigey", author: "Aigey" }, views, []);

    entity.sizes.push({
        name: "Macro",
        height: math.unit(200, "feet")
    });

    entity.sizes.push({
        name: "Megamacro",
        height: math.unit(100, "miles")
    });

    entity.views[entity.defaultView].height = math.unit(200, "feet");

    return entity;
}

function makeNatasha() {
    const views = {
        side: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(6, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(75, "kg")
                }
            },
            image: {
                source: "./media/characters/natasha/front.svg"
            },
            name: "Side"
        }
    };

    const entity = makeEntity({ name: "Natasha", author: "Natasha" }, views, []);

    entity.sizes.push({
        name: "Normal",
        height: math.unit(5 + 5 / 12, "feet")
    });

    entity.sizes.push({
        name: "Large",
        height: math.unit(12, "feet")
    });
    entity.sizes.push({
        name: "Macro",
        height: math.unit(100, "feet")
    });

    entity.sizes.push({
        name: "Macro+",
        height: math.unit(260, "feet")
    });

    entity.sizes.push({
        name: "Macro++",
        height: math.unit(1, "mile")
    });

    entity.views[entity.defaultView].height = math.unit(100, "feet");

    return entity;
}

function makeMalik() {
    const views = {
        front: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(6, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(75, "kg")
                }
            },
            image: {
                source: "./media/characters/malik/front.svg"
            },
            name: "Front"
        },
        side: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(6, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(75, "kg")
                }
            },
            image: {
                extra: 1.1539,
                source: "./media/characters/malik/side.svg"
            },
            name: "Side"
        },
        back: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(6, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(75, "kg")
                }
            },
            image: {
                source: "./media/characters/malik/back.svg"
            },
            name: "Back"
        },
    };

    const entity = makeEntity({ name: "Malik", author: "Fuzzypaws" }, views, []);

    entity.sizes.push({
        name: "Macro",
        height: math.unit(156, "feet")
    });

    entity.sizes.push({
        name: "Macro+",
        height: math.unit(1188, "feet")
    });

    entity.views[entity.defaultView].height = math.unit(156, "feet");

    return entity;
}

function makeSefer() {
    const views = {
        front: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(6, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(75, "kg")
                }
            },
            image: {
                source: "./media/characters/sefer/front.svg"
            },
            name: "Front"
        },
        back: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(6, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(75, "kg")
                }
            },
            image: {
                source: "./media/characters/sefer/back.svg"
            },
            name: "Back"
        },
    };

    const entity = makeEntity({ name: "Sefer", author: "Fuzzypaws" }, views, []);

    entity.views[entity.defaultView].height = math.unit(6, "feet");

    return entity;
}

characterMakers["North"] = () => {
    return makeCharacter(
        "North",
        "chemicalcrux",
        {
            body: {
                height: math.unit(2.2428, "meter"),
                weight: math.unit(124.738, "kg"),
                name: "Body",
                image: {
                    extra: 1225 / 1050,
                    source: "./media/characters/north/front.svg"
                }
            }
        },
        [
            {
                name: "Micro",
                height: math.unit(4, "inches")
            },
            {
                name: "Macro",
                height: math.unit(63, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(101, "miles")
            }
        ],
        math.unit(101, "miles")
    )
};

characterMakers["Talan"] = () => {
    return makeCharacter(
        "Talan",
        "talanstrider",
        {
            body: {
                height: math.unit(2, "meter"),
                weight: math.unit(70, "kg"),
                name: "Body",
                image: {
                    bottom: 0.02,
                    source: "./media/characters/talan/front.svg"
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(4, "meters")
            },
            {
                name: "Macro",
                height: math.unit(100, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(2, "miles")
            },
            {
                name: "Gigamacro",
                height: math.unit(5000, "miles")
            },
            {
                name: "Teramacro",
                height: math.unit(100, "parsecs")
            }
        ],
        math.unit(2, "miles")
    )
};

characterMakers["Gael'Rathus"] = () => {
    return makeCharacter(
        "Gael'Rathus",
        "Kurrikage",
        {
            front: {
                height: math.unit(2, "meter"),
                weight: math.unit(90, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/gael'rathus/front.svg"
                }
            },
            frontAlt: {
                height: math.unit(2, "meter"),
                weight: math.unit(90, "kg"),
                name: "Front (alt)",
                image: {
                    source: "./media/characters/gael'rathus/front-alt.svg"
                }
            },
            frontAlt2: {
                height: math.unit(2, "meter"),
                weight: math.unit(90, "kg"),
                name: "Front (alt 2)",
                image: {
                    source: "./media/characters/gael'rathus/front-alt-2.svg"
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(9, "feet")
            },
            {
                name: "Large",
                height: math.unit(25, "feet")
            },
            {
                name: "Macro",
                height: math.unit(0.25, "miles")
            },
            {
                name: "Megamacro",
                height: math.unit(10, "miles")
            }
        ],
        math.unit(9, "feet")
    )
};

characterMakers["Sosha"] = () => {
    return makeCharacter(
        "Sosha",
        "Sdocat",
        {
            side: {
                height: math.unit(2, "meter"),
                weight: math.unit(140, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/sosha/side.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(12, "feet")
            }
        ],
        math.unit(12, "feet")
    )
};

characterMakers["Kurribird"] = () => {
    return makeCharacter(
        "Kurribird",
        "Kurrikage",
        {
            front: {
                height: math.unit(2, "meter"),
                weight: math.unit(50, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/kurribird/front.svg",
                    bottom: 0.015
                }
            },
            frontAlt: {
                height: math.unit(1.5, "meter"),
                weight: math.unit(50, "kg"),
                name: "Front (Alt)",
                image: {
                    source: "./media/characters/kurribird/front-alt.svg",
                    extra: 1.45
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7, "feet")
            },
            {
                name: "Big",
                height: math.unit(15, "feet")
            },
            {
                name: "Macro",
                height: math.unit(1500, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(2, "miles")
            }
        ],
        math.unit(12, "feet")
    )
};

characterMakers["Elbial"] = () => {
    return makeCharacter(
        "Elbial",
        "Neopuc",
        {
            front: {
                height: math.unit(2, "meter"),
                weight: math.unit(80, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/elbial/front.svg"
                }
            },
            side: {
                height: math.unit(2, "meter"),
                weight: math.unit(80, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/elbial/side.svg"
                }
            },
            back: {
                height: math.unit(2, "meter"),
                weight: math.unit(80, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/elbial/back.svg"
                }
            },
        },
        [
            {
                name: "Large",
                height: math.unit(100, "feet")
            },
            {
                name: "Macro",
                height: math.unit(500, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(10, "miles")
            },
            {
                name: "Gigamacro",
                height: math.unit(25000, "miles")
            },
            {
                name: "Full-Size",
                height: math.unit(8000000, "gigaparsecs")
            }
        ],
        math.unit(500, "feet")
    )
};

characterMakers["Noah"] = () => {
    return makeCharacter(
        "Noah",
        "Neopuc",
        {
            front: {
                height: math.unit(2, "meter"),
                weight: math.unit(60, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/noah/front.svg"
                }
            },
            talons: {
                height: math.unit(0.315, "meter"),
                name: "Talons",
                image: {
                    source: "./media/characters/noah/talons.svg"
                }
            }
        },
        [
            {
                name: "Large",
                height: math.unit(50, "feet")
            },
            {
                name: "Macro",
                height: math.unit(750, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(50, "miles")
            },
            {
                name: "Gigamacro",
                height: math.unit(100000, "miles")
            },
            {
                name: "Full-Size",
                height: math.unit(3000000000, "miles")
            }
        ],
        math.unit(750, "feet")
    )
};

characterMakers["Natalya"] = () => {
    return makeCharacter(
        "Natalya",
        "Neopuc",
        {
            front: {
                height: math.unit(2, "meter"),
                weight: math.unit(80, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/natalya/front.svg"
                }
            },
            back: {
                height: math.unit(2, "meter"),
                weight: math.unit(80, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/natalya/back.svg"
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(150, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(5, "miles")
            },
            {
                name: "Full-Size",
                height: math.unit(600, "kiloparsecs")
            }
        ],
        math.unit(150, "feet")
    )
};

characterMakers["Erestrebah"] = () => {
    return makeCharacter(
        "Erestrebah",
        "Kurrikage",
        {
            front: {
                height: math.unit(2, "meter"),
                weight: math.unit(50, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/erestrebah/front.svg"
                }
            },
            back: {
                height: math.unit(2, "meter"),
                weight: math.unit(50, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/erestrebah/back.svg",
                    extra: 1.2139
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(10, "feet")
            },
            {
                name: "Large",
                height: math.unit(50, "feet")
            },
            {
                name: "Macro",
                height: math.unit(300, "feet")
            },
            {
                name: "Macro+",
                height: math.unit(750, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(3, "miles")
            }
        ],
        math.unit(50, "feet")
    )
};

characterMakers["Jennifer"] = () => {
    return makeCharacter(
        "Jennifer",
        "Neopuc",
        {
            front: {
                height: math.unit(2, "meter"),
                weight: math.unit(80, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/jennifer/front.svg",
                    bottom: 0.11,
                    extra: 1.16
                }
            },
            frontAlt: {
                height: math.unit(2, "meter"),
                weight: math.unit(80, "kg"),
                name: "Front (Alt)",
                image: {
                    source: "./media/characters/jennifer/front-alt.svg"
                }
            }
        },
        [
            {
                name: "Canon Height",
                height: math.unit(120, "feet")
            },
            {
                name: "Macro+",
                height: math.unit(300, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(20000, "feet")
            }
        ],
        math.unit(120, "feet")
    )
};

characterMakers["Kalista"] = () => {
    return makeCharacter(
        "Kalista",
        "Kalista",
        {
            front: {
                height: math.unit(2, "meter"),
                weight: math.unit(50, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/kalista/front.svg",
                    extra: 1947/1700
                }
            },
            back: {
                height: math.unit(2, "meter"),
                weight: math.unit(50, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/kalista/back.svg",
                    extra: 1366/1156
                }
            }
        },
        [
            {
                name: "Uncomfortably Small",
                height: math.unit(10, "feet")
            },
            {
                name: "Small",
                height: math.unit(30, "feet")
            },
            {
                name: "Macro",
                height: math.unit(100, "feet")
            },
            {
                name: "Macro+",
                height: math.unit(2000, "feet")
            },
            {
                name: "True Form",
                height: math.unit(8924, "miles")
            }
        ],
        math.unit(100, "feet")
    )
};

characterMakers["GiantGrowingVixen"] = () => {
    return makeCharacter(
        "GiantGrowingVixen",
        "GiantGrowingVixen",
        {
            front: {
                height: math.unit(2, "meter"),
                weight: math.unit(120, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/ggv/front.svg"
                }
            },
            side: {
                height: math.unit(2, "meter"),
                weight: math.unit(120, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/ggv/side.svg"
                }
            }
        },
        [
            {
                name: "Extremely Puny",
                height: math.unit(9 + 5 / 12, "feet")
            },
            {
                name: "Horribly Small",
                height: math.unit(47.7, "miles")
            },
            {
                name: "Reasonably Sized",
                height: math.unit(25000, "parsecs")
            }
        ],
        math.unit(47.7, "miles")
    )
};

characterMakers["Napalm"] = () => {
    return makeCharacter(
        "Napalm",
        "RathDaKrogan",
        {
            front: {
                height: math.unit(2, "meter"),
                weight: math.unit(75, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/napalm/front.svg"
                }
            },
            back: {
                height: math.unit(2, "meter"),
                weight: math.unit(75, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/napalm/back.svg"
                }
            }
        },
        [
            {
                name: "Standard",
                height: math.unit(55, "feet")
            }
        ],
        math.unit(55, "feet")
    )
};

characterMakers["Asana"] = () => {
    return makeCharacter(
        "Asana",
        "Asana",
        {
            front: {
                height: math.unit(7 + 5 / 6, "feet"),
                weight: math.unit(325, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/asana/front.svg",
                    extra: 1128 / 1068
                }
            },
            back: {
                height: math.unit(7 + 5 / 6, "feet"),
                weight: math.unit(325, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/asana/back.svg",
                    extra: 1128 / 1068
                }
            },
        },
        [
            {
                name: "Standard",
                height: math.unit(7 + 5 / 6, "feet")
            },
            {
                name: "Large",
                height: math.unit(10, "meters")
            },
            {
                name: "Macro",
                height: math.unit(2500, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(5e6, "meters")
            },
            {
                name: "Examacro",
                height: math.unit(5e12, "lightyears")
            },
            {
                name: "Max Size",
                height: math.unit(1e31, "lightyears")
            }
        ],
        math.unit(7 + 5 / 6, "feet")
    )
};

characterMakers["Ebony"] = () => {
    return makeCharacter(
        "Ebony",
        "Lazerwolf",
        {
            front: {
                height: math.unit(2, "meter"),
                weight: math.unit(60, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/ebony/front.svg",
                    bottom: 0.03,
                    extra: 1045 / 810 + 0.03
                }
            },
            side: {
                height: math.unit(2, "meter"),
                weight: math.unit(60, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/ebony/side.svg",
                    bottom: 0.03,
                    extra: 1045 / 810 + 0.03
                }
            },
            back: {
                height: math.unit(2, "meter"),
                weight: math.unit(60, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/ebony/back.svg",
                    bottom: 0.01,
                    extra: 1045 / 810 + 0.01
                }
            },
        },
        [
            {
                name: "Standard",
                height: math.unit(9 / 8 * (7 + 5 / 12), "feet")
            },
            {
                name: "Macro",
                height: math.unit(200, "feet")
            },
            {
                name: "Gigamacro",
                height: math.unit(13000, "km")
            }
        ],
        math.unit(7 + 5 / 12, "feet")
    )
};

characterMakers["Mountain"] = () => {
    return makeCharacter(
        "Mountain",
        "Asana",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(175, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/mountain/front.svg"
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(175, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/mountain/back.svg"
                }
            },
        },
        [
            {
                name: "Large",
                height: math.unit(20, "meters")
            },
            {
                name: "Macro",
                height: math.unit(300, "meters")
            },
            {
                name: "Gigamacro",
                height: math.unit(10000, "km")
            },
            {
                name: "Examacro",
                height: math.unit(10e9, "lightyears")
            }
        ],
        math.unit(10000, "km")
    )
};

characterMakers["Rick"] = () => {
    return makeCharacter(
        "Rick",
        "Victni",
        {
            front: {
                height: math.unit(8, "feet"),
                weight: math.unit(500, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/rick/front.svg"
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(8, "feet")
            },
            {
                name: "Macro",
                height: math.unit(5, "km")
            }
        ],
        math.unit(8, "feet")
    )
};

characterMakers["Ona"] = () => {
    return makeCharacter(
        "Ona",
        "Arrogance127",
        {
            front: {
                height: math.unit(8, "feet"),
                weight: math.unit(120, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/ona/front.svg"
                }
            },
            frontAlt: {
                height: math.unit(8, "feet"),
                weight: math.unit(120, "lb"),
                name: "Front (Alt)",
                image: {
                    source: "./media/characters/ona/front-alt.svg"
                }
            },
            back: {
                height: math.unit(8, "feet"),
                weight: math.unit(120, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/ona/back.svg"
                }
            },
            foot: {
                height: math.unit(1.1, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/ona/foot.svg"
                }
            }
        },
        [
            {
                name: "Megamacro",
                height: math.unit(70, "km")
            },
            {
                name: "Gigamacro",
                height: math.unit(681818, "miles")
            },
            {
                name: "Examacro",
                height: math.unit(3800000, "lightyears")
            },
        ],
        math.unit(70, "km")
    )
};

characterMakers["Mech"] = () => {
    return makeCharacter(
        "Mech",
        "mechEdragon",
        {
            front: {
                height: math.unit(12, "feet"),
                weight: math.unit(3000, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/mech/front.svg",
                    bottom: 0.025,
                }
            },
            back: {
                height: math.unit(12, "feet"),
                weight: math.unit(3000, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/mech/back.svg",
                    bottom: 0.03,
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(300, "feet")
            },
            {
                name: "Macro+",
                height: math.unit(1500, "feet")
            },
        ],
        math.unit(300, "feet")
    )
};

characterMakers["Gregory"] = () => {
    return makeCharacter(
        "Gregory",
        "GregoryKlippenspringer",
        {
            front: {
                height: math.unit(1.3, "meter"),
                weight: math.unit(30, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/gregory/front.svg",
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(1.3, "meter")
            },
            {
                name: "Macro",
                height: math.unit(20, "meter")
            }
        ],
        math.unit(1.3, "meter")
    )
};

characterMakers["Elory"] = () => {
    return makeCharacter(
        "Elory",
        "GregoryKlippenspringer",
        {
            front: {
                height: math.unit(2.8, "meter"),
                weight: math.unit(200, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/elory/front.svg",
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(2.8, "meter")
            },
            {
                name: "Macro",
                height: math.unit(38, "meter")
            }
        ],
        math.unit(2.8, "meter")
    )
};

characterMakers["Angelpatamon"] = () => {
    return makeCharacter(
        "Angelpatamon",
        "GregoryKlippenspringer",
        {
            front: {
                height: math.unit(470, "feet"),
                weight: math.unit(924, "tons"),
                name: "Front",
                image: {
                    source: "./media/characters/angelpatamon/front.svg",
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(470, "feet")
            },
            {
                name: "Deity Size I",
                height: math.unit(28651.2, "km")
            },
            {
                name: "Deity Size II",
                height: math.unit(171907.2, "km")
            }
        ],
        math.unit(470, "feet")
    )
};

characterMakers["Cryae"] = () => {
    return makeCharacter(
        "Cryae",
        "GregoryKlippenspringer",
        {
            side: {
                height: math.unit(7.2, "meter"),
                weight: math.unit(8.2, "tons"),
                name: "Side",
                image: {
                    source: "./media/characters/cryae/side.svg",
                    extra: 3500 / 1500
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(7.2, "meter")
            }
        ],
        math.unit(7.2, "meter")
    )
};

characterMakers["Xera"] = () => {
    return makeCharacter(
        "Xera",
        "Asana",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(175, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/xera/front.svg",
                    extra: 2300 / 2061
                }
            },
            side: {
                height: math.unit(6, "feet"),
                weight: math.unit(175, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/xera/side.svg",
                    extra: 2300 / 2061
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(175, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/xera/back.svg"
                }
            },
        },
        [
            {
                name: "Small",
                height: math.unit(10, "feet")
            },
            {
                name: "Macro",
                height: math.unit(500, "meters")
            },
            {
                name: "Macro+",
                height: math.unit(10, "km")
            },
            {
                name: "Gigamacro",
                height: math.unit(25000, "km")
            },
            {
                name: "Teramacro",
                height: math.unit(3e6, "km")
            }
        ],
        math.unit(500, "meters")
    )
};

characterMakers["Nebula"] = () => {
    return makeCharacter(
        "Nebula",
        "Cilenomon",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(175, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/nebula/front.svg",
                    extra: 2600 / 2450
                }
            }
        },
        [
            {
                name: "Small",
                height: math.unit(4.5, "meters")
            },
            {
                name: "Macro",
                height: math.unit(1500, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(150, "km")
            },
            {
                name: "Gigamacro",
                height: math.unit(27000, "km")
            }
        ],
        math.unit(1500, "meters")
    )
};

characterMakers["Abysgar"] = () => {
    return makeCharacter(
        "Abysgar",
        "Cilenomon",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(225, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/abysgar/front.svg"
                }
            }
        },
        [
            {
                name: "Small",
                height: math.unit(4.5, "meters")
            },
            {
                name: "Macro",
                height: math.unit(1250, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(125, "km")
            },
            {
                name: "Gigamacro",
                height: math.unit(26000, "km")
            }
        ],
        math.unit(1250, "meters")
    )
};

characterMakers["Yakuz"] = () => {
    return makeCharacter(
        "Yakuz",
        "Cilenomon",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(180, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/yakuz/front.svg"
                }
            }
        },
        [
            {
                name: "Small",
                height: math.unit(5, "meters")
            },
            {
                name: "Macro",
                height: math.unit(2500, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(200, "km")
            },
            {
                name: "Gigamacro",
                height: math.unit(100000, "km")
            }
        ],
        math.unit(1500, "meters")
    )
};

characterMakers["Mirova"] = () => {
    return makeCharacter(
        "Mirova",
        "Cilenomon",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(175, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/mirova/front.svg"
                }
            }
        },
        [
            {
                name: "Small",
                height: math.unit(5, "meters")
            },
            {
                name: "Macro",
                height: math.unit(900, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(135, "km")
            },
            {
                name: "Gigamacro",
                height: math.unit(20000, "km")
            }
        ],
        math.unit(900, "meters")
    )
};

characterMakers["Asana (Mech)"] = () => {
    return makeCharacter(
        "Asana (Mech)",
        "Asana",
        {
            side: {
                height: math.unit(28.35, "feet"),
                weight: math.unit(99.75, "tons"),
                name: "Side",
                image: {
                    source: "./media/characters/asana-mech/side.svg"
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(28.35, "feet")
            },
            {
                name: "Macro",
                height: math.unit(2500, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(25, "miles")
            },
            {
                name: "Examacro",
                height: math.unit(6e8, "lightyears")
            },
        ],
        math.unit(28.35, "feet")
    )
};

characterMakers["Ashtrek"] = () => {
    return makeCharacter(
        "Ashtrek",
        "Ashtrek",
        {
            front: {
                height: math.unit(2, "meters"),
                weight: math.unit(70, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/ashtrek/front.svg",
                    extra: 560/524 * (1 / (1 - 0.01)),
                    bottom: 0.01
                }
            },
            frontArmor: {
                height: math.unit(2, "meters"),
                weight: math.unit(76, "kg"),
                name: "Front (Armor)",
                image: {
                    source: "./media/characters/ashtrek/front-armor.svg",
                    extra: 561/527 * (1 / (1 - 0.01)),
                    bottom: 0.01
                }
            },
            side: {
                height: math.unit(2, "meters"),
                weight: math.unit(70, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/ashtrek/side.svg",
                    extra: 1717/1609 * (1 / (1 - 0.005)),
                    bottom: 0.005
                }
            },
            back: {
                height: math.unit(2, "meters"),
                weight: math.unit(70, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/ashtrek/back.svg",
                    extra: 1570/1501
                }
            },
        },
        [
            {
                name: "DEFCON 5",
                height: math.unit(5, "meters")
            },
            {
                name: "DEFCON 4",
                height: math.unit(500, "meters")
            },
            {
                name: "DEFCON 3",
                height: math.unit(5, "km")
            },
            {
                name: "DEFCON 2",
                height: math.unit(500, "km")
            },
            {
                name: "DEFCON 1",
                height: math.unit(500000, "km")
            },
            {
                name: "DEFCON 0",
                height: math.unit(3, "gigaparsecs")
            },
        ],
        math.unit(500, "meters")
    )
};

characterMakers["Gale"] = () => {
    return makeCharacter(
        "Gale",
        "GaleFierre",
        {
            front: {
                height: math.unit(2, "meters"),
                weight: math.unit(76, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/gale/front.svg"
                }
            },
            frontAlt1: {
                height: math.unit(2, "meters"),
                weight: math.unit(76, "kg"),
                name: "Front (Alt 1)",
                image: {
                    source: "./media/characters/gale/front-alt-1.svg"
                }
            },
            frontAlt2: {
                height: math.unit(2, "meters"),
                weight: math.unit(76, "kg"),
                name: "Front (Alt 2)",
                image: {
                    source: "./media/characters/gale/front-alt-2.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7, "feet")
            },
            {
                name: "Macro",
                height: math.unit(150, "feet")
            },
            {
                name: "Macro+",
                height: math.unit(300, "feet")
            },
        ],
        math.unit(150, "feet")
    )
};

characterMakers["Draylen"] = () => {
    return makeCharacter(
        "Draylen",
        "Longshot Coyote",
        {
            front: {
                height: math.unit(2, "meters"),
                weight: math.unit(76, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/draylen/front.svg"
                }
            }
        },
        [
            {
                name: "Macro",
                height: math.unit(150, "feet")
            }
        ],
        math.unit(150, "feet")
    )
};

characterMakers["Chez"] = () => {
    return makeCharacter(
        "Chez",
        "Ashtrek",
        {
            front: {
                height: math.unit(7 + 9 / 12, "feet"),
                weight: math.unit(379, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/chez/front.svg"
                }
            },
            side: {
                height: math.unit(7 + 9 / 12, "feet"),
                weight: math.unit(379, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/chez/side.svg"
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(7 + 9 / 12, "feet")
            },
            {
                name: "God King",
                height: math.unit(9750000, "meters")
            }
        ],
        math.unit(7 + 9 / 12, "feet")
    )
};

characterMakers["Kaylum"] = () => {
    return makeCharacter(
        "Kaylum",
        "DJDarkJaro",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(275, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/kaylum/front.svg",
                    bottom: 0.01,
                    extra: 1166 / 1031
                }
            },
            frontWingless: {
                height: math.unit(6, "feet"),
                weight: math.unit(275, "lbs"),
                name: "Front (Wingless)",
                image: {
                    source: "./media/characters/kaylum/front-wingless.svg",
                    bottom: 0.01,
                    extra: 1117 / 1031
                }
            }

        },
        [
            {
                name: "Normal",
                height: math.unit(3.05, "meters")
            },
            {
                name: "Master",
                height: math.unit(5.5, "meters")
            },
            {
                name: "Rampage",
                height: math.unit(19, "meters")
            },
            {
                name: "Macro Lite",
                height: math.unit(37, "meters")
            },
            {
                name: "Hyper Predator",
                height: math.unit(61, "meters")
            },
            {
                name: "Macro",
                height: math.unit(138, "meters")
            }
        ],
        math.unit(138, "meters")
    )
};

characterMakers["Geta"] = () => {
    return makeCharacter(
        "Geta",
        "Aeznon",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/geta/front.svg"
                }
            }

        },
        [
            {
                name: "Micro",
                height: math.unit(3, "inches")
            },
            {
                name: "Normal",
                height: math.unit(5 + 5 / 12, "feet")
            }
        ],
        math.unit(3, "inches")
    )
};

characterMakers["Tyrnn"] = () => {
    return makeCharacter(
        "Tyrnn",
        "Tyrnn",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(300, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/tyrnn/front.svg"
                }
            }

        },
        [
            {
                name: "Main Height",
                height: math.unit(355, "feet")
            },
            {
                name: "Fave. Height",
                height: math.unit(2400, "feet")
            }
        ],
        math.unit(355, "feet")
    )
};

characterMakers["Apple"] = () => {
    return makeCharacter(
        "Apple",
        "Appledectomy",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(300, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/appledectomy/front.svg"
                }
            }

        },
        [
            {
                name: "Macro",
                height: math.unit(2500, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(50, "miles")
            },
            {
                name: "Gigamacro",
                height: math.unit(5000, "miles")
            },
            {
                name: "Teramacro",
                height: math.unit(250000, "miles")
            },
        ],
        math.unit(50, "miles")
    )
};

characterMakers["Vulpes"] = () => {
    return makeCharacter(
        "Vulpes",
        "VulpesPawpad",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(200, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/vulpes/front.svg"
                }
            },
            side: {
                height: math.unit(6, "feet"),
                weight: math.unit(200, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/vulpes/side.svg"
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(200, "lbs"),
                name: "Back",
                image: {
                    source: "./media/characters/vulpes/back.svg"
                }
            },
            feet: {
                height: math.unit(1.276, "feet"),
                name: "Feet",
                image: {
                    source: "./media/characters/vulpes/feet.svg"
                }
            },

        },
        [
            {
                name: "Micro",
                height: math.unit(3, "inches")
            },
            {
                name: "Normal",
                height: math.unit(6.3, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(7500, "feet")
            },
            {
                name: "Gigamacro",
                height: math.unit(570000, "miles")
            }
        ],
        math.unit(7500, "feet")
    )
};

characterMakers["Rain Fallen"] = () => {
    return makeCharacter(
        "Rain Fallen",
        "Rain Fallen",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(210, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/rain/front.svg"
                }
            },
            side: {
                height: math.unit(6, "feet"),
                weight: math.unit(210, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/rain/side.svg"
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(210, "lbs"),
                name: "Back",
                image: {
                    source: "./media/characters/rain/back.svg"
                }
            },
            feral: {
                height: math.unit(9, "feet"),
                weight: math.unit(700, "lbs"),
                name: "Feral",
                image: {
                    source: "./media/characters/rain/feral.svg"
                }
            },

        },
        [
            {
                name: "Normal",
                height: math.unit(5, "meter")
            },
            {
                name: "Macro",
                height: math.unit(150, "meter")
            },
            {
                name: "Megamacro",
                height: math.unit(278e6, "meter")
            },
            {
                name: "Gigamacro",
                height: math.unit(2e9, "meter")
            },
            {
                name: "Teramacro",
                height: math.unit(8e12, "meter")
            },
            {
                name: "Devourer",
                height: math.unit(14, "zettameters")
            },
            {
                name: "Scarlet King",
                height: math.unit(18, "yottameters")
            },
            {
                name: "Void",
                height: math.unit(6.66e66, "yottameters")
            }
        ],
        math.unit(150, "meter")
    )
};

characterMakers["Zaakira"] = () => {
    return makeCharacter(
        "Zaakira",
        "Jazzywolf",
        {
            standing: {
                height: math.unit(6, "feet"),
                weight: math.unit(180, "lbs"),
                name: "Standing",
                image: {
                    source: "./media/characters/zaakira/standing.svg"
                }
            },
            laying: {
                height: math.unit(3, "feet"),
                weight: math.unit(180, "lbs"),
                name: "Laying",
                image: {
                    source: "./media/characters/zaakira/laying.svg"
                }
            },

        },
        [
            {
                name: "Normal",
                height: math.unit(12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(279, "feet")
            }
        ],
        math.unit(279, "feet")
    )
};

characterMakers["Sigvald"] = () => {
    return makeCharacter(
        "Sigvald",
        "Sigvald",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(250, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/sigvald/front.svg",
                    extra: 1000 / 850
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(250, "lbs"),
                name: "Back",
                image: {
                    source: "./media/characters/sigvald/back.svg"
                }
            },

        },
        [
            {
                name: "Normal",
                height: math.unit(8, "feet")
            },
            {
                name: "Large",
                height: math.unit(12, "feet")
            },
            {
                name: "Larger",
                height: math.unit(20, "feet")
            },
            {
                name: "Macro",
                height: math.unit(150, "feet")
            },
            {
                name: "Macro+",
                height: math.unit(200, "feet")
            },
        ],
        math.unit(200, "feet")
    )
};

characterMakers["Scott"] = () => {
    return makeCharacter(
        "Scott",
        "Scott",
        {
            side: {
                height: math.unit(12, "feet"),
                weight: math.unit(3000, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/scott/side.svg",
                    extra: (1 / (1 - 0.069)),
                    bottom: 0.069
                }
            },
            upright: {
                height: math.unit(12, "feet"),
                weight: math.unit(3000, "lbs"),
                name: "Upright",
                image: {
                    source: "./media/characters/scott/upright.svg",
                    extra: (1 / (1 - 0.05)),
                    bottom: 0.05
                }
            },

        },
        [],
        math.unit(12, "feet")
    )
};

characterMakers["Tobias"] = () => {
    return makeCharacter(
        "Tobias",
        "Tobias",
        {
            side: {
                height: math.unit(8, "meters"),
                weight: math.unit(84755, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/tobias/side.svg",
                    extra: 5 / 4
                }
            },
        },
        [],
        math.unit(8, "meters")
    )
};

characterMakers["Kieran"] = () => {
    return makeCharacter(
        "Kieran",
        "Kieran",
        {
            front: {
                height: math.unit(5.5, "feet"),
                weight: math.unit(400, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/kieran/front.svg",
                    extra: 1.05
                }
            },
            side: {
                height: math.unit(5.5, "feet"),
                weight: math.unit(400, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/kieran/side.svg",
                    extra: 950 / 850
                }
            },
        },
        [],
        math.unit(5.5, "feet")
    )
};

characterMakers["Sanya"] = () => {
    return makeCharacter(
        "Sanya",
        "BanterGhost",
        {
            side: {
                height: math.unit(2, "meters"),
                weight: math.unit(70, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/sanya/side.svg",
                    bottom: 0.02,
                    extra: 1.02
                }
            },
        },
        [
            {
                name: "Small",
                height: math.unit(2, "meters")
            },
            {
                name: "Normal",
                height: math.unit(3, "meters")
            },
            {
                name: "Macro",
                height: math.unit(16, "meters")
            },
        ],
        math.unit(16, "meters")
    )
};

characterMakers["Miranda"] = () => {
    return makeCharacter(
        "Miranda",
        "MirandaAqrayla",
        {
            side: {
                height: math.unit(2, "meters"),
                weight: math.unit(120, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/miranda/front.svg",
                    extra: 10.6 / 10
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(10, "feet")
            }
        ],
        math.unit(10, "feet")
    )
};

characterMakers["James"] = () => {
    return makeCharacter(
        "James",
        "MirandaAqrayla",
        {
            side: {
                height: math.unit(2, "meters"),
                weight: math.unit(100, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/james/front.svg",
                    extra: 10 / 8.5
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(8.5, "feet")
            }
        ],
        math.unit(8.5, "feet")
    )
};

characterMakers["Heather"] = () => {
    return makeCharacter(
        "Heather",
        "MirandaAqrayla",
        {
            side: {
                height: math.unit(9.5, "feet"),
                weight: math.unit(2500, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/heather/side.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(9.5, "feet")
            }
        ],
        math.unit(9.5, "feet")
    )
};

characterMakers["Lukas"] = () => {
    return makeCharacter(
        "Lukas",
        "MirandaAqrayla",
        {
            side: {
                height: math.unit(6.5, "feet"),
                weight: math.unit(400, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/lukas/side.svg",
                    extra: 7.25 / 6.5
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6.5, "feet")
            }
        ],
        math.unit(6.5, "feet")
    )
};

characterMakers["Louise"] = () => {
    return makeCharacter(
        "Louise",
        "MirandaAqrayla",
        {
            side: {
                height: math.unit(5, "feet"),
                weight: math.unit(3000, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/louise/side.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5, "feet")
            }
        ],
        math.unit(5, "feet")
    )
};

characterMakers["Ramona"] = () => {
    return makeCharacter(
        "Ramona",
        "ZakuraTech",
        {
            side: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/ramona/side.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5.3, "meters")
            },
            {
                name: "Macro",
                height: math.unit(20, "stories")
            },
            {
                name: "Macro+",
                height: math.unit(50, "stories")
            },
        ],
        math.unit(5.3, "meters")
    )
};

characterMakers["Deerpuff"] = () => {
    return makeCharacter(
        "Deerpuff",
        "Deerpuff",
        {
            standing: {
                height: math.unit(5.75, "feet"),
                weight: math.unit(160, "lbs"),
                name: "Standing",
                image: {
                    source: "./media/characters/deerpuff/standing.svg",
                    extra: 682 / 624
                }
            },
            sitting: {
                height: math.unit(5.75 / 1.79, "feet"),
                weight: math.unit(160, "lbs"),
                name: "Sitting",
                image: {
                    source: "./media/characters/deerpuff/sitting.svg",
                    bottom: 44 / 400,
                    extra: 1 / (1 - 44 / 400)
                }
            },
            taurLaying: {
                height: math.unit(6, "feet"),
                weight: math.unit(400, "lbs"),
                name: "Taur (Laying)",
                image: {
                    source: "./media/characters/deerpuff/taur-laying.svg"
                }
            },
        },
        [
            {
                name: "Puffball",
                height: math.unit(6, "inches")
            },
            {
                name: "Normalpuff",
                height: math.unit(5.75, "feet")
            },
            {
                name: "Macropuff",
                height: math.unit(1500, "feet")
            },
            {
                name: "Megapuff",
                height: math.unit(500, "miles")
            },
            {
                name: "Gigapuff",
                height: math.unit(250000, "miles")
            },
            {
                name: "Omegapuff",
                height: math.unit(1000, "lightyears")
            },
        ],
        math.unit(1500, "feet")
    )
};

characterMakers["Vivian"] = () => {
    return makeCharacter(
        "Vivian",
        "Fauxlacine",
        {
            stomping: {
                height: math.unit(6, "feet"),
                weight: math.unit(170, "lbs"),
                name: "Stomping",
                image: {
                    source: "./media/characters/vivian/stomping.svg"
                }
            },
            sitting: {
                height: math.unit(6 / 1.75, "feet"),
                weight: math.unit(170, "lbs"),
                name: "Sitting",
                image: {
                    source: "./media/characters/vivian/sitting.svg",
                    bottom: 1 / 6.4,
                    extra: (1 / (1 - 1 / 6.4)) * (1 + 164 / 1600)
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7, "feet")
            },
            {
                name: "Macro",
                height: math.unit(10, "stories")
            },
            {
                name: "Macro+",
                height: math.unit(30, "stories")
            },
            {
                name: "Megamacro",
                height: math.unit(10, "miles")
            },
            {
                name: "Megamacro+",
                height: math.unit(2750000, "meters")
            },
        ],
        math.unit(7, "feet")
    )
};

characterMakers["Prince"] = () => {
    return makeCharacter(
        "Prince",
        "Kurrikage",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(160, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/prince/front.svg",
                    extra: 3400/3000
                }
            },
            jumping: {
                height: math.unit(6, "feet"),
                weight: math.unit(160, "lbs"),
                name: "Jumping",
                image: {
                    source: "./media/characters/prince/jump.svg",
                    extra: 2555/2134
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7.75, "feet"),
                default: true
            }
        ]
    )
};

characterMakers["Psymon"] = () => {
    return makeCharacter(
        "Psymon",
        "Kurrikage",
        {
            standing: {
                height: math.unit(6, "feet"),
                weight: math.unit(300, "lbs"),
                name: "Standing",
                image: {
                    source: "./media/characters/psymon/standing.svg",
                    extra: 1888/1810
                }
            },
            slithering: {
                height: math.unit(6, "feet"),
                weight: math.unit(300, "lbs"),
                name: "Slithering",
                image: {
                    source: "./media/characters/psymon/slithering.svg",
                    extra: 1330/1224
                }
            },
            slitheringAlt: {
                height: math.unit(6, "feet"),
                weight: math.unit(300, "lbs"),
                name: "Slithering (Alt)",
                image: {
                    source: "./media/characters/psymon/slithering-alt.svg",
                    extra: 1330/1224
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(11.25, "feet")
            }
        ]
    )
};

characterMakers["Daimos"] = () => {
    return makeCharacter(
        "Daimos",
        "Kurrikage",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(180, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/daimos/front.svg",
                    extra: 4160/3897
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(8, "feet")
            }
        ]
    )
};

characterMakers["Blake"] = () => {
    return makeCharacter(
        "Blake",
        "Kurrikage",
        {
            side: {
                height: math.unit(6, "feet"),
                weight: math.unit(180, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/blake/side.svg",
                    extra: 1212/1120 * (1 / (1 - 0.05)),
                    bottom: 0.05
                }
            },
            crouched: {
                height: math.unit(6*0.57, "feet"),
                weight: math.unit(180, "lbs"),
                name: "Crouched",
                image: {
                    source: "./media/characters/blake/crouched.svg",
                    extra: 840/587 * (1 / (1 - 0.04)),
                    bottom: 0.04
                }
            },
            bent: {
                height: math.unit(6*0.75, "feet"),
                weight: math.unit(180, "lbs"),
                name: "Bent",
                image: {
                    source: "./media/characters/blake/bent.svg",
                    extra: 592/544 * (1 / (1 - 0.035)),
                    bottom: 0.035
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(8 + 1/6, "feet")
            }
        ]
    )
};

characterMakers["Guisetto"] = () => {
    return makeCharacter(
        "Guisetto",
        "Kurrikage",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(180, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/guisetto/front.svg",
                    extra: 856/817
                }
            },
            airborne: {
                height: math.unit(6, "feet"),
                weight: math.unit(180, "lbs"),
                name: "Airborne",
                image: {
                    source: "./media/characters/guisetto/airborne.svg",
                    extra: 584/525
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(10 + 11/12, "feet")
            }
        ]
    )
};

characterMakers["Luxor"] = () => {
    return makeCharacter(
        "Luxor",
        "Kurrikage",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(180, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/luxor/front.svg",
                    extra: 2940/2152
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(180, "lbs"),
                name: "Back",
                image: {
                    source: "./media/characters/luxor/back.svg",
                    extra: 1083/960
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 5/6, "feet"),
                default: true
            },
            {
                name: "Lamp",
                height: math.unit(50, "feet")
            },
            {
                name: "Lämp",
                height: math.unit(300, "feet")
            },
            {
                name: "The sun is a lamp",
                height: math.unit(250000, "miles")
            },
        ]
    )
};

characterMakers["Huoyan"] = () => {
    return makeCharacter(
        "Huoyan",
        "Kurrikage",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(50, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/huoyan/front.svg"
                }
            },
            side: {
                height: math.unit(6, "feet"),
                weight: math.unit(180, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/huoyan/side.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(65, "feet")
            }
        ]
    )
};

characterMakers["Tails"] = () => {
    return makeCharacter(
        "Tails",
        "Rainier",
        {
            front: {
                height: math.unit(5 + 3/4, "feet"),
                weight: math.unit(120, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/tails/front.svg"
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 3/4, "feet")
            }
        ]
    )
};

characterMakers["Rainy"] = () => {
    return makeCharacter(
        "Rainy",
        "Rainier",
        {
            front: {
                height: math.unit(4, "feet"),
                weight: math.unit(50, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/rainy/front.svg"
                }
            }
        },
        [
            {
                name: "Macro",
                height: math.unit(800, "feet")
            }
        ]
    )
};

characterMakers["Rainier"] = () => {
    return makeCharacter(
        "Rainier",
        "Rainier",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/rainier/front.svg"
                }
            }
        },
        [
            {
                name: "Micro",
                height: math.unit(2, "mm")
            }
        ]
    )
};

characterMakers["Andy"] = () => {
    return makeCharacter(
        "Andy",
        "drewbermeister",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(180, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/andy/front.svg"
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(8, "feet")
            },
            {
                name: "Macro",
                height: math.unit(1000, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(5, "miles")
            },
            {
                name: "Gigamacro",
                height: math.unit(5000, "miles")
            },
        ]
    )
};

characterMakers["Cimmaron"] = () => {
    return makeCharacter(
        "Cimmaron",
        "Cimmaron",
        {
            frontClothed: {
                height: math.unit(6, "feet"),
                weight: math.unit(210, "lbs"),
                name: "Front (Clothed)",
                image: {
                    source: "./media/characters/cimmaron/front-clothed.svg",
                    extra: 701/676 * (1 / (1 - 0.046)),
                    bottom: 0.046
                }
            },
            backClothed: {
                height: math.unit(6, "feet"),
                weight: math.unit(210, "lbs"),
                name: "Back (Clothed)",
                image: {
                    source: "./media/characters/cimmaron/back-clothed.svg",
                    extra: 701/676 * (1 / (1 - 0.046)),
                    bottom: 0.046
                }
            },
            frontNude: {
                height: math.unit(6, "feet"),
                weight: math.unit(210, "lbs"),
                name: "Front (Nude)",
                image: {
                    source: "./media/characters/cimmaron/front-nude.svg",
                    extra: 701/676 * (1 / (1 - 0.046)),
                    bottom: 0.046
                }
            },
            backNude: {
                height: math.unit(6, "feet"),
                weight: math.unit(210, "lbs"),
                name: "Back (Nude)",
                image: {
                    source: "./media/characters/cimmaron/back-nude.svg",
                    extra: 701/676 * (1 / (1 - 0.046)),
                    bottom: 0.046
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(6, "feet"),
                default: true
            },
            {
                name: "Macro Mayor",
                height: math.unit(350, "meters")
            },
        ]
    )
};

characterMakers["Akari Kaen"] = () => {
    return makeCharacter(
        "Akari Kaen",
        "Akari",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(200, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/akari/front.svg",
                    bottom: 0.04,
                    extra: (1 / (1 - 0.04)) * (962/901)
                }
            }
        },
        [
            {
                name: "Micro",
                height: math.unit(5, "inches"),
                default: true
            },
            {
                name: "Normal",
                height: math.unit(7, "feet")
            },
        ]
    )
};

characterMakers["Cynosura"] = () => {
    return makeCharacter(
        "Cynosura",
        "Cynosura",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(140, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/cynosura/front.svg",
                    extra: 896/847
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(140, "lbs"),
                name: "Back",
                image: {
                    source: "./media/characters/cynosura/back.svg",
                    extra: 1365/1250
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(4, "inches")
            },
            {
                name: "Normal",
                height: math.unit(5.75, "feet"),
                default: true
            },
            {
                name: "Tall",
                height: math.unit(10, "feet")
            },
            {
                name: "Big",
                height: math.unit(20, "feet")
            },
            {
                name: "Macro",
                height: math.unit(50, "feet")
            },
        ]
    )
};

characterMakers["Gin"] = () => {
    return makeCharacter(
        "Gin",
        "Ozzie_gt",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(170, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/gin/front.svg"
                }
            },
            foot: {
                height: math.unit(6/4.25, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/gin/foot.svg"
                }
            },
            sole: {
                height: math.unit(6/4.40, "feet"),
                name: "Sole",
                image: {
                    source: "./media/characters/gin/sole.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(9 + 4/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(1500, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(200, "miles"),
                default: true
            },
            {
                name: "Gigamacro",
                height: math.unit(500, "megameters")
            },
            {
                name: "Teramacro",
                height: math.unit(15, "lightyears")
            }
        ]
    )
};

characterMakers["Guy"] = () => {
    return makeCharacter(
        "Guy",
        "Whatastandupguy",
        {
            front: {
                height: math.unit(6 + 1/6, "feet"),
                weight: math.unit(178, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/guy/front.svg"
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 1/6, "feet")
            },
            {
                name: "Large",
                height: math.unit(25 + 7/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(60 + 9/12, "feet")
            },
            {
                name: "Macro+",
                height: math.unit(246, "feet")
            },
            {
                name: "Macro++",
                height: math.unit(878, "feet")
            }
        ]
    )
};

characterMakers["Tiberius"] = () => {
    return makeCharacter(
        "Tiberius",
        "movler",
        {
            front: {
                height: math.unit(9, "feet"),
                weight: math.unit(800, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/tiberius/front.svg",
                    extra: 2295/2071
                }
            },
            back: {
                height: math.unit(9, "feet"),
                weight: math.unit(800, "lbs"),
                name: "Back",
                image: {
                    source: "./media/characters/tiberius/back.svg",
                    extra: 2373/2160
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(9, "feet"),
                default: true
            }
        ]
    )
};

characterMakers["Surgo"] = () => {
    return makeCharacter(
        "Surgo",
        "movler",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(600, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/surgo/front.svg",
                    extra: 3591/2227
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(600, "lbs"),
                name: "Back",
                image: {
                    source: "./media/characters/surgo/back.svg",
                    extra: 3557/2228
                }
            },
            laying: {
                height: math.unit(6 * 0.85, "feet"),
                weight: math.unit(600, "lbs"),
                name: "Laying",
                image: {
                    source: "./media/characters/surgo/laying.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6, "feet"),
                default: true
            }
        ]
    )
};

characterMakers["Cibus"] = () => {
    return makeCharacter(
        "Cibus",
        "movler",
        {
            side: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/cibus/side.svg",
                    extra: 800/400
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6, "feet"),
                default: true
            }
        ]
    )
};

characterMakers["Nibbles"] = () => {
    return makeCharacter(
        "Nibbles",
        "movler",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(240, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/nibbles/front.svg"
                }
            },
            side: {
                height: math.unit(6, "feet"),
                weight: math.unit(240, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/nibbles/side.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(9, "feet"),
                default: true
            }
        ]
    )
};

characterMakers["Rikky"] = () => {
    return makeCharacter(
        "Rikky",
        "Quake Yote",
        {
            side: {
                height: math.unit(5 + 1/6, "feet"),
                weight: math.unit(130, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/rikky/side.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 1/6, "feet")
            },
            {
                name: "Macro",
                height: math.unit(152, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(7, "miles")
            }
        ]
    )
};

characterMakers["Malfressa"] = () => {
    return makeCharacter(
        "Malfressa",
        "Scareye",
        {
            side: {
                height: math.unit(370, "cm"),
                weight: math.unit(350, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/malfressa/side.svg"
                }
            },
            walking: {
                height: math.unit(370, "cm"),
                weight: math.unit(350, "lbs"),
                name: "Walking",
                image: {
                    source: "./media/characters/malfressa/walking.svg"
                }
            },
            feral: {
                height: math.unit(2500, "cm"),
                weight: math.unit(100000, "lbs"),
                name: "Feral",
                image: {
                    source: "./media/characters/malfressa/feral.svg",
                    extra: 2108/837 * (1 / (1 - 0.02)),
                    bottom: 0.02
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(370, "cm")
            },
            {
                name: "Macro",
                height: math.unit(300, "meters"),
                default: true
            }
        ]
    )
};

characterMakers["Jaro"] = () => {
    return makeCharacter(
        "Jaro",
        "Jaro",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(60, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/jaro/front.svg"
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(60, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/jaro/back.svg"
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(7, "inches")
            },
            {
                name: "Normal",
                height: math.unit(5.5, "feet"),
                default: true
            },
            {
                name: "Minimacro",
                height: math.unit(20, "feet")
            },
            {
                name: "Macro",
                height: math.unit(200, "meters")
            }
        ]
    )
};

characterMakers["Rogue"] = () => {
    return makeCharacter(
        "Rogue",
        "Rogue",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(195, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/rogue/front.svg"
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(90, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Piper"] = () => {
    return makeCharacter(
        "Piper",
        "Flyhar",
        {
            front: {
                height: math.unit(5 + 8/12, "feet"),
                weight: math.unit(140, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/piper/front.svg",
                    extra: 3928/3681
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(2, "inches")
            },
            {
                name: "Normal",
                height: math.unit(5 + 8/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(250, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(7, "miles")
            },
        ]
    )
};

characterMakers["Gemini"] = () => {
    return makeCharacter(
        "Gemini",
        "lajay",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(220, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/gemini/front.svg"
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(220, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/gemini/back.svg"
                }
            },
            kneeling: {
                height: math.unit(6/1.5, "feet"),
                weight: math.unit(220, "lb"),
                name: "Kneeling",
                image: {
                    source: "./media/characters/gemini/kneeling.svg",
                    bottom: 0.02
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(300, "meters"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(6900, "meters")
            },
        ]
    )
};

characterMakers["Alicia"] = () => {
    return makeCharacter(
        "Alicia",
        "LittleBig",
        {
            anthro: {
                height: math.unit(2.35, "meters"),
                weight: math.unit(73, "kg"),
                name: "Anthro",
                image: {
                    source: "./media/characters/alicia/anthro.svg"
                }
            },
            feral: {
                height: math.unit(1.69, "meters"),
                weight: math.unit(73, "kg"),
                name: "Feral",
                image: {
                    source: "./media/characters/alicia/feral.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(2.35, "meters")
            },
            {
                name: "Macro",
                height: math.unit(60, "meters"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(10000, "kilometers")
            },
        ]
    )
};

characterMakers["Archy"] = () => {
    return makeCharacter(
        "Archy",
        "ArchyD",
        {
            front: {
                height: math.unit(7, "feet"),
                weight: math.unit(250, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/archy/front.svg"
                }
            }
        },
        [
            {
                name: "Micro",
                height: math.unit(1, "inch")
            },
            {
                name: "Shorty",
                height: math.unit(5, "feet")
            },
            {
                name: "Normal",
                height: math.unit(7, "feet")
            },
            {
                name: "Macro",
                height: math.unit(600, "meters"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(1, "mile")
            },
        ]
    )
};

characterMakers["Berri"] = () => {
    return makeCharacter(
        "Berri",
        "LittleBig",
        {
            front: {
                height: math.unit(1.65, "meters"),
                weight: math.unit(74, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/berri/front.svg"
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(1.65, "meters")
            },
            {
                name: "Macro",
                height: math.unit(60, "m"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(9.213, "km")
            },
            {
                name: "Planet Eater",
                height: math.unit(489, "megameters")
            },
            {
                name: "Teramacro",
                height: math.unit(2471635000000, "meters")
            },
            {
                name: "Examacro",
                height: math.unit(8.0624e+26, "meters")
            }
        ]
    )
};

characterMakers["Lexi"] = () => {
    return makeCharacter(
        "Lexi",
        "LittleBig",
        {
            front: {
                height: math.unit(1.72, "meters"),
                weight: math.unit(68, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/lexi/front.svg"
                }
            }
        },
        [
            {
                name: "Very Smol",
                height: math.unit(10, "mm")
            },
            {
                name: "Micro",
                height: math.unit(6.8, "cm"),
                default: true
            },
            {
                name: "Normal",
                height: math.unit(1.72, "m")
            }
        ]
    )
};

characterMakers["Martin"] = () => {
    return makeCharacter(
        "Martin",
        "LittleBig",
        {
            front: {
                height: math.unit(1.69, "meters"),
                weight: math.unit(68, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/martin/front.svg",
                    extra: 596/581
                }
            }
        },
        [
            {
                name: "Micro",
                height: math.unit(6.85, "cm"),
                default: true
            },
            {
                name: "Normal",
                height: math.unit(1.69, "m")
            }
        ]
    )
};

characterMakers["Juno"] = () => {
    return makeCharacter(
        "Juno",
        "LittleBig",
        {
            front: {
                height: math.unit(1.69, "meters"),
                weight: math.unit(68, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/juno/front.svg"
                }
            }
        },
        [
            {
                name: "Micro",
                height: math.unit(7, "cm")
            },
            {
                name: "Normal",
                height: math.unit(1.89, "m")
            },
            {
                name: "Macro",
                height: math.unit(353, "meters"),
                default: true
            }
        ]
    )
};

characterMakers["Samantha"] = () => {
    return makeCharacter(
        "Samantha",
        "LittleBig",
        {
            front: {
                height: math.unit(1.93, "meters"),
                weight: math.unit(83, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/samantha/front.svg"
                }
            },
            frontClothed: {
                height: math.unit(1.93, "meters"),
                weight: math.unit(83, "kg"),
                name: "Front (Clothed)",
                image: {
                    source: "./media/characters/samantha/front-clothed.svg"
                }
            },
            back: {
                height: math.unit(1.93, "meters"),
                weight: math.unit(83, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/samantha/back.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(1.93, "m")
            },
            {
                name: "Macro",
                height: math.unit(74, "meters"),
                default: true
            },
            {
                name: "Macro+",
                height: math.unit(223, "meters"),
            },
            {
                name: "Megamacro",
                height: math.unit(8381, "meters"),
            },
            {
                name: "Megamacro+",
                height: math.unit(12000, "kilometers")
            },
        ]
    )
};

characterMakers["Dr. Clay"] = () => {
    return makeCharacter(
        "Dr. Clay",
        "LittleBig",
        {
            front: {
                height: math.unit(1.92, "meters"),
                weight: math.unit(80, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/dr-clay/front.svg"
                }
            },
            frontClothed: {
                height: math.unit(1.92, "meters"),
                weight: math.unit(80, "kg"),
                name: "Front (Clothed)",
                image: {
                    source: "./media/characters/dr-clay/front-clothed.svg"
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(1.92, "m")
            },
            {
                name: "Macro",
                height: math.unit(214, "meters"),
                default: true
            },
            {
                name: "Macro+",
                height: math.unit(12.237, "meters"),
            },
            {
                name: "Megamacro",
                height: math.unit(557, "megameters"),
            },
            {
                name: "Unimaginable",
                height: math.unit(120e9, "lightyears")
            },
        ]
    )
};

characterMakers["Wyvrn Ripsnarl"] = () => {
    return makeCharacter(
        "Wyvrn Ripsnarl",
        "LoboRaptorLo",
        {
            front: {
                height: math.unit(2, "meters"),
                weight: math.unit(80, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/wyvrn-ripsnarl/front.svg"
                }
            }
        },
        [
            {
                name: "Teramacro",
                height: math.unit(500000, "lightyears")
            },
        ]
    )
};

characterMakers["Vemus"] = () => {
    return makeCharacter(
        "Vemus",
        "Vemus",
        {
            front: {
                height: math.unit(2, "meters"),
                weight: math.unit(150, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/vemus/front.svg",
                    extra: 2384/2084
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(3, "meters"),
                default: true
            },
            {
                name: "Lorg",
                height: math.unit(7, "meters")
            },
            {
                name: "More Lorg",
                height: math.unit(250, "meters")
            },
        ]
    )
};

characterMakers["Beherit"] = () => {
    return makeCharacter(
        "Beherit",
        "Beherit",
        {
            front: {
                height: math.unit(2, "meters"),
                weight: math.unit(70, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/beherit/front.svg",
                    extra: 1408/1242
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(6, "feet")
            },
            {
                name: "Lorg",
                height: math.unit(25, "feet"),
                default: true
            },
            {
                name: "Lorger",
                height: math.unit(75, "feet")
            },
            {
                name: "Macro",
                height: math.unit(200, "meters")
            },
        ]
    )
};

characterMakers["Everett"] = () => {
    return makeCharacter(
        "Everett",
        "Beherit",
        {
            front: {
                height: math.unit(2, "meters"),
                weight: math.unit(150, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/everett/front.svg",
                    extra: 2038/1737 * (1 / (1 - 0.03)),
                    bottom: 0.03
                }
            },
            paw: {
                height: math.unit(2/3.6, "meters"),
                name: "Paw",
                image: {
                    source: "./media/characters/everett/paw.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(15, "feet"),
                default: true
            },
            {
                name: "Lorg",
                height: math.unit(70, "feet"),
                default: true
            },
            {
                name: "Lorger",
                height: math.unit(250, "feet")
            },
            {
                name: "Macro",
                height: math.unit(500, "meters")
            },
        ]
    )
};

characterMakers["Rose Lion"] = () => {
    return makeCharacter(
        "Rose Lion",
        "Enormouse",
        {
            front: {
                height: math.unit(2, "meters"),
                weight: math.unit(86, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/rose-lion/front.svg"
                }
            },
            bent: {
                height: math.unit(2/1.4288, "meters"),
                weight: math.unit(86, "kg"),
                name: "Bent",
                image: {
                    source: "./media/characters/rose-lion/bent.svg"
                }
            }
        },
        [
            {
                name: "Mini-Micro",
                height: math.unit(1, "cm")
            },
            {
                name: "Micro",
                height: math.unit(3.5, "inches"),
                default: true
            },
            {
                name: "Normal",
                height: math.unit(6 + 1/6, "feet")
            },
            {
                name: "Mini-Macro",
                height: math.unit(9 + 10/12, "feet")
            },
        ]
    )
};

characterMakers["Regal"] = () => {
    return makeCharacter(
        "Regal",
        "Regal Drennen",
        {
            front: {
                height: math.unit(2, "meters"),
                weight: math.unit(350, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/regal/front.svg"
                }
            },
            back: {
                height: math.unit(2, "meters"),
                weight: math.unit(350, "lbs"),
                name: "Back",
                image: {
                    source: "./media/characters/regal/back.svg"
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(350, "feet"),
                default: true
            }
        ]
    )
};

characterMakers["Opal"] = () => {
    return makeCharacter(
        "Opal",
        "Enormouse",
        {
            front: {
                height: math.unit(4 + 11/12, "feet"),
                weight: math.unit(100, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/opal/front.svg"
                }
            },
            frontAlt: {
                height: math.unit(4 + 11/12, "feet"),
                weight: math.unit(100, "lbs"),
                name: "Front (Alt)",
                image: {
                    source: "./media/characters/opal/front-alt.svg"
                }
            },
        },
        [
            {
                name: "Small",
                height: math.unit(4 + 11/12, "feet")
            },
            {
                name: "Normal",
                height: math.unit(20, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(120, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(80, "miles")
            },
            {
                name: "True Size",
                height: math.unit(100000, "lightyears")
            },
        ]
    )
};

characterMakers["Vector Wuff"] = () => {
    return makeCharacter(
        "Vector Wuff",
        "Vector",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(200, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/vector-wuff/front.svg"
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(2.8, "meters")
            },
            {
                name: "Macro",
                height: math.unit(450, "meters"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(15, "kilometers")
            }
        ]
    )
};

characterMakers["Dannik"] = () => {
    return makeCharacter(
        "Dannik",
        "LuchaLibreLibro",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(256, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/dannik/front.svg"
                }
            }
        },
        [
            {
                name: "Macro",
                height: math.unit(69.57, "meters"),
                default: true
            },
        ]
    )
};

characterMakers["Azura Saharah"] = () => {
    return makeCharacter(
        "Azura Saharah",
        "AzuraSaharah",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(120, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/azura-saharah/front.svg"
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(120, "lbs"),
                name: "Back",
                image: {
                    source: "./media/characters/azura-saharah/back.svg"
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(100, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Kennedy"] = () => {
    return makeCharacter(
        "Kennedy",
        "BossVoss",
        {
            side: {
                height: math.unit(5 + 4/12, "feet"),
                weight: math.unit(163, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/kennedy/side.svg"
                }
            }
        },
        [
            {
                name: "Standard Doggo",
                height: math.unit(5 + 4/12, "feet")
            },
            {
                name: "Big Doggo",
                height: math.unit(25 + 3/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Odi Lunar"] = () => {
    return makeCharacter(
        "Odi Lunar",
        "OdiLunar",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(90, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/odi-lunar/front.svg"
                }
            }
        },
        [
            {
                name: "Micro",
                height: math.unit(3, "inches"),
                default: true
            },
            {
                name: "Normal",
                height: math.unit(5.5, "feet")
            }
        ]
    )
};

characterMakers["Mandake"] = () => {
    return makeCharacter(
        "Mandake",
        "Dialuca01",
        {
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(220, "lbs"),
                name: "Back",
                image: {
                    source: "./media/characters/mandake/back.svg"
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(7, "feet")
            },
            {
                name: "Macro",
                height: math.unit(78, "feet")
            },
            {
                name: "Macro+",
                height: math.unit(300, "meters")
            },
            {
                name: "Macro++",
                height: math.unit(2400, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(5167, "meters")
            },
            {
                name: "Gigamacro",
                height: math.unit(41769, "miles")
            },
        ]
    )
};

characterMakers["Yozey"] = () => {
    return makeCharacter(
        "Yozey",
        "Yozey",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(120, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/yozey/front.svg"
                }
            },
            frontAlt: {
                height: math.unit(6, "feet"),
                weight: math.unit(120, "lbs"),
                name: "Front (Alt)",
                image: {
                    source: "./media/characters/yozey/front-alt.svg"
                }
            },
            side: {
                height: math.unit(6, "feet"),
                weight: math.unit(120, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/yozey/side.svg"
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(3, "inches"),
                default: true
            },
            {
                name: "Normal",
                height: math.unit(6, "feet")
            }
        ]
    )
};

characterMakers["Valeska Voss"] = () => {
    return makeCharacter(
        "Valeska Voss",
        "BossVoss",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(103, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/valeska-voss/front.svg"
                }
            }
        },
        [
            {
                name: "Mini-Sized Sub",
                height: math.unit(3.1, "inches")
            },
            {
                name: "Mid-Sized Sub",
                height: math.unit(6.2, "inches")
            },
            {
                name: "Full-Sized Sub",
                height: math.unit(9.3, "inches")
            },
            {
                name: "Normal",
                height: math.unit(5 + 2/12, "foot"),
                default: true
            },
        ]
    )
};

characterMakers["Gene Zeta"] = () => {
    return makeCharacter(
        "Gene Zeta",
        "Xeebes",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(160, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/gene-zeta/front.svg",
                    bottom: 0.03,
                    extra: 1 / (1 - 0.03)
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(6.25, "foot"),
                default: true
            },
        ]
    )
};

characterMakers["Razinox"] = () => {
    return makeCharacter(
        "Razinox",
        "Razinox",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(350, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/razinox/front.svg",
                    extra: 1686/1548
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(350, "lbs"),
                name: "Back",
                image: {
                    source: "./media/characters/razinox/back.svg",
                    extra: 1660/1590
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(10 + 8/12, "foot")
            },
            {
                name: "Minimacro",
                height: math.unit(15, "foot")
            },
            {
                name: "Macro",
                height: math.unit(60, "foot"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(5, "miles")
            },
            {
                name: "Gigamacro",
                height: math.unit(6000, "miles")
            },
        ]
    )
};

characterMakers["Cobalt"] = () => {
    return makeCharacter(
        "Cobalt",
        "Miateshcha",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/cobalt/front.svg"
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(8 + 1/12, "foot")
            },
            {
                name: "Macro",
                height: math.unit(111, "foot"),
                default: true
            },
            {
                name: "Supracosmic",
                height: math.unit(1e42, "feet")
            },
        ]
    )
};

characterMakers["Amanda"] = () => {
    return makeCharacter(
        "Amanda",
        "Amanda",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(140, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/amanda/front.svg"
                }
            }
        },
        [
            {
                name: "Micro",
                height: math.unit(5, "inches"),
                default: true
            },
        ]
    )
};

characterMakers["Teal"] = () => {
    return makeCharacter(
        "Teal",
        "Teal",
        {
            front: {
                height: math.unit(5.59, "feet"),
                weight: math.unit(250, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/teal/front.svg"
                }
            },
            frontAlt: {
                height: math.unit(6, "feet"),
                weight: math.unit(250, "lbs"),
                name: "Front (Alt)",
                image: {
                    source: "./media/characters/teal/front-alt.svg",
                    bottom: 0.04,
                    extra: 1 / (1 - 0.04)
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(300, "feet")
            },
        ]
    )
};

characterMakers["Ravin Amulet"] = () => {
    return makeCharacter(
        "Ravin Amulet",
        "Ravin Amulet",
        {
            frontCat: {
                height: math.unit(6, "feet"),
                weight: math.unit(180, "lbs"),
                name: "Front (Cat)",
                image: {
                    source: "./media/characters/ravin-amulet/front-cat.svg"
                }
            },
            frontCatAlt: {
                height: math.unit(6, "feet"),
                weight: math.unit(180, "lbs"),
                name: "Front (Alt, Cat)",
                image: {
                    source: "./media/characters/ravin-amulet/front-cat-alt.svg"
                }
            },
            frontWerewolf: {
                height: math.unit(6*1.2, "feet"),
                weight: math.unit(225, "lbs"),
                name: "Front (Werewolf)",
                image: {
                    source: "./media/characters/ravin-amulet/front-werewolf.svg"
                }
            },
            backWerewolf: {
                height: math.unit(6*1.2, "feet"),
                weight: math.unit(225, "lbs"),
                name: "Back (Werewolf)",
                image: {
                    source: "./media/characters/ravin-amulet/back-werewolf.svg"
                }
            },
        },
        [
            {
                name: "Nano",
                height: math.unit(1, "micrometer")
            },
            {
                name: "Micro",
                height: math.unit(1, "inch")
            },
            {
                name: "Normal",
                height: math.unit(6, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(60, "feet")
            }
        ]
    )
};

characterMakers["Fluoresce"] = () => {
    return makeCharacter(
        "Fluoresce",
        "Ravin Amulet",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(165, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/fluoresce/front.svg"
                }
            }
        },
        [
            {
                name: "Micro",
                height: math.unit(6, "cm")
            },
            {
                name: "Normal",
                height: math.unit(5 + 7/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(56, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(1.9, "miles")
            },
        ]
    )
};

characterMakers["Aurora"] = () => {
    return makeCharacter(
        "Aurora",
        "Vonadi",
        {
            front: {
                height: math.unit(9 + 6/12, "feet"),
                weight: math.unit(523, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/aurora/side.svg"
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(9 + 6/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(96, "feet"),
                default: true
            },
            {
                name: "Macro+",
                height: math.unit(243, "feet")
            },
        ]
    )
};

characterMakers["Ranek"] = () => {
    return makeCharacter(
        "Ranek",
        "Ranek",
        {
            front: {
                height: math.unit(194, "cm"),
                weight: math.unit(90, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/ranek/front.svg"
                }
            },
            side: {
                height: math.unit(194, "cm"),
                weight: math.unit(90, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/ranek/side.svg"
                }
            },
            back: {
                height: math.unit(194, "cm"),
                weight: math.unit(90, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/ranek/back.svg"
                }
            },
            feral: {
                height: math.unit(30, "cm"),
                weight: math.unit(1.6, "lbs"),
                name: "Feral",
                image: {
                    source: "./media/characters/ranek/feral.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(194, "cm"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(100, "meters")
            },
        ]
    )
};

characterMakers["Andrew Cooper"] = () => {
    return makeCharacter(
        "Andrew Cooper",
        "Vonadi",
        {
            front: {
                height: math.unit(5 + 6/12, "feet"),
                weight: math.unit(153, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/andrew-cooper/front.svg"
                }
            },
        },
        [
            {
                name: "Nano",
                height: math.unit(1, "mm")
            },
            {
                name: "Micro",
                height: math.unit(2, "inches")
            },
            {
                name: "Normal",
                height: math.unit(5 + 6/12, "feet"),
                default: true
            }
        ]
    )
};

characterMakers["Akane Sato"] = () => {
    return makeCharacter(
        "Akane Sato",
        "Vonadi",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(180, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/akane-sato/front.svg",
                    extra: 1219/1140
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(180, "lbs"),
                name: "Back",
                image: {
                    source: "./media/characters/akane-sato/back.svg",
                    extra: 1219/1170
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(2.5, "meters")
            },
            {
                name: "Macro",
                height: math.unit(250, "meters"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(25, "km")
            },
        ]
    )
};

characterMakers["Rook"] = () => {
    return makeCharacter(
        "Rook",
        "Rook",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(65, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/rook/front.svg"
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(8.8, "feet")
            },
            {
                name: "Macro",
                height: math.unit(88, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(8, "miles")
            },
        ]
    )
};

characterMakers["Prodigy"] = () => {
    return makeCharacter(
        "Prodigy",
        "Rook",
        {
            front: {
                height: math.unit(12 + 2/12, "feet"),
                weight: math.unit(808, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/prodigy/front.svg"
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(12 + 2/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(143, "feet")
            },
            {
                name: "Macro+",
                height: math.unit(400, "feet")
            },
        ]
    )
};

characterMakers["Daniel"] = () => {
    return makeCharacter(
        "Daniel",
        "Galactor",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(225, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/daniel/front.svg"
                }
            },
            leaning: {
                height: math.unit(6, "feet"),
                weight: math.unit(225, "lbs"),
                name: "Leaning",
                image: {
                    source: "./media/characters/daniel/leaning.svg"
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(1000, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Chiros"] = () => {
    return makeCharacter(
        "Chiros",
        "Chiropica",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(88, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/chiros/front.svg",
                    extra: 306/226
                }
            },
            side: {
                height: math.unit(6, "feet"),
                weight: math.unit(88, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/chiros/side.svg",
                    extra: 306/226
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6, "cm"),
                default: true
            },
        ]
    )
};

characterMakers["Selka"] = () => {
    return makeCharacter(
        "Selka",
        "Xelchew",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(100, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/selka/front.svg",
                    extra: 947/887
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(5, "cm"),
                default: true
            },
        ]
    )
};

characterMakers["Verin"] = () => {
    return makeCharacter(
        "Verin",
        "Vonadi",
        {
            front: {
                height: math.unit(8 + 3/12, "feet"),
                weight: math.unit(424, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/verin/front.svg",
                    extra: 1845/1550
                }
            },
            frontArmored: {
                height: math.unit(8 + 3/12, "feet"),
                weight: math.unit(424, "lbs"),
                name: "Front (Armored)",
                image: {
                    source: "./media/characters/verin/front-armor.svg",
                    extra: 1845/1550 * (1 / (1 - 0.01)),
                    bottom: 0.01
                }
            },
            back: {
                height: math.unit(8 + 3/12, "feet"),
                weight: math.unit(424, "lbs"),
                name: "Back",
                image: {
                    source: "./media/characters/verin/back.svg",
                    bottom: 0.1,
                    extra: 1 / (1 - 0.1)
                }
            },
            foot: {
                height: math.unit((8 + 3/12) / 4.7, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/verin/foot.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(8 + 3/12, "feet")
            },
            {
                name: "Minimacro",
                height: math.unit(21, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(626, "feet")
            },
        ]
    )
};

characterMakers["Sovrim Terraquian"] = () => {
    return makeCharacter(
        "Sovrim Terraquian",
        "Sovrim Terraquian",
        {
            front: {
                height: math.unit(2.718, "meters"),
                weight: math.unit(150, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/sovrim-terraquian/front.svg"
                }
            },
            back: {
                height: math.unit(2.718, "meters"),
                weight: math.unit(150, "lbs"),
                name: "Back",
                image: {
                    source: "./media/characters/sovrim-terraquian/back.svg"
                }
            }
        },
        [
            {
                name: "Micro",
                height: math.unit(2, "inches")
            },
            {
                name: "Small",
                height: math.unit(1, "meter")
            },
            {
                name: "Normal",
                height: math.unit(Math.E, "meters"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(20, "meters")
            },
            {
                name: "Macro+",
                height: math.unit(400, "meters")
            },
        ]
    )
};

characterMakers["Reece Silvermane"] = () => {
    return makeCharacter(
        "Reece Silvermane",
        "Silverhorsey",
        {
            front: {
                height: math.unit(7, "feet"),
                weight: math.unit(489, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/reece-silvermane/front.svg",
                    bottom: 0.02,
                    extra: 1 / (1 - 0.02)
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(1.5, "miles"),
                default: true
            },
        ]
    )
};

characterMakers["Kane"] = () => {
    return makeCharacter(
        "Kane",
        "LittleBigX110",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(78, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/kane/front.svg",
                    extra: 978/899
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(2.1, "m"),
            },
            {
                name: "Macro",
                height: math.unit(1, "km"),
                default: true
            },
        ]
    )
};

characterMakers["Tegon"] = () => {
    return makeCharacter(
        "Tegon",
        "TegonDragon",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(200, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/tegon/front.svg",
                    bottom: 0.01,
                    extra: 1 / (1 - 0.01)
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(1, "inch")
            },
            {
                name: "Normal",
                height: math.unit(6 + 3/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(300, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(69, "miles")
            },
        ]
    )
};

characterMakers["Arcturax"] = () => {
    return makeCharacter(
        "Arcturax",
        "Arcturax",
        {
            side: {
                height: math.unit(6, "feet"),
                weight: math.unit(2304, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/arcturax/side.svg",
                    extra: 790/376 * (1 / (1 - 0.01)),
                    bottom: 0.01
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(2, "inch")
            },
            {
                name: "Normal",
                height: math.unit(6, "feet")
            },
            {
                name: "Macro",
                height: math.unit(39, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(7, "miles")
            },
        ]
    )
};

characterMakers["Sentri"] = () => {
    return makeCharacter(
        "Sentri",
        "Sentri",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(50, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/sentri/front.svg",
                    extra: 1750/1570 * (1 / (1 - 0.025)),
                    bottom: 0.025
                }
            },
            frontAlt: {
                height: math.unit(6, "feet"),
                weight: math.unit(50, "lbs"),
                name: "Front (Alt)",
                image: {
                    source: "./media/characters/sentri/front-alt.svg",
                    extra: 1750/1570 * (1 / (1 - 0.025)),
                    bottom: 0.025
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(15, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(2500, "feet")
            }
        ]
    )
};

characterMakers["Corvin"] = () => {
    return makeCharacter(
        "Corvin",
        "Sirffuzzylogik",
        {
            front: {
                height: math.unit(5 + 8/12, "feet"),
                weight: math.unit(130, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/corvin/front.svg",
                    extra: 1803/1629
                }
            },
            frontShirt: {
                height: math.unit(5 + 8/12, "feet"),
                weight: math.unit(130, "lbs"),
                name: "Front (Shirt)",
                image: {
                    source: "./media/characters/corvin/front-shirt.svg",
                    extra: 1803/1629
                }
            },
            frontPoncho: {
                height: math.unit(5 + 8/12, "feet"),
                weight: math.unit(130, "lbs"),
                name: "Front (Poncho)",
                image: {
                    source: "./media/characters/corvin/front-poncho.svg",
                    extra: 1803/1629
                }
            },
            side: {
                height: math.unit(5 + 8/12, "feet"),
                weight: math.unit(130, "lbs"),
                name: "Side",
                image: {
                    source: "./media/characters/corvin/side.svg",
                    extra: 1012/945
                }
            },
            back: {
                height: math.unit(5 + 8/12, "feet"),
                weight: math.unit(130, "lbs"),
                name: "Back",
                image: {
                    source: "./media/characters/corvin/back.svg",
                    extra: 1803/1629
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(3, "inches")
            },
            {
                name: "Normal",
                height: math.unit(5 + 8/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(300, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(500, "miles")
            }
        ]
    )
};

characterMakers["Q"] = () => {
    return makeCharacter(
        "Q",
        "Q Walf",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(135, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/q/front.svg",
                    extra: 854/752 * (1 / (1 - 0.005)),
                    bottom: 0.005
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(130, "lbs"),
                name: "Back",
                image: {
                    source: "./media/characters/q/back.svg",
                    extra: 854/752
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(90, "feet"),
                default: true
            },
            {
                name: "Extra Macro",
                height: math.unit(300, "feet"),
            },
            {
                name: "BIG WALF",
                height: math.unit(750, "feet"),
            },
        ]
    )
};

characterMakers["Carley"] = () => {
    return makeCharacter(
        "Carley",
        "QuakeYote",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/carley/front.svg",
                    extra: 3927/3540 * (1 / (1 - 0.03)),
                    bottom: 0.03
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 3/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(185, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(8, "miles"),
            },
        ]
    )
};

characterMakers["Citrine"] = () => {
    return makeCharacter(
        "Citrine",
        "thunderstrike23",
        {
            front: {
                height: math.unit(3, "feet"),
                weight: math.unit(28, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/citrine/front.svg"
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(3, "feet")
            }
        ]
    )
};

characterMakers["Aura Starwind"] = () => {
    return makeCharacter(
        "Aura Starwind",
        "StrikeVixen",
        {
            front: {
                height: math.unit(14, "feet"),
                weight: math.unit(1450, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/aura-starwind/front.svg",
                    extra: 1455/1335
                }
            },
            side: {
                height: math.unit(14, "feet"),
                weight: math.unit(1450, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/aura-starwind/side.svg",
                    extra: 1654/1497
                }
            },
            taur: {
                height: math.unit(18, "feet"),
                weight: math.unit(5500, "kg"),
                name: "Taur",
                image: {
                    source: "./media/characters/aura-starwind/taur.svg",
                    extra: 1760/1650
                }
            },
            feral: {
                height: math.unit(46, "feet"),
                weight: math.unit(25000, "kg"),
                name: "Feral",
                image: {
                    source: "./media/characters/aura-starwind/feral.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(14, "feet")
            },
            {
                name: "Macro",
                height: math.unit(50, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(5000, "meters")
            },
            {
                name: "Gigamacro",
                height: math.unit(100000, "kilometers")
            },
        ]
    )
};

characterMakers["Rivet"] = () => {
    return makeCharacter(
        "Rivet",
        "Vonadi",
        {
            front: {
                height: math.unit(2 + 7/12, "feet"),
                weight: math.unit(32, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/rivet/front.svg",
                    extra: 1716/1658 * (1 / (1 - 0.03)),
                    bottom: 0.03
                }
            },
            foot: {
                height: math.unit(0.551, "feet"),
                name: "Rivet's Foot",
                image: {
                    source: "./media/characters/rivet/foot.svg"
                },
                rename: true
            }
        },
        [
            {
                name: "Micro",
                height: math.unit(1.5, "inches"),
            },
            {
                name: "Normal",
                height: math.unit(2 + 7/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(85, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(2.2, "km")
            }
        ]
    )
};

characterMakers["Coffee"] = () => {
    return makeCharacter(
        "Coffee",
        "CoffeeDoggo",
        {
            front: {
                height: math.unit(5 + 9/12, "feet"),
                weight: math.unit(150, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/coffee/front.svg",
                    extra: 3666/3032 * (1 / (1 - 0.04)),
                    bottom: 0.04
                }
            }
        },
        [
            {
                name: "Micro",
                height: math.unit(2, "inches"),
            },
            {
                name: "Normal",
                height: math.unit(5 + 9/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(800, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(25, "miles")
            }
        ]
    )
};

characterMakers["Chari-Gal"] = () => {
    return makeCharacter(
        "Chari-Gal",
        "Knoem",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(200, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/chari-gal/front.svg",
                    extra: 1568/1385 * (1 / (1 - 0.047)),
                    bottom: 0.047
                }
            },
            gigantamax: {
                height: math.unit(6*16, "feet"),
                weight: math.unit(200*16*16*16, "lbs"),
                name: "Gigantamax",
                image: {
                    source: "./media/characters/chari-gal/gigantamax.svg",
                    extra: 1124/888 * (1 / (1 - 0.03)),
                    bottom: 0.03
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 7/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(200, "feet"),
                default: true
            }
        ]
    )
};

characterMakers["Nova"] = () => {
    return makeCharacter(
        "Nova",
        "CoffeeDoggo",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/nova/front.svg",
                    extra: 5000/4722 * (1 / (1 - 0.02)),
                    bottom: 0.02
                }
            }
        },
        [
            {
                name: "Micro-",
                height: math.unit(0.8, "inches")
            },
            {
                name: "Micro",
                height: math.unit(2, "inches"),
                normal: true
            },
        ]
    )
};

characterMakers["Argent"] = () => {
    return makeCharacter(
        "Argent",
        "ArgentVZ",
        {
            front: {
                height: math.unit(3 + 1/12, "feet"),
                weight: math.unit(21.7, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/argent/front.svg",
                    extra: 1565/1416 * (1 / (1 - 0.01)),
                    bottom: 0.01
                }
            }
        },
        [
            {
                name: "Micro",
                height: math.unit(2, "inches")
            },
            {
                name: "Normal",
                height: math.unit(3 + 1/12, "feet"),
                normal: true
            },
            {
                name: "Macro",
                height: math.unit(120, "feet")
            },
        ]
    )
};

characterMakers["Mira al-Cul"] = () => {
    return makeCharacter(
        "Mira al-Cul",
        "Mariokartsonicriders",
        {
            lamp: {
                height: math.unit(7 * 1559 / 989, "feet"),
                name: "Magic Lamp",
                image: {
                    source: "./media/characters/mira-al-cul/lamp.svg",
                    extra: 1617/1559
                }
            },
            front: {
                height: math.unit(7, "feet"),
                name: "Front",
                image: {
                    source: "./media/characters/mira-al-cul/front.svg",
                    extra: 1044/990
                }
            },
        },
        [
            {
                name: "Heavily Restricted",
                height: math.unit(7 * 1559 / 989, "feet")
            },
            {
                name: "Freshly Freed",
                height: math.unit(50 * 1559 / 989, "feet")
            },
            {
                name: "World Encompassing",
                height: math.unit(10000 * 1559 / 989, "miles")
            },
            {
                name: "Galactic",
                height: math.unit(1.433 * 1559 / 989, "zettameters")
            },
            {
                name: "Palmed Universe",
                height: math.unit(6000 * 1559 / 989, "yottameters"),
                default: true
            },
            {
                name: "Multiversal Matriarch",
                height: math.unit(8.87e10, "yottameters")
            },
            {
                name: "Void Mother",
                height: math.unit(3.14e110, "yottaparsecs")
            },
        ]
    )
};

characterMakers["Kuro-shi Uchū"] = () => {
    return makeCharacter(
        "Kuro-shi Uchū",
        "Dragon Shark",
        {
            front: {
                height: math.unit(17 + 1/12, "feet"),
                weight: math.unit(476.2*5, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/kuro-shi-uchū/front.svg",
                    extra: 2329/1835 * (1 / (1 - 0.02)),
                    bottom: 0.02
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(2, "inches")
            },
            {
                name: "Normal",
                height: math.unit(12, "meters")
            },
            {
                name: "Planetary",
                height: math.unit(0.00929, "AU"),
                default: true
            },
            {
                name: "Universal",
                height: math.unit(20, "gigaparsecs")
            },
        ]
    )
};

characterMakers["Katherine"] = () => {
    return makeCharacter(
        "Katherine",
        "chrisrules123",
        {
            front: {
                height: math.unit(5 + 2/12, "feet"),
                weight: math.unit(120, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/katherine/front.svg",
                    extra: 2075/1969
                }
            },
            dress: {
                height: math.unit(5 + 2/12, "feet"),
                weight: math.unit(120, "lbs"),
                name: "Dress",
                image: {
                    source: "./media/characters/katherine/dress.svg",
                    extra: 2258/2064
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(1, "inches"),
                default: true
            },
            {
                name: "Normal",
                height: math.unit(5 + 2/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(100, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(80, "miles")
            },
        ]
    )
};

characterMakers["Yevis"] = () => {
    return makeCharacter(
        "Yevis",
        "Mariokartsonicriders",
        {
            front: {
                height: math.unit(7 + 8/12, "feet"),
                weight: math.unit(250, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/yevis/front.svg",
                    extra: 1938/1755
                }
            }
        },
        [
            {
                name: "Mortal",
                height: math.unit(7 + 8/12, "feet")
            },
            {
                name: "Battle",
                height: math.unit(25 + 11/12, "feet")
            },
            {
                name: "Wrath",
                height: math.unit(1654 + 11/12, "feet")
            },
            {
                name: "Planet Destroyer",
                height: math.unit(12000, "miles")
            },
            {
                name: "Galaxy Conqueror",
                height: math.unit(1.45, "zettameters"),
                default: true
            },
            {
                name: "Universal War",
                height: math.unit(184, "gigaparsecs")
            },
            {
                name: "Eternity War",
                height: math.unit(1.98e55, "yottaparsecs")
            },
        ]
    )
};

characterMakers["Xavier"] = () => {
    return makeCharacter(
        "Xavier",
        "zmaster587",
        {
            front: {
                height: math.unit(5 + 8/12, "feet"),
                weight: math.unit(63, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/xavier/front.svg",
                    extra: 944/883
                }
            },
            frontStretch: {
                height: math.unit(5 + 8/12, "feet"),
                weight: math.unit(63, "kg"),
                name: "Stretching",
                image: {
                    source: "./media/characters/xavier/front-stretch.svg",
                    extra: 962/820
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 8/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(100, "meters"),
                default: true
            },
            {
                name: "McLargeHuge",
                height: math.unit(10, "miles")
            },
        ]
    )
};

characterMakers["Joshii"] = () => {
    return makeCharacter(
        "Joshii",
        "DarkieTehJester",
        {
            front: {
                height: math.unit(5 + 5/12, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/joshii/front.svg"
                }
            },
            foot: {
                height: math.unit((5 + 5/12) * 0.1676, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/joshii/foot.svg"
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(2, "inches")
            },
            {
                name: "Normal",
                height: math.unit(5 + 5/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(785, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(24.5, "miles")
            },
        ]
    )
};

characterMakers["Goddess Elizabeth"] = () => {
    return makeCharacter(
        "Goddess Elizabeth",
        "DarkieTehJester",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/goddess-elizabeth/front.svg"
                }
            },
            foot: {
                height: math.unit(6 * 0.25436 / 2, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/goddess-elizabeth/foot.svg"
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(12, "feet")
            },
            {
                name: "Normal",
                height: math.unit(80, "miles"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(15000, "parsecs")
            },
        ]
    )
};

characterMakers["Kara"] = () => {
    return makeCharacter(
        "Kara",
        "Vonadi",
        {
            front: {
                height: math.unit(5 + 9/12, "feet"),
                weight: math.unit(144, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/kara/front.svg"
                }
            },
            feet: {
                height: math.unit(6/6.765, "feet"),
                name: "Kara's Feet",
                rename: true,
                image: {
                    source: "./media/characters/kara/feet.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 9/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(174, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Tyrone"] = () => {
    return makeCharacter(
        "Tyrone",
        "nanakisan",
        {
            front: {
                height: math.unit(18, "feet"),
                weight: math.unit(4050, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/tyrone/front.svg",
                    extra: 2520/2402 * (1 / (1 - 0.025)),
                    bottom: 0.025
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(18, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(300, "feet")
            },
        ]
    )
};

characterMakers["Danny"] = () => {
    return makeCharacter(
        "Danny",
        "danny_gryphon",
        {
            front: {
                height: math.unit(7 + 8/12, "feet"),
                weight: math.unit(120, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/danny/front.svg",
                    extra: 1490/1350
                }
            },
            back: {
                height: math.unit(7 + 8/12, "feet"),
                weight: math.unit(120, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/danny/back.svg",
                    extra: 1490/1350
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7 + 8/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Mallow"] = () => {
    return makeCharacter(
        "Mallow",
        "Mallowchu",
        {
            front: {
                height: math.unit(3.5, "inches"),
                weight: math.unit(19, "grams"),
                name: "Front",
                image: {
                    source: "./media/characters/mallow/front.svg",
                    extra: 471/431
                }
            },
            back: {
                height: math.unit(3.5, "inches"),
                weight: math.unit(19, "grams"),
                name: "Back",
                image: {
                    source: "./media/characters/mallow/back.svg",
                    extra: 471/431
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(3.5, "inches")
            },
        ]
    )
};

characterMakers["Starry Aqua"] = () => {
    return makeCharacter(
        "Starry Aqua",
        "StarryAqua",
        {
            front: {
                height: math.unit(9, "feet"),
                weight: math.unit(230, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/starry-aqua/front.svg"
                }
            },
            back: {
                height: math.unit(9, "feet"),
                weight: math.unit(230, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/starry-aqua/back.svg"
                }
            },
            hand: {
                height: math.unit(9 * 0.1168, "feet"),
                name: "Hand",
                image: {
                    source: "./media/characters/starry-aqua/hand.svg"
                }
            },
            foot: {
                height: math.unit(9 * 0.18, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/starry-aqua/foot.svg"
                }
            }
        },
        [
            {
                name: "Micro",
                height: math.unit(3, "inches")
            },
            {
                name: "Normal",
                height: math.unit(9, "feet")
            },
            {
                name: "Macro",
                height: math.unit(300, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(3200, "feet")
            }
        ]
    )
};

characterMakers["Luka"] = () => {
    return makeCharacter(
        "Luka",
        "UmbraHusky",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(230, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/luka/front.svg",
                    extra: 1 / (1 - 0.025),
                    bottom: 0.025
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(12 + 8/12, "feet")
            },
            {
                name: "Minimacro",
                height: math.unit(20, "feet")
            },
            {
                name: "Macro",
                height: math.unit(250, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(5, "miles")
            },
            {
                name: "Gigamacro",
                height: math.unit(8000, "miles")
            },
        ]
    )
};

characterMakers["Natalie Nightring"] = () => {
    return makeCharacter(
        "Natalie Nightring",
        "NatEdgecomb",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/natalie-nightring/front.svg",
                    extra: 1 / (1 - 0.06),
                    bottom: 0.06
                }
            },
        },
        [
            {
                name: "Uh Oh",
                height: math.unit(0.1, "mm")
            },
            {
                name: "Small",
                height: math.unit(3, "inches")
            },
            {
                name: "Human Scale",
                height: math.unit(6, "feet")
            },
            {
                name: "Librarian",
                height: math.unit(50, "feet"),
                default: true
            },
            {
                name: "Immense",
                height: math.unit(200, "miles")
            },
        ]
    )
};

characterMakers["Danni Rosie"] = () => {
    return makeCharacter(
        "Danni Rosie",
        "colwag",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(180, "lbs"),
                name: "Front",
                image: {
                    source: "./media/characters/danni-rosie/front.svg",
                    extra: 1260/1128 * (1 / (1 - 0.022)),
                    bottom: 0.022
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(2, "inches"),
                default: true
            },
        ]
    )
};

characterMakers["Samantha Kruse"] = () => {
    return makeCharacter(
        "Samantha Kruse",
        "colwag",
        {
            front: {
                height: math.unit(5 + 9/12, "feet"),
                weight: math.unit(220, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/samantha-kruse/front.svg",
                    extra: (985 / 935) * (1 / (1 - 0.03)),
                    bottom: 0.03
                }
            },
            frontUndressed: {
                height: math.unit(5 + 9/12, "feet"),
                weight: math.unit(220, "lb"),
                name: "Front (Undressed)",
                image: {
                    source: "./media/characters/samantha-kruse/front-undressed.svg",
                    extra: (973 / 923) * (1 / (1 - 0.025)),
                    bottom: 0.025
                }
            },
            fat: {
                height: math.unit(5 + 9/12, "feet"),
                weight: math.unit(900, "lb"),
                name: "Front (Fat)",
                image: {
                    source: "./media/characters/samantha-kruse/fat.svg",
                    extra: 2688/2561
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 9/12, "feet"),
                default: true
            }
        ]
    )
};

characterMakers["Amelia Rosie"] = () => {
    return makeCharacter(
        "Amelia Rosie",
        "colwag",
        {
            back: {
                height: math.unit(5 + 4/12, "feet"),
                weight: math.unit(4963, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/amelia-rosie/back.svg",
                    extra: 1113/963 * (1 / (1 - 0.01)),
                    bottom: 0.01
                }
            },
        },
        [
            {
                name: "Level 0",
                height: math.unit(5 + 4/12, "feet")
            },
            {
                name: "Level 1",
                height: math.unit(164597, "feet"),
                default: true
            },
            {
                name: "Level 2",
                height: math.unit(956243, "miles")
            },
            {
                name: "Level 3",
                height: math.unit(29421709423, "miles")
            },
            {
                name: "Level 4",
                height: math.unit(154, "lightyears")
            },
            {
                name: "Level 5",
                height: math.unit(4738272, "lightyears")
            },
            {
                name: "Level 6",
                height: math.unit(145787152896, "lightyears")
            },
        ]
    )
};

characterMakers["Rook Kitara"] = () => {
    return makeCharacter(
        "Rook Kitara",
        "TailsHigh",
        {
            front: {
                height: math.unit(5 + 11/12, "feet"),
                weight: math.unit(65, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/rook-kitara/front.svg",
                    extra: 1347/1274 * (1 / (1 - 0.005)),
                    bottom: 0.005
                }
            },
        },
        [
            {
                name: "Totally Unfair",
                height: math.unit(1.8, "mm")
            },
            {
                name: "Lap Rookie",
                height: math.unit(1.4, "feet")
            },
            {
                name: "Normal",
                height: math.unit(5 + 11/12, "feet"),
                default: true
            },
            {
                name: "How Did This Happen",
                height: math.unit(80, "miles")
            }
        ]
    )
};

characterMakers["Pisces"] = () => {
    return makeCharacter(
        "Pisces",
        "Pisces_Kelp",
        {
            front: {
                height: math.unit(7, "feet"),
                weight: math.unit(300, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/pisces/front.svg",
                    extra: 2255/2115 * (1 / (1 - 0.03)),
                    bottom: 0.03
                }
            },
            back: {
                height: math.unit(7, "feet"),
                weight: math.unit(300, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/pisces/back.svg",
                    extra: 2146/2055 * (1 / (1 - 0.04)),
                    bottom: 0.04
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7, "feet")
            },
            {
                name: "Swimming Pool",
                height: math.unit(12.2, "meters")
            },
            {
                name: "Olympic Swimming Pool",
                height: math.unit(56.3, "meters")
            },
            {
                name: "Lake Superior",
                height: math.unit(93900, "meters")
            },
            {
                name: "Mediterranean Sea",
                height: math.unit(644457, "meters")
            },
            {
                name: "World's Oceans",
                height: math.unit(4567491, "meters")
            },
        ]
    )
};

characterMakers["Zelas"] = () => {
    return makeCharacter(
        "Zelas",
        "Cirez",
        {
            front: {
                height: math.unit(2.3, "meters"),
                weight: math.unit(120, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/zelas/front.svg"
                }
            },
            side: {
                height: math.unit(2.3, "meters"),
                weight: math.unit(120, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/zelas/side.svg"
                }
            },
            back: {
                height: math.unit(2.3, "meters"),
                weight: math.unit(120, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/zelas/back.svg"
                }
            },
            foot: {
                height: math.unit(1.116, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/zelas/foot.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(2.3, "meters")
            },
            {
                name: "Macro",
                height: math.unit(30, "meters"),
                default: true
            },
        ]
    )
};

characterMakers["Talbot"] = () => {
    return makeCharacter(
        "Talbot",
        "Talbot",
        {
            front: {
                height: math.unit(1, "inch"),
                weight: math.unit(0.21, "grams"),
                name: "Front",
                image: {
                    source: "./media/characters/talbot/front.svg",
                    extra: 594/544
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(1, "inch")
            },
        ]
    )
};

characterMakers["Fliss"] = () => {
    return makeCharacter(
        "Fliss",
        "Fliss",
        {
            front: {
                height: math.unit(3 + 3/12, "feet"),
                weight: math.unit(51.8, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/fliss/front.svg",
                    extra: 840/640
                }
            },
        },
        [
            {
                name: "Teeny Tiny",
                height: math.unit(1, "mm")
            },
            {
                name: "Small",
                height: math.unit(1, "inch"),
                default: true
            },
            {
                name: "Standard Sylveon",
                height: math.unit(3 + 3/12, "feet")
            },
            {
                name: "Large Nuisance",
                height: math.unit(33, "feet")
            },
            {
                name: "City Filler",
                height: math.unit(3000, "feet")
            },
            {
                name: "New Horizon",
                height: math.unit(6000, "miles")
            },

        ]
    )
};

characterMakers["Fleta"] = () => {
    return makeCharacter(
        "Fleta",
        "TheFleta",
        {
            front: {
                height: math.unit(5, "cm"),
                weight: math.unit(1.94, "g"),
                name: "Front",
                image: {
                    source: "./media/characters/fleta/front.svg",
                    extra: 835/803
                }
            },
            back: {
                height: math.unit(5, "cm"),
                weight: math.unit(1.94, "g"),
                name: "Back",
                image: {
                    source: "./media/characters/fleta/back.svg",
                    extra: 835/803
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(5, "cm"),
                default: true
            },
        ]
    )
};

characterMakers["Dominic"] = () => {
    return makeCharacter(
        "Dominic",
        "HypoTheDerg",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(225, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/dominic/front.svg",
                    extra: 1770/1620 * (1 / (1 - 0.025)),
                    bottom: 0.025
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(225, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/dominic/back.svg",
                    extra: 1745/1620 * (1 / (1 - 0.065)),
                    bottom: 0.065
                }
            },
        },
        [
            {
                name: "Nano",
                height: math.unit(0.1, "mm")
            },
            {
                name: "Micro-",
                height: math.unit(1, "mm")
            },
            {
                name: "Micro",
                height: math.unit(4, "inches")
            },
            {
                name: "Normal",
                height: math.unit(6 + 4/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(115, "feet")
            },
            {
                name: "Macro+",
                height: math.unit(955, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(8990, "feet")
            },
            {
                name: "Gigmacro",
                height: math.unit(9310, "miles")
            },
            {
                name: "Teramacro",
                height: math.unit(1567005010, "miles")
            },
            {
                name: "Examacro",
                height: math.unit(1425, "parsecs")
            },
        ]
    )
};

characterMakers["Major Colonel"] = () => {
    return makeCharacter(
        "Major Colonel",
        "Major Colonel",
        {
            front: {
                height: math.unit(400, "feet"),
                weight: math.unit(44444444, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/major-colonel/front.svg"
                }
            },
            back: {
                height: math.unit(400, "feet"),
                weight: math.unit(44444444, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/major-colonel/back.svg"
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(400, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Axel Lycan"] = () => {
    return makeCharacter(
        "Axel Lycan",
        "AxelLycan",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(120, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/axel-lycan/front.svg",
                    extra: 1 / (1 - 0.08),
                    bottom: 0.08
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(1, "km")
            },
        ]
    )
};

characterMakers["Vanrel (Hyena)"] = () => {
    return makeCharacter(
        "Vanrel (Hyena)",
        "Vanrel",
        {
            front: {
                height: math.unit(5 + 9/12, "feet"),
                weight: math.unit(175, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/vanrel-hyena/front.svg",
                    extra: 1086/1010 * (1 / (1 - 0.04)),
                    bottom: 0.04
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 9/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Abbott Absol"] = () => {
    return makeCharacter(
        "Abbott Absol",
        "Abbott Absol",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(103, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/abbott-absol/front.svg",
                    extra: 2010/1842
                }
            },
        },
        [
            {
                name: "Megamicro",
                height: math.unit(0.1, "mm")
            },
            {
                name: "Micro",
                height: math.unit(1, "inch")
            },
            {
                name: "Normal",
                height: math.unit(6, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Hector"] = () => {
    return makeCharacter(
        "Hector",
        "LibragonSlvr",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(264, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/hector/front.svg",
                    extra: 2280/2130 * (1 / (1 - 0.07)),
                    bottom: 0.07
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(12.25, "foot"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(160, "feet")
            },
        ]
    )
};

characterMakers["Sal"] = () => {
    return makeCharacter(
        "Sal",
        "Bigdur",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/sal/front.svg",
                    extra: 1846/1699 * (1 / (1 - 0.04)),
                    bottom: 0.04
                }
            },
        },
        [
            {
                name: "Megamacro",
                height: math.unit(10, "miles")
            },
        ]
    )
};

characterMakers["Ranger"] = () => {
    return makeCharacter(
        "Ranger",
        "Ranger",
        {
            front: {
                height: math.unit(3, "meters"),
                weight: math.unit(450, "kg"),
                name: "front",
                image: {
                    source: "./media/characters/ranger/front.svg",
                    extra: 2401/2243 * (1 / (1 - 0.05)),
                    bottom: 0.05
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(3, "meters")
            },
        ]
    )
};

characterMakers["Theresa"] = () => {
    return makeCharacter(
        "Theresa",
        "Ranger",
        {
            front: {
                height: math.unit(14, "feet"),
                weight: math.unit(800, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/theresa/front.svg",
                    extra: 3575/3346 * (1 / (1 - 0.03)),
                    bottom: 0.03
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(14, "feet")
            },
        ]
    )
};

characterMakers["Ine"] = () => {
    return makeCharacter(
        "Ine",
        "Ranger",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(3, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/ine/front.svg",
                    extra: 678/539 * (1 / (1 - 0.023)),
                    bottom: 0.023
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(2.265, "feet")
            },
        ]
    )
};

characterMakers["Vial"] = () => {
    return makeCharacter(
        "Vial",
        "Ranger",
        {
            front: {
                height: math.unit(5, "feet"),
                weight: math.unit(30, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/vial/front.svg",
                    extra: 1365/1277 * (1 / (1 - 0.04)),
                    bottom: 0.04
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5, "feet")
            },
        ]
    )
};

characterMakers["Rovoska"] = () => {
    return makeCharacter(
        "Rovoska",
        "Rovoska",
        {
            side: {
                height: math.unit(3.4, "meters"),
                weight: math.unit(1000, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/rovoska/side.svg",
                    extra: 4403/1515
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(3.4, "meters")
            },
        ]
    )
};

characterMakers["Gunner Rotthbauer"] = () => {
    return makeCharacter(
        "Gunner Rotthbauer",
        "GunnerRott",
        {
            front: {
                height: math.unit(8, "feet"),
                weight: math.unit(315, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/gunner-rotthbauer/front.svg"
                }
            },
            back: {
                height: math.unit(8, "feet"),
                weight: math.unit(315, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/gunner-rotthbauer/back.svg"
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(3.5, "inches")
            },
            {
                name: "Normal",
                height: math.unit(8, "feet")
            },
            {
                name: "Macro",
                height: math.unit(250, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(1, "AU")
            },
        ]
    )
};

characterMakers["Allatia"] = () => {
    return makeCharacter(
        "Allatia",
        "ilikefurrystoo",
        {
            front: {
                height: math.unit(5 + 5/12, "feet"),
                weight: math.unit(140, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/allatia/front.svg",
                    extra: 1227/1180 * (1 / (1 - 0.027)),
                    bottom: 0.027
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 5/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(250, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(8, "miles")
            }
        ]
    )
};

characterMakers["Tene"] = () => {
    return makeCharacter(
        "Tene",
        "TenebrisDrox",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(120, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/tene/front.svg",
                    extra: 1728/1578 * (1 / (1 - 0.022)),
                    bottom: 0.022
                }
            },
            stomping: {
                height: math.unit(2.025, "meters"),
                weight: math.unit(120, "lb"),
                name: "Stomping",
                image: {
                    source: "./media/characters/tene/stomping.svg",
                    extra: 938/873 * (1 / (1 - 0.01)),
                    bottom: 0.01
                }
            },
            sitting: {
                height: math.unit(1, "meter"),
                weight: math.unit(120, "lb"),
                name: "Sitting",
                image: {
                    source: "./media/characters/tene/sitting.svg",
                    extra: 437/415 * (1 / (1 - 0.1)),
                    bottom: 0.1
                }
            },
            feral: {
                height: math.unit(3.9, "feet"),
                weight: math.unit(250, "lb"),
                name: "Feral",
                image: {
                    source: "./media/characters/tene/feral.svg",
                    extra: 717/458 * (1 / (1 - 0.179)),
                    bottom: 0.179
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6, "feet")
            },
            {
                name: "Macro",
                height: math.unit(300, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(5, "miles")
            },
        ]
    )
};

characterMakers["Evander"] = () => {
    return makeCharacter(
        "Evander",
        "KlezmerGryphon",
        {
            side: {
                height: math.unit(6, "feet"),
                name: "Side",
                image: {
                    source: "./media/characters/evander/side.svg",
                    extra: 877/477
                }
            },
        },
        [
             {
                 name: "Normal",
                 height: math.unit(0.83, "meters")
             },
        ]
    )
};

characterMakers["Ka'Tamra \"Spaz\" Ci'Karan"] = () => {
    return makeCharacter(
        "Ka'Tamra \"Spaz\" Ci'Karan",
        "Spazman",
        {
            front: {
                height: math.unit(12, "feet"),
                weight: math.unit(1000, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/ka'tamra-spaz-ci'karan/front.svg",
                    extra: 1762/1611
                }
            },
            back: {
                height: math.unit(12, "feet"),
                weight: math.unit(1000, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/ka'tamra-spaz-ci'karan/back.svg",
                    extra: 1762/1611
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(12, "feet"),
                default: true
            },
            {
                name: "Kaiju",
                height: math.unit(150, "feet")
            },
        ]
    )
};

characterMakers["Zero Alurus"] = () => {
    return makeCharacter(
        "Zero Alurus",
        "",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/zero-alurus/front.svg"
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/zero-alurus/back.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 10/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(60, "feet"),
                default: true
            },
            {
                name: "Macro+",
                height: math.unit(450, "feet")
            },
        ]
    )
};

characterMakers["Mega Shi"] = () => {
    return makeCharacter(
        "Mega Shi",
        "MShi8027",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(200, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/mega-shi/front.svg",
                    extra: 1279/1250 * (1 / (1 - 0.02)),
                    bottom: 0.02
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(200, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/mega-shi/back.svg",
                    extra: 1279/1250 * (1 / (1 - 0.02)),
                    bottom: 0.02
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(16 + 6/12, "feet")
            },
            {
                name: "Normal",
                height: math.unit(660, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(10, "miles")
            },
            {
                name: "Planetary Launch",
                height: math.unit(500, "miles")
            },
            {
                name: "Interstellar",
                height: math.unit(1e9, "miles")
            },
            {
                name: "Leaving the Universe",
                height: math.unit(1, "gigaparsec")
            },
            {
                name: "Travelling Universes",
                height: math.unit(30e15, "parsecs")
            },
        ]
    )
};

characterMakers["Odyssey"] = () => {
    return makeCharacter(
        "Odyssey",
        "Freschlauhs",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/odyssey/front.svg",
                    extra: 1782/1582 * (1 / (1 - 0.01)),
                    bottom: 0.01
                }
            },
            side: {
                height: math.unit(5.6, "feet"),
                weight: math.unit(140, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/odyssey/side.svg",
                    extra: 6462/5700
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 4/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(1, "km")
            },
            {
                name: "Megamacro",
                height: math.unit(3000, "km")
            },
            {
                name: "Gigamacro",
                height: math.unit(1, "AU"),
                default: true
            },
            {
                name: "Omniversal",
                height: math.unit(100e14, "lightyears")
            },
        ]
    )
};

characterMakers["Mekuto"] = () => {
    return makeCharacter(
        "Mekuto",
        "Mekuto",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(300, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/mekuto/front.svg",
                    extra: 921/832 * (1 / (1 - 0.03)),
                    bottom: 0.03
                }
            },
            hand: {
                height: math.unit(6/10.24, "feet"),
                name: "Hand",
                image: {
                    source: "./media/characters/mekuto/hand.svg"
                }
            },
            foot: {
                height: math.unit(6/5.05, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/mekuto/foot.svg"
                }
            },
        },
        [
            {
                name: "Minimicro",
                height: math.unit(0.2, "inches")
            },
            {
                name: "Micro",
                height: math.unit(1.5, "inches")
            },
            {
                name: "Normal",
                height: math.unit(5 + 11/12, "feet"),
                default: true
            },
            {
                name: "Minimacro",
                height: math.unit(17 + 9/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(177.5, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(152, "miles")
            },
        ]
    )
};

characterMakers["Dafydd Tomos"] = () => {
    return makeCharacter(
        "Dafydd Tomos",
        "SolarfoxArt",
        {
            front: {
                height: math.unit(6.5, "inches"),
                weight: math.unit(13, "oz"),
                name: "Front",
                image: {
                    source: "./media/characters/dafydd-tomos/front.svg",
                    extra: 2990/2603 * (1 / (1 - 0.03)),
                    bottom: 0.03
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(6.5, "inches"),
                default: true
            },
        ]
    )
};

characterMakers["Splinter"] = () => {
    return makeCharacter(
        "Splinter",
        "SirSplinter",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/splinter/front.svg",
                    extra: 2990/2882 * (1 / (1 - 0.04)),
                    bottom: 0.04
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/splinter/back.svg",
                    extra: 2990/2882 * (1 / (1 - 0.04)),
                    bottom: 0.04
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6, "feet")
            },
            {
                name: "Macro",
                height: math.unit(230, "meters"),
                default: true
            },
        ]
    )
};

characterMakers["SnowGabumon"] = () => {
    return makeCharacter(
        "SnowGabumon",
        "SnowGabumon",
        {
            front: {
                height: math.unit(4 + 10/12, "feet"),
                weight: math.unit(480, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/snow-gabumon/front.svg",
                    extra: 1140/963 * (1 / (1 - 0.058)),
                    bottom: 0.058
                }
            },
            back: {
                height: math.unit(4 + 10/12, "feet"),
                weight: math.unit(480, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/snow-gabumon/back.svg",
                    extra: 1115/962 * (1 / (1 - 0.041)),
                    bottom: 0.041
                }
            },
            frontUndresed: {
                height: math.unit(4 + 10/12, "feet"),
                weight: math.unit(480, "lb"),
                name: "Front (Undressed)",
                image: {
                    source: "./media/characters/snow-gabumon/front-undressed.svg",
                    extra: 1061/960 * (1 / (1 - 0.045)),
                    bottom: 0.045
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(1, "inch")
            },
            {
                name: "Normal",
                height: math.unit(4 + 10/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(200, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(120, "miles")
            },
            {
                name: "Gigamacro",
                height: math.unit(9800, "miles")
            },
        ]
    )
};

characterMakers["Moody"] = () => {
    return makeCharacter(
        "Moody",
        "MoodysterDog",
        {
            front: {
                height: math.unit(1.7, "meters"),
                weight: math.unit(140, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/moody/front.svg",
                    extra: 3226/3007 * (1 / (1 - 0.087)),
                    bottom: 0.087
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(1, "mm")
            },
            {
                name: "Normal",
                height: math.unit(1.7, "meters"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(80, "meters")
            },
            {
                name: "Macro+",
                height: math.unit(500, "meters")
            },
        ]
    )
};

characterMakers["Zyas"] = () => {
    return makeCharacter(
        "Zyas",
        "Delathar",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/zyas/front.svg",
                    extra: 1180/1120 * (1 / (1 - 0.045)),
                    bottom: 0.045
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(10, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(500, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(5, "miles")
            },
            {
                name: "Teramacro",
                height: math.unit(150000, "miles")
            },
        ]
    )
};

characterMakers["Cuon"] = () => {
    return makeCharacter(
        "Cuon",
        "CollieCuon",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/cuon/front.svg",
                    extra: 1390/1320 * (1 / (1 - 0.008)),
                    bottom: 0.008
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(3, "inches")
            },
            {
                name: "Normal",
                height: math.unit(18 + 9/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(360, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(360, "miles")
            },
        ]
    )
};

characterMakers["Nyanuxk"] = () => {
    return makeCharacter(
        "Nyanuxk",
        "Nyanuxk",
        {
            front: {
                height: math.unit(2.4, "meters"),
                weight: math.unit(70, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/nyanuxk/front.svg",
                    extra: 1172/1084 * (1 / (1 - 0.065)),
                    bottom: 0.065
                }
            },
            side: {
                height: math.unit(2.4, "meters"),
                weight: math.unit(70, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/nyanuxk/side.svg",
                    extra: 1190/1132 * (1 / (1 - 0.007)),
                    bottom: 0.007
                }
            },
            back: {
                height: math.unit(2.4, "meters"),
                weight: math.unit(70, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/nyanuxk/back.svg",
                    extra: 1200/1141 * (1 / (1 - 0.015)),
                    bottom: 0.015
                }
            },
            foot: {
                height: math.unit(0.52, "meters"),
                name: "Foot",
                image: {
                    source: "./media/characters/nyanuxk/foot.svg"
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(2, "cm")
            },
            {
                name: "Normal",
                height: math.unit(2.4, "meters"),
                default: true
            },
            {
                name: "Smaller Macro",
                height: math.unit(120, "meters")
            },
            {
                name: "Bigger Macro",
                height: math.unit(1.2, "km")
            },
            {
                name: "Megamacro",
                height: math.unit(15, "kilometers")
            },
            {
                name: "Gigamacro",
                height: math.unit(2000, "km")
            },
            {
                name: "Teramacro",
                height: math.unit(500000, "km")
            },
        ]
    )
};

characterMakers["Ailbhe"] = () => {
    return makeCharacter(
        "Ailbhe",
        "KlezmerGryphon",
        {
            side: {
                height: math.unit(6, "feet"),
                name: "Side",
                image: {
                    source: "./media/characters/ailbhe/side.svg",
                    extra: 757/464 * (1 / (1 - 0.041)),
                    bottom: 0.041
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(1.07, "meters"),
                default: true
            },
        ]
    )
};

characterMakers["Zevulfius"] = () => {
    return makeCharacter(
        "Zevulfius",
        "Nyanuxk",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(120, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/zevulfius/front.svg",
                    extra: 965/903
                }
            },
            side: {
                height: math.unit(6, "feet"),
                weight: math.unit(120, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/zevulfius/side.svg",
                    extra: 939/900
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(120, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/zevulfius/back.svg",
                    extra: 918/854 * (1 / (1 - 0.005)),
                    bottom: 0.005
                }
            },
            foot: {
                height: math.unit(6/3.72, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/zevulfius/foot.svg"
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(750, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(20, "km"),
                default: true
            },
            {
                name: "Gigamacro",
                height: math.unit(2000, "km")
            },
            {
                name: "Teramacro",
                height: math.unit(250000, "km")
            },
        ]
    )
};

characterMakers["Rikes"] = () => {
    return makeCharacter(
        "Rikes",
        "VeryLargeDog",
        {
            front: {
                height: math.unit(100, "feet"),
                weight: math.unit(350, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/rikes/front.svg",
                    extra: 1565/1483 * (1 / (1 - 0.017)),
                    bottom: 0.017
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(100, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Adam Silver-Mane"] = () => {
    return makeCharacter(
        "Adam Silver-Mane",
        "Dragonknightadam",
        {
            anthro: {
                height: math.unit(8, "feet"),
                weight: math.unit(120, "kg"),
                name: "Anthro",
                image: {
                    source: "./media/characters/adam-silver-mane/anthro.svg",
                    extra: 5743/5339 * (1 / (1 - 0.07)),
                    bottom: 0.07
                }
            },
            taur: {
                height: math.unit(16, "feet"),
                weight: math.unit(1500, "kg"),
                name: "Taur",
                image: {
                    source: "./media/characters/adam-silver-mane/taur.svg",
                    extra: 1713/1571 * (1 / (1 - 0.01)),
                    bottom: 0.01
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(8, "feet")
            },
            {
                name: "Macro",
                height: math.unit(800, "feet"),
                default: true
            },
            {
                name: "Macro+",
                height: math.unit(8, "miles")
            },
            {
                name: "Megamacro",
                height: math.unit(160, "miles")
            },
            {
                name: "Celestial",
                height: math.unit(8e6, "miles")
            },
            {
                name: "Celestial+",
                height: math.unit(800000, "parsecs")
            },
            {
                name: "Godly",
                height: math.unit(800, "teraparsecs")
            },
        ]
    )
};

characterMakers["Ky'owin"] = () => {
    return makeCharacter(
        "Ky'owin",
        "Kyowin",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/ky'owin/front.svg",
                    extra: 3888/3068 * (1 / (1 - 0.015)),
                    bottom: 0.015
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 8/12, "feet")
            },
            {
                name: "Large",
                height: math.unit(68, "feet")
            },
            {
                name: "Macro",
                height: math.unit(132, "feet")
            },
            {
                name: "Macro+",
                height: math.unit(340, "feet")
            },
            {
                name: "Macro++",
                height: math.unit(680, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(1, "mile")
            },
            {
                name: "Megamacro+",
                height: math.unit(10, "miles")
            },
        ]
    )
};

characterMakers["Mal"] = () => {
    return makeCharacter(
        "Mal",
        "agrosarmadillo",
        {
            front: {
                height: math.unit(4, "feet"),
                weight: math.unit(50, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/mal/front.svg",
                    extra: 785/724 * (1 / (1 - 0.07)),
                    bottom: 0.07
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(4, "inches")
            },
            {
                name: "Normal",
                height: math.unit(4, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(200, "feet")
            },
        ]
    )
};

characterMakers["Jordan Deware"] = () => {
    return makeCharacter(
        "Jordan Deware",
        "JordanDeware",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/jordan-deware/front.svg",
                    extra: 1191/1012
                }
            },
        },
        [
            {
                name: "Nano",
                height: math.unit(0.01, "mm")
            },
            {
                name: "Minimicro",
                height: math.unit(1, "mm")
            },
            {
                name: "Micro",
                height: math.unit(0.5, "inches")
            },
            {
                name: "Normal",
                height: math.unit(4, "feet"),
                default: true
            },
            {
                name: "Minimacro",
                height: math.unit(40, "meters")
            },
            {
                name: "Small Macro",
                height: math.unit(400, "meters")
            },
            {
                name: "Macro",
                height: math.unit(4, "miles")
            },
            {
                name: "Megamacro",
                height: math.unit(40, "miles")
            },
            {
                name: "Megamacro+",
                height: math.unit(400, "miles")
            },
            {
                name: "Gigamacro",
                height: math.unit(400000, "miles")
            },
        ]
    )
};

characterMakers["Kimiko"] = () => {
    return makeCharacter(
        "Kimiko",
        "HypoTheDerg",
        {
            side: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/kimiko/side.svg",
                    extra: 600/358
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(15, "feet")
            },
            {
                name: "Macro",
                height: math.unit(220, "feet")
            },
            {
                name: "Macro+",
                height: math.unit(1450, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(11500, "feet")
            },
            {
                name: "Gigamacro",
                height: math.unit(9500, "miles")
            },
            {
                name: "Teramacro",
                height: math.unit(2208005005, "miles")
            },
            {
                name: "Examacro",
                height: math.unit(2750, "parsecs")
            },
            {
                name: "Zettamacro",
                height: math.unit(101500, "parsecs")
            },
        ]
    )
};

characterMakers["Andrew Sleepy"] = () => {
    return makeCharacter(
        "Andrew Sleepy",
        "Proky",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(70, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/andrew-sleepy/front.svg"
                }
            },
            side: {
                height: math.unit(6, "feet"),
                weight: math.unit(70, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/andrew-sleepy/side.svg"
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(1, "mm"),
                default: true
            },
        ]
    )
};

characterMakers["Judio"] = () => {
    return makeCharacter(
        "Judio",
        "HypoTheDerg",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/judio/front.svg",
                    extra: 1258/1110
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 6/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(1000, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(10, "miles")
            },
        ]
    )
};

characterMakers["Nomaxice"] = () => {
    return makeCharacter(
        "Nomaxice",
        "Nomaxice",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(68, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/nomaxice/front.svg",
                    extra: 1498/1073 * (1 / (1 - 0.075)),
                    bottom: 0.075
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(8, "cm")
            },
            {
                name: "Norm",
                height: math.unit(1.82, "m")
            },
            {
                name: "Big",
                height: math.unit(8, "meters"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(18, "meters")
            },
            {
                name: "Macro+",
                height: math.unit(88, "meters")
            },
        ]
    )
};

characterMakers["Dydros"] = () => {
    return makeCharacter(
        "Dydros",
        "DatCyberDragon",
        {
            front: {
                height: math.unit(12, "feet"),
                weight: math.unit(1.5, "tons"),
                name: "Front",
                image: {
                    source: "./media/characters/dydros/front.svg",
                    extra: 863/800 * (1 / (1 - 0.015)),
                    bottom: 0.015
                }
            },
            back: {
                height: math.unit(12, "feet"),
                weight: math.unit(1.5, "tons"),
                name: "Back",
                image: {
                    source: "./media/characters/dydros/back.svg",
                    extra: 900/843 * (1 / (1 - 0.005)),
                    bottom: 0.005
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Riggi"] = () => {
    return makeCharacter(
        "Riggi",
        "Fyre_ace",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(100, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/riggi/front.svg",
                    extra: 5787/5303
                }
            },
            hyper: {
                height: math.unit(6*5/3, "feet"),
                weight: math.unit(400*5/3*5/3*5/3, "kg"),
                name: "Hyper",
                image: {
                    source: "./media/characters/riggi/hyper.svg",
                    extra: 3595/3485
                }
            },
        },
        [
            {
                name: "Small Macro",
                height: math.unit(50, "feet")
            },
            {
                name: "Default",
                height: math.unit(200, "feet"),
                default: true
            },
            {
                name: "Loom",
                height: math.unit(10000, "feet")
            },
            {
                name: "Cruising Altitude",
                height: math.unit(30000, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(100, "miles")
            },
            {
                name: "Continent Sized",
                height: math.unit(2800, "miles")
            },
            {
                name: "Earth Sized",
                height: math.unit(8000, "miles")
            },
        ]
    )
};

characterMakers["Alexi"] = () => {
    return makeCharacter(
        "Alexi",
        "AlexiWerewolf",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(250, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/alexi/front.svg",
                    extra: 3483/3291 * (1 / (1 - 0.04)),
                    bottom: 0.04
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(250, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/alexi/back.svg",
                    extra: 3533/3356 * (1 / (1 - 0.021)),
                    bottom: 0.021
                }
            },
            frontTransformed: {
                height: math.unit(12.5, "feet"),
                weight: math.unit(4000, "lb"),
                name: "Front (Transformed)",
                image: {
                    source: "./media/characters/alexi/front-transformed.svg",
                    extra: 5345/5100 * (1 / (1 - 0.03)),
                    bottom: 0.03
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(3, "meters"),
                default: true
            },
            {
                name: "Minimacro",
                height: math.unit(30, "meters")
            },
            {
                name: "Macro",
                height: math.unit(500, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(9000, "km")
            },
            {
                name: "Teramacro",
                height: math.unit(384000, "km")
            },
        ]
    )
};

characterMakers["Kayroo"] = () => {
    return makeCharacter(
        "Kayroo",
        "Kayroo",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/kayroo/front.svg",
                    extra: 1153/1038 * (1 / (1 - 0.06)),
                    bottom: 0.06
                }
            },
            foot: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Foot",
                image: {
                    source: "./media/characters/kayroo/foot.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(8, "feet")
            },
            {
                name: "Minimacro",
                height: math.unit(250, "feet")
            },
            {
                name: "Macro",
                height: math.unit(2800, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(5200, "feet")
            },
            {
                name: "Gigamacro",
                height: math.unit(27000, "feet")
            },
            {
                name: "Omega",
                height: math.unit(45000, "feet")
            },
        ]
    )
};

characterMakers["Rhys"] = () => {
    return makeCharacter(
        "Rhys",
        "BigMountainCat",
        {
            front: {
                height: math.unit(18, "feet"),
                weight: math.unit(5800, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/rhys/front.svg",
                    extra: 3386/3090 * (1 / (1 - 0.07)),
                    bottom: 0.07
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(18, "feet"),
                default: true
            },
            {
                name: "Working Size",
                height: math.unit(200, "feet")
            },
            {
                name: "Demolition Size",
                height: math.unit(2000, "feet")
            },
            {
                name: "Maximum Licensed Size",
                height: math.unit(5, "miles")
            },
            {
                name: "Maximum Observed Size",
                height: math.unit(10, "yottameters")
            },
        ]
    )
};

characterMakers["Toto"] = () => {
    return makeCharacter(
        "Toto",
        "Totoly_Toto",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(250, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/toto/front.svg",
                    exra: 527 / 479 * (1 / (1 - 0.05)),
                    bottom: 0.05
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(3, "feet")
            },
            {
                name: "Normal",
                height: math.unit(10, "feet")
            },
            {
                name: "Macro",
                height: math.unit(150, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(1200, "feet")
            },
        ]
    )
};

characterMakers["King"] = () => {
    return makeCharacter(
        "King",
        "KingSizedLion",
        {
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/king/back.svg"
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(2, "inches")
            },
            {
                name: "Normal",
                height: math.unit(8, "feet")
            },
            {
                name: "Macro",
                height: math.unit(200, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(50, "miles")
            },
        ]
    )
};

characterMakers["Cordite"] = () => {
    return makeCharacter(
        "Cordite",
        "photonman2",
        {
            anthro: {
                height: math.unit(6 + 5/12, "feet"),
                weight: math.unit(280, "lb"),
                name: "Anthro",
                image: {
                    source: "./media/characters/cordite/anthro.svg",
                    extra: 1986/1905 * (1 / (1 - 0.025)),
                    bottom: 0.025
                }
            },
            feral: {
                height: math.unit(2, "feet"),
                weight: math.unit(90, "lb"),
                name: "Feral",
                image: {
                    source: "./media/characters/cordite/feral.svg",
                    extra: 1260/755 * (1 / (1 - 0.05)),
                    bottom: 0.05
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 5/12, "feet")
            },
        ]
    )
};

characterMakers["Pianostrong"] = () => {
    return makeCharacter(
        "Pianostrong",
        "Pianostrong",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/pianostrong/front.svg",
                    extra: 6577/6254 * (1 / (1 - 0.02)),
                    bottom: 0.02
                }
            },
            side: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/pianostrong/side.svg",
                    extra: 6106/5730
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/pianostrong/back.svg",
                    extra: 6085/5733 * (1 / (1 - 0.01)),
                    bottom: 0.01
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(100, "feet")
            },
            {
                name: "Macro+",
                height: math.unit(300, "feet"),
                default: true
            },
            {
                name: "Macro++",
                height: math.unit(1000, "feet")
            },
        ]
    )
};

characterMakers["Kona"] = () => {
    return makeCharacter(
        "Kona",
        "Konadh",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/kona/front.svg",
                    extra: 2960/2629 * (1 / (1 - 0.005)),
                    bottom: 0.005
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(11 + 8/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(850, "feet"),
                default: true
            },
            {
                name: "Macro+",
                height: math.unit(1.5, "km"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(80, "miles")
            },
            {
                name: "Gigamacro",
                height: math.unit(3500, "miles")
            },   
        ]
    )
};

characterMakers["Levi"] = () => {
    return makeCharacter(
        "Levi",
        "LeviCurrie",
        {
            side: {
                height: math.unit(1.9, "meters"),
                weight: math.unit(326, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/levi/side.svg",
                    extra: 1704/1334 * (1 / (1 - 0.02)),
                    bottom: 0.02
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(1.9, "meters")
            },
            {
                name: "Macro",
                height: math.unit(20, "meters")
            },
            {
                name: "Macro+",
                height: math.unit(200, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(2, "km")
            },
            {
                name: "Megamacro+",
                height: math.unit(20, "km")
            },
            {
                name: "Gigamacro",
                height: math.unit(2500, "km")
            },
            {
                name: "Gigamacro+",
                height: math.unit(120000, "km")
            },
            {
                name: "Teramacro",
                height: math.unit(7.77e6, "km")
            },
        ]
    )
};

characterMakers["BMC"] = () => {
    return makeCharacter(
        "BMC",
        "BigMountainCat",
        {
            front: {
                height: math.unit(6 + 4/12, "feet"),
                weight: math.unit(188, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/bmc/front.svg",
                    extra: 1067/1022 * (1 / (1 - 0.047)),
                    bottom: 0.047
                }
            },
        },
        [
            {
                name: "Human-sized",
                height: math.unit(6 + 4/12, "feet")
            },
            {
                name: "Small",
                height: math.unit(250, "feet")
            },
            {
                name: "Normal",
                height: math.unit(1250, "feet"),
                default: true
            },
            {
                name: "Good Day",
                height: math.unit(88, "miles")
            },
            {
                name: "Largest Measured Size",
                height: math.unit(11.2e6, "lightyears")
            },
        ]
    )
};

characterMakers["Sven the Kaiju"] = () => {
    return makeCharacter(
        "Sven the Kaiju",
        "OfActionMan",
        {
            front: {
                height: math.unit(20, "feet"),
                weight: math.unit(2016, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/sven-the-kaiju/front.svg",
                    extra: 1479/1449 * (1 / (1 - 0.05)),
                    bottom: 0.05
                }
            },
        },
        [
            {
                name: "Fairy",
                height: math.unit(6, "inches")
            },
            {
                name: "Normal",
                height: math.unit(20, "feet"),
                default: true
            },
            {
                name: "Rampage",
                height: math.unit(200, "feet")
            },
        ]
    )
};

characterMakers["Marik"] = () => {
    return makeCharacter(
        "Marik",
        "Acrarun",
        {
            front: {
                height: math.unit(4, "meters"),
                weight: math.unit(2, "tons"),
                name: "Front",
                image: {
                    source: "./media/characters/marik/front.svg",
                    extra: 1057/1003 * (1 / (1 - 0.08)),
                    bottom: 0.08
                }
            },
        },
        [
             {
                 name: "Normal",
                 height: math.unit(4, "meters"),
                 default: true
             },
             {
                 name: "Macro",
                 height: math.unit(20, "meters")
             },
             {
                 name: "Megamacro",
                 height: math.unit(50, "km")
             },
             {
                 name: "Gigamacro",
                 height: math.unit(100, "km")
             },
             {
                 name: "Alpha Macro",
                 height: math.unit(7.88e7, "yottameters")
             },
        ]
    )
};

characterMakers["Mel"] = () => {
    return makeCharacter(
        "Mel",
        "SomedayNotSoon",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(110, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/mel/front.svg",
                    extra: 736/617 * (1 / (1 - 0.017)),
                    bottom: 0.017
                }
            },
        },
        [
            {
                name: "Pico",
                height: math.unit(3, "pm")
            },
            {
                name: "Nano",
                height: math.unit(3, "nm")
            },
            {
                name: "Micro",
                height: math.unit(0.3, "mm"),
                default: true
            },
            {
                name: "Micro+",
                height: math.unit(3, "mm")
            },
            {
                name: "Normal",
                height: math.unit(5 + 10.5/12, "feet")
            },
        ]
    )
};

characterMakers["Lykonous"] = () => {
    return makeCharacter(
        "Lykonous",
        "Lykonous",
        {
            kaiju: {
                height: math.unit(1.75, "meters"),
                weight: math.unit(55, "kg"),
                name: "Kaiju",
                image: {
                    source: "./media/characters/lykonous/kaiju.svg",
                    extra: 1055/946 * (1 / (1 - 0.135)),
                    bottom: 0.135
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(2.5, "meters")
            },
            {
                name: "Kaiju Dragon",
                height: math.unit(60, "meters")
            },
            {
                name: "Mega Kaiju",
                height: math.unit(120, "km")
            },
            {
                name: "Giga Kaiju",
                height: math.unit(200, "megameters")
            },
            {
                name: "Terra Kaiju",
                height: math.unit(400, "gigameters")
            },
            {
                name: "Kaiju Dragon God",
                height: math.unit(13000, "exaparsecs")
            },
        ]
    )
};

characterMakers["Blü"] = () => {
    return makeCharacter(
        "Blü",
        "BluTheFagon",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/blü/front.svg",
                    extra: 1883/1564 * (1 / (1 - 0.031)),
                    bottom: 0.031
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(13, "feet"),
                default: true
            },
            {
                name: "Big Boi",
                height: math.unit(150, "meters")
            },
            {
                name: "Mini Stomper",
                height: math.unit(300, "meters")
            },
            {
                name: "Macro",
                height: math.unit(1000, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(11000, "meters")
            },
            {
                name: "Gigamacro",
                height: math.unit(11000, "km")
            },
            {
                name: "Teramacro",
                height: math.unit(420000, "km")
            },
            {
                name: "Examacro",
                height: math.unit(120, "parsecs")
            },
            {
                name: "God Tho",
                height: math.unit(98000000000, "parsecs")
            },
        ]
    )
};

characterMakers["Scales"] = () => {
    return makeCharacter(
        "Scales",
        "Scales",
        {
            taurFront: {
                height: math.unit(6, "feet"),
                weight: math.unit(200, "lb"),
                name: "Taur (Front)",
                image: {
                    source: "./media/characters/scales/taur-front.svg",
                    extra: 1 / (1 - 0.05),
                    bottom: 0.05
                }
            },
            taurBack: {
                height: math.unit(6, "feet"),
                weight: math.unit(200, "lb"),
                name: "Taur (Back)",
                image: {
                    source: "./media/characters/scales/taur-back.svg",
                    extra: 1 / (1 - 0.08),
                    bottom: 0.08
                }
            },
            anthro: {
                height: math.unit(6*7/12, "feet"),
                weight: math.unit(100, "lb"),
                name: "Anthro",
                image: {
                    source: "./media/characters/scales/anthro.svg",
                    extra: 1 / (1 - 0.06),
                    bottom: 0.06
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Koragos"] = () => {
    return makeCharacter(
        "Koragos",
        "Koragos",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/koragos/front.svg",
                    extra: 841/794 * (1 / (1 - 0.035)),
                    bottom: 0.035
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/koragos/back.svg",
                    extra: 841/810 * (1 / (1 - 0.022)),
                    bottom: 0.022
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 11/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(490, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(10, "miles")
            },
            {
                name: "Gigamacro",
                height: math.unit(50, "miles")
            },
        ]
    )
};

characterMakers["Xylrem"] = () => {
    return makeCharacter(
        "Xylrem",
        "",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(250, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/xylrem/front.svg",
                    extra: 3323/3050 * (1 / (1 - 0.065)),
                    bottom: 0.065
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(4, "feet")
            },
            {
                name: "Normal",
                height: math.unit(16, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(2720, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(25000, "miles")
            },
        ]
    )
};

characterMakers["Ikideru"] = () => {
    return makeCharacter(
        "Ikideru",
        "Ikideru",
        {
            front: {
                height: math.unit(8, "feet"),
                weight: math.unit(250, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/ikideru/front.svg",
                    extra: 930/870 * (1 / (1 - 0.087)),
                    bottom: 0.087
                }
            },
            back: {
                height: math.unit(8, "feet"),
                weight: math.unit(250, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/ikideru/back.svg",
                    extra: 919/852 * (1 / (1 - 0.055)),
                    bottom: 0.055
                }
            },
        },
        [
            {
                name: "Rare",
                height: math.unit(8, "feet"),
                default: true
            },
            {
                name: "Playful Loom",
                height: math.unit(80, "feet")
            },
            {
                name: "City Leaner",
                height: math.unit(230, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(2500, "feet")
            },
            {
                name: "Gigamacro",
                height: math.unit(26400, "feet")
            },
            {
                name: "Tectonic Shifter",
                height: math.unit(1.7, "megameters")
            },
            {
                name: "Planet Carer",
                height: math.unit(21, "megameters")
            },
            {
                name: "God",
                height: math.unit(11157.22, "parsecs")
            },
        ]
    )
};

characterMakers["Neo"] = () => {
    return makeCharacter(
        "Neo",
        "neonsnake",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(120, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/neo/front.svg"
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(2, "inches"),
                default: true
            },
            {
                name: "Human Size",
                height: math.unit(5 + 8/12, "feet")
            },
        ]
    )
};

characterMakers["Chauncey (Chantz)"] = () => {
    return makeCharacter(
        "Chauncey (Chantz)",
        "RyGaLo",
        {
            front: {
                height: math.unit(13 + 10/12, "feet"),
                weight: math.unit(5320, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/chauncey-chantz/front.svg",
                    extra: 1587/1435 * (1 / (1 - 0.02)),
                    bottom: 0.02
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(13 + 10/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(45, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(250, "miles")
            },
            {
                name: "Planetary",
                height: math.unit(10000, "miles")
            },
            {
                name: "Galactic",
                height: math.unit(40000, "parsecs")
            },
            {
                name: "Universal",
                height: math.unit(1, "yottameter")
            },
        ]
    )
};

characterMakers["Epifox"] = () => {
    return makeCharacter(
        "Epifox",
        "Epifox",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/epifox/front.svg",
                    extra: (1 / (1 - 0.075)),
                    bottom: 0.075
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(6, "inches")
            },
            {
                name: "Normal",
                height: math.unit(12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(3810, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(500, "miles")
            },
        ]
    )
};

characterMakers["Colin T."] = () => {
    return makeCharacter(
        "Colin T.",
        "DragonLugia58",
        {
            front: {
                height: math.unit(1.8796, "m"),
                weight: math.unit(230, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/colin-t/front.svg",
                    extra: 1272/1193 * (1 / (1 - 0.07)),
                    bottom: 0.07
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(0.571, "meters")
            },
            {
                name: "Normal",
                height: math.unit(1.8796, "meters")
            },
            {
                name: "Tall",
                height: math.unit(4, "meters")
            },
            {
                name: "Macro",
                height: math.unit(67.241, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(371.856, "meters")
            },
            {
                name: "Planetary",
                height: math.unit(12631.5689, "km")
            },
        ]
    )
};

characterMakers["Matvei"] = () => {
    return makeCharacter(
        "Matvei",
        "Matt_Da_Master",
        {
            front: {
                height: math.unit(1.85, "meters"),
                weight: math.unit(80, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/matvei/front.svg",
                    extra: 614/594 * (1 / (1 - 0.01)),
                    bottom: 0.01
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(1.85, "meters")
            },
        ]
    )
};

characterMakers["Quincy"] = () => {
    return makeCharacter(
        "Quincy",
        "Paradisaea",
        {
            front: {
                height: math.unit(5 + 9/12, "feet"),
                weight: math.unit(70, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/quincy/front.svg",
                    extra: 3041/2751 
                }
            },
            back: {
                height: math.unit(5 + 9/12, "feet"),
                weight: math.unit(70, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/quincy/back.svg",
                    extra: 3041/2751 
                }
            },
            flying: {
                height: math.unit(5 + 4/12, "feet"),
                weight: math.unit(70, "lb"),
                name: "Flying",
                image: {
                    source: "./media/characters/quincy/flying.svg",
                    extra: 1044/930
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(3, "cm")
            },
            {
                name: "Normal",
                height: math.unit(5 + 9/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(200, "meters"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(1000, "meters")
            },
        ]
    )
};

characterMakers["Vanrel"] = () => {
    return makeCharacter(
        "Vanrel",
        "KuiPaws",
        {
            front: {
                height: math.unit(4 + 7/12, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/vanrel/front.svg",
                    extra: (1 / (1 - 0.02)),
                    bottom: 0.02
                }
            },
            side: {
                height: math.unit(4 + 7/12, "feet"),
                weight: math.unit(150, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/vanrel/side.svg",
                    extra: (1 / (1 - 0.025)),
                    bottom: 0.025
                }
            },
            beans: {
                height: math.unit(0.89, "feet"),
                name: "Beans",
                image: {
                    source: "./media/characters/vanrel/beans.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(4 + 7/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Kuiper Vanrel"] = () => {
    return makeCharacter(
        "Kuiper Vanrel",
        "KuiPaws",
        {
            front: {
                height: math.unit(7 + 5/12, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/kuiper-vanrel/front.svg",
                    extra: 1118/1068 * (1 / (1 - 0.09)),
                    bottom: 0.09
                }
            },
            foot: {
                height: math.unit(0.55, "meters"),
                name: "Foot",
                image: {
                    source: "./media/characters/kuiper-vanrel/foot.svg",
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7 + 5/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Keset Vanrel"] = () => {
    return makeCharacter(
        "Keset Vanrel",
        "KuiPaws",
        {
            front: {
                height: math.unit(8 + 5/12, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/keset-vanrel/front.svg",
                    extra: 1150/1084 * (1 / (1 - 0.05)),
                    bottom: 0.05
                }
            },
            hand: {
                height: math.unit(0.6, "meters"),
                name: "Hand",
                image: {
                    source: "./media/characters/keset-vanrel/hand.svg"
                }
            },
            foot: {
                height: math.unit(0.94978, "meters"),
                name: "Foot",
                image: {
                    source: "./media/characters/keset-vanrel/foot.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(8 + 5/12, "feet")
            },
        ]
    )
};

characterMakers["Neos"] = () => {
    return makeCharacter(
        "Neos",
        "CakeyCake",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/neos/front.svg",
                    extra: 1696/992 * (1 / ( 1 - 0.14)),
                    bottom: 0.14
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(54, "cm"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(100, "m")
            },
            {
                name: "Megamacro",
                height: math.unit(10, "km")
            },
            {
                name: "Megamacro+",
                height: math.unit(100, "km")
            },
            {
                name: "Gigamacro",
                height: math.unit(100, "Mm")
            },
            {
                name: "Teramacro",
                height: math.unit(100, "Gm")
            },
            {
                name: "Examacro",
                height: math.unit(100, "Em")
            },
            {
                name: "Godly",
                height: math.unit(10000, "Ym")
            },
            {
                name: "Beyond Godly",
                height: math.unit(10000000, "Ym")
            },
        ]
    )
};

characterMakers["Sammy Mouse"] = () => {
    return makeCharacter(
        "Sammy Mouse",
        "Piedunk",
        {
            feminine: {
                height: math.unit(5, "feet"),
                weight: math.unit(100, "lb"),
                name: "Feminine",
                image: {
                    source: "./media/characters/sammy-mouse/feminine.svg",
                    extra: 2526/2425 * (1 / (1 - 0.123)),
                    bottom: 0.123
                }
            },
            masculine: {
                height: math.unit(5, "feet"),
                weight: math.unit(100, "lb"),
                name: "Masculine",
                image: {
                    source: "./media/characters/sammy-mouse/masculine.svg",
                    extra: 2526/2425 * (1 / (1 - 0.123)),
                    bottom: 0.123
                }
            },
        },
        [
             {
                 name: "Micro",
                 height: math.unit(5, "inches")
             },
             {
                 name: "Normal",
                 height: math.unit(5, "feet"),
                 default: true
             },
             {
                 name: "Macro",
                 height: math.unit(60, "feet")
             },
        ]
    )
};

characterMakers["Kole"] = () => {
    return makeCharacter(
        "Kole",
        "Cats_55",
        {
            front: {
                height: math.unit(4, "feet"),
                weight: math.unit(50, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/kole/front.svg",
                    extra: 1423/1303 * (1 / (1 - 0.025)),
                    bottom: 0.025
                }
            },
            back: {
                height: math.unit(4, "feet"),
                weight: math.unit(50, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/kole/back.svg",
                    extra: 1426/1280 * (1 / (1 - 0.02)),
                    bottom: 0.02
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(4, "feet")
            },
        ]
    )
};

characterMakers["Rufran"] = () => {
    return makeCharacter(
        "Rufran",
        "Rufran",
        {
            front: {
                height: math.unit(2 + 6/12, "feet"),
                weight: math.unit(20, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/rufran/front.svg",
                    extra: 2041/1839 * (1 / (1 - 0.055)),
                    bottom: 0.055
                }
            },
            back: {
                height: math.unit(2 + 6/12, "feet"),
                weight: math.unit(20, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/rufran/back.svg",
                    extra: 2054/1839 * (1 / (1 - 0.01)),
                    bottom: 0.01
                }
            },
            hand: {
                height: math.unit(0.2166, "meters"),
                name: "Hand",
                image: {
                    source: "./media/characters/rufran/hand.svg"
                }
            },
            foot: {
                height: math.unit(0.185, "meters"),
                name: "Foot",
                image: {
                    source: "./media/characters/rufran/foot.svg"
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(1, "inch")
            },
            {
                name: "Normal",
                height: math.unit(2 + 6/12, "feet"),
                default: true
            },
            {
                name: "Big",
                height: math.unit(60, "feet")
            },
            {
                name: "Macro",
                height: math.unit(325, "feet")
            },
        ]
    )
};

characterMakers["Chip"] = () => {
    return makeCharacter(
        "Chip",
        "Chiptuni",
        {
            front: {
                height: math.unit(0.3, "meters"),
                weight: math.unit(3.5, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/chip/front.svg",
                    extra: 748/674
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(1, "inch"),
                default: true
            },
        ]
    )
};

characterMakers["Torvid"] = () => {
    return makeCharacter(
        "Torvid",
        "Torvid",
        {
            side: {
                height: math.unit(2.3, "meters"),
                weight: math.unit(3500, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/torvid/side.svg",
                    extra: 1972/722 * (1 / (1 - 0.035)),
                    bottom: 0.035
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(2.3, "meters"),
                default: true
            },
        ]
    )
};

characterMakers["Susan"] = () => {
    return makeCharacter(
        "Susan",
        "Jasmith",
        {
            front: {
                height: math.unit(2, "meters"),
                weight: math.unit(150.5, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/susan/front.svg",
                    extra: 693/635 * (1 / (1 - 0.05)),
                    bottom: 0.05
                }
            },
        },
        [
            {
                name: "Megamacro",
                height: math.unit(505, "miles"),
                default: true
            },
        ]
    )
};

characterMakers["Raindrops"] = () => {
    return makeCharacter(
        "Raindrops",
        "RaindropsJFL",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/raindrops/front.svg",
                    extra: 2655/2461 * (1 / (1 - 0.02)),
                    bottom: 0.02
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/raindrops/back.svg",
                    extra: 2574/2400 * (1 / (1 - 0.03)),
                    bottom: 0.03
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(6, "inches")
            },
            {
                name: "Normal",
                height: math.unit(6 + 2/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(131, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(15, "miles")
            },
            {
                name: "Gigamacro",
                height: math.unit(4000, "miles")
            },
            {
                name: "Teramacro",
                height: math.unit(315000, "miles")
            },
        ]
    )
};

characterMakers["Tezwa"] = () => {
    return makeCharacter(
        "Tezwa",
        "TitanTezwa",
        {
            front: {
                height: math.unit(2.794, "meters"),
                weight: math.unit(325, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/tezwa/front.svg",
                    extra: 2083/1906 * (1 / (1 - 0.031)),
                    bottom: 0.031
                }
            },
            foot: {
                height: math.unit(0.687, "meters"),
                name: "Foot",
                image: {
                    source: "./media/characters/tezwa/foot.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(9 + 2/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Typhus"] = () => {
    return makeCharacter(
        "Typhus",
        "Jasmith",
        {
            front: {
                height: math.unit(58, "feet"),
                weight: math.unit(89000, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/typhus/front.svg",
                    extra: 816/800 * (1 / (1 - 0.065)),
                    bottom: 0.065
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(58, "feet")
            },
        ]
    )
};

characterMakers["Lyra Von Wulf"] = () => {
    return makeCharacter(
        "Lyra Von Wulf",
        "LyraVonWulf",
        {
            front: {
                height: math.unit(12, "feet"),
                weight: math.unit(6, "tonnes"),
                name: "Front",
                image: {
                    source: "./media/characters/lyra-von-wulf/front.svg",
                    extra: (1 / (1 - 0.10)),
                    bottom: 0.10
                }
            },
            frontMecha: {
                height: math.unit(12, "feet"),
                weight: math.unit(12, "tonnes"),
                name: "Front (Mecha)",
                image: {
                    source: "./media/characters/lyra-von-wulf/front-mecha.svg",
                    extra: (1 / (1 - 0.042)),
                    bottom: 0.042
                }
            },
            maw: {
                height: math.unit(2.2, "feet"),
                name: "Maw",
                image: {
                    source: "./media/characters/lyra-von-wulf/maw.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(12, "feet"),
                default: true
            },
            {
                name: "Classic",
                height: math.unit(50, "feet")
            },
            {
                name: "Macro",
                height: math.unit(500, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(1, "mile")
            },
            {
                name: "Gigamacro",
                height: math.unit(400, "miles")
            },
            {
                name: "Teramacro",
                height: math.unit(22000, "miles")
            },
            {
                name: "Solarmacro",
                height: math.unit(8600000, "miles")
            },
            {
                name: "Galactic",
                height: math.unit(1057000, "lightyears")
            },
        ]
    )
};

function makeCharacters() {
    const results = [];
    results.push({
        name: "Noir",
        constructor: makeNoir
    });
    results.push({
        name: "Okuri",
        constructor: makeOkuri
    });
    results.push({
        name: "Manny",
        constructor: makeManny
    });
    results.push({
        name: "Adake",
        constructor: makeAdake
    });
    results.push({
        name: "Elijah",
        constructor: makeElijah
    });
    results.push({
        name: "Rai",
        constructor: makeRai
    });
    results.push({
        name: "Jazzy",
        constructor: makeJazzy
    });
    results.push({
        name: "Flamm",
        constructor: makeFlamm
    });
    results.push({
        name: "Fory",
        constructor: makeFory
    });
    results.push({
        name: "Kurrikage",
        constructor: makeKurrikage
    });
    results.push({
        name: "Aigey",
        constructor: makeAigey
    });
    results.push({
        name: "Natasha",
        constructor: makeNatasha
    });
    results.push({
        name: "Malik",
        constructor: makeMalik
    });
    results.push({
        name: "Sefer",
        constructor: makeSefer
    });

    Object.entries(characterMakers).forEach(([key, value]) => {
        results.push({
            name: key,
            constructor: value
        });
    });
    return results;
}