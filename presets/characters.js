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
function makeCharacter(name, author, viewInfo, defaultSizes, extraInfo) {
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
            },
            kneeling: {
                height: math.unit(5.4, "feet"),
                weight: math.unit(124.738, "kg"),
                name: "Kneeling",
                image: {
                    source: "./media/characters/fen/kneeling.svg",
                    extra: 563/507
                }
            },
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
                    extra: 1
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
                height: math.unit(96, "feet"),
                default: true
            },
            {
                name: "Megamerger",
                height: math.unit(650, "feet")
            },
        ]
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
                    extra: 1,
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

characterMakers["Noir"] = () => {
    return makeCharacter(
        "Noir",
        "March-Dragon",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(60, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/noir/front.svg",
                    extra: 1,
                    bottom: 0.032
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6.6, "feet")
            },
            {
                name: "Macro",
                height: math.unit(500, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(2.5, "km"),
                default: true
            },
            {
                name: "Gigamacro",
                height: math.unit(22500, "km")
            },
            {
                name: "Teramacro",
                height: math.unit(2500000000, "km")
            },
            {
                name: "Examacro",
                height: math.unit(200, "parsecs")
            },
        ]
    )
};

characterMakers["Okuri"] = () => {
    return makeCharacter(
        "Okuri",
        "OrinoMechadragon",
        {
            front: {
                height: math.unit(7, "feet"),
                weight: math.unit(100, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/okuri/front.svg",
                    extra: 1,
                    bottom: 0.037
                }
            },
            back: {
                height: math.unit(7, "feet"),
                weight: math.unit(100, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/okuri/back.svg",
                    extra: 1,
                    bottom: 0.007
                }
            },
        },
        [
            {
                name: "Megamacro",
                height: math.unit(100, "miles"),
                default: true
            },
        ]
    )
};

characterMakers["Manny"] = () => {
    return makeCharacter(
        "Manny",
        "Dialuca01",
        {
            front: {
                height: math.unit(7, "feet"),
                weight: math.unit(100, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/manny/front.svg",
                    extra: 1,
                    bottom: 0.06
                }
            },
            back: {
                height: math.unit(7, "feet"),
                weight: math.unit(100, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/manny/back.svg",
                    extra: 1,
                    bottom: 0.014
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7, "feet"),
            },
            {
                name: "Macro",
                height: math.unit(78, "feet"),
                default: true
            },
            {
                name: "Macro+",
                height: math.unit(300, "meters")
            },
            {
                name: "Macro++",
                height: math.unit(2400, "meters")
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

characterMakers["Adake"] = () => {
    return makeCharacter(
        "Adake",
        "Dialuca01",
        {
            front: {
                height: math.unit(7, "feet"),
                weight: math.unit(100, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/adake/front-1.svg"
                }
            },
            frontAlt: {
                height: math.unit(7, "feet"),
                weight: math.unit(100, "kg"),
                name: "Front (Alt)",
                image: {
                    source: "./media/characters/adake/front-2.svg",
                    extra: 1,
                    bottom: 0.01
                }
            },
            back: {
                height: math.unit(7, "feet"),
                weight: math.unit(100, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/adake/back.svg",
                }
            },
            kneel: {
                height: math.unit(5.385, "feet"),
                weight: math.unit(100, "kg"),
                name: "Kneeling",
                image: {
                    source: "./media/characters/adake/kneel.svg",
                    bottom: 0.052
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7, "feet"),
            },
            {
                name: "Macro",
                height: math.unit(78, "feet"),
                default: true
            },
            {
                name: "Macro+",
                height: math.unit(300, "meters")
            },
            {
                name: "Macro++",
                height: math.unit(2400, "meters")
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

characterMakers["Elijah"] = () => {
    return makeCharacter(
        "Elijah",
        "Elijah",
        {
            side: {
                height: math.unit(7, "feet"),
                weight: math.unit(50, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/elijah/side.svg",
                    extra: 1,
                    bottom: 0.065
                }
            },
            foot: {
                height: math.unit(2.05, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/elijah/foot.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(1.65, "meters")
            },
            {
                name: "Macro",
                height: math.unit(55, "meters"),
                default: true
            },
            {
                name: "Macro+",
                height: math.unit(105, "meters")
            },
        ]
    )
};

characterMakers["Rai"] = () => {
    return makeCharacter(
        "Rai",
        "shadowblade945",
        {
            front: {
                height: math.unit(11, "feet"),
                weight: math.unit(80, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/rai/front.svg",
                    extra: 1,
                    bottom: 0.03
                }
            },
            side: {
                height: math.unit(11, "feet"),
                weight: math.unit(80, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/rai/side.svg"
                }
            },
            back: {
                height: math.unit(11, "feet"),
                weight: math.unit(80, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/rai/back.svg",
                    extra: 1,
                    bottom: 0.01
                }
            },
            feral: {
                height: math.unit(11, "feet"),
                weight: math.unit(800, "lb"),
                name: "Feral",
                image: {
                    source: "./media/characters/rai/feral.svg",
                    extra: 1050/659 ,
                    bottom: 0.07
                }
            },
            maw: {
                height: math.unit(6/3.81416, "feet"),
                name: "Maw",
                image: {
                    source: "./media/characters/rai/maw.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(11, "feet")
            },
            {
                name: "Macro",
                height: math.unit(302, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Jazzy"] = () => {
    return makeCharacter(
        "Jazzy",
        "JazzyWolf",
        {
            front: {
                height: math.unit(7, "feet"),
                weight: math.unit(80, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/jazzy/front.svg",
                    extra: 1,
                    bottom: 0.01
                }
            },
            back: {
                height: math.unit(7, "feet"),
                weight: math.unit(80, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/jazzy/back.svg",
                    extra: 1,
                    bottom: 0.01
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(216, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Flamm"] = () => {
    return makeCharacter(
        "Flamm",
        "Flamm",
        {
            front: {
                height: math.unit(7, "feet"),
                weight: math.unit(80, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/flamm/front.svg",
                    extra: 1,
                    bottom: 0.02
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(9.5, "feet")
            },
            {
                name: "Macro",
                height: math.unit(200, "feet"),
                default: true
            },
        ]
    )
};

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
                    extra: 2309/2162 ,
                    bottom: 0.069
                }
            },
            side: {
                height: math.unit(7, "feet"),
                weight: math.unit(80, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/zephiro/side.svg",
                    extra: 2403/2279 ,
                    bottom: 0.015
                }
            },
            back: {
                height: math.unit(7, "feet"),
                weight: math.unit(80, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/zephiro/back.svg",
                    extra: 2373/2244 ,
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

characterMakers["Fory"] = () => {
    return makeCharacter(
        "Fory",
        "Manny",
        {
            front: {
                height: math.unit(7, "feet"),
                weight: math.unit(90, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/fory/front.svg",
                    extra: 1,
                    bottom: 0.03
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5, "feet")
            },
            {
                name: "Macro",
                height: math.unit(50, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Kurrikage"] = () => {
    return makeCharacter(
        "Kurrikage",
        "Kurrikage",
        {
            front: {
                height: math.unit(7, "feet"),
                weight: math.unit(90, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/kurrikage/front.svg",
                    extra: 1,
                    bottom: 0.035
                }
            },
            back: {
                height: math.unit(7, "feet"),
                weight: math.unit(90, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/kurrikage/back.svg"
                }
            },
            paw: {
                height: math.unit(1.5, "feet"),
                name: "Paw",
                image: {
                    source: "./media/characters/kurrikage/paw.svg"
                }
            },
            staff: {
                height: math.unit(6.7, "feet"),
                name: "Staff",
                image: {
                    source: "./media/characters/kurrikage/staff.svg"
                }
            },
            peek: {
                height: math.unit(1.05, "feet"),
                name: "Peeking",
                image: {
                    source: "./media/characters/kurrikage/peek.svg",
                    bottom: 0.08
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
                name: "Big",
                height: math.unit(20, "feet")
            },
            {
                name: "Macro",
                height: math.unit(500, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(20, "miles")
            },
        ]
    )
};

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
                    extra: 3511/3338 ,
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

characterMakers["Natasha"] = () => {
    return makeCharacter(
        "Natasha",
        "MammaAWD",
        {
            front: {
                height: math.unit(5 + 5/12, "feet"),
                weight: math.unit(75, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/natasha/front.svg",
                    extra: 875/846,
                    bottom: 0.01
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 5/12, "feet")
            },
            {
                name: "Large",
                height: math.unit(12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(100, "feet"),
                default: true
            },
            {
                name: "Macro+",
                height: math.unit(260, "feet")
            },
            {
                name: "Macro++",
                height: math.unit(1, "mile")
            },
        ]
    )
};

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
                height: math.unit(101, "miles"),
                default: true
            }
        ]
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
                height: math.unit(2, "miles"),
                default: true
            },
            {
                name: "Gigamacro",
                height: math.unit(5000, "miles")
            },
            {
                name: "Teramacro",
                height: math.unit(100, "parsecs")
            }
        ]
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
                height: math.unit(9, "feet"),
                default: true
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
        ]
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
                    source: "./media/characters/sosha/side.svg",
                    bottom: 0.042
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(12, "feet"),
                default: true
            }
        ]
    )
};

characterMakers["RuNNoLa"] = () => {
    return makeCharacter(
        "RuNNoLa",
        "RuNNoLa",
        {
            side: {
                height: math.unit(5 + 5/12, "feet"),
                weight: math.unit(170, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/runnola/side.svg",
                    extra: 741/448,
                    bottom: 0.05
                }
            },
        },
        [
            {
                name: "Small",
                height: math.unit(3, "feet")
            },
            {
                name: "Normal",
                height: math.unit(5 + 5/12, "feet"),
                default: true
            },
            {
                name: "Big",
                height: math.unit(10, "feet")
            },
        ]
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
                height: math.unit(12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(1500, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(2, "miles")
            }
        ]
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
                height: math.unit(500, "feet"),
                default: true
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
        ]
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
                height: math.unit(750, "feet"),
                default: true
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
        ]
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
                height: math.unit(150, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(5, "miles")
            },
            {
                name: "Full-Size",
                height: math.unit(600, "kiloparsecs")
            }
        ]
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
                height: math.unit(50, "feet"),
                default: true
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
        ]
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
                height: math.unit(120, "feet"),
                default: true
            },
            {
                name: "Macro+",
                height: math.unit(300, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(20000, "feet")
            }
        ]
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
                height: math.unit(100, "feet"),
                default: true
            },
            {
                name: "Macro+",
                height: math.unit(2000, "feet")
            },
            {
                name: "True Form",
                height: math.unit(8924, "miles")
            }
        ]
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
                height: math.unit(47.7, "miles"),
                default: true
            },
            {
                name: "Reasonably Sized",
                height: math.unit(25000, "parsecs")
            },
            {
                name: "Slightly Uncompressed",
                height: math.unit(7.77e31, "parsecs")
            },
            {
                name: "Omniversal",
                height: math.unit(1e300, "meters")
            },
        ]
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
                height: math.unit(55, "feet"),
                default: true
            }
        ]
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
                height: math.unit(7 + 5 / 6, "feet"),
                default: true
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
        ]
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
            // TODO check why I did this lol
            {
                name: "Standard",
                height: math.unit(9 / 8 * (7 + 5 / 12), "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(200, "feet")
            },
            {
                name: "Gigamacro",
                height: math.unit(13000, "km")
            }
        ]
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
                height: math.unit(10000, "km"),
                default: true
            },
            {
                name: "Examacro",
                height: math.unit(10e9, "lightyears")
            }
        ]
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
                height: math.unit(8, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(5, "km")
            }
        ]
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
                height: math.unit(70, "km"),
                default: true
            },
            {
                name: "Gigamacro",
                height: math.unit(681818, "miles")
            },
            {
                name: "Examacro",
                height: math.unit(3800000, "lightyears")
            },
        ]
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
                height: math.unit(300, "feet"),
                default: true
            },
            {
                name: "Macro+",
                height: math.unit(1500, "feet")
            },
        ]
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
                height: math.unit(1.3, "meter"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(20, "meter")
            }
        ]
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
                height: math.unit(2.8, "meter"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(38, "meter")
            }
        ]
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
                height: math.unit(470, "feet"),
                default: true
            },
            {
                name: "Deity Size I",
                height: math.unit(28651.2, "km")
            },
            {
                name: "Deity Size II",
                height: math.unit(171907.2, "km")
            }
        ]
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
                height: math.unit(7.2, "meter"),
                default: true
            }
        ]
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
                height: math.unit(500, "meters"),
                default: true
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
        ]
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
                height: math.unit(1500, "meters"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(150, "km")
            },
            {
                name: "Gigamacro",
                height: math.unit(27000, "km")
            }
        ]
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
                height: math.unit(1250, "meters"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(125, "km")
            },
            {
                name: "Gigamacro",
                height: math.unit(26000, "km")
            }
        ]
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
                height: math.unit(1500, "meters"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(200, "km")
            },
            {
                name: "Gigamacro",
                height: math.unit(100000, "km")
            }
        ]
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
                height: math.unit(900, "meters"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(135, "km")
            },
            {
                name: "Gigamacro",
                height: math.unit(20000, "km")
            }
        ]
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
                height: math.unit(28.35, "feet"),
                default: true
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
        ]
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
                    extra: 560/524 ,
                    bottom: 0.01
                }
            },
            frontArmor: {
                height: math.unit(2, "meters"),
                weight: math.unit(76, "kg"),
                name: "Front (Armor)",
                image: {
                    source: "./media/characters/ashtrek/front-armor.svg",
                    extra: 561/527 ,
                    bottom: 0.01
                }
            },
            side: {
                height: math.unit(2, "meters"),
                weight: math.unit(70, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/ashtrek/side.svg",
                    extra: 1717/1609 ,
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
                height: math.unit(500, "meters"),
                default: true
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
        ]
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
                height: math.unit(150, "feet"),
                default: true
            },
            {
                name: "Macro+",
                height: math.unit(300, "feet")
            },
        ]
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
                height: math.unit(150, "feet"),
                default: true
            }
        ]
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
                height: math.unit(7 + 9 / 12, "feet"),
                default: true
            },
            {
                name: "God King",
                height: math.unit(9750000, "meters")
            }
        ]
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
                height: math.unit(138, "meters"),
                default: true
            }
        ]
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
                height: math.unit(3, "inches"),
                default: true
            },
            {
                name: "Normal",
                height: math.unit(5 + 5 / 12, "feet")
            }
        ]
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
                height: math.unit(355, "feet"),
                default: true
            },
            {
                name: "Fave. Height",
                height: math.unit(2400, "feet")
            }
        ]
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
                height: math.unit(50, "miles"),
                default: true
            },
            {
                name: "Gigamacro",
                height: math.unit(5000, "miles")
            },
            {
                name: "Teramacro",
                height: math.unit(250000, "miles")
            },
        ]
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
                height: math.unit(2, "inches")
            },
            {
                name: "Normal",
                height: math.unit(6.3, "feet")
            },
            {
                name: "Macro",
                height: math.unit(850, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(7500, "feet"),
                default: true
            },
            {
                name: "Gigamacro",
                height: math.unit(570000, "miles")
            }
        ]
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
                height: math.unit(150, "meter"),
                default: true
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
        ]
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
                height: math.unit(279, "feet"),
                default: true
            }
        ]
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
                height: math.unit(200, "feet"),
                default: true
            },
        ]
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
                    extra: 1,
                    bottom: 0.069
                }
            },
            upright: {
                height: math.unit(12, "feet"),
                weight: math.unit(3000, "lbs"),
                name: "Upright",
                image: {
                    source: "./media/characters/scott/upright.svg",
                    extra: 1,
                    bottom: 0.05
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
        [
            {
                name: "Normal",
                height: math.unit(8, "meters"),
                default: true
            },
        ]
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
        [
            {
                name: "Normal",
                height: math.unit(5.5, "feet"),
                default: true
            },
        ]
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
                height: math.unit(16, "meters"),
                default: true
            },
        ]
    )
};

characterMakers["Miranda"] = () => {
    return makeCharacter(
        "Miranda",
        "MirandaArqayla",
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
                height: math.unit(10, "feet"),
                default: true
            }
        ]
    )
};

characterMakers["James"] = () => {
    return makeCharacter(
        "James",
        "MirandaArqayla",
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
                height: math.unit(8.5, "feet"),
                default: true
            }
        ]
    )
};

characterMakers["Heather"] = () => {
    return makeCharacter(
        "Heather",
        "MirandaArqayla",
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
                height: math.unit(9.5, "feet"),
                default: true
            }
        ]
    )
};

characterMakers["Lukas"] = () => {
    return makeCharacter(
        "Lukas",
        "MirandaArqayla",
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
                height: math.unit(6.5, "feet"),
                default: true
            }
        ]
    )
};

characterMakers["Louise"] = () => {
    return makeCharacter(
        "Louise",
        "MirandaArqayla",
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
                height: math.unit(5, "feet"),
                default: true
            }
        ]
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
                height: math.unit(5.3, "meters"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(20, "stories")
            },
            {
                name: "Macro+",
                height: math.unit(50, "stories")
            },
        ]
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
                    extra: 1
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
                height: math.unit(1500, "feet"),
                default: true
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
        ]
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
                    extra: 1,
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7, "feet"),
                default: true
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
        ]
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
                height: math.unit(11.25, "feet"),
                default: true
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
                height: math.unit(8, "feet"),
                default: true
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
                    extra: 1212/1120 ,
                    bottom: 0.05
                }
            },
            crouched: {
                height: math.unit(6*0.57, "feet"),
                weight: math.unit(180, "lbs"),
                name: "Crouched",
                image: {
                    source: "./media/characters/blake/crouched.svg",
                    extra: 840/587 ,
                    bottom: 0.04
                }
            },
            bent: {
                height: math.unit(6*0.75, "feet"),
                weight: math.unit(180, "lbs"),
                name: "Bent",
                image: {
                    source: "./media/characters/blake/bent.svg",
                    extra: 592/544 ,
                    bottom: 0.035
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(8 + 1/6, "feet"),
                default: true
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
                height: math.unit(10 + 11/12, "feet"),
                default: true
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
                height: math.unit(65, "feet"),
                default: true
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
                height: math.unit(5 + 3/4, "feet"),
                default: true
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
                height: math.unit(800, "feet"),
                default: true
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
                height: math.unit(2, "mm"),
                default: true
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
                height: math.unit(8, "feet"),
                default: true
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
                    extra: 701/676 ,
                    bottom: 0.046
                }
            },
            backClothed: {
                height: math.unit(6, "feet"),
                weight: math.unit(210, "lbs"),
                name: "Back (Clothed)",
                image: {
                    source: "./media/characters/cimmaron/back-clothed.svg",
                    extra: 701/676 ,
                    bottom: 0.046
                }
            },
            frontNude: {
                height: math.unit(6, "feet"),
                weight: math.unit(210, "lbs"),
                name: "Front (Nude)",
                image: {
                    source: "./media/characters/cimmaron/front-nude.svg",
                    extra: 701/676 ,
                    bottom: 0.046
                }
            },
            backNude: {
                height: math.unit(6, "feet"),
                weight: math.unit(210, "lbs"),
                name: "Back (Nude)",
                image: {
                    source: "./media/characters/cimmaron/back-nude.svg",
                    extra: 701/676 ,
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
                    extra: 962/901,
                    bottom: 0.04
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
                height: math.unit(6 + 1/6, "feet"),
                default: true
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
                    extra: 2108/837 ,
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
                height: math.unit(500000, "lightyears"),
                default: true
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
                    extra: 2038/1737 ,
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
                height: math.unit(7, "feet"),
                default: true
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
                    extra: 1
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
                    extra: 1
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
                    extra: 1845/1550 ,
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
                    extra: 1
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
                    extra: 1
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
                    extra: 1
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
                    extra: 790/376 ,
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
                    extra: 1750/1570 ,
                    bottom: 0.025
                }
            },
            frontAlt: {
                height: math.unit(6, "feet"),
                weight: math.unit(50, "lbs"),
                name: "Front (Alt)",
                image: {
                    source: "./media/characters/sentri/front-alt.svg",
                    extra: 1750/1570 ,
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
                    extra: 854/752 ,
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
                    extra: 3927/3540 ,
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
                height: math.unit(3, "feet"),
                default: true
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
                height: math.unit(14, "feet"),
                default: true
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
                    extra: 1716/1658 ,
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
                    extra: 3666/3032 ,
                    bottom: 0.04
                }
            },
            foot: {
                height: math.unit(1.29, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/coffee/foot.svg"
                }
            },
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
                    extra: 1568/1385 ,
                    bottom: 0.047
                }
            },
            gigantamax: {
                height: math.unit(6*16, "feet"),
                weight: math.unit(200*16*16*16, "lbs"),
                name: "Gigantamax",
                image: {
                    source: "./media/characters/chari-gal/gigantamax.svg",
                    extra: 1124/888 ,
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
                    extra: 5000/4722 ,
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
                default: true
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
                    extra: 1565/1416 ,
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
                default: true
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
                    extra: 2329/1835 ,
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
                    extra: 2520/2402 ,
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
                height: math.unit(3.5, "inches"),
                default: true
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
                    extra: 1,
                    bottom: 0.025
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(12 + 8/12, "feet"),
                default: true
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
                    extra: 1,
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
                    extra: 1260/1128 ,
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
                    extra: (985 / 935) ,
                    bottom: 0.03
                }
            },
            frontUndressed: {
                height: math.unit(5 + 9/12, "feet"),
                weight: math.unit(220, "lb"),
                name: "Front (Undressed)",
                image: {
                    source: "./media/characters/samantha-kruse/front-undressed.svg",
                    extra: (973 / 923) ,
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
                    extra: 1113/963 ,
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
                    extra: 1347/1274 ,
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
                    extra: 2255/2115 ,
                    bottom: 0.03
                }
            },
            back: {
                height: math.unit(7, "feet"),
                weight: math.unit(300, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/pisces/back.svg",
                    extra: 2146/2055 ,
                    bottom: 0.04
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7, "feet"),
                default: true
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
                height: math.unit(1, "inch"),
                default: true
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
                    extra: 1770/1620 ,
                    bottom: 0.025
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(225, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/dominic/back.svg",
                    extra: 1745/1620 ,
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
                    extra: 1,
                    bottom: 0.08
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(1, "km"),
                default: true
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
                    extra: 1086/1010 ,
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
                    extra: 2280/2130 ,
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
                    extra: 1846/1699 ,
                    bottom: 0.04
                }
            },
        },
        [
            {
                name: "Megamacro",
                height: math.unit(10, "miles"),
                default: true
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
                    extra: 2401/2243 ,
                    bottom: 0.05
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(3, "meters"),
                default: true
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
                    extra: 3575/3346 ,
                    bottom: 0.03
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(14, "feet"),
                default: true
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
                    extra: 678/539 ,
                    bottom: 0.023
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(2.265, "feet"),
                default: true
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
                    extra: 1365/1277 ,
                    bottom: 0.04
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5, "feet"),
                default: true
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
                height: math.unit(3.4, "meters"),
                default: true
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
                height: math.unit(8, "feet"),
                default: true
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
                    extra: 1227/1180 ,
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
                    extra: 1728/1578 ,
                    bottom: 0.022
                }
            },
            stomping: {
                height: math.unit(2.025, "meters"),
                weight: math.unit(120, "lb"),
                name: "Stomping",
                image: {
                    source: "./media/characters/tene/stomping.svg",
                    extra: 938/873 ,
                    bottom: 0.01
                }
            },
            sitting: {
                height: math.unit(1, "meter"),
                weight: math.unit(120, "lb"),
                name: "Sitting",
                image: {
                    source: "./media/characters/tene/sitting.svg",
                    extra: 437/415 ,
                    bottom: 0.1
                }
            },
            feral: {
                height: math.unit(3.9, "feet"),
                weight: math.unit(250, "lb"),
                name: "Feral",
                image: {
                    source: "./media/characters/tene/feral.svg",
                    extra: 717/458 ,
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
                 height: math.unit(0.83, "meters"),
                 default: true
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
                    extra: 1279/1250 ,
                    bottom: 0.02
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(200, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/mega-shi/back.svg",
                    extra: 1279/1250 ,
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
                    extra: 1782/1582 ,
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
                    extra: 921/832 ,
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
                    extra: 2990/2603 ,
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
                    extra: 2990/2882 ,
                    bottom: 0.04
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/splinter/back.svg",
                    extra: 2990/2882 ,
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
                    extra: 1140/963 ,
                    bottom: 0.058
                }
            },
            back: {
                height: math.unit(4 + 10/12, "feet"),
                weight: math.unit(480, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/snow-gabumon/back.svg",
                    extra: 1115/962 ,
                    bottom: 0.041
                }
            },
            frontUndresed: {
                height: math.unit(4 + 10/12, "feet"),
                weight: math.unit(480, "lb"),
                name: "Front (Undressed)",
                image: {
                    source: "./media/characters/snow-gabumon/front-undressed.svg",
                    extra: 1061/960 ,
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
                    extra: 3226/3007 ,
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
                    extra: 1180/1120 ,
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
                    extra: 1390/1320 ,
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
                    extra: 1172/1084 ,
                    bottom: 0.065
                }
            },
            side: {
                height: math.unit(2.4, "meters"),
                weight: math.unit(70, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/nyanuxk/side.svg",
                    extra: 1190/1132 ,
                    bottom: 0.007
                }
            },
            back: {
                height: math.unit(2.4, "meters"),
                weight: math.unit(70, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/nyanuxk/back.svg",
                    extra: 1200/1141 ,
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
                    extra: 757/464 ,
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
                    extra: 918/854 ,
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
                    extra: 1565/1483 ,
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
                    extra: 5743/5339 ,
                    bottom: 0.07
                }
            },
            taur: {
                height: math.unit(16, "feet"),
                weight: math.unit(1500, "kg"),
                name: "Taur",
                image: {
                    source: "./media/characters/adam-silver-mane/taur.svg",
                    extra: 1713/1571 ,
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
                name: "Minimacro",
                height: math.unit(80, "feet")
            },
            {
                name: "Macro",
                height: math.unit(800, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(8000, "feet")
            },
            {
                name: "Gigamacro",
                height: math.unit(800, "miles")
            },
            {
                name: "Teramacro",
                height: math.unit(80000, "miles")
            },
            {
                name: "Celestial",
                height: math.unit(8e6, "miles")
            },
            {
                name: "Star Dragon",
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
                    extra: 3888/3068 ,
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
                    extra: 785/724 ,
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
                height: math.unit(15, "feet"),
                default: true
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
                    extra: 1498/1073 ,
                    bottom: 0.075
                }
            },
            foot: {
                height: math.unit(1.1, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/nomaxice/foot.svg"
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
                name: "Norm+",
                height: math.unit(8.8, "feet")
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
                    extra: 863/800 ,
                    bottom: 0.015
                }
            },
            back: {
                height: math.unit(12, "feet"),
                weight: math.unit(1.5, "tons"),
                name: "Back",
                image: {
                    source: "./media/characters/dydros/back.svg",
                    extra: 900/843 ,
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
                    extra: 3483/3291 ,
                    bottom: 0.04
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(250, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/alexi/back.svg",
                    extra: 3533/3356 ,
                    bottom: 0.021
                }
            },
            frontTransformed: {
                height: math.unit(12.5, "feet"),
                weight: math.unit(4000, "lb"),
                name: "Front (Transformed)",
                image: {
                    source: "./media/characters/alexi/front-transformed.svg",
                    extra: 5345/5100 ,
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
                    extra: 1153/1038 ,
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
                height: math.unit(8, "feet"),
                default: true
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
                    extra: 3386/3090 ,
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
                    extra: 527 / 479,
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
                    extra: 1986/1905 ,
                    bottom: 0.025
                }
            },
            feral: {
                height: math.unit(2, "feet"),
                weight: math.unit(90, "lb"),
                name: "Feral",
                image: {
                    source: "./media/characters/cordite/feral.svg",
                    extra: 1260/755 ,
                    bottom: 0.05
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 5/12, "feet"),
                default: true
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
                    extra: 6577/6254 ,
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
                    extra: 6085/5733 ,
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
                    extra: 2960/2629 ,
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
                    extra: 1704/1334 ,
                    bottom: 0.02
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(1.9, "meters"),
                default: true
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
                    extra: 1067/1022 ,
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
                    extra: 1479/1449 ,
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
            {
                name: "Archfey Forest Guardian",
                height: math.unit(1, "mile")
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
                    extra: 1057/1003 ,
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
                    extra: 736/617 ,
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
                    extra: 1055/946 ,
                    bottom: 0.135
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(2.5, "meters"),
                default: true
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
                    extra: 1883/1564 ,
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
                    extra: 1,
                    bottom: 0.05
                }
            },
            taurBack: {
                height: math.unit(6, "feet"),
                weight: math.unit(200, "lb"),
                name: "Taur (Back)",
                image: {
                    source: "./media/characters/scales/taur-back.svg",
                    extra: 1,
                    bottom: 0.08
                }
            },
            anthro: {
                height: math.unit(6*7/12, "feet"),
                weight: math.unit(100, "lb"),
                name: "Anthro",
                image: {
                    source: "./media/characters/scales/anthro.svg",
                    extra: 1,
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
                    extra: 841/794 ,
                    bottom: 0.035
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/koragos/back.svg",
                    extra: 841/810 ,
                    bottom: 0.022
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 11/12, "feet"),
                default: true
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
                    extra: 3323/3050 ,
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
                    extra: 930/870 ,
                    bottom: 0.087
                }
            },
            back: {
                height: math.unit(8, "feet"),
                weight: math.unit(250, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/ikideru/back.svg",
                    extra: 919/852 ,
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
                    extra: 1587/1435 ,
                    bottom: 0.02
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(13 + 10/12, "feet"),
                default: true
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
                    extra: 1,
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
                    extra: 1272/1193 ,
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
                height: math.unit(1.8796, "meters"),
                default: true
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
                    extra: 614/594 ,
                    bottom: 0.01
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(1.85, "meters"),
                default: true
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
                    extra: 1,
                    bottom: 0.02
                }
            },
            side: {
                height: math.unit(4 + 7/12, "feet"),
                weight: math.unit(150, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/vanrel/side.svg",
                    extra: 1,
                    bottom: 0.025
                }
            },
            tome: {
                height: math.unit(1.35, "feet"),
                weight: math.unit(10, "lb"),
                name: "Vanrel's Tome",
                rename: true,
                image: {
                    source: "./media/characters/vanrel/tome.svg"
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
                    extra: 1118/1068 ,
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
                    extra: 1150/1084 ,
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
                height: math.unit(8 + 5/12, "feet"),
                default: true
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
                    extra: 1696/992 ,
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
                    extra: 2526/2425 ,
                    bottom: 0.123
                }
            },
            masculine: {
                height: math.unit(5, "feet"),
                weight: math.unit(100, "lb"),
                name: "Masculine",
                image: {
                    source: "./media/characters/sammy-mouse/masculine.svg",
                    extra: 2526/2425 ,
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
                    extra: 1423/1303 ,
                    bottom: 0.025
                }
            },
            back: {
                height: math.unit(4, "feet"),
                weight: math.unit(50, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/kole/back.svg",
                    extra: 1426/1280 ,
                    bottom: 0.02
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(4, "feet"),
                default: true
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
                    extra: 2041/1839 ,
                    bottom: 0.055
                }
            },
            back: {
                height: math.unit(2 + 6/12, "feet"),
                weight: math.unit(20, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/rufran/back.svg",
                    extra: 2054/1839 ,
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
                    extra: 1972/722 ,
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
                    extra: 693/635 ,
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
                    extra: 2655/2461 ,
                    bottom: 0.02
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/raindrops/back.svg",
                    extra: 2574/2400 ,
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
                    extra: 2083/1906 ,
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
                    extra: 816/800 ,
                    bottom: 0.065
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(58, "feet"),
                default: true
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
                    extra: 1,
                    bottom: 0.10
                }
            },
            frontMecha: {
                height: math.unit(12, "feet"),
                weight: math.unit(12, "tonnes"),
                name: "Front (Mecha)",
                image: {
                    source: "./media/characters/lyra-von-wulf/front-mecha.svg",
                    extra: 1,
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

characterMakers["Dixon"] = () => {
    return makeCharacter(
        "Dixon",
        "Seabury",
        {
            front: {
                height: math.unit(6 + 10/12, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/dixon/front.svg",
                    extra: 3361/3209 ,
                    bottom: 0.01
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 10/12, "feet"),
                default: true
            },
            {
                name: "Big",
                height: math.unit(12, "meters")
            },
            {
                name: "Macro",
                height: math.unit(500, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(2, "km")
            },
        ]
    )
};

characterMakers["Kauko"] = () => {
    return makeCharacter(
        "Kauko",
        "Kauko",
        {
            front: {
                height: math.unit(185, "cm"),
                weight: math.unit(68, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/kauko/front.svg",
                    extra: 1455/1421 ,
                    bottom: 0.03
                }
            },
            back: {
                height: math.unit(185, "cm"),
                weight: math.unit(68, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/kauko/back.svg",
                    extra: 1455/1421 ,
                    bottom: 0.004
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(185, "cm"),
                default: true
            },
        ]
    )
};

characterMakers["Varg"] = () => {
    return makeCharacter(
        "Varg",
        "va0027",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/varg/front.svg",
                    extra: 1108/1018 ,
                    bottom: 0.0375
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5, "meters")
            },
            {
                name: "Gigamacro",
                height: math.unit(211, "km"),
                default: true
            },
        ]
    )
};

characterMakers["Dayza"] = () => {
    return makeCharacter(
        "Dayza",
        "Vonadi",
        {
            front: {
                height: math.unit(7 + 7/12, "feet"),
                weight: math.unit(267, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/dayza/front.svg",
                    extra: 1262/1200 ,
                    bottom: 0.035
                }
            },
            side: {
                height: math.unit(7 + 7/12, "feet"),
                weight: math.unit(267, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/dayza/side.svg",
                    extra: 1295/1245 ,
                    bottom: 0.05
                }
            },
            back: {
                height: math.unit(7 + 7/12, "feet"),
                weight: math.unit(267, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/dayza/back.svg",
                    extra: 1241/1170
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7 + 7/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(155, "feet")
            },
        ]
    )
};

characterMakers["Xanthos"] = () => {
    return makeCharacter(
        "Xanthos",
        "ArgentVZ",
        {
            front: {
                height: math.unit(6 + 5/12, "feet"),
                weight: math.unit(160, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/xanthos/front.svg",
                    extra: 1,
                    bottom: 0.04
                }
            },
            back: {
                height: math.unit(6 + 5/12, "feet"),
                weight: math.unit(160, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/xanthos/back.svg",
                    extra: 1,
                    bottom: 0.03
                }
            },
            hand: {
                height: math.unit(0.928, "feet"),
                name: "Hand",
                image: {
                    source: "./media/characters/xanthos/hand.svg"
                }
            },
            foot: {
                height: math.unit(1.286, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/xanthos/foot.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 5/12, "feet"),
                default: true
            },
            {
                name: "Normal+",
                height: math.unit(6, "meters")
            },
            {
                name: "Macro",
                height: math.unit(40, "feet")
            },
            {
                name: "Macro+",
                height: math.unit(200, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(20, "km")
            },
            {
                name: "Megamacro+",
                height: math.unit(100, "km")
            },
        ]
    )
};

characterMakers["Grynn"] = () => {
    return makeCharacter(
        "Grynn",
        "Grynn",
        {
            front: {
                height: math.unit(6 + 3/12, "feet"),
                weight: math.unit(215, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/grynn/front.svg",
                    extra: 4627/4209 ,
                    bottom: 0.047
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
                height: math.unit(6 + 3/12, "feet"),
                default: true
            },
            {
                name: "Big",
                height: math.unit(104, "feet")
            },
            {
                name: "Macro",
                height: math.unit(944, "feet")
            },
            {
                name: "Macro+",
                height: math.unit(9480, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(78752, "feet")
            },
            {
                name: "Megamacro+",
                height: math.unit(630128, "feet")
            },
            {
                name: "Megamacro++",
                height: math.unit(3150695, "feet")
            },
        ]
    )
};

characterMakers["Mocha Aura"] = () => {
    return makeCharacter(
        "Mocha Aura",
        "Mocha-Aura",
        {
            front: {
                height: math.unit(7 + 5/12, "feet"),
                weight: math.unit(450, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/mocha-aura/front.svg",
                    extra: 1907/1817 ,
                    bottom: 0.04
                }
            },
            back: {
                height: math.unit(7 + 5/12, "feet"),
                weight: math.unit(450, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/mocha-aura/back.svg",
                    extra: 1900/1825 ,
                    bottom: 0.045
                }
            },
        },
        [
            {
                name: "Nano",
                height: math.unit(1, "nm")
            },
            {
                name: "Megamicro",
                height: math.unit(1, "mm")
            },
            {
                name: "Micro",
                height: math.unit(3, "inches")
            },
            {
                name: "Normal",
                height: math.unit(7 + 5/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(30, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(3500, "feet")
            },
            {
                name: "Teramacro",
                height: math.unit(500000, "miles")
            },
            {
                name: "Petamacro",
                height: math.unit(50000000000000000 , "parsecs")
            },
        ]
    )
};

characterMakers["Ilisha Devya"] = () => {
    return makeCharacter(
        "Ilisha Devya",
        "Neopuc",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/ilisha-devya/front.svg",
                    extra: 1,
                    bottom: 0.175
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/ilisha-devya/back.svg",
                    extra: 1,
                    bottom: 0.015
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(500, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(10, "miles")
            },
            {
                name: "Gigamacro",
                height: math.unit(100000, "miles")
            },
            {
                name: "Examacro",
                height: math.unit(1e9, "lightyears")
            },
            {
                name: "Omniversal",
                height: math.unit(1e33, "lightyears")
            },
            {
                name: "Beyond Infinite",
                height: math.unit(1e100, "lightyears")
            },
        ]
    )
};

characterMakers["Mira"] = () => {
    return makeCharacter(
        "Mira",
        "Neopuc",
        {
            Side: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/mira/side.svg",
                    extra: 900/799 ,
                    bottom: 0.02
                }
            },
        },
        [
            {
                name: "Human Size",
                height: math.unit(6, "feet")
            },
            {
                name: "Macro",
                height: math.unit(100, "feet"),
                default: true
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
                name: "Teramacro",
                height: math.unit(300, "AU")
            },
            {
                name: "Full Size",
                height: math.unit(4.5e10, "lightyears")
            },
        ]
    )
};

characterMakers["Holly"] = () => {
    return makeCharacter(
        "Holly",
        "Neopuc",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/holly/front.svg",
                    extra: 639/606
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/holly/back.svg",
                    extra: 623/598
                }
            },
            frontWorking: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front (Working)",
                image: {
                    source: "./media/characters/holly/front-working.svg",
                    extra: 607/577 ,
                    bottom: 0.048
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(12 + 3/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Porter"] = () => {
    return makeCharacter(
        "Porter",
        "Neopuc",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/porter/front.svg",
                    extra: 1,
                    bottom: 0.01
                }
            },
            frontRobes: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front (Robes)",
                image: {
                    source: "./media/characters/porter/front-robes.svg",
                    extra: 1.01 ,
                    bottom: 0.01
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(11 + 9/12, "feet"),
                default: true
            },   
        ]
    )
};

characterMakers["Lucy"] = () => {
    return makeCharacter(
        "Lucy",
        "Jasmith",
        {
            legendary: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Legendary",
                image: {
                    source: "./media/characters/lucy/legendary.svg",
                    extra: 1355/1100 ,
                    bottom: 0.045
                }
            },
        },
        [
            {
                name: "Legendary",
                height: math.unit(86882*2, "miles"),
                default: true
            },
        ]
    )
};

characterMakers["Drusilla"] = () => {
    return makeCharacter(
        "Drusilla",
        "Neopuc",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/drusilla/front.svg",
                    extra: 678/635 ,
                    bottom: 0.03
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/drusilla/back.svg",
                    extra: 678/635 ,
                    bottom: 0.005

                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(100, "feet")
            },
            {
                name: "Canon Height",
                height: math.unit(2000, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Renard Thatch"] = () => {
    return makeCharacter(
        "Renard Thatch",
        "Renard Thatch",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(180, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/renard-thatch/front.svg",
                    extra: 2411/2275 ,
                    bottom: 0.01
                }
            },
            frontPosing: {
                height: math.unit(6, "feet"),
                weight: math.unit(180, "lb"),
                name: "Front (Posing)",
                image: {
                    source: "./media/characters/renard-thatch/front-posing.svg",
                    extra: 2381/2261 ,
                    bottom: 0.01
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(180, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/renard-thatch/back.svg",
                    extra: 2428/2288
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(3, "inches")
            },
            {
                name: "Default",
                height: math.unit(6, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(75, "feet")
            },
        ]
    )
};

characterMakers["Sekvra"] = () => {
    return makeCharacter(
        "Sekvra",
        "Neopuc",
        {
            front: {
                height: math.unit(1450, "feet"),
                weight: math.unit(1.21e6, "tons"),
                name: "Front",
                image: {
                    source: "./media/characters/sekvra/front.svg",
                    extra: 1,
                    bottom: 0.03
                }
            },
            frontClothed: {
                height: math.unit(1450, "feet"),
                weight: math.unit(1.21e6, "tons"),
                name: "Front (Clothed)",
                image: {
                    source: "./media/characters/sekvra/front-clothed.svg",
                    extra: 1,
                    bottom: 0.03
                }
            },
            side: {
                height: math.unit(1450, "feet"),
                weight: math.unit(1.21e6, "tons"),
                name: "Side",
                image: {
                    source: "./media/characters/sekvra/side.svg",
                    extra: 1,
                    bottom: 0.025
                }
            },
            back: {
                height: math.unit(1450, "feet"),
                weight: math.unit(1.21e6, "tons"),
                name: "Back",
                image: {
                    source: "./media/characters/sekvra/back.svg",
                    extra: 1,
                    bottom: 0.005
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(1450, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(15000, "feet")
            },
        ]
    )
};

characterMakers["Carmine"] = () => {
    return makeCharacter(
        "Carmine",
        "Neopuc",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/carmine/front.svg",
                    extra: 1,
                    bottom: 0.035
                }
            },
            frontArmor: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front (Armor)",
                image: {
                    source: "./media/characters/carmine/front-armor.svg",
                    extra: 1,
                    bottom: 0.035
                }
            },
        },
        [
            {
                name: "Large",
                height: math.unit(1, "mile")
            },
            {
                name: "Huge",
                height: math.unit(40, "miles"),
                default: true
            },
            {
                name: "Colossal",
                height: math.unit(2500, "miles")
            },
        ]
    )
};

characterMakers["Elyssia"] = () => {
    return makeCharacter(
        "Elyssia",
        "Neopuc",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/elyssia/front.svg",
                    extra: 2201/2035 ,
                    bottom: 0.05
                }
            },
            frontClothed: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front (Clothed)",
                image: {
                    source: "./media/characters/elyssia/front-clothed.svg",
                    extra: 2201/2035 ,
                    bottom: 0.05
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/elyssia/back.svg",
                    extra: 2201/2035 ,
                    bottom: 0.013
                }
            },
        },
        [
            {
                name: "Smaller",
                height: math.unit(150, "feet")
            },
            {
                name: "Standard",
                height: math.unit(1400, "feet"),
                default: true
            },
            {
                name: "Distracted",
                height: math.unit(15000, "feet")
            },
        ]
    )
};

characterMakers["Geno Maxwell"] = () => {
    return makeCharacter(
        "Geno Maxwell",
        "Geckonori",
        {
            front: {
                height: math.unit(7 + 4/12, "feet"),
                weight: math.unit(500, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/geno-maxwell/front.svg",
                    extra: 2207/2040 ,
                    bottom: 0.015
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
                height: math.unit(7 + 4/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(220, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(11, "miles")
            },
        ]
    )
};

characterMakers["Regena Maxwell"] = () => {
    return makeCharacter(
        "Regena Maxwell",
        "Geckonori",
        {
            front: {
                height: math.unit(7 + 4/12, "feet"),
                weight: math.unit(500, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/regena-maxwell/front.svg",
                    extra: 3115/2770 ,
                    bottom: 0.02
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7 + 4/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(220, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(11, "miles")
            },
        ]
    )
};

characterMakers["XGlidingDragonX"] = () => {
    return makeCharacter(
        "XGlidingDragonX",
        "XGlidingDragonX",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/x-gliding-dragon-x/front.svg",
                    extra: 860/690 ,
                    bottom: 0.03
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(1.7, "meters"),
                default: true
            },
        ]
    )
};

characterMakers["Quilly"] = () => {
    return makeCharacter(
        "Quilly",
        "Jasmith",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/quilly/front.svg",
                    extra: 890/776
                }
            },
        },
        [
            {
                name: "Gigamacro",
                height: math.unit(404090, "miles"),
                default: true
            },
        ]
    )
};

characterMakers["Tempest"] = () => {
    return makeCharacter(
        "Tempest",
        "XsomeoneX",
        {
            front: {
                height: math.unit(7 + 8/12, "feet"),
                weight: math.unit(350, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/tempest/front.svg",
                    extra: 1175/1086 ,
                    bottom: 0.02
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

characterMakers["Rodger"] = () => {
    return makeCharacter(
        "Rodger",
        "Guywithastupidname",
        {
            side: {
                height: math.unit(4 + 5/12, "feet"),
                weight: math.unit(80, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/rodger/side.svg",
                    extra: 1235/1118
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
                height: math.unit(4 + 5/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(120, "feet")
            },
        ]
    )
};

characterMakers["Danyel"] = () => {
    return makeCharacter(
        "Danyel",
        "Danyelx",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/danyel/front.svg",
                    extra: 1185/1123 ,
                    bottom: 0.05
                }
            },
        },
        [
            {
                name: "Shrunken",
                height: math.unit(0.5, "mm")
            },
            {
                name: "Micro",
                height: math.unit(1, "mm"),
                default: true
            },
            {
                name: "Upsized",
                height: math.unit(5 + 5/12, "feet")
            },
        ]
    )
};

characterMakers["Vivian Bijoux"] = () => {
    return makeCharacter(
        "Vivian Bijoux",
        "Geckonori",
        {
            front: {
                height: math.unit(5 + 6/12, "feet"),
                weight: math.unit(200, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/vivian-bijoux/front.svg",
                    extra: 1,
                    bottom: 0.072
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 6/12, "feet"),
                default: true
            },
            {
                name: "Bad Dream",
                height: math.unit(500, "feet")
            },
            {
                name: "Nightmare",
                height: math.unit(500, "miles")
            },
        ]
    )
};

characterMakers["Zeta"] = () => {
    return makeCharacter(
        "Zeta",
        "thenerdherd102",
        {
            front: {
                height: math.unit(6 + 1/12, "feet"),
                weight: math.unit(260, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/zeta/front.svg",
                    extra: 1968/1889 ,
                    bottom: 0.06
                }
            },
            back: {
                height: math.unit(6 + 1/12, "feet"),
                weight: math.unit(260, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/zeta/back.svg",
                    extra: 1944/1858 ,
                    bottom: 0.03
                }
            },
            hand: {
                height: math.unit(1.112, "feet"),
                name: "Hand",
                image: {
                    source: "./media/characters/zeta/hand.svg"
                }
            },
            foot: {
                height: math.unit(1.48, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/zeta/foot.svg"
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
                height: math.unit(6 + 1/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(20, "feet")
            },
        ]
    )
};

characterMakers["Jamie Larsen"] = () => {
    return makeCharacter(
        "Jamie Larsen",
        "Mt_Jamie_Larsen",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/jamie-larsen/front.svg",
                    extra: 962/933 ,
                    bottom: 0.02
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/jamie-larsen/back.svg",
                    extra: 997/946
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(28 + 7/12, "feet"),
                default: true
            },
            {
                name: "Macro+",
                height: math.unit(180, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(10, "miles")
            },
            {
                name: "Gigamacro",
                height: math.unit(200000, "miles")
            },
        ]
    )
};

characterMakers["Vance"] = () => {
    return makeCharacter(
        "Vance",
        "Neopuc",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(120, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/vance/front.svg",
                    extra: 1980/1890 ,
                    bottom: 0.09
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(120, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/vance/back.svg",
                    extra: 2081/1994 ,
                    bottom: 0.014
                }
            },
            hand: {
                height: math.unit(0.88, "feet"),
                name: "Hand",
                image: {
                    source: "./media/characters/vance/hand.svg"
                }
            },
            foot: {
                height: math.unit(0.64, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/vance/foot.svg"
                }
            },
        },
        [
            {
                name: "Small",
                height: math.unit(90, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(100, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(15, "miles")
            },
        ]
    )
};

characterMakers["Xochitl"] = () => {
    return makeCharacter(
        "Xochitl",
        "Neopuc",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(180, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/xochitl/front.svg",
                    extra: 2297/2261 ,
                    bottom: 0.065
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(180, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/xochitl/back.svg",
                    extra: 2386/2354 ,
                    bottom: 0.01
                }
            },
            foot: {
                height: math.unit(6/5 * 1.15, "feet"),
                weight: math.unit(150, "lb"),
                name: "Foot",
                image: {
                    source: "./media/characters/xochitl/foot.svg"
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(80, "feet")
            },
            {
                name: "Macro+",
                height: math.unit(400, "feet"),
                default: true
            },
            {
                name: "Gigamacro",
                height: math.unit(80000, "miles")
            },
            {
                name: "Gigamacro+",
                height: math.unit(400000, "miles")
            },
            {
                name: "Teramacro",
                height: math.unit(300, "AU")
            },
        ]
    )
};

characterMakers["Vincent"] = () => {
    return makeCharacter(
        "Vincent",
        "Neopuc",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/vincent/front.svg",
                    extra: 1130/1080 ,
                    bottom: 0.055
                }
            },
            beak: {
                height: math.unit(6 * 0.1, "feet"),
                name: "Beak",
                image: {
                    source: "./media/characters/vincent/beak.svg"
                }
            },
            hand: {
                height: math.unit(6 * 0.85, "feet"),
                weight: math.unit(150, "lb"),
                name: "Hand",
                image: {
                    source: "./media/characters/vincent/hand.svg"
                }
            },
            foot: {
                height: math.unit(6 * 0.19, "feet"),
                weight: math.unit(150, "lb"),
                name: "Foot",
                image: {
                    source: "./media/characters/vincent/foot.svg"
                }
            },
        },
        [
            {
                name: "Base",
                height: math.unit(6 + 5/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(300, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(2, "miles")
            },
            {
                name: "Gigamacro",
                height: math.unit(1000, "miles")
            },
        ]
    )
};

characterMakers["Jay"] = () => {
    return makeCharacter(
        "Jay",
        "J-Forse",
        {
            front: {
                height: math.unit(6 + 2/12, "feet"),
                weight: math.unit(65, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/jay/front.svg",
                    extra: 1510/1430 ,
                    bottom: 0.042
                }
            },
            back: {
                height: math.unit(6 + 2/12, "feet"),
                weight: math.unit(65, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/jay/back.svg",
                    extra: 1510/1430 ,
                    bottom: 0.025
                }
            },
            clothed: {
                height: math.unit(6 + 2/12, "feet"),
                weight: math.unit(65, "lb"),
                name: "Front (Clothed)",
                image: {
                    source: "./media/characters/jay/clothed.svg",
                    extra: 744/699 ,
                    bottom: 0.043
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
                height: math.unit(6 + 2/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(1, "mile")
            },
            {
                name: "Megamacro",
                height: math.unit(100, "miles")
            },
        ]
    )
};

characterMakers["Coatl"] = () => {
    return makeCharacter(
        "Coatl",
        "Jagaz",
        {
            front: {
                height: math.unit(2, "meters"),
                weight: math.unit(500 , "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/coatl/front.svg",
                    extra: 3948 / 3500 ,
                    bottom: 0.082
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(4, "meters")
            },
            {
                name: "Macro",
                height: math.unit(100, "meters"),
                default: true
            },
            {
                name: "Macro+",
                height: math.unit(300, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(3, "gigameters")
            },
            {
                name: "Megamacro+",
                height: math.unit(300, "terameters")
            },
            {
                name: "Megamacro++",
                height: math.unit(3, "lightyears")
            },
        ]
    )
};

characterMakers["Shiroryu"] = () => {
    return makeCharacter(
        "Shiroryu",
        "Roxas00137",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(50, "kg"),
                name: "front",
                image: {
                    source: "./media/characters/shiroryu/front.svg",
                    extra: 1990/1935
                }
            },
        },
        [
            {
                name: "Mortal Mingling",
                height: math.unit(3, "meters")
            },
            {
                name: "Kaiju-ish",
                height: math.unit(250, "meters")
            },
            {
                name: "Somewhat Godly",
                height: math.unit(400, "km"),
                default: true
            },
            {
                name: "Planetary",
                height: math.unit(300, "megameters")
            },
            {
                name: "Galaxy-dwarfing",
                height: math.unit(450, "kiloparsecs")
            },
            {
                name: "Universe Eater",
                height: math.unit(150, "gigaparsecs")
            },
            {
                name: "Almost Immeasurable",
                height: math.unit(1.3e266, "yottaparsecs")
            },
        ]
    )
};

characterMakers["Umeko"] = () => {
    return makeCharacter(
        "Umeko",
        "Neopuc",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/umeko/front.svg",
                    extra: 1,
                    bottom: 0.019
                }
            },
            frontArmored: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front (Armored)",
                image: {
                    source: "./media/characters/umeko/front-armored.svg",
                    extra: 1,
                    bottom: 0.021
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(220, "feet"),
                default: true
            },
            {
                name: "Guardian Dragon",
                height: math.unit(50, "miles")
            },
            {
                name: "Cosmic",
                height: math.unit(800000, "miles")
            },
        ]
    )
};

characterMakers["Cassidy"] = () => {
    return makeCharacter(
        "Cassidy",
        "Neopuc",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/cassidy/front.svg",
                    extra: 1,
                    bottom: 0.043
                }
            },
        },
        [
            {
                name: "Canon Height",
                height: math.unit(120, "feet"),
                default: true
            },
            {
                name: "Macro+",
                height: math.unit(400, "feet")
            },
            {
                name: "Macro++",
                height: math.unit(4000, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(3, "miles")
            },
        ]
    )
};

characterMakers["Isaac"] = () => {
    return makeCharacter(
        "Isaac",
        "Neopuc",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/isaac/front.svg",
                    extra: 896/815 ,
                    bottom: 0.11
                }
            },
        },
        [
            {
                name: "Human Size",
                height: math.unit(8, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(400, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(50, "miles")
            },
            {
                name: "Canon Height",
                height: math.unit(200, "AU")
            },
        ]
    )
};

characterMakers["Sleekit"] = () => {
    return makeCharacter(
        "Sleekit",
        "AnAnonymousIndividual",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(72, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/sleekit/front.svg",
                    extra: 4693/4487 ,
                    bottom: 0.012
                }
            },
        },
        [
            {
                name: "Minimum Height",
                height: math.unit(10, "meters")
            },
            {
                name: "Smaller",
                height: math.unit(25, "meters")
            },
            {
                name: "Larger",
                height: math.unit(38, "meters"),
                default: true
            },
            {
                name: "Maximum height",
                height: math.unit(100, "meters")
            },
        ]
    )
};

characterMakers["Nillia"] = () => {
    return makeCharacter(
        "Nillia",
        "Neopuc",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/nillia/front.svg",
                    extra: 2195/2037 ,
                    bottom: 0.005
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/nillia/back.svg",
                    extra: 2195/2037 ,
                    bottom: 0.005
                }
            },
        },
        [
            {
                name: "Canon Height",
                height: math.unit(489, "feet"),
                default: true
            }
        ]
    )
};

characterMakers["Mesmyriza"] = () => {
    return makeCharacter(
        "Mesmyriza",
        "-fluffy-",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/mesmyriza/front.svg",
                    extra: 2067/1784 ,
                    bottom: 0.035
                }
            },
            foot: {
                height: math.unit(6/(250/35), "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/mesmyriza/foot.svg"
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(457, "meters"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(8, "megameters")
            },
        ]
    )
};

characterMakers["Saudade"] = () => {
    return makeCharacter(
        "Saudade",
        "lordbo",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(250, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/saudade/front.svg",
                    extra: 1172/1139 ,
                    bottom: 0.035
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
                height: math.unit(6, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(50, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(2800, "feet")
            },
        ]
    )
};

characterMakers["Keireer"] = () => {
    return makeCharacter(
        "Keireer",
        "teedash",
        {
            front: {
                height: math.unit(5 + 4/12, "feet"),
                weight: math.unit(100, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/keireer/front.svg",
                    extra: 716/666 ,
                    bottom: 0.05
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 4/12, "feet"),
                default: true
            },   
        ]
    )
};

characterMakers["Mirja"] = () => {
    return makeCharacter(
        "Mirja",
        "vabad",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(90, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/mirja/front.svg",
                    extra: 1789/1683 ,
                    bottom: 0.05
                }
            },
            frontDressed: {
                height: math.unit(6, "feet"),
                weight: math.unit(90, "lb"),
                name: "Front (Dressed)",
                image: {
                    source: "./media/characters/mirja/front-dressed.svg",
                    extra: 1789/1683 ,
                    bottom: 0.05
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(90, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/mirja/back.svg",
                    extra: 953/917 ,
                    bottom: 0.017
                }
            },
        },
        [
            {
                name: "\"Incognito\"",
                height: math.unit(3, "meters")
            },
            {
                name: "Strolling Size",
                height: math.unit(15, "km")
            },
            {
                name: "Larger Strolling Size",
                height: math.unit(400, "km")
            },
            {
                name: "Preferred Size",
                height: math.unit(5000, "km")
            },
            {
                name: "True Size",
                height: math.unit(30657809462086840000000000000000, "parsecs"),
                default: true
            },
        ]
    )
};

characterMakers["Nightraver"] = () => {
    return makeCharacter(
        "Nightraver",
        "Nightraver",
        {
            front: {
                height: math.unit(15, "feet"),
                weight: math.unit(880, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/nightraver/front.svg",
                    extra: 2444/2160 ,
                    bottom: 0.027
                }
            },
            back: {
                height: math.unit(15, "feet"),
                weight: math.unit(880, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/nightraver/back.svg",
                    extra: 2309/2180 ,
                    bottom: 0.005
                }
            },
            sole: {
                height: math.unit(2.878, "feet"),
                name: "Sole",
                image: {
                    source: "./media/characters/nightraver/sole.svg"
                }
            },
            foot: {
                height: math.unit(2.285, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/nightraver/foot.svg"
                }
            },
            maw: {
                height: math.unit(2.67, "feet"),
                name: "Maw",
                image: {
                    source: "./media/characters/nightraver/maw.svg"
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(1, "cm")
            },
            {
                name: "Normal",
                height: math.unit(15, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(300, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(300, "miles")
            },
            {
                name: "Gigamacro",
                height: math.unit(10000, "miles")
            },
        ]
    )
};

characterMakers["Arc"] = () => {
    return makeCharacter(
        "Arc",
        "DinoKiddo",
        {
            side: {
                height: math.unit(2, "inches"),
                weight: math.unit(5, "grams"),
                name: "Side",
                image: {
                    source: "./media/characters/arc/side.svg"
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

characterMakers["Nebula Shahar"] = () => {
    return makeCharacter(
        "Nebula Shahar",
        "Kypleo",
        {
            front: {
                height: math.unit(1.1938, "meters"),
                weight: math.unit(54, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/nebula-shahar/front.svg",
                    extra: 1642/1436 ,
                    bottom: 0.06
                }
            },
        },
        [
            {
                name: "Megamicro",
                height: math.unit(0.3, "mm")
            },
            {
                name: "Micro",
                height: math.unit(3, "cm")
            },
            {
                name: "Normal",
                height: math.unit(138, "cm"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(30, "m")
            },
        ]
    )
};

characterMakers["Shayla"] = () => {
    return makeCharacter(
        "Shayla",
        "Ziralkia",
        {
            front: {
                height: math.unit(5.24, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/shayla/front.svg",
                    extra: 1512/1414 ,
                    bottom: 0.01
                }
            },
            back: {
                height: math.unit(5.24, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/shayla/back.svg",
                    extra: 1512/1414
                }
            },
            hand: {
                height: math.unit(0.7781496062992126, "feet"),
                name: "Hand",
                image: {
                    source: "./media/characters/shayla/hand.svg"
                }
            },
            foot: {
                height: math.unit(1.4206036745406823, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/shayla/foot.svg"
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(0.32, "feet")
            },
            {
                name: "Normal",
                height: math.unit(5.24, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(492.12, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(186.41, "miles")
            },
        ]
    )
};

characterMakers["Pia Jr."] = () => {
    return makeCharacter(
        "Pia Jr.",
        "Ziralkia",
        {
            front: {
                height: math.unit(2.2, "m"),
                weight: math.unit(120, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/pia-jr/front.svg",
                    extra: 1000/970 ,
                    bottom: 0.035
                }
            },
            hand: {
                height: math.unit(0.759 * 7.21 / 6, "feet"),
                name: "Hand",
                image: {
                    source: "./media/characters/pia-jr/hand.svg"
                }
            },
            paw: {
                height: math.unit(1.185 * 7.21 / 6, "feet"),
                name: "Paw",
                image: {
                    source: "./media/characters/pia-jr/paw.svg"
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(1.2, "cm")
            },
            {
                name: "Normal",
                height: math.unit(2.2, "m"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(180, "m")
            },
            {
                name: "Megamacro",
                height: math.unit(420, "km")
            },
        ]
    )
};

characterMakers["Pia Sr."] = () => {
    return makeCharacter(
        "Pia Sr.",
        "Ziralkia",
        {
            front: {
                height: math.unit(2, "m"),
                weight: math.unit(115, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/pia-sr/front.svg",
                    extra: 760/730 ,
                    bottom: 0.015
                }
            },
            back: {
                height: math.unit(2, "m"),
                weight: math.unit(115, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/pia-sr/back.svg",
                    extra: 760/730 ,
                    bottom: 0.01
                }
            },
            hand: {
                height: math.unit(0.89 * 6.56 / 6, "feet"),
                name: "Hand",
                image: {
                    source: "./media/characters/pia-sr/hand.svg"
                }
            },
            foot: {
                height: math.unit(1.83, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/pia-sr/foot.svg"
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(88, "mm")
            },
            {
                name: "Normal",
                height: math.unit(2, "m"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(200, "m")
            },
            {
                name: "Megamacro",
                height: math.unit(420, "km")
            },
        ]
    )
};

characterMakers["KIBIBYTE"] = () => {
    return makeCharacter(
        "KIBIBYTE",
        "gamefreak1215",
        {
            front: {
                height: math.unit(8 + 2/12, "feet"),
                weight: math.unit(300, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/kibibyte/front.svg",
                    extra: 2221/2098 ,
                    bottom: 0.04
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(8 + 2/12, "feet"),
                default: true
            },
            {
                name: "Socialable Macro",
                height: math.unit(50, "feet")
            },
            {
                name: "Macro",
                height: math.unit(300, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(500, "miles")
            },
        ]
    )
};

characterMakers["Felix"] = () => {
    return makeCharacter(
        "Felix",
        "MeanDumpsterCat",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/felix/front.svg",
                    extra: 762/722 ,
                    bottom: 0.02
                }
            },
            frontClothed: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front (Clothed)",
                image: {
                    source: "./media/characters/felix/front-clothed.svg",
                    extra: 762/722 ,
                    bottom: 0.02
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 8/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(2600, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(450, "miles")
            },
        ]
    )
};

characterMakers["Tobo"] = () => {
    return makeCharacter(
        "Tobo",
        "Naoya_Raichi",
        {
            front: {
                height: math.unit(6 + 1/12, "feet"),
                weight: math.unit(250, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/tobo/front.svg",
                    extra: 608/586 ,
                    bottom: 0.023
                }
            },
            back: {
                height: math.unit(6 + 1/12, "feet"),
                weight: math.unit(250, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/tobo/back.svg",
                    extra: 608/586
                }
            },
        },
        [
            {
                name: "Nano",
                height: math.unit(2, "nm")
            },
            {
                name: "Megamicro",
                height: math.unit(0.1, "mm")
            },
            {
                name: "Micro",
                height: math.unit(1, "inch"),
                default: true
            },
            {
                name: "Human-sized",
                height: math.unit(6 + 1/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(250, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(75, "miles")
            },
            {
                name: "Texas-sized",
                height: math.unit(750, "miles")
            },
            {
                name: "Teramacro",
                height: math.unit(50000, "miles")
            },
        ]
    )
};

characterMakers["Danny Kapowsky"] = () => {
    return makeCharacter(
        "Danny Kapowsky",
        "nh63879",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(269, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/danny-kapowsky/front.svg",
                    extra: 766/736 ,
                    bottom: 0.044
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(269, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/danny-kapowsky/back.svg",
                    extra: 797/760 ,
                    bottom: 0.025
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(150, "feet"),
                default: true
            },
            {
                name: "Macro+",
                height: math.unit(200, "feet")
            },
            {
                name: "Macro++",
                height: math.unit(300, "feet")
            },
            {
                name: "Macro+++",
                height: math.unit(400, "feet")
            },
        ]
    )
};

characterMakers["Finn"] = () => {
    return makeCharacter(
        "Finn",
        "Finn-The-Fennecfox",
        {
            side: {
                height: math.unit(6, "feet"),
                weight: math.unit(170, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/finn/side.svg",
                    extra: 1953/1807 ,
                    bottom: 0.057
                }
            },
        },
        [
            {
                name: "Megamacro",
                height: math.unit(14445, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Roy"] = () => {
    return makeCharacter(
        "Roy",
        "dracodare",
        {
            front: {
                height: math.unit(5 + 6/12, "feet"),
                weight: math.unit(125, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/roy/front.svg",
                    extra: 1,
                    bottom: 0.11
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
                height: math.unit(5 + 6/12, "feet")
            },
            {
                name: "Lesser Macro",
                height: math.unit(60, "feet")
            },
            {
                name: "Greater Macro",
                height: math.unit(120, "feet")
            },
        ]
    )
};

characterMakers["Aevsivs"] = () => {
    return makeCharacter(
        "Aevsivs",
        "Aevsivs",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(100, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/aevsivs/front.svg",
                    extra: 1,
                    bottom: 0.03
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(100, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/aevsivs/back.svg"
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
                name: "Normal",
                height: math.unit(5, "feet")
            },
        ]
    )
};

characterMakers["Hildegard"] = () => {
    return makeCharacter(
        "Hildegard",
        "Fidchell",
        {
            front: {
                height: math.unit(5 + 7/12, "feet"),
                weight: math.unit(159, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/hildegard/front.svg",
                    extra: 312/286 ,
                    bottom: 0.005
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 7/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Bernard & Wilder"] = () => {
    return makeCharacter(
        "Bernard & Wilder",
        "Fidchell",
        {
            bernard: {
                height: math.unit(2 + 7/12, "feet"),
                weight: math.unit(66, "lb"),
                name: "Bernard",
                rename: true,
                image: {
                    source: "./media/characters/bernard-wilder/bernard.svg",
                    extra: 192/128 ,
                    bottom: 0.05
                }
            },
            wilder: {
                height: math.unit(5 + 8/12, "feet"),
                weight: math.unit(143, "lb"),
                name: "Wilder",
                rename: true,
                image: {
                    source: "./media/characters/bernard-wilder/wilder.svg",
                    extra: 361/312 ,
                    bottom: 0.02
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(2 + 7/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Hearth"] = () => {
    return makeCharacter(
        "Hearth",
        "Fidchell",
        {
            anthro: {
                height: math.unit(6 + 1/12, "feet"),
                weight: math.unit(155, "lb"),
                name: "Anthro",
                image: {
                    source: "./media/characters/hearth/anthro.svg",
                    extra: 260/250 ,
                    bottom: 0.02
                }
            },
            feral: {
                height: math.unit(3.78, "feet"),
                weight: math.unit(35, "kg"),
                name: "Feral",
                image: {
                    source: "./media/characters/hearth/feral.svg",
                    extra: 153/135 ,
                    bottom: 0.03
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 1/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Ingrid"] = () => {
    return makeCharacter(
        "Ingrid",
        "Fidchell",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(182, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/ingrid/front.svg",
                    extra: 294/268 ,
                    bottom: 0.027
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Malgam"] = () => {
    return makeCharacter(
        "Malgam",
        "Fidchell",
        {
            eevee: {
                height: math.unit(2 + 10/12, "feet"),
                weight: math.unit(86, "lb"),
                name: "Malgam",
                image: {
                    source: "./media/characters/malgam/eevee.svg",
                    extra: 218/180 ,
                    bottom: 0.2
                }
            },
            sylveon: {
                height: math.unit(4, "feet"),
                weight: math.unit(101, "lb"),
                name: "Future Malgam",
                rename: true,
                image: {
                    source: "./media/characters/malgam/sylveon.svg",
                    extra: 371/325 ,
                    bottom: 0.015
                }
            },
            gigantamax: {
                height: math.unit(50, "feet"),
                name: "Gigantamax Malgam",
                rename: true,
                image: {
                    source: "./media/characters/malgam/gigantamax.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(2 + 10/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Fleur"] = () => {
    return makeCharacter(
        "Fleur",
        "Fidchell",
        {
            front: {
                height: math.unit(5 + 11/12, "feet"),
                weight: math.unit(188, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/fleur/front.svg",
                    extra: 309/283 ,
                    bottom: 0.007
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 11/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Jude"] = () => {
    return makeCharacter(
        "Jude",
        "Fidchell",
        {
            front: {
                height: math.unit(5 + 4/12, "feet"),
                weight: math.unit(122, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/jude/front.svg",
                    extra: 288/273 ,
                    bottom: 0.03
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 4/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Seara"] = () => {
    return makeCharacter(
        "Seara",
        "Fidchell",
        {
            front: {
                height: math.unit(5 + 11/12, "feet"),
                weight: math.unit(190, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/seara/front.svg",
                    extra: 1,
                    bottom: 0.05
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 11/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Caspian"] = () => {
    return makeCharacter(
        "Caspian",
        "Fidchell",
        {
        front: {
            height: math.unit(16 + 5/12, "feet"),
            weight: math.unit(524, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/caspian/front.svg",
                extra: 1,
                bottom: 0.04
            }
        },
        },
        [
            {
                name: "Normal",
                height: math.unit(16 + 5/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Mika"] = () => {
    return makeCharacter(
        "Mika",
        "Fidchell",
        {
        front: {
            height: math.unit(5 + 7/12, "feet"),
            weight: math.unit(170, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mika/front.svg",
                extra: 1,
                bottom: 0.016
            }
        },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 7/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Sol"] = () => {
    return makeCharacter(
        "Sol",
        "Fidchell",
        {
        front: {
            height: math.unit(6 + 2/12, "feet"),
            weight: math.unit(268, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sol/front.svg",
                extra: 247/231 ,
                bottom: 0.05
            }
        },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 2/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Umiko"] = () => {
    return makeCharacter(
        "Umiko",
        "Fidchell",
        {
        buizel: {
            height: math.unit(2 + 5/12, "feet"),
            weight: math.unit(87, "lb"),
            name: "Buizel",
            image: {
                source: "./media/characters/umiko/buizel.svg",
                extra: 172/157 ,
                bottom: 0.01
            }
        },
        floatzel: {
            height: math.unit(5 + 9/12, "feet"),
            weight: math.unit(250, "lb"),
            name: "Floatzel",
            image: {
                source: "./media/characters/umiko/floatzel.svg",
                extra: 262/248
            }
        },
        },
        [
            {
                name: "Normal",
                height: math.unit(2 + 5/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Iliac"] = () => {
    return makeCharacter(
        "Iliac",
        "Fidchell",
        {
        front: {
            height: math.unit(6 + 2/12, "feet"),
            weight: math.unit(146, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/iliac/front.svg",
                extra: 389/365 ,
                bottom: 0.035
            }
        },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 2/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Topaz"] = () => {
    return makeCharacter(
        "Topaz",
        "Fidchell",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(170, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/topaz/front.svg",
                    extra: 317/303 ,
                    bottom: 0.055
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Gabriel"] = () => {
    return makeCharacter(
        "Gabriel",
        "Fidchell",
        {
            front: {
                height: math.unit(5 + 11/12, "feet"),
                weight: math.unit(144, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/gabriel/front.svg",
                    extra: 285/262 ,
                    bottom: 0.004
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 11/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Tempest (Suicune)"] = () => {
    return makeCharacter(
        "Tempest (Suicune)",
        "Fidchell",
        {
            side: {
                height: math.unit(6 + 5/12, "feet"),
                weight: math.unit(300, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/tempest-suicune/side.svg",
                    extra: 195/154 ,
                    bottom: 0.04
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 5/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Vulcan"] = () => {
    return makeCharacter(
        "Vulcan",
        "Fidchell",
        {
            front: {
                height: math.unit(7 + 2/12, "feet"),
                weight: math.unit(322, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/vulcan/front.svg",
                    extra: 154/147 ,
                    bottom: 0.04
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7 + 2/12, "feet"),
                default: true
            },   
        ]
    )
};

characterMakers["Gault"] = () => {
    return makeCharacter(
        "Gault",
        "Fidchell",
        {
            front: {
                height: math.unit(5 + 10/12, "feet"),
                weight: math.unit(264, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/gault/front.svg",
                    extra: 161/140 ,
                    bottom: 0.028
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 10/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Shard"] = () => {
    return makeCharacter(
        "Shard",
        "Fidchell",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/shard/front.svg",
                    extra: 273/238 ,
                    bottom: 0.02
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(3 + 6/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Ashe"] = () => {
    return makeCharacter(
        "Ashe",
        "Fidchell",
        {
            front: {
                height: math.unit(5 + 11/12, "feet"),
                weight: math.unit(146, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/ashe/front.svg",
                    extra: 400/373 ,
                    bottom: 0.01
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 11/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Beatrix"] = () => {
    return makeCharacter(
        "Beatrix",
        "Fidchell",
        {
            front: {
                height: math.unit(5 + 5/12, "feet"),
                weight: math.unit(135, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/beatrix/front.svg",
                    extra: 392/379 ,
                    bottom: 0.01
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Ignatius"] = () => {
    return makeCharacter(
        "Ignatius",
        "Fidchell",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/ignatius/front.svg",
                    extra: 245/222 ,
                    bottom: 0.01
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 5/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Mei Li"] = () => {
    return makeCharacter(
        "Mei Li",
        "Fidchell",
        {
            front: {
                height: math.unit(6 + 2/12, "feet"),
                weight: math.unit(138, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/mei-li/front.svg",
                    extra: 237/229 ,
                    bottom: 0.03
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 2/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Puru"] = () => {
    return makeCharacter(
        "Puru",
        "Fidchell",
        {
            front: {
                height: math.unit(2 + 4/12, "feet"),
                weight: math.unit(62, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/puru/front.svg",
                    extra: 206/149 ,
                    bottom: 0.06
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(2 + 4/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Kee"] = () => {
    return makeCharacter(
        "Kee",
        "AardwolfKee",
        {
            taur: {
                height: math.unit(11, "feet"),
                weight: math.unit(500, "lb"),
                name: "Taur",
                image: {
                    source: "./media/characters/kee/taur.svg",
                    extra: 1,
                    bottom: 0.04
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(11, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Cobalt (Dracha)"] = () => {
    return makeCharacter(
        "Cobalt (Dracha)",
        "Fidchell",
        {
            anthro: {
                height: math.unit(7, "feet"),
                weight: math.unit(190, "lb"),
                name: "Anthro",
                image: {
                    source: "./media/characters/cobalt-dracha/anthro.svg",
                    extra: 231/225 ,
                    bottom: 0.04
                }
            },
            feral: {
                height: math.unit(9 + 7/12, "feet"),
                weight: math.unit(294, "lb"),
                name: "Feral",
                image: {
                    source: "./media/characters/cobalt-dracha/feral.svg",
                    extra: 692/633 ,
                    bottom: 0.05
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Java"] = () => {
    return makeCharacter(
        "Java",
        "Fidchell",
        {
            fallen: {
                height: math.unit(11 + 8/12, "feet"),
                weight: math.unit(485, "lb"),
                name: "Java (Fallen)",
                rename: true,
                image: {
                    source: "./media/characters/java/fallen.svg",
                    extra: 226/208 ,
                    bottom: 0.005
                }
            },
            godkin: {
                height: math.unit(10 + 6/12, "feet"),
                weight: math.unit(328, "lb"),
                name: "Java (Godkin)",
                rename: true,
                image: {
                    source: "./media/characters/java/godkin.svg",
                    extra: 270/262 ,
                    bottom: 0.02
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(11 + 8/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Skoll"] = () => {
    return makeCharacter(
        "Skoll",
        "Fidchell",
        {
            front: {
                height: math.unit(7 + 8/12, "feet"),
                weight: math.unit(320, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/skoll/front.svg",
                    extra: 232/220 ,
                    bottom: 0.02
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

characterMakers["Purna"] = () => {
    return makeCharacter(
        "Purna",
        "Fidchell",
        {
            front: {
                height: math.unit(5 + 9/12, "feet"),
                weight: math.unit(170, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/purna/front.svg",
                    extra: 239/229 ,
                    bottom: 0.01
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

characterMakers["Kuva"] = () => {
    return makeCharacter(
        "Kuva",
        "Fidchell",
        {
            front: {
                height: math.unit(5 + 9/12, "feet"),
                weight: math.unit(142, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/kuva/front.svg",
                    extra: 281/271 ,
                    bottom: 0.006
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

characterMakers["Embra"] = () => {
    return makeCharacter(
        "Embra",
        "Fidchell",
        {
            anthro: {
                height: math.unit(9 + 2/12, "feet"),
                weight: math.unit(270, "lb"),
                name: "Anthro",
                image: {
                    source: "./media/characters/embra/anthro.svg",
                    extra: 200/187 ,
                    bottom: 0.02
                }
            },
            feral: {
                height: math.unit(18 + 8/12, "feet"),
                weight: math.unit(576, "lb"),
                name: "Feral",
                image: {
                    source: "./media/characters/embra/feral.svg",
                    extra: 152/137 ,
                    bottom: 0.037
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

characterMakers["Grottos"] = () => {
    return makeCharacter(
        "Grottos",
        "Fidchell",
        {
            anthro: {
                height: math.unit(10 + 9/12, "feet"),
                weight: math.unit(224, "lb"),
                name: "Anthro",
                image: {
                    source: "./media/characters/grottos/anthro.svg",
                    extra: 350/332 ,
                    bottom: 0.045
                }
            },
            feral: {
                height: math.unit(20 + 7/12, "feet"),
                weight: math.unit(629, "lb"),
                name: "Feral",
                image: {
                    source: "./media/characters/grottos/feral.svg",
                    extra: 207/190 ,
                    bottom: 0.05
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(10 + 9/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Frifna"] = () => {
    return makeCharacter(
        "Frifna",
        "Fidchell",
        {
            anthro: {
                height: math.unit(9 + 6/12, "feet"),
                weight: math.unit(298, "lb"),
                name: "Anthro",
                image: {
                    source: "./media/characters/frifna/anthro.svg",
                    extra: 282/269 ,
                    bottom: 0.015
                }
            },
            feral: {
                height: math.unit(16 + 2/12, "feet"),
                weight: math.unit(624, "lb"),
                name: "Feral",
                image: {
                    source: "./media/characters/frifna/feral.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(9 + 6/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Elise"] = () => {
    return makeCharacter(
        "Elise",
        "Fidchell",
        {
            front: {
                height: math.unit(6 + 2/12, "feet"),
                weight: math.unit(168, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/elise/front.svg",
                    extra: 276/271
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 2/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Glade"] = () => {
    return makeCharacter(
        "Glade",
        "Fidchell",
        {
            front: {
                height: math.unit(5 + 10/12, "feet"),
                weight: math.unit(210, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/glade/front.svg",
                    extra: 258/247 ,
                    bottom: 0.008
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 10/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Rina"] = () => {
    return makeCharacter(
        "Rina",
        "Fidchell",
        {
            front: {
                height: math.unit(5 + 10/12, "feet"),
                weight: math.unit(129, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/rina/front.svg",
                    extra: 266/255 ,
                    bottom: 0.005
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 10/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Veronica"] = () => {
    return makeCharacter(
        "Veronica",
        "Fidchell",
        {
            front: {
                height: math.unit(6 + 1/12, "feet"),
                weight: math.unit(192, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/veronica/front.svg",
                    extra: 319/309 ,
                    bottom: 0.005
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 1/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Braxton"] = () => {
    return makeCharacter(
        "Braxton",
        "jdolbear",
        {
            front: {
                height: math.unit(9 + 3/12, "feet"),
                weight: math.unit(1100, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/braxton/front.svg",
                    extra: 1057/984 ,
                    bottom: 0.05
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(9 + 3/12, "feet")
            },
            {
                name: "Giant",
                height: math.unit(300, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(700, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(6000, "feet")
            },
        ]
    )
};

characterMakers["Blue Feyonics"] = () => {
    return makeCharacter(
        "Blue Feyonics",
        "bluefiremarkii",
        {
            front: {
                height: math.unit(6 + 7/12, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/blue-feyonics/front.svg",
                    extra: 1403/1306 ,
                    bottom: 0.047
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 7/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Maxwell"] = () => {
    return makeCharacter(
        "Maxwell",
        "Ruby_02",
        {
            front: {
                height: math.unit(1.8, "meters"),
                weight: math.unit(60, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/maxwell/front.svg",
                    extra: 2060/1873
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
                height: math.unit(1.8, "meter"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(30, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(10, "km")
            },
        ]
    )
};

characterMakers["Jack"] = () => {
    return makeCharacter(
        "Jack",
        "Jasmith",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/jack/front.svg",
                    extra: 1754/1640,
                    bottom: 0.01
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(80000, "feet"),
                default: true
            },
            {
                name: "Max size",
                height: math.unit(10, "lightyears")
            },
        ]
    )
};

characterMakers["Cafat"] = () => {
    return makeCharacter(
        "Cafat",
        "Dalken",
        {
            upright: {
                height: math.unit(7, "feet"),
                weight: math.unit(170, "lb"),
                name: "Upright",
                image: {
                    source: "./media/characters/cafat/upright.svg",
                    bottom: 0.01
                }
            },
            uprightFull: {
                height: math.unit(7, "feet"),
                weight: math.unit(170, "lb"),
                name: "Upright (Full)",
                image: {
                    source: "./media/characters/cafat/upright-full.svg",
                    bottom: 0.01
                }
            },
            side: {
                height: math.unit(5, "feet"),
                weight: math.unit(150, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/cafat/side.svg"
                }
            },
        },
        [
            {
                name: "Small",
                height: math.unit(7, "feet"),
                default: true
            },
            {
                name: "Large",
                height: math.unit(15.5, "feet")
            },
        ]
    )
};

characterMakers["Verin Raharra"] = () => {
    return makeCharacter(
        "Verin Raharra",
        "Virgo113",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/verin-raharra/front.svg",
                    extra: 5019/4835,
                    bottom: 0.023
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7 + 5/12, "feet"),
                default: true
            },
            {
                name: "Upsized",
                height: math.unit(20, "feet")
            },
        ]
    )
};

characterMakers["Nakata"] = () => {
    return makeCharacter(
        "Nakata",
        "Dalken",
        {
            front: {
                height: math.unit(7, "feet"),
                weight: math.unit(230, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/nakata/front.svg",
                    extra: 1.005,
                    bottom: 0.01
                }
            },
        },
        [
           {
               name: "Normal",
               height: math.unit(7, "feet"),
               default: true
           },
           {
               name: "Big",
               height: math.unit(14, "feet")
           },
           {
               name: "Macro",
               height: math.unit(400, "feet")
           }, 
        ]
    )
};

characterMakers["Lily"] = () => {
    return makeCharacter(
        "Lily",
        "nexcg",
        {
            front: {
                height: math.unit(4.91, "feet"),
                weight: math.unit(100, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/lily/front.svg",
                    extra: 1585/1415,
                    bottom: 0.02
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(4.91, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Sheila"] = () => {
    return makeCharacter(
        "Sheila",
        "Miststalker",
        {
            laying: {
                height: math.unit(4 + 4/12, "feet"),
                weight: math.unit(600, "lb"),
                name: "Laying",
                image: {
                    source: "./media/characters/sheila/laying.svg",
                    extra: 1333/1265,
                    bottom: 0.16
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(4 + 4/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Sax"] = () => {
    return makeCharacter(
        "Sax",
        "Counts-His-Toes",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(190, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/sax/front.svg",
                    extra: 1187/973,
                    bottom: 0.042
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(4, "inches"),
                default: true
            },
        ]
    )
};

characterMakers["Pandora"] = () => {
    return makeCharacter(
        "Pandora",
        "Pandora's Fox",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/pandora/front.svg",
                    extra: 2720/2556,
                    bottom: 0.015
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/pandora/back.svg",
                    extra: 2720/2556,
                    bottom: 0.01
                }
            },
            beans: {
                height: math.unit(6/8, "feet"),
                name: "Beans",
                image: {
                    source: "./media/characters/pandora/beans.svg"
                }
            },
            skirt: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Skirt",
                image: {
                    source: "./media/characters/pandora/skirt.svg",
                    extra: 1622/1525,
                    bottom: 0.015
                }
            },
            hoodie: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Hoodie",
                image: {
                    source: "./media/characters/pandora/hoodie.svg",
                    extra: 1622/1525,
                    bottom: 0.015
                }
            },
            casual: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Casual",
                image: {
                    source: "./media/characters/pandora/casual.svg",
                    extra: 1622/1525,
                    bottom: 0.015
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6, "feet")
            },
            {
                name: "Big Steppy",
                height: math.unit(1, "km"),
                default: true
            },  
        ]
    )
};

characterMakers["Venio Darcony"] = () => {
    return makeCharacter(
        "Venio Darcony",
        "redblackdragon",
        {
            side: {
                height: math.unit(10, "feet"),
                weight: math.unit(800, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/venio-darcony/side.svg",
                    extra: 1373/1003,
                    bottom: 0.037
                }
            },
            front: {
                height: math.unit(19, "feet"),
                weight: math.unit(800, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/venio-darcony/front.svg"
                }
            },
            back: {
                height: math.unit(19, "feet"),
                weight: math.unit(800, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/venio-darcony/back.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(10, "feet")
            },
            {
                name: "Macro",
                height: math.unit(130, "feet"),
                default: true
            },
            {
                name: "Macro+",
                height: math.unit(240, "feet")
            },
        ]
    )
};

characterMakers["Veski"] = () => {
    return makeCharacter(
        "Veski",
        "Veski",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/veski/front.svg",
                    extra: 1299/1225,
                    bottom: 0.04
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/veski/back.svg",
                    extra: 1299/1225,
                    bottom: 0.008
                }
            },
            maw: {
                height: math.unit(1.5 * 1.21, "feet"),
                name: "Maw",
                image: {
                    source: "./media/characters/veski/maw.svg"
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(2, "km"),
                default: true
            },
        ]
    )
};

characterMakers["Isabelle"] = () => {
    return makeCharacter(
        "Isabelle",
        "evilwithin",
        {
            front: {
                height: math.unit(5 + 7/12, "feet"),
                name: "Front",
                image: {
                    source: "./media/characters/isabelle/front.svg",
                    extra: 2130/1976,
                    bottom: 0.05
                }
            },
        },
        [
            {
                name: "Supermicro",
                height: math.unit(10, "micrometers")
            },
            {
                name: "Micro",
                height: math.unit(1, "inch")
            },
            {
                name: "Tiny",
                height: math.unit(5, "inches")
            },
            {
                name: "Standard",
                height: math.unit(5 + 7/12, "inches")
            },   
            {
                name: "Macro",
                height: math.unit(80, "meters"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(250, "meters")
            },
            {
                name: "Gigamacro",
                height: math.unit(5, "km")
            },
            {
                name: "Cosmic",
                height: math.unit(2.5e6, "miles")
            },
        ]
    )
};

characterMakers["Hanzo"] = () => {
    return makeCharacter(
        "Hanzo",
        "dragondruid",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/hanzo/front.svg",
                    extra: 374/344,
                    bottom: 0.02
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(8, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Anna"] = () => {
    return makeCharacter(
        "Anna",
        "dragondruid",
        {
            front: {
                height: math.unit(7, "feet"),
                weight: math.unit(130, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/anna/front.svg",
                    extra: 169/145,
                    bottom: 0.06
                }
            },
            full: {
                height: math.unit(4.96, "feet"),
                weight: math.unit(220, "lb"),
                name: "Full",
                image: {
                    source: "./media/characters/anna/full.svg",
                    extra: 138/114,
                    bottom: 0.15
                }
            },
            tongue: {
                height: math.unit(2.53, "feet"),
                name: "Tongue",
                image: {
                    source: "./media/characters/anna/tongue.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Ian Corvid"] = () => {
    return makeCharacter(
        "Ian Corvid",
        "IanCorvid",
        {
            front: {
                height: math.unit(7, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/ian-corvid/front.svg",
                    extra: 150/142,
                    bottom: 0.02
                }
            },
            back: {
                height: math.unit(7, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/ian-corvid/back.svg",
                    extra: 150/143,
                    bottom: 0.01
                }
            },
            stomping: {
                height: math.unit(7, "feet"),
                weight: math.unit(150, "lb"),
                name: "Stomping",
                image: {
                    source: "./media/characters/ian-corvid/stomping.svg",
                    extra: 76/72
                }
            },
            sitting: {
                height: math.unit(7/1.8, "feet"),
                weight: math.unit(150, "lb"),
                name: "Sitting",
                image: {
                    source: "./media/characters/ian-corvid/sitting.svg",
                    extra: 1400/1269,
                    bottom: 0.15
                }
            },
        },
        [
            {
                name: "Tiny Microw",
                height: math.unit(1, "inch")
            },
            {
                name: "Microw",
                height: math.unit(6, "inches")
            },
            {
                name: "Crow",
                height: math.unit(7 + 1/12, "feet"),
                default: true
            },
            {
                name: "Macrow",
                height: math.unit(176, "feet")
            },
        ]
    )
};

characterMakers["Natalie Kellon"] = () => {
    return makeCharacter(
        "Natalie Kellon",
        "lestrange110",
        {
            front: {
                height: math.unit(5 + 7/12, "feet"),
                weight: math.unit(147, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/natalie-kellon/front.svg",
                    extra: 1214/1141,
                    bottom: 0.02
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(1/16, "inch")
            },
            {
                name: "Tiny",
                height: math.unit(4, "inches")
            },
            {
                name: "Normal",
                height: math.unit(5 + 7/12, "feet"),
                default: true
            },
            {
                name: "Amazon",
                height: math.unit(12, "feet")
            },
            {
                name: "Giantess",
                height: math.unit(160, "meters")
            },
            {
                name: "Titaness",
                height: math.unit(800, "meters")
            },
        ]
    )
};

characterMakers["Alluria"] = () => {
    return makeCharacter(
        "Alluria",
        "Sir--Raptor",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/alluria/front.svg",
                    extra: 806/738,
                    bottom: 0.01
                }
            },
            side: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/alluria/side.svg",
                    extra: 800/750,
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/alluria/back.svg",
                    extra: 806/738,
                }
            },
            frontMaid: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front (Maid)",
                image: {
                    source: "./media/characters/alluria/front-maid.svg",
                    extra: 806/738,
                    bottom: 0.01
                }
            },
            sideMaid: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Side (Maid)",
                image: {
                    source: "./media/characters/alluria/side-maid.svg",
                    extra: 800/750,
                    bottom: 0.005
                }
            },
            backMaid: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back (Maid)",
                image: {
                    source: "./media/characters/alluria/back-maid.svg",
                    extra: 806/738,
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(6, "inches"),
                default: true
            },
        ]
    )
};

characterMakers["Kyle"] = () => {
    return makeCharacter(
        "Kyle",
        "Jasmith",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/kyle/front.svg",
                    extra: 1069/962,
                    bottom: 77.228/1727.45
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(150, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Duncan"] = () => {
    return makeCharacter(
        "Duncan",
        "Duncan",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(300, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/duncan/front.svg",
                    extra: 1650/1482,
                    bottom: 0.05
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

characterMakers["Memory"] = () => {
    return makeCharacter(
        "Memory",
        "boringcactus",
        {
            front: {
                height: math.unit(5 + 4/12, "feet"),
                weight: math.unit(220, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/memory/front.svg",
                    extra: 3641/3545,
                    bottom: 0.03
                }
            },
            back: {
                height: math.unit(5 + 4/12, "feet"),
                weight: math.unit(220, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/memory/back.svg",
                    extra: 3641/3545,
                    bottom: 0.025
                }
            },
            frontSkirt: {
                height: math.unit(5 + 4/12, "feet"),
                weight: math.unit(220, "lb"),
                name: "Front (Skirt)",
                image: {
                    source: "./media/characters/memory/front-skirt.svg",
                    extra: 3641/3545,
                    bottom: 0.03
                }
            },
            frontDress: {
                height: math.unit(5 + 4/12, "feet"),
                weight: math.unit(220, "lb"),
                name: "Front (Dress)",
                image: {
                    source: "./media/characters/memory/front-dress.svg",
                    extra: 3641/3545,
                    bottom: 0.03
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(6, "inches"),
                default: true
            },
            {
                name: "Normal",
                height: math.unit(5 + 4/12, "feet")
            },
        ]
    )
};

characterMakers["Luno"] = () => {
    return makeCharacter(
        "Luno",
        "Jamesy",
        {
            front: {
                height: math.unit(4 + 11/12, "feet"),
                weight: math.unit(100, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/luno/front.svg",
                    extra: 1535/1487,
                    bottom: 0.03
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
                height: math.unit(4 + 11/12, "feet"),
                default: true
            },            
            {
                name: "Macro",
                height: math.unit(300, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(700, "miles")
            },
        ]
    )
};

characterMakers["Jamesy"] = () => {
    return makeCharacter(
        "Jamesy",
        "Jamesy",
        {
            front: {
                height: math.unit(6 + 2/12, "feet"),
                weight: math.unit(170, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/jamesy/front.svg",
                    extra: 440/382,
                    bottom: 0.005
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
                height: math.unit(6 + 2/12, "feet"),
                default: true
            },            
            {
                name: "Macro",
                height: math.unit(300, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(700, "miles")
            },
        ]
    )
};

characterMakers["Mark"] = () => {
    return makeCharacter(
        "Mark",
        "ich",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(160, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/mark/front.svg",
                    extra: 3300/3100,
                    bottom: 136.42/3440.47
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(120, "meters")
            },
            {
                name: "Bigger Macro",
                height: math.unit(350, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(8, "km"),
                default: true
            },
            {
                name: "Continental",
                height: math.unit(4550, "km")
            },
            {
                name: "Planetary",
                height: math.unit(65000, "km")
            },
        ]
    )
};

characterMakers["Mac"] = () => {
    return makeCharacter(
        "Mac",
        "Macroceli",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(400, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/mac/front.svg",
                    extra: 1048/987.7,
                    bottom: 60/1107.6,
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(500, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Bari"] = () => {
    return makeCharacter(
        "Bari",
        "Bariamph",
        {
            front: {
                height: math.unit(5 + 2/12, "feet"),
                weight: math.unit(190, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/bari/front.svg",
                    extra: 3156/2880,
                    bottom: 0.03
                }
            },
            back: {
                height: math.unit(5 + 2/12, "feet"),
                weight: math.unit(190, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/bari/back.svg",
                    extra: 3260/2834,
                    bottom: 0.025
                }
            },
            frontPlush: {
                height: math.unit(5 + 2/12, "feet"),
                weight: math.unit(190, "lb"),
                name: "Front (Plush)",
                image: {
                    source: "./media/characters/bari/front-plush.svg",
                    extra: 1112/1061,
                    bottom: 0.002
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
                height: math.unit(5 + 2/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(20, "feet")
            },
        ]
    )
};

characterMakers["Hunter Misha Raven"] = () => {
    return makeCharacter(
        "Hunter Misha Raven",
        "ashtrek",
        {
            front: {
                height: math.unit(6 + 1/12, "feet"),
                weight: math.unit(275, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/hunter-misha-raven/front.svg"
                }
            },
        },
        [
            {
                name: "Mortal",
                height: math.unit(6 + 1/12, "feet")
            },
            {
                name: "Divine",
                height: math.unit(1.12134e34, "parsecs"),
                default: true
            },
        ]
    )
};

characterMakers["Max Calore"] = () => {
    return makeCharacter(
        "Max Calore",
        "flamestar",
        {
            front: {
                height: math.unit(6 + 3/12, "feet"),
                weight: math.unit(220, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/max-calore/front.svg",
                    extra: 1700/1648,
                    bottom: 0.01
                }
            },
            back: {
                height: math.unit(6 + 3/12, "feet"),
                weight: math.unit(220, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/max-calore/back.svg",
                    extra: 1700/1648,
                    bottom: 0.01
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 3/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Aspen"] = () => {
    return makeCharacter(
        "Aspen",
        "Fidchell",
        {
            side: {
                height: math.unit(2 + 8/12, "feet"),
                weight: math.unit(99, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/aspen/side.svg",
                    extra: 152/138,
                    bottom: 0.032
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(2 + 8/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Sheila (Wolf)"] = () => {
    return makeCharacter(
        "Sheila (Wolf)",
        "Fidchell",
        {
            side: {
                height: math.unit(3 + 2/12, "feet"),
                weight: math.unit(224, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/sheila-wolf/side.svg",
                    extra: 179/166,
                    bottom: 0.03
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(3 + 2/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Michelle"] = () => {
    return makeCharacter(
        "Michelle",
        "Fidchell",
        {
            side: {
                height: math.unit(1 + 9/12, "feet"),
                weight: math.unit(38, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/michelle/side.svg",
                    extra: 147/136.7,
                    bottom: 0.03
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(1 + 9/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Nino"] = () => {
    return makeCharacter(
        "Nino",
        "Fidchell",
        {
            front: {
                height: math.unit(1 + 1/12, "feet"),
                weight: math.unit(18, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/nino/front.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(1 + 1/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Viola"] = () => {
    return makeCharacter(
        "Viola",
        "Fidchell",
        {
            front: {
                height: math.unit(1, "feet"),
                weight: math.unit(16, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/viola/front.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(1, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Atlas"] = () => {
    return makeCharacter(
        "Atlas",
        "Fidchell",
        {
            front: {
                height: math.unit(6 + 5/12, "feet"),
                weight: math.unit(580, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/atlas/front.svg",
                    extra: 298.5/290,
                    bottom: 0.015
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 5/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Davy"] = () => {
    return makeCharacter(
        "Davy",
        "Fidchell",
        {
            side: {
                height: math.unit(1 + 10/12, "feet"),
                weight: math.unit(25, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/davy/side.svg",
                    extra: 200/170,
                    bottom: 0.01
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(1 + 10/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Fiona"] = () => {
    return makeCharacter(
        "Fiona",
        "Fidchell",
        {
            side: {
                height: math.unit(4 + 8/12, "feet"),
                weight: math.unit(166, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/fiona/side.svg",
                    extra: 232/220,
                    bottom: 0.03
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(4 + 8/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Lyla"] = () => {
    return makeCharacter(
        "Lyla",
        "Fidchell",
        {
            front: {
                height: math.unit(2, "feet"),
                weight: math.unit(62, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/lyla/front.svg",
                    bottom: 0.1
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(2, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Perseus"] = () => {
    return makeCharacter(
        "Perseus",
        "Fidchell",
        {
            side: {
                height: math.unit(1.8, "feet"),
                weight: math.unit(44, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/perseus/side.svg",
                    bottom: 0.21
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(1.8, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Remus"] = () => {
    return makeCharacter(
        "Remus",
        "Fidchell",
        {
            side: {
                height: math.unit(4 + 2/12, "feet"),
                weight: math.unit(20, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/remus/side.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(4 + 2/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Raf"] = () => {
    return makeCharacter(
        "Raf",
        "the_raf",
        {
            front: {
                height: math.unit(4 + 11/12, "feet"),
                weight: math.unit(114, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/raf/front.svg",
                    bottom: 0.01
                }
            },
            side: {
                height: math.unit(4 + 11/12, "feet"),
                weight: math.unit(114, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/raf/side.svg",
                    bottom: 0.005
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
                height: math.unit(4 + 11/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(70, "feet")
            },
        ]
    )
};

characterMakers["Liam Einarr"] = () => {
    return makeCharacter(
        "Liam Einarr",
        "LiamEinarr",
        {
            front: {
                height: math.unit(1.5, "meters"),
                weight: math.unit(68, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/liam-einarr/front.svg",
                    extra: 2822/2666
                }
            },
            back: {
                height: math.unit(1.5, "meters"),
                weight: math.unit(68, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/liam-einarr/back.svg",
                    extra: 2822/2666,
                    bottom: 0.015
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(1.5, "meters"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(150, "meters")
            },
            {
                name: "Megamacro",
                height: math.unit(35, "km")
            },
        ]
    )
};

characterMakers["Linda"] = () => {
    return makeCharacter(
        "Linda",
        "Dalken",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(75, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/linda/front.svg",
                    extra: 930/874,
                    bottom: 0.004
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Caylex"] = () => {
    return makeCharacter(
        "Caylex",
        "ArgentVZ",
        {
            front: {
                height: math.unit(6 + 8/12, "feet"),
                weight: math.unit(220, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/caylex/front.svg",
                    extra: 821/772,
                    bottom: 0.07
                }
            },
            back: {
                height: math.unit(6 + 8/12, "feet"),
                weight: math.unit(220, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/caylex/back.svg",
                    extra: 821/772,
                    bottom: 0.022
                }
            },
            hand: {
                height: math.unit(1.25, "feet"),
                name: "Hand",
                image: {
                    source: "./media/characters/caylex/hand.svg"
                }
            },
            foot: {
                height: math.unit(1.6, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/caylex/foot.svg"
                }
            },
            armored: {
                height: math.unit(6 + 8/12, "feet"),
                weight: math.unit(250, "lb"),
                name: "Armored",
                image: {
                    source: "./media/characters/caylex/armored.svg",
                    extra: 1420/1310,
                    bottom: 0.045
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 8/12, "feet"),
                default: true
            },
            {
                name: "Normal+",
                height: math.unit(12, "feet")
            },
        ]
    )
};

characterMakers["Alana"] = () => {
    return makeCharacter(
        "Alana",
        "Adeleide",
        {
            front: {
                height: math.unit(7 + 6/12, "feet"),
                weight: math.unit(288, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/alana/front.svg",
                    extra: 679/653,
                    bottom: 22.5/701
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7 + 6/12, "feet")
            },
            {
                name: "Large",
                height: math.unit(50, "feet")
            },
            {
                name: "Macro",
                height: math.unit(100, "feet"),
                default: true
            },
            {
                name: "Macro+",
                height: math.unit(200, "feet")
            },
        ]
    )
};

characterMakers["Hasani"] = () => {
    return makeCharacter(
        "Hasani",
        "BishopBun",
        {
            front: {
                height: math.unit(6 + 1/12, "feet"),
                weight: math.unit(210, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/hasani/front.svg",
                    extra: 244/232,
                    bottom: 0.01
                }
            },
            back: {
                height: math.unit(6 + 1/12, "feet"),
                weight: math.unit(210, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/hasani/back.svg",
                    extra: 244/232,
                    bottom: 0.01
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 1/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(175, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Nita"] = () => {
    return makeCharacter(
        "Nita",
        "Ich",
        {
            front: {
                height: math.unit(1.82, "meters"),
                weight: math.unit(140, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/nita/front.svg",
                    extra: 2473/2363,
                    bottom: 0.01
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(1.82, "m")
            },
            {
                name: "Macro",
                height: math.unit(300, "m")
            },
            {
                name: "Mistake Canon",
                height: math.unit(0.5, "miles"),
                default: true
            },
            {
                name: "Big Mistake",
                height: math.unit(13, "miles")
            },
            {
                name: "Playing God",
                height: math.unit(2450, "miles")
            },
        ]
    )
};

characterMakers["Shiriko"] = () => {
    return makeCharacter(
        "Shiriko",
        "Shiriko",
        {
            front: {
                height: math.unit(4, "feet"),
                weight: math.unit(120, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/shiriko/front.svg",
                    extra: 195/188
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(4, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Deja"] = () => {
    return makeCharacter(
        "Deja",
        "dejaroo",
        {
            front: {
                height: math.unit(6, "feet"),
                name: "front",
                image: {
                    source: "./media/characters/deja/front.svg",
                    extra: 926/840,
                    bottom: 0.07
                }
            },
        },
        [
            {
                name: "Planck Length",
                height: math.unit(1.6e-35, "meters")
            },
            {
                name: "Normal",
                height: math.unit(30.48, "meters"),
                default: true
            },
            {
                name: "Universal",
                height: math.unit(8.8e26, "meters")
            },
        ]
    )
};

characterMakers["Anima"] = () => {
    return makeCharacter(
        "Anima",
        "Anima",
        {
            side: {
                height: math.unit(8, "feet"),
                weight: math.unit(6300, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/anima/side.svg",
                    bottom: 0.035
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(8, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Bianca"] = () => {
    return makeCharacter(
        "Bianca",
        "Sdocat",
        {
            front: {
                height: math.unit(8, "feet"),
                weight: math.unit(350, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/bianca/front.svg",
                    extra: 234/225,
                    bottom: 0.03
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(8, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Adinia"] = () => {
    return makeCharacter(
        "Adinia",
        "Sdocat",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/adinia/front.svg",
                    extra: 1845/1672,
                    bottom: 0.02
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/adinia/back.svg",
                    extra: 1845/1672,
                    bottom: 0.002
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(11 + 5/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Lykasa"] = () => {
    return makeCharacter(
        "Lykasa",
        "Roxas00137",
        {
            front: {
                height: math.unit(3, "meters"),
                weight: math.unit(200, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/lykasa/front.svg",
                    extra: 1076/976,
                    bottom: 0.06
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(3, "meters")
            },
            {
                name: "Kaiku",
                height: math.unit(120, "meters"),
                default: true
            },
            {
                name: "Mega Kaiju",
                height: math.unit(240, "km")
            },
            {
                name: "Giga Kaiju",
                height: math.unit(400, "megameters")
            },
            {
                name: "Tera Kaiju",
                height: math.unit(800, "gigameters")
            },
            {
                name: "Kaiju Dragon Goddess",
                height: math.unit(26, "zettaparsecs")
            },
        ]
    )
};

characterMakers["Malfaren"] = () => {
    return makeCharacter(
        "Malfaren",
        "Malfaren",
        {
            side: {
                height: math.unit(283/124*6, "feet"),
                weight: math.unit(35000, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/malfaren/side.svg",
                    extra: 2500/1010,
                    bottom: 0.01
                }
            },
            front: {
                height: math.unit(22.36, "feet"),
                weight: math.unit(35000, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/malfaren/front.svg",
                    extra: 1631/1476,
                    bottom: 0.01
                }
            },
            maw: {
                height: math.unit(6.9, "feet"),
                name: "Maw",
                image: {
                    source: "./media/characters/malfaren/maw.svg"
                }
            },
        },
        [
            {
                name: "Big",
                height: math.unit(283/162*6, "feet"),
            },
            {
                name: "Bigger",
                height: math.unit(283/124*6, "feet")
            },
            {
                name: "Massive",
                height: math.unit(283/92*6, "feet"),
                default: true
            },
            {
                name: "👀💦",
                height: math.unit(283/73*6, "feet"),
            },
        ]
    )
};

characterMakers["Kernel"] = () => {
    return makeCharacter(
        "Kernel",
        "KernelDecoy",
        {
            front: {
                height: math.unit(1.7, "m"),
                weight: math.unit(70, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/kernel/front.svg",
                    extra: 222/210,
                    bottom: 0.007
                }
            },
        },
        [
            {
                name: "Nano",
                height: math.unit(17, "micrometers")
            },
            {
                name: "Micro",
                height: math.unit(1.7, "mm")
            },
            {
                name: "Small",
                height: math.unit(1.7, "cm")
            },
            {
                name: "Normal",
                height: math.unit(1.7, "m"),
                default: true
            },
        ]
    )
};

characterMakers["Jayne Folest"] = () => {
    return makeCharacter(
        "Jayne Folest",
        "JayneFolest",
        {
            front: {
                height: math.unit(1.75, "meters"),
                weight: math.unit(65, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/jayne-folest/front.svg",
                    extra: 2115/2007,
                    bottom: 0.02
                }
            },
            back: {
                height: math.unit(1.75, "meters"),
                weight: math.unit(65, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/jayne-folest/back.svg",
                    extra: 2115/2007,
                    bottom: 0.005
                }
            },
            frontClothed: {
                height: math.unit(1.75, "meters"),
                weight: math.unit(65, "kg"),
                name: "Front (Clothed)",
                image: {
                    source: "./media/characters/jayne-folest/front-clothed.svg",
                    extra: 2115/2007,
                    bottom: 0.035
                }
            },
            hand: {
                height: math.unit(1/1.260, "feet"),
                name: "Hand",
                image: {
                    source: "./media/characters/jayne-folest/hand.svg"
                }
            },
            foot: {
                height: math.unit(1/0.918, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/jayne-folest/foot.svg"
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(4, "cm")
            },
            {
                name: "Normal",
                height: math.unit(1.75, "meters")
            },
            {
                name: "Macro",
                height: math.unit(47.5, "meters"),
                default: true
            },
        ]
    )
};

characterMakers["Algier"] = () => {
    return makeCharacter(
        "Algier",
        "Silas",
        {
            front: {
                height: math.unit(180, "cm"),
                weight: math.unit(70, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/algier/front.svg",
                    extra: 596/572,
                    bottom: 0.04
                }
            },
            back: {
                height: math.unit(180, "cm"),
                weight: math.unit(70, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/algier/back.svg",
                    extra: 596/572,
                    bottom: 0.025
                }
            },
            frontdressed: {
                height: math.unit(180, "cm"),
                weight: math.unit(150, "kg"),
                name: "Front-dressed",
                image: {
                    source: "./media/characters/algier/front-dressed.svg",
                    extra: 596/572,
                    bottom: 0.038
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(5, "cm")
            },
            {
                name: "Normal",
                height: math.unit(180, "cm"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(64, "m")
            },
        ]
    )
};

characterMakers["Pretzel"] = () => {
    return makeCharacter(
        "Pretzel",
        "Serpentus",
        {
            upright: {
                height: math.unit(7, "feet"),
                weight: math.unit(300, "lb"),
                name: "Upright",
                image: {
                    source: "./media/characters/pretzel/upright.svg",
                    extra: 534/522,
                    bottom: 0.065
                }
            },
            sprawling: {
                height: math.unit(3.75, "feet"),
                weight: math.unit(300, "lb"),
                name: "Sprawling",
                image: {
                    source: "./media/characters/pretzel/sprawling.svg",
                    extra: 314/281,
                    bottom: 0.1
                }
            },
            tongue: {
                height: math.unit(2, "feet"),
                name: "Tongue",
                image: {
                    source: "./media/characters/pretzel/tongue.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7, "feet"),
                default: true
            },
            {
                name: "Oversized",
                height: math.unit(15, "feet")
            },
            {
                name: "Huge",
                height: math.unit(30, "feet")
            },
            {
                name: "Macro",
                height: math.unit(250, "feet")
            },
        ]
    )
};

characterMakers["Roxi"] = () => {
    return makeCharacter(
        "Roxi",
        "carthusflame",
        {
            sideFront: {
                height: math.unit(5 + 2/12, "feet"),
                weight: math.unit(120, "lb"),
                name: "Front Side",
                image: {
                    source: "./media/characters/roxi/side-front.svg",
                    extra: 2924/2717,
                    bottom: 0.08
                }
            },
            sideBack: {
                height: math.unit(5 + 2/12, "feet"),
                weight: math.unit(120, "lb"),
                name: "Back Side",
                image: {
                    source: "./media/characters/roxi/side-back.svg",
                    extra: 2904/2693,
                    bottom: 0.06
                }
            },
            front: {
                height: math.unit(5 + 2/12, "feet"),
                weight: math.unit(120, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/roxi/front.svg",
                    extra: 2028/1907,
                    bottom: 0.01
                }
            },
            frontAlt: {
                height: math.unit(5 + 2/12, "feet"),
                weight: math.unit(120, "lb"),
                name: "Front (Alt)",
                image: {
                    source: "./media/characters/roxi/front-alt.svg",
                    extra: 1828/1798,
                    bottom: 0.01
                }
            },
            sitting: {
                height: math.unit(2.8, "feet"),
                weight: math.unit(120, "lb"),
                name: "Sitting",
                image: {
                    source: "./media/characters/roxi/sitting.svg",
                    extra: 2660/2462,
                    bottom: 0.1
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 2/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Shadow"] = () => {
    return makeCharacter(
        "Shadow",
        "MKShadowdrake",
        {
            side: {
                height: math.unit(55, "feet"),
                weight: math.unit(153, "tons"),
                name: "Side",
                image: {
                    source: "./media/characters/shadow/side.svg",
                    extra: 701/628,
                    bottom: 0.02
                }
            },
            flying: {
                height: math.unit(145, "feet"),
                weight: math.unit(153, "tons"),
                name: "Flying",
                image: {
                    source: "./media/characters/shadow/flying.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(55, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Marcie"] = () => {
    return makeCharacter(
        "Marcie",
        "Macroceli",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(200, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/marcie/front.svg",
                    extra: 960/876,
                    bottom: 58/1017.87
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(1, "mile"),
                default: true
            },
        ]
    )
};

characterMakers["Kachina"] = () => {
    return makeCharacter(
        "Kachina",
        "Trisha",
        {
            front: {
                height: math.unit(7, "feet"),
                weight: math.unit(200, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/kachina/front.svg",
                    extra: 1290.68/1119,
                    bottom: 36.5/1327.18
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Kash"] = () => {
    return makeCharacter(
        "Kash",
        "4wrz",
        {
            looking: {
                height: math.unit(2, "meters"),
                weight: math.unit(300, "kg"),
                name: "Looking",
                image: {
                    source: "./media/characters/kash/looking.svg",
                    extra: 474/344,
                    bottom: 0.03
                }
            },
            side: {
                height: math.unit(2, "meters"),
                weight: math.unit(300, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/kash/side.svg",
                    extra: 302/251,
                    bottom: 0.03
                }
            },
            front: {
                height: math.unit(2, "meters"),
                weight: math.unit(300, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/kash/front.svg",
                    extra: 495/360,
                    bottom: 0.015
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(2, "meters"),
                default: true
            },
            {
                name: "Big",
                height: math.unit(3, "meters")
            },
            {
                name: "Large",
                height: math.unit(5, "meters")
            },
        ]
    )
};

characterMakers["Lalim"] = () => {
    return makeCharacter(
        "Lalim",
        "Bruyaglovae",
        {
            feeding: {
                height: math.unit(6.7, "feet"),
                weight: math.unit(350, "lb"),
                name: "Feeding",
                image: {
                    source: "./media/characters/lalim/feeding.svg",
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6.7, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["De'Vout"] = () => {
    return makeCharacter(
        "De'Vout",
        "Bruyaglovae",
        {
            front: {
                height: math.unit(9.5, "feet"),
                weight: math.unit(600, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/de'vout/front.svg",
                    extra: 1443/1328,
                    bottom: 0.025
                }
            },
            back: {
                height: math.unit(9.5, "feet"),
                weight: math.unit(600, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/de'vout/back.svg",
                    extra: 1443/1328
                }
            },
            frontDressed: {
                height: math.unit(9.5, "feet"),
                weight: math.unit(600, "lb"),
                name: "Front (Dressed",
                image: {
                    source: "./media/characters/de'vout/front-dressed.svg",
                    extra: 1443/1328,
                    bottom: 0.025
                }
            },
            backDressed: {
                height: math.unit(9.5, "feet"),
                weight: math.unit(600, "lb"),
                name: "Back (Dressed",
                image: {
                    source: "./media/characters/de'vout/back-dressed.svg",
                    extra: 1443/1328
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(9.5, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Talana"] = () => {
    return makeCharacter(
        "Talana",
        "Bruyaglovae",
        {
            front: {
                height: math.unit(8, "feet"),
                weight: math.unit(225, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/talana/front.svg",
                    extra: 1410/1300,
                    bottom: 0.015
                }
            },
            frontDressed: {
                height: math.unit(8, "feet"),
                weight: math.unit(225, "lb"),
                name: "Front (Dressed",
                image: {
                    source: "./media/characters/talana/front-dressed.svg",
                    extra: 1410/1300,
                    bottom: 0.015
                }
            },
        },  
        [
            {
                name: "Normal",
                height: math.unit(8, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Xeauvok"] = () => {
    return makeCharacter(
        "Xeauvok",
        "Bruyaglovae",
        {
            side: {
                height: math.unit(7.2, "feet"),
                weight: math.unit(150, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/xeauvok/side.svg",
                    extra: 1975/1523,
                    bottom: 0.07
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7.2, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Zara"] = () => {
    return makeCharacter(
        "Zara",
        "Dalken",
        {
            side: {
                height: math.unit(10, "feet"),
                weight: math.unit(900, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/zara/side.svg",
                    extra: 504/498
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(10, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Richard (Dragon)"] = () => {
    return makeCharacter(
        "Richard (Dragon)",
        "Xanaomin",
        {
            side: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/richard-dragon/side.svg",
                    extra: 845/340,
                    bottom: 0.017
                }
            },
            maw: {
                height: math.unit(2.97, "feet"),
                name: "Maw",
                image: {
                    source: "./media/characters/richard-dragon/maw.svg"
                }
            },
        },
        [
            
        ]
    )
};

characterMakers["Richard (Smeargle)"] = () => {
    return makeCharacter(
        "Richard (Smeargle)",
        "Xanaomin",
        {
            front: {
                height: math.unit(4, "feet"),
                weight: math.unit(100, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/richard-smeargle/front.svg",
                    extra: 2952/2820,
                    bottom: 0.028
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(4, "feet"),
                default: true
            },
            {
                name: "Dynamax",
                height: math.unit(20, "meters")
            },
        ]
    )
};

characterMakers["Klay"] = () => {
    return makeCharacter(
        "Klay",
        "klaythebat",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(110, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/klay/front.svg",
                    extra: 962/883,
                    bottom: 0.04
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(110, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/klay/back.svg",
                    extra: 962/883
                }
            },
            beans: {
                height: math.unit(1.15, "feet"),
                name: "Beans",
                image: {
                    source: "./media/characters/klay/beans.svg"
                }
            },
        },
        [
            {
                name: "Micro",
                height: math.unit(6, "inches")
            },
            {
                name: "Mini",
                height: math.unit(3, "feet")
            },
            {
                name: "Normal",
                height: math.unit(6, "feet"),
                default: true
            },
            {
                name: "Big",
                height: math.unit(25, "feet")
            },
            {
                name: "Macro",
                height: math.unit(100, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(400, "feet")
            },
        ]
    )
};

characterMakers["Marcus"] = () => {
    return makeCharacter(
        "Marcus",
        "klaythebat",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(160, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/marcus/front.svg",
                    extra: 734/676,
                    bottom: 0.03
                }
            },
        },
        [
            {
                name: "Little",
                height: math.unit(6, "feet")
            },
            {
                name: "Normal",
                height: math.unit(110, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(250, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(1000, "feet")
            },
        ]
    )
};

characterMakers["Claude DelRoute"] = () => {
    return makeCharacter(
        "Claude DelRoute",
        "Claude",
        {
            front: {
                height: math.unit(7, "feet"),
                weight: math.unit(275, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/claude-delroute/front.svg",
                    extra: 230/214,
                    bottom: 0.007
                }
            },
            side: {
                height: math.unit(7, "feet"),
                weight: math.unit(275, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/claude-delroute/side.svg",
                    extra: 222/214,
                    bottom: 0.01
                }
            },
            back: {
                height: math.unit(7, "feet"),
                weight: math.unit(275, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/claude-delroute/back.svg",
                    extra: 230/214,
                    bottom: 0.015
                }
            },
            maw: {
                height: math.unit(0.6407, "meters"),
                name: "Maw",
                image: {
                    source: "./media/characters/claude-delroute/maw.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(7, "feet"),
                default: true
            },
            {
                name: "Lorge",
                height: math.unit(20, "feet")
            },
        ]
    )
};

characterMakers["Dragonien"] = () => {
    return makeCharacter(
        "Dragonien",
        "Dragonien",
        {
            front: {
                height: math.unit(8 + 4/12, "feet"),
                weight: math.unit(600, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/dragonien/front.svg",
                    extra: 100/94,
                    bottom: 3.3/103.3445
                }
            },
            back: {
                height: math.unit(8 + 4/12, "feet"),
                weight: math.unit(600, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/dragonien/back.svg",
                    extra: 776/746,
                    bottom: 6.4/782.0616
                }
            },
            foot: {
                height: math.unit(1.54, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/dragonien/foot.svg",
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(8 + 4/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(200, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(1, "mile")
            },
            {
                name: "Gigamacro",
                height: math.unit(1000, "miles")
            },
        ]
    )
};

characterMakers["Desta"] = () => {
    return makeCharacter(
        "Desta",
        "Desta",
        {
            front: {
                height: math.unit(5 + 2/12, "feet"),
                weight: math.unit(110, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/desta/front.svg",
                    extra: 1482/1417
                }
            },
            side: {
                height: math.unit(5 + 2/12, "feet"),
                weight: math.unit(110, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/desta/side.svg",
                    extra: 2579/2491,
                    bottom: 0.053
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
                height: math.unit(5 + 2/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(62, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(1800, "feet")
            },
        ]
    )
};

characterMakers["Storm Alystar"] = () => {
    return makeCharacter(
        "Storm Alystar",
        "Thunderbum",
        {
            front: {
                height: math.unit(10, "feet"),
                weight: math.unit(700, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/storm-alystar/front.svg",
                    extra: 2112/1898,
                    bottom: 0.034
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
                height: math.unit(10, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(400, "feet")
            },
            {
                name: "Deific",
                height: math.unit(60, "miles")
            },
        ]
    )
};

characterMakers["Ilia"] = () => {
    return makeCharacter(
        "Ilia",
        "IliaVulpine",
        {
            front: {
                height: math.unit(2.35, "meters"),
                weight: math.unit(119, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/ilia/front.svg",
                    extra: 1285/1255,
                    bottom: 0.06
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
                height: math.unit(140, "meters"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(100, "miles")
            },
        ]
    )
};

characterMakers["KingDead"] = () => {
    return makeCharacter(
        "KingDead",
        "KingDead",
        {
            front: {
                height: math.unit(6 + 5/12, "feet"),
                weight: math.unit(190, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/kingdead/front.svg",
                    extra: 1228/1177
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
                height: math.unit(6 + 5/12, "feet")
            },
            {
                name: "Macro",
                height: math.unit(150, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(200, "miles")
            },
        ]
    )
};

characterMakers["Kyrehx"] = () => {
    return makeCharacter(
        "Kyrehx",
        "Kyrehx",
        {
            front: {
                height: math.unit(8, "feet"),
                weight: math.unit(600, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/kyrehx/front.svg",
                    extra: 1195/1095,
                    bottom: 0.034
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
                height: math.unit(8, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(255, "feet")
            },
        ]
    )
};

characterMakers["Xang"] = () => {
    return makeCharacter(
        "Xang",
        "Xangoose",
        {
            front: {
                height: math.unit(0.935 * (6 + 8/12), "feet"),
                weight: math.unit(184, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/xang/front.svg",
                    extra: 845/755
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(0.935 * (6 + 8/12), "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(0.935 * 146, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(0.935 * 3, "miles")
            },
        ]
    )
};

characterMakers["Doc Weardno"] = () => {
    return makeCharacter(
        "Doc Weardno",
        "DrWeardno",
        {
            frontDressed: {
                height: math.unit(5 + 7/12, "feet"),
                weight: math.unit(140, "lb"),
                name: "Front (Dressed)",
                image: {
                    source: "./media/characters/doc-weardno/front-dressed.svg",
                    extra: 263/234
                }
            },
            backDressed: {
                height: math.unit(5 + 7/12, "feet"),
                weight: math.unit(140, "lb"),
                name: "Back (Dressed)",
                image: {
                    source: "./media/characters/doc-weardno/back-dressed.svg",
                    extra: 266/238
                }
            },
            front: {
                height: math.unit(5 + 7/12, "feet"),
                weight: math.unit(140, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/doc-weardno/front.svg",
                    extra: 254/233
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
                height: math.unit(5 + 7/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(25, "feet")
            },
            {
                name: "Megamacro",
                height: math.unit(2, "miles")
            },
        ]
    )
};

characterMakers["Seth Whilst"] = () => {
    return makeCharacter(
        "Seth Whilst",
        "SethWhilst",
        {
            front: {
                height: math.unit(6 + 2/12, "feet"),
                weight: math.unit(153, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/seth-whilst/front.svg",
                    bottom: 0.07
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
                height: math.unit(6 + 2/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Pocket Jabari"] = () => {
    return makeCharacter(
        "Pocket Jabari",
        "PocketJabari",
        {
            front: {
                height: math.unit(3, "inches"),
                weight: math.unit(8, "grams"),
                name: "Front",
                image: {
                    source: "./media/characters/pocket-jabari/front.svg",
                    extra: 1024/974,
                    bottom: 0.039
                }
            },
        },
        [
            {
                name: "Minimicro",
                height: math.unit(8, "mm")
            },
            {
                name: "Micro",
                height: math.unit(3, "inches"),
                default: true
            },
            {
                name: "Normal",
                height: math.unit(3, "feet")
            },
        ]
    )
};

characterMakers["Sapphy"] = () => {
    return makeCharacter(
        "Sapphy",
        "Sapphy",
        {
            front: {
                height: math.unit(15, "feet"),
                weight: math.unit(3280, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/sapphy/front.svg",
                    extra: 671/577,
                    bottom: 0.085
                }
            },
            back: {
                height: math.unit(15, "feet"),
                weight: math.unit(3280, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/sapphy/back.svg",
                    extra: 631/607,
                    bottom: 0.045
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(15, "feet")
            },
            {
                name: "Casual Macro",
                height: math.unit(120, "feet")
            },
            {
                name: "Macro",
                height: math.unit(2150, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(8, "miles")
            },
            {
                name: "Galaxy Mom",
                height: math.unit(6, "megalightyears")
            },
        ]
    )
};

characterMakers["Kiro"] = () => {
    return makeCharacter(
        "Kiro",
        "Keeya",
        {   
             front: {
                 height: math.unit(6, "feet"),
                 weight: math.unit(170, "lb"),
                 name: "Front",
                 image: {
                     source: "./media/characters/kiro/front.svg",
                     extra: 1064/1012,
                     bottom: 0.052
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
                height: math.unit(6, "feet"),
                default: true
            },                
            {
                name: "Macro",
                height: math.unit(72, "feet")
            },
        ]
    )
};

characterMakers["Irishfox"] = () => {
    return makeCharacter(
        "Irishfox",
        "IrishFox",
        {
            front: {
                height: math.unit(5 + 9/12, "feet"),
                weight: math.unit(175, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/irishfox/front.svg",
                    extra: 1912/1680,
                    bottom: 0.02
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
                height: math.unit(5 + 9/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(45, "feet")
            },
        ]
    )
};

characterMakers["Aronai Sieyes"] = () => {
    return makeCharacter(
        "Aronai Sieyes",
        "Aronai",
        {
            front: {
                height: math.unit(6 + 1/12, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/aronai-sieyes/front.svg",
                    extra: 1556/1480,
                    bottom: 0.015
                }
            },
            side: {
                height: math.unit(6 + 1/12, "feet"),
                weight: math.unit(150, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/aronai-sieyes/side.svg",
                    extra: 1433/1390,
                    bottom: 0.0393
                }
            },
            back: {
                height: math.unit(6 + 1/12, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/aronai-sieyes/back.svg",
                    extra: 1544/1494,
                    bottom: 0.02
                }
            },
            frontClothed: {
                height: math.unit(6 + 1/12, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front (Clothed)",
                image: {
                    source: "./media/characters/aronai-sieyes/front-clothed.svg",
                    extra: 1582/1527
                }
            },
            feral: {
                height: math.unit(18, "feet"),
                weight: math.unit(150 * 3 * 3 * 3, "lb"),
                name: "Feral",
                image: {
                    source: "./media/characters/aronai-sieyes/feral.svg",
                    extra: 1530/1240,
                    bottom: 0.035
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(2, "inches")
            },
            {
                name: "Normal",
                height: math.unit(6 + 1/12, "feet"),
                default: true
            }
        ]
    )
};

characterMakers["Xuna"] = () => {
    return makeCharacter(
        "Xuna",
        "Xuna",
        {
            front: {
                height: math.unit(12, "feet"),
                weight: math.unit(410, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/xuna/front.svg",
                    extra: 2184/1980
                }
            },
            side: {
                height: math.unit(12, "feet"),
                weight: math.unit(410, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/xuna/side.svg",
                    extra: 2184/1980
                }
            },
            back: {
                height: math.unit(12, "feet"),
                weight: math.unit(410, "kg"),
                name: "Back",
                image: {
                    source: "./media/characters/xuna/back.svg",
                    extra: 2184/1980
                }
            },
        },
        [
            {
                name: "Nano glow",
                height: math.unit(10, "nm")
            },
            {
                name: "Micro floof",
                height: math.unit(0.3, "m")
            },
            {
                name: "Huggable softy boi",
                height: math.unit(3.6576, "m"),
                default: true
            },
            {
                name: "Admirable floof",
                height: math.unit(80, "meters")
            },
            {
                name: "Gentle macro",
                height: math.unit(300, "meters")
            },
            {
                name: "Very careful floof",
                height: math.unit(3200, "meters")
            },
            {
                name: "The mega floof",
                height: math.unit(36000, "meters")
            },
            {
                name: "Giga-fur-Wicker",
                height: math.unit(4800000, "meters")
            },
            {
                name: "Licky world",
                height: math.unit(20000000, "meters")
            },
            {
                name: "Floofy cyan sun",
                height: math.unit(1500000000, "meters")
            },
            {
                name: "Milky Wicker",
                height: math.unit(1000000000000000000000, "meters")
            },
            {
                name: "The observing Wicker",
                height: math.unit(999999999999999999999999999, "meters")
            },
        ]
    )
};

characterMakers["Arokha Sieyes"] = () => {
    return makeCharacter(
        "Arokha Sieyes",
        "Aronai",
        {
            front: {
                height: math.unit(5 + 9/12, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/arokha-sieyes/front.svg",
                    extra: 1425/1284,
                    bottom: 0.05
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
                height: math.unit(30, "meters"),
                default: true
            },
        ]
    )
};

characterMakers["Arokh Sieyes"] = () => {
    return makeCharacter(
        "Arokh Sieyes",
        "Aronai",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(180, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/arokh-sieyes/front.svg",
                    extra: 1830/1769,
                    bottom: 0.01
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
                height: math.unit(30, "meters"),
                default: true
            },
        ]
    )
};

characterMakers["Goldeneye"] = () => {
    return makeCharacter(
        "Goldeneye",
        "Goldeneye Gryphon",
        {
            side: {
                height: math.unit(13 + 1/12, "feet"),
                weight: math.unit(8.5, "tonnes"),
                name: "Side",
                image: {
                    source: "./media/characters/goldeneye/side.svg",
                    extra: 1182/778,
                    bottom: 0.067
                }
            },
            paw: {
                height: math.unit(3.4, "feet"),
                name: "Paw",
                image: {
                    source: "./media/characters/goldeneye/paw.svg"
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(13 + 1/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Leonardo Lycheborne"] = () => {
    return makeCharacter(
        "Leonardo Lycheborne",
        "Leo",
        {
            front: {
                height: math.unit(6 + 1/12, "feet"),
                weight: math.unit(210, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/leonardo-lycheborne/front.svg",
                    extra: 390/365,
                    bottom: 0.032
                }
            },
            side: {
                height: math.unit(6 + 1/12, "feet"),
                weight: math.unit(210, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/leonardo-lycheborne/side.svg",
                    extra: 390/365,
                    bottom: 0.005
                }
            },
            back: {
                height: math.unit(6 + 1/12, "feet"),
                weight: math.unit(210, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/leonardo-lycheborne/back.svg",
                    extra: 392/366,
                    bottom: 0.01
                }
            },
            hand: {
                height: math.unit(1.08, "feet"),
                name: "Hand",
                image: {
                    source: "./media/characters/leonardo-lycheborne/hand.svg"
                }
            },
            foot: {
                height: math.unit(1.32, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/leonardo-lycheborne/foot.svg"
                }
            },
            were: {
                height: math.unit(20, "feet"),
                weight: math.unit(7800, "lb"),
                name: "Were",
                image: {
                    source: "./media/characters/leonardo-lycheborne/were.svg",
                    extra: 308/294,
                    bottom: 0.048
                }
            },
            feral: {
                height: math.unit(7.5, "feet"),
                weight: math.unit(600, "lb"),
                name: "Feral",
                image: {
                    source: "./media/characters/leonardo-lycheborne/feral.svg",
                    extra: 210/186,
                    bottom: 0.108
                }
            },
            taur: {
                height: math.unit(11, "feet"),
                weight: math.unit(3300, "lb"),
                name: "Taur",
                image: {
                    source: "./media/characters/leonardo-lycheborne/taur.svg",
                    extra: 320/303,
                    bottom: 0.025
                }
            },
            barghest: {
                height: math.unit(11, "feet"),
                weight: math.unit(1300, "lb"),
                name: "Barghest",
                image: {
                    source: "./media/characters/leonardo-lycheborne/barghest.svg",
                    extra: 323/302,
                    bottom: 0.027
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 1/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Jet"] = () => {
    return makeCharacter(
        "Jet",
        "JetHyena",
        {
            front: {
                height: math.unit(10, "feet"),
                weight: math.unit(350, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/jet/front.svg",
                    extra: 2050/1980,
                    bottom: 0.013
                }
            },
            back: {
                height: math.unit(10, "feet"),
                weight: math.unit(350, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/jet/back.svg",
                    extra: 2050/1980,
                    bottom: 0.013
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
                height: math.unit(10, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(100, "feet")
            },
        ]
    )
};

characterMakers["Tanarath"] = () => {
    return makeCharacter(
        "Tanarath",
        "TanarathDragon",
        {
            front: {
                height: math.unit(15, "feet"),
                weight: math.unit(2800, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/tanarath/front.svg",
                    extra: 2392/2220,
                    bottom: 0.03
                }
            },
            back: {
                height: math.unit(15, "feet"),
                weight: math.unit(2800, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/tanarath/back.svg",
                    extra: 2392/2220,
                    bottom: 0.03
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(15, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Patty CattyBatty"] = () => {
    return makeCharacter(
        "Patty CattyBatty",
        "Archangel2100",
        {
            front: {
                height: math.unit(7 + 1/12, "feet"),
                weight: math.unit(175, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/patty-cattybatty/front.svg",
                    extra: 908/874,
                    bottom: 0.025
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
                height: math.unit(7 + 1/12, "feet")
            },
            {
                name: "Mini Macro",
                height: math.unit(155, "feet")
            },
            {
                name: "Macro",
                height: math.unit(1077, "feet")
            },
            {
                name: "Mega Macro",
                height: math.unit(47650, "feet"),
                default: true
            },
            {
                name: "Giga Macro",
                height: math.unit(440, "miles")
            },
            {
                name: "Tera Macro",
                height: math.unit(8700, "miles")
            },
            {
                name: "Planetary Macro",
                height: math.unit(32700, "miles")
            },
            {
                name: "Solar Macro",
                height: math.unit(550000, "miles")
            },
            {
                name: "Celestial Macro",
                height: math.unit(2.5, "AU")
            },
        ]
    )
};

characterMakers["Cappu"] = () => {
    return makeCharacter(
        "Cappu",
        "CappuTheSheep",
        {
            front: {
                height: math.unit(4 + 5/12, "feet"),
                weight: math.unit(90, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/cappu/front.svg",
                    extra: 1247/1152,
                    bottom: 0.012
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(4 + 5/12, "feet"),
                default: true
            },
        ]
    )
};

characterMakers["Sebi"] = () => {
    return makeCharacter(
        "Sebi",
        "DeathyWolfi",
        {
            frontDressed: {
                height: math.unit(70, "cm"),
                weight: math.unit(6, "kg"),
                name: "Front (Dressed)",
                image: {
                    source: "./media/characters/sebi/front-dressed.svg",
                    extra: 713.5/686.5,
                    bottom: 0.003
                }
            },
            front: {
                height: math.unit(70, "cm"),
                weight: math.unit(5, "kg"),
                name: "Front",
                image: {
                    source: "./media/characters/sebi/front.svg",
                    extra: 713.5/686.5,
                    bottom: 0.003
                }
            }
        },
        [
            {
                name: "Normal",
                height: math.unit(70, "cm"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(8, "meters")
            },
        ]
    )
};

characterMakers["Typhek"] = () => {
    return makeCharacter(
        "Typhek",
        "Adam0800",
        {
            front: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/typhek/front.svg",
                    extra: 1948/1929,
                    bottom: 0.025
                }
            },
            side: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/typhek/side.svg",
                    extra: 2034/2010,
                    bottom: 0.003
                }
            },
            back: {
                height: math.unit(6, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/typhek/back.svg",
                    extra: 2005/1978,
                    bottom: 0.004
                }
            },
            palm: {
                height: math.unit(1.2, "feet"),
                name: "Palm",
                image: {
                    source: "./media/characters/typhek/palm.svg"
                }
            },
            fist: {
                height: math.unit(1.1, "feet"),
                name: "Fist",
                image: {
                    source: "./media/characters/typhek/fist.svg"
                }
            },
            foot: {
                height: math.unit(1.57, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/typhek/foot.svg"
                }
            },
            sole: {
                height: math.unit(2.05, "feet"),
                name: "Sole",
                image: {
                    source: "./media/characters/typhek/sole.svg"
                }
            },
        },
        [
            {
                name: "Macro",
                height: math.unit(40, "stories"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(1, "mile")
            },
            {
                name: "Gigamacro",
                height: math.unit(4000, "solarradii")
            },
            {
                name: "Universal",
                height: math.unit(1.1, "universes")
            }
        ]
    )
};

characterMakers["Kassy"] = () => {
    return makeCharacter(
        "Kassy",
        "kclt",
        {
            side: {
                height: math.unit(5 + 7/12, "feet"),
                weight: math.unit(150, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/kassy/side.svg",
                    extra: 1280/1225,
                    bottom: 0.002
                }
            },
            front: {
                height: math.unit(5 + 7/12, "feet"),
                weight: math.unit(150, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/kassy/front.svg",
                    extra: 1280/1225,
                    bottom: 0.025
                }
            },
            back: {
                height: math.unit(5 + 7/12, "feet"),
                weight: math.unit(150, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/kassy/back.svg",
                    extra: 1280/1225,
                    bottom: 0.002
                }
            },
            foot: {
                height: math.unit(1.266, "feet"),
                name: "Foot",
                image: {
                    source: "./media/characters/kassy/foot.svg"
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
                height: math.unit(137, "feet"),
                default: true
            },
            {
                name: "Megamacro",
                height: math.unit(1, "mile")
            },
        ]
    )
};

characterMakers["Neil"] = () => {
    return makeCharacter(
        "Neil",
        "mZmm",
        {
            front: {
                height: math.unit(6 + 1/12, "feet"),
                weight: math.unit(200, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/neil/front.svg",
                    extra: 1326/1250,
                    bottom: 0.023
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 1/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(200, "feet")
            },
        ]
    )
};

characterMakers["Atticus"] = () => {
    return makeCharacter(
        "Atticus",
        "mZmm",
        {
            front: {
                height: math.unit(5 + 9/12, "feet"),
                weight: math.unit(190, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/atticus/front.svg",
                    extra: 2934/2785,
                    bottom: 0.025
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(5 + 9/12, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(180, "feet")
            },
        ]
    )
};

characterMakers["Milo"] = () => {
    return makeCharacter(
        "Milo",
        "mZmm",
        {
            side: {
                height: math.unit(9, "feet"),
                weight: math.unit(650, "lb"),
                name: "Side",
                image: {
                    source: "./media/characters/milo/side.svg",
                    extra: 2644/2310,
                    bottom: 0.032
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(9, "feet"),
                default: true
            },
            {
                name: "Macro",
                height: math.unit(300, "feet")
            },
        ]
    )
};

characterMakers["Ijzer"] = () => {
    return makeCharacter(
        "Ijzer",
        "Ijzer",
        {
            side: {
                height: math.unit(8, "meters"),
                weight: math.unit(90000, "kg"),
                name: "Side",
                image: {
                    source: "./media/characters/ijzer/side.svg",
                    extra: 2756/1600,
                    bottom: 0.01
                }
            },
        },
        [
            {
                name: "Small",
                height: math.unit(3, "meters")
            },
            {
                name: "Normal",
                height: math.unit(8, "meters"),
                default: true
            },
            {
                name: "Normal+",
                height: math.unit(10, "meters")
            },
            {
                name: "Bigger",
                height: math.unit(24, "meters")
            },
            {
                name: "Huge",
                height: math.unit(80, "meters")
            },
        ]
    )
};

characterMakers["Luca Cervicum"] = () => {
    return makeCharacter(
        "Luca Cervicum",
        "Luca Cervicum",
        {
            front: {
                height: math.unit(6 + 2/12, "feet"),
                weight: math.unit(153, "lb"),
                name: "Front",
                image: {
                    source: "./media/characters/luca-cervicum/front.svg",
                    extra: 370/327,
                    bottom: 0.015
                }
            },
            back: {
                height: math.unit(6 + 2/12, "feet"),
                weight: math.unit(153, "lb"),
                name: "Back",
                image: {
                    source: "./media/characters/luca-cervicum/back.svg",
                    extra: 367/333,
                    bottom: 0.005
                }
            },
            frontGear: {
                height: math.unit(6 + 2/12, "feet"),
                weight: math.unit(173, "lb"),
                name: "Front (Gear)",
                image: {
                    source: "./media/characters/luca-cervicum/front-gear.svg",
                    extra: 377/333,
                    bottom: 0.006
                }
            },
        },
        [
            {
                name: "Normal",
                height: math.unit(6 + 2/12, "feet"),
                default: true
            },
        ]
    )
};

//characters

function makeCharacters() {
    const results = [];

    Object.entries(characterMakers).forEach(([key, value]) => {
        results.push({
            name: key,
            constructor: value
        });
    });

    results.push({
        name: "Aigey",
        constructor: makeAigey
    });
    results.push({
        name: "Malik",
        constructor: makeMalik
    });
    results.push({
        name: "Sefer",
        constructor: makeSefer
    });
    return results;
}
