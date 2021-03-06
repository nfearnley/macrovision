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

function makeMultiVehicle(name, sides) {
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
                    base: val.mass
                }
            },
            image: val.image,
            name: val.name,
            rename: val.rename
        }
    });

    return makeEntity({ name: name }, views);
}

function makeAircraft() {
    const options = [
        ["Antonov An-225", 84, 18.1, 285000],
        ["Airbus A380-800", 72.7, 24.1, 277000],
        ["Stratolaunch", 73, 16.5, 540000],
        ["Boeing 747-8", 76.3, 19.4, 220128],
        ["Hughes H-4 Hercules", 66.6, 24.2, 136077],
        ["Cessena 172", 8.28, 2.72, 757, 2.72]
    ],


        sides = {}
    const sorted = options.sort((a, b) => a[1] - b[1])

    sorted.forEach(plane => {
        sides[plane[0] + " (Side)"] = {
            name: plane[0] + " (Side)",
            rename: true,
            height: math.unit(plane[2], "meters"),
            mass: math.unit(plane[3], "kg"),
            image: { source: "./media/vehicles/planes/plane_" + plane[0].replace(/ /g, "-").toLowerCase() + "-side.svg" }
        };
        sides[plane[0] + " (Top)"] = {
            name: plane[0] + " (Top)",
            rename: true,
            height: math.unit(plane[1], "meters"),
            mass: math.unit(plane[3], "kg"),
            image: { source: "./media/vehicles/planes/plane_" + plane[0].replace(/ /g, "-").toLowerCase() + "-top.svg" }
        };

        if (plane.length > 4) {
            sides[plane[0] + " (Front)"] = {
                name: plane[0] + " (Front)",
                rename: true,
                height: math.unit(plane[4], "meters"),
                mass: math.unit(plane[3], "kg"),
                image: { source: "./media/vehicles/planes/plane_" + plane[0].replace(/ /g, "-").toLowerCase() + "-front.svg" }
            };
        }
    });

    const entity = makeMultiVehicle("Aircraft", sides);

    entity.sizes.push({
        name: "1:72",
        height: math.unit(sorted[0][2] / 72, "meters")
    });
    entity.sizes.push({
        name: "1:24",
        height: math.unit(sorted[0][2] / 24, "meters")
    });
    entity.sizes.push({
        name: "1:16",
        height: math.unit(sorted[0][2] / 16, "meters")
    });
    entity.sizes.push({
        name: "1:8",
        height: math.unit(sorted[0][2] / 8, "meters")
    });
    entity.sizes.push({
        name: "1:4",
        height: math.unit(sorted[0][2] / 4, "meters")
    });
    entity.sizes.push({
        name: "1",
        height: math.unit(sorted[0][2], "meters")
    });

    return entity;
}

function makeCars() {
    const options = [
        ["Toyota Prius C", 3.99, 1.45, 1134, 1, 1.07, 1],
        ["VW New Beetle", 4.13, 1.57, 1230, 1, 1, 1],
        ["Honda Civic", 4.55, 1.42, 1303, 1, 1, 1],
        ["Lamborghini Aventador", 4.78, 1.136, 1575, 1, 1, 1],
        ["Ford F-150", 5.89, 1.92, 1950, 1, 1, 1]
    ]
    sides = {}
    const sorted = options.sort((a, b) => a[1] - b[1])

    sorted.forEach(car => {
        sides[car[0] + " (Front)"] = {
            name: car[0] + " (Front)",
            rename: true,
            height: math.unit(car[2], "meters"),
            mass: math.unit(car[3], "kg"),
            image: { source: "./media/vehicles/cars/car_" + car[0].replace(/ /g, "-").toLowerCase() + "-front.svg", extra: car[4] }
        };

        sides[car[0] + " (Side)"] = {
            name: car[0] + " (Side)",
            rename: true,
            height: math.unit(car[2], "meters"),
            mass: math.unit(car[3], "kg"),
            image: { source: "./media/vehicles/cars/car_" + car[0].replace(/ /g, "-").toLowerCase() + "-side.svg", extra: car[5] }
        };

        sides[car[0] + " (Top)"] = {
            name: car[0] + " (Top)",
            rename: true,
            height: math.unit(car[1], "meters"),
            mass: math.unit(car[3], "kg"),
            image: { source: "./media/vehicles/cars/car_" + car[0].replace(/ /g, "-").toLowerCase() + "-top.svg", extra: car[6] }
        };
    });

    const entity = makeMultiVehicle("Cars", sides);

    entity.sizes.push({
        name: "1:72",
        height: math.unit(sorted[0][2] / 72, "meters")
    });
    entity.sizes.push({
        name: "1:24",
        height: math.unit(sorted[0][2] / 24, "meters")
    });
    entity.sizes.push({
        name: "1:16",
        height: math.unit(sorted[0][2] / 16, "meters")
    });
    entity.sizes.push({
        name: "1:8",
        height: math.unit(sorted[0][2] / 8, "meters")
    });
    entity.sizes.push({
        name: "1:4",
        height: math.unit(sorted[0][2] / 4, "meters")
    });
    entity.sizes.push({
        name: "1",
        height: math.unit(sorted[0][2], "meters")
    });

    return entity;
}

function makeBuses() {
    const options = [
        ["City Bus", 11.95, 2.99, 14000, 1, 1, 1],
        ["Articulated Bus", 18, 3.13, 25000, 1, 1, 1],
        ["Coach Bus", 12, 3.81, 18000, 1, 1, 1],
        ["Shuttle Bus", 7.01, 2.67, 6000, 1, 1, 1],
    ]
    sides = {}

    options.forEach(bus => {
        sides[bus[0] + " (Front)"] = {
            name: bus[0] + " (Front)",
            rename: true,
            height: math.unit(bus[2], "meters"),
            mass: math.unit(bus[3], "kg"),
            image: { source: "./media/vehicles/buses/bus_" + bus[0].replace(/ /g, "-").toLowerCase() + "-front.svg", extra: bus[4] }
        };

        sides[bus[0] + " (Side)"] = {
            name: bus[0] + " (Side)",
            rename: true,
            height: math.unit(bus[2], "meters"),
            mass: math.unit(bus[3], "kg"),
            image: { source: "./media/vehicles/buses/bus_" + bus[0].replace(/ /g, "-").toLowerCase() + "-side.svg", extra: bus[5] }
        };

        sides[bus[0] + " (Top)"] = {
            name: bus[0] + " (Top)",
            rename: true,
            height: math.unit(bus[1], "meters"),
            mass: math.unit(bus[3], "kg"),
            image: { source: "./media/vehicles/buses/bus_" + bus[0].replace(/ /g, "-").toLowerCase() + "-top.svg", extra: bus[6] }
        };
    });

    const entity = makeMultiVehicle("Buses", sides);

    entity.sizes.push({
        name: "1:72",
        height: math.unit(options[0][2] / 72, "meters")
    });
    entity.sizes.push({
        name: "1:24",
        height: math.unit(options[0][2] / 24, "meters")
    });
    entity.sizes.push({
        name: "1:16",
        height: math.unit(options[0][2] / 16, "meters")
    });
    entity.sizes.push({
        name: "1:8",
        height: math.unit(options[0][2] / 8, "meters")
    });
    entity.sizes.push({
        name: "1:4",
        height: math.unit(options[0][2] / 4, "meters")
    });
    entity.sizes.push({
        name: "1",
        height: math.unit(options[0][2], "meters")
    });

    return entity;
}

// TODO this should be named something more generic and put in objects.js
function makeVehicleGroup(info, name, prefix, directory="vehicles") {
    sides = {}

    let defaultHeight;

    info.forEach(vehicle => {
        Object.entries(vehicle.sides).forEach(([sideName, data]) => {
            if (!defaultHeight) {
                defaultHeight = data.height;
            }
            sides[vehicle.name + " (" + sideName + ")"] = {
                name: vehicle.name + " (" + sideName + ")",
                rename: true,
                height: data.height,
                mass: vehicle.mass,
                image: { source: "./media/" + directory + "/" + name.replace(/ /g, "-").toLowerCase() + "/" + (prefix == "" ? "" : prefix + "_") + vehicle.name.replace(/ /g, "-").toLowerCase() + "-" + sideName.replace(/ /g, "-").toLowerCase() + ".svg", extra: (data.extra ? data.extra : 1) }
            };
        });
    });

    const entity = makeMultiVehicle(name, sides);

    entity.sizes.push({
        name: "1:72",
        height: math.unit(math.divide(defaultHeight, 72))
    });
    entity.sizes.push({
        name: "1:24",
        height: math.unit(math.divide(defaultHeight, 24))
    });
    entity.sizes.push({
        name: "1:16",
        height: math.unit(math.divide(defaultHeight, 16))
    });
    entity.sizes.push({
        name: "1:8",
        height: math.unit(math.divide(defaultHeight, 8))
    });
    entity.sizes.push({
        name: "1:4",
        height: math.unit(math.divide(defaultHeight, 4))
    });

    return entity;
}

function makeVehicles() {
    const results = [];

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
        name: "Titanic",
        constructor: () => makeVehicle(
            "Titanic",
            {
                side: {
                    name: "Side",
                    height: math.unit(883 * 1114 / 4250, "feet"),
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

    results.push({
        name: "Spacecraft",
        constructor: () => makeMultiVehicle(
            "Spacecraft",
            {
                "n-1": {
                    name: "N-1",
                    rename: true,
                    height: math.unit(105, "meters"),
                    mass: math.unit(95, "tons"),
                    image: { source: "./media/vehicles/spacecraft/n-1.svg" }
                },
                "saturn-v": {
                    name: "Saturn V",
                    rename: true,
                    height: math.unit(110.6, "meters"),
                    mass: math.unit(140, "tons"),
                    image: { source: "./media/vehicles/spacecraft/saturn-v.svg" }
                },
                "starship": {
                    name: "Starship",
                    rename: true,
                    height: math.unit(118, "m"),
                    mass: math.unit(150, "tons"),
                    image: { source: "./media/vehicles/spacecraft/saturn-v.svg" }
                },
            }
        )
    });

    results.push({
        name: "Aircraft",
        constructor: () => makeAircraft()
    });

    results.push({
        name: "Cars",
        constructor: () => makeCars()
    });

    results.push({
        name: "Buses",
        constructor: () => makeBuses()
    });

    results.push({
        name: "Trains",
        constructor: () => makeVehicleGroup([
            {
                name: "60' Boxcar",
                mass: math.unit(80900, "lbs"),
                sides: {
                    "Side": { height: math.unit(17, "feet") },
                    "Front": { height: math.unit(17, "feet") }
                }
            },
            {
                name: "64' Flatcar",
                mass: math.unit(66000, "lbs"),
                sides: {
                    "Side": { height: math.unit(5.03, "feet") },
                    "Front": { height: math.unit(5.03, "feet") },
                }
            },
            {
                name: "3250 Cubic Ft Hopper",
                mass: math.unit(52000, "lbs"),
                sides: {
                    "Side": { height: math.unit(15 + 3 / 12, "feet") },
                    "Front": { height: math.unit(15 + 3 / 12, "feet") },
                }
            },
            {
                name: "28600 Gallon Tank Car",
                mass: math.unit(93000, "lbs"),
                sides: {
                    "Side": { height: math.unit(15 + 5.7 / 12, "feet") },
                    "Front": { height: math.unit(15 + 5.7 / 12, "feet") },
                }
            }
        ],
            "Trains",
            "train")
    });

    results.push({
        name: "Warships",
        constructor: () => makeVehicleGroup([
            {
                name: "Bismarck",
                mass: math.unit(50300, "tonnes"),
                sides: {
                    "Side": { height: math.unit(61.9, "meters") },
                    "Front": { height: math.unit(61.9, "meters") },
                    "Top": { height: math.unit(251, "meters") },
                }
            },
            {
                name: "USS Enterprise (CV-6)",
                mass: math.unit(32060, "tons"),
                sides: {
                    "Side": { height: math.unit(164.5, "feet") },
                    "Front": { height: math.unit(164.5, "feet") },
                    "Top": { height: math.unit(827.5, "feet") },
                }
            },
            {
                name: "USS Hill",
                mass: math.unit(1590, "tons"),
                sides: {
                    "Side": { height: math.unit(100.2, "feet") },
                    "Front": { height: math.unit(100.2, "feet") },
                    "Top": { height: math.unit(306, "feet") },
                }
            },
            {
                name: "USS Texas",
                mass: math.unit(32060, "tons"),
                sides: {
                    "Side": { height: math.unit(146.9, "feet") },
                    "Front": { height: math.unit(146.9, "feet") },
                    "Top": { height: math.unit(565, "feet") },
                }
            },
            {
                name: "U-2501",
                mass: math.unit(1621, "tonnes"),
                sides: {
                    "Side": { height: math.unit(13, "meters") },
                    "Front": { height: math.unit(13, "meters") },
                    "Top": { height: math.unit(76.7, "meters") },
                }
            },
            {
                name: "Yahagi",
                mass: math.unit(7590, "tonnes"),
                sides: {
                    "Side": { height: math.unit(37.03, "meters") },
                    "Front": { height: math.unit(37.03, "meters") },
                    "Top": { height: math.unit(174.5, "meters") },
                }
            },
        ],
            "Warships",
            "")
    });

    results.push({
        name: "Tanks",
        constructor: () => makeVehicleGroup([
            {
                name: "T95 Super Heavy Tank",
                mass: math.unit(95, "tons"),
                sides: {
                    "Side": { height: math.unit(18.83, "feet") },
                    "Front": { height: math.unit(18.83, "feet") },
                    "Top": { height: math.unit(2608/1659*36.5, "feet") },
                }
            },
            {
                name: "Leopard I",
                mass: math.unit(42.2, "tonnes"),
                sides: {
                    "Side": { height: math.unit(2.80, "meters") },
                    "Front": { height: math.unit(2.80, "meters") },
                    "Top": { height: math.unit(9.54, "meters") },
                }
            },
        ],
            "Tanks",
            "")
    });

    results.push({
        name: "Helicopters",
        constructor: () => makeVehicleGroup([
            {
                name: "Mil Mi-26",
                mass: math.unit(109349, "lbs"),
                sides: {
                    "Side": { height: math.unit(12.2, "meters") },
                    "Front": { height: math.unit(12.2, "meters") },
                    "Bottom": { height: math.unit(40.025, "meters") },
                }
            }
        ],
            "Helicopters",
            "")
    })

    return results;
}
