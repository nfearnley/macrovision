function makeFiction() {
    const results = [];

    results.push({
        name: "Halo",
        constructor: () => makeObject(
            "Halo",
            {
                side: {
                    height: math.unit(10000, "km"),
                    mass: math.unit(1e17, "kg"),
                    image: { source: "./media/fiction/halo/halo/side.svg" },
                    name: "Side"
                },
                edge: {
                    height: math.unit(318, "km"),
                    mass: math.unit(1e17, "kg"),
                    image: { source: "./media/fiction/halo/halo/edge.svg" },
                    name: "Edge"
                },
                angled: {
                    height: math.unit(8819.1, "km"),
                    mass: math.unit(1e17, "kg"),
                    image: { source: "./media/fiction/halo/halo/angled.svg" },
                    name: "Angled"
                },
            }
        )
    });


    results.sort((b1, b2) => {
        e1 = b1.constructor();
        e2 = b2.constructor();
        return -math.subtract(e1.views[e1.defaultView].height, e2.views[e2.defaultView].height).value;
    });

    return results;
}