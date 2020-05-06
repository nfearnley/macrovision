const characterMakers = [];

function makeCharacter(info, viewInfo, defaultSizes) {
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

    return createEntityMaker(info, views, defaultSizes);
}

characterMakers.push(() => makeCharacter(
    {
        name: "Fen",
        species: "Crux",
        description: {
            title: "Bio",
            text: "Very furry. Sheds on everything."
        }
    },
    {
        back: {
            height: math.unit(2.2428, "meter"),
            weight: math.unit(124.738, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/fen/back.svg",
                extra: 1025 / 935,
                bottom: 0.01
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
                extra: 563 / 507
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
            height: math.unit(40, "feet"),
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
            height: math.unit(100, "feet"),
            info: {
                description: {
                    mode: "append",
                    text: "\n\nTOO DAMN BIG"
                }
            }
        },
        {
            name: "Macro+",
            height: math.unit(300, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(2, "miles")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sofia Fluttertail" },
    {
        front: {
            height: math.unit(183, "cm"),
            weight: math.unit(80, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/sofia-fluttertail/front.svg",
                bottom: 0.01,
                extra: 2154 / 2081
            }
        },
        frontAlt: {
            height: math.unit(183, "cm"),
            weight: math.unit(80, "kg"),
            name: "Front (alt)",
            image: {
                source: "./media/characters/sofia-fluttertail/front-alt.svg"
            }
        },
        back: {
            height: math.unit(183, "cm"),
            weight: math.unit(80, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/sofia-fluttertail/back.svg"
            }
        },
        kneeling: {
            height: math.unit(125, "cm"),
            weight: math.unit(80, "kg"),
            name: "Kneeling",
            image: {
                source: "./media/characters/sofia-fluttertail/kneeling.svg",
                extra: 1033/977,
                bottom: 23.7/1057
            }
        },
        maw: {
            height: math.unit(183 / 5, "cm"),
            name: "Maw",
            image: {
                source: "./media/characters/sofia-fluttertail/maw.svg"
            }
        },
        mawcloseup: {
            height: math.unit(183 / 5 * 0.41, "cm"),
            name: "Maw (Closeup)",
            image: {
                source: "./media/characters/sofia-fluttertail/maw-closeup.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1.83, "meter")
        },
        {
            name: "Size Thief",
            height: math.unit(18, "feet")
        },
        {
            name: "50 Foot Collie",
            height: math.unit(50, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "March" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Noir" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Okuri" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Manny" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Adake" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Elijah" },
    {
        front: {
            height: math.unit(1.65, "meters"),
            weight: math.unit(50, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/elijah/front.svg",
                extra: 858/830,
                bottom: 95.5/953.8559
            }
        },
        back: {
            height: math.unit(1.65, "meters"),
            weight: math.unit(50, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/elijah/back.svg",
                extra: 895/850,
                bottom: 5.3/897.956
            }
        },
        frontNsfw: {
            height: math.unit(1.65, "meters"),
            weight: math.unit(50, "kg"),
            name: "Front (NSFW)",
            image: {
                source: "./media/characters/elijah/front-nsfw.svg",
                extra: 858/830,
                bottom: 95.5/953.8559
            }
        },
        backNsfw: {
            height: math.unit(1.65, "meters"),
            weight: math.unit(50, "kg"),
            name: "Back (NSFW)",
            image: {
                source: "./media/characters/elijah/back-nsfw.svg",
                extra: 895/850,
                bottom: 5.3/897.956
            }
        },
        dick: {
            height: math.unit(1, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/elijah/dick.svg"
            }
        },
        beakOpen: {
            height: math.unit(1.25, "feet"),
            name: "Beak (Open)",
            image: {
                source: "./media/characters/elijah/beak-open.svg"
            }
        },
        beakShut: {
            height: math.unit(1.25, "feet"),
            name: "Beak (Shut)",
            image: {
                source: "./media/characters/elijah/beak-shut.svg"
            }
        },
        footFlexing: {
            height: math.unit(1.61, "feet"),
            name: "Foot (Flexing)",
            image: {
                source: "./media/characters/elijah/foot-flexing.svg"
            }
        },
        footStepping: {
            height: math.unit(1.44, "feet"),
            name: "Foot (Stepping)",
            image: {
                source: "./media/characters/elijah/foot-stepping.svg"
            }
        },
        plantigradeLeg: {
            height: math.unit(2.34, "feet"),
            name: "Plantigrade Leg",
            image: {
                source: "./media/characters/elijah/plantigrade-leg.svg"
            }
        },
        plantigradeFootLeft: {
            height: math.unit(0.9, "feet"),
            name: "Plantigrade Foot (Left)",
            image: {
                source: "./media/characters/elijah/plantigrade-foot-left.svg"
            }
        },
        plantigradeFootRight: {
            height: math.unit(0.9, "feet"),
            name: "Plantigrade Foot (Right)",
            image: {
                source: "./media/characters/elijah/plantigrade-foot-right.svg"
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
))

characterMakers.push(() => makeCharacter(
    { name: "Rai" },
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
                extra: 1050 / 659,
                bottom: 0.07
            }
        },
        dragon: {
            height: math.unit(23, "feet"),
            weight: math.unit(50000, "lb"),
            name: "Dragon",
            image: {
                source: "./media/characters/rai/dragon.svg",
                extra: 2498/2030,
                bottom: 85.2/2584
            }
        },
        maw: {
            height: math.unit(6 / 3.81416, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Jazzy" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Flamm" },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(80, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/flamm/front.svg",
                extra: 1794 / 1677,
                bottom: 31.7 / 1828.5
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
))

characterMakers.push(() => makeCharacter(
    { name: "Zephiro" },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(80, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/zephiro/front.svg",
                extra: 2309 / 2162,
                bottom: 0.069
            }
        },
        side: {
            height: math.unit(7, "feet"),
            weight: math.unit(80, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/zephiro/side.svg",
                extra: 2403 / 2279,
                bottom: 0.015
            }
        },
        back: {
            height: math.unit(7, "feet"),
            weight: math.unit(80, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/zephiro/back.svg",
                extra: 2373 / 2244,
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
            height: math.unit(5 + 3 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(118, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Fory" },
    {
        front: {
            height: math.unit(5, "feet"),
            weight: math.unit(90, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/fory/front.svg",
                extra: 2862 / 2674,
                bottom: 180 / 3043.8
            }
        },
        back: {
            height: math.unit(5, "feet"),
            weight: math.unit(90, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/fory/back.svg",
                extra: 2962 / 2791,
                bottom: 106 / 3071.8
            }
        },
        foot: {
            height: math.unit(2.14, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/fory/foot.svg"
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
        {
            name: "Megamacro",
            height: math.unit(10, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(5, "earths")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kurrikage" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Shingo" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(75, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/shingo/front.svg",
                extra: 3511 / 3338,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Aigey" },
    {
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(75, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/aigey/side.svg"
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(200, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(100, "miles")
        },
    ]
)


)

characterMakers.push(() => makeCharacter(
    { name: "Natasha" },
    {
        front: {
            height: math.unit(5 + 5 / 12, "feet"),
            weight: math.unit(75, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/natasha/front.svg",
                extra: 859/824,
                bottom: 23/879.6
            }
        },
        frontNsfw: {
            height: math.unit(5 + 5 / 12, "feet"),
            weight: math.unit(75, "kg"),
            name: "Front (NSFW)",
            image: {
                source: "./media/characters/natasha/front-nsfw.svg",
                extra: 859/824,
                bottom: 23/879.6
            }
        },
        frontErect: {
            height: math.unit(5 + 5 / 12, "feet"),
            weight: math.unit(75, "kg"),
            name: "Front (Erect)",
            image: {
                source: "./media/characters/natasha/front-erect.svg",
                extra: 859/824,
                bottom: 23/879.6
            }
        },
        back: {
            height: math.unit(5 + 5 / 12, "feet"),
            weight: math.unit(75, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/natasha/back.svg",
                extra: 887.9/852.6,
                bottom: 9.7/896.4
            }
        },
        backAlt: {
            height: math.unit(5 + 5 / 12, "feet"),
            weight: math.unit(75, "kg"),
            name: "Back (Alt)",
            image: {
                source: "./media/characters/natasha/back-alt.svg",
                extra: 1236.7/1192,
                bottom: 22.3/1258.2
            }
        },
        dick: {
            height: math.unit(1.772, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/natasha/dick.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 5 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Malik" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(75, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/malik/front.svg"
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(75, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/malik/side.svg",
                extra: 1.1539
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(75, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/malik/back.svg"
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(156, "feet"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(1188, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sefer" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(75, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/sefer/front.svg"
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(75, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/sefer/back.svg"
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
))

characterMakers.push(() => makeCharacter(
    { name: "North" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Talan" },
    {

        angled: {
            height: math.unit(4, "meter"),
            weight: math.unit(150, "kg"),
            name: "Angled",
            image: {
                source: "./media/characters/talan/angled-sfw.svg",
                bottom: 29 / 3734
            }
        },
        angledNsfw: {
            height: math.unit(4, "meter"),
            weight: math.unit(150, "kg"),
            name: "Angled (NSFW)",
            image: {
                source: "./media/characters/talan/angled-nsfw.svg",
                bottom: 29 / 3734
            }
        },
        frontNsfw: {
            height: math.unit(4, "meter"),
            weight: math.unit(150, "kg"),
            name: "Front (NSFW)",
            image: {
                source: "./media/characters/talan/front-nsfw.svg",
                bottom: 29 / 3734
            }
        },
        sideNsfw: {
            height: math.unit(4, "meter"),
            weight: math.unit(150, "kg"),
            name: "Side (NSFW)",
            image: {
                source: "./media/characters/talan/side-nsfw.svg",
                bottom: 29 / 3734
            }
        },
        back: {
            height: math.unit(4, "meter"),
            weight: math.unit(150, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/talan/back.svg"
            }
        },
        dickBottom: {
            height: math.unit(0.621, "meter"),
            name: "Dick (Bottom)",
            image: {
                source: "./media/characters/talan/dick-bottom.svg"
            }
        },
        dickTop: {
            height: math.unit(0.621, "meter"),
            name: "Dick (Top)",
            image: {
                source: "./media/characters/talan/dick-top.svg"
            }
        },
        dickSide: {
            height: math.unit(0.305, "meter"),
            name: "Dick (Side)",
            image: {
                source: "./media/characters/talan/dick-side.svg"
            }
        },
        dickFront: {
            height: math.unit(0.305, "meter"),
            name: "Dick (Front)",
            image: {
                source: "./media/characters/talan/dick-front.svg"
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
))

characterMakers.push(() => makeCharacter(
    { name: "Gael'Rathus" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Sosha" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "RuNNoLa" },
    {
        side: {
            height: math.unit(5 + 5 / 12, "feet"),
            weight: math.unit(170, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/runnola/side.svg",
                extra: 741 / 448,
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
            height: math.unit(5 + 5 / 12, "feet"),
            default: true
        },
        {
            name: "Big",
            height: math.unit(10, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kurribird" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Elbial" },
    {
        front: {
            height: math.unit(2, "meter"),
            weight: math.unit(80, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/elbial/front.svg",
                extra: 1643 / 1556,
                bottom: 60.2 / 1696
            }
        },
        side: {
            height: math.unit(2, "meter"),
            weight: math.unit(80, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/elbial/side.svg",
                extra: 1630 / 1565,
                bottom: 71.5 / 1697
            }
        },
        back: {
            height: math.unit(2, "meter"),
            weight: math.unit(80, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/elbial/back.svg",
                extra: 1668 / 1595,
                bottom: 5.6 / 1672
            }
        },
        frontDressed: {
            height: math.unit(2, "meter"),
            weight: math.unit(80, "kg"),
            name: "Front (Dressed)",
            image: {
                source: "./media/characters/elbial/front-dressed.svg",
                extra: 1653 / 1584,
                bottom: 57 / 1708
            }
        },
        genitals: {
            height: math.unit(2 / 3.367, "meter"),
            name: "Genitals",
            image: {
                source: "./media/characters/elbial/genitals.svg"
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
))

characterMakers.push(() => makeCharacter(
    { name: "Noah" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Natalya" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Erestrebah" },
    {
        front: {
            height: math.unit(2, "meter"),
            weight: math.unit(50, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/erestrebah/front.svg",
                extra: 208 / 193,
                bottom: 0.055
            }
        },
        back: {
            height: math.unit(2, "meter"),
            weight: math.unit(50, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/erestrebah/back.svg",
                extra: 1.3
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
))

characterMakers.push(() => makeCharacter(
    { name: "Jennifer" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Kalista" },
    {
        front: {
            height: math.unit(2, "meter"),
            weight: math.unit(50, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/kalista/front.svg",
                extra: 1947 / 1700,
                bottom: 76.6/1412.98
            }
        },
        back: {
            height: math.unit(2, "meter"),
            weight: math.unit(50, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/kalista/back.svg",
                extra: 1366 / 1156,
                bottom: 33.9/1362.78
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
))

characterMakers.push(() => makeCharacter(
    { name: "GiantGrowingVixen" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Napalm" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Asana" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Ebony" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Mountain" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Rick" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Ona" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Mech" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Gregory" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Elory" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Angelpatamon" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Cryae" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Xera" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Nebula" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Abysgar" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Yakuz" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Mirova" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Asana (Mech)" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Ashtrek" },
    {
        front: {
            height: math.unit(2, "meters"),
            weight: math.unit(70, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/ashtrek/front.svg",
                extra: 560 / 524,
                bottom: 0.01
            }
        },
        frontArmor: {
            height: math.unit(2, "meters"),
            weight: math.unit(76, "kg"),
            name: "Front (Armor)",
            image: {
                source: "./media/characters/ashtrek/front-armor.svg",
                extra: 561 / 527,
                bottom: 0.01
            }
        },
        side: {
            height: math.unit(2, "meters"),
            weight: math.unit(70, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/ashtrek/side.svg",
                extra: 1717 / 1609,
                bottom: 0.005
            }
        },
        back: {
            height: math.unit(2, "meters"),
            weight: math.unit(70, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/ashtrek/back.svg",
                extra: 1570 / 1501
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
))

characterMakers.push(() => makeCharacter(
    { name: "Gale" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Draylen" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Chez" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Kaylum" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Geta" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Tyrnn" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Apple" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Vulpes" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(200, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/vulpes/front.svg",
                extra: 573 / 543,
                bottom: 0.033
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(200, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/vulpes/side.svg",
                extra: 573 / 543,
                bottom: 0.01
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(200, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/vulpes/back.svg",
                extra: 573 / 543,
            }
        },
        feet: {
            height: math.unit(1.276, "feet"),
            name: "Feet",
            image: {
                source: "./media/characters/vulpes/feet.svg"
            }
        },
        maw: {
            height: math.unit(1.18, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/vulpes/maw.svg"
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
))

characterMakers.push(() => makeCharacter(
    { name: "Rain Fallen" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(210, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/rain-fallen/front.svg"
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(210, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/rain-fallen/side.svg"
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(210, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/rain-fallen/back.svg"
            }
        },
        feral: {
            height: math.unit(9, "feet"),
            weight: math.unit(700, "lbs"),
            name: "Feral",
            image: {
                source: "./media/characters/rain-fallen/feral.svg"
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
))

characterMakers.push(() => makeCharacter(
    { name: "Zaakira" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Sigvald" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Scott" },
    {
        side: {
            height: math.unit(12, "feet"),
            weight: math.unit(2000, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/scott/side.svg",
                extra: 754/724,
                bottom: 0.069
            }
        },
        upright: {
            height: math.unit(12, "feet"),
            weight: math.unit(2000, "kg"),
            name: "Upright",
            image: {
                source: "./media/characters/scott/upright.svg",
                extra: 3881/3722,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Tobias" },
    {
        side: {
            height: math.unit(8, "meters"),
            weight: math.unit(84755, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/tobias/side.svg",
                extra: 1474 / 1096,
                bottom: 38.9 / 1513.1235
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
))

characterMakers.push(() => makeCharacter(
    { name: "Kieran" },
    {
        front: {
            height: math.unit(5.5, "feet"),
            weight: math.unit(400, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/kieran/front.svg",
                extra: 2694/2364,
                bottom: 217/2908
            }
        },
        side: {
            height: math.unit(5.5, "feet"),
            weight: math.unit(400, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/kieran/side.svg",
                extra: 875/777,
                bottom: 84.6/959
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
))

characterMakers.push(() => makeCharacter(
    { name: "Sanya" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Miranda" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "James" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Heather" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Lukas" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Louise" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Ramona" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Deerpuff" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Vivian" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Prince" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(160, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/prince/front.svg",
                extra: 3400 / 3000
            }
        },
        jumping: {
            height: math.unit(6, "feet"),
            weight: math.unit(160, "lbs"),
            name: "Jumping",
            image: {
                source: "./media/characters/prince/jump.svg",
                extra: 2555 / 2134
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7.75, "feet"),
            default: true
        },
        {
            name: "Not cute",
            height: math.unit(17, "feet")
        },
        {
            name: "I said NOT",
            height: math.unit(91, "feet")
        },
        {
            name: "Please stop",
            height: math.unit(560, "feet")
        },
        {
            name: "What have you done",
            height: math.unit(2200, "feet")
        },
        {
            name: "Deer God",
            height: math.unit(3.6, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Psymon" },
    {
        standing: {
            height: math.unit(6, "feet"),
            weight: math.unit(300, "lbs"),
            name: "Standing",
            image: {
                source: "./media/characters/psymon/standing.svg",
                extra: 1888 / 1810,
                bottom: 0.05
            }
        },
        slithering: {
            height: math.unit(6, "feet"),
            weight: math.unit(300, "lbs"),
            name: "Slithering",
            image: {
                source: "./media/characters/psymon/slithering.svg",
                extra: 1330 / 1224
            }
        },
        slitheringAlt: {
            height: math.unit(6, "feet"),
            weight: math.unit(300, "lbs"),
            name: "Slithering (Alt)",
            image: {
                source: "./media/characters/psymon/slithering-alt.svg",
                extra: 1330 / 1224
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(11.25, "feet"),
            default: true
        },
        {
            name: "Large",
            height: math.unit(27, "feet")
        },
        {
            name: "Giant",
            height: math.unit(87, "feet")
        },
        {
            name: "Macro",
            height: math.unit(365, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(3, "miles")
        },
        {
            name: "World Serpent",
            height: math.unit(8000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Daimos" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/daimos/front.svg",
                extra: 4160 / 3897,
                bottom: 0.021
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
            name: "Big Dog",
            height: math.unit(22, "feet")
        },
        {
            name: "Macro",
            height: math.unit(127, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(3600, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Blake" },
    {
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/blake/side.svg",
                extra: 1212 / 1120,
                bottom: 0.05
            }
        },
        crouched: {
            height: math.unit(6 * 0.57, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Crouched",
            image: {
                source: "./media/characters/blake/crouched.svg",
                extra: 840 / 587,
                bottom: 0.04
            }
        },
        bent: {
            height: math.unit(6 * 0.75, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Bent",
            image: {
                source: "./media/characters/blake/bent.svg",
                extra: 592 / 544,
                bottom: 0.035
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8 + 1 / 6, "feet"),
            default: true
        },
        {
            name: "Big Backside",
            height: math.unit(37, "feet")
        },
        {
            name: "Subway Shredder",
            height: math.unit(72, "feet")
        },
        {
            name: "City Carver",
            height: math.unit(1675, "feet")
        },
        {
            name: "Tectonic Tweaker",
            height: math.unit(2300, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Guisetto" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/guisetto/front.svg",
                extra: 856 / 817,
                bottom: 0.06
            }
        },
        airborne: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Airborne",
            image: {
                source: "./media/characters/guisetto/airborne.svg",
                extra: 584 / 525
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(10 + 11 / 12, "feet"),
            default: true
        },
        {
            name: "Large",
            height: math.unit(35, "feet")
        },
        {
            name: "Macro",
            height: math.unit(475, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Luxor" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/luxor/front.svg",
                extra: 2940 / 2152
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/luxor/back.svg",
                extra: 1083 / 960
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 5 / 6, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Huoyan" },
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
            name: "Chef",
            height: math.unit(9, "feet")
        },
        {
            name: "Normal",
            height: math.unit(65, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(780, "feet")
        },
        {
            name: "Flaming Mountain",
            height: math.unit(4.8, "miles")
        },
        {
            name: "Celestial",
            height: math.unit(765000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Tails" },
    {
        front: {
            height: math.unit(5 + 3 / 4, "feet"),
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
            height: math.unit(5 + 3 / 4, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rainy" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Rainier" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Andy" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Cimmaron" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(210, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/cimmaron/front-sfw.svg",
                extra: 701 / 676,
                bottom: 0.046
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(210, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/cimmaron/back-sfw.svg",
                extra: 701 / 676,
                bottom: 0.046
            }
        },
        frontNsfw: {
            height: math.unit(6, "feet"),
            weight: math.unit(210, "lbs"),
            name: "Front (NSFW)",
            image: {
                source: "./media/characters/cimmaron/front-nsfw.svg",
                extra: 701 / 676,
                bottom: 0.046
            }
        },
        backNsfw: {
            height: math.unit(6, "feet"),
            weight: math.unit(210, "lbs"),
            name: "Back (NSFW)",
            image: {
                source: "./media/characters/cimmaron/back-nsfw.svg",
                extra: 701 / 676,
                bottom: 0.046
            }
        },
        dick: {
            height: math.unit(1.714, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/cimmaron/dick.svg"
            }
        },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Akari Kaen" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(200, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/akari/front.svg",
                extra: 962 / 901,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Cynosura" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(140, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/cynosura/front.svg",
                extra: 896 / 847
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(140, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/cynosura/back.svg",
                extra: 1365 / 1250
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
))

characterMakers.push(() => makeCharacter(
    { name: "Gin" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(170, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/gin/front.svg",
                extra: 1.053,
                bottom: 0.025
            }
        },
        foot: {
            height: math.unit(6 / 4.25, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/gin/foot.svg"
            }
        },
        sole: {
            height: math.unit(6 / 4.40, "feet"),
            name: "Sole",
            image: {
                source: "./media/characters/gin/sole.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(13 + 2/12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Guy" },
    {
        front: {
            height: math.unit(6 + 1 / 6, "feet"),
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
            height: math.unit(6 + 1 / 6, "feet"),
            default: true
        },
        {
            name: "Large",
            height: math.unit(25 + 7 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(60 + 9 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Tiberius" },
    {
        front: {
            height: math.unit(9, "feet"),
            weight: math.unit(800, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/tiberius/front.svg",
                extra: 2295 / 2071
            }
        },
        back: {
            height: math.unit(9, "feet"),
            weight: math.unit(800, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/tiberius/back.svg",
                extra: 2373 / 2160
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
))

characterMakers.push(() => makeCharacter(
    { name: "Surgo" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(600, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/surgo/front.svg",
                extra: 3591 / 2227
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(600, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/surgo/back.svg",
                extra: 3557 / 2228
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
))

characterMakers.push(() => makeCharacter(
    { name: "Cibus" },
    {
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/cibus/side.svg",
                extra: 800 / 400
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
))

characterMakers.push(() => makeCharacter(
    { name: "Nibbles" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Rikky" },
    {
        side: {
            height: math.unit(5 + 1 / 6, "feet"),
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
            height: math.unit(5 + 1 / 6, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Malfressa" },
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
                extra: 2108 / 837,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Jaro" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Rogue" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Piper" },
    {
        front: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(140, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/piper/front.svg",
                extra: 3928 / 3681
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
            height: math.unit(5 + 8 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Gemini" },
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
            height: math.unit(6 / 1.5, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Alicia" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Archy" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Berri" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Lexi" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Martin" },
    {
        front: {
            height: math.unit(1.69, "meters"),
            weight: math.unit(68, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/martin/front.svg",
                extra: 596 / 581
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
))

characterMakers.push(() => makeCharacter(
    { name: "Juno" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Samantha" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Dr. Clay" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Wyvrn Ripsnarl" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Vemus" },
    {
        front: {
            height: math.unit(2, "meters"),
            weight: math.unit(150, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/vemus/front.svg",
                extra: 2384 / 2084,
                bottom: 0.0123
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(3.75, "meters"),
            default: true
        },
        {
            name: "Big",
            height: math.unit(8, "meters")
        },
        {
            name: "Macro",
            height: math.unit(100, "meters")
        },
        {
            name: "Macro+",
            height: math.unit(1500, "meters")
        },
        {
            name: "Stellar",
            height: math.unit(14e8, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Beherit" },
    {
        front: {
            height: math.unit(2, "meters"),
            weight: math.unit(70, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/beherit/front.svg",
                extra: 1408 / 1242
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
))

characterMakers.push(() => makeCharacter(
    { name: "Everett" },
    {
        front: {
            height: math.unit(2, "meters"),
            weight: math.unit(150, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/everett/front.svg",
                extra: 2038 / 1737,
                bottom: 0.03
            }
        },
        paw: {
            height: math.unit(2 / 3.6, "meters"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Rose Lion" },
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
            height: math.unit(2 / 1.4288, "meters"),
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
            height: math.unit(6 + 1 / 6, "feet")
        },
        {
            name: "Mini-Macro",
            height: math.unit(9 + 10 / 12, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Regal" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Opal" },
    {
        front: {
            height: math.unit(4 + 11 / 12, "feet"),
            weight: math.unit(100, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/opal/front.svg"
            }
        },
        frontAlt: {
            height: math.unit(4 + 11 / 12, "feet"),
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
            height: math.unit(4 + 11 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Vector Wuff" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Dannik" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Azura Saharah" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Kennedy" },
    {
        side: {
            height: math.unit(5 + 4 / 12, "feet"),
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
            height: math.unit(5 + 4 / 12, "feet")
        },
        {
            name: "Big Doggo",
            height: math.unit(25 + 3 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Odi Lunar" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Mandake" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Yozey" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Valeska Voss" },
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
            height: math.unit(5 + 2 / 12, "foot"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Gene Zeta" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Razinox" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(350, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/razinox/front.svg",
                extra: 1686 / 1548
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(350, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/razinox/back.svg",
                extra: 1660 / 1590
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(10 + 8 / 12, "foot")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Cobalt" },
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
            height: math.unit(8 + 1 / 12, "foot")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Amanda" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Teal" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Ravin Amulet" },
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
            height: math.unit(6 * 1.2, "feet"),
            weight: math.unit(225, "lbs"),
            name: "Front (Werewolf)",
            image: {
                source: "./media/characters/ravin-amulet/front-werewolf.svg"
            }
        },
        backWerewolf: {
            height: math.unit(6 * 1.2, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Fluoresce" },
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
            height: math.unit(5 + 7 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Aurora" },
    {
        front: {
            height: math.unit(9 + 6 / 12, "feet"),
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
            height: math.unit(9 + 6 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Ranek" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Andrew Cooper" },
    {
        front: {
            height: math.unit(5 + 6 / 12, "feet"),
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
            height: math.unit(5 + 6 / 12, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Akane Sato" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/akane-sato/front.svg",
                extra: 1219 / 1140
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/akane-sato/back.svg",
                extra: 1219 / 1170
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
))

characterMakers.push(() => makeCharacter(
    { name: "Rook" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(65, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/rook/front.svg",
                extra: 960/950
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
))

characterMakers.push(() => makeCharacter(
    { name: "Prodigy" },
    {
        front: {
            height: math.unit(12 + 2 / 12, "feet"),
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
            height: math.unit(12 + 2 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Daniel" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Chiros" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(88, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/chiros/front.svg",
                extra: 306 / 226
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(88, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/chiros/side.svg",
                extra: 306 / 226
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
))

characterMakers.push(() => makeCharacter(
    { name: "Selka" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(100, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/selka/front.svg",
                extra: 947 / 887
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
))

characterMakers.push(() => makeCharacter(
    { name: "Verin" },
    {
        front: {
            height: math.unit(8 + 3 / 12, "feet"),
            weight: math.unit(424, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/verin/front.svg",
                extra: 1845 / 1550
            }
        },
        frontArmored: {
            height: math.unit(8 + 3 / 12, "feet"),
            weight: math.unit(424, "lbs"),
            name: "Front (Armored)",
            image: {
                source: "./media/characters/verin/front-armor.svg",
                extra: 1845 / 1550,
                bottom: 0.01
            }
        },
        back: {
            height: math.unit(8 + 3 / 12, "feet"),
            weight: math.unit(424, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/verin/back.svg",
                bottom: 0.1,
                extra: 1
            }
        },
        foot: {
            height: math.unit((8 + 3 / 12) / 4.7, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/verin/foot.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8 + 3 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Sovrim Terraquian" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Reece Silvermane" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Kane" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(78, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/kane/front.svg",
                extra: 978 / 899
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
))

characterMakers.push(() => makeCharacter(
    { name: "Tegon" },
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
            height: math.unit(6 + 3 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Arcturax" },
    {
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(2304, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/arcturax/side.svg",
                extra: 790 / 376,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Sentri" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(50, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/sentri/front.svg",
                extra: 1750 / 1570,
                bottom: 0.025
            }
        },
        frontAlt: {
            height: math.unit(6, "feet"),
            weight: math.unit(50, "lbs"),
            name: "Front (Alt)",
            image: {
                source: "./media/characters/sentri/front-alt.svg",
                extra: 1750 / 1570,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Corvin" },
    {
        front: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(130, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/corvin/front.svg",
                extra: 1803 / 1629
            }
        },
        frontShirt: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(130, "lbs"),
            name: "Front (Shirt)",
            image: {
                source: "./media/characters/corvin/front-shirt.svg",
                extra: 1803 / 1629
            }
        },
        frontPoncho: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(130, "lbs"),
            name: "Front (Poncho)",
            image: {
                source: "./media/characters/corvin/front-poncho.svg",
                extra: 1803 / 1629
            }
        },
        side: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(130, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/corvin/side.svg",
                extra: 1012 / 945
            }
        },
        back: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(130, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/corvin/back.svg",
                extra: 1803 / 1629
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
            height: math.unit(5 + 8 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Q" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(135, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/q/front.svg",
                extra: 854 / 752,
                bottom: 0.005
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(130, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/q/back.svg",
                extra: 854 / 752
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
))

characterMakers.push(() => makeCharacter(
    { name: "Carley" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/carley/front.svg",
                extra: 3927 / 3540,
                bottom: 0.03
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 3 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Citrine" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Aura Starwind" },
    {
        front: {
            height: math.unit(14, "feet"),
            weight: math.unit(1450, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/aura-starwind/front.svg",
                extra: 1455 / 1335
            }
        },
        side: {
            height: math.unit(14, "feet"),
            weight: math.unit(1450, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/aura-starwind/side.svg",
                extra: 1654 / 1497
            }
        },
        taur: {
            height: math.unit(18, "feet"),
            weight: math.unit(5500, "kg"),
            name: "Taur",
            image: {
                source: "./media/characters/aura-starwind/taur.svg",
                extra: 1760 / 1650
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
))

characterMakers.push(() => makeCharacter(
    { name: "Rivet" },
    {
        front: {
            height: math.unit(2 + 7 / 12, "feet"),
            weight: math.unit(32, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/rivet/front.svg",
                extra: 1716 / 1658,
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
            height: math.unit(2 + 7 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Coffee" },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(150, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/coffee/front.svg",
                extra: 3666 / 3032,
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
            height: math.unit(5 + 9 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Chari-Gal" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(200, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/chari-gal/front.svg",
                extra: 1568 / 1385,
                bottom: 0.047
            }
        },
        gigantamax: {
            height: math.unit(6 * 16, "feet"),
            weight: math.unit(200 * 16 * 16 * 16, "lbs"),
            name: "Gigantamax",
            image: {
                source: "./media/characters/chari-gal/gigantamax.svg",
                extra: 1124 / 888,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 7 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(200, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Nova" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/nova/front.svg",
                extra: 5000 / 4722,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Argent" },
    {
        front: {
            height: math.unit(3 + 1 / 12, "feet"),
            weight: math.unit(21.7, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/argent/front.svg",
                extra: 1565 / 1416,
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
            height: math.unit(3 + 1 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(120, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mira al-Cul" },
    {
        lamp: {
            height: math.unit(7 * 1559 / 989, "feet"),
            name: "Magic Lamp",
            image: {
                source: "./media/characters/mira-al-cul/lamp.svg",
                extra: 1617 / 1559
            }
        },
        front: {
            height: math.unit(7, "feet"),
            name: "Front",
            image: {
                source: "./media/characters/mira-al-cul/front.svg",
                extra: 1044 / 990
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
))

characterMakers.push(() => makeCharacter(
    { name: "Kuro-shi Uchū" },
    {
        front: {
            height: math.unit(17 + 1 / 12, "feet"),
            weight: math.unit(476.2 * 5, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/kuro-shi-uchū/front.svg",
                extra: 2329 / 1835,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Katherine" },
    {
        front: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(120, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/katherine/front.svg",
                extra: 2075 / 1969
            }
        },
        dress: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(120, "lbs"),
            name: "Dress",
            image: {
                source: "./media/characters/katherine/dress.svg",
                extra: 2258 / 2064
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
            height: math.unit(5 + 2 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Yevis" },
    {
        front: {
            height: math.unit(7 + 8 / 12, "feet"),
            weight: math.unit(250, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/yevis/front.svg",
                extra: 1938 / 1755
            }
        }
    },
    [
        {
            name: "Mortal",
            height: math.unit(7 + 8 / 12, "feet")
        },
        {
            name: "Battle",
            height: math.unit(25 + 11 / 12, "feet")
        },
        {
            name: "Wrath",
            height: math.unit(1654 + 11 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Xavier" },
    {
        front: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(63, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/xavier/front.svg",
                extra: 944 / 883
            }
        },
        frontStretch: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(63, "kg"),
            name: "Stretching",
            image: {
                source: "./media/characters/xavier/front-stretch.svg",
                extra: 962 / 820
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 8 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Joshii" },
    {
        front: {
            height: math.unit(5 + 5 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/joshii/front.svg"
            }
        },
        foot: {
            height: math.unit((5 + 5 / 12) * 0.1676, "feet"),
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
            height: math.unit(5 + 5 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Goddess Elizabeth" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/goddess-elizabeth/front.svg",
                extra: 1800 / 1525,
                bottom: 0.005
            }
        },
        foot: {
            height: math.unit(6 * 0.25436 * 1800 / 1525 / 2, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/goddess-elizabeth/foot.svg"
            }
        },
        mouth: {
            height: math.unit(6, "feet"),
            name: "Mouth",
            image: {
                source: "./media/characters/goddess-elizabeth/mouth.svg"
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
))

characterMakers.push(() => makeCharacter(
    { name: "Kara" },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(144, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kara/front.svg"
            }
        },
        feet: {
            height: math.unit(6 / 6.765, "feet"),
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
            height: math.unit(5 + 9 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(174, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Tyrone" },
    {
        front: {
            height: math.unit(18, "feet"),
            weight: math.unit(4050, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/tyrone/front.svg",
                extra: 2520 / 2402,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Danny" },
    {
        front: {
            height: math.unit(7 + 8 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/danny/front.svg",
                extra: 1490 / 1350
            }
        },
        back: {
            height: math.unit(7 + 8 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/danny/back.svg",
                extra: 1490 / 1350
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 8 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mallow" },
    {
        front: {
            height: math.unit(3.5, "inches"),
            weight: math.unit(19, "grams"),
            name: "Front",
            image: {
                source: "./media/characters/mallow/front.svg",
                extra: 471 / 431
            }
        },
        back: {
            height: math.unit(3.5, "inches"),
            weight: math.unit(19, "grams"),
            name: "Back",
            image: {
                source: "./media/characters/mallow/back.svg",
                extra: 471 / 431
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
))

characterMakers.push(() => makeCharacter(
    { name: "Starry Aqua" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Luka" },
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
            height: math.unit(12 + 8 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Natalie Nightring" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Danni Rosie" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/danni-rosie/front.svg",
                extra: 1260 / 1128,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Samantha Kruse" },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/samantha-kruse/front.svg",
                extra: (985 / 935),
                bottom: 0.03
            }
        },
        frontUndressed: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Front (Undressed)",
            image: {
                source: "./media/characters/samantha-kruse/front-undressed.svg",
                extra: (973 / 923),
                bottom: 0.025
            }
        },
        fat: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(900, "lb"),
            name: "Front (Fat)",
            image: {
                source: "./media/characters/samantha-kruse/fat.svg",
                extra: 2688 / 2561
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Amelia Rosie" },
    {
        back: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(4963, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/amelia-rosie/back.svg",
                extra: 1113 / 963,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Level 0",
            height: math.unit(5 + 4 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Rook Kitara" },
    {
        front: {
            height: math.unit(5 + 11 / 12, "feet"),
            weight: math.unit(65, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/rook-kitara/front.svg",
                extra: 1347 / 1274,
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
            height: math.unit(5 + 11 / 12, "feet"),
            default: true
        },
        {
            name: "How Did This Happen",
            height: math.unit(80, "miles")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Pisces" },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(300, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/pisces/front.svg",
                extra: 2255 / 2115,
                bottom: 0.03
            }
        },
        back: {
            height: math.unit(7, "feet"),
            weight: math.unit(300, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/pisces/back.svg",
                extra: 2146 / 2055,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Zelas" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Talbot" },
    {
        front: {
            height: math.unit(1, "inch"),
            weight: math.unit(0.21, "grams"),
            name: "Front",
            image: {
                source: "./media/characters/talbot/front.svg",
                extra: 594 / 544
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
))

characterMakers.push(() => makeCharacter(
    { name: "Fliss" },
    {
        front: {
            height: math.unit(3 + 3 / 12, "feet"),
            weight: math.unit(51.8, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/fliss/front.svg",
                extra: 840 / 640
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
            height: math.unit(3 + 3 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Fleta" },
    {
        front: {
            height: math.unit(5, "cm"),
            weight: math.unit(1.94, "g"),
            name: "Front",
            image: {
                source: "./media/characters/fleta/front.svg",
                extra: 835 / 803
            }
        },
        back: {
            height: math.unit(5, "cm"),
            weight: math.unit(1.94, "g"),
            name: "Back",
            image: {
                source: "./media/characters/fleta/back.svg",
                extra: 835 / 803
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
))

characterMakers.push(() => makeCharacter(
    { name: "Dominic" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(225, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/dominic/front.svg",
                extra: 1770 / 1620,
                bottom: 0.025
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(225, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/dominic/back.svg",
                extra: 1745 / 1620,
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
            height: math.unit(6 + 4 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Major Colonel" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Axel Lycan" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Vanrel (Hyena)" },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(175, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/vanrel-hyena/front.svg",
                extra: 1086 / 1010,
                bottom: 0.04
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Abbott Absol" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(103, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/abbott-absol/front.svg",
                extra: 2010 / 1842
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
))

characterMakers.push(() => makeCharacter(
    { name: "Hector" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(264, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/hector/front.svg",
                extra: 2280 / 2130,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Sal" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sal/front.svg",
                extra: 1846 / 1699,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Ranger" },
    {
        front: {
            height: math.unit(3, "meters"),
            weight: math.unit(450, "kg"),
            name: "front",
            image: {
                source: "./media/characters/ranger/front.svg",
                extra: 2401 / 2243,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Theresa" },
    {
        front: {
            height: math.unit(14, "feet"),
            weight: math.unit(800, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/theresa/front.svg",
                extra: 3575 / 3346,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Ine" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(3, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/ine/front.svg",
                extra: 678 / 539,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Vial" },
    {
        front: {
            height: math.unit(5, "feet"),
            weight: math.unit(30, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/vial/front.svg",
                extra: 1365 / 1277,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Rovoska" },
    {
        side: {
            height: math.unit(3.4, "meters"),
            weight: math.unit(1000, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/rovoska/side.svg",
                extra: 4403 / 1515
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
))

characterMakers.push(() => makeCharacter(
    { name: "Gunner Rotthbauer" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Allatia" },
    {
        front: {
            height: math.unit(5 + 5 / 12, "feet"),
            weight: math.unit(140, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/allatia/front.svg",
                extra: 1227 / 1180,
                bottom: 0.027
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 5 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Tene" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/tene/front.svg",
                extra: 1728 / 1578,
                bottom: 0.022
            }
        },
        stomping: {
            height: math.unit(2.025, "meters"),
            weight: math.unit(120, "lb"),
            name: "Stomping",
            image: {
                source: "./media/characters/tene/stomping.svg",
                extra: 938 / 873,
                bottom: 0.01
            }
        },
        sitting: {
            height: math.unit(1, "meter"),
            weight: math.unit(120, "lb"),
            name: "Sitting",
            image: {
                source: "./media/characters/tene/sitting.svg",
                extra: 437 / 415,
                bottom: 0.1
            }
        },
        feral: {
            height: math.unit(3.9, "feet"),
            weight: math.unit(250, "lb"),
            name: "Feral",
            image: {
                source: "./media/characters/tene/feral.svg",
                extra: 717 / 458,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Evander" },
    {
        side: {
            height: math.unit(6, "feet"),
            name: "Side",
            image: {
                source: "./media/characters/evander/side.svg",
                extra: 877 / 477
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
))

characterMakers.push(() => makeCharacter(
    { name: "Ka'Tamra \"Spaz\" Ci'Karan" },
    {
        front: {
            height: math.unit(12, "feet"),
            weight: math.unit(1000, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ka'tamra-spaz-ci'karan/front.svg",
                extra: 1762 / 1611
            }
        },
        back: {
            height: math.unit(12, "feet"),
            weight: math.unit(1000, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/ka'tamra-spaz-ci'karan/back.svg",
                extra: 1762 / 1611
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
))

characterMakers.push(() => makeCharacter(
    { name: "Zero Alurus" },
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
            height: math.unit(5 + 10 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Mega Shi" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(200, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mega-shi/front.svg",
                extra: 1279 / 1250,
                bottom: 0.02
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(200, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/mega-shi/back.svg",
                extra: 1279 / 1250,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(16 + 6 / 12, "feet")
        },
        {
            name: "Third Dimension",
            height: math.unit(40, "meters")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Odyssey" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/odyssey/front.svg",
                extra: 1782 / 1582,
                bottom: 0.01
            }
        },
        side: {
            height: math.unit(5.7, "feet"),
            weight: math.unit(140, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/odyssey/side.svg",
                extra: 6462 / 5700
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 4 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Mekuto" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(300, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mekuto/front.svg",
                extra: 921 / 832,
                bottom: 0.03
            }
        },
        hand: {
            height: math.unit(6 / 10.24, "feet"),
            name: "Hand",
            image: {
                source: "./media/characters/mekuto/hand.svg"
            }
        },
        foot: {
            height: math.unit(6 / 5.05, "feet"),
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
            height: math.unit(5 + 11 / 12, "feet"),
            default: true
        },
        {
            name: "Minimacro",
            height: math.unit(17 + 9 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Dafydd Tomos" },
    {
        front: {
            height: math.unit(6.5, "inches"),
            weight: math.unit(13, "oz"),
            name: "Front",
            image: {
                source: "./media/characters/dafydd-tomos/front.svg",
                extra: 2990 / 2603,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Splinter" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/splinter/front.svg",
                extra: 2990 / 2882,
                bottom: 0.04
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/splinter/back.svg",
                extra: 2990 / 2882,
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
))

characterMakers.push(() => makeCharacter(
    { name: "SnowGabumon" },
    {
        front: {
            height: math.unit(4 + 10 / 12, "feet"),
            weight: math.unit(480, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/snow-gabumon/front.svg",
                extra: 1140 / 963,
                bottom: 0.058
            }
        },
        back: {
            height: math.unit(4 + 10 / 12, "feet"),
            weight: math.unit(480, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/snow-gabumon/back.svg",
                extra: 1115 / 962,
                bottom: 0.041
            }
        },
        frontUndresed: {
            height: math.unit(4 + 10 / 12, "feet"),
            weight: math.unit(480, "lb"),
            name: "Front (Undressed)",
            image: {
                source: "./media/characters/snow-gabumon/front-undressed.svg",
                extra: 1061 / 960,
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
            height: math.unit(4 + 10 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Moody" },
    {
        front: {
            height: math.unit(1.7, "meters"),
            weight: math.unit(140, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/moody/front.svg",
                extra: 3226 / 3007,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Zyas" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/zyas/front.svg",
                extra: 1180 / 1120,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Cuon" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/cuon/front.svg",
                extra: 1390 / 1320,
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
            height: math.unit(18 + 9 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Nyanuxk" },
    {
        front: {
            height: math.unit(2.4, "meters"),
            weight: math.unit(70, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/nyanuxk/front.svg",
                extra: 1172 / 1084,
                bottom: 0.065
            }
        },
        side: {
            height: math.unit(2.4, "meters"),
            weight: math.unit(70, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/nyanuxk/side.svg",
                extra: 1190 / 1132,
                bottom: 0.007
            }
        },
        back: {
            height: math.unit(2.4, "meters"),
            weight: math.unit(70, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/nyanuxk/back.svg",
                extra: 1200 / 1141,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Ailbhe" },
    {
        side: {
            height: math.unit(6, "feet"),
            name: "Side",
            image: {
                source: "./media/characters/ailbhe/side.svg",
                extra: 757 / 464,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Zevulfius" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/zevulfius/front.svg",
                extra: 965 / 903
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/zevulfius/side.svg",
                extra: 939 / 900
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/zevulfius/back.svg",
                extra: 918 / 854,
                bottom: 0.005
            }
        },
        foot: {
            height: math.unit(6 / 3.72, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Rikes" },
    {
        front: {
            height: math.unit(100, "feet"),
            weight: math.unit(350, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/rikes/front.svg",
                extra: 1565 / 1483,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Adam Silver-Mane" },
    {
        anthro: {
            height: math.unit(8, "feet"),
            weight: math.unit(120, "kg"),
            name: "Anthro",
            image: {
                source: "./media/characters/adam-silver-mane/anthro.svg",
                extra: 5743 / 5339,
                bottom: 0.07
            }
        },
        taur: {
            height: math.unit(16, "feet"),
            weight: math.unit(1500, "kg"),
            name: "Taur",
            image: {
                source: "./media/characters/adam-silver-mane/taur.svg",
                extra: 1713 / 1571,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Ky'owin" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ky'owin/front.svg",
                extra: 3888 / 3068,
                bottom: 0.015
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 8 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Mal" },
    {
        front: {
            height: math.unit(4, "feet"),
            weight: math.unit(50, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mal/front.svg",
                extra: 785 / 724,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Jordan Deware" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/jordan-deware/front.svg",
                extra: 1191 / 1012
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
))

characterMakers.push(() => makeCharacter(
    { name: "Kimiko" },
    {
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/kimiko/side.svg",
                extra: 600 / 358
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
))

characterMakers.push(() => makeCharacter(
    { name: "Andrew Sleepy" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Judio" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/judio/front.svg",
                extra: 1258 / 1110
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 6 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Nomaxice" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(68, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/nomaxice/front.svg",
                extra: 1498 / 1073,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Dydros" },
    {
        front: {
            height: math.unit(12, "feet"),
            weight: math.unit(1.5, "tons"),
            name: "Front",
            image: {
                source: "./media/characters/dydros/front.svg",
                extra: 863 / 800,
                bottom: 0.015
            }
        },
        back: {
            height: math.unit(12, "feet"),
            weight: math.unit(1.5, "tons"),
            name: "Back",
            image: {
                source: "./media/characters/dydros/back.svg",
                extra: 900 / 843,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Riggi" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(100, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/riggi/front.svg",
                extra: 5787 / 5303
            }
        },
        hyper: {
            height: math.unit(6 * 5 / 3, "feet"),
            weight: math.unit(400 * 5 / 3 * 5 / 3 * 5 / 3, "kg"),
            name: "Hyper",
            image: {
                source: "./media/characters/riggi/hyper.svg",
                extra: 3595 / 3485
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
))

characterMakers.push(() => makeCharacter(
    { name: "Alexi" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(250, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/alexi/front.svg",
                extra: 3483 / 3291,
                bottom: 0.04
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(250, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/alexi/back.svg",
                extra: 3533 / 3356,
                bottom: 0.021
            }
        },
        frontTransformed: {
            height: math.unit(12.5, "feet"),
            weight: math.unit(4000, "lb"),
            name: "Front (Transformed)",
            image: {
                source: "./media/characters/alexi/front-transformed.svg",
                extra: 5345 / 5100,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Kayroo" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kayroo/front.svg",
                extra: 1153 / 1038,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Rhys" },
    {
        front: {
            height: math.unit(18, "feet"),
            weight: math.unit(5800, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/rhys/front.svg",
                extra: 3386 / 3090,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Toto" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "King" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Cordite" },
    {
        anthro: {
            height: math.unit(6 + 5 / 12, "feet"),
            weight: math.unit(280, "lb"),
            name: "Anthro",
            image: {
                source: "./media/characters/cordite/anthro.svg",
                extra: 1986 / 1905,
                bottom: 0.025
            }
        },
        feral: {
            height: math.unit(2, "feet"),
            weight: math.unit(90, "lb"),
            name: "Feral",
            image: {
                source: "./media/characters/cordite/feral.svg",
                extra: 1260 / 755,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Pianostrong" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/pianostrong/front.svg",
                extra: 6577 / 6254,
                bottom: 0.02
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/pianostrong/side.svg",
                extra: 6106 / 5730
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/pianostrong/back.svg",
                extra: 6085 / 5733,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Kona" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kona/front.svg",
                extra: 2960 / 2629,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(11 + 8 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Levi" },
    {
        side: {
            height: math.unit(1.9, "meters"),
            weight: math.unit(326, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/levi/side.svg",
                extra: 1704 / 1334,
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
))

characterMakers.push(() => makeCharacter(
    { name: "BMC" },
    {
        front: {
            height: math.unit(6 + 4 / 12, "feet"),
            weight: math.unit(188, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/bmc/front.svg",
                extra: 1067 / 1022,
                bottom: 0.047
            }
        },
    },
    [
        {
            name: "Human-sized",
            height: math.unit(6 + 4 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Sven the Kaiju" },
    {
        front: {
            height: math.unit(20, "feet"),
            weight: math.unit(2016, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/sven-the-kaiju/front.svg",
                extra: 1479 / 1449,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Marik" },
    {
        front: {
            height: math.unit(4, "meters"),
            weight: math.unit(2, "tons"),
            name: "Front",
            image: {
                source: "./media/characters/marik/front.svg",
                extra: 1057 / 1003,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Mel" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(110, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mel/front.svg",
                extra: 736 / 617,
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
            height: math.unit(5 + 10.5 / 12, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Lykonous" },
    {
        kaiju: {
            height: math.unit(1.75, "meters"),
            weight: math.unit(55, "kg"),
            name: "Kaiju",
            image: {
                source: "./media/characters/lykonous/kaiju.svg",
                extra: 1055 / 946,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Blü" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/blü/front.svg",
                extra: 1883 / 1564,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Scales" },
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
            height: math.unit(6 * 7 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Koragos" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/koragos/front.svg",
                extra: 841 / 794,
                bottom: 0.035
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/koragos/back.svg",
                extra: 841 / 810,
                bottom: 0.022
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 11 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Xylrem" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(250, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/xylrem/front.svg",
                extra: 3323 / 3050,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Ikideru" },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(250, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/ikideru/front.svg",
                extra: 930 / 870,
                bottom: 0.087
            }
        },
        back: {
            height: math.unit(8, "feet"),
            weight: math.unit(250, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/ikideru/back.svg",
                extra: 919 / 852,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Neo" },
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
            height: math.unit(5 + 8 / 12, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Chauncey (Chantz)" },
    {
        front: {
            height: math.unit(13 + 10 / 12, "feet"),
            weight: math.unit(5320, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/chauncey-chantz/front.svg",
                extra: 1587 / 1435,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(13 + 10 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Epifox" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Colin T." },
    {
        front: {
            height: math.unit(1.8796, "m"),
            weight: math.unit(230, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/colin-t/front.svg",
                extra: 1272 / 1193,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Matvei" },
    {
        front: {
            height: math.unit(1.85, "meters"),
            weight: math.unit(80, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/matvei/front.svg",
                extra: 614 / 594,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Quincy" },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(70, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/quincy/front.svg",
                extra: 3041 / 2751
            }
        },
        back: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(70, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/quincy/back.svg",
                extra: 3041 / 2751
            }
        },
        flying: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(70, "lb"),
            name: "Flying",
            image: {
                source: "./media/characters/quincy/flying.svg",
                extra: 1044 / 930
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
            height: math.unit(5 + 9 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Vanrel" },
    {
        front: {
            height: math.unit(4 + 7 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/vanrel/front.svg",
                extra: 1,
                bottom: 0.02
            }
        },
        elemental: {
            height: math.unit(3, "feet"),
            weight: math.unit(150, "lb"),
            name: "Elemental",
            image: {
                source: "./media/characters/vanrel/elemental.svg",
                extra: 192.3/162.8,
                bottom: 1.79/194.17
            }
        },
        side: {
            height: math.unit(4 + 7 / 12, "feet"),
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
            height: math.unit(4 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kuiper Vanrel" },
    {
        front: {
            height: math.unit(7 + 5 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kuiper-vanrel/front.svg",
                extra: 1118 / 1068,
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
        battle: {
            height: math.unit(6.824, "feet"),
            weight: math.unit(150, "lb"),
            name: "Battle",
            image: {
                source: "./media/characters/kuiper-vanrel/battle.svg",
                extra: 1466/1327,
                bottom: 29/1492.5
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Keset Vanrel" },
    {
        front: {
            height: math.unit(8 + 5 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/keset-vanrel/front.svg",
                extra: 1150 / 1084,
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
        battle: {
            height: math.unit(7.408, "feet"),
            weight: math.unit(150, "lb"),
            name: "Battle",
            image: {
                source: "./media/characters/keset-vanrel/battle.svg",
                extra: 1890/1386,
                bottom: 73.28/1970
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Neos" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/neos/front.svg",
                extra: 1696 / 992,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Sammy Mouse" },
    {
        feminine: {
            height: math.unit(5, "feet"),
            weight: math.unit(100, "lb"),
            name: "Feminine",
            image: {
                source: "./media/characters/sammy-mouse/feminine.svg",
                extra: 2526 / 2425,
                bottom: 0.123
            }
        },
        masculine: {
            height: math.unit(5, "feet"),
            weight: math.unit(100, "lb"),
            name: "Masculine",
            image: {
                source: "./media/characters/sammy-mouse/masculine.svg",
                extra: 2526 / 2425,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Kole" },
    {
        front: {
            height: math.unit(4, "feet"),
            weight: math.unit(50, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kole/front.svg",
                extra: 1423 / 1303,
                bottom: 0.025
            }
        },
        back: {
            height: math.unit(4, "feet"),
            weight: math.unit(50, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/kole/back.svg",
                extra: 1426 / 1280,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Rufran" },
    {
        front: {
            height: math.unit(2 + 6 / 12, "feet"),
            weight: math.unit(20, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/rufran/front.svg",
                extra: 2041 / 1839,
                bottom: 0.055
            }
        },
        back: {
            height: math.unit(2 + 6 / 12, "feet"),
            weight: math.unit(20, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/rufran/back.svg",
                extra: 2054 / 1839,
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
            height: math.unit(2 + 6 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Chip" },
    {
        front: {
            height: math.unit(0.3, "meters"),
            weight: math.unit(3.5, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/chip/front.svg",
                extra: 748 / 674
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
))

characterMakers.push(() => makeCharacter(
    { name: "Torvid" },
    {
        side: {
            height: math.unit(2.3, "meters"),
            weight: math.unit(3500, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/torvid/side.svg",
                extra: 1972 / 722,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Susan" },
    {
        front: {
            height: math.unit(2, "meters"),
            weight: math.unit(150.5, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/susan/front.svg",
                extra: 693 / 635,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Raindrops" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/raindrops/front.svg",
                extra: 2655 / 2461,
                bottom: 0.02
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/raindrops/back.svg",
                extra: 2574 / 2400,
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
            height: math.unit(6 + 2 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Tezwa" },
    {
        front: {
            height: math.unit(2.794, "meters"),
            weight: math.unit(325, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/tezwa/front.svg",
                extra: 2083 / 1906,
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
            height: math.unit(9 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Typhus" },
    {
        front: {
            height: math.unit(58, "feet"),
            weight: math.unit(89000, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/typhus/front.svg",
                extra: 816 / 800,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Lyra Von Wulf" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Dixon" },
    {
        front: {
            height: math.unit(6 + 10 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/dixon/front.svg",
                extra: 3361 / 3209,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 10 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Kauko" },
    {
        front: {
            height: math.unit(185, "cm"),
            weight: math.unit(68, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/kauko/front.svg",
                extra: 1455 / 1421,
                bottom: 0.03
            }
        },
        back: {
            height: math.unit(185, "cm"),
            weight: math.unit(68, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/kauko/back.svg",
                extra: 1455 / 1421,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Varg" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/varg/front.svg",
                extra: 1108 / 1018,
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
            name: "Macro",
            height: math.unit(200, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(20, "kilometers")
        },
        {
            name: "True Size",
            height: math.unit(211, "km"),
            default: true
        },
        {
            name: "Gigamacro",
            height: math.unit(1000, "km")
        },
        {
            name: "Gigamacro+",
            height: math.unit(8000, "km")
        },
        {
            name: "Teramacro",
            height: math.unit(1000000, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Dayza" },
    {
        front: {
            height: math.unit(7 + 7 / 12, "feet"),
            weight: math.unit(267, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/dayza/front.svg",
                extra: 1262 / 1200,
                bottom: 0.035
            }
        },
        side: {
            height: math.unit(7 + 7 / 12, "feet"),
            weight: math.unit(267, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/dayza/side.svg",
                extra: 1295 / 1245,
                bottom: 0.05
            }
        },
        back: {
            height: math.unit(7 + 7 / 12, "feet"),
            weight: math.unit(267, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/dayza/back.svg",
                extra: 1241 / 1170
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 7 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(155, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Xanthos" },
    {
        front: {
            height: math.unit(6 + 5 / 12, "feet"),
            weight: math.unit(160, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/xanthos/front.svg",
                extra: 1,
                bottom: 0.04
            }
        },
        back: {
            height: math.unit(6 + 5 / 12, "feet"),
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
            height: math.unit(6 + 5 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Grynn" },
    {
        front: {
            height: math.unit(6 + 3 / 12, "feet"),
            weight: math.unit(215, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/grynn/front.svg",
                extra: 4627 / 4209,
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
            height: math.unit(6 + 3 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Mocha Aura" },
    {
        front: {
            height: math.unit(7 + 5 / 12, "feet"),
            weight: math.unit(450, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mocha-aura/front.svg",
                extra: 1907 / 1817,
                bottom: 0.04
            }
        },
        back: {
            height: math.unit(7 + 5 / 12, "feet"),
            weight: math.unit(450, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/mocha-aura/back.svg",
                extra: 1900 / 1825,
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
            height: math.unit(7 + 5 / 12, "feet"),
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
            height: math.unit(50000000000000000, "parsecs")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ilisha Devya" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Mira" },
    {
        Side: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/mira/side.svg",
                extra: 900 / 799,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Holly" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/holly/front.svg",
                extra: 639 / 606
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/holly/back.svg",
                extra: 623 / 598
            }
        },
        frontWorking: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front (Working)",
            image: {
                source: "./media/characters/holly/front-working.svg",
                extra: 607 / 577,
                bottom: 0.048
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(12 + 3 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Porter" },
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
                extra: 1.01,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(11 + 9 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Lucy" },
    {
        legendary: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Legendary",
            image: {
                source: "./media/characters/lucy/legendary.svg",
                extra: 1355 / 1100,
                bottom: 0.045
            }
        },
    },
    [
        {
            name: "Legendary",
            height: math.unit(86882 * 2, "miles"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Drusilla" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/drusilla/front.svg",
                extra: 678 / 635,
                bottom: 0.03
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/drusilla/back.svg",
                extra: 678 / 635,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Renard Thatch" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/renard-thatch/front.svg",
                extra: 2411 / 2275,
                bottom: 0.01
            }
        },
        frontPosing: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lb"),
            name: "Front (Posing)",
            image: {
                source: "./media/characters/renard-thatch/front-posing.svg",
                extra: 2381 / 2261,
                bottom: 0.01
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/renard-thatch/back.svg",
                extra: 2428 / 2288
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
))

characterMakers.push(() => makeCharacter(
    { name: "Sekvra" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Carmine" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Elyssia" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/elyssia/front.svg",
                extra: 2201 / 2035,
                bottom: 0.05
            }
        },
        frontClothed: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front (Clothed)",
            image: {
                source: "./media/characters/elyssia/front-clothed.svg",
                extra: 2201 / 2035,
                bottom: 0.05
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/elyssia/back.svg",
                extra: 2201 / 2035,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Geno Maxwell" },
    {
        front: {
            height: math.unit(7 + 4 / 12, "feet"),
            weight: math.unit(500, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/geno-maxwell/front.svg",
                extra: 2207 / 2040,
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
            height: math.unit(7 + 4 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Regena Maxwell" },
    {
        front: {
            height: math.unit(7 + 4 / 12, "feet"),
            weight: math.unit(500, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/regena-maxwell/front.svg",
                extra: 3115 / 2770,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 4 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "XGlidingDragonX" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/x-gliding-dragon-x/front.svg",
                extra: 860 / 690,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Quilly" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/quilly/front.svg",
                extra: 890 / 776
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
))

characterMakers.push(() => makeCharacter(
    { name: "Tempest" },
    {
        front: {
            height: math.unit(7 + 8 / 12, "feet"),
            weight: math.unit(350, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/tempest/front.svg",
                extra: 1175 / 1086,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 8 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rodger" },
    {
        side: {
            height: math.unit(4 + 5 / 12, "feet"),
            weight: math.unit(80, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/rodger/side.svg",
                extra: 1235 / 1118
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
            height: math.unit(4 + 5 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(120, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Danyel" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/danyel/front.svg",
                extra: 1185 / 1123,
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
            height: math.unit(5 + 5 / 12, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Vivian Bijoux" },
    {
        front: {
            height: math.unit(5 + 6 / 12, "feet"),
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
            height: math.unit(5 + 6 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Zeta" },
    {
        front: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(260, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/zeta/front.svg",
                extra: 1968 / 1889,
                bottom: 0.06
            }
        },
        back: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(260, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/zeta/back.svg",
                extra: 1944 / 1858,
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
            height: math.unit(6 + 1 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(20, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Jamie Larsen" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/jamie-larsen/front.svg",
                extra: 962 / 933,
                bottom: 0.02
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/jamie-larsen/back.svg",
                extra: 997 / 946
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(28 + 7 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Vance" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/vance/front.svg",
                extra: 1980 / 1890,
                bottom: 0.09
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/vance/back.svg",
                extra: 2081 / 1994,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Xochitl" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/xochitl/front.svg",
                extra: 2297 / 2261,
                bottom: 0.065
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/xochitl/back.svg",
                extra: 2386 / 2354,
                bottom: 0.01
            }
        },
        foot: {
            height: math.unit(6 / 5 * 1.15, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Vincent" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/vincent/front.svg",
                extra: 1130 / 1080,
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
            height: math.unit(6 + 5 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Jay" },
    {
        front: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(65, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/jay/front.svg",
                extra: 1510 / 1430,
                bottom: 0.042
            }
        },
        back: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(65, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/jay/back.svg",
                extra: 1510 / 1430,
                bottom: 0.025
            }
        },
        clothed: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(65, "lb"),
            name: "Front (Clothed)",
            image: {
                source: "./media/characters/jay/clothed.svg",
                extra: 744 / 699,
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
            height: math.unit(6 + 2 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Coatl" },
    {
        front: {
            height: math.unit(2, "meters"),
            weight: math.unit(500, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/coatl/front.svg",
                extra: 3948 / 3500,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Shiroryu" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(50, "kg"),
            name: "front",
            image: {
                source: "./media/characters/shiroryu/front.svg",
                extra: 1990 / 1935
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
))

characterMakers.push(() => makeCharacter(
    { name: "Umeko" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Cassidy" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Isaac" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/isaac/front.svg",
                extra: 896 / 815,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Sleekit" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(72, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/sleekit/front.svg",
                extra: 4693 / 4487,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Nillia" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/nillia/front.svg",
                extra: 2195 / 2037,
                bottom: 0.005
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/nillia/back.svg",
                extra: 2195 / 2037,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Mesmyriza" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mesmyriza/front.svg",
                extra: 2067 / 1784,
                bottom: 0.035
            }
        },
        foot: {
            height: math.unit(6 / (250 / 35), "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Saudade" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(250, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/saudade/front.svg",
                extra: 1172 / 1139,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Keireer" },
    {
        front: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(100, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/keireer/front.svg",
                extra: 716 / 666,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 4 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mirja" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(90, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/mirja/front.svg",
                extra: 1789 / 1683,
                bottom: 0.05
            }
        },
        frontDressed: {
            height: math.unit(6, "feet"),
            weight: math.unit(90, "lb"),
            name: "Front (Dressed)",
            image: {
                source: "./media/characters/mirja/front-dressed.svg",
                extra: 1789 / 1683,
                bottom: 0.05
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(90, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/mirja/back.svg",
                extra: 953 / 917,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Nightraver" },
    {
        front: {
            height: math.unit(15, "feet"),
            weight: math.unit(880, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/nightraver/front.svg",
                extra: 2444 / 2160,
                bottom: 0.027
            }
        },
        back: {
            height: math.unit(15, "feet"),
            weight: math.unit(880, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/nightraver/back.svg",
                extra: 2309 / 2180,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Arc" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Nebula Shahar" },
    {
        front: {
            height: math.unit(1.1938, "meters"),
            weight: math.unit(54, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/nebula-shahar/front.svg",
                extra: 1642 / 1436,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Shayla" },
    {
        front: {
            height: math.unit(5.24, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/shayla/front.svg",
                extra: 1512 / 1414,
                bottom: 0.01
            }
        },
        back: {
            height: math.unit(5.24, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/shayla/back.svg",
                extra: 1512 / 1414
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
))

characterMakers.push(() => makeCharacter(
    { name: "Pia Jr." },
    {
        front: {
            height: math.unit(2.2, "m"),
            weight: math.unit(120, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/pia-jr/front.svg",
                extra: 1000 / 970,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Pia Sr." },
    {
        front: {
            height: math.unit(2, "m"),
            weight: math.unit(115, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/pia-sr/front.svg",
                extra: 760 / 730,
                bottom: 0.015
            }
        },
        back: {
            height: math.unit(2, "m"),
            weight: math.unit(115, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/pia-sr/back.svg",
                extra: 760 / 730,
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
))

characterMakers.push(() => makeCharacter(
    { name: "KIBIBYTE" },
    {
        front: {
            height: math.unit(8 + 2 / 12, "feet"),
            weight: math.unit(300, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kibibyte/front.svg",
                extra: 2221 / 2098,
                bottom: 0.04
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8 + 2 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Felix" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/felix/front.svg",
                extra: 762 / 722,
                bottom: 0.02
            }
        },
        frontClothed: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front (Clothed)",
            image: {
                source: "./media/characters/felix/front-clothed.svg",
                extra: 762 / 722,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 8 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Tobo" },
    {
        front: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(250, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/tobo/front.svg",
                extra: 608 / 586,
                bottom: 0.023
            }
        },
        back: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(250, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/tobo/back.svg",
                extra: 608 / 586
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
            height: math.unit(6 + 1 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Danny Kapowsky" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(269, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/danny-kapowsky/front.svg",
                extra: 766 / 736,
                bottom: 0.044
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(269, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/danny-kapowsky/back.svg",
                extra: 797 / 760,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Finn" },
    {
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(170, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/finn/side.svg",
                extra: 1953 / 1807,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Roy" },
    {
        front: {
            height: math.unit(5 + 6 / 12, "feet"),
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
            height: math.unit(5 + 6 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Aevsivs" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Hildegard" },
    {
        front: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(159, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/hildegard/front.svg",
                extra: 312 / 286,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Bernard & Wilder" },
    {
        bernard: {
            height: math.unit(2 + 7 / 12, "feet"),
            weight: math.unit(66, "lb"),
            name: "Bernard",
            rename: true,
            image: {
                source: "./media/characters/bernard-wilder/bernard.svg",
                extra: 192 / 128,
                bottom: 0.05
            }
        },
        wilder: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(143, "lb"),
            name: "Wilder",
            rename: true,
            image: {
                source: "./media/characters/bernard-wilder/wilder.svg",
                extra: 361 / 312,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Hearth" },
    {
        anthro: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(155, "lb"),
            name: "Anthro",
            image: {
                source: "./media/characters/hearth/anthro.svg",
                extra: 260 / 250,
                bottom: 0.02
            }
        },
        feral: {
            height: math.unit(3.78, "feet"),
            weight: math.unit(35, "kg"),
            name: "Feral",
            image: {
                source: "./media/characters/hearth/feral.svg",
                extra: 153 / 135,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 1 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ingrid" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(182, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ingrid/front.svg",
                extra: 294 / 268,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Malgam" },
    {
        eevee: {
            height: math.unit(2 + 10 / 12, "feet"),
            weight: math.unit(86, "lb"),
            name: "Malgam",
            image: {
                source: "./media/characters/malgam/eevee.svg",
                extra: 218 / 180,
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
                extra: 371 / 325,
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
            height: math.unit(2 + 10 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Fleur" },
    {
        front: {
            height: math.unit(5 + 11 / 12, "feet"),
            weight: math.unit(188, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/fleur/front.svg",
                extra: 309 / 283,
                bottom: 0.007
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 11 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Jude" },
    {
        front: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(122, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/jude/front.svg",
                extra: 288 / 273,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 4 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Seara" },
    {
        front: {
            height: math.unit(5 + 11 / 12, "feet"),
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
            height: math.unit(5 + 11 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Caspian" },
    {
        front: {
            height: math.unit(16 + 5 / 12, "feet"),
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
            height: math.unit(16 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mika" },
    {
        front: {
            height: math.unit(5 + 7 / 12, "feet"),
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
            height: math.unit(5 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sol" },
    {
        front: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(268, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sol/front.svg",
                extra: 247 / 231,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Umiko" },
    {
        buizel: {
            height: math.unit(2 + 5 / 12, "feet"),
            weight: math.unit(87, "lb"),
            name: "Buizel",
            image: {
                source: "./media/characters/umiko/buizel.svg",
                extra: 172 / 157,
                bottom: 0.01
            }
        },
        floatzel: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(250, "lb"),
            name: "Floatzel",
            image: {
                source: "./media/characters/umiko/floatzel.svg",
                extra: 262 / 248
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Iliac" },
    {
        front: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(146, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/iliac/front.svg",
                extra: 389 / 365,
                bottom: 0.035
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Topaz" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(170, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/topaz/front.svg",
                extra: 317 / 303,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Gabriel" },
    {
        front: {
            height: math.unit(5 + 11 / 12, "feet"),
            weight: math.unit(144, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/gabriel/front.svg",
                extra: 285 / 262,
                bottom: 0.004
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 11 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Tempest (Suicune)" },
    {
        side: {
            height: math.unit(6 + 5 / 12, "feet"),
            weight: math.unit(300, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/tempest-suicune/side.svg",
                extra: 195 / 154,
                bottom: 0.04
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Vulcan" },
    {
        front: {
            height: math.unit(7 + 2 / 12, "feet"),
            weight: math.unit(322, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/vulcan/front.svg",
                extra: 154 / 147,
                bottom: 0.04
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Gault" },
    {
        front: {
            height: math.unit(5 + 10 / 12, "feet"),
            weight: math.unit(264, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/gault/front.svg",
                extra: 161 / 140,
                bottom: 0.028
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 10 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Shard" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/shard/front.svg",
                extra: 273 / 238,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(3 + 6 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ashe" },
    {
        front: {
            height: math.unit(5 + 11 / 12, "feet"),
            weight: math.unit(146, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ashe/front.svg",
                extra: 400 / 373,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 11 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Beatrix" },
    {
        front: {
            height: math.unit(5 + 5 / 12, "feet"),
            weight: math.unit(135, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/beatrix/front.svg",
                extra: 392 / 379,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Ignatius" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ignatius/front.svg",
                extra: 245 / 222,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mei Li" },
    {
        front: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(138, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mei-li/front.svg",
                extra: 237 / 229,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Puru" },
    {
        front: {
            height: math.unit(2 + 4 / 12, "feet"),
            weight: math.unit(62, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/puru/front.svg",
                extra: 206 / 149,
                bottom: 0.06
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2 + 4 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kee" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Cobalt (Dracha)" },
    {
        anthro: {
            height: math.unit(7, "feet"),
            weight: math.unit(190, "lb"),
            name: "Anthro",
            image: {
                source: "./media/characters/cobalt-dracha/anthro.svg",
                extra: 231 / 225,
                bottom: 0.04
            }
        },
        feral: {
            height: math.unit(9 + 7 / 12, "feet"),
            weight: math.unit(294, "lb"),
            name: "Feral",
            image: {
                source: "./media/characters/cobalt-dracha/feral.svg",
                extra: 692 / 633,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Java" },
    {
        fallen: {
            height: math.unit(11 + 8 / 12, "feet"),
            weight: math.unit(485, "lb"),
            name: "Java (Fallen)",
            rename: true,
            image: {
                source: "./media/characters/java/fallen.svg",
                extra: 226 / 208,
                bottom: 0.005
            }
        },
        godkin: {
            height: math.unit(10 + 6 / 12, "feet"),
            weight: math.unit(328, "lb"),
            name: "Java (Godkin)",
            rename: true,
            image: {
                source: "./media/characters/java/godkin.svg",
                extra: 270 / 262,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(11 + 8 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Skoll" },
    {
        front: {
            height: math.unit(7 + 8 / 12, "feet"),
            weight: math.unit(320, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/skoll/front.svg",
                extra: 232 / 220,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 8 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Purna" },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(170, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/purna/front.svg",
                extra: 239 / 229,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kuva" },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(142, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kuva/front.svg",
                extra: 281 / 271,
                bottom: 0.006
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Embra" },
    {
        anthro: {
            height: math.unit(9 + 2 / 12, "feet"),
            weight: math.unit(270, "lb"),
            name: "Anthro",
            image: {
                source: "./media/characters/embra/anthro.svg",
                extra: 200 / 187,
                bottom: 0.02
            }
        },
        feral: {
            height: math.unit(18 + 8 / 12, "feet"),
            weight: math.unit(576, "lb"),
            name: "Feral",
            image: {
                source: "./media/characters/embra/feral.svg",
                extra: 152 / 137,
                bottom: 0.037
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(9 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Grottos" },
    {
        anthro: {
            height: math.unit(10 + 9 / 12, "feet"),
            weight: math.unit(224, "lb"),
            name: "Anthro",
            image: {
                source: "./media/characters/grottos/anthro.svg",
                extra: 350 / 332,
                bottom: 0.045
            }
        },
        feral: {
            height: math.unit(20 + 7 / 12, "feet"),
            weight: math.unit(629, "lb"),
            name: "Feral",
            image: {
                source: "./media/characters/grottos/feral.svg",
                extra: 207 / 190,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(10 + 9 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Frifna" },
    {
        anthro: {
            height: math.unit(9 + 6 / 12, "feet"),
            weight: math.unit(298, "lb"),
            name: "Anthro",
            image: {
                source: "./media/characters/frifna/anthro.svg",
                extra: 282 / 269,
                bottom: 0.015
            }
        },
        feral: {
            height: math.unit(16 + 2 / 12, "feet"),
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
            height: math.unit(9 + 6 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Elise" },
    {
        front: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(168, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/elise/front.svg",
                extra: 276 / 271
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Glade" },
    {
        front: {
            height: math.unit(5 + 10 / 12, "feet"),
            weight: math.unit(210, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/glade/front.svg",
                extra: 258 / 247,
                bottom: 0.008
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 10 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rina" },
    {
        front: {
            height: math.unit(5 + 10 / 12, "feet"),
            weight: math.unit(129, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/rina/front.svg",
                extra: 266 / 255,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 10 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Veronica" },
    {
        front: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(192, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/veronica/front.svg",
                extra: 319 / 309,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 1 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Braxton" },
    {
        front: {
            height: math.unit(9 + 3 / 12, "feet"),
            weight: math.unit(1100, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/braxton/front.svg",
                extra: 1057 / 984,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(9 + 3 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Blue Feyonics" },
    {
        front: {
            height: math.unit(6 + 7 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/blue-feyonics/front.svg",
                extra: 1403 / 1306,
                bottom: 0.047
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Maxwell" },
    {
        front: {
            height: math.unit(1.8, "meters"),
            weight: math.unit(60, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/maxwell/front.svg",
                extra: 2060 / 1873
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
))

characterMakers.push(() => makeCharacter(
    { name: "Jack" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/jack/front.svg",
                extra: 1754 / 1640,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Cafat" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Verin Raharra" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/verin-raharra/front.svg",
                extra: 5019 / 4835,
                bottom: 0.023
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 5 / 12, "feet"),
            default: true
        },
        {
            name: "Upsized",
            height: math.unit(20, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Nakata" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Lily" },
    {
        front: {
            height: math.unit(4.91, "feet"),
            weight: math.unit(100, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/lily/front.svg",
                extra: 1585 / 1415,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Sheila" },
    {
        laying: {
            height: math.unit(4 + 4 / 12, "feet"),
            weight: math.unit(600, "lb"),
            name: "Laying",
            image: {
                source: "./media/characters/sheila/laying.svg",
                extra: 1333 / 1265,
                bottom: 0.16
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4 + 4 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sax" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(190, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sax/front.svg",
                extra: 1187 / 973,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Pandora" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/pandora/front.svg",
                extra: 2720 / 2556,
                bottom: 0.015
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/pandora/back.svg",
                extra: 2720 / 2556,
                bottom: 0.01
            }
        },
        beans: {
            height: math.unit(6 / 8, "feet"),
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
                extra: 1622 / 1525,
                bottom: 0.015
            }
        },
        hoodie: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Hoodie",
            image: {
                source: "./media/characters/pandora/hoodie.svg",
                extra: 1622 / 1525,
                bottom: 0.015
            }
        },
        casual: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Casual",
            image: {
                source: "./media/characters/pandora/casual.svg",
                extra: 1622 / 1525,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Venio Darcony" },
    {
        side: {
            height: math.unit(10, "feet"),
            weight: math.unit(800, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/venio-darcony/side.svg",
                extra: 1373 / 1003,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Veski" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/veski/front.svg",
                extra: 1299 / 1225,
                bottom: 0.04
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/veski/back.svg",
                extra: 1299 / 1225,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Isabelle" },
    {
        front: {
            height: math.unit(5 + 7 / 12, "feet"),
            name: "Front",
            image: {
                source: "./media/characters/isabelle/front.svg",
                extra: 2130 / 1976,
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
            height: math.unit(5 + 7 / 12, "inches")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Hanzo" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/hanzo/front.svg",
                extra: 374 / 344,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Anna" },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(130, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/anna/front.svg",
                extra: 169 / 145,
                bottom: 0.06
            }
        },
        full: {
            height: math.unit(4.96, "feet"),
            weight: math.unit(220, "lb"),
            name: "Full",
            image: {
                source: "./media/characters/anna/full.svg",
                extra: 138 / 114,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Ian Corvid" },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ian-corvid/front.svg",
                extra: 150 / 142,
                bottom: 0.02
            }
        },
        back: {
            height: math.unit(7, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/ian-corvid/back.svg",
                extra: 150 / 143,
                bottom: 0.01
            }
        },
        stomping: {
            height: math.unit(7, "feet"),
            weight: math.unit(150, "lb"),
            name: "Stomping",
            image: {
                source: "./media/characters/ian-corvid/stomping.svg",
                extra: 76 / 72
            }
        },
        sitting: {
            height: math.unit(7 / 1.8, "feet"),
            weight: math.unit(150, "lb"),
            name: "Sitting",
            image: {
                source: "./media/characters/ian-corvid/sitting.svg",
                extra: 1400 / 1269,
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
            height: math.unit(7 + 1 / 12, "feet"),
            default: true
        },
        {
            name: "Macrow",
            height: math.unit(176, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Natalie Kellon" },
    {
        front: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(147, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/natalie-kellon/front.svg",
                extra: 1214 / 1141,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1 / 16, "inch")
        },
        {
            name: "Tiny",
            height: math.unit(4, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 7 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Alluria" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/alluria/front.svg",
                extra: 806 / 738,
                bottom: 0.01
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/alluria/side.svg",
                extra: 800 / 750,
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/alluria/back.svg",
                extra: 806 / 738,
            }
        },
        frontMaid: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front (Maid)",
            image: {
                source: "./media/characters/alluria/front-maid.svg",
                extra: 806 / 738,
                bottom: 0.01
            }
        },
        sideMaid: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side (Maid)",
            image: {
                source: "./media/characters/alluria/side-maid.svg",
                extra: 800 / 750,
                bottom: 0.005
            }
        },
        backMaid: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back (Maid)",
            image: {
                source: "./media/characters/alluria/back-maid.svg",
                extra: 806 / 738,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Kyle" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kyle/front.svg",
                extra: 1069 / 962,
                bottom: 77.228 / 1727.45
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
))

characterMakers.push(() => makeCharacter(
    { name: "Duncan" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(300, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/duncan/front.svg",
                extra: 1650 / 1482,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Memory" },
    {
        front: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/memory/front.svg",
                extra: 3641 / 3545,
                bottom: 0.03
            }
        },
        back: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/memory/back.svg",
                extra: 3641 / 3545,
                bottom: 0.025
            }
        },
        frontSkirt: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Front (Skirt)",
            image: {
                source: "./media/characters/memory/front-skirt.svg",
                extra: 3641 / 3545,
                bottom: 0.03
            }
        },
        frontDress: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Front (Dress)",
            image: {
                source: "./media/characters/memory/front-dress.svg",
                extra: 3641 / 3545,
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
            height: math.unit(5 + 4 / 12, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Luno" },
    {
        front: {
            height: math.unit(4 + 11 / 12, "feet"),
            weight: math.unit(100, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/luno/front.svg",
                extra: 1535 / 1487,
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
            height: math.unit(4 + 11 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Jamesy" },
    {
        front: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(170, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/jamesy/front.svg",
                extra: 440 / 382,
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
            height: math.unit(6 + 2 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Mark" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(160, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mark/front.svg",
                extra: 3300 / 3100,
                bottom: 136.42 / 3440.47
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
))

characterMakers.push(() => makeCharacter(
    { name: "Mac" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(400, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mac/front.svg",
                extra: 1048 / 987.7,
                bottom: 60 / 1107.6,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Bari" },
    {
        front: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(190, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/bari/front.svg",
                extra: 3156 / 2880,
                bottom: 0.03
            }
        },
        back: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(190, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/bari/back.svg",
                extra: 3260 / 2834,
                bottom: 0.025
            }
        },
        frontPlush: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(190, "lb"),
            name: "Front (Plush)",
            image: {
                source: "./media/characters/bari/front-plush.svg",
                extra: 1112 / 1061,
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
            height: math.unit(5 + 2 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(20, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Hunter Misha Raven" },
    {
        front: {
            height: math.unit(6 + 1 / 12, "feet"),
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
            height: math.unit(6 + 1 / 12, "feet")
        },
        {
            name: "Divine",
            height: math.unit(1.12134e34, "parsecs"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Max Calore" },
    {
        front: {
            height: math.unit(6 + 3 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/max-calore/front.svg",
                extra: 1700 / 1648,
                bottom: 0.01
            }
        },
        back: {
            height: math.unit(6 + 3 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/max-calore/back.svg",
                extra: 1700 / 1648,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 3 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Aspen" },
    {
        side: {
            height: math.unit(2 + 8 / 12, "feet"),
            weight: math.unit(99, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/aspen/side.svg",
                extra: 152 / 138,
                bottom: 0.032
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2 + 8 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sheila (Feral Wolf)" },
    {
        side: {
            height: math.unit(3 + 2 / 12, "feet"),
            weight: math.unit(224, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/sheila-feral-wolf/side.svg",
                extra: 179 / 166,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(3 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Michelle" },
    {
        side: {
            height: math.unit(1 + 9 / 12, "feet"),
            weight: math.unit(38, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/michelle/side.svg",
                extra: 147 / 136.7,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1 + 9 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Nino" },
    {
        front: {
            height: math.unit(1 + 1 / 12, "feet"),
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
            height: math.unit(1 + 1 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Viola" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Atlas" },
    {
        front: {
            height: math.unit(6 + 5 / 12, "feet"),
            weight: math.unit(580, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/atlas/front.svg",
                extra: 298.5 / 290,
                bottom: 0.015
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Davy" },
    {
        side: {
            height: math.unit(1 + 10 / 12, "feet"),
            weight: math.unit(25, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/davy/side.svg",
                extra: 200 / 170,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1 + 10 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Fiona" },
    {
        side: {
            height: math.unit(4 + 8 / 12, "feet"),
            weight: math.unit(166, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/fiona/side.svg",
                extra: 232 / 220,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4 + 8 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Lyla" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Perseus" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Remus" },
    {
        side: {
            height: math.unit(4 + 2 / 12, "feet"),
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
            height: math.unit(4 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Raf" },
    {
        front: {
            height: math.unit(4 + 11 / 12, "feet"),
            weight: math.unit(114, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/raf/front.svg",
                bottom: 0.01
            }
        },
        side: {
            height: math.unit(4 + 11 / 12, "feet"),
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
            height: math.unit(4 + 11 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(70, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Liam Einarr" },
    {
        front: {
            height: math.unit(1.5, "meters"),
            weight: math.unit(68, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/liam-einarr/front.svg",
                extra: 2822 / 2666
            }
        },
        back: {
            height: math.unit(1.5, "meters"),
            weight: math.unit(68, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/liam-einarr/back.svg",
                extra: 2822 / 2666,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Linda" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(75, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/linda/front.svg",
                extra: 930 / 874,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Caylex" },
    {
        front: {
            height: math.unit(6 + 8 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/caylex/front.svg",
                extra: 821 / 772,
                bottom: 0.07
            }
        },
        back: {
            height: math.unit(6 + 8 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/caylex/back.svg",
                extra: 821 / 772,
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
            height: math.unit(6 + 8 / 12, "feet"),
            weight: math.unit(250, "lb"),
            name: "Armored",
            image: {
                source: "./media/characters/caylex/armored.svg",
                extra: 1420 / 1310,
                bottom: 0.045
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 8 / 12, "feet"),
            default: true
        },
        {
            name: "Normal+",
            height: math.unit(12, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Alana" },
    {
        front: {
            height: math.unit(7 + 6 / 12, "feet"),
            weight: math.unit(288, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/alana/front.svg",
                extra: 679 / 653,
                bottom: 22.5 / 701
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 6 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Hasani" },
    {
        front: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(210, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/hasani/front.svg",
                extra: 244 / 232,
                bottom: 0.01
            }
        },
        back: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(210, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/hasani/back.svg",
                extra: 244 / 232,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 1 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(175, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Nita" },
    {
        front: {
            height: math.unit(1.82, "meters"),
            weight: math.unit(140, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/nita/front.svg",
                extra: 2473 / 2363,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Shiriko" },
    {
        front: {
            height: math.unit(4, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/shiriko/front.svg",
                extra: 195 / 188
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
))

characterMakers.push(() => makeCharacter(
    { name: "Deja" },
    {
        front: {
            height: math.unit(6, "feet"),
            name: "front",
            image: {
                source: "./media/characters/deja/front.svg",
                extra: 926 / 840,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Anima" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "Bianca" },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(350, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/bianca/front.svg",
                extra: 234 / 225,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Adinia" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/adinia/front.svg",
                extra: 1845 / 1672,
                bottom: 0.02
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/adinia/back.svg",
                extra: 1845 / 1672,
                bottom: 0.002
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(11 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Lykasa" },
    {
        front: {
            height: math.unit(3, "meters"),
            weight: math.unit(200, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/lykasa/front.svg",
                extra: 1076 / 976,
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
            name: "Kaiju",
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
))

characterMakers.push(() => makeCharacter(
    { name: "Malfaren" },
    {
        side: {
            height: math.unit(283 / 124 * 6, "feet"),
            weight: math.unit(35000, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/malfaren/side.svg",
                extra: 2500 / 1010,
                bottom: 0.01
            }
        },
        front: {
            height: math.unit(22.36, "feet"),
            weight: math.unit(35000, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/malfaren/front.svg",
                extra: 1631 / 1476,
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
            height: math.unit(283 / 162 * 6, "feet"),
        },
        {
            name: "Bigger",
            height: math.unit(283 / 124 * 6, "feet")
        },
        {
            name: "Massive",
            height: math.unit(283 / 92 * 6, "feet"),
            default: true
        },
        {
            name: "👀💦",
            height: math.unit(283 / 73 * 6, "feet"),
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kernel" },
    {
        front: {
            height: math.unit(1.7, "m"),
            weight: math.unit(70, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/kernel/front.svg",
                extra: 222 / 210,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Jayne Folest" },
    {
        front: {
            height: math.unit(1.75, "meters"),
            weight: math.unit(65, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/jayne-folest/front.svg",
                extra: 2115 / 2007,
                bottom: 0.02
            }
        },
        back: {
            height: math.unit(1.75, "meters"),
            weight: math.unit(65, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/jayne-folest/back.svg",
                extra: 2115 / 2007,
                bottom: 0.005
            }
        },
        frontClothed: {
            height: math.unit(1.75, "meters"),
            weight: math.unit(65, "kg"),
            name: "Front (Clothed)",
            image: {
                source: "./media/characters/jayne-folest/front-clothed.svg",
                extra: 2115 / 2007,
                bottom: 0.035
            }
        },
        hand: {
            height: math.unit(1 / 1.260, "feet"),
            name: "Hand",
            image: {
                source: "./media/characters/jayne-folest/hand.svg"
            }
        },
        foot: {
            height: math.unit(1 / 0.918, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Algier" },
    {
        front: {
            height: math.unit(180, "cm"),
            weight: math.unit(70, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/algier/front.svg",
                extra: 596 / 572,
                bottom: 0.04
            }
        },
        back: {
            height: math.unit(180, "cm"),
            weight: math.unit(70, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/algier/back.svg",
                extra: 596 / 572,
                bottom: 0.025
            }
        },
        frontdressed: {
            height: math.unit(180, "cm"),
            weight: math.unit(150, "kg"),
            name: "Front-dressed",
            image: {
                source: "./media/characters/algier/front-dressed.svg",
                extra: 596 / 572,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Pretzel" },
    {
        upright: {
            height: math.unit(7, "feet"),
            weight: math.unit(300, "lb"),
            name: "Upright",
            image: {
                source: "./media/characters/pretzel/upright.svg",
                extra: 534 / 522,
                bottom: 0.065
            }
        },
        sprawling: {
            height: math.unit(3.75, "feet"),
            weight: math.unit(300, "lb"),
            name: "Sprawling",
            image: {
                source: "./media/characters/pretzel/sprawling.svg",
                extra: 314 / 281,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Roxi" },
    {
        sideFront: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front Side",
            image: {
                source: "./media/characters/roxi/side-front.svg",
                extra: 2924 / 2717,
                bottom: 0.08
            }
        },
        sideBack: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Back Side",
            image: {
                source: "./media/characters/roxi/side-back.svg",
                extra: 2904 / 2693,
                bottom: 0.06
            }
        },
        front: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/roxi/front.svg",
                extra: 2028 / 1907,
                bottom: 0.01
            }
        },
        frontAlt: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front (Alt)",
            image: {
                source: "./media/characters/roxi/front-alt.svg",
                extra: 1828 / 1798,
                bottom: 0.01
            }
        },
        sitting: {
            height: math.unit(2.8, "feet"),
            weight: math.unit(120, "lb"),
            name: "Sitting",
            image: {
                source: "./media/characters/roxi/sitting.svg",
                extra: 2660 / 2462,
                bottom: 0.1
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Shadow" },
    {
        side: {
            height: math.unit(55, "feet"),
            weight: math.unit(153, "tons"),
            name: "Side",
            image: {
                source: "./media/characters/shadow/side.svg",
                extra: 701 / 628,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Marcie" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(200, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/marcie/front.svg",
                extra: 960 / 876,
                bottom: 58 / 1017.87
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
))

characterMakers.push(() => makeCharacter(
    { name: "Kachina" },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(200, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kachina/front.svg",
                extra: 1290.68 / 1119,
                bottom: 36.5 / 1327.18
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
))

characterMakers.push(() => makeCharacter(
    { name: "Kash" },
    {
        looking: {
            height: math.unit(2, "meters"),
            weight: math.unit(300, "kg"),
            name: "Looking",
            image: {
                source: "./media/characters/kash/looking.svg",
                extra: 474 / 344,
                bottom: 0.03
            }
        },
        side: {
            height: math.unit(2, "meters"),
            weight: math.unit(300, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/kash/side.svg",
                extra: 302 / 251,
                bottom: 0.03
            }
        },
        front: {
            height: math.unit(2, "meters"),
            weight: math.unit(300, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/kash/front.svg",
                extra: 495 / 360,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Lalim" },
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
))

characterMakers.push(() => makeCharacter(
    { name: "De'Vout" },
    {
        front: {
            height: math.unit(9.5, "feet"),
            weight: math.unit(600, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/de'vout/front.svg",
                extra: 1443 / 1328,
                bottom: 0.025
            }
        },
        back: {
            height: math.unit(9.5, "feet"),
            weight: math.unit(600, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/de'vout/back.svg",
                extra: 1443 / 1328
            }
        },
        frontDressed: {
            height: math.unit(9.5, "feet"),
            weight: math.unit(600, "lb"),
            name: "Front (Dressed",
            image: {
                source: "./media/characters/de'vout/front-dressed.svg",
                extra: 1443 / 1328,
                bottom: 0.025
            }
        },
        backDressed: {
            height: math.unit(9.5, "feet"),
            weight: math.unit(600, "lb"),
            name: "Back (Dressed",
            image: {
                source: "./media/characters/de'vout/back-dressed.svg",
                extra: 1443 / 1328
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
))

characterMakers.push(() => makeCharacter(
    { name: "Talana" },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(225, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/talana/front.svg",
                extra: 1410 / 1300,
                bottom: 0.015
            }
        },
        frontDressed: {
            height: math.unit(8, "feet"),
            weight: math.unit(225, "lb"),
            name: "Front (Dressed",
            image: {
                source: "./media/characters/talana/front-dressed.svg",
                extra: 1410 / 1300,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Xeauvok" },
    {
        side: {
            height: math.unit(7.2, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/xeauvok/side.svg",
                extra: 1975 / 1523,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Zara" },
    {
        side: {
            height: math.unit(10, "feet"),
            weight: math.unit(900, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/zara/side.svg",
                extra: 504 / 498
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
))

characterMakers.push(() => makeCharacter(
    { name: "Richard (Dragon)" },
    {
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/richard-dragon/side.svg",
                extra: 845 / 340,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Richard (Smeargle)" },
    {
        front: {
            height: math.unit(4, "feet"),
            weight: math.unit(100, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/richard-smeargle/front.svg",
                extra: 2952 / 2820,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Klay" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(110, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/klay/front.svg",
                extra: 962 / 883,
                bottom: 0.04
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(110, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/klay/back.svg",
                extra: 962 / 883
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
))

characterMakers.push(() => makeCharacter(
    { name: "Marcus" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(160, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/marcus/front.svg",
                extra: 734 / 676,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Claude DelRoute" },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(275, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/claude-delroute/front.svg",
                extra: 230 / 214,
                bottom: 0.007
            }
        },
        side: {
            height: math.unit(7, "feet"),
            weight: math.unit(275, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/claude-delroute/side.svg",
                extra: 222 / 214,
                bottom: 0.01
            }
        },
        back: {
            height: math.unit(7, "feet"),
            weight: math.unit(275, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/claude-delroute/back.svg",
                extra: 230 / 214,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Dragonien" },
    {
        front: {
            height: math.unit(8 + 4 / 12, "feet"),
            weight: math.unit(600, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/dragonien/front.svg",
                extra: 100 / 94,
                bottom: 3.3 / 103.3445
            }
        },
        back: {
            height: math.unit(8 + 4 / 12, "feet"),
            weight: math.unit(600, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/dragonien/back.svg",
                extra: 776 / 746,
                bottom: 6.4 / 782.0616
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
            height: math.unit(8 + 4 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Desta" },
    {
        front: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(110, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/desta/front.svg",
                extra: 1482 / 1417
            }
        },
        side: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(110, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/desta/side.svg",
                extra: 2579 / 2491,
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
            height: math.unit(5 + 2 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Storm Alystar" },
    {
        front: {
            height: math.unit(10, "feet"),
            weight: math.unit(700, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/storm-alystar/front.svg",
                extra: 2112 / 1898,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Ilia" },
    {
        front: {
            height: math.unit(2.35, "meters"),
            weight: math.unit(119, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/ilia/front.svg",
                extra: 1285 / 1255,
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
))

characterMakers.push(() => makeCharacter(
    { name: "KingDead" },
    {
        front: {
            height: math.unit(6 + 5 / 12, "feet"),
            weight: math.unit(190, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kingdead/front.svg",
                extra: 1228 / 1177
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
            height: math.unit(6 + 5 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Kyrehx" },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(600, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kyrehx/front.svg",
                extra: 1195 / 1095,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Xang" },
    {
        front: {
            height: math.unit(0.935 * (6 + 8 / 12), "feet"),
            weight: math.unit(184, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/xang/front.svg",
                extra: 845 / 755
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(0.935 * (6 + 8 / 12), "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Doc Weardno" },
    {
        frontDressed: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(140, "lb"),
            name: "Front (Dressed)",
            image: {
                source: "./media/characters/doc-weardno/front-dressed.svg",
                extra: 263 / 234
            }
        },
        backDressed: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(140, "lb"),
            name: "Back (Dressed)",
            image: {
                source: "./media/characters/doc-weardno/back-dressed.svg",
                extra: 266 / 238
            }
        },
        front: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(140, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/doc-weardno/front.svg",
                extra: 254 / 233
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
            height: math.unit(5 + 7 / 12, "feet"),
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
))

characterMakers.push(() => makeCharacter(
    { name: "Seth Whilst" },
    {
        front: {
            height: math.unit(6 + 2 / 12, "feet"),
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
            height: math.unit(6 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Pocket Jabari" },
    {
        front: {
            height: math.unit(3, "inches"),
            weight: math.unit(8, "grams"),
            name: "Front",
            image: {
                source: "./media/characters/pocket-jabari/front.svg",
                extra: 1024 / 974,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Sapphy" },
    {
        front: {
            height: math.unit(15, "feet"),
            weight: math.unit(3280, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sapphy/front.svg",
                extra: 671 / 577,
                bottom: 0.085
            }
        },
        back: {
            height: math.unit(15, "feet"),
            weight: math.unit(3280, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/sapphy/back.svg",
                extra: 631 / 607,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Kiro" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(170, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kiro/front.svg",
                extra: 1064 / 1012,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Irishfox" },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(175, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/irishfox/front.svg",
                extra: 1912 / 1680,
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
            height: math.unit(5 + 9 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(45, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Aronai Sieyes" },
    {
        front: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/aronai-sieyes/front.svg",
                extra: 1556 / 1480,
                bottom: 0.015
            }
        },
        side: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/aronai-sieyes/side.svg",
                extra: 1433 / 1390,
                bottom: 0.0393
            }
        },
        back: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/aronai-sieyes/back.svg",
                extra: 1544 / 1494,
                bottom: 0.02
            }
        },
        frontClothed: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front (Clothed)",
            image: {
                source: "./media/characters/aronai-sieyes/front-clothed.svg",
                extra: 1582 / 1527
            }
        },
        feral: {
            height: math.unit(18, "feet"),
            weight: math.unit(150 * 3 * 3 * 3, "lb"),
            name: "Feral",
            image: {
                source: "./media/characters/aronai-sieyes/feral.svg",
                extra: 1530 / 1240,
                bottom: 0.035
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
            height: math.unit(6 + 1 / 12, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Xuna" },
    {
        front: {
            height: math.unit(12, "feet"),
            weight: math.unit(410, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/xuna/front.svg",
                extra: 2184 / 1980
            }
        },
        side: {
            height: math.unit(12, "feet"),
            weight: math.unit(410, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/xuna/side.svg",
                extra: 2184 / 1980
            }
        },
        back: {
            height: math.unit(12, "feet"),
            weight: math.unit(410, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/xuna/back.svg",
                extra: 2184 / 1980
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
))

characterMakers.push(() => makeCharacter(
    { name: "Arokha Sieyes" },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/arokha-sieyes/front.svg",
                extra: 1425 / 1284,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(30, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Arokh Sieyes" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/arokh-sieyes/front.svg",
                extra: 1830 / 1769,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Goldeneye" },
    {
        side: {
            height: math.unit(13 + 1 / 12, "feet"),
            weight: math.unit(8.5, "tonnes"),
            name: "Side",
            image: {
                source: "./media/characters/goldeneye/side.svg",
                extra: 1182 / 778,
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
            height: math.unit(13 + 1 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Leonardo Lycheborne" },
    {
        front: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(210, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/leonardo-lycheborne/front.svg",
                extra: 390 / 365,
                bottom: 0.032
            }
        },
        side: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(210, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/leonardo-lycheborne/side.svg",
                extra: 390 / 365,
                bottom: 0.005
            }
        },
        back: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(210, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/leonardo-lycheborne/back.svg",
                extra: 392 / 366,
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
                extra: 308 / 294,
                bottom: 0.048
            }
        },
        feral: {
            height: math.unit(7.5, "feet"),
            weight: math.unit(600, "lb"),
            name: "Feral",
            image: {
                source: "./media/characters/leonardo-lycheborne/feral.svg",
                extra: 210 / 186,
                bottom: 0.108
            }
        },
        taur: {
            height: math.unit(11, "feet"),
            weight: math.unit(3300, "lb"),
            name: "Taur",
            image: {
                source: "./media/characters/leonardo-lycheborne/taur.svg",
                extra: 320 / 303,
                bottom: 0.025
            }
        },
        barghest: {
            height: math.unit(11, "feet"),
            weight: math.unit(1300, "lb"),
            name: "Barghest",
            image: {
                source: "./media/characters/leonardo-lycheborne/barghest.svg",
                extra: 323 / 302,
                bottom: 0.027
            }
        },
        dick: {
            height: math.unit((6 + 1 / 12) / 4.09, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/leonardo-lycheborne/dick.svg"
            }
        },
        dickWere: {
            height: math.unit((20) / 3.8, "feet"),
            name: "Dick (Were)",
            image: {
                source: "./media/characters/leonardo-lycheborne/dick.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 1 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Jet" },
    {
        front: {
            height: math.unit(10, "feet"),
            weight: math.unit(350, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/jet/front.svg",
                extra: 2050 / 1980,
                bottom: 0.013
            }
        },
        back: {
            height: math.unit(10, "feet"),
            weight: math.unit(350, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/jet/back.svg",
                extra: 2050 / 1980,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Tanarath" },
    {
        front: {
            height: math.unit(15, "feet"),
            weight: math.unit(2800, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/tanarath/front.svg",
                extra: 2392 / 2220,
                bottom: 0.03
            }
        },
        back: {
            height: math.unit(15, "feet"),
            weight: math.unit(2800, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/tanarath/back.svg",
                extra: 2392 / 2220,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Patty CattyBatty" },
    {
        front: {
            height: math.unit(7 + 1 / 12, "feet"),
            weight: math.unit(175, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/patty-cattybatty/front.svg",
                extra: 908 / 874,
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
            height: math.unit(7 + 1 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Cappu" },
    {
        front: {
            height: math.unit(4 + 5 / 12, "feet"),
            weight: math.unit(90, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/cappu/front.svg",
                extra: 1247 / 1152,
                bottom: 0.012
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sebi" },
    {
        frontDressed: {
            height: math.unit(70, "cm"),
            weight: math.unit(6, "kg"),
            name: "Front (Dressed)",
            image: {
                source: "./media/characters/sebi/front-dressed.svg",
                extra: 713.5 / 686.5,
                bottom: 0.003
            }
        },
        front: {
            height: math.unit(70, "cm"),
            weight: math.unit(5, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/sebi/front.svg",
                extra: 713.5 / 686.5,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Typhek" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/typhek/front.svg",
                extra: 1948 / 1929,
                bottom: 0.025
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/typhek/side.svg",
                extra: 2034 / 2010,
                bottom: 0.003
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/typhek/back.svg",
                extra: 2005 / 1978,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Kassy" },
    {
        side: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/kassy/side.svg",
                extra: 1280 / 1225,
                bottom: 0.002
            }
        },
        front: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kassy/front.svg",
                extra: 1280 / 1225,
                bottom: 0.025
            }
        },
        back: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/kassy/back.svg",
                extra: 1280 / 1225,
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
            height: math.unit(5 + 7 / 12, "feet")
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
))

characterMakers.push(() => makeCharacter(
    { name: "Neil" },
    {
        front: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(200, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/neil/front.svg",
                extra: 1326 / 1250,
                bottom: 0.023
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 1 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(200, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Atticus" },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(190, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/atticus/front.svg",
                extra: 2934 / 2785,
                bottom: 0.025
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(180, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Milo" },
    {
        side: {
            height: math.unit(9, "feet"),
            weight: math.unit(650, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/milo/side.svg",
                extra: 2644 / 2310,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Ijzer" },
    {
        side: {
            height: math.unit(8, "meters"),
            weight: math.unit(90000, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/ijzer/side.svg",
                extra: 2756 / 1600,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Luca Cervicum" },
    {
        front: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(153, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/luca-cervicum/front.svg",
                extra: 370 / 327,
                bottom: 0.015
            }
        },
        back: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(153, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/luca-cervicum/back.svg",
                extra: 367 / 333,
                bottom: 0.005
            }
        },
        frontGear: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(173, "lb"),
            name: "Front (Gear)",
            image: {
                source: "./media/characters/luca-cervicum/front-gear.svg",
                extra: 377 / 333,
                bottom: 0.006
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Oliver" },
    {
        front: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(304, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/oliver/front.svg",
                extra: 157 / 143,
                bottom: 0.08
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 1 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Shane" },
    {
        front: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(140, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/shane/front.svg",
                extra: 304 / 289,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Shin" },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(178, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/shin/front.svg",
                extra: 159 / 151,
                bottom: 0.015
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Xerxes" },
    {
        front: {
            height: math.unit(5 + 10 / 12, "feet"),
            weight: math.unit(168, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/xerxes/front.svg",
                extra: 282 / 260,
                bottom: 0.045
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 10 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Chaska" },
    {
        front: {
            height: math.unit(6 + 7 / 12, "feet"),
            weight: math.unit(208, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/chaska/front.svg",
                extra: 332 / 319,
                bottom: 0.015
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Enuk" },
    {
        front: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(208, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/enuk/front.svg",
                extra: 437 / 406,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 8 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Bruun" },
    {
        front: {
            height: math.unit(5 + 10 / 12, "feet"),
            weight: math.unit(252, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/bruun/front.svg",
                extra: 197 / 187,
                bottom: 0.012
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 10 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Alexeev" },
    {
        front: {
            height: math.unit(6 + 10 / 12, "feet"),
            weight: math.unit(255, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/alexeev/front.svg",
                extra: 213 / 200,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 10 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Evelyn" },
    {
        front: {
            height: math.unit(2 + 8 / 12, "feet"),
            weight: math.unit(22, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/evelyn/front.svg",
                extra: 208 / 180
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2 + 8 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Inca" },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(139, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/inca/front.svg",
                extra: 294 / 291,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Magdalene" },
    {
        front: {
            height: math.unit(5 + 1 / 12, "feet"),
            weight: math.unit(84, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/magdalene/front.svg",
                extra: 293 / 273
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 1 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mera" },
    {
        front: {
            height: math.unit(6 + 3 / 12, "feet"),
            weight: math.unit(185, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mera/front.svg",
                extra: 291 / 277,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 3 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ceres" },
    {
        front: {
            height: math.unit(6 + 7 / 12, "feet"),
            weight: math.unit(160, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ceres/front.svg",
                extra: 1023 / 950,
                bottom: 0.027
            }
        },
        back: {
            height: math.unit(6 + 7 / 12, "feet"),
            weight: math.unit(160, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/ceres/back.svg",
                extra: 1023 / 950
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kris" },
    {
        front: {
            height: math.unit(5 + 10 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kris/front.svg",
                extra: 885 / 803,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 10 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Taluthus" },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(120, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/taluthus/front.svg",
                extra: 903 / 833,
                bottom: 0.015
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
            height: math.unit(300, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Dawn" },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(145, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/dawn/front.svg",
                extra: 2094 / 2016,
                bottom: 0.025
            }
        },
        back: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(160, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/dawn/back.svg",
                extra: 2112 / 2080,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Arador" },
    {
        anthro: {
            height: math.unit(8 + 3 / 12, "feet"),
            weight: math.unit(450, "lb"),
            name: "Anthro",
            image: {
                source: "./media/characters/arador/anthro.svg",
                extra: 1835 / 1718,
                bottom: 0.025
            }
        },
        feral: {
            height: math.unit(4, "feet"),
            weight: math.unit(200, "lb"),
            name: "Feral",
            image: {
                source: "./media/characters/arador/feral.svg",
                extra: 1683 / 1514,
                bottom: 0.07
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8 + 3 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(82.5, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Dharsi" },
    {
        front: {
            height: math.unit(5 + 10 / 12, "feet"),
            weight: math.unit(125, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/dharsi/front.svg",
                extra: 716 / 630,
                bottom: 0.035
            }
        },
    },
    [
        {
            name: "Nano",
            height: math.unit(100, "nm")
        },
        {
            name: "Micro",
            height: math.unit(2, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 10 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(1000, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(10, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(3000, "miles")
        },
        {
            name: "Teramacro",
            height: math.unit(500000, "miles")
        },
        {
            name: "Teramacro+",
            height: math.unit(30, "galaxies")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Deathy" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/deathy/front.svg",
                extra: 1552 / 1463,
                bottom: 0.025
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/deathy/side.svg",
                extra: 1604 / 1455,
                bottom: 0.025
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/deathy/back.svg",
                extra: 1580 / 1463,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(5, "millimeters")
        },
        {
            name: "Normal",
            height: math.unit(6 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Juniper" },
    {
        front: {
            height: math.unit(16, "feet"),
            weight: math.unit(4000, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/juniper/front.svg",
                bottom: 0.04
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(16, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Hipster" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/hipster/front.svg",
                extra: 1312 / 1209,
                bottom: 0.025
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/hipster/back.svg",
                extra: 1281 / 1196,
                bottom: 0.01
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
            height: math.unit(4, "inches"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(500, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(1000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Tendirmuldr" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/tendirmuldr/front.svg",
                extra: 1878 / 1772,
                bottom: 0.015
            }
        },
    },
    [
        {
            name: "Megamacro",
            height: math.unit(1500, "miles"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mort" },
    {
        front: {
            height: math.unit(14, "feet"),
            weight: math.unit(12000, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mort/front.svg",
                extra: 365 / 318,
                bottom: 0.01
            }
        },
        side: {
            height: math.unit(14, "feet"),
            weight: math.unit(12000, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/mort/side.svg",
                extra: 365 / 318,
                bottom: 0.052
            },
            default: true
        },
        back: {
            height: math.unit(14, "feet"),
            weight: math.unit(12000, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/mort/back.svg",
                extra: 371 / 332,
                bottom: 0.18
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
))

characterMakers.push(() => makeCharacter(
    { name: "Lycoa" },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(1, "ton"),
            name: "Front",
            image: {
                source: "./media/characters/lycoa/front.svg",
                extra: 1875 / 1789,
                bottom: 0.022
            }
        },
        back: {
            height: math.unit(8, "feet"),
            weight: math.unit(1, "ton"),
            name: "Back",
            image: {
                source: "./media/characters/lycoa/back.svg",
                extra: 1835 / 1781,
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
        {
            name: "Macro",
            height: math.unit(30, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Naldara" },
    {
        front: {
            height: math.unit(4 + 2 / 12, "feet"),
            weight: math.unit(70, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/naldara/front.svg",
                extra: 841 / 720,
                bottom: 0.04
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Briar" },
    {
        front: {
            height: math.unit(13 + 7 / 12, "feet"),
            weight: math.unit(1500, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/briar/front.svg",
                extra: 626 / 596,
                bottom: 0.08
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(13 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Vanguard" },
    {
        side: {
            height: math.unit(10, "feet"),
            weight: math.unit(500, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/vanguard/side.svg",
                extra: 502 / 425,
                bottom: 0.087
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
))

characterMakers.push(() => makeCharacter(
    { name: "Artemis" },
    {
        front: {
            height: math.unit(7.5, "feet"),
            weight: math.unit(2, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/artemis/front.svg",
                extra: 1192 / 1075,
                bottom: 0.07
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7.5, "feet"),
            default: true
        },
        {
            name: "Enlarged",
            height: math.unit(12, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kira" },
    {
        front: {
            height: math.unit(5 + 3 / 12, "feet"),
            weight: math.unit(160, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kira/front.svg",
                extra: 906 / 786,
                bottom: 0.01
            }
        },
        back: {
            height: math.unit(5 + 3 / 12, "feet"),
            weight: math.unit(160, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/kira/back.svg",
                extra: 882 / 757,
                bottom: 0.005
            }
        },
        frontDressed: {
            height: math.unit(5 + 3 / 12, "feet"),
            weight: math.unit(160, "lb"),
            name: "Front (Dressed)",
            image: {
                source: "./media/characters/kira/front-dressed.svg",
                extra: 906 / 786,
                bottom: 0.01
            }
        },
        beans: {
            height: math.unit(0.92, "feet"),
            name: "Beans",
            image: {
                source: "./media/characters/kira/beans.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 3 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Scramble" },
    {
        front: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(145, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/scramble/front.svg",
                extra: 763 / 727,
                bottom: 0.05
            }
        },
        back: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(145, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/scramble/back.svg",
                extra: 826 / 737,
                bottom: 0.002
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 4 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Biscuit" },
    {
        side: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(190, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/biscuit/side.svg",
                extra: 858 / 791,
                bottom: 0.044
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Poffin" },
    {
        front: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/poffin/front.svg",
                extra: 786 / 680,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Dhari" },
    {
        front: {
            height: math.unit(6 + 3 / 12, "feet"),
            weight: math.unit(519, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/dhari/front.svg",
                extra: 1048 / 946,
                bottom: 0.015
            }
        },
        back: {
            height: math.unit(6 + 3 / 12, "feet"),
            weight: math.unit(519, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/dhari/back.svg",
                extra: 1048 / 931,
                bottom: 0.005
            }
        },
        frontDressed: {
            height: math.unit(6 + 3 / 12, "feet"),
            weight: math.unit(519, "lb"),
            name: "Front (Dressed)",
            image: {
                source: "./media/characters/dhari/front-dressed.svg",
                extra: 1713 / 1546,
                bottom: 0.02
            }
        },
        backDressed: {
            height: math.unit(6 + 3 / 12, "feet"),
            weight: math.unit(519, "lb"),
            name: "Back (Dressed)",
            image: {
                source: "./media/characters/dhari/back-dressed.svg",
                extra: 1699 / 1537,
                bottom: 0.01
            }
        },
        maw: {
            height: math.unit(0.95, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/dhari/maw.svg"
            }
        },
        wereFront: {
            height: math.unit(12 + 8 / 12, "feet"),
            weight: math.unit(4000, "lb"),
            name: "Front (Were)",
            image: {
                source: "./media/characters/dhari/were-front.svg",
                extra: 1065 / 969,
                bottom: 0.015
            }
        },
        wereBack: {
            height: math.unit(12 + 8 / 12, "feet"),
            weight: math.unit(4000, "lb"),
            name: "Back (Were)",
            image: {
                source: "./media/characters/dhari/were-back.svg",
                extra: 1065 / 969,
                bottom: 0.012
            }
        },
        wereMaw: {
            height: math.unit(0.625, "meters"),
            name: "Maw (Were)",
            image: {
                source: "./media/characters/dhari/were-maw.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 3 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rena Dyne" },
    {
        anthro: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(175, "lb"),
            name: "Anthro",
            image: {
                source: "./media/characters/rena-dyne/anthro.svg",
                extra: 1849 / 1785,
                bottom: 0.005
            }
        },
        taur: {
            height: math.unit(15 + 6 / 12, "feet"),
            weight: math.unit(8000, "lb"),
            name: "Taur",
            image: {
                source: "./media/characters/rena-dyne/taur.svg",
                extra: 2315 / 2234,
                bottom: 0.033
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Weremeep" },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(600, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/weremeep/front.svg",
                extra: 967 / 862,
                bottom: 0.01
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
            name: "Lorg",
            height: math.unit(12, "feet")
        },
        {
            name: "Oh Lawd She Comin'",
            height: math.unit(20, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Reza" },
    {
        front: {
            height: math.unit(4, "feet"),
            weight: math.unit(90, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/reza/front.svg",
                extra: 1183 / 1111,
                bottom: 0.017
            }
        },
        back: {
            height: math.unit(4, "feet"),
            weight: math.unit(90, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/reza/back.svg",
                extra: 1183 / 1111,
                bottom: 0.01
            }
        },
        drake: {
            height: math.unit(30, "feet"),
            weight: math.unit(246960, "lb"),
            name: "Drake",
            image: {
                source: "./media/characters/reza/drake.svg",
                extra: 2350/2024,
                bottom: 60.7/2403
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
))

characterMakers.push(() => makeCharacter(
    { name: "Athea" },
    {
        side: {
            height: math.unit(15, "feet"),
            weight: math.unit(14, "tons"),
            name: "Side",
            image: {
                source: "./media/characters/athea/side.svg",
                extra: 960 / 540,
                bottom: 0.003
            }
        },
        sitting: {
            height: math.unit(6 * 2.85, "feet"),
            weight: math.unit(14, "tons"),
            name: "Sitting",
            image: {
                source: "./media/characters/athea/sitting.svg",
                extra: 621 / 581,
                bottom: 0.075
            }
        },
        maw: {
            height: math.unit(7.59498031496063, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/athea/maw.svg"
            }
        },
    },
    [
        {
            name: "Lap Cat",
            height: math.unit(2.5, "feet")
        },
        {
            name: "Minimacro",
            height: math.unit(15, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(120, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(640, "feet")
        },
        {
            name: "Colossus",
            height: math.unit(2.2, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Seroko" },
    {
        front: {
            height: math.unit(8 + 8 / 12, "feet"),
            weight: math.unit(130, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/seroko/front.svg",
                extra: 1385 / 1280,
                bottom: 0.025
            }
        },
        back: {
            height: math.unit(8 + 8 / 12, "feet"),
            weight: math.unit(130, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/seroko/back.svg",
                extra: 1369 / 1238,
                bottom: 0.018
            }
        },
        frontDressed: {
            height: math.unit(8 + 8 / 12, "feet"),
            weight: math.unit(130, "kg"),
            name: "Front (Dressed)",
            image: {
                source: "./media/characters/seroko/front-dressed.svg",
                extra: 1366 / 1275,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8 + 8 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Quatzi" },
    {
        front: {
            height: math.unit(5.5, "feet"),
            weight: math.unit(160, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/quatzi/front.svg",
                extra: 2346 / 2242,
                bottom: 0.015
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5.5, "feet"),
            default: true
        },
        {
            name: "Big",
            height: math.unit(7.7, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sen" },
    {
        front: {
            height: math.unit(5 + 11 / 12, "feet"),
            weight: math.unit(180, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sen/front.svg",
                extra: 1321 / 1254,
                bottom: 0.015
            }
        },
        side: {
            height: math.unit(5 + 11 / 12, "feet"),
            weight: math.unit(180, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/sen/side.svg",
                extra: 1321 / 1254,
                bottom: 0.007
            }
        },
        back: {
            height: math.unit(5 + 11 / 12, "feet"),
            weight: math.unit(180, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/sen/back.svg",
                extra: 1321 / 1254
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 11 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Fruity" },
    {
        front: {
            height: math.unit(166.6, "cm"),
            weight: math.unit(66.6, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/fruity/front.svg",
                extra: 1510 / 1386,
                bottom: 0.04
            }
        },
        back: {
            height: math.unit(166.6, "cm"),
            weight: math.unit(66.6, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/fruity/back.svg",
                extra: 1563 / 1435,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(166.6, "cm"),
            default: true
        },
        {
            name: "Demonic",
            height: math.unit(166.6, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Zost" },
    {
        side: {
            height: math.unit(10, "feet"),
            weight: math.unit(500, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/zost/side.svg",
                extra: 966 / 880,
                bottom: 0.075
            }
        },
        mawFront: {
            height: math.unit(1.08, "meters"),
            name: "Maw (Front)",
            image: {
                source: "./media/characters/zost/maw-front.svg"
            }
        },
        mawSide: {
            height: math.unit(2.66, "feet"),
            name: "Maw (Side)",
            image: {
                source: "./media/characters/zost/maw-side.svg"
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
))

characterMakers.push(() => makeCharacter(
    { name: "Luci" },
    {
        front: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/luci/front.svg",
                extra: 1985 / 1884,
                bottom: 0.04
            }
        },
        back: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/luci/back.svg",
                extra: 1892 / 1791,
                bottom: 0.002
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 4 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "2th" },
    {
        front: {
            height: math.unit(1500, "feet"),
            weight: math.unit(3.8e6, "tons"),
            name: "Front",
            image: {
                source: "./media/characters/2th/front.svg",
                extra: 3489 / 3350,
                bottom: 0.1
            }
        },
        foot: {
            height: math.unit(461, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/2th/foot.svg"
            }
        },
    },
    [
        {
            name: "\"Micro\"",
            height: math.unit(15 + 7 / 12, "feet")
        },
        {
            name: "Normal",
            height: math.unit(1500, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(5000, "feet")
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
            name: "Galactic",
            height: math.unit(50, "AU")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Amethyst" },
    {
        front: {
            height: math.unit(5 + 6 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/amethyst/front.svg",
                extra: 2078 / 2040,
                bottom: 0.045
            }
        },
        back: {
            height: math.unit(5 + 6 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/amethyst/back.svg",
                extra: 2021 / 1989,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 6 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Yumi Akiyama" },
    {
        front: {
            height: math.unit(4 + 11 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/yumi-akiyama/front.svg",
                extra: 1327 / 1235,
                bottom: 0.02
            }
        },
        back: {
            height: math.unit(4 + 11 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/yumi-akiyama/back.svg",
                extra: 1287 / 1245,
                bottom: 0.002
            }
        },
    },
    [
        {
            name: "Galactic",
            height: math.unit(50, "galaxies"),
            default: true
        },
        {
            name: "Universal",
            height: math.unit(100, "universes")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rifter Yrmori" },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(500, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/rifter-yrmori/front.svg",
                extra: 1180 / 1125,
                bottom: 0.02
            }
        },
        back: {
            height: math.unit(8, "feet"),
            weight: math.unit(500, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/rifter-yrmori/back.svg",
                extra: 1190 / 1145,
                bottom: 0.001
            }
        },
        wings: {
            height: math.unit(7.75, "feet"),
            weight: math.unit(500, "lb"),
            name: "Wings",
            image: {
                source: "./media/characters/rifter-yrmori/wings.svg",
                extra: 1357 / 1285
            }
        },
        maw: {
            height: math.unit(0.8, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/rifter-yrmori/maw.svg"
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
            name: "Macro",
            height: math.unit(42, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Tahajin" },
    {
        were: {
            height: math.unit(25 + 6 / 12, "feet"),
            weight: math.unit(10000, "lb"),
            name: "Were",
            image: {
                source: "./media/characters/tahajin/were.svg",
                extra: 801 / 770,
                bottom: 0.042
            }
        },
        aquatic: {
            height: math.unit(6 + 4 / 12, "feet"),
            weight: math.unit(160, "lb"),
            name: "Aquatic",
            image: {
                source: "./media/characters/tahajin/aquatic.svg",
                extra: 572 / 542,
                bottom: 0.04
            }
        },
        chow: {
            height: math.unit(8 + 11 / 12, "feet"),
            weight: math.unit(450, "lb"),
            name: "Chow",
            image: {
                source: "./media/characters/tahajin/chow.svg",
                extra: 660 / 640,
                bottom: 0.015
            }
        },
        demiNaga: {
            height: math.unit(6 + 8 / 12, "feet"),
            weight: math.unit(300, "lb"),
            name: "Demi Naga",
            image: {
                source: "./media/characters/tahajin/demi-naga.svg",
                extra: 643 / 615,
                bottom: 0.1
            }
        },
        data: {
            height: math.unit(5, "inches"),
            weight: math.unit(0.1, "lb"),
            name: "Data",
            image: {
                source: "./media/characters/tahajin/data.svg"
            }
        },
        fluu: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(140, "lb"),
            name: "Fluu",
            image: {
                source: "./media/characters/tahajin/fluu.svg",
                extra: 628 / 592,
                bottom: 0.02
            }
        },
        starWarrior: {
            height: math.unit(4 + 5 / 12, "feet"),
            weight: math.unit(50, "lb"),
            name: "Star Warrior",
            image: {
                source: "./media/characters/tahajin/star-warrior.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(25 + 6 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Gabira" },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(350, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/gabira/front.svg",
                extra: 608 / 580,
                bottom: 0.03
            }
        },
        back: {
            height: math.unit(8, "feet"),
            weight: math.unit(350, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/gabira/back.svg",
                extra: 608 / 580,
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
))

characterMakers.push(() => makeCharacter(
    { name: "Sasha Katraine" },
    {
        front: {
            height: math.unit(5 + 3 / 12, "feet"),
            weight: math.unit(137, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sasha-katraine/front.svg",
                bottom: 0.045
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
            height: math.unit(5 + 3 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Der" },
    {
        side: {
            height: math.unit(4, "inches"),
            weight: math.unit(200, "grams"),
            name: "Side",
            image: {
                source: "./media/characters/der/side.svg",
                extra: 719 / 400,
                bottom: 30.6 / 749.9187
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
))

characterMakers.push(() => makeCharacter(
    { name: "Fixerdragon" },
    {
        side: {
            height: math.unit(30, "meters"),
            weight: math.unit(700, "tonnes"),
            name: "Side",
            image: {
                source: "./media/characters/fixerdragon/side.svg",
                extra: (1293.0514 - 116.03) / 1106.86,
                bottom: 116.03 / 1293.0514
            }
        },
    },
    [
        {
            name: "Planck",
            height: math.unit(1.6e-35, "meters")
        },
        {
            name: "Micro",
            height: math.unit(0.4, "meters")
        },
        {
            name: "Normal",
            height: math.unit(30, "meters"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(1.2, "megameters")
        },
        {
            name: "Teramacro",
            height: math.unit(130, "terameters")
        },
        {
            name: "Yottamacro",
            height: math.unit(6200, "yottameters")
        },
    ]
));

characterMakers.push(() => makeCharacter(
    { name: "Kite" },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(250, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kite/front.svg",
                extra: 2796 / 2659,
                bottom: 0.002
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
            name: "Macro",
            height: math.unit(360, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(1500, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Poojawa Vynar" },
    {
        front: {
            height: math.unit(5 + 10 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/poojawa-vynar/front.svg",
                extra: (1506.1547 - 55) / 1356.6,
                bottom: 55 / 1506.1547
            }
        },
        frontTailless: {
            height: math.unit(5 + 10 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front (Tailless)",
            image: {
                source: "./media/characters/poojawa-vynar/front-tailless.svg",
                extra: (1506.1547 - 55) / 1356.6,
                bottom: 55 / 1506.1547
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 10 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Violette" },
    {
        front: {
            height: math.unit(293, "meters"),
            weight: math.unit(70400, "tons"),
            name: "Front",
            image: {
                source: "./media/characters/violette/front.svg",
                extra: 1227 / 1180,
                bottom: 0.005
            }
        },
        back: {
            height: math.unit(293, "meters"),
            weight: math.unit(70400, "tons"),
            name: "Back",
            image: {
                source: "./media/characters/violette/back.svg",
                extra: 1227 / 1180,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(293, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Alessandra" },
    {
        front: {
            height: math.unit(1050, "feet"),
            weight: math.unit(200000, "tons"),
            name: "Front",
            image: {
                source: "./media/characters/alessandra/front.svg",
                extra: 960 / 912,
                bottom: 0.06
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(1050, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(900, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Person", species: "Catdragon" },
    {
        front: {
            height: math.unit(5, "feet"),
            weight: math.unit(187, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/person/front.svg",
                extra: 3087 / 2945,
                bottom: 91 / 3181
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
            height: math.unit(5, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(90, "feet")
        },
        {
            name: "Max Size",
            height: math.unit(280, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ty" },
    {
        front: {
            height: math.unit(4.5, "meters"),
            weight: math.unit(3200, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ty/front.svg",
                extra: 1038 / 960,
                bottom: 31.156 / 1068
            }
        },
        back: {
            height: math.unit(4.5, "meters"),
            weight: math.unit(3200, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/ty/back.svg",
                extra: 1044 / 966,
                bottom: 7.48 / 1049
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4.5, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rocky" },
    {
        front: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(115, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/rocky/front.svg",
                extra: 1012 / 975,
                bottom: 54 / 1066
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 4 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ruin" },
    {
        upright: {
            height: math.unit(6, "meters"),
            weight: math.unit(4000, "kg"),
            name: "Upright",
            image: {
                source: "./media/characters/ruin/upright.svg",
                extra: 668 / 661,
                bottom: 42 / 799.8396
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Robin" },
    {
        front: {
            height: math.unit(5, "feet"),
            weight: math.unit(106, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/robin/front.svg",
                extra: 862 / 799,
                bottom: 42.4 / 914.8856
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
))

characterMakers.push(() => makeCharacter(
    { name: "Saian" },
    {
        side: {
            height: math.unit(3, "feet"),
            weight: math.unit(225, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/saian/side.svg",
                extra: 566 / 356,
                bottom: 79.7 / 643
            }
        },
        maw: {
            height: math.unit(2.85, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/saian/maw.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(3, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Equus Silvermane" },
    {
        side: {
            height: math.unit(8, "feet"),
            weight: math.unit(300, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/equus-silvermane/side.svg",
                extra: 2176 / 2050,
                bottom: 65.7 / 2245
            }
        },
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(300, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/equus-silvermane/front.svg",
                extra: 4633 / 4400,
                bottom: 71.3 / 4706.915
            }
        },
        sideStepping: {
            height: math.unit(8, "feet"),
            weight: math.unit(300, "lb"),
            name: "Side (Stepping)",
            image: {
                source: "./media/characters/equus-silvermane/side-stepping.svg",
                extra: 1968 / 1860,
                bottom: 16.4 / 1989
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
            height: math.unit(75, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(150, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(1000, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(1, "mile")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Windar" },
    {
        side: {
            height: math.unit(20, "feet"),
            weight: math.unit(30000, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/windar/side.svg",
                extra: 1491 / 1248,
                bottom: 82.56 / 1568
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(20, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Melody" },
    {
        side: {
            height: math.unit(15.66, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/melody/side.svg",
                extra: 1097 / 944,
                bottom: 11.8 / 1109
            }
        },
        sideOutfit: {
            height: math.unit(15.66, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side (Outfit)",
            image: {
                source: "./media/characters/melody/side-outfit.svg",
                extra: 1097 / 944,
                bottom: 11.8 / 1109
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(15.66, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Windera" },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(325, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/windera/front.svg",
                extra: 3180 / 2845,
                bottom: 178 / 3365
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
))

characterMakers.push(() => makeCharacter(
    { name: "Sonear" },
    {
        front: {
            height: math.unit(28.75, "feet"),
            weight: math.unit(2000, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/sonear/front.svg",
                extra: 1041.1 / 964.9,
                bottom: 53.7 / 1096.6
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(28.75, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kanara" },
    {
        side: {
            height: math.unit(25.5, "feet"),
            weight: math.unit(23000, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/kanara/side.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(25.5, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ereus" },
    {
        side: {
            height: math.unit(10, "feet"),
            weight: math.unit(1000, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/ereus/side.svg",
                extra: 1157 / 959,
                bottom: 153 / 1312.5
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
))

characterMakers.push(() => makeCharacter(
    { name: "E-ter" },
    {
        side: {
            height: math.unit(4.5, "feet"),
            weight: math.unit(500, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/e-ter/side.svg",
                extra: 1550 / 1248,
                bottom: 146 / 1694
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4.5, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Yamie" },
    {
        side: {
            height: math.unit(9.7, "feet"),
            weight: math.unit(4000, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/yamie/side.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(9.7, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Anders" },
    {
        front: {
            height: math.unit(50, "feet"),
            weight: math.unit(50000, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/anders/front.svg",
                extra: 570 / 539,
                bottom: 14.7 / 586.7
            }
        },
    },
    [
        {
            name: "Large",
            height: math.unit(50, "feet")
        },
        {
            name: "Macro",
            height: math.unit(2000, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(12, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Reban" },
    {
        front: {
            height: math.unit(7 + 2 / 12, "feet"),
            weight: math.unit(300, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/reban/front.svg",
                extra: 516 / 487,
                bottom: 42.82 / 558.356
            }
        },
        dick: {
            height: math.unit(7 / 5, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/reban/dick.svg"
            }
        },
    },
    [
        {
            name: "Natural Height",
            height: math.unit(7 + 2 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(500, "feet"),
            default: true
        },
        {
            name: "Canon Height",
            height: math.unit(50, "AU")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Terrance Keayes" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/terrance-keayes/front.svg",
                extra: 1.005,
                bottom: 151 / 1615
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/terrance-keayes/side.svg",
                extra: 1.005,
                bottom: 129.4 / 1544
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/terrance-keayes/back.svg",
                extra: 1.005,
                bottom: 58.4 / 1557.3
            }
        },
        dick: {
            height: math.unit(6 * 0.208, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/terrance-keayes/dick.svg"
            }
        },
    },
    [
        {
            name: "Canon Height",
            height: math.unit(35, "miles"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ofelia" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ofelia/front.svg",
                extra: 546 / 541,
                bottom: 39 / 583
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/ofelia/back.svg",
                extra: 564 / 559.5,
                bottom: 8.69 / 573.02
            }
        },
        maw: {
            height: math.unit(1, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/ofelia/maw.svg"
            }
        },
        foot: {
            height: math.unit(1.949, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/ofelia/foot.svg"
            }
        },
    },
    [
        {
            name: "Canon Height",
            height: math.unit(2000, "miles"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Samuel" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/samuel/front.svg",
                extra: 265 / 258,
                bottom: 2 / 266.1566
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(100, "feet"),
            default: true
        },
        {
            name: "Full Size",
            height: math.unit(1000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Beishir Kiel" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(300, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/beishir-kiel/front.svg",
                extra: 569 / 547,
                bottom: 41.9 / 609
            }
        },
        maw: {
            height: math.unit(6 * 0.202, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/beishir-kiel/maw.svg"
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(300, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Logan Grey" },
    {
        front: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/logan-grey/front.svg",
                extra: 2539 / 2393,
                bottom: 97.6 / 2636.37
            }
        },
        frontAlt: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front (Alt)",
            image: {
                source: "./media/characters/logan-grey/front-alt.svg",
                extra: 958 / 893,
                bottom: 15 / 970.768
            }
        },
        back: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/logan-grey/back.svg",
                extra: 958 / 893,
                bottom: 2.1881 / 970.9788
            }
        },
        dick: {
            height: math.unit(1.437, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/logan-grey/dick.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 8 / 12, "feet")
        },
        {
            name: "The 500 Foot Femboy",
            height: math.unit(500, "feet"),
            default: true
        },
        {
            name: "Megmacro",
            height: math.unit(20, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Draganta" },
    {
        front: {
            height: math.unit(8 + 2 / 12, "feet"),
            weight: math.unit(275, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/draganta/front.svg",
                extra: 1177 / 1135,
                bottom: 33.46 / 1212.1
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8 + 6 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(150, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(1000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Voski", species: "Corvid" },
    {
        front: {
            height: math.unit(1.72, "m"),
            weight: math.unit(80, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/voski/front.svg",
                extra: 2076.22 / 2022.4,
                bottom: 102.7 / 2177.3866
            }
        },
        frontNsfw: {
            height: math.unit(1.72, "m"),
            weight: math.unit(80, "lb"),
            name: "Front (NSFW)",
            image: {
                source: "./media/characters/voski/front-nsfw.svg",
                extra: 2076.22 / 2022.4,
                bottom: 102.7 / 2177.3866
            }
        },
        back: {
            height: math.unit(1.72, "m"),
            weight: math.unit(80, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/voski/back.svg",
                extra: 2104 / 2051,
                bottom: 10.45 / 2113.63
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1.72, "m")
        },
        {
            name: "Macro",
            height: math.unit(55, "m"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(300, "m")
        },
        {
            name: "Macro++",
            height: math.unit(700, "m")
        },
        {
            name: "Macro+++",
            height: math.unit(4500, "m")
        },
        {
            name: "Macro++++",
            height: math.unit(45, "km")
        },
        {
            name: "Macro+++++",
            height: math.unit(1220, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Icowom Lee" },
    {
        front: {
            height: math.unit(2.3, "m"),
            weight: math.unit(304, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/icowom-lee/front.svg",
                extra: 3076 / 2933,
                bottom: 51.4 / 3125.1889
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2.3, "meters"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(94, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Shock Diamond", species: "Aeromorphic Synthetic Pharaoh Hound" },
    {
        front: {
            height: math.unit(22, "meters"),
            weight: math.unit(21000, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/shock-diamond/front.svg",
                extra: 2204 / 2053,
                bottom: 65 / 2239.47
            }
        },
        frontNude: {
            height: math.unit(22, "meters"),
            weight: math.unit(21000, "kg"),
            name: "Front (Nude)",
            image: {
                source: "./media/characters/shock-diamond/front-nude.svg",
                extra: 2514 / 2285,
                bottom: 13 / 2527.56
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(3, "meters")
        },
        {
            name: "Macro",
            height: math.unit(22, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rory" },
    {
        front: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/rory/front.svg",
                extra: 589 / 556,
                bottom: 45.7 / 635.76
            }
        },
        frontNude: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front (Nude)",
            image: {
                source: "./media/characters/rory/front-nude.svg",
                extra: 589 / 556,
                bottom: 45.7 / 635.76
            }
        },
        side: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/rory/side.svg",
                extra: 597 / 564,
                bottom: 55 / 653
            }
        },
        back: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/rory/back.svg",
                extra: 620 / 585,
                bottom: 8.86 / 630.43
            }
        },
        dick: {
            height: math.unit(0.86, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/rory/dick.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 4 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(100, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(140, "feet")
        },
        {
            name: "Macro++",
            height: math.unit(300, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sprisk" },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(190, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sprisk/front.svg",
                extra: 1225 / 1180,
                bottom: 42.7 / 1266.4
            }
        },
        frontNsfw: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(190, "lb"),
            name: "Front (NSFW)",
            image: {
                source: "./media/characters/sprisk/front-nsfw.svg",
                extra: 1225 / 1180,
                bottom: 42.7 / 1266.4
            }
        },
        back: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(190, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/sprisk/back.svg",
                extra: 1247 / 1200,
                bottom: 5.6 / 1253.04
            }
        },
    },
    [
        {
            name: "Tiny",
            height: math.unit(2, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet"),
            default: true
        },
        {
            name: "Mini Macro",
            height: math.unit(18, "feet")
        },
        {
            name: "Macro",
            height: math.unit(100, "feet")
        },
        {
            name: "MACRO",
            height: math.unit(50, "miles")
        },
        {
            name: "M A C R O",
            height: math.unit(300, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Bunsen" },
    {
        side: {
            height: math.unit(15.6, "meters"),
            weight: math.unit(700000, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/bunsen/side.svg",
                extra: 1644 / 358
            }
        },
        foot: {
            height: math.unit(1.611 * 1644 / 358, "meter"),
            name: "Foot",
            image: {
                source: "./media/characters/bunsen/foot.svg"
            }
        },
    },
    [
        {
            name: "Small",
            height: math.unit(10, "feet")
        },
        {
            name: "Normal",
            height: math.unit(15.6, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sesh" },
    {
        front: {
            height: math.unit(4 + 11 / 12, "feet"),
            weight: math.unit(140, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sesh/front.svg",
                extra: 3420 / 3231,
                bottom: 72 / 3949.5
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4 + 11 / 12, "feet")
        },
        {
            name: "Grown",
            height: math.unit(15, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(1500, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(30, "miles")
        },
        {
            name: "Continental",
            height: math.unit(3000, "miles")
        },
        {
            name: "Gravity Mass",
            height: math.unit(300000, "miles")
        },
        {
            name: "Planet Buster",
            height: math.unit(30000000, "miles")
        },
        {
            name: "Big",
            height: math.unit(3000000000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Pepper" },
    {
        front: {
            height: math.unit(9, "feet"),
            weight: math.unit(350, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/pepper/front.svg",
                extra: 1448/1312,
                bottom: 9.4/1457.88
            }
        },
        back: {
            height: math.unit(9, "feet"),
            weight: math.unit(350, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/pepper/back.svg",
                extra: 1423/1300,
                bottom: 4.6/1429
            }
        },
        maw: {
            height: math.unit(0.932, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/pepper/maw.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(9, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Maelstrom" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/maelstrom/front.svg",
                extra: 2100/1883,
                bottom: 94/2196.7
            }
        },
    },
    [
        {
            name: "Less Kaiju",
            height: math.unit(200, "feet")
        },
        {
            name: "Kaiju",
            height: math.unit(400, "feet"),
            default: true
        },
        {
            name: "Kaiju-er",
            height: math.unit(600, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Lexir" },
    {
        front: {
            height: math.unit(6 + 5/12, "feet"),
            weight: math.unit(180, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/lexir/front.svg",
                extra: 180/172,
                bottom: 12/192
            }
        },
        back: {
            height: math.unit(6 + 5/12, "feet"),
            weight: math.unit(180, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/lexir/back.svg",
                extra: 183.84/175.5,
                bottom: 3.1/187
            }
        },
    },
    [
        {
            name: "Very Smal",
            height: math.unit(1, "nm")
        },
        {
            name: "Normal",
            height: math.unit(6 + 5/12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(1, "mile")
        },
        {
            name: "Megamacro",
            height: math.unit(50, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Maksio" },
    {
        front: {
            height: math.unit(1.5, "meters"),
            weight: math.unit(100, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/maksio/front.svg",
                extra: 1549/1531,
                bottom: 123.7/1674.5429
            }
        },
        back: {
            height: math.unit(1.5, "meters"),
            weight: math.unit(100, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/maksio/back.svg",
                extra: 1541/1509,
                bottom: 97/1639
            }
        },
        hand: {
            height: math.unit(0.621, "feet"),
            name: "Hand",
            image: {
                source: "./media/characters/maksio/hand.svg"
            }
        },
        foot: {
            height: math.unit(1.611, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/maksio/foot.svg"
            }
        },
    },
    [
        {
            name: "Shrunken",
            height: math.unit(10, "cm")
        },
        {
            name: "Normal",
            height: math.unit(150, "cm"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Erza Bear" },
    {
        front: {
            height: math.unit(100, "feet"),
            name: "Front",
            image: {
                source: "./media/characters/erza-bear/front.svg",
                extra: 2449/2390,
                bottom: 46/2494
            }
        },
        back: {
            height: math.unit(100, "feet"),
            name: "Back",
            image: {
                source: "./media/characters/erza-bear/back.svg",
                extra: 2489/2430,
                bottom: 85.4/2480
            }
        },
        tail: {
            height: math.unit(42, "feet"),
            name: "Tail",
            image: {
                source: "./media/characters/erza-bear/tail.svg"
            }
        },
        tongue: {
            height: math.unit(8, "feet"),
            name: "Tongue",
            image: {
                source: "./media/characters/erza-bear/tongue.svg"
            }
        },
        dick: {
            height: math.unit(10.5, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/erza-bear/dick.svg"
            }
        },
        dickVertical: {
            height: math.unit(16.9, "feet"),
            name: "Dick (Vertical)",
            image: {
                source: "./media/characters/erza-bear/dick-vertical.svg"
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
))

characterMakers.push(() => makeCharacter(
    { name: "Violet Flor", species: "Skunk" },
    {
        front: {
            height: math.unit(172, "cm"),
            weight: math.unit(73, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/violet-flor/front.svg",
                extra: 1530/1442,
                bottom: 61.9/1588.8
            }
        },
        back: {
            height: math.unit(180, "cm"),
            weight: math.unit(73, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/violet-flor/back.svg",
                extra: 1692/1630,
                bottom: 20/1712
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(172, "cm"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Lynn Rhea", species: "Shark" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(220, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/lynn-rhea/front.svg",
                extra: 310/273
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(220, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/lynn-rhea/back.svg",
                extra: 310/273
            }
        },
        dicks: {
            height: math.unit(0.9, "feet"),
            name: "Dicks",
            image: {
                source: "./media/characters/lynn-rhea/dicks.svg"
            }
        },
        slit: {
            height: math.unit(0.4, "feet"),
            name: "Slit",
            image: {
                source: "./media/characters/lynn-rhea/slit.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1, "inch")
        },
        {
            name: "Macro",
            height: math.unit(60, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(2, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(3, "earths")
        },
        {
            name: "Galactic",
            height: math.unit(0.8, "galaxies")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Valathos" },
    {
        front: {
            height: math.unit(1600, "feet"),
            weight: math.unit(85758785169, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/valathos/front.svg",
                extra: 1451/1339
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(1600, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Azula" },
    {
        front: {
            height: math.unit(7 + 5/12, "feet"),
            weight: math.unit(300, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/azula/front.svg",
                extra: 3208/2880,
                bottom: 80.2/3277
            }
        },
        back: {
            height: math.unit(7 + 5/12, "feet"),
            weight: math.unit(300, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/azula/back.svg",
                extra: 3169/2822,
                bottom: 150.6/3321
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
            name: "Big",
            height: math.unit(20, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rupert" },
    {
        front: {
            height: math.unit(5 + 1/12, "feet"),
            weight: math.unit(110, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/rupert/front.svg",
                extra: 1549/1495,
                bottom: 54.2/1604.4
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 1/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sheera Castellar" },
    {
        front: {
            height: math.unit(8 + 4/12, "feet"),
            weight: math.unit(350, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sheera-castellar/front.svg",
                extra: 1957/1894,
                bottom: 26.97/1975.017
            }
        },
        side: {
            height: math.unit(8 + 4/12, "feet"),
            weight: math.unit(350, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/sheera-castellar/side.svg",
                extra: 1957/1894
            }
        },
        back: {
            height: math.unit(8 + 4/12, "feet"),
            weight: math.unit(350, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/sheera-castellar/back.svg",
                extra: 1957/1894
            }
        },
        angled: {
            height: math.unit((8 + 4/12) * (1 - 68/1875), "feet"),
            weight: math.unit(350, "lb"),
            name: "Angled",
            image: {
                source: "./media/characters/sheera-castellar/angled.svg",
                extra: 1807/1707,
                bottom: 68/1875
            }
        },
        genitals: {
            height: math.unit(2.2, "feet"),
            name: "Genitals",
            image: {
                source: "./media/characters/sheera-castellar/genitals.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8 + 4/12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(150, "feet"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(800, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Jaipur", species: "Black Panther" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/jaipur/front.svg",
                extra: 3860/3731,
                bottom: 287/4140
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/jaipur/back.svg",
                extra: 4060/3930,
                bottom: 151/4200
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1.85, "meters"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(150, "meters")
        },
        {
            name: "Macro+",
            height: math.unit(0.5, "miles")
        },
        {
            name: "Macro++",
            height: math.unit(2.5, "miles")
        },
        {
            name: "Macro+++",
            height: math.unit(12, "miles")
        },
        {
            name: "Macro++++",
            height: math.unit(120, "miles")
        },
        {
            name: "Macro+++++",
            height: math.unit(1200, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sheila (Wolf)" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sheila-wolf/front.svg",
                extra: 1931/1808,
                bottom: 29.5/1960
            }
        },
        dick: {
            height: math.unit(1.464, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/sheila-wolf/dick.svg"
            }
        },
        muzzle: {
            height: math.unit(0.513, "feet"),
            name: "Muzzle",
            image: {
                source: "./media/characters/sheila-wolf/muzzle.svg"
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(70, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Almor", species: "Dragon" },
    {
        front: {
            height: math.unit(32, "meters"),
            weight: math.unit(300000, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/almor/front.svg",
                extra: 1408/1322,
                bottom: 94.6/1506.5
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(32, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Silver" },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(200, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/silver/front.svg",
                extra: 472.1/450.5,
                bottom: 26.5/499.424
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
            height: math.unit(800, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(250, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Pliskin" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/pliskin/front.svg",
                extra: 1469/1359,
                bottom: 70/1540
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
            height: math.unit(5 + 11/12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(120, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sammy" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sammy/front.svg",
                extra: 1193/1089,
                bottom: 30.5/1226
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(1700, "feet"),
            default: true
        },
        {
            name: "Examacro",
            height: math.unit(2.5e9, "lightyears")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kuru", species: "Umbra" },
    {
        front: {
            height: math.unit(21, "meters"),
            weight: math.unit(12, "tonnes"),
            name: "Front",
            image: {
                source: "./media/characters/kuru/front.svg",
                extra: 4301/3785,
                bottom: 371.3/4691
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(21, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rakka", species: "Umbra" },
    {
        front: {
            height: math.unit(23, "meters"),
            weight: math.unit(12.2, "tonnes"),
            name: "Front",
            image: {
                source: "./media/characters/rakka/front.svg",
                extra: 4670/4169,
                bottom: 301/4968.7
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(23, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rhys (Feline)" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/rhys-feline/front.svg",
                extra: 2488/2308,
                bottom: 35.67/2519.19
            }
        },
    },
    [
        {
            name: "Really Small",
            height: math.unit(1, "nm")
        },
        {
            name: "Micro",
            height: math.unit(4, "inches")
        },
        {
            name: "Normal",
            height: math.unit(4 + 10/12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(100, "feet")
        },
        {
            name: "Megamacto",
            height: math.unit(50, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Alydar", species: "Raven/Snow Leopard" },
    {
        side: {
            height: math.unit(30, "feet"),
            weight: math.unit(35000, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/alydar/side.svg",
                extra: 234/222,
                bottom: 6.5/241
            }
        },
        front: {
            height: math.unit(30, "feet"),
            weight: math.unit(35000, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/alydar/front.svg",
                extra: 223.37/210.2,
                bottom: 22.3/246.76
            }
        },
        top: {
            height: math.unit(64.54, "feet"),
            weight: math.unit(35000, "kg"),
            name: "Top",
            image: {
                source: "./media/characters/alydar/top.svg"
            }
        },
        anthro: {
            height: math.unit(30, "feet"),
            weight: math.unit(9000, "kg"),
            name: "Anthro",
            image: {
                source: "./media/characters/alydar/anthro.svg",
                extra: 432/421,
                bottom: 7.18/440
            }
        },
        maw: {
            height: math.unit(11.693, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/alydar/maw.svg"
            }
        },
        head: {
            height: math.unit(11.693, "feet"),
            name: "Head",
            image: {
                source: "./media/characters/alydar/head.svg"
            }
        },
        headAlt: {
            height: math.unit(12.861, "feet"),
            name: "Head (Alt)",
            image: {
                source: "./media/characters/alydar/head-alt.svg"
            }
        },
        wing: {
            height: math.unit(20.712, "feet"),
            name: "Wing",
            image: {
                source: "./media/characters/alydar/wing.svg"
            }
        },
        wingFeather: {
            height: math.unit(9.662, "feet"),
            name: "Wing Feather",
            image: {
                source: "./media/characters/alydar/wing-feather.svg"
            }
        },
        countourFeather: {
            height: math.unit(4.154, "feet"),
            name: "Contour Feather",
            image: {
                source: "./media/characters/alydar/contour-feather.svg"
            }
        },
    },
    [
        {
            name: "Diplomatic",
            height: math.unit(13, "feet"),
            default: true
        },
        {
            name: "Small",
            height: math.unit(30, "feet")
        },
        {
            name: "Normal", 
            height: math.unit(95, "feet"),
            default: true
        },
        {
            name: "Large",
            height: math.unit(285, "feet")
        },
        {
            name: "Incomprehensible",
            height: math.unit(450, "megameters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Selicia" },
    {
        side: {
            height: math.unit(11, "feet"),
            weight: math.unit(1750, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/selicia/side.svg",
                extra: 440/396,
                bottom: 24.8/465.979
            }
        },
        maw: {
            height: math.unit(4.665, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/selicia/maw.svg"
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
))

characterMakers.push(() => makeCharacter(
    { name: "Layla" },
    {
        side: {
            height: math.unit(2 + 6 /12, "feet"),
            weight: math.unit(30, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/layla/side.svg",
                extra: 244/188,
                bottom: 18.2/262.1
            }
        },
        back: {
            height: math.unit(2 + 6 /12, "feet"),
            weight: math.unit(30, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/layla/back.svg",
                extra: 308/241.5,
                bottom: 8.9/316.8
            }
        },
        cumming: {
            height: math.unit(2 + 6 /12, "feet"),
            weight: math.unit(30, "lb"),
            name: "Cumming",
            image: {
                source: "./media/characters/layla/cumming.svg",
                extra: 342/279,
                bottom: 595/938
            }
        },
        dickFlaccid: {
            height: math.unit(2.595, "feet"),
            name: "Flaccid Genitals",
            image: {
                source: "./media/characters/layla/dick-flaccid.svg"
            }
        },
        dickErect: {
            height: math.unit(2.359, "feet"),
            name: "Erect Genitals",
            image: {
                source: "./media/characters/layla/dick-erect.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1, "inch")
        },
        {
            name: "Small",
            height: math.unit(1, "foot")
        },
        {
            name: "Normal",
            height: math.unit(2 + 6/12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(200, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(1000, "miles")
        },
        {
            name: "Planetary",
            height: math.unit(8000, "miles")
        },
        {
            name: "True Layla",
            height: math.unit(200000*7, "multiverses")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Knox" },
    {
        back: {
            height: math.unit(10.5, "feet"),
            weight: math.unit(800, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/knox/back.svg",
                extra: 1486/1089,
                bottom: 107/1601.4
            }
        },
        side: {
            height: math.unit(10.5, "feet"),
            weight: math.unit(800, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/knox/side.svg",
                extra: 244/218,
                bottom: 14/260
            }
        },
    },
    [
        {
            name: "Compact",
            height: math.unit(10.5, "feet"),
            default: true
        },
        {
            name: "Dynamax",
            height: math.unit(210, "feet")
        },
        {
            name: "Full Macro",
            height: math.unit(850, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Shin (Pikachu)" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(152, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/shin-pikachu/front.svg",
                extra: 1574/1480,
                bottom: 53.3/1626
            }
        },
        hand: {
            height: math.unit(1.055, "feet"),
            name: "Hand",
            image: {
                source: "./media/characters/shin-pikachu/hand.svg"
            }
        },
        foot: {
            height: math.unit(1.1, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/shin-pikachu/foot.svg"
            }
        },
        collar: {
            height: math.unit(0.386, "feet"),
            name: "Collar",
            image: {
                source: "./media/characters/shin-pikachu/collar.svg"
            }
        },
    },
    [
        {
            name: "Smallest",
            height: math.unit(0.5, "inches")
        },
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
            height: math.unit(150, "feet")
        },   
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kayda" },
    {
        front: {
            height: math.unit(28, "feet"),
            weight: math.unit(10500, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kayda/front.svg",
                extra: 1536/1428,
                bottom: 68.7/1603
            }
        },
        back: {
            height: math.unit(28, "feet"),
            weight: math.unit(10500, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/kayda/back.svg",
                extra: 1557/1464,
                bottom: 39.5/1597.49
            }
        },
        dick: {
            height: math.unit(3.858, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/kayda/dick.svg"
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(28, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Brian", species: "Barbary Lion" },
    {
        front: {
            height: math.unit(10 + 11/12, "feet"),
            weight: math.unit(1400, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/brian/front.svg",
                extra: 737/692,
                bottom: 55.4/785
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(10 + 11/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Khemri", species: "Jackal" },
    {
        front: {
            height: math.unit(5 + 8/12, "feet"),
            weight: math.unit(140, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/khemri/front.svg",
                extra: 4780/4059,
                bottom: 80.1/4859.25
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
            height: math.unit(5 + 8/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Felix Braveheart" },
    {
        front: {
            height: math.unit(13, "feet"),
            weight: math.unit(1700, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/felix-braveheart/front.svg",
                extra: 1222/1157,
                bottom: 53.2/1280
            }
        },
        back: {
            height: math.unit(13, "feet"),
            weight: math.unit(1700, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/felix-braveheart/back.svg",
                extra: 1277/1203,
                bottom: 50.2/1327
            }
        },
        feral: {
            height: math.unit(6, "feet"),
            weight: math.unit(400, "lb"),
            name: "Feral",
            image: {
                source: "./media/characters/felix-braveheart/feral.svg",
                extra: 682/625,
                bottom: 6.9/688
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(13, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Shadow Blade" },
    {
        side: {
            height: math.unit(5 + 11/12, "feet"),
            weight: math.unit(1400, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/shadow-blade/side.svg",
                extra: 1726/1267,
                bottom: 58.4/1785
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
))

characterMakers.push(() => makeCharacter(
    { name: "Karla Halldor" },
    {
        front: {
            height: math.unit(1 + 6/12, "feet"),
            weight: math.unit(25, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/karla-halldor/front.svg",
                extra: 1459/1383,
                bottom: 12/1472
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1 + 6/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ariam" },
    {
        front: {
            height: math.unit(6 + 2/12, "feet"),
            weight: math.unit(160, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ariam/front.svg",
                extra: 714/617,
                bottom: 23.4/737,
            }
        },
        squatting: {
            height: math.unit(4.1, "feet"),
            weight: math.unit(160, "lb"),
            name: "Squatting",
            image: {
                source: "./media/characters/ariam/squatting.svg",
                extra: 2617/2112,
                bottom: 61.2/2681,
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 2/12, "feet"),
            default: true
        },
        {
            name: "Normal+",
            height: math.unit(4, "meters")
        },
        {
            name: "Macro",
            height: math.unit(50, "meters")
        },
        {
            name: "Macro+",
            height: math.unit(100, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(20, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Qodri Class-of-'Fortwelve-Six" },
    {
        front: {
            height: math.unit(1.67, "meters"),
            weight: math.unit(140, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/qodri-class-of-'fortwelve-six/front.svg",
                extra: 438/410,
                bottom: 0.75/439
            }
        },
    },
    [
        {
            name: "Shrunken",
            height: math.unit(7.6, "cm")
        },
        {
            name: "Human Scale",
            height: math.unit(1.67, "meters")
        },
        {
            name: "Wolxi Scale",
            height: math.unit(36.7, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Izue Two-Mothers" },
    {
        front: {
            height: math.unit(1.73, "meters"),
            weight: math.unit(240, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/izue-two-mothers/front.svg",
                extra: 469/437,
                bottom: 1.24/470.6
            }
        },
    },
    [
        {
            name: "Shrunken",
            height: math.unit(7.86, "cm")
        },
        {
            name: "Human Scale",
            height: math.unit(1.73, "meters")
        },
        {
            name: "Wolxi Scale",
            height: math.unit(38, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Teeku Love-Shack" },
    {
        front: {
            height: math.unit(1.55, "meters"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/teeku-love-shack/front.svg",
                extra: 387/362,
                bottom: 1.51/388
            }
        },
    },
    [
        {
            name: "Shrunken",
            height: math.unit(7, "cm")
        },
        {
            name: "Human Scale",
            height: math.unit(1.55, "meters")
        },
        {
            name: "Wolxi Scale",
            height: math.unit(34.1, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Dejma the Red" },
    {
        front: {
            height: math.unit(1.83, "meters"),
            weight: math.unit(135, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/dejma-the-red/front.svg",
                extra: 480/458,
                bottom: 1.8/482
            }
        },
    },
    [
        {
            name: "Shrunken",
            height: math.unit(8.3, "cm")
        },
        {
            name: "Human Scale",
            height: math.unit(1.83, "meters")
        },
        {
            name: "Wolxi Scale",
            height: math.unit(40, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Aki" },
    {
        front: {
            height: math.unit(1.78, "meters"),
            weight: math.unit(65, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/aki/front.svg",
                extra: 452/415
            }
        },
        frontnsfw: {
            height: math.unit(1.78, "meters"),
            weight: math.unit(65, "kg"),
            name: "Front-nsfw",
            image: {
                source: "./media/characters/aki/front-nsfw.svg",
                extra: 452/415
            }
        },
        back: {
            height: math.unit(1.78, "meters"),
            weight: math.unit(65, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/aki/back.svg",
                extra: 452/415
            }
        },
        rump: {
            height: math.unit(2.05, "feet"),
            name: "Rump",
            image: {
                source: "./media/characters/aki/rump.svg"
            }
        },
        dick: {
            height: math.unit(0.95, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/aki/dick.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(15, "cm")
        },
        {
            name: "Normal",
            height: math.unit(178, "cm"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(214, "m")
        },
        {
            name: "Macro+",
            height: math.unit(534, "m")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ari" },
    {
        front: {
            height: math.unit(5 + 5/12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ari/front.svg",
                extra: 714.5/682,
                bottom: 8/722.5
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
            height: math.unit(100, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(100, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(80000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Bolt" },
    {
        side: {
            height: math.unit(9, "feet"),
            weight: math.unit(400, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/bolt/side.svg",
                extra: 1126/896,
                bottom: 60/1187.3,
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
            height: math.unit(9, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(700, "feet")
        },
        {
            name: "Max Size",
            height: math.unit(1.52e22, "yottameters")
        },
    ]
))
//characters

function makeCharacters() {
    const results = [];

    characterMakers.forEach(character => {
        results.push(character());
    });
    return results;
}
