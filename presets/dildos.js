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

async function makeDildos() {
    var data = await loadJson("data/dildos.json")

    const results = data.map(function(d) {
        return makeDildo(d.name, d.info, d.sizes);
    });

    return results;
}
