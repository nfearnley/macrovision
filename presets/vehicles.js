function makeVehicle(name, horizHeight, horizImage, vertHeight, vertImage, mass) {
    views = {
        horizontal: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: horizHeight
                },
                mass: {
                    name: "Mass",
                    power: 3,
                    type: "mass",
                    base: mass
                }
            },
            image: horizImage,
            name: "Horizontal"
        },
        vertical: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: vertHeight
                },
                mass: {
                    name: "Mass",
                    power: 3,
                    type: "mass",
                    base: mass
                }
            },
            image: vertImage,
            name: "Vertical"
        }
    };

    return makeEntity(name, "Vehicle", views);
}

function makeVehicles() {
    const results = [];

    results.push({
        name: "Bus",
        constructor: () => makeVehicle(
            "Bus",
            math.unit(10.5, "feet"),
            { source: "./media/vehicles/bus.svg" },
            math.unit(38.556, "feet"),
            { source: "./media/vehicles/vertical-bus.svg" },
            math.unit(30000, "lb"),
        )
    });

    return results;
}