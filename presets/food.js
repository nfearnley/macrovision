async function makeFood() {
    var dataFood = await loadJson("data/food.json")
    var dataHeightWeights = await loadJson("data/food-heightweights.json")
    var dataHeights = await loadJson("data/food-heights.json")

    const results = [];

    results.push(...dataFood.map(function(d) {
        return {
            name: d.name,
            constructor: () => makeObject(
                d.name,
                d.viewInfo
            )
        };
    }));

    results.push(...dataHeightWeights.map(function(d) {
        return makeHeightWeight(
            d.info,
            d.category,
            d.prefix,
            d.type
        );
    }));

    results.push(...dataHeights.map(function(d) {
        return makeHeight(
            d.info,
            d.category,
            d.prefix,
            d.type
        );
    }));

    results.sort((b1, b2) => {
        e1 = b1.constructor();
        e2 = b2.constructor();
        return -math.subtract(e1.views[e1.defaultView].height, e2.views[e2.defaultView].height).value;
    });


    return results;
}
