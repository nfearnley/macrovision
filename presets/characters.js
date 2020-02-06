

function makeFen() {
    const views = {
        body: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(2.2428, "meter")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(124.738, "kg")
                }
            },
            image: {
                source: "./media/characters/fen/back.svg",
                bottom: 0.01,
                top: 0.93
            },
            name: "Body"
        },
        paw: {
            attributes: {
                height: {
                    name: "Length",
                    power: 1,
                    type: "length",
                    base: math.unit(20, "centimeter")
                },
                width: {
                    name: "Length",
                    power: 1,
                    type: "length",
                    base: math.unit(20, "centimeter")
                },
                area: {
                    name: "Area",
                    power: 2,
                    type: "area",
                    base: math.unit(0.04, "meter^2")
                }
            },
            image: {
                source: "./media/characters/generic/paw.svg"
            },
            name: "Paw"
        }
    };

    const entity = makeEntity("Fen", "Fen", views);
    entity.views.body.height = math.unit(1, "km");
    return entity;
}

function makeMan() {
    const views = {
        body: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(2, "meter")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(80, "kg")
                }
            },
            image: {
                source: "./man.svg"
            },            
            name: "Body"
        }
    };

    return makeEntity("Man", "Fen", views);
}

function makeCharacters() {
    const results = [];
    results.push({
        name: "Fen",
        constructor: makeFen
    });
    results.push({
        name: "Normal man",
        constructor: makeMan
    });
    return results;
}