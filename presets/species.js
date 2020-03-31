const speciesMakers = {};

speciesMakers["Synx"] = () => {
    const species = makeCharacter(
        "Synx",
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
                weight: math.unit(150, "lb"),
                name: "Synx",
                image: {
                    source: "./media/species/synx/synx.svg",
                    extra: 8.06/6.6,
                    bottom: 0.05
                }
            },
            weeper: {
                height: math.unit(3.9, "feet"),
                weight: math.unit(300, "lb"),
                name: "Weeper",
                image: {
                    source: "./media/species/synx/weeper.svg",
                    extra: 8.04/7.5,
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

function makeSpecies() {
    const results = [];

    Object.entries(speciesMakers).forEach(([key, value]) => {
        results.push({
            name: key,
            constructor: value
        });
    });

    return results;
}