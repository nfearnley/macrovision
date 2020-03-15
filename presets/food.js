function makeFood() {
    const results = [];

    results.push({
        name: "Human",
        constructor: () => makeObject(
            "Human",
            {
                woman1: {
                    height: math.unit(5 + 4/12, "feet"),
                    mass: math.unit(140, "lbs"),
                    image: { source: "./media/food/humans/woman-1.svg" },
                    name: "Woman 1"
                },
                man1: {
                    height: math.unit(5 + 6/12, "feet"),
                    mass: math.unit(150, "lbs"),
                    image: { source: "./media/food/humans/man-1.svg" },
                    name: "Man 1"
                },
            }
        )
    });

    results.push({
        name: "Fruit",
        constructor: () => makeObject(
            "Fruit",
            {
                banana: {
                    height: math.unit(3.5, "inches"),
                    image: { source: "./media/food/fruits/banana.svg" },
                    name: "Banana",
                    rename: true
                },
                bananaVertical: {
                    height: math.unit(7, "inches"),
                    image: { source: "./media/food/fruits/banana-vertical.svg" },
                    name: "Banana (Vertical)",
                    rename: true
                },
                lemon: {
                    height: math.unit(3.5, "inches"),
                    image: { source: "./media/food/fruits/lemon.svg" },
                    name: "Lemon",
                    rename: true
                },
                orange: {
                    height: math.unit(2.8, "inches"),
                    image: { source: "./media/food/fruits/orange.svg" },
                    name: "Orange",
                    rename: true
                },
                grape: {
                    height: math.unit(0.8, "inches"),
                    image: { source: "./media/food/fruits/grape.svg" },
                    name: "Grape",
                    rename: true
                },
                pineapple: {
                    height: math.unit(17, "inches"),
                    image: { source: "./media/food/fruits/pineapple.svg" },
                    name: "Pineapple",
                    rename: true
                },

            }
        )
    });

    results.push(
        makeHeightWeight([
            ["blue-whale", 4.5, 125e3],
            ["sperm-whale", 3, 42e3],
            ["dairy-cow", 1.7, 800],
            ["horse", 2.08, 550],
            ["african-elephant", 3.2, 4000]
        ],
        "Animals",
        "",
        "food"
    ));

    results.push(
        makeHeightWeight([
            ["brachiosaurus", 13, 56e3],
            ["pterodactyl", 2.3, 200],
            ["stegosaurus", 4.5, 7e3],
            ["tyrannosaurus", 5.2, 14e3],
            ["velociraptor", 1.6, 15]
        ],
        "Dinosaurs",
        "",
        "food"
    ));

    results.push(makeHeight(
        [
            ["sycamore-tree", 35, "meters"]
        ],
        "Trees",
        "",
        "food"
    ));

    results.push(makeHeight(
        [
            ["grass", 3.25, "inches"]
        ],
        "Plants",
        "",
        "food"
    ));

    results.sort((b1, b2) => {
        e1 = b1.constructor();
        e2 = b2.constructor();
        return -math.subtract(e1.views[e1.defaultView].height, e2.views[e2.defaultView].height).value;
    });
    

    return results;
}
