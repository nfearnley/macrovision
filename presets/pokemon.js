async function makePokemon() {
    var data = await loadJson("data/pokemon.json")

    const results = data.map(function(d) {
        return makeCharacter(d.info, d.viewInfo, d.defaultSizes);
    });

    return results.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
}
