const characterMakers = [];

math.createUnit("parsecs", {
    definition: "3.086e16 meters",
    prefixes: "long"
})
math.createUnit("lightyears", {
    definition: "9.461e15 meters",
    prefixes: "long"
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
            info: value.info
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
                    source: "./media/characters/fen/back.svg"
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
                name: "Macro",
                height: math.unit(100, "meter"),
                default: true,
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

function makeZephiro() {
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
                source: "./media/characters/zephiro/front.svg"
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
                source: "./media/characters/zephiro/side.svg"
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
                source: "./media/characters/zephiro/back.svg"
            },
            name: "Back"
        }
    };

    const entity = makeEntity({ name: "Zephiro", author: "Zephiro" }, views, []);
    entity.views.front.height = math.unit(118, "feet");

    entity.sizes.push({
        name: "Micro",
        height: math.unit(3, "inches")
    });

    entity.sizes.push({
        name: "Normal",
        height: math.unit(5 + 3 / 12, "feet")
    });

    entity.sizes.push({
        name: "Macro",
        height: math.unit(118, "feet")
    });

    return entity;
}

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

function makeShingo() {
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
                source: "./media/characters/shingo/front.svg"
            },
            name: "Front"
        }
    };

    const entity = makeEntity({ name: "Shingo", author: "Threes" }, views, []);

    entity.sizes.push({
        name: "Micro",
        height: math.unit(4, "inches")
    });

    entity.sizes.push({
        name: "Normal",
        height: math.unit(6, "feet")
    });

    entity.sizes.push({
        name: "Macro",
        height: math.unit(108, "feet")
    });
    return entity;
}

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
                    source: "./media/characters/ashtrek/front.svg"
                }
            },
            frontArmor: {
                height: math.unit(2, "meters"),
                weight: math.unit(76, "kg"),
                name: "Front (Armor)",
                image: {
                    source: "./media/characters/ashtrek/front-armor.svg"
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
                }
            },
            upright: {
                height: math.unit(12, "feet"),
                weight: math.unit(3000, "lbs"),
                name: "Upright",
                image: {
                    source: "./media/characters/scott/upright.svg",
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
                    extra: 1212/1120
                }
            },
            crouched: {
                height: math.unit(6*0.57, "feet"),
                weight: math.unit(180, "lbs"),
                name: "Crouched",
                image: {
                    source: "./media/characters/blake/crouched.svg",
                    extra: 840/587
                }
            },
            bent: {
                height: math.unit(6*0.75, "feet"),
                weight: math.unit(180, "lbs"),
                name: "Bent",
                image: {
                    source: "./media/characters/blake/bent.svg",
                    extra: 592/544
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
                    extra: 701/676
                }
            },
            backClothed: {
                height: math.unit(6, "feet"),
                weight: math.unit(210, "lbs"),
                name: "Back (Clothed)",
                image: {
                    source: "./media/characters/cimmaron/back-clothed.svg",
                    extra: 701/676
                }
            },
            frontNude: {
                height: math.unit(6, "feet"),
                weight: math.unit(210, "lbs"),
                name: "Front (Nude)",
                image: {
                    source: "./media/characters/cimmaron/front-nude.svg",
                    extra: 701/676
                }
            },
            backNude: {
                height: math.unit(6, "feet"),
                weight: math.unit(210, "lbs"),
                name: "Back (Nude)",
                image: {
                    source: "./media/characters/cimmaron/back-nude.svg",
                    extra: 701/676
                }
            }
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
                name: "Normal",
                height: math.unit(10, "inches"),
                default: true
            }
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
                    extra: 2038/1737
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
                height: math.unit(3.5, "inches")
            },
            {
                name: "Normal",
                height: math.unit(6 + 1/6, "feet"),
                default: true
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


function makeCharacters() {
    const results = [];
    results.push({
        name: "March",
        constructor: makeMarch
    });
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
        name: "Zephiro",
        constructor: makeZephiro
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
        name: "Shingo",
        constructor: makeShingo
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
