function makeBuilding(name, height, image) {
    views = {
        building: {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: height
                }
            },
            image: image,
            name: "building"
        },
    };

    return makeEntity(name, "Building", views);
}

function makeBuildings() {
    const results = [];
    
    results.push(makeBuilding(
        "Burj Khalifa",
        math.unit(829.8, "meter"),
        {source: "./media/buildings/burj-khalifa.svg"}
    ));
    
    results.push(makeBuilding(
        "Canton Tower",
        math.unit(604, "meter"),
        {source: "./media/buildings/canton-tower.svg"}
    ));
    
    results.push(makeBuilding(
        "CN Tower",
        math.unit(553.3, "meter"),
        {source: "./media/buildings/cn-tower.svg"}
    ));
    
    results.push(makeBuilding(
        "Taipei 101",
        math.unit(509.2, "meter"),
        {source: "./media/buildings/taipei-101.svg"}
    ));
    
    results.push(makeBuilding(
        "Empire State Building",
        math.unit(443.2, "meter"),
        {source: "./media/buildings/empire-state-building.svg"}
    ));
    
    results.push(makeBuilding(
        "Eiffel Tower",
        math.unit(324, "meter"),
        {source: "./media/buildings/eiffel-tower.svg"}
    ));
    
    results.push(makeBuilding(
        "Chrysler Building",
        math.unit(318.9, "meter"),
        {source: "./media/buildings/chrysler-building.svg"}
    ));

    return results;
}