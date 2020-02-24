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
            ],
            owners: [
                
            ]
        },
        {
            prefix: "./media/characters/adake/",
            files: [
                { name: "front-1.svg", source: "https://www.furaffinity.net/view/26253324/"},
                { name: "front-2.svg", source: "https://www.furaffinity.net/view/26253324/"},
                { name: "back.svg", source: "https://www.furaffinity.net/view/26253324/"},
                { name: "kneel.svg", source: "https://www.furaffinity.net/view/26253324/"},
                
            ],
            authors: [
                "oselotti"
            ],
            owners: [
                "Dialuca01"
            ]
        },
        {
            prefix: "./media/characters/aigey/",
            files: [
                { name: "side.svg", source: "https://www.furaffinity.net/view/12006265/"}
            ],
            authors: [
                "just-a-little-mixed-up"
            ],
            owners: [
                
            ]
        },
        {
            prefix: "./media/characters/akari/",
            files: [
                { name: "front.svg", source: "https://www.furaffinity.net/view/21329356/"}
            ],
            authors: [
                "spyropurple"
            ],
            owners: [
                
            ]
        },
        {
            prefix: "./media/characters/andy/",
            files: [
                { name: "front.svg", source: null}
            ],
            authors: [
                "cardboardhead"
            ],
            owners: [
                
            ]
        },
        {
            prefix: "./media/characters/",
            files: [
                { name: "", source: ""}
            ],
            authors: [
                
            ]
        },
        {
            prefix: "./media/characters/",
            files: [
                { name: "", source: ""}
            ],
            authors: [
                
            ]
        },
        {
            prefix: "./media/characters/",
            files: [
                { name: "", source: ""}
            ],
            authors: [
                
            ]
        }
    ],
    authors: {
        "cardboardhead": {
            name: "cardboardhead",
            url: "https://twitter.com/cardboardhead"
        },
        "chemicalcrux": {
            name: "chemicalcrux",
            url: "https://www.furaffinity.net/user/chemicalcrux"
        },
        "clown-grin": {
            name: "clown-grin",
            url: "https://www.furaffinity.net/user/clown-grin"
        },
        "Dialuca01": {
            name: "Dialuca",
            url: "https://www.furaffinity.net/user/dialuca01"
        }
        "just-a-little-mixed-up": {
            name: "just-a-little-mixed-up",
            url: "https://www.furaffinity.net/user/just-a-little-mixed-up"
        },
        "labratkuma": {
            name: "labratkuma",
            url: "https://www.furaffinity.net/user/labratkuma"
        },
        "oselotti": {
            name: "Oselotti",
            url: "https://www.furaffinity.net/user/oselotti"
        },
        "spyropurple": {
            name: "spyropurple",
            url: "https://www.furaffinity.net/user/spyropurple/"
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
