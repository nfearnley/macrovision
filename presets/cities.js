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

    return makeEntity({ name: name }, views);
}

function addCity(name, height) {
    return {
        name: name,
        constructor: () => makeCity(name, height)
    }
}

async function makeCities() {
    var citiesJson = await loadJson("data/cities.json")

    const results = citiesJson.map(function(j) {
        return addCity(j.name, math.Unit.fromJSON(j.height));
    });

    results.sort((b1, b2) => {
        return b1.name.localeCompare(b2.name);
    });

    return results;
}
