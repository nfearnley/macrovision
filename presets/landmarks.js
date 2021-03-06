function makeLandmark(name, height, image) {
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

function makeLandmarks() {
    const results = [];

    results.push({
        name: "Burj Khalifa",
        constructor: () => makeLandmark(
            "Burj Khalifa",
            math.unit(829.8, "meter"),
            { source: "./media/landmarks/burj-khalifa.svg" }
        )
    });

    results.push({
        name: "Canton Tower",
        constructor: () => makeLandmark(
            "Canton Tower",
            math.unit(604, "meter"),
            { source: "./media/landmarks/canton-tower.svg" }
        )
    });

    results.push({
        name: "CN Tower",
        constructor: () => makeLandmark(
            "CN Tower",
            math.unit(553.3, "meter"),
            { source: "./media/landmarks/cn-tower.svg" }
        )
    });

    results.push({
        name: "Taipei 101",
        constructor: () => makeLandmark(
            "Taipei 101",
            math.unit(509.2, "meter"),
            { source: "./media/landmarks/taipei-101.svg" }
        )
    });

    results.push({
        name: "Empire State Building",
        constructor: () => makeLandmark(
            "Empire State Building",
            math.unit(443.2, "meter"),
            { source: "./media/landmarks/empire-state-building.svg" }
        )
    });

    results.push({
        name: "Eiffel Tower",
        constructor: () => makeLandmark(
            "Eiffel Tower",
            math.unit(324, "meter"),
            { source: "./media/landmarks/eiffel-tower.svg" }
        )
    });

    results.push({
        name: "Chrysler Building",
        constructor: () => makeLandmark(
            "Chrysler Building",
            math.unit(318.9, "meter"),
            { source: "./media/landmarks/chrysler-building.svg" }
        )
    });

    results.push({
        name: "Gateway Arch",
        constructor: () => makeLandmark(
            "Gateway Arch",
            math.unit(630, "feet"),
            { source: "./media/landmarks/gateway-arch.svg" }
        )
    });

    results.push({
        name: "Washington Monument",
        constructor: () => makeLandmark(
            "Washington Monument",
            math.unit(555 + 5 / 12, "feet"),
            { source: "./media/landmarks/washington-monument.svg" }
        )
    });

    results.push({
        name: "Great Pyramid of Giza",
        constructor: () => makeLandmark(
            "Great Pyramid of Giza",
            math.unit(146, "meters"),
            { source: "./media/landmarks/pyramid.svg" }
        )
    });

    results.push({
        name: "Statue of Liberty",
        constructor: () => makeLandmark(
            "Statue of Liberty",
            math.unit(305.5, "feet"),
            { source: "./media/landmarks/statue-of-liberty.svg" }
        )
    });

    results.push({
        name: "Leaning Tower of Pisa",
        constructor: () => makeLandmark(
            "Leaning Tower of Pisa",
            math.unit(185.93, "feet"),
            { source: "./media/landmarks/leaning-tower-of-pisa.svg", bottom: 84 / 3755 }
        )
    });

    results.push({
        name: "Elizabeth Tower",
        constructor: () => makeLandmark(
            "Elizabeth Tower",
            math.unit(315, "feet"),
            { source: "./media/landmarks/elizabeth-tower.svg" }
        )
    });

    results.sort((b1, b2) => {
        e1 = b1.constructor();
        e2 = b2.constructor();
        return -math.subtract(e1.views[e1.defaultView].height, e2.views[e2.defaultView].height).value;
    });

    return results;
}
