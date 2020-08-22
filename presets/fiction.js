async function makeFiction() {
    var data = await loadJson("data/fiction.json")

    const results = data.map(function(d) {
        return {
            "name": d.name,
            "constructor": () => makeObject(d.name, d.views)
        };
    });

    results.sort((b1, b2) => {
        e1 = b1.constructor();
        e2 = b2.constructor();
        return -math.subtract(e1.views[e1.defaultView].height, e2.views[e2.defaultView].height).value;
    });

    return results;
}