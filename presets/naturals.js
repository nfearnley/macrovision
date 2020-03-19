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

    results.push(makeHeightWeight(
        [
            ["Mercury", 4879, "km", 0.330e24, "kg", "./media/naturals/planet-generic.svg"],
            ["Venus", 12104, "km", 4.87e24, "kg", "./media/naturals/planet-generic.svg"],
            ["Earth", 12756, "km", 5.97e24, "kg", "./media/naturals/planet-generic.svg"],
            ["Moon", 3475, "km", 0.073e24, "kg", "./media/naturals/planet-generic.svg"],
            ["Mars", 6792, "km", 0.642e24, "kg", "./media/naturals/planet-generic.svg"],
            ["Jupiter", 142984, "km", 1898e24, "kg", "./media/naturals/planet-generic.svg"],
            ["Saturn", 120536, "km", 568e24, "kg", "./media/naturals/saturn.svg"],
            ["Uranus", 51118, "km", 86.8e24, "kg", "./media/naturals/planet-generic.svg"],
            ["Neptune", 49528, "km", 102e24, "kg", "./media/naturals/planet-generic.svg"],
            ["Pluto", 2370, "km", 0.0146e24, "kg", "./media/naturals/planet-generic.svg"]
        ],
        "Planets",
        "",
        ""
    ));
    
    results.push(makeHeight(
        [
            ["orbit-of-mercury", 0.387*2, "AU", "./media/naturals/orbit.svg"],
            ["orbit-of-venus", 0.723*2, "AU", "./media/naturals/orbit.svg"],
            ["orbit-of-earth", 1*2, "AU", "./media/naturals/orbit.svg"],
            ["orbit-of-mars", 1.524*2, "AU", "./media/naturals/orbit.svg"],
            ["orbit-of-jupiter", 5.2044*2, "AU", "./media/naturals/orbit.svg"],
            ["orbit-of-saturn", 9.5826*2, "AU", "./media/naturals/orbit.svg"],
            ["orbit-of-uranus", 19.21840*2, "AU", "./media/naturals/orbit.svg"],
            ["orbit-of-neptune", 30.11*2, "AU", "./media/naturals/orbit.svg"],
            ["orbit-of-pluto", 39.482*2, "AU", "./media/naturals/orbit.svg"],
        ],
        "Orbits",
        "",
        ""
    ));

    results.push(makeHeightWeight(
        [
            ["Sun", 1, "solarradii", 1, "solarmasses", "./media/naturals/planet-generic.svg"],
            ["White Dwarf", 14000, "km", 1e30, "kg", "./media/naturals/planet-generic.svg"],
            ["Polaris", 37.5, "solarradii", 5.4, "solarmasses", "./media/naturals/planet-generic.svg"],
            ["Sun (Red Giant)", 256, "solarradii", 1, "solarmasses", "./media/naturals/planet-generic.svg"],
            ["Betelgeuse", 887, "solarradii", 11.6, "solarmasses", "./media/naturals/planet-generic.svg"],
            ["VY Canis Majoris", 1420, "solarradii", 17, "solarmasses", "./media/naturals/planet-generic.svg"],
        ],
        "Stars",
        "",
        ""
    ));

    results.push(makePlanet("Milky Way", math.unit(105700, "lightyears"), math.unit(3e+39, "kg"), { source: "./media/naturals/milky-way.svg" }));
    results.push(makePlanet("Observable Universe", math.unit(93.016e9, "lightyears"), math.unit(10e53, "kg")));
    results.push(makePlanet("Multiverse", math.unit(1e30, "lightyears"), math.unit(1e100, "kg")));

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
