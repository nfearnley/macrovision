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
    const sorted = options.sort((a,b) => a[1]-b[1])

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
        height: math.unit(sorted[0][2]/72, "meters")
    });
    entity.sizes.push({
        name: "1:24",
        height: math.unit(sorted[0][2]/24, "meters")
    });
    entity.sizes.push({
        name: "1:16",
        height: math.unit(sorted[0][2]/16, "meters")
    });
    entity.sizes.push({
        name: "1:8",
        height: math.unit(sorted[0][2]/8, "meters")
    });
    entity.sizes.push({
        name: "1:4",
        height: math.unit(sorted[0][2]/4, "meters")
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
    ]
    sides = {}
    const sorted = options.sort((a,b) => a[1]-b[1])

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
        height: math.unit(sorted[0][2]/72, "meters")
    });
    entity.sizes.push({
        name: "1:24",
        height: math.unit(sorted[0][2]/24, "meters")
    });
    entity.sizes.push({
        name: "1:16",
        height: math.unit(sorted[0][2]/16, "meters")
    });
    entity.sizes.push({
        name: "1:8",
        height: math.unit(sorted[0][2]/8, "meters")
    });
    entity.sizes.push({
        name: "1:4",
        height: math.unit(sorted[0][2]/4, "meters")
    });
    entity.sizes.push({
        name: "1",
        height: math.unit(sorted[0][2], "meters")
    });

    return entity;
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

    return results;
}
