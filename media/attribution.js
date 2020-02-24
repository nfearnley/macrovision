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
        },
        {
            prefix: "./media/characters/abysgar/",
            files: [
                { name: "front.svg", source: "https://www.furaffinity.net/view/32424108/"}
            ],
            authors: [
                "clown-grin",
                "labratkuma"
            ]
        }
    ],
    authors: {
        "chemicalcrux": {
            name: "chemicalcrux",
            url: "https://www.furaffinity.net/user/chemicalcrux"
        },
        "clown-grin": {
            name: "clown-grin",
            url: "https://www.furaffinity.net/user/clown-grin"
        },
        "labratkuma": {
            name: "labratkuma",
            url: "https://www.furaffinity.net/user/labratkuma"
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
