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

    return makeEntity(name, "Building", views);
}

function makeBuildings() {
    const results = [];

    results.push({
        name: "Burj Khalifa",
        constructor: () => makeBuilding(
            "Burj Khalifa",
            math.unit(829.8, "meter"),
            { source: "./media/buildings/burj-khalifa.svg" }
        )
    });

    results.push({
        name: "Canton Tower",
        constructor: () => makeBuilding(
            "Canton Tower",
            math.unit(604, "meter"),
            { source: "./media/buildings/canton-tower.svg" }
        )
    });

    results.push({
        name: "CN Tower",
        constructor: () => makeBuilding(
            "CN Tower",
            math.unit(553.3, "meter"),
            { source: "./media/buildings/cn-tower.svg" }
        )
    });

    results.push({
        name: "Taipei 101",
        constructor: () => makeBuilding(
            "Taipei 101",
            math.unit(509.2, "meter"),
            { source: "./media/buildings/taipei-101.svg" }
        )
    });

    results.push({
        name: "Empire State Building",
        constructor: () => makeBuilding(
            "Empire State Building",
            math.unit(443.2, "meter"),
            { source: "./media/buildings/empire-state-building.svg" }
        )
    });

    results.push({
        name: "Eiffel Tower",
        constructor: () => makeBuilding(
            "Eiffel Tower",
            math.unit(324, "meter"),
            { source: "./media/buildings/eiffel-tower.svg" }
        )
    });

    results.push({
        name: "Chrysler Building",
        constructor: () => makeBuilding(
            "Chrysler Building",
            math.unit(318.9, "meter"),
            { source: "./media/buildings/chrysler-building.svg" }
        )
    });

    results.push({
        name: "Two-Story Home",
        constructor: () => makeBuilding(
            "House",
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

    return results;
}