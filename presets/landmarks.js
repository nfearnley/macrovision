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

async function makeLandmarks() {
    var data = await loadJson("data/landmarks.json")

    const results = data.map(function(d) {
        return {
            name: d.name,
            constructor: () => makeLandmark(
                d.name,
                math.Unit.fromJSON(d.height),
                d.image
            )
        };
    });

    results.sort((b1, b2) => {
        e1 = b1.constructor();
        e2 = b2.constructor();
        return -math.subtract(e1.views[e1.defaultView].height, e2.views[e2.defaultView].height).value;
    });

    return results;
}
