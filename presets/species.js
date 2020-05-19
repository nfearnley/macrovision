const speciesMakers = {};

speciesMakers["Synx"] = () => {
    const species = makeCharacter(
        { name: "Synx" },
        {
            goochick: {
                height: math.unit(0.5, "feet"),
                weight: math.unit(3, "lb"),
                name: "Goo-chick",
                image: {
                    source: "./media/species/synx/goo-chick.svg",
                    bottom: 0.12
                }
            },
            oozeeel: {
                height: math.unit(1.5, "feet"),
                weight: math.unit(20, "lb"),
                name: "Ooze-eel",
                image: {
                    source: "./media/species/synx/ooze-eel.svg",
                    bottom: 0.09
                }
            },
            synx: {
                height: math.unit(3.4, "feet"),
                weight: math.unit(300, "lb"),
                name: "Synx",
                image: {
                    source: "./media/species/synx/synx.svg",
                    extra: 8.06 / 6.6,
                    bottom: 0.05
                },
                default: true
            },
            weeper: {
                height: math.unit(3.9, "feet"),
                weight: math.unit(450, "lb"),
                name: "Weeper",
                image: {
                    source: "./media/species/synx/weeper.svg",
                    extra: 8.04 / 7.5,
                    bottom: 0.05
                }
            },
        },
        [

        ]
    );

    species.defaultView = "synx";

    return species;
};

speciesMakers["Viper"] = () => makeCharacter(
    { name: "Viper" },
    {
        front: {
            height: math.unit(2.6, "meters"),
            weight: math.unit(500, "lb"),
            name: "Front",
            image: {
                source: "./media/species/viper/front.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2.6, "meters"),
            default: true
        },
    ]
);

speciesMakers["Synths"] = () => makeCharacter(
    { name: "Synths" },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(300, "lb"),
            name: "Front",
            image: {
                source: "./media/species/synths/front.svg",
                extra: 263/253.5,
                bottom: 6.22/268.85
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(300, "lb"),
            name: "Back",
            image: {
                source: "./media/species/synths/back.svg", 
                extra: 263.5/254.5,
                bottom: 4.7/269
            }
        },
        bulky: {
            height: math.unit(6, "feet"),
            weight: math.unit(900, "lb"),
            name: "Bulky",
            image: {
                source: "./media/species/synths/bulky.svg",
                extra: 753/740,
                bottom: 17.7/771.8
            }
        },
        femme: {
            height: math.unit(6, "feet"),
            weight: math.unit(400, "lb"),
            name: "Femme",
            image: {
                source: "./media/species/synths/femme.svg",
                extra: 756/733,
                bottom: 17.2/774
            }
        },
    },
    [
        {
            name: "Small",
            height: math.unit(1, "meters")
        },
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
            name: "Huge",
            height: math.unit(4, "meters")
        },
    ]
);

speciesMakers["Sel'Var"] = () => makeCharacter(
    { name: "Sel'Var" },
    {
        female: {
            height: math.unit(7 + 1/12, "feet"),
            weight: math.unit(190, "lb"),
            name: "Female",
            image: {
                source: "./media/species/sel'var/female.svg",
                extra: 1761/1544,
                bottom: 57.5/1817
            }
        },
        male: {
            height: math.unit(8 + 4/12, "feet"),
            weight: math.unit(260, "lb"),
            name: "Male",
            image: {
                source: "./media/species/sel'var/male.svg",
                extra: 1891/1786,
                bottom: 65/1954.2
            }
        },
        dick: {
            height: math.unit(1.6, "feet"),
            name: "Dick",
            image: {
                source: "./media/species/sel'var/dick.svg"
            }
        },
        slit: {
            height: math.unit(0.8, "feet"),
            name: "Slit",
            image: {
                source: "./media/species/sel'var/slit.svg"
            }
        },
        slitinternals: {
            height: math.unit(1.07, "feet"),
            name: "Slit (Internals)",
            image: {
                source: "./media/species/sel'var/slit-internals.svg"
            }
        },
        maw: {
            height: math.unit(1.18, "feet"),
            name: "Maw",
            image: {
                source: "./media/species/sel'var/maw.svg"
            }
        },
        dewclaw: {
            height: math.unit(0.67, "feet"),
            name: "Dewclaw",
            image: {
                source: "./media/species/sel'var/dewclaw.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 1/12, "feet"),
            default: true
        },
    ]
)

function makeSpecies() {
    const results = [];

    Object.entries(speciesMakers).forEach(([key, value]) => {
        results.push(
            value()
        );
    });

    return results;
}