

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

function makeSofia() {
    const views = {
        front: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(183, "cm")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(80, "kg")
                }
            },
            image: {
                source: "./media/characters/sofia/front.svg"
            },
            name: "Front"
        },
        back: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(183, "cm")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(80, "kg")
                }
            },
            image: {
                source: "./media/characters/sofia/back.svg"
            },
            name: "Back"
        }

    };

    const entity = makeEntity("Sofia", "ZakuraTech", views);
    entity.views.front.height = math.unit(96, "feet");
    return entity;
}

function makeMarch() {
    const views = {
        front: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(100, "kg")
                }
            },
            image: {
                source: "./media/characters/march/front.svg"
            },
            name: "Front"
        }
    };

    const entity = makeEntity("March", "March-Dragon", views);
    entity.views.front.height = math.unit(2.98, "km");
    return entity;
}

function makeNoir() {
    const views = {
        front: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(6, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(60, "kg")
                }
            },
            image: {
                source: "./media/characters/noir/front.svg",
                bottom: 0.01
            },
            name: "Front"
        }
    };

    const entity = makeEntity("Noir", "March-Dragon", views);
    entity.views.front.height = math.unit(2.5, "km");
    return entity;
}

function makeOkuri() {
    const views = {
        front: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(100, "kg")
                }
            },
            image: {
                source: "./media/characters/okuri/front.svg"
            },
            name: "Front"
        },
        back: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(100, "kg")
                }
            },
            image: {
                source: "./media/characters/okuri/back.svg"
            },
            name: "Back"
        }
    };

    const entity = makeEntity("Okuri", "OrionMechadragon", views);
    entity.views.front.height = math.unit(100, "miles");
    return entity;
}

function makeManny() {
    const views = {
        front: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(100, "kg")
                }
            },
            image: {
                source: "./media/characters/manny/front.svg"
            },
            name: "Front"
        },
        back: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(100, "kg")
                }
            },
            image: {
                source: "./media/characters/manny/back.svg"
            },
            name: "Back"
        }
    };

    const entity = makeEntity("Manny", "Dialuca01", views);
    entity.views.front.height = math.unit(78, "feet");
    return entity;
}

function makeAdake() {
    const views = {
        front: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(100, "kg")
                }
            },
            image: {
                source: "./media/characters/adake/front-1.svg"
            },
            name: "Front"
        },
        frontAlt: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(100, "kg")
                }
            },
            image: {
                source: "./media/characters/adake/front-2.svg",
                bottom: 0.005
            },
            name: "Front (Alt)"
        },
        back: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(100, "kg")
                }
            },
            image: {
                source: "./media/characters/adake/back.svg",
            },
            name: "Back"
        },
        kneel: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(5.385, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(100, "kg")
                }
            },
            image: {
                source: "./media/characters/adake/kneel.svg",
                bottom: 0.05
            },
            name: "Kneeling"
        },
    };

    const entity = makeEntity("Adake", "Dialuca01", views);
    entity.views.front.height = math.unit(78, "feet");
    return entity;
}

function makeElijah() {
    const views = {
        side: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(50, "kg")
                }
            },
            image: {
                source: "./media/characters/elijah/side.svg",
                bottom: 0.01
            },
            name: "Side"
        },
        foot: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(2, "feet")
                }
            },
            image: {
                source: "./media/characters/elijah/foot.svg",
            },
            name: "Foot"
        }
    };

    const entity = makeEntity("Elijah", "Elijah", views);
    entity.views.side.height = math.unit(175, "feet");
    return entity;
}

function makeRai() {
    const views = {
        front: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(80, "kg")
                }
            },
            image: {
                source: "./media/characters/rai/front.svg"
            },
            name: "Front"
        },
        side: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(80, "kg")
                }
            },
            image: {
                source: "./media/characters/rai/side.svg"
            },
            name: "Side"
        },
        back: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(80, "kg")
                }
            },
            image: {
                source: "./media/characters/rai/back.svg"
            },
            name: "Back"
        }
    };

    const entity = makeEntity("Rai", "shadowblade945", views);
    entity.views.front.height = math.unit(302, "feet");
    return entity;
}

function makeJazzy() {
    const views = {
        front: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(80, "kg")
                }
            },
            image: {
                source: "./media/characters/jazzy/front.svg",
                bottom: 0.01
            },
            name: "Front"
        },
        back: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(7, "feet")
                },
                weight: {
                    name: "Weight",
                    power: 3,
                    type: "mass",
                    base: math.unit(80, "kg")
                }
            },
            image: {
                source: "./media/characters/jazzy/back.svg"
            },
            name: "Back"
        }
    };

    const entity = makeEntity("Jazzy", "Jazzywolf", views);
    entity.views.front.height = math.unit(216, "feet");
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
        name: "Sofia",
        constructor: makeSofia
    });
    results.push({
        name: "March",
        constructor: makeMarch
    });
    results.push({
        name: "Noir",
        constructor: makeNoir
    });
    results.push({
        name: "Okuri",
        constructor: makeOkuri
    });
    results.push({
        name: "Manny",
        constructor: makeManny
    });
    results.push({
        name: "Adake",
        constructor: makeAdake
    });
    results.push({
        name: "Elijah",
        constructor: makeElijah
    });
    results.push({
        name: "Rai",
        constructor: makeRai
    });
    results.push({
        name: "Jazzy",
        constructor: makeJazzy
    });
    results.push({
        name: "Normal man",
        constructor: makeMan
    });
    return results;
}