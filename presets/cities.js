
function makeCity(name, height) {
    views = {
        city: {
            attributes: {
                height: {
                    name: "Highest Point",
                    power: 1,
                    type: "length",
                    base: height
                }
            },
            image: {
                source: "./media/cities/city_" + name.replace(/ /g, "-").toLowerCase() + ".svg"
            },
            name: "City"
        },
    };

    console.log(views)

    return makeEntity({name: name}, views);
}

function addCity(name, height) {
    return {
        name: name,
        constructor: () => makeCity(name, height)
    }
}

function makeCities() {
    const results = [];

    // USA

    results.push(addCity("Los Angeles", math.unit(1018, "feet")));
    results.push(addCity("New York City", math.unit(1454, "feet")));
    results.push(addCity("Washington", math.unit(555, "feet")));
    results.push(addCity("Chicago", math.unit(1451, "feet")));
    results.push(addCity("Phoenix", math.unit(483, "feet")));
    results.push(addCity("San Diego", math.unit(500, "feet")));
    results.push(addCity("Houston", math.unit(1002, "feet")));
    results.push(addCity("San Francisco", math.unit(1070, "feet")));
    results.push(addCity("Atlanta", math.unit(1023, "feet")));
    results.push(addCity("Dallas", math.unit(915, "feet")));
    results.push(addCity("Boston", math.unit(790, "feet")));
    results.push(addCity("Seattle", math.unit(605, "feet")));
    results.push(addCity("San Antonio", math.unit(750, "feet")));
    results.push(addCity("St Louis", math.unit(630, "feet")));
    results.push(addCity("Kansas City", math.unit(624, "feet")));
    results.push(addCity("Philadelphia", math.unit(973, "feet")));
    results.push(addCity("Jacksonville", math.unit(620, "feet")));
    results.push(addCity("Detroit", math.unit(727, "feet")));
    results.push(addCity("Indianapolis", math.unit(830, "feet")));
    results.push(addCity("Columbus", math.unit(629, "feet")));

    // Canada
    
    results.push(addCity("Toronto", math.unit(1814, "feet")));
    results.push(addCity("Montreal", math.unit(743, "feet")));
    results.push(addCity("Vancouver", math.unit(659, "feet")));
    results.push(addCity("Ottawa", math.unit(367, "feet")));
    results.push(addCity("Mississauga", math.unit(518, "feet")));
    results.push(addCity("Edmonton", math.unit(646, "feet")));
    results.push(addCity("Winnipeg", math.unit(420, "feet")));
    results.push(addCity("Calgary", math.unit(626, "feet")));

    // Mexico

    results.push(addCity("Mexico City", math.unit(807, "feet")));
    results.push(addCity("Guadalajara", math.unit(705, "feet")));
    results.push(addCity("Puebla", math.unit(650, "feet")));
    results.push(addCity("Tijuana", math.unit(334, "feet")));

    results.sort((b1, b2) => {
        return b1.name.localeCompare(b2.name);
    });

    return results;
}
