async function makeSpecies() {
    var data = await loadJson("data/species.json");

    const results = data.map(function(d) {
        return makeCharacter(d.info, d.viewInfo, d.defaultSizes);
    });

    return results;
}
