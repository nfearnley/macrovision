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

    return response.json();
}