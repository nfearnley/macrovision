async function makeFiction() {
    var fictionJson = await loadJson("data/fiction.json")

    const results = fictionJson.map(function(j) {
        return {
            "name": j.name,
            "constructor": () => makeObject(j.name, j.views)
        };
    });

    results.sort((b1, b2) => {
        e1 = b1.constructor();
        e2 = b2.constructor();
        return -math.subtract(e1.views[e1.defaultView].height, e2.views[e2.defaultView].height).value;
    });

    return results;
}