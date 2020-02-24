const attributionData = {
    sources: [
        {
            prefix: "./media/buildings/",
            files: [
                { name: "house.svg", source: null },
                { name: "mailbox.svg", source: null },
                { name: "mobile-home.svg", source: null },
            ],
            authors: [
                "chemicalcrux"
            ]
        },
        {
            prefix: "./media/buildings/skyscrapers/",
            files: [
                { name: "wide.svg", source: null },
                { name: "medium.svg", source: null },
                { name: "slender.svg", source: null },
                { name: "narrow.svg", source: null },
            ],
            authors: [
                "chemicalcrux"
            ]
        }
    ],
    authors: {
        "chemicalcrux": {
            name: "chemicalcrux",
            url: "https://www.furaffinity.net/user/chemicalcrux"
        }
    }
}

const attribution = {};

function prepareAttribution() {
    attribution["files"] = {};

    attributionData.sources.forEach(citation => {
        citation.files.forEach(file => {
            attribution.files[citation.prefix + file.name] = {
                authors: citation.authors,
                source: file.source
            }
        })
    });
}

function authorsOf(file) {
    if (attribution.files[file])
        return attribution.files[file].authors;
    else
        return undefined;
}

function authorsOfFull(file) {
    if (attribution.files[file]) {
        const result = [];
        attribution.files[file].authors.forEach(author => {
           result.push(attributionData.authors[author]);
        });

        return result;
    }
    else
        return undefined;
}

function sourceOf(file) {
    if (attribution.files[file])
        return attribution.files[file].source;
    else
        return undefined;
}

prepareAttribution();
