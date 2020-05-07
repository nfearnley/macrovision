

function makeDildo(name, info, sizes) {
    const views = {};
    let folder = name.replace(/ /g, "-").toLowerCase() + "/";
    info.forEach(entry => {
        let src = "./media/dildos/" + folder + entry[0].replace(/ /g, "-").toLowerCase() + ".svg";
        
        views[entry[0]] = {
            height: math.unit(entry[1], entry[2]),
            image: { source: src },
            name: entry[0],
            rename: true
        }
    });

    return {
        name: name,
        constructor: () => {
            const maker = makeObject(
                name,
                views
            );

            maker.sizes = [];

            sizes.forEach(size => {
                maker.sizes.push({
                    name: size[0],
                    height: math.unit(size[1], size[2])
                })
            })

            maker.sizes[maker.sizes.length - 1].default = true;

            return maker;
        }
    }
}


function makeDildos() {
    const results = [];

    results.push(makeDildo(
        "Chance",
        [
            ["Side", 17.5, "inches"],
            ["Front", 17.5, "inches"],
            ["Top", 7.91, "inches"],
            ["Head", 2.72, "inches"]
        ],
        [
            ["Small", 8, "inches"],
            ["Medium", 11.5, "inches"],
            ["Large", 14, "inches"],
            ["Extra Large", 17.5, "inches"]
        ]
    ))

    results.push(makeDildo(
        "Rex",
        [
            ["Side", 14.5, "inches"],
            ["Front", 14.5, "inches"],
            ["Top", 5.54, "inches"],
            ["Head", 2.13, "inches"]
        ],
        [
            ["Mini", 6, "inches"],
            ["Small", 8, "inches"],
            ["Medium", 10, "inches"],
            ["Large", 12, "inches"],
            ["Extra Large", 14.5, "inches"]
        ]
    ))



    return results;
}