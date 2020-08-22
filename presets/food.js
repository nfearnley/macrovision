async function makeFood() {
    var dataFood = await loadJson("data/food.json")
    var dataHeightWeight = await loadJson("data/food-heightweight.json")
    var dataHeight = await loadJson("data/food-height.json")

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

    results.push(...dataHeightWeight.map(function(d) {
        return makeHeightWeight(
            d.info,
            d.category,
            d.prefix,
            d.type
        );
    }));

    results.push(...dataHeight.map(function(d) {
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
