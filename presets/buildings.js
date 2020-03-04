
math.createUnit("story", {
    definition: "12 feet",
    prefixes: "long"
});
math.createUnit("stories", {
    definition: "12 feet",
    prefixes: "long"
});

function makeBuilding(name, height, image) {
    views = {
        building: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: height
                }
            },
            image: image,
            name: "building"
        },
    };

    return makeEntity({ name: name }, views);
}


function makeSkyscraper(name, image, startingSize) {
    views = {
        building: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: math.unit(1, "meter")
                }
            },
            image: image,
            name: "building"
        },
    };

    const sizes = [];

    sizes.push({
        name: "Short",
        height: math.unit(15, "stories")
    });
    sizes.push({
        name: "Medium",
        height: math.unit(40, "stories")
    });
    sizes.push({
        name: "Supertall",
        height: math.unit(350, "meters")
    });
    sizes.push({
        name: "Megatall",
        height: math.unit(650, "meters")
    });

    const entity = makeEntity({ name: name }, views, sizes);

    entity.views[entity.defaultView].height = startingSize;
    return entity;
}

function makeBuildings() {
    const results = [];

    results.push({
        name: "Two-Story Home",
        constructor: () => makeBuilding(
            "Two-Story Home",
            math.unit(25, "feet"),
            { source: "./media/buildings/house.svg" }
        )
    });

    results.push({
        name: "Mobile Home",
        constructor: () => makeBuilding(
            "Mobile Home",
            math.unit(10, "feet"),
            { source: "./media/buildings/mobile-home.svg" }
        )
    });

    results.push({
        name: "Mailbox",
        constructor: () => makeBuilding(
            "Mailbox",
            math.unit(5.1, "feet"),
            { source: "./media/buildings/mailbox.svg" }
        )
    });

    results.push(
        {
            name: "Wide Skyscraper",
            constructor: () => makeSkyscraper(
                "Wide Skyscraper",
                { source: "./media/buildings/skyscrapers/wide.svg" },
                math.unit(40, "stories")
            )
        }
    );

    results.push(
        {
            name: "Skyscraper",
            constructor: () => makeSkyscraper(
                "Skyscraper",
                { source: "./media/buildings/skyscrapers/medium.svg" },
                math.unit(40, "stories")
            )
        }
    );

    results.push(
        {
            name: "Slender Skyscraper",
            constructor: () => makeSkyscraper(
                "Slender Skyscraper",
                { source: "./media/buildings/skyscrapers/slender.svg" },
                math.unit(40, "stories")
            )
        }
    );

    results.push(
        {
            name: "Narrow Skyscraper",
            constructor: () => makeSkyscraper(
                "Narrow Skyscraper",
                { source: "./media/buildings/skyscrapers/narrow.svg" },
                math.unit(40, "stories")
            )
        }
    );

    results.sort((b1, b2) => {
        e1 = b1.constructor();
        e2 = b2.constructor();
        return -math.subtract(e1.views[e1.defaultView].height, e2.views[e2.defaultView].height).value;
    });

    return results;
}
