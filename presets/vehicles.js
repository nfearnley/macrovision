function makeVehicle(name, sides, mass) {
    views = {

    }

    Object.entries(sides).forEach(([key, val]) => {
        views[key] = {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: val.height
                },
                mass: {
                    name: "Mass",
                    power: 3,
                    type: "mass",
                    base: mass
                }
            },
            image: val.image,
            name: val.name
        }
    });

    return makeEntity({ name: name }, views);
}

function makeVehicles() {
    const results = [];

    results.push({
        name: "Bus",
        constructor: () => makeVehicle(
            "Bus",
            {
                side: {
                    name: "Side",
                    height: math.unit(10.5, "feet"),
                    image: { source: "./media/vehicles/bus.svg" }
                },
                vertical: {
                    name: "Side (Vertical)",
                    height: math.unit(38.5, "feet"),
                    image: { source: "./media/vehicles/vertical-bus.svg" }
                },

            },
            math.unit(30000, "lb"),
        )
    });

    results.push({
        name: "Leopard 2 Rev. 1",
        constructor: () => makeVehicle(
            "Leopard 2 Rev. 1",
            {
                side: {
                    name: "Side",
                    height: math.unit(3, "meters"),
                    image: { source: "./media/vehicles/leopard-2-revolution-1.svg" },
                },
                vertical: {
                    name: "Side (Vertical)",
                    height: math.unit(10, "meters"),
                    image: { source: "./media/vehicles/vertical-leopard-2-revolution-1.svg" },
                }
            },
            math.unit(60, "tonnes")
        )
    });

    results.push({
        name: "737",
        constructor: () => makeVehicle(
            "737",
            {
                side: {
                    name: "Side",
                    height: math.unit(12.55, "meters"),
                    image: { source: "./media/vehicles/737-side.svg" },
                },
                sideVertical: {
                    name: "Side (Vertical)",
                    height: math.unit(39.47, "meters"),
                    image: { source: "./media/vehicles/737-side-vertical.svg" },
                },
                top: {
                    name: "Top",
                    height: math.unit(39.47, "meters"),
                    image: { source: "./media/vehicles/737-top.svg" },
                },
                front: {
                    name: "Front",
                    height: math.unit(12.55, "meters"),
                    image: { source: "./media/vehicles/737-front.svg" },
                }
            },
            math.unit(90710, "lbs")
        )
    });

    results.push({
        name: "Titanic",
        constructor: () => makeVehicle(
            "Titanic",
            {
                side: {
                    name: "Side",
                    height: math.unit(883*1114/4250, "feet"),
                    image: { source: "./media/vehicles/titanic.svg" },
                },
                sideVertical: {
                    name: "Side (Vertical)",
                    height: math.unit(883, "feet"),
                    image: { source: "./media/vehicles/vertical-titanic.svg" },
                },
            },
            math.unit(52310, "tons")
        )
    });

    results.push({
        name: "18-Wheeler",
        constructor: () => makeVehicle(
            "18-Wheeler",
            {
                side: {
                    name: "Side",
                    height: math.unit(13.6, "feet"),
                    image: { source: "./media/vehicles/18-wheeler.svg" },
                },
                sideVertical: {
                    name: "Side (Vertical)",
                    height: math.unit(54, "feet"),
                    image: { source: "./media/vehicles/18-wheeler-vertical.svg" },
                },
            },
            math.unit(52310, "tons")
        )
    });

    return results;
}
