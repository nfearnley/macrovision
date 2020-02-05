function makeBuilding() {
    views = {
        building: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(324, "meter")
                }
            },
            image: "./media/buildings/eiffel-tower.svg",
            name: "Building"
        },
    };

    return makeEntity("Eiffel Tower", "Fen", views);
}