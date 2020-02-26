function makeState(name, height, width, area) {
    return {
        name: name,
        constructor: () => makeEntity(
            { name: name },
            {
                state: {
                    attributes: {
                        height: {
                            name: "Height",
                            power: 1,
                            type: "length",
                            base: height
                        },
                        width: {
                            name: "Width",
                            power: 1,
                            type: "length",
                            base: width
                        },
                        area: {
                            name: "Area",
                            power: 2,
                            type: "area",
                            base: area
                        },
                    },
                    name: "State",
                    image: {
                        source: "./media/naturals/" + name.toLowerCase().replace(" ", "-") + ".svg"
                    }
                }
            }
        )
    }
}

function makePlanet(name, diameter, mass, image) {
    return {
        name: name,
        constructor: () => makeObject(
            name,
            {
                body: {
                    height: diameter,
                    mass: mass,
                    image: (image === undefined ? {
                        source: "./media/naturals/planet-generic.svg"
                    } : image),
                    name: "Body"
                }
            }
        )
    };
}

function makeMountains() {
    const views = {};

    [
        ["Everest", 29029],
        ["K2", 28251],
        ["Kilimanjaro", 19341],
        ["Rainier", 14409],
        ["Pikes Peak", 14114],
        ["Fuji", 12388],
        ["Olympus", 9573],
    ].forEach(mountain => {
        views[mountain[0]] = {
            height: math.unit(mountain[1], "feet"),
            image: { source: "./media/naturals/mountain.svg" },
            name: mountain[0],
            rename: true
        }
    });
    return {
        name: "Mountains",
        constructor: () => makeObject(
            "Mountains",
            views
        )
    };
}
function makeNaturals() {
    const results = [];
    results.push(makePlanet("Mercury", math.unit(4879, "km"), math.unit(0.330e24, "kg")));
    results.push(makePlanet("Venus", math.unit(12104, "km"), math.unit(4.87e24, "kg")));
    results.push(makePlanet("Earth", math.unit(12756, "km"), math.unit(5.97e24, "kg")));
    results.push(makePlanet("Moon", math.unit(3475, "km"), math.unit(0.073e24, "kg")));
    results.push(makePlanet("Mars", math.unit(6792, "km"), math.unit(0.642e24, "kg")));
    results.push(makePlanet("Jupiter", math.unit(142984, "km"), math.unit(1898e24, "kg")));
    results.push(makePlanet("Saturn", math.unit(120536, "km"), math.unit(568e24, "kg"), { source: "./media/naturals/saturn.svg" }));
    results.push(makePlanet("Uranus", math.unit(51118, "km"), math.unit(86.8e24, "kg")));
    results.push(makePlanet("Neptune", math.unit(49528, "km"), math.unit(102e24, "kg")));
    results.push(makePlanet("Pluto", math.unit(2370, "km"), math.unit(0.0146e24, "kg")));

    results.push(makePlanet("White Dwarf", math.unit(14000, "km"), math.unit(1e30, "kg")));
    results.push(makePlanet("Sol", math.unit(865370, "mi"), math.unit(1.989e30, "kg")));
    results.push(makePlanet("Betelgeuse", math.unit(1234.2e6, "mi"), math.unit(2.188e31, "kg")));
    results.push(makePlanet("Milky Way", math.unit(105700, "lightyears"), math.unit(3e+39, "kg"), { source: "./media/naturals/milky-way.svg" }));
    results.push(makePlanet("Observable Universe", math.unit(93.016e9, "lightyears"), math.unit(10e53, "kg")));

    results.push(makeState("Alaska", math.unit(2071.44, "km"), math.unit(2483.83, "km"), math.unit(1723337, "km^2")));
    results.push(makeState("California", math.unit(1048.82, "km"), math.unit(852.02, "km"), math.unit(423967, "km^2")));
    results.push(makeState("Colorado", math.unit(442.44, "km"), math.unit(604.47, "km"), math.unit(269601, "km^2")));
    results.push(makeState("Florida", math.unit(716.79, "km"), math.unit(723.97, "km"), math.unit(170312, "km^2")));
    results.push(makeState("Maine", math.unit(505.94, "km"), math.unit(330.98, "km"), math.unit(91633, "km^2")));
    results.push(makeState("Montana", math.unit(497.99, "km"), math.unit(983.98, "km"), math.unit(380831, "km^2")));
    results.push(makeState("New York", math.unit(494.92, "km"), math.unit(536.63, "km"), math.unit(141297, "km^2")));
    results.push(makeState("Texas", math.unit(1183.33, "km"), math.unit(1226.69, "km"), math.unit(695662, "km^2")));

    results.push(makeMountains());



    results.sort((b1, b2) => {
        e1 = b1.constructor();
        e2 = b2.constructor();
        return -math.subtract(e1.views[e1.defaultView].height, e2.views[e2.defaultView].height).value;
    });

    return results;
}
