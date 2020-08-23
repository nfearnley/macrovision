async function loadJson(path) {
    try {
        var response = await fetch(path, { method: "GET" });
    }
    catch (err) {
        throw new Error("Failed to load JSON: " + path, err);
    }
    if (!response.ok) {
        throw new Error("Failed to load JSON: " + path, "Status Code" + response.status);
    }

    var jsonText = await response.text();

    var data = JSON.parse(jsonText, math.json.reviver)

    return data;
}