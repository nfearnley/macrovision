const characterMakers = [];

function makeCharacter(info, viewInfo, defaultSizes) {
    views = {};

    Object.entries(viewInfo).forEach(([key, value]) => {
        views[key] = {
            attributes: {
                height: {
                    name: "Height",
                    power: 1,
                    type: "length",
                    base: value.height
                }
            },
            image: value.image,
            name: value.name,
            info: value.info,
            rename: value.rename,
            default: value.default
        }

        if (value.weight) {
            views[key].attributes.weight = {
                name: "Mass",
                power: 3,
                type: "mass",
                base: value.weight
            };
        }

        if (value.capacity) {
            views[key].attributes.capacity = {
                name: "Capacity",
                power: 3,
                type: "volume",
                base: value.capacity
            }
        }
    });

    return createEntityMaker(info, views, defaultSizes);
}

const speciesData = {
    animal: {
        name: "Animal"
    },
    dog: {
        name: "Dog",
        parents: [
            "canine"
        ]
    },
    canine: {
        name: "Canine",
        parents: [
            "mammal"
        ]
    },
    crux: {
        name: "Crux",
        parents: [
            "mammal"
        ]
    },
    mammal: {
        name: "Mammal",
        parents: [
            "animal"
        ]
    },
    "rough-collie": {
        name: "Rough Collie",
        parents: [
            "dog"
        ]
    },
    dragon: {
        name: "Dragon",
        parents: [
            "reptile"
        ]
    },
    reptile: {
        name: "Reptile",
        parents: [
            "animal"
        ]
    },
    woodpecker: {
        name: "Woodpecker",
        parents: [
            "avian"
        ]
    },
    avian: {
        name: "Avian",
        parents: [
            "animal"
        ]
    },
    kitsune: {
        name: "Kitsune",
        parents: [
            "fox"
        ]
    },
    fox: {
        name: "Fox",
        parents: [
            "mammal"
        ]
    },
    pokemon: {
        name: "Pokemon"
    },
    tiger: {
        name: "Tiger",
        parents: [
            "cat"
        ]
    },
    cat: {
        name: "Cat",
        parents: [
            "mammal"
        ]
    },
    "blue-jay": {
        name: "Blue Jay",
        parents: [
            "avian"
        ]
    },
    wolf: {
        name: "Wolf",
        parents: [
            "mammal"
        ]
    },
    coyote: {
        name: "Coyote",
        parents: [
            "mammal"
        ]
    },
    raccoon: {
        name: "Raccoon",
        parents: [
            "mammal"
        ]
    },
    weasel: {
        name: "Weasel",
        parents: [
            "mammal"
        ]
    },
    "red-panda": {
        name: "Red Panda",
        parents: [
            "mammal"
        ]
    },
    dolphin: {
        name: "Dolphin",
        parents: [
            "mammal"
        ]
    },
    "african-wild-dog": {
        name: "African Wild Dog",
        parents: [
            "canine"
        ]
    },
    "hyena": {
        name: "Hyena",
        parents: [
            "canine"
        ]
    },
    "carbuncle": {
        name: "Carbuncle",
        parents: [
            "animal"
        ]
    },
    bat: {
        name: "Bat",
        parents: [
            "mammal"
        ]
    },
    "leaf-nosed-bat": {
        name: "Leaf-Nosed Bat",
        parents: [
            "bat"
        ]
    },
    "fish": {
        name: "Fish",
        parents: [
            "animal"
        ]
    },
    "ram": {
        name: "Ram",
        parents: [
            "mammal"
        ]
    },
    "demon": {
        name: "Demon"
    },
    "cougar": {
        name: "Cougar",
        parents: [
            "cat"
        ]
    },
    "goat": {
        name: "Goat",
        parents: [
            "mammal"
        ]
    },
    "lion": {
        name: "Lion",
        parents: [
            "cat"
        ]
    },
    "harpy-eager": {
        name: "Harpy Eagle",
        parents: [
            "avian"
        ]
    },
    "deer": {
        name: "Deer",
        parents: [
            "mammal"
        ]
    },
    "phoenix": {
        name: "Phoenix",
        parents: [
            "avian"
        ]
    },
    "aeromorph": {
        name: "Aeromorph",
        parents: [
            "machine"
        ]
    },
    "machine": {
        name: "Machine",
    },
    "android": {
        name: "Android",
        parents: [
            "machine"
        ]
    },
    "jackal": {
        name: "Jackal",
        parents: [
            "canine"
        ]
    },
    "corvid": {
        name: "Corvid",
        parents: [
            "avian"
        ]
    },
    "pharaoh-hound": {
        name: "Pharaoh Hound",
        parents: [
            "dog"
        ]
    },
    "skunk": {
        name: "Skunk",
        parents: [
            "mammal"
        ]
    },
    "shark": {
        name: "Shark",
        parents: [
            "fish"
        ]
    },
    "black-panther": {
        name: "Black Panther",
        parents: [
            "cat"
        ]
    },
    "umbra": {
        name: "Umbra",
        parents: [
            "animal"
        ]
    },
    "raven": {
        name: "Raven",
        parents: [
            "corvid"
        ]
    },
    "snow-leopard": {
        name: "Snow Leopard",
        parents: [
            "cat"
        ]
    },
    "barbary-lion": {
        name: "Barbary Lion",
        parents: [
            "lion"
        ]
    },
    "dra'gal": {
        name: "Dra'Gal",
        parents: [
            "mammal"
        ]
    },
    "german-shepherd": {
        name: "German Shepherd",
        parents: [
            "dog"
        ]
    },
    "bayleef": {
        name: "Bayleef",
        parents: [
            "pokemon"
        ]
    },
    "mouse": {
        name: "Mouse",
        parents: [
            "rodent"
        ]
    },
    "rat": {
        name: "Rat",
        parents: [
            "mammal"
        ]
    },
    "hoshiko-beast": {
        name: "Hoshiko Beast",
        parents: ["animal"]
    },
    "snow-jugani": {
        name: "Snow Jugani",
        parents: ["cat"]
    },
    "patamon": {
        name: "Patamon",
        parents: ["digimon"]
    },
    "digimon": {
        name: "Digimon",
    },
    "jugani": {
        name: "Jugani",
        parents: ["cat"]
    },
    "luxray": {
        name: "Luxray",
        parents: ["pokemon"]
    },
    "mech": {
        name: "Mech",
        parents: ["machine"]
    },
    "zoid": {
        name: "Zoid",
        parents: ["mech"]
    },
    "monster": {
        name: "Monster",
        parents: ["animal"]
    },
    "foo-dog": {
        name: "Foo Dog",
        parents: ["mammal"]
    },
    "elephant": {
        name: "Elephant",
        parents: ["mammal"]
    },
    "eagle": {
        name: "Eagle",
        parents: ["avian"]
    },
    "cow": {
        name: "Cow",
        parents: ["mammal"]
    },
    "crocodile": {
        name: "Crocodile",
        parents: ["reptile"]
    },
    "borzoi": {
        name: "Borzoi",
        parents: ["dog"]
    },
    "snake": {
        name: "Snake",
        parents: ["reptile"]
    },
    "horned-bush-viper": {
        name: "Horned Bush Viper",
        parents: ["snake"]
    },
    "cobra": {
        name: "Cobra",
        parents: ["snake"]
    },
    "harpy-eagle": {
        name: "Harpy Eagle",
        parents: ["eagle"]
    },
    "raptor": {
        name: "Raptor",
        parents: ["dinosaur"]
    },
    "dinosaur": {
        name: "Dinosaur",
        parents: ["reptile"]
    },
    "veilhound": {
        name: "Veilhound",
        parents: ["hellhound", "demon"]
    },
    "hellhound": {
        name: "Hellhound",
        parents: ["canine"]
    },
    "insect": {
        name: "Insect",
        parents: ["animal"]
    },
    "beetle": {
        name: "Beetle",
        parents: ["insect"]
    },
    "moth": {
        name: "Moth",
        parents: ["insect"]
    },
    "eastern-dragon": {
        name: "Eastern Dragon",
        parents: ["dragon"]
    },
    "jaguar": {
        name: "Jaguar",
        parents: ["cat"]
    },
    "horse": {
        name: "Horse",
        parents: ["mammal"]
    },
    "sergal": {
        name: "Sergal",
        parents: ["mammal"]
    },
    "gryphon": {
        name: "Gryphon",
        parents: ["lion", "eagle"]
    },
    "robot": {
        name: "Robot",
        parents: ["machine"]
    },
    "medihound": {
        name: "Medihound",
        parents: ["robot", "dog"]
    },
    "sylveon": {
        name: "Sylveon",
        parents: ["pokemon"]
    },
    "catgirl": {
        name: "Catgirl",
        parents: ["mammal"]
    },
    "cowgirl": {
        name: "Cowgirl",
        parents: ["mammal"]
    },
    "pony": {
        name: "Pony",
        parents: ["horse"]
    },
    "rabbit": {
        name: "Rabbit",
        parents: ["mammal"]
    },
    "fennec-fox": {
        name: "Fennec Fox",
        parents: ["fox"]
    },
    "azodian": {
        name: "Azodian",
        parents: ["mouse"]
    },
    "shiba-inu": {
        name: "Shiba Inu",
        parents: ["dog"]
    },
    "changeling": {
        name: "Changeling",
        parents: ["insect"]
    },
    "cheetah": {
        name: "Cheetah",
        parents: ["cat"]
    },
    "golden-jackal": {
        name: "Golden Jackal",
        parents: ["jackal"]
    },
    "manectric": {
        name: "Manectric",
        parents: ["pokemon"]
    },
    "rat": {
        name: "Rat",
        parents: ["rodent"]
    },
    "rodent": {
        name: "Rodent",
        parents: ["mammal"]
    },
    "octocoon": {
        name: "Octocoon",
        parents: ["raccoon", "octopus"]
    },
    "octopus": {
        name: "Octopus",
        parents: ["fish"]
    },
    "werewolf": {
        name: "Werewolf",
        parents: ["wolf"]
    },
    "meerkat": {
        name: "Meerkat",
        parents: ["mammal"]
    },
    "human": {
        name: "Human",
        parents: ["mammal"]
    },
    "geth": {
        name: "Geth",
        parents: ["android"]
    },
    "husky": {
        name: "Husky",
        parents: ["dog"]
    },
    "long-eared-bat": {
        name: "Long Eared Bat",
        parents: ["bat"]
    },
    "lizard": {
        name: "Lizard",
        parents: ["reptile"]
    },
    "salamander": {
        name: "Salamander",
        parents: ["lizard"]
    },
    "chameleon": {
        name: "Chameleon",
        parents: ["lizard"]
    },
    "gecko": {
        name: "Gecko",
        parents: ["lizard"]
    },
    "kobold": {
        name: "Kobold",
        parents: ["reptile"]
    },
    "charizard": {
        name: "Charizard",
        parents: ["pokemon"]
    },
    "lugia": {
        name: "Lugia",
        parents: ["pokemon"]
    },
    "cerberus": {
        name: "Cerberus",
        parents: ["dog"]
    },
    "tyrantrum": {
        name: "Tyrantrum",
        parents: ["pokemon"]
    },
    "lemur": {
        name: "Lemur",
        parents: ["mammal"]
    },
    "kelpie": {
        name: "Kelpie",
        parents: ["horse", "monster"]
    },
    "labrador": {
        name: "Labrador",
        parents: ["dog"]
    },
    "sylveon": {
        name: "Sylveon",
        parents: ["eeveelution"]
    },
    "eeveelution": {
        name: "Eeveelution",
        parents: ["pokemon"]
    },
    "polar-bear": {
        name: "Polar Bear",
        parents: ["bear"]
    },
    "bear": {
        name: "Bear",
        parents: ["mammal"]
    },
    "absol": {
        name: "Absol",
        parents: ["pokemon"]
    },
    "wolver": {
        name: "Wolver",
        parents: ["mammal"]
    },
    "rottweiler": {
        name: "Rottweiler",
        parents: ["dog"]
    },
    "zebra": {
        name: "Zebra",
        parents: ["horse"]
    },
    "yoshi": {
        name: "Yoshi",
        parents: ["lizard"]
    },
    "lynx": {
        name: "Lynx",
        parents: ["cat"]
    },
    "unknown": {
        name: "Unknown",
        parents: []
    },
    "thylacine": {
        name: "Thylacine",
        parents: ["mammal"]
    },
    "gabumon": {
        name: "Gabumon",
        parents: ["digimon"]
    },
    "border-collie": {
        name: "Border Collie",
        parents: ["dog"]
    },
    "imp": {
        name: "Imp",
        parents: ["demon"]
    },
    "kangaroo": {
        name: "Kangaroo",
        parents: ["mammal"]
    },
    "renamon": {
        name: "Renamon",
        parents: ["digimon"]
    },
    "candy-orca-dragon": {
        name: "Candy Orca Dragon",
        parents: ["fish", "dragon", "candy"]
    },
    "sabertooth-tiger": {
        name: "Sabertooth Tiger",
        parents: ["cat"]
    },
    "espurr": {
        name: "Espurr",
        parents: ["pokemon"]
    },
    "otter": {
        name: "Otter",
        parents: ["mammal"]
    },
    "elemental": {
        name: "Elemental",
        parents: ["mammal"]
    },
    "mew": {
        name: "Mew",
        parents: ["pokemon"]
    },
    "goodra": {
        name: "Goodra",
        parents: ["pokemon"]
    },
    "fairy": {
        name: "Fairy",
        parents: ["magical"]
    },
    "typhlosion": {
        name: "Typhlosion",
        parents: ["pokemon"]
    },
    "magical": {
        name: "Magical",
        parents: []
    },
    "xenomorph": {
        name: "Xenomorph",
        parents: ["monster", "alien"]
    },
    "charr": {
        name: "Charr",
        parents: ["cat"]
    },
    "siberian-husky": {
        name: "Siberian Husky",
        parents: ["husky"]
    },
    "alligator": {
        name: "Alligator",
        parents: ["reptile"]
    },
    "bernese-mountain-dog": {
        name: "Bernese Mountain Dog",
        parents: ["dog"]
    },
    "reshiram": {
        name: "Reshiram",
        parents: ["pokemon"]
    },
    "grizzly-bear": {
        name: "Grizzly Bear",
        parents: ["bear"]
    },
    "water-monitor": {
        name: "Water Monitor",
        parents: ["lizard"]
    },
    "banchofossa": {
        name: "Banchofossa",
        parents: ["mammal"]
    },
    "kirin": {
        name: "Kirin",
        parents: ["monster"]
    },
    "quilava": {
        name: "Quilava",
        parents: ["pokemon"]
    },
    "seviper": {
        name: "Seviper",
        parents: ["pokemon"]
    },
    "flying-fox": {
        name: "Flying Fox",
        parents: ["bat"]
    },
    "keynain": {
        name: "Keynain",
        parents: ["avian"]
    },
    "lucario": {
        name: "Lucario",
        parents: ["pokemon"]
    },
    "siamese-cat": {
        name: "Siamese Cat",
        parents: ["cat"]
    },
    "spider": {
        name: "Spider",
        parents: ["insect"]
    },
    "samurott": {
        name: "Samurott",
        parents: ["pokemon"]
    },
    "megalodon": {
        name: "Megalodon",
        parents: ["shark"]
    },
    "unicorn": {
        name: "Unicorn",
        parents: ["horse"]
    },
    "greninja": {
        name: "Greninja",
        parents: ["pokemon"]
    },
    "water-dragon": {
        name: "Water Dragon",
        parents: ["dragon"]
    },
    "cross-fox": {
        name: "Cross Fox",
        parents: ["fox"]
    },
    "synth": {
        name: "Synth",
        parents: ["machine"]
    },
    "construct": {
        name: "Construct",
        parents: []
    },
    "mexican-wolf": {
        name: "Mexican Wolf",
        parents: ["wolf"]
    },
    "leopard": {
        name: "Leopard",
        parents: ["cat"]
    },
    "pig": {
        name: "Pig",
        parents: ["mammal"]
    },
    "ampharos": {
        name: "Ampharos",
        parents: ["pokemon"]
    },
    "orca": {
        name: "Orca",
        parents: ["fish"]
    },
    "lycanroc": {
        name: "Lycanroc",
        parents: ["pokemon"]
    },
    "surkanu": {
        name: "Surkanu",
        parents: ["monster"]
    },
    "seal": {
        name: "Seal",
        parents: ["mammal"]
    },
    "keldeo": {
        name: "Keldeo",
        parents: ["pokemon"]
    },
    "great-dane": {
        name: "Great Dane",
        parents: ["dog"]
    },
    "black-backed-jackal": {
        name: "Black Backed Jackal",
        parents: ["jackal"]
    },
    "sheep": {
        name: "Sheep",
        parents: ["mammal"]
    },
    "leopard-seal": {
        name: "Leopard Seal",
        parents: ["seal"]
    },
    "zoroark": {
        name: "Zoroark",
        parents: ["pokemon"]
    },
    "maned-wolf": {
        name: "Maned Wolf",
        parents: ["canine"]
    },
    "dracha": {
        name: "Dracha",
        parents: ["dragon"]
    },
    "wolxi": {
        name: "Wolxi",
        parents: ["mammal", "alien"]
    },
    "dratini": {
        name: "Dratini",
        parents: ["pokemon", "dragon"]
    },
    "skaven": {
        name: "Skaven",
        parents: ["rat"]
    },
    "mongoose": {
        name: "Mongoose",
        parents: ["mammal"]
    },
    "lopunny": {
        name: "Lopunny",
        parents: ["pokemon", "rabbit"]
    },
    "feraligatr": {
        name: "Feraligatr",
        parents: ["pokemon", "alligator"]
    },
    "houndoom": {
        name: "Houndoom",
        parents: ["pokemon", "dog"]
    },
    "protogen": {
        name: "Protogen",
        parents: ["machine"]
    },
    "saint-bernard": {
        name: "Saint Bernard",
        parents: ["dog"]
    },
    "crow": {
        name: "Crow",
        parents: ["corvid"]
    },
    "delphox": {
        name: "Delphox",
        parents: ["pokemon", "fox"]
    },
    "moose": {
        name: "Moose",
        parents: ["mammal"]
    },
    "joraxian": {
        name: "Joraxian",
        parents: ["monster", "canine", "demon"]
    },
    "nimbat": {
        name: "Nimbat",
        parents: ["mammal"]
    },
    "aardwolf": {
        name: "Aardwolf",
        parents: ["canine"]
    },
    "fluudrani": {
        name: "Fluudrani",
        parents: ["animal"]
    },
    "arcanine": {
        name: "Arcanine",
        parents: ["pokemon", "dog"]
    },
    "inteleon": {
        name: "Inteleon",
        parents: ["pokemon", "fish"]
    },
    "ninetales": {
        name: "Ninetales",
        parents: ["pokemon", "kitsune"]
    },
    "tigrex": {
        name: "Tigrex",
        parents: ["tiger"]
    },
    "zorua": {
        name: "Zorua",
        parents: ["pokemon", "fox"]
    },
    "vulpix": {
        name: "Vulpix",
        parents: ["pokemon", "fox"]
    },
    "barghest": {
        name: "Barghest",
        parents: ["monster"]
    },
    "gray-wolf": {
        name: "Gray Wolf",
        parents: ["wolf"]
    },
    "ruppells-fox": {
        name: "Rüppell's Fox",
        parents: ["fox"]
    },
    "bull-terrier": {
        name: "Bull Terrier",
        parents: ["dog"]
    },
    "european-honey-buzzard": {
        name: "European Honey Buzzard",
        parents: ["avian"]
    },
    "t-rex": {
        name: "T Rex",
        parents: ["dinosaur"]
    },
    "mactarian": {
        name: "Mactarian",
        parents: ["shark", "monster"]
    },
    "mewtwo-y": {
        name: "Mewtwo Y",
        parents: ["mewtwo"]
    },
    "mewtwo": {
        name: "Mewtwo",
        parents: ["pokemon"]
    },
    "mew": {
        name: "Mew",
        parents: ["pokemon"]
    },
    "eevee": {
        name: "Eevee",
        parents: ["eeveelution"]
    },
    "mienshao": {
        name: "Mienshao",
        parents: ["pokemon"]
    },
    "sugar-glider": {
        name: "Sugar Glider",
        parents: ["opossum"]
    },
    "spectral-bat": {
        name: "Spectral Bat",
        parents: ["bat"]
    },
    "scolipede": {
        name: "Scolipede",
        parents: ["pokemon", "insect"]
    },
    "jackalope": {
        name: "Jackalope",
        parents: ["rabbit", "antelope"]
    },
    "caracal": {
        name: "Caracal",
        parents: ["cat"]
    },
    "stoat": {
        name: "Stoat",
        parents: ["mammal"]
    },
    "african-golden-cat": {
        name: "African Golden Cat",
        parents: ["cat"]
    },
    "gigantosaurus": {
        name: "Gigantosaurus",
        parents: ["dinosaur"]
    },
    "zorgoia": {
        name: "Zorgoia",
        parents: ["mammal"]
    },
    "monitor-lizard": {
        name: "Monitor Lizard",
        parents: ["lizard"]
    },
    "ziralkia": {
        name: "Ziralkia",
        parents: ["mammal"]
    },
    "kiiasi": {
        name: "Kiiasi",
        parents: ["animal"]
    },
    "synx": {
        name: "Synx",
        parents: ["monster"]
    },
    "panther": {
        name: "Panther",
        parents: ["cat"]
    },
    "azumarill": {
        name: "Azumarill",
        parents: ["pokemon"]
    },
    "river-snaptail": {
        name: "River Snaptail",
        parents: ["otter", "crocodile"]
    },
    "great-blue-heron": {
        name: "Great Blue Heron",
        parents: ["avian"]
    },
    "smeargle": {
        name: "Smeargle",
        parents: ["pokemon"]
    },
    "vendeilen": {
        name: "Vendeilen",
        parents: ["monster"]
    },
    "ventura": {
        name: "Ventura",
        parents: ["canine"]
    },
    "clouded-leopard": {
        name: "Clouded Leopard",
        parents: ["leopard"]
    },
    "argonian": {
        name: "Argonian",
        parents: ["lizard"]
    },
    "salazzle": {
        name: "Salazzle",
        parents: ["pokemon", "lizard"]
    },
    "je-stoff-drachen": {
        name: "Je-Stoff Drachen",
        parents: ["dragon"]
    },
    "finnish-spitz-dog": {
        name: "Finnish Spitz Dog",
        parents: ["dog"]
    },
    "gray-fox": {
        name: "Gray Fox",
        parents: ["fox"]
    },
    "opossum": {
        name: "opossum",
        parents: ["mammal"]
    },
    "antelope": {
        name: "Antelope",
        parents: ["mammal"]
    },
    "weavile": {
        name: "Weavile",
        parents: ["pokemon"]
    },
    "pikachu": {
        name: "Pikachu",
        parents: ["pokemon", "mouse"]
    },
    "grovyle": {
        name: "Grovyle",
        parents: ["pokemon", "plant"]
    },
    "sthara": {
        name: "Sthara",
        parents: ["snow-leopard", "reptile"]
    },
    "star-warrior": {
        name: "Star Warrior",
        parents: ["magical"]
    },
    "dragonoid": {
        name: "Dragonoid",
        parents: ["dragon"]
    },
    "suicune": {
        name: "Suicune",
        parents: ["pokemon"]
    },
    "vole": {
        name: "Vole",
        parents: ["mammal"]
    },
    "blaziken": {
        name: "Blaziken",
        parents: ["pokemon", "avian"]
    },
    "buizel": {
        name: "Buizel",
        parents: ["pokemon", "fish"]
    },
    "floatzel": {
        name: "Floatzel",
        parents: ["pokemon", "fish"]
    },
    "umok": {
        name: "Umok",
        parents: ["avian"]
    },
    "sea-monster": {
        name: "Sea Monster",
        parents: ["monster", "fish"]
    },
    "egyptian-vulture": {
        name: "Egyptian Vulture",
        parents: ["avian"]
    },
    "doberman": {
        name: "Doberman",
        parents: ["dog"]
    },
    "zangoose": {
        name: "Zangoose",
        parents: ["pokemon", "mongoose"]
    },
    "mongoose": {
        name: "Mongoose",
        parents: ["mammal"]
    },
    "wickerbeast": {
        name: "Wickerbeast",
        parents: ["monster"]
    },
    "zenari": {
        name: "Zenari",
        parents: ["lizard"]
    },
    "plant": {
        name: "Plant",
        parents: []
    },
    "raskatox": {
        name: "Raskatox",
        parents: ["raccoon", "skunk", "cat", "fox"]
    },
    "mikromare": {
        name: "mikromare",
        parents: ["alien"]
    },
    "alien": {
        name: "Alien",
        parents: ["animal"]
    },
    "deity": {
        name: "Deity",
        parents: []
    },
    "skarlan": {
      name: "Skarlan",
      parents: ["slug", "dragon"]
    },
    "slug": {
      name: "Slug",
      parents: ["mollusk"]
    },
    "mollusk": {
      name: "Mollusk",
      parents: ["animal"]
    },
    "chimera": {
      name: "Chimera",
      parents: ["monster"]
    },
    "gestalt": {
      name: "Gestalt",
      parents: ["construct"]
    },
    "mimic": {
      name: "Mimic",
      parents: ["monster"]
    },
    "calico-rat": {
      name: "Calico Rat",
      parents: ["rat"]
    },
    "panda": {
      name: "Panda",
      parents: ["mammal"]
    },
    "oni": {
      name: "Oni",
      parents: ["monster"]
    },
    "pegasus": {
      name: "Pegasus",
      parents: ["horse"]
    },
    "vulpera": {
      name: "Vulpera",
      parents: ["fennec-fox"]
    },
    "ceratosaurus": {
      name: "Ceratosaurus",
      parents: ["dinosaur"]
    },
    "nykur": {
      name: "Nykur",
      parents: ["horse", "monster"]
    },
    "giraffe": {
      name: "Giraffe",
      parents: ["mammal"]
    },
    "tauren": {
      name: "Tauren",
      parents: ["cow"]
    },
    "draconi": {
      name: "Draconi",
      parents: ["alien", "cat", "cyborg"]
    },
    "dire-wolf": {
      name: "Dire Wolf",
      parents: ["wolf"]
    },
    "ferromorph": {
      name: "Ferromorph",
      parents: ["construct"]
    },
    "meowth": {
      name: "Meowth",
      parents: ["cat", "pokemon"]
    },
    "pavodragon": {
      name: "Pavodragon",
      parents: ["dragon"]
    },
    "aaltranae": {
      name: "Aaltranae",
      parents: ["dragon"]
    },
    "cyborg": {
      name: "Cyborg",
      parents: ["machine"]
    },
    "draptor": {
      name: "Draptor",
      parents: ["dragon"]
    },
    "candy": {
      name: "Candy",
      parents: []
    },
    "drenath": {
      name: "Drenath",
      parents: ["dragon", "snake", "rabbit"]
    },
}

//species

function getSpeciesInfo(speciesList) {
    let result = new Set();
    speciesList.flatMap(getSpeciesInfoHelper).forEach(entry => {
        result.add(entry)
    });

    return Array.from(result);
};

function getSpeciesInfoHelper(species) {
    if (!speciesData[species]) {
        console.warn(species + " doesn't exist");
        return [];
    }
    if (speciesData[species].parents) {
        return [species].concat(speciesData[species].parents.flatMap(parent => getSpeciesInfoHelper(parent)));
    } else {
        return [species];
    }
}

characterMakers.push(() => makeCharacter(
    {
        name: "Fen",
        species: ["crux"],
        description: {
            title: "Bio",
            text: "Very furry. Sheds on everything."
        },
        tags: [
            "anthro",
            "goo"
        ]
    },
    {
        back: {
            height: math.unit(2.2428, "meter"),
            weight: math.unit(124.738, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/fen/back.svg",
                extra: 2024/1867,
                bottom: 13/2037
            },
            info: {
                description: {
                    mode: "append",
                    text: "\n\nHe is not currently looking at you."
                }
            }
        },
        full: {
            height: math.unit(1.34, "meter"),
            weight: math.unit(225, "kg"),
            name: "Full",
            image: {
                source: "./media/characters/fen/full.svg"
            },
            info: {
                description: {
                    mode: "append",
                    text: "\n\nMunch."
                }
            }
        },
        kneeling: {
            height: math.unit(5.4, "feet"),
            weight: math.unit(124.738, "kg"),
            name: "Kneeling",
            image: {
                source: "./media/characters/fen/kneeling.svg",
                extra: 563 / 507
            }
        },
        goo: {
            height: math.unit(2.8, "feet"),
            weight: math.unit(125, "kg"),
            capacity: math.unit(1, "people"),
            name: "Goo",
            image: {
                source: "./media/characters/fen/goo.svg",
                bottom: 116 / 613
            }
        },
        lounging: {
            height: math.unit(6.5, "feet"),
            weight: math.unit(125, "kg"),
            name: "Lounging",
            image: {
                source: "./media/characters/fen/lounging.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2.2428, "meter")
        },
        {
            name: "Big",
            height: math.unit(12, "feet")
        },
        {
            name: "Minimacro",
            height: math.unit(40, "feet"),
            default: true,
            info: {
                description: {
                    mode: "append",
                    text: "\n\nTOO DAMN BIG"
                }
            }
        },
        {
            name: "Macro",
            height: math.unit(100, "feet"),
            info: {
                description: {
                    mode: "append",
                    text: "\n\nTOO DAMN BIG"
                }
            }
        },
        {
            name: "Macro+",
            height: math.unit(300, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(2, "miles")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sofia Fluttertail", species: ["rough-collie"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(183, "cm"),
            weight: math.unit(80, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/sofia-fluttertail/front.svg",
                bottom: 0.01,
                extra: 2154 / 2081
            }
        },
        frontAlt: {
            height: math.unit(183, "cm"),
            weight: math.unit(80, "kg"),
            name: "Front (alt)",
            image: {
                source: "./media/characters/sofia-fluttertail/front-alt.svg"
            }
        },
        back: {
            height: math.unit(183, "cm"),
            weight: math.unit(80, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/sofia-fluttertail/back.svg"
            }
        },
        kneeling: {
            height: math.unit(125, "cm"),
            weight: math.unit(80, "kg"),
            name: "Kneeling",
            image: {
                source: "./media/characters/sofia-fluttertail/kneeling.svg",
                extra: 1033 / 977,
                bottom: 23.7 / 1057
            }
        },
        maw: {
            height: math.unit(183 / 5, "cm"),
            name: "Maw",
            image: {
                source: "./media/characters/sofia-fluttertail/maw.svg"
            }
        },
        mawcloseup: {
            height: math.unit(183 / 5 * 0.41, "cm"),
            name: "Maw (Closeup)",
            image: {
                source: "./media/characters/sofia-fluttertail/maw-closeup.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1.83, "meter")
        },
        {
            name: "Size Thief",
            height: math.unit(18, "feet")
        },
        {
            name: "50 Foot Collie",
            height: math.unit(50, "feet")
        },
        {
            name: "Macro",
            height: math.unit(96, "feet"),
            default: true
        },
        {
            name: "Megamerger",
            height: math.unit(650, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "March", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(100, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/march/front.svg",
                extra: 1,
                bottom: 0.015
            }
        },
        foot: {
            height: math.unit(0.9, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/march/foot.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7.9, "feet")
        },
        {
            name: "Macro",
            height: math.unit(220, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(2.98, "km"),
            default: true
        },
        {
            name: "Gigamacro",
            height: math.unit(15963, "km")
        },
        {
            name: "Teramacro",
            height: math.unit(2980000000, "km")
        },
        {
            name: "Examacro",
            height: math.unit(250, "parsecs")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Noir", species: ["woodpecker"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(60, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/noir/front.svg",
                extra: 1,
                bottom: 0.032
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6.6, "feet")
        },
        {
            name: "Macro",
            height: math.unit(500, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(2.5, "km"),
            default: true
        },
        {
            name: "Gigamacro",
            height: math.unit(22500, "km")
        },
        {
            name: "Teramacro",
            height: math.unit(2500000000, "km")
        },
        {
            name: "Examacro",
            height: math.unit(200, "parsecs")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Okuri", species: ["kitsune"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(100, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/okuri/front.svg",
                extra: 1,
                bottom: 0.037
            }
        },
        back: {
            height: math.unit(7, "feet"),
            weight: math.unit(100, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/okuri/back.svg",
                extra: 1,
                bottom: 0.007
            }
        },
    },
    [
        {
            name: "Megamacro",
            height: math.unit(100, "miles"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Manny", species: ["manectric"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(100, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/manny/front.svg",
                extra: 1,
                bottom: 0.06
            }
        },
        back: {
            height: math.unit(7, "feet"),
            weight: math.unit(100, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/manny/back.svg",
                extra: 1,
                bottom: 0.014
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7, "feet"),
        },
        {
            name: "Macro",
            height: math.unit(78, "feet"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(300, "meters")
        },
        {
            name: "Macro++",
            height: math.unit(2400, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(5167, "meters")
        },
        {
            name: "Gigamacro",
            height: math.unit(41769, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Adake", species: ["tiger"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(100, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/adake/front-1.svg"
            }
        },
        frontAlt: {
            height: math.unit(7, "feet"),
            weight: math.unit(100, "kg"),
            name: "Front (Alt)",
            image: {
                source: "./media/characters/adake/front-2.svg",
                extra: 1,
                bottom: 0.01
            }
        },
        back: {
            height: math.unit(7, "feet"),
            weight: math.unit(100, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/adake/back.svg",
            }
        },
        kneel: {
            height: math.unit(5.385, "feet"),
            weight: math.unit(100, "kg"),
            name: "Kneeling",
            image: {
                source: "./media/characters/adake/kneel.svg",
                bottom: 0.052
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7, "feet"),
        },
        {
            name: "Macro",
            height: math.unit(78, "feet"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(300, "meters")
        },
        {
            name: "Macro++",
            height: math.unit(2400, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(5167, "meters")
        },
        {
            name: "Gigamacro",
            height: math.unit(41769, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Elijah", species: ["blue-jay"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.65, "meters"),
            weight: math.unit(50, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/elijah/front.svg",
                extra: 858 / 830,
                bottom: 95.5 / 953.8559
            }
        },
        back: {
            height: math.unit(1.65, "meters"),
            weight: math.unit(50, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/elijah/back.svg",
                extra: 895 / 850,
                bottom: 5.3 / 897.956
            }
        },
        frontNsfw: {
            height: math.unit(1.65, "meters"),
            weight: math.unit(50, "kg"),
            name: "Front (NSFW)",
            image: {
                source: "./media/characters/elijah/front-nsfw.svg",
                extra: 858 / 830,
                bottom: 95.5 / 953.8559
            }
        },
        backNsfw: {
            height: math.unit(1.65, "meters"),
            weight: math.unit(50, "kg"),
            name: "Back (NSFW)",
            image: {
                source: "./media/characters/elijah/back-nsfw.svg",
                extra: 895 / 850,
                bottom: 5.3 / 897.956
            }
        },
        dick: {
            height: math.unit(1, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/elijah/dick.svg"
            }
        },
        beakOpen: {
            height: math.unit(1.25, "feet"),
            name: "Beak (Open)",
            image: {
                source: "./media/characters/elijah/beak-open.svg"
            }
        },
        beakShut: {
            height: math.unit(1.25, "feet"),
            name: "Beak (Shut)",
            image: {
                source: "./media/characters/elijah/beak-shut.svg"
            }
        },
        footFlexing: {
            height: math.unit(1.61, "feet"),
            name: "Foot (Flexing)",
            image: {
                source: "./media/characters/elijah/foot-flexing.svg"
            }
        },
        footStepping: {
            height: math.unit(1.44, "feet"),
            name: "Foot (Stepping)",
            image: {
                source: "./media/characters/elijah/foot-stepping.svg"
            }
        },
        plantigradeLeg: {
            height: math.unit(2.34, "feet"),
            name: "Plantigrade Leg",
            image: {
                source: "./media/characters/elijah/plantigrade-leg.svg"
            }
        },
        plantigradeFootLeft: {
            height: math.unit(0.9, "feet"),
            name: "Plantigrade Foot (Left)",
            image: {
                source: "./media/characters/elijah/plantigrade-foot-left.svg"
            }
        },
        plantigradeFootRight: {
            height: math.unit(0.9, "feet"),
            name: "Plantigrade Foot (Right)",
            image: {
                source: "./media/characters/elijah/plantigrade-foot-right.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1.65, "meters")
        },
        {
            name: "Macro",
            height: math.unit(55, "meters"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(105, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rai", species: ["wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(11, "feet"),
            weight: math.unit(80, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/rai/front.svg",
                extra: 1,
                bottom: 0.03
            }
        },
        side: {
            height: math.unit(11, "feet"),
            weight: math.unit(80, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/rai/side.svg"
            }
        },
        back: {
            height: math.unit(11, "feet"),
            weight: math.unit(80, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/rai/back.svg",
                extra: 1,
                bottom: 0.01
            }
        },
        feral: {
            height: math.unit(11, "feet"),
            weight: math.unit(800, "lb"),
            name: "Feral",
            image: {
                source: "./media/characters/rai/feral.svg",
                extra: 1050 / 659,
                bottom: 0.07
            }
        },
        dragon: {
            height: math.unit(23, "feet"),
            weight: math.unit(50000, "lb"),
            name: "Dragon",
            image: {
                source: "./media/characters/rai/dragon.svg",
                extra: 2498 / 2030,
                bottom: 85.2 / 2584
            }
        },
        maw: {
            height: math.unit(6 / 3.81416, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/rai/maw.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(11, "feet")
        },
        {
            name: "Macro",
            height: math.unit(302, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Jazzy", species: ["coyote", "wolf"], tags: ["anthro"] },
    {
        frontDressed: {
            height: math.unit(216, "feet"),
            weight: math.unit(7000000, "lb"),
            name: "Front (Dressed)",
            image: {
                source: "./media/characters/jazzy/front-dressed.svg",
                extra: 2738 / 2651,
                bottom: 41.8 / 2786
            }
        },
        backDressed: {
            height: math.unit(216, "feet"),
            weight: math.unit(7000000, "lb"),
            name: "Back (Dressed)",
            image: {
                source: "./media/characters/jazzy/back-dressed.svg",
                extra: 2775 / 2673,
                bottom: 36.8 / 2817
            }
        },
        front: {
            height: math.unit(216, "feet"),
            weight: math.unit(7000000, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/jazzy/front.svg",
                extra: 2738 / 2651,
                bottom: 41.8 / 2786
            }
        },
        back: {
            height: math.unit(216, "feet"),
            weight: math.unit(7000000, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/jazzy/back.svg",
                extra: 2775 / 2673,
                bottom: 36.8 / 2817
            }
        },
        maw: {
            height: math.unit(20, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/jazzy/maw.svg"
            }
        },
        paws: {
            height: math.unit(27.5, "feet"),
            name: "Paws",
            image: {
                source: "./media/characters/jazzy/paws.svg"
            }
        },
        eye: {
            height: math.unit(4.4, "feet"),
            name: "Eye",
            image: {
                source: "./media/characters/jazzy/eye.svg"
            }
        },
        droneOffense: {
            height: math.unit(9.5, "inches"),
            name: "Drone (Offense)",
            image: {
                source: "./media/characters/jazzy/drone-offense.svg"
            }
        },
        droneRecon: {
            height: math.unit(9.5, "inches"),
            name: "Drone (Recon)",
            image: {
                source: "./media/characters/jazzy/drone-recon.svg"
            }
        },
        droneDefense: {
            height: math.unit(9.5, "inches"),
            name: "Drone (Defense)",
            image: {
                source: "./media/characters/jazzy/drone-defense.svg"
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(216, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Flamm", species: ["cat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(80, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/flamm/front.svg",
                extra: 1794 / 1677,
                bottom: 31.7 / 1828.5
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(9.5, "feet")
        },
        {
            name: "Macro",
            height: math.unit(200, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Zephiro", species: ["raccoon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(80, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/zephiro/front.svg",
                extra: 2309 / 2162,
                bottom: 0.069
            }
        },
        side: {
            height: math.unit(7, "feet"),
            weight: math.unit(80, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/zephiro/side.svg",
                extra: 2403 / 2279,
                bottom: 0.015
            }
        },
        back: {
            height: math.unit(7, "feet"),
            weight: math.unit(80, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/zephiro/back.svg",
                extra: 2373 / 2244,
                bottom: 0.013
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(3, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 3 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(118, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Fory", species: ["weasel", "rabbit"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5, "feet"),
            weight: math.unit(90, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/fory/front.svg",
                extra: 2862 / 2674,
                bottom: 180 / 3043.8
            }
        },
        back: {
            height: math.unit(5, "feet"),
            weight: math.unit(90, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/fory/back.svg",
                extra: 2962 / 2791,
                bottom: 106 / 3071.8
            }
        },
        foot: {
            height: math.unit(2.14, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/fory/foot.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5, "feet")
        },
        {
            name: "Macro",
            height: math.unit(50, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(10, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(5, "earths")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kurrikage", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(90, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/kurrikage/front.svg",
                extra: 1,
                bottom: 0.035
            }
        },
        back: {
            height: math.unit(7, "feet"),
            weight: math.unit(90, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/kurrikage/back.svg"
            }
        },
        paw: {
            height: math.unit(1.5, "feet"),
            name: "Paw",
            image: {
                source: "./media/characters/kurrikage/paw.svg"
            }
        },
        staff: {
            height: math.unit(6.7, "feet"),
            name: "Staff",
            image: {
                source: "./media/characters/kurrikage/staff.svg"
            }
        },
        peek: {
            height: math.unit(1.05, "feet"),
            name: "Peeking",
            image: {
                source: "./media/characters/kurrikage/peek.svg",
                bottom: 0.08
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(12, "feet"),
            default: true
        },
        {
            name: "Big",
            height: math.unit(20, "feet")
        },
        {
            name: "Macro",
            height: math.unit(500, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(20, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Shingo", species: ["red-panda"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(75, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/shingo/front.svg",
                extra: 3511 / 3338,
                bottom: 0.005
            }
        },
        paw: {
            height: math.unit(1, "feet"),
            name: "Paw",
            image: {
                source: "./media/characters/shingo/paw.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(4, "inches")
        },
        {
            name: "Normal",
            height: math.unit(6, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(108, "feet")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Aigey", species: ["wolf", "dolphin"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(75, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/aigey/side.svg"
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(200, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(100, "miles")
        },
    ]
)


)

characterMakers.push(() => makeCharacter(
    { name: "Natasha", species: ["african-wild-dog"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 5 / 12, "feet"),
            weight: math.unit(75, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/natasha/front.svg",
                extra: 859 / 824,
                bottom: 23 / 879.6
            }
        },
        frontNsfw: {
            height: math.unit(5 + 5 / 12, "feet"),
            weight: math.unit(75, "kg"),
            name: "Front (NSFW)",
            image: {
                source: "./media/characters/natasha/front-nsfw.svg",
                extra: 859 / 824,
                bottom: 23 / 879.6
            }
        },
        frontErect: {
            height: math.unit(5 + 5 / 12, "feet"),
            weight: math.unit(75, "kg"),
            name: "Front (Erect)",
            image: {
                source: "./media/characters/natasha/front-erect.svg",
                extra: 859 / 824,
                bottom: 23 / 879.6
            }
        },
        back: {
            height: math.unit(5 + 5 / 12, "feet"),
            weight: math.unit(75, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/natasha/back.svg",
                extra: 887.9 / 852.6,
                bottom: 9.7 / 896.4
            }
        },
        backAlt: {
            height: math.unit(5 + 5 / 12, "feet"),
            weight: math.unit(75, "kg"),
            name: "Back (Alt)",
            image: {
                source: "./media/characters/natasha/back-alt.svg",
                extra: 1236.7 / 1192,
                bottom: 22.3 / 1258.2
            }
        },
        dick: {
            height: math.unit(1.772, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/natasha/dick.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 5 / 12, "feet")
        },
        {
            name: "Large",
            height: math.unit(12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(100, "feet"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(260, "feet")
        },
        {
            name: "Macro++",
            height: math.unit(1, "mile")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Malik", species: ["hyena"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(75, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/malik/front.svg"
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(75, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/malik/side.svg",
                extra: 1.1539
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(75, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/malik/back.svg"
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(156, "feet"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(1188, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sefer", species: ["carbuncle"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(75, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/sefer/front.svg",
                extra: 848 / 659,
                bottom: 28.3 / 876.442
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(75, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/sefer/back.svg",
                extra: 864 / 695,
                bottom: 10 / 871
            }
        },
        frontDressed: {
            height: math.unit(6, "feet"),
            weight: math.unit(75, "kg"),
            name: "Front (Dressed)",
            image: {
                source: "./media/characters/sefer/front-dressed.svg",
                extra: 839 / 653,
                bottom: 37.6 / 878
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "North", species: ["leaf-nosed-bat"], tags: ["anthro"] },
    {
        body: {
            height: math.unit(2.2428, "meter"),
            weight: math.unit(124.738, "kg"),
            name: "Body",
            image: {
                extra: 1225 / 1050,
                source: "./media/characters/north/front.svg"
            }
        }
    },
    [
        {
            name: "Micro",
            height: math.unit(4, "inches")
        },
        {
            name: "Macro",
            height: math.unit(63, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(101, "miles"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Talan", species: ["dragon", "fish"], tags: ["anthro"] },
    {

        angled: {
            height: math.unit(4, "meter"),
            weight: math.unit(150, "kg"),
            name: "Angled",
            image: {
                source: "./media/characters/talan/angled-sfw.svg",
                bottom: 29 / 3734
            }
        },
        angledNsfw: {
            height: math.unit(4, "meter"),
            weight: math.unit(150, "kg"),
            name: "Angled (NSFW)",
            image: {
                source: "./media/characters/talan/angled-nsfw.svg",
                bottom: 29 / 3734
            }
        },
        frontNsfw: {
            height: math.unit(4, "meter"),
            weight: math.unit(150, "kg"),
            name: "Front (NSFW)",
            image: {
                source: "./media/characters/talan/front-nsfw.svg",
                bottom: 29 / 3734
            }
        },
        sideNsfw: {
            height: math.unit(4, "meter"),
            weight: math.unit(150, "kg"),
            name: "Side (NSFW)",
            image: {
                source: "./media/characters/talan/side-nsfw.svg",
                bottom: 29 / 3734
            }
        },
        back: {
            height: math.unit(4, "meter"),
            weight: math.unit(150, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/talan/back.svg"
            }
        },
        dickBottom: {
            height: math.unit(0.621, "meter"),
            name: "Dick (Bottom)",
            image: {
                source: "./media/characters/talan/dick-bottom.svg"
            }
        },
        dickTop: {
            height: math.unit(0.621, "meter"),
            name: "Dick (Top)",
            image: {
                source: "./media/characters/talan/dick-top.svg"
            }
        },
        dickSide: {
            height: math.unit(0.305, "meter"),
            name: "Dick (Side)",
            image: {
                source: "./media/characters/talan/dick-side.svg"
            }
        },
        dickFront: {
            height: math.unit(0.305, "meter"),
            name: "Dick (Front)",
            image: {
                source: "./media/characters/talan/dick-front.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4, "meters")
        },
        {
            name: "Macro",
            height: math.unit(100, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(2, "miles"),
            default: true
        },
        {
            name: "Gigamacro",
            height: math.unit(5000, "miles")
        },
        {
            name: "Teramacro",
            height: math.unit(100, "parsecs")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Gael'Rathus", species: ["ram", "demon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meter"),
            weight: math.unit(90, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/gael'rathus/front.svg"
            }
        },
        frontAlt: {
            height: math.unit(2, "meter"),
            weight: math.unit(90, "kg"),
            name: "Front (alt)",
            image: {
                source: "./media/characters/gael'rathus/front-alt.svg"
            }
        },
        frontAlt2: {
            height: math.unit(2, "meter"),
            weight: math.unit(90, "kg"),
            name: "Front (alt 2)",
            image: {
                source: "./media/characters/gael'rathus/front-alt-2.svg"
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(9, "feet"),
            default: true
        },
        {
            name: "Large",
            height: math.unit(25, "feet")
        },
        {
            name: "Macro",
            height: math.unit(0.25, "miles")
        },
        {
            name: "Megamacro",
            height: math.unit(10, "miles")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sosha", species: ["cougar"], tags: ["feral"] },
    {
        side: {
            height: math.unit(2, "meter"),
            weight: math.unit(140, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/sosha/side.svg",
                bottom: 0.042
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(12, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "RuNNoLa", species: ["wolf"], tags: ["feral"] },
    {
        side: {
            height: math.unit(5 + 5 / 12, "feet"),
            weight: math.unit(170, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/runnola/side.svg",
                extra: 741 / 448,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Small",
            height: math.unit(3, "feet")
        },
        {
            name: "Normal",
            height: math.unit(5 + 5 / 12, "feet"),
            default: true
        },
        {
            name: "Big",
            height: math.unit(10, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kurribird", species: ["avian"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meter"),
            weight: math.unit(50, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/kurribird/front.svg",
                bottom: 0.015
            }
        },
        frontAlt: {
            height: math.unit(1.5, "meter"),
            weight: math.unit(50, "kg"),
            name: "Front (Alt)",
            image: {
                source: "./media/characters/kurribird/front-alt.svg",
                extra: 1.45
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7, "feet")
        },
        {
            name: "Big",
            height: math.unit(12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(1500, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(2, "miles")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Elbial", species: ["goat", "lion", "demon", "deity"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meter"),
            weight: math.unit(80, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/elbial/front.svg",
                extra: 1643 / 1556,
                bottom: 60.2 / 1696
            }
        },
        side: {
            height: math.unit(2, "meter"),
            weight: math.unit(80, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/elbial/side.svg",
                extra: 1630 / 1565,
                bottom: 71.5 / 1697
            }
        },
        back: {
            height: math.unit(2, "meter"),
            weight: math.unit(80, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/elbial/back.svg",
                extra: 1668 / 1595,
                bottom: 5.6 / 1672
            }
        },
        frontDressed: {
            height: math.unit(2, "meter"),
            weight: math.unit(80, "kg"),
            name: "Front (Dressed)",
            image: {
                source: "./media/characters/elbial/front-dressed.svg",
                extra: 1653 / 1584,
                bottom: 57 / 1708
            }
        },
        genitals: {
            height: math.unit(2 / 3.367, "meter"),
            name: "Genitals",
            image: {
                source: "./media/characters/elbial/genitals.svg"
            }
        },
    },
    [
        {
            name: "Large",
            height: math.unit(100, "feet")
        },
        {
            name: "Macro",
            height: math.unit(500, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(10, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(25000, "miles")
        },
        {
            name: "Full-Size",
            height: math.unit(8000000, "gigaparsecs")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Noah", species: ["harpy-eagle"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meter"),
            weight: math.unit(60, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/noah/front.svg"
            }
        },
        talons: {
            height: math.unit(0.315, "meter"),
            name: "Talons",
            image: {
                source: "./media/characters/noah/talons.svg"
            }
        }
    },
    [
        {
            name: "Large",
            height: math.unit(50, "feet")
        },
        {
            name: "Macro",
            height: math.unit(750, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(50, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(100000, "miles")
        },
        {
            name: "Full-Size",
            height: math.unit(3000000000, "miles")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Natalya", species: ["wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meter"),
            weight: math.unit(80, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/natalya/front.svg"
            }
        },
        back: {
            height: math.unit(2, "meter"),
            weight: math.unit(80, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/natalya/back.svg"
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(150, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(5, "miles")
        },
        {
            name: "Full-Size",
            height: math.unit(600, "kiloparsecs")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Erestrebah", species: ["avian", "deer"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meter"),
            weight: math.unit(50, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/erestrebah/front.svg",
                extra: 208 / 193,
                bottom: 0.055
            }
        },
        back: {
            height: math.unit(2, "meter"),
            weight: math.unit(50, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/erestrebah/back.svg",
                extra: 1.3
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(10, "feet")
        },
        {
            name: "Large",
            height: math.unit(50, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(300, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(750, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(3, "miles")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Jennifer", species: ["rat", "demon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meter"),
            weight: math.unit(80, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/jennifer/front.svg",
                bottom: 0.11,
                extra: 1.16
            }
        },
        frontAlt: {
            height: math.unit(2, "meter"),
            weight: math.unit(80, "kg"),
            name: "Front (Alt)",
            image: {
                source: "./media/characters/jennifer/front-alt.svg"
            }
        }
    },
    [
        {
            name: "Canon Height",
            height: math.unit(120, "feet"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(300, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(20000, "feet")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kalista", species: ["phoenix"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meter"),
            weight: math.unit(50, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/kalista/front.svg",
                extra: 1947 / 1700,
                bottom: 76.6 / 1412.98
            }
        },
        back: {
            height: math.unit(2, "meter"),
            weight: math.unit(50, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/kalista/back.svg",
                extra: 1366 / 1156,
                bottom: 33.9 / 1362.78
            }
        }
    },
    [
        {
            name: "Uncomfortably Small",
            height: math.unit(10, "feet")
        },
        {
            name: "Small",
            height: math.unit(30, "feet")
        },
        {
            name: "Macro",
            height: math.unit(100, "feet"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(2000, "feet")
        },
        {
            name: "True Form",
            height: math.unit(8924, "miles")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "GiantGrowingVixen", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meter"),
            weight: math.unit(120, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/ggv/front.svg"
            }
        },
        side: {
            height: math.unit(2, "meter"),
            weight: math.unit(120, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/ggv/side.svg"
            }
        }
    },
    [
        {
            name: "Extremely Puny",
            height: math.unit(9 + 5 / 12, "feet")
        },
        {
            name: "Horribly Small",
            height: math.unit(47.7, "miles"),
            default: true
        },
        {
            name: "Reasonably Sized",
            height: math.unit(25000, "parsecs")
        },
        {
            name: "Slightly Uncompressed",
            height: math.unit(7.77e31, "parsecs")
        },
        {
            name: "Omniversal",
            height: math.unit(1e300, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Napalm", species: ["aeromorph"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meter"),
            weight: math.unit(75, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/napalm/front.svg"
            }
        },
        back: {
            height: math.unit(2, "meter"),
            weight: math.unit(75, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/napalm/back.svg"
            }
        }
    },
    [
        {
            name: "Standard",
            height: math.unit(55, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Asana", species: ["android", "jackal"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 5 / 6, "feet"),
            weight: math.unit(325, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/asana/front.svg",
                extra: 1133 / 1060,
                bottom: 15.2/1148.6
            }
        },
        back: {
            height: math.unit(7 + 5 / 6, "feet"),
            weight: math.unit(325, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/asana/back.svg",
                extra: 1114 / 1043,
                bottom: 5/1120
            }
        },
        dressedDark: {
            height: math.unit(7 + 5 / 6, "feet"),
            weight: math.unit(325, "lb"),
            name: "Dressed (Dark)",
            image: {
                source: "./media/characters/asana/dressed-dark.svg",
                extra: 1133 / 1060,
                bottom: 15.2/1148.6
            }
        },
        dressedLight: {
            height: math.unit(7 + 5 / 6, "feet"),
            weight: math.unit(325, "lb"),
            name: "Dressed (Light)",
            image: {
                source: "./media/characters/asana/dressed-light.svg",
                extra: 1133 / 1060,
                bottom: 15.2/1148.6
            }
        },
    },
    [
        {
            name: "Standard",
            height: math.unit(7 + 5 / 6, "feet"),
            default: true
        },
        {
            name: "Large",
            height: math.unit(10, "meters")
        },
        {
            name: "Macro",
            height: math.unit(2500, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(5e6, "meters")
        },
        {
            name: "Examacro",
            height: math.unit(5e12, "lightyears")
        },
        {
            name: "Max Size",
            height: math.unit(1e31, "lightyears")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ebony", species: ["hoshiko-beast"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meter"),
            weight: math.unit(60, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/ebony/front.svg",
                bottom: 0.03,
                extra: 1045 / 810 + 0.03
            }
        },
        side: {
            height: math.unit(2, "meter"),
            weight: math.unit(60, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/ebony/side.svg",
                bottom: 0.03,
                extra: 1045 / 810 + 0.03
            }
        },
        back: {
            height: math.unit(2, "meter"),
            weight: math.unit(60, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/ebony/back.svg",
                bottom: 0.01,
                extra: 1045 / 810 + 0.01
            }
        },
    },
    [
        // TODO check why I did this lol
        {
            name: "Standard",
            height: math.unit(9 / 8 * (7 + 5 / 12), "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(200, "feet")
        },
        {
            name: "Gigamacro",
            height: math.unit(13000, "km")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mountain", species: ["snow-jugani"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(175, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mountain/front.svg",
                extra: 972/955,
                bottom: 64/1036.6
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(175, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/mountain/back.svg",
                extra: 970/950,
                bottom: 28.25/999
            }
        },
    },
    [
        {
            name: "Large",
            height: math.unit(20, "meters")
        },
        {
            name: "Macro",
            height: math.unit(300, "meters")
        },
        {
            name: "Gigamacro",
            height: math.unit(10000, "km"),
            default: true
        },
        {
            name: "Examacro",
            height: math.unit(10e9, "lightyears")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rick", species: ["lion"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(500, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/rick/front.svg"
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(8, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(5, "km")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ona", species: ["raven"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ona/front.svg"
            }
        },
        frontAlt: {
            height: math.unit(8, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front (Alt)",
            image: {
                source: "./media/characters/ona/front-alt.svg"
            }
        },
        back: {
            height: math.unit(8, "feet"),
            weight: math.unit(120, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/ona/back.svg"
            }
        },
        foot: {
            height: math.unit(1.1, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/ona/foot.svg"
            }
        }
    },
    [
        {
            name: "Megamacro",
            height: math.unit(70, "km"),
            default: true
        },
        {
            name: "Gigamacro",
            height: math.unit(681818, "miles")
        },
        {
            name: "Examacro",
            height: math.unit(3800000, "lightyears")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mech", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(12, "feet"),
            weight: math.unit(3000, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mech/front.svg",
                bottom: 0.025,
            }
        },
        back: {
            height: math.unit(12, "feet"),
            weight: math.unit(3000, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/mech/back.svg",
                bottom: 0.03,
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(300, "feet"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(1500, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Gregory", species: ["goat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.3, "meter"),
            weight: math.unit(30, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/gregory/front.svg",
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(1.3, "meter"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(20, "meter")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Elory", species: ["goat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2.8, "meter"),
            weight: math.unit(200, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/elory/front.svg",
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(2.8, "meter"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(38, "meter")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Angelpatamon", species: ["patamon", "deity"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(470, "feet"),
            weight: math.unit(924, "tons"),
            name: "Front",
            image: {
                source: "./media/characters/angelpatamon/front.svg",
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(470, "feet"),
            default: true
        },
        {
            name: "Deity Size I",
            height: math.unit(28651.2, "km")
        },
        {
            name: "Deity Size II",
            height: math.unit(171907.2, "km")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Cryae", species: ["dragon"], tags: ["feral"] },
    {
        side: {
            height: math.unit(7.2, "meter"),
            weight: math.unit(8.2, "tons"),
            name: "Side",
            image: {
                source: "./media/characters/cryae/side.svg",
                extra: 3500 / 1500
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(7.2, "meter"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Xera", species: ["jugani"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(175, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/xera/front.svg",
                extra: 2377 / 1972,
                bottom: 75.5/2452
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(175, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/xera/side.svg",
                extra: 2345/2019,
                bottom: 39.7/2384
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(175, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/xera/back.svg",
                extra: 2095/1984,
                bottom: 67/2166
            }
        },
    },
    [
        {
            name: "Small",
            height: math.unit(10, "feet")
        },
        {
            name: "Macro",
            height: math.unit(500, "meters"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(10, "km")
        },
        {
            name: "Gigamacro",
            height: math.unit(25000, "km")
        },
        {
            name: "Teramacro",
            height: math.unit(3e6, "km")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Nebula", species: ["dragon", "wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(175, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/nebula/front.svg",
                extra: 2566/2362,
                bottom: 81/2644
            }
        }
    },
    [
        {
            name: "Small",
            height: math.unit(4.5, "meters")
        },
        {
            name: "Macro",
            height: math.unit(1500, "meters"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(150, "km")
        },
        {
            name: "Gigamacro",
            height: math.unit(27000, "km")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Abysgar", species: ["raptor"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(225, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/abysgar/front.svg"
            }
        }
    },
    [
        {
            name: "Small",
            height: math.unit(4.5, "meters")
        },
        {
            name: "Macro",
            height: math.unit(1250, "meters"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(125, "km")
        },
        {
            name: "Gigamacro",
            height: math.unit(26000, "km")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Yakuz", species: ["wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/yakuz/front.svg"
            }
        }
    },
    [
        {
            name: "Small",
            height: math.unit(5, "meters")
        },
        {
            name: "Macro",
            height: math.unit(1500, "meters"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(200, "km")
        },
        {
            name: "Gigamacro",
            height: math.unit(100000, "km")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mirova", species: ["luxray", "shark"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(175, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mirova/front.svg",
                extra: 3334/3071,
                bottom: 42/3375.6
            }
        }
    },
    [
        {
            name: "Small",
            height: math.unit(5, "meters")
        },
        {
            name: "Macro",
            height: math.unit(900, "meters"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(135, "km")
        },
        {
            name: "Gigamacro",
            height: math.unit(20000, "km")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Asana (Mech)", species: ["zoid"], tags: ["feral"] },
    {
        side: {
            height: math.unit(28.35, "feet"),
            weight: math.unit(99.75, "tons"),
            name: "Side",
            image: {
                source: "./media/characters/asana-mech/side.svg",
                extra: 923/699,
                bottom: 50/975
            }
        },
        chaingun: {
            height: math.unit(7, "feet"),
            weight: math.unit(2400, "lb"),
            name: "Chaingun",
            image: {
                source: "./media/characters/asana-mech/chaingun.svg"
            }
        },
        laser: {
            height: math.unit(7.12, "feet"),
            weight: math.unit(2000, "lb"),
            name: "Laser",
            image: {
                source: "./media/characters/asana-mech/laser.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(28.35, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(2500, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(25, "miles")
        },
        {
            name: "Examacro",
            height: math.unit(6e8, "lightyears")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Asche", species: ["fox", "dragon", "lion"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5, "meters"),
            weight: math.unit(1000, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/asche/front.svg",
                extra: 1258/1190,
                bottom: 47/1305
            }
        },
        frontUnderwear: {
            height: math.unit(5, "meters"),
            weight: math.unit(1000, "kg"),
            name: "Front (Underwear)",
            image: {
                source: "./media/characters/asche/front-underwear.svg",
                extra: 1258/1190,
                bottom: 47/1305
            }
        },
        frontDressed: {
            height: math.unit(5, "meters"),
            weight: math.unit(1000, "kg"),
            name: "Front (Dressed)",
            image: {
                source: "./media/characters/asche/front-dressed.svg",
                extra: 1258/1190,
                bottom: 47/1305
            }
        },
        frontArmor: {
            height: math.unit(5, "meters"),
            weight: math.unit(1000, "kg"),
            name: "Front (Armored)",
            image: {
                source: "./media/characters/asche/front-armored.svg",
                extra: 1374 / 1308,
                bottom: 23/1397
            }
        },
        mp724: {
            height: math.unit(0.96, "meters"),
            weight: math.unit(38, "kg"),
            name: "H&K MP724",
            image: {
                source: "./media/characters/asche/h&k-mp724.svg"
            }
        },
        side: {
            height: math.unit(5, "meters"),
            weight: math.unit(1000, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/asche/side.svg",
                extra: 1717 / 1609,
                bottom: 0.005
            }
        },
        back: {
            height: math.unit(5, "meters"),
            weight: math.unit(1000, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/asche/back.svg",
                extra: 1570 / 1501
            }
        },
    },
    [
        {
            name: "DEFCON 5",
            height: math.unit(5, "meters")
        },
        {
            name: "DEFCON 4",
            height: math.unit(500, "meters"),
            default: true
        },
        {
            name: "DEFCON 3",
            height: math.unit(5, "km")
        },
        {
            name: "DEFCON 2",
            height: math.unit(500, "km")
        },
        {
            name: "DEFCON 1",
            height: math.unit(500000, "km")
        },
        {
            name: "DEFCON 0",
            height: math.unit(3, "gigaparsecs")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Gale", species: ["monster"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meters"),
            weight: math.unit(76, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/gale/front.svg"
            }
        },
        frontAlt1: {
            height: math.unit(2, "meters"),
            weight: math.unit(76, "kg"),
            name: "Front (Alt 1)",
            image: {
                source: "./media/characters/gale/front-alt-1.svg"
            }
        },
        frontAlt2: {
            height: math.unit(2, "meters"),
            weight: math.unit(76, "kg"),
            name: "Front (Alt 2)",
            image: {
                source: "./media/characters/gale/front-alt-2.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7, "feet")
        },
        {
            name: "Macro",
            height: math.unit(150, "feet"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(300, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Draylen", species: ["coyote"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meters"),
            weight: math.unit(76, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/draylen/front.svg"
            }
        }
    },
    [
        {
            name: "Macro",
            height: math.unit(150, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Chez", species: ["foo-dog"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 9 / 12, "feet"),
            weight: math.unit(379, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/chez/front.svg"
            }
        },
        side: {
            height: math.unit(7 + 9 / 12, "feet"),
            weight: math.unit(379, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/chez/side.svg"
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 9 / 12, "feet"),
            default: true
        },
        {
            name: "God King",
            height: math.unit(9750000, "meters")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kaylum", species: ["dragon", "shark"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(275, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/kaylum/front.svg",
                bottom: 0.01,
                extra: 1166 / 1031
            }
        },
        frontWingless: {
            height: math.unit(6, "feet"),
            weight: math.unit(275, "lbs"),
            name: "Front (Wingless)",
            image: {
                source: "./media/characters/kaylum/front-wingless.svg",
                bottom: 0.01,
                extra: 1117 / 1031
            }
        }

    },
    [
        {
            name: "Normal",
            height: math.unit(3.05, "meters")
        },
        {
            name: "Master",
            height: math.unit(5.5, "meters")
        },
        {
            name: "Rampage",
            height: math.unit(19, "meters")
        },
        {
            name: "Macro Lite",
            height: math.unit(37, "meters")
        },
        {
            name: "Hyper Predator",
            height: math.unit(61, "meters")
        },
        {
            name: "Macro",
            height: math.unit(138, "meters"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Geta", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/geta/front.svg"
            }
        }

    },
    [
        {
            name: "Micro",
            height: math.unit(3, "inches"),
            default: true
        },
        {
            name: "Normal",
            height: math.unit(5 + 5 / 12, "feet")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Tyrnn", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(300, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/tyrnn/front.svg"
            }
        }

    },
    [
        {
            name: "Main Height",
            height: math.unit(355, "feet"),
            default: true
        },
        {
            name: "Fave. Height",
            height: math.unit(2400, "feet")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Apple", species: ["elephant"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(300, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/appledectomy/front.svg"
            }
        }

    },
    [
        {
            name: "Macro",
            height: math.unit(2500, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(50, "miles"),
            default: true
        },
        {
            name: "Gigamacro",
            height: math.unit(5000, "miles")
        },
        {
            name: "Teramacro",
            height: math.unit(250000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Vulpes", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(200, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/vulpes/front.svg",
                extra: 573 / 543,
                bottom: 0.033
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(200, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/vulpes/side.svg",
                extra: 573 / 543,
                bottom: 0.01
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(200, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/vulpes/back.svg",
                extra: 573 / 543,
            }
        },
        feet: {
            height: math.unit(1.276, "feet"),
            name: "Feet",
            image: {
                source: "./media/characters/vulpes/feet.svg"
            }
        },
        maw: {
            height: math.unit(1.18, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/vulpes/maw.svg"
            }
        },

    },
    [
        {
            name: "Micro",
            height: math.unit(2, "inches")
        },
        {
            name: "Normal",
            height: math.unit(6.3, "feet")
        },
        {
            name: "Macro",
            height: math.unit(850, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(7500, "feet"),
            default: true
        },
        {
            name: "Gigamacro",
            height: math.unit(570000, "miles")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rain Fallen", species: ["wolf", "demon"], tags: ["anthro", "feral"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(210, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/rain-fallen/front.svg"
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(210, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/rain-fallen/side.svg"
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(210, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/rain-fallen/back.svg"
            }
        },
        feral: {
            height: math.unit(9, "feet"),
            weight: math.unit(700, "lbs"),
            name: "Feral",
            image: {
                source: "./media/characters/rain-fallen/feral.svg"
            }
        },

    },
    [
        {
            name: "Normal",
            height: math.unit(5, "meter")
        },
        {
            name: "Macro",
            height: math.unit(150, "meter"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(278e6, "meter")
        },
        {
            name: "Gigamacro",
            height: math.unit(2e9, "meter")
        },
        {
            name: "Teramacro",
            height: math.unit(8e12, "meter")
        },
        {
            name: "Devourer",
            height: math.unit(14, "zettameters")
        },
        {
            name: "Scarlet King",
            height: math.unit(18, "yottameters")
        },
        {
            name: "Void",
            height: math.unit(6.66e66, "yottameters")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Zaakira", species: ["wolf"], tags: ["anthro"] },
    {
        standing: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Standing",
            image: {
                source: "./media/characters/zaakira/standing.svg"
            }
        },
        laying: {
            height: math.unit(3, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Laying",
            image: {
                source: "./media/characters/zaakira/laying.svg"
            }
        },

    },
    [
        {
            name: "Normal",
            height: math.unit(12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(279, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sigvald", species: ["dragon"], tags: ["anthro"] },
    {
        femSfw: {
            height: math.unit(8, "feet"),
            weight: math.unit(350, "lb"),
            name: "Fem",
            image: {
                source: "./media/characters/sigvald/fem-sfw.svg",
                extra: 182/164,
                bottom: 8.7/190.5
            }
        },
        femNsfw: {
            height: math.unit(8, "feet"),
            weight: math.unit(350, "lb"),
            name: "Fem (NSFW)",
            image: {
                source: "./media/characters/sigvald/fem-nsfw.svg",
                extra: 182/164,
                bottom: 8.7/190.5
            }
        },
        maleNsfw: {
            height: math.unit(8, "feet"),
            weight: math.unit(350, "lb"),
            name: "Male (NSFW)",
            image: {
                source: "./media/characters/sigvald/male-nsfw.svg",
                extra: 182/164,
                bottom: 8.7/190.5
            }
        },
        hermNsfw: {
            height: math.unit(8, "feet"),
            weight: math.unit(350, "lb"),
            name: "Herm (NSFW)",
            image: {
                source: "./media/characters/sigvald/herm-nsfw.svg",
                extra: 182/164,
                bottom: 8.7/190.5
            }
        },
        dick: {
            height: math.unit(2.36, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/sigvald/dick.svg"
            }
        },
        eye: {
            height: math.unit(0.31, "feet"),
            name: "Eye",
            image: {
                source: "./media/characters/sigvald/eye.svg"
            }
        },
        mouth: {
            height: math.unit(0.92, "feet"),
            name: "Mouth",
            image: {
                source: "./media/characters/sigvald/mouth.svg"
            }
        },
        paws: {
            height: math.unit(2.2, "feet"),
            name: "Paws",
            image: {
                source: "./media/characters/sigvald/paws.svg"
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(8, "feet")
        },
        {
            name: "Large",
            height: math.unit(12, "feet")
        },
        {
            name: "Larger",
            height: math.unit(20, "feet")
        },
        {
            name: "Macro",
            height: math.unit(150, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(200, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Scott", species: ["fox"], tags: ["taur"] },
    {
        side: {
            height: math.unit(12, "feet"),
            weight: math.unit(2000, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/scott/side.svg",
                extra: 754 / 724,
                bottom: 0.069
            }
        },
        upright: {
            height: math.unit(12, "feet"),
            weight: math.unit(2000, "kg"),
            name: "Upright",
            image: {
                source: "./media/characters/scott/upright.svg",
                extra: 3881 / 3722,
                bottom: 0.05
            }
        },

    },
    [
        {
            name: "Normal",
            height: math.unit(12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Tobias", species: ["dragon"], tags: ["feral"] },
    {
        side: {
            height: math.unit(8, "meters"),
            weight: math.unit(84755, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/tobias/side.svg",
                extra: 1474 / 1096,
                bottom: 38.9 / 1513.1235
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kieran", species: ["wolf"], tags: ["taur"] },
    {
        front: {
            height: math.unit(5.5, "feet"),
            weight: math.unit(400, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/kieran/front.svg",
                extra: 2694 / 2364,
                bottom: 217 / 2908
            }
        },
        side: {
            height: math.unit(5.5, "feet"),
            weight: math.unit(400, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/kieran/side.svg",
                extra: 875 / 777,
                bottom: 84.6 / 959
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5.5, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sanya", species: ["eagle"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(2, "meters"),
            weight: math.unit(70, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/sanya/side.svg",
                bottom: 0.02,
                extra: 1.02
            }
        },
    },
    [
        {
            name: "Small",
            height: math.unit(2, "meters")
        },
        {
            name: "Normal",
            height: math.unit(3, "meters")
        },
        {
            name: "Macro",
            height: math.unit(16, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Miranda", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meters"),
            weight: math.unit(120, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/miranda/front.svg",
                extra: 195/185,
                bottom: 10.9/206.5
            }
        },
        back: {
            height: math.unit(2, "meters"),
            weight: math.unit(120, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/miranda/back.svg",
                extra: 201/193,
                bottom: 2.3/203.7
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(10, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "James", species: ["deer"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(2, "meters"),
            weight: math.unit(100, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/james/front.svg",
                extra: 10 / 8.5
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8.5, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Heather", species: ["cow"], tags: ["taur"] },
    {
        side: {
            height: math.unit(9.5, "feet"),
            weight: math.unit(2500, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/heather/side.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(9.5, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Lukas", species: ["dog"], tags: ["feral"] },
    {
        side: {
            height: math.unit(6.5, "feet"),
            weight: math.unit(400, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/lukas/side.svg",
                extra: 7.25 / 6.5
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6.5, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Louise", species: ["crocodile"], tags: ["feral"] },
    {
        side: {
            height: math.unit(5, "feet"),
            weight: math.unit(3000, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/louise/side.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ramona", species: ["borzoi"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/ramona/side.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5.3, "meters"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(20, "stories")
        },
        {
            name: "Macro+",
            height: math.unit(50, "stories")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Deerpuff", species: ["deer"], tags: ["anthro"] },
    {
        standing: {
            height: math.unit(5.75, "feet"),
            weight: math.unit(160, "lbs"),
            name: "Standing",
            image: {
                source: "./media/characters/deerpuff/standing.svg",
                extra: 682 / 624
            }
        },
        sitting: {
            height: math.unit(5.75 / 1.79, "feet"),
            weight: math.unit(160, "lbs"),
            name: "Sitting",
            image: {
                source: "./media/characters/deerpuff/sitting.svg",
                bottom: 44 / 400,
                extra: 1
            }
        },
        taurLaying: {
            height: math.unit(6, "feet"),
            weight: math.unit(400, "lbs"),
            name: "Taur (Laying)",
            image: {
                source: "./media/characters/deerpuff/taur-laying.svg"
            }
        },
    },
    [
        {
            name: "Puffball",
            height: math.unit(6, "inches")
        },
        {
            name: "Normalpuff",
            height: math.unit(5.75, "feet")
        },
        {
            name: "Macropuff",
            height: math.unit(1500, "feet"),
            default: true
        },
        {
            name: "Megapuff",
            height: math.unit(500, "miles")
        },
        {
            name: "Gigapuff",
            height: math.unit(250000, "miles")
        },
        {
            name: "Omegapuff",
            height: math.unit(1000, "lightyears")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Vivian", species: ["wolf"], tags: ["anthro"] },
    {
        stomping: {
            height: math.unit(6, "feet"),
            weight: math.unit(170, "lbs"),
            name: "Stomping",
            image: {
                source: "./media/characters/vivian/stomping.svg"
            }
        },
        sitting: {
            height: math.unit(6 / 1.75, "feet"),
            weight: math.unit(170, "lbs"),
            name: "Sitting",
            image: {
                source: "./media/characters/vivian/sitting.svg",
                bottom: 1 / 6.4,
                extra: 1,
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(10, "stories")
        },
        {
            name: "Macro+",
            height: math.unit(30, "stories")
        },
        {
            name: "Megamacro",
            height: math.unit(10, "miles")
        },
        {
            name: "Megamacro+",
            height: math.unit(2750000, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Prince", species: ["deer"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(160, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/prince/front.svg",
                extra: 3400 / 3000
            }
        },
        jumping: {
            height: math.unit(6, "feet"),
            weight: math.unit(160, "lbs"),
            name: "Jumping",
            image: {
                source: "./media/characters/prince/jump.svg",
                extra: 2555 / 2134
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7.75, "feet"),
            default: true
        },
        {
            name: "Not cute",
            height: math.unit(17, "feet")
        },
        {
            name: "I said NOT",
            height: math.unit(91, "feet")
        },
        {
            name: "Please stop",
            height: math.unit(560, "feet")
        },
        {
            name: "What have you done",
            height: math.unit(2200, "feet")
        },
        {
            name: "Deer God",
            height: math.unit(3.6, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Psymon", species: ["horned-bush-viper", "cobra"], tags: ["anthro", "feral"] },
    {
        standing: {
            height: math.unit(6, "feet"),
            weight: math.unit(300, "lbs"),
            name: "Standing",
            image: {
                source: "./media/characters/psymon/standing.svg",
                extra: 1888 / 1810,
                bottom: 0.05
            }
        },
        slithering: {
            height: math.unit(6, "feet"),
            weight: math.unit(300, "lbs"),
            name: "Slithering",
            image: {
                source: "./media/characters/psymon/slithering.svg",
                extra: 1330 / 1224
            }
        },
        slitheringAlt: {
            height: math.unit(6, "feet"),
            weight: math.unit(300, "lbs"),
            name: "Slithering (Alt)",
            image: {
                source: "./media/characters/psymon/slithering-alt.svg",
                extra: 1330 / 1224
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(11.25, "feet"),
            default: true
        },
        {
            name: "Large",
            height: math.unit(27, "feet")
        },
        {
            name: "Giant",
            height: math.unit(87, "feet")
        },
        {
            name: "Macro",
            height: math.unit(365, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(3, "miles")
        },
        {
            name: "World Serpent",
            height: math.unit(8000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Daimos", species: ["veilhound"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/daimos/front.svg",
                extra: 4160 / 3897,
                bottom: 0.021
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(8, "feet"),
            default: true
        },
        {
            name: "Big Dog",
            height: math.unit(22, "feet")
        },
        {
            name: "Macro",
            height: math.unit(127, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(3600, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Blake", species: ["raptor"], tags: ["feral"] },
    {
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/blake/side.svg",
                extra: 1212 / 1120,
                bottom: 0.05
            }
        },
        crouched: {
            height: math.unit(6 * 0.57, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Crouched",
            image: {
                source: "./media/characters/blake/crouched.svg",
                extra: 840 / 587,
                bottom: 0.04
            }
        },
        bent: {
            height: math.unit(6 * 0.75, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Bent",
            image: {
                source: "./media/characters/blake/bent.svg",
                extra: 592 / 544,
                bottom: 0.035
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8 + 1 / 6, "feet"),
            default: true
        },
        {
            name: "Big Backside",
            height: math.unit(37, "feet")
        },
        {
            name: "Subway Shredder",
            height: math.unit(72, "feet")
        },
        {
            name: "City Carver",
            height: math.unit(1675, "feet")
        },
        {
            name: "Tectonic Tweaker",
            height: math.unit(2300, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Guisetto", species: ["beetle", "moth"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/guisetto/front.svg",
                extra: 856 / 817,
                bottom: 0.06
            }
        },
        airborne: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Airborne",
            image: {
                source: "./media/characters/guisetto/airborne.svg",
                extra: 584 / 525
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(10 + 11 / 12, "feet"),
            default: true
        },
        {
            name: "Large",
            height: math.unit(35, "feet")
        },
        {
            name: "Macro",
            height: math.unit(475, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Luxor", species: ["moth"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/luxor/front.svg",
                extra: 2940 / 2152
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/luxor/back.svg",
                extra: 1083 / 960
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 5 / 6, "feet"),
            default: true
        },
        {
            name: "Lamp",
            height: math.unit(50, "feet")
        },
        {
            name: "Lämp",
            height: math.unit(300, "feet")
        },
        {
            name: "The sun is a lamp",
            height: math.unit(250000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Huoyan", species: ["eastern-dragon"], tags: ["feral"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(50, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/huoyan/front.svg"
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/huoyan/side.svg"
            }
        },
    },
    [
        {
            name: "Chef",
            height: math.unit(9, "feet")
        },
        {
            name: "Normal",
            height: math.unit(65, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(780, "feet")
        },
        {
            name: "Flaming Mountain",
            height: math.unit(4.8, "miles")
        },
        {
            name: "Celestial",
            height: math.unit(765000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Tails", species: ["coyote"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 3 / 4, "feet"),
            weight: math.unit(120, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/tails/front.svg"
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 3 / 4, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rainy", species: ["jaguar"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(4, "feet"),
            weight: math.unit(50, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/rainy/front.svg"
            }
        }
    },
    [
        {
            name: "Macro",
            height: math.unit(800, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rainier", species: ["snow-leopard"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/rainier/front.svg"
            }
        }
    },
    [
        {
            name: "Micro",
            height: math.unit(2, "mm"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Andy", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/andy/front.svg"
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(8, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(1000, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(5, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(5000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Cimmaron", species: ["horse"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(210, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/cimmaron/front-sfw.svg",
                extra: 701 / 676,
                bottom: 0.046
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(210, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/cimmaron/back-sfw.svg",
                extra: 701 / 676,
                bottom: 0.046
            }
        },
        frontNsfw: {
            height: math.unit(6, "feet"),
            weight: math.unit(210, "lbs"),
            name: "Front (NSFW)",
            image: {
                source: "./media/characters/cimmaron/front-nsfw.svg",
                extra: 701 / 676,
                bottom: 0.046
            }
        },
        backNsfw: {
            height: math.unit(6, "feet"),
            weight: math.unit(210, "lbs"),
            name: "Back (NSFW)",
            image: {
                source: "./media/characters/cimmaron/back-nsfw.svg",
                extra: 701 / 676,
                bottom: 0.046
            }
        },
        dick: {
            height: math.unit(1.714, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/cimmaron/dick.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6, "feet"),
            default: true
        },
        {
            name: "Macro Mayor",
            height: math.unit(350, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Akari Kaen", species: ["sergal"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(200, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/akari/front.svg",
                extra: 962 / 901,
                bottom: 0.04
            }
        }
    },
    [
        {
            name: "Micro",
            height: math.unit(5, "inches"),
            default: true
        },
        {
            name: "Normal",
            height: math.unit(7, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Cynosura", species: ["gryphon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(140, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/cynosura/front.svg",
                extra: 896 / 847
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(140, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/cynosura/back.svg",
                extra: 1365 / 1250
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(4, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5.75, "feet"),
            default: true
        },
        {
            name: "Tall",
            height: math.unit(10, "feet")
        },
        {
            name: "Big",
            height: math.unit(20, "feet")
        },
        {
            name: "Macro",
            height: math.unit(50, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Gin", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(170, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/gin/front.svg",
                extra: 1.053,
                bottom: 0.025
            }
        },
        foot: {
            height: math.unit(6 / 4.25, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/gin/foot.svg"
            }
        },
        sole: {
            height: math.unit(6 / 4.40, "feet"),
            name: "Sole",
            image: {
                source: "./media/characters/gin/sole.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(13 + 2 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(1500, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(200, "miles"),
            default: true
        },
        {
            name: "Gigamacro",
            height: math.unit(500, "megameters")
        },
        {
            name: "Teramacro",
            height: math.unit(15, "lightyears")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Guy", species: ["bat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 1 / 6, "feet"),
            weight: math.unit(178, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/guy/front.svg"
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 1 / 6, "feet"),
            default: true
        },
        {
            name: "Large",
            height: math.unit(25 + 7 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(60 + 9 / 12, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(246, "feet")
        },
        {
            name: "Macro++",
            height: math.unit(878, "feet")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Tiberius", species: ["jackal", "robot"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(9, "feet"),
            weight: math.unit(800, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/tiberius/front.svg",
                extra: 2295 / 2071
            }
        },
        back: {
            height: math.unit(9, "feet"),
            weight: math.unit(800, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/tiberius/back.svg",
                extra: 2373 / 2160
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(9, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Surgo", species: ["medihound"], tags: ["feral"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(600, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/surgo/front.svg",
                extra: 3591 / 2227
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(600, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/surgo/back.svg",
                extra: 3557 / 2228
            }
        },
        laying: {
            height: math.unit(6 * 0.85, "feet"),
            weight: math.unit(600, "lbs"),
            name: "Laying",
            image: {
                source: "./media/characters/surgo/laying.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Cibus", species: ["dragon"], tags: ["feral"] },
    {
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/cibus/side.svg",
                extra: 800 / 400
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Nibbles", species: ["shark", "android"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(240, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/nibbles/front.svg"
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(240, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/nibbles/side.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(9, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rikky", species: ["coyote"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(5 + 1 / 6, "feet"),
            weight: math.unit(130, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/rikky/side.svg",
                extra: 851/801
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 1 / 6, "feet")
        },
        {
            name: "Macro",
            height: math.unit(152, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(7, "miles")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Malfressa", species: ["dragon"], tags: ["anthro", "feral"] },
    {
        side: {
            height: math.unit(370, "cm"),
            weight: math.unit(350, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/malfressa/side.svg"
            }
        },
        walking: {
            height: math.unit(370, "cm"),
            weight: math.unit(350, "lbs"),
            name: "Walking",
            image: {
                source: "./media/characters/malfressa/walking.svg"
            }
        },
        feral: {
            height: math.unit(2500, "cm"),
            weight: math.unit(100000, "lbs"),
            name: "Feral",
            image: {
                source: "./media/characters/malfressa/feral.svg",
                extra: 2108 / 837,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(370, "cm")
        },
        {
            name: "Macro",
            height: math.unit(300, "meters"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Jaro", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(60, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/jaro/front.svg"
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(60, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/jaro/back.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(7, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5.5, "feet"),
            default: true
        },
        {
            name: "Minimacro",
            height: math.unit(20, "feet")
        },
        {
            name: "Macro",
            height: math.unit(200, "meters")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rogue", species: ["wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(195, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/rogue/front.svg"
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(90, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Piper", species: ["deer"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(140, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/piper/front.svg",
                extra: 3928 / 3681
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(2, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 8 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(250, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(7, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Gemini", species: ["mouse"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(220, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/gemini/front.svg"
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(220, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/gemini/back.svg"
            }
        },
        kneeling: {
            height: math.unit(6 / 1.5, "feet"),
            weight: math.unit(220, "lb"),
            name: "Kneeling",
            image: {
                source: "./media/characters/gemini/kneeling.svg",
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(300, "meters"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(6900, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Alicia", species: ["dragon", "cat", "canine"], tags: ["anthro"] },
    {
        anthro: {
            height: math.unit(2.35, "meters"),
            weight: math.unit(73, "kg"),
            name: "Anthro",
            image: {
                source: "./media/characters/alicia/anthro.svg",
                extra: 2571 / 2385,
                bottom: 75 / 2648
            }
        },
        paw: {
            height: math.unit(1.32, "feet"),
            name: "Paw",
            image: {
                source: "./media/characters/alicia/paw.svg"
            }
        },
        feral: {
            height: math.unit(1.69, "meters"),
            weight: math.unit(73, "kg"),
            name: "Feral",
            image: {
                source: "./media/characters/alicia/feral.svg",
                extra: 2123 / 1715,
                bottom: 222 / 2349
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2.35, "meters")
        },
        {
            name: "Macro",
            height: math.unit(60, "meters"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(10000, "kilometers")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Archy", species: ["snow-leopard"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(250, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/archy/front.svg"
            }
        }
    },
    [
        {
            name: "Micro",
            height: math.unit(1, "inch")
        },
        {
            name: "Shorty",
            height: math.unit(5, "feet")
        },
        {
            name: "Normal",
            height: math.unit(7, "feet")
        },
        {
            name: "Macro",
            height: math.unit(600, "meters"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(1, "mile")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Berri", species: ["rabbit"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.65, "meters"),
            weight: math.unit(74, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/berri/front.svg",
                extra: 857 / 837,
                bottom: 18 / 877
            }
        },
        bum: {
            height: math.unit(1.46, "feet"),
            name: "Bum",
            image: {
                source: "./media/characters/berri/bum.svg"
            }
        },
        mouth: {
            height: math.unit(0.44, "feet"),
            name: "Mouth",
            image: {
                source: "./media/characters/berri/mouth.svg"
            }
        },
        paw: {
            height: math.unit(0.826, "feet"),
            name: "Paw",
            image: {
                source: "./media/characters/berri/paw.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1.65, "meters")
        },
        {
            name: "Macro",
            height: math.unit(60, "m"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(9.213, "km")
        },
        {
            name: "Planet Eater",
            height: math.unit(489, "megameters")
        },
        {
            name: "Teramacro",
            height: math.unit(2471635000000, "meters")
        },
        {
            name: "Examacro",
            height: math.unit(8.0624e+26, "meters")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Lexi", species: ["fennec-fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.72, "meters"),
            weight: math.unit(68, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/lexi/front.svg"
            }
        }
    },
    [
        {
            name: "Very Smol",
            height: math.unit(10, "mm")
        },
        {
            name: "Micro",
            height: math.unit(6.8, "cm"),
            default: true
        },
        {
            name: "Normal",
            height: math.unit(1.72, "m")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Martin", species: ["azodian"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.69, "meters"),
            weight: math.unit(68, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/martin/front.svg",
                extra: 596 / 581
            }
        }
    },
    [
        {
            name: "Micro",
            height: math.unit(6.85, "cm"),
            default: true
        },
        {
            name: "Normal",
            height: math.unit(1.69, "m")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Juno", species: ["shiba-inu", "deity"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.69, "meters"),
            weight: math.unit(68, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/juno/front.svg"
            }
        }
    },
    [
        {
            name: "Micro",
            height: math.unit(7, "cm")
        },
        {
            name: "Normal",
            height: math.unit(1.89, "m")
        },
        {
            name: "Macro",
            height: math.unit(353, "meters"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Samantha", species: ["canine", "deity"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.93, "meters"),
            weight: math.unit(83, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/samantha/front.svg"
            }
        },
        frontClothed: {
            height: math.unit(1.93, "meters"),
            weight: math.unit(83, "kg"),
            name: "Front (Clothed)",
            image: {
                source: "./media/characters/samantha/front-clothed.svg"
            }
        },
        back: {
            height: math.unit(1.93, "meters"),
            weight: math.unit(83, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/samantha/back.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1.93, "m")
        },
        {
            name: "Macro",
            height: math.unit(74, "meters"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(223, "meters"),
        },
        {
            name: "Megamacro",
            height: math.unit(8381, "meters"),
        },
        {
            name: "Megamacro+",
            height: math.unit(12000, "kilometers")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Dr. Clay", species: ["canine"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.92, "meters"),
            weight: math.unit(80, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/dr-clay/front.svg"
            }
        },
        frontClothed: {
            height: math.unit(1.92, "meters"),
            weight: math.unit(80, "kg"),
            name: "Front (Clothed)",
            image: {
                source: "./media/characters/dr-clay/front-clothed.svg"
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(1.92, "m")
        },
        {
            name: "Macro",
            height: math.unit(214, "meters"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(12.237, "meters"),
        },
        {
            name: "Megamacro",
            height: math.unit(557, "megameters"),
        },
        {
            name: "Unimaginable",
            height: math.unit(120e9, "lightyears")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Wyvrn Ripsnarl", species: ["dragon", "wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meters"),
            weight: math.unit(80, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/wyvrn-ripsnarl/front.svg"
            }
        }
    },
    [
        {
            name: "Teramacro",
            height: math.unit(500000, "lightyears"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Vemus", species: ["crux"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meters"),
            weight: math.unit(150, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/vemus/front.svg",
                extra: 2384 / 2084,
                bottom: 0.0123
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(3.75, "meters"),
            default: true
        },
        {
            name: "Big",
            height: math.unit(8, "meters")
        },
        {
            name: "Macro",
            height: math.unit(100, "meters")
        },
        {
            name: "Macro+",
            height: math.unit(1500, "meters")
        },
        {
            name: "Stellar",
            height: math.unit(14e8, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Beherit", species: ["monster"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meters"),
            weight: math.unit(70, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/beherit/front.svg",
                extra: 1408 / 1242
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(6, "feet")
        },
        {
            name: "Lorg",
            height: math.unit(25, "feet"),
            default: true
        },
        {
            name: "Lorger",
            height: math.unit(75, "feet")
        },
        {
            name: "Macro",
            height: math.unit(200, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Everett", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meters"),
            weight: math.unit(150, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/everett/front.svg",
                extra: 2038 / 1737,
                bottom: 0.03
            }
        },
        paw: {
            height: math.unit(2 / 3.6, "meters"),
            name: "Paw",
            image: {
                source: "./media/characters/everett/paw.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(15, "feet"),
            default: true
        },
        {
            name: "Lorg",
            height: math.unit(70, "feet"),
            default: true
        },
        {
            name: "Lorger",
            height: math.unit(250, "feet")
        },
        {
            name: "Macro",
            height: math.unit(500, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rose Lion", species: ["lion", "mouse"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meters"),
            weight: math.unit(86, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/rose-lion/front.svg"
            }
        },
        bent: {
            height: math.unit(2 / 1.4288, "meters"),
            weight: math.unit(86, "kg"),
            name: "Bent",
            image: {
                source: "./media/characters/rose-lion/bent.svg"
            }
        }
    },
    [
        {
            name: "Mini-Micro",
            height: math.unit(1, "cm")
        },
        {
            name: "Micro",
            height: math.unit(3.5, "inches"),
            default: true
        },
        {
            name: "Normal",
            height: math.unit(6 + 1 / 6, "feet")
        },
        {
            name: "Mini-Macro",
            height: math.unit(9 + 10 / 12, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Regal", species: ["changeling"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meters"),
            weight: math.unit(350, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/regal/front.svg"
            }
        },
        back: {
            height: math.unit(2, "meters"),
            weight: math.unit(350, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/regal/back.svg"
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(350, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Opal", species: ["rabbit"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(4 + 11 / 12, "feet"),
            weight: math.unit(100, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/opal/front.svg"
            }
        },
        frontAlt: {
            height: math.unit(4 + 11 / 12, "feet"),
            weight: math.unit(100, "lbs"),
            name: "Front (Alt)",
            image: {
                source: "./media/characters/opal/front-alt.svg"
            }
        },
    },
    [
        {
            name: "Small",
            height: math.unit(4 + 11 / 12, "feet")
        },
        {
            name: "Normal",
            height: math.unit(20, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(120, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(80, "miles")
        },
        {
            name: "True Size",
            height: math.unit(100000, "lightyears")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Vector Wuff", species: ["wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(200, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/vector-wuff/front.svg"
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(2.8, "meters")
        },
        {
            name: "Macro",
            height: math.unit(450, "meters"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(15, "kilometers")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Dannik", species: ["gryphon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(256, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/dannik/front.svg"
            }
        }
    },
    [
        {
            name: "Macro",
            height: math.unit(69.57, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Azura Saharah", species: ["cheetah"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/azura-saharah/front.svg"
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/azura-saharah/back.svg"
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(100, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kennedy", species: ["dog"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(163, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/kennedy/side.svg"
            }
        }
    },
    [
        {
            name: "Standard Doggo",
            height: math.unit(5 + 4 / 12, "feet")
        },
        {
            name: "Big Doggo",
            height: math.unit(25 + 3 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Odi Lunar", species: ["golden-jackal"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(90, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/odi-lunar/front.svg"
            }
        }
    },
    [
        {
            name: "Micro",
            height: math.unit(3, "inches"),
            default: true
        },
        {
            name: "Normal",
            height: math.unit(5.5, "feet")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mandake", species: ["manectric", "tiger"], tags: ["anthro"] },
    {
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(220, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/mandake/back.svg"
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(7, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(78, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(300, "meters")
        },
        {
            name: "Macro++",
            height: math.unit(2400, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(5167, "meters")
        },
        {
            name: "Gigamacro",
            height: math.unit(41769, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Yozey", species: ["rat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/yozey/front.svg"
            }
        },
        frontAlt: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "lbs"),
            name: "Front (Alt)",
            image: {
                source: "./media/characters/yozey/front-alt.svg"
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/yozey/side.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(3, "inches"),
            default: true
        },
        {
            name: "Normal",
            height: math.unit(6, "feet")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Valeska Voss", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(103, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/valeska-voss/front.svg"
            }
        }
    },
    [
        {
            name: "Mini-Sized Sub",
            height: math.unit(3.1, "inches")
        },
        {
            name: "Mid-Sized Sub",
            height: math.unit(6.2, "inches")
        },
        {
            name: "Full-Sized Sub",
            height: math.unit(9.3, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 2 / 12, "foot"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Gene Zeta", species: ["raptor"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(160, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/gene-zeta/front.svg",
                bottom: 0.03,
                extra: 1
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(6.25, "foot"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Razinox", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(350, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/razinox/front.svg",
                extra: 1686 / 1548,
                bottom: 28.2 / 1868
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(350, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/razinox/back.svg",
                extra: 1660 / 1590,
                bottom: 15 / 1665
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(10 + 8 / 12, "foot")
        },
        {
            name: "Minimacro",
            height: math.unit(15, "foot")
        },
        {
            name: "Macro",
            height: math.unit(60, "foot"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(5, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(6000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Cobalt", species: ["cat", "weasel"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/cobalt/front.svg"
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(8 + 1 / 12, "foot")
        },
        {
            name: "Macro",
            height: math.unit(111, "foot"),
            default: true
        },
        {
            name: "Supracosmic",
            height: math.unit(1e42, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Amanda", species: ["mouse"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(140, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/amanda/front.svg"
            }
        }
    },
    [
        {
            name: "Micro",
            height: math.unit(5, "inches"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Teal", species: ["octocoon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5.59, "feet"),
            weight: math.unit(250, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/teal/front.svg"
            }
        },
        frontAlt: {
            height: math.unit(6, "feet"),
            weight: math.unit(250, "lbs"),
            name: "Front (Alt)",
            image: {
                source: "./media/characters/teal/front-alt.svg",
                bottom: 0.04,
                extra: 1
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(300, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ravin Amulet", species: ["cat", "werewolf"], tags: ["anthro"] },
    {
        frontCat: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Front (Cat)",
            image: {
                source: "./media/characters/ravin-amulet/front-cat.svg"
            }
        },
        frontCatAlt: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Front (Alt, Cat)",
            image: {
                source: "./media/characters/ravin-amulet/front-cat-alt.svg"
            }
        },
        frontWerewolf: {
            height: math.unit(6 * 1.2, "feet"),
            weight: math.unit(225, "lbs"),
            name: "Front (Werewolf)",
            image: {
                source: "./media/characters/ravin-amulet/front-werewolf.svg"
            }
        },
        backWerewolf: {
            height: math.unit(6 * 1.2, "feet"),
            weight: math.unit(225, "lbs"),
            name: "Back (Werewolf)",
            image: {
                source: "./media/characters/ravin-amulet/back-werewolf.svg"
            }
        },
    },
    [
        {
            name: "Nano",
            height: math.unit(1, "micrometer")
        },
        {
            name: "Micro",
            height: math.unit(1, "inch")
        },
        {
            name: "Normal",
            height: math.unit(6, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(60, "feet")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Fluoresce", species: ["snow-leopard"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(165, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/fluoresce/front.svg"
            }
        }
    },
    [
        {
            name: "Micro",
            height: math.unit(6, "cm")
        },
        {
            name: "Normal",
            height: math.unit(5 + 7 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(56, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(1.9, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Aurora", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(9 + 6 / 12, "feet"),
            weight: math.unit(523, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/aurora/side.svg"
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(9 + 6 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(96, "feet"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(243, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ranek", species: ["meerkat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(194, "cm"),
            weight: math.unit(90, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/ranek/front.svg"
            }
        },
        side: {
            height: math.unit(194, "cm"),
            weight: math.unit(90, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/ranek/side.svg"
            }
        },
        back: {
            height: math.unit(194, "cm"),
            weight: math.unit(90, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/ranek/back.svg"
            }
        },
        feral: {
            height: math.unit(30, "cm"),
            weight: math.unit(1.6, "lbs"),
            name: "Feral",
            image: {
                source: "./media/characters/ranek/feral.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(194, "cm"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(100, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Andrew Cooper", species: ["human"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 6 / 12, "feet"),
            weight: math.unit(153, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/andrew-cooper/front.svg"
            }
        },
    },
    [
        {
            name: "Nano",
            height: math.unit(1, "mm")
        },
        {
            name: "Micro",
            height: math.unit(2, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 6 / 12, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Akane Sato", species: ["wolf", "dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/akane-sato/front.svg",
                extra: 1219 / 1140
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/akane-sato/back.svg",
                extra: 1219 / 1170
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2.5, "meters")
        },
        {
            name: "Macro",
            height: math.unit(250, "meters"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(25, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rook", species: ["corvid"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(65, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/rook/front.svg",
                extra: 960 / 950
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(8.8, "feet")
        },
        {
            name: "Macro",
            height: math.unit(88, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(8, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Prodigy", species: ["geth"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(12 + 2 / 12, "feet"),
            weight: math.unit(808, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/prodigy/front.svg"
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(12 + 2 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(143, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(400, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Daniel", species: ["husky"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(225, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/daniel/front.svg"
            }
        },
        leaning: {
            height: math.unit(6, "feet"),
            weight: math.unit(225, "lbs"),
            name: "Leaning",
            image: {
                source: "./media/characters/daniel/leaning.svg"
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(1000, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Chiros", species: ["long-eared-bat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(88, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/chiros/front.svg",
                extra: 306 / 226
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(88, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/chiros/side.svg",
                extra: 306 / 226
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6, "cm"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Selka", species: ["snake"], tags: ["naga"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(100, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/selka/front.svg",
                extra: 947 / 887
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(5, "cm"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Verin", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(8 + 3 / 12, "feet"),
            weight: math.unit(424, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/verin/front.svg",
                extra: 1845 / 1550
            }
        },
        frontArmored: {
            height: math.unit(8 + 3 / 12, "feet"),
            weight: math.unit(424, "lbs"),
            name: "Front (Armored)",
            image: {
                source: "./media/characters/verin/front-armor.svg",
                extra: 1845 / 1550,
                bottom: 0.01
            }
        },
        back: {
            height: math.unit(8 + 3 / 12, "feet"),
            weight: math.unit(424, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/verin/back.svg",
                bottom: 0.1,
                extra: 1
            }
        },
        foot: {
            height: math.unit((8 + 3 / 12) / 4.7, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/verin/foot.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8 + 3 / 12, "feet")
        },
        {
            name: "Minimacro",
            height: math.unit(21, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(626, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sovrim Terraquian", species: ["salamander", "chameleon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2.718, "meters"),
            weight: math.unit(150, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/sovrim-terraquian/front.svg"
            }
        },
        back: {
            height: math.unit(2.718, "meters"),
            weight: math.unit(150, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/sovrim-terraquian/back.svg"
            }
        }
    },
    [
        {
            name: "Micro",
            height: math.unit(2, "inches")
        },
        {
            name: "Small",
            height: math.unit(1, "meter")
        },
        {
            name: "Normal",
            height: math.unit(Math.E, "meters"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(20, "meters")
        },
        {
            name: "Macro+",
            height: math.unit(400, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Reece Silvermane", species: ["horse"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(489, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/reece-silvermane/front.svg",
                bottom: 0.02,
                extra: 1
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(1.5, "miles"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kane", species: ["demon", "wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(78, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/kane/front.svg",
                extra: 978 / 899
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2.1, "m"),
        },
        {
            name: "Macro",
            height: math.unit(1, "km"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Tegon", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(200, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/tegon/front.svg",
                bottom: 0.01,
                extra: 1
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1, "inch")
        },
        {
            name: "Normal",
            height: math.unit(6 + 3 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(300, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(69, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Arcturax", species: ["bat", "gryphon"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(2304, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/arcturax/side.svg",
                extra: 790 / 376,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(2, "inch")
        },
        {
            name: "Normal",
            height: math.unit(6, "feet")
        },
        {
            name: "Macro",
            height: math.unit(39, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(7, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sentri", species: ["eagle"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(50, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/sentri/front.svg",
                extra: 1750 / 1570,
                bottom: 0.025
            }
        },
        frontAlt: {
            height: math.unit(6, "feet"),
            weight: math.unit(50, "lbs"),
            name: "Front (Alt)",
            image: {
                source: "./media/characters/sentri/front-alt.svg",
                extra: 1750 / 1570,
                bottom: 0.025
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(15, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(2500, "feet")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Corvin", species: ["gecko"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(130, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/corvin/front.svg",
                extra: 1803 / 1629
            }
        },
        frontShirt: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(130, "lbs"),
            name: "Front (Shirt)",
            image: {
                source: "./media/characters/corvin/front-shirt.svg",
                extra: 1803 / 1629
            }
        },
        frontPoncho: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(130, "lbs"),
            name: "Front (Poncho)",
            image: {
                source: "./media/characters/corvin/front-poncho.svg",
                extra: 1803 / 1629
            }
        },
        side: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(130, "lbs"),
            name: "Side",
            image: {
                source: "./media/characters/corvin/side.svg",
                extra: 1012 / 945
            }
        },
        back: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(130, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/corvin/back.svg",
                extra: 1803 / 1629
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(3, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 8 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(300, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(500, "miles")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Q", species: ["wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(135, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/q/front.svg",
                extra: 854 / 752,
                bottom: 0.005
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(130, "lbs"),
            name: "Back",
            image: {
                source: "./media/characters/q/back.svg",
                extra: 854 / 752
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(90, "feet"),
            default: true
        },
        {
            name: "Extra Macro",
            height: math.unit(300, "feet"),
        },
        {
            name: "BIG WALF",
            height: math.unit(750, "feet"),
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Carley", species: ["deer"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/carley/front.svg",
                extra: 3927 / 3540,
                bottom: 29.2/735
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 3 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(185, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(8, "miles"),
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Citrine", species: ["kobold"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(3, "feet"),
            weight: math.unit(28, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/citrine/front.svg"
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(3, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Aura Starwind", species: ["fox"], tags: ["anthro", "taur"] },
    {
        front: {
            height: math.unit(14, "feet"),
            weight: math.unit(1450, "kg"),
            capacity: math.unit(15, "people"),
            name: "Front",
            image: {
                source: "./media/characters/aura-starwind/front.svg",
                extra: 1455 / 1335
            }
        },
        side: {
            height: math.unit(14, "feet"),
            weight: math.unit(1450, "kg"),
            capacity: math.unit(15, "people"),
            name: "Side",
            image: {
                source: "./media/characters/aura-starwind/side.svg",
                extra: 1654 / 1497
            }
        },
        taur: {
            height: math.unit(18, "feet"),
            weight: math.unit(5500, "kg"),
            capacity: math.unit(50, "people"),
            name: "Taur",
            image: {
                source: "./media/characters/aura-starwind/taur.svg",
                extra: 1760 / 1650
            }
        },
        feral: {
            height: math.unit(46, "feet"),
            weight: math.unit(25000, "kg"),
            capacity: math.unit(120, "people"),
            name: "Feral",
            image: {
                source: "./media/characters/aura-starwind/feral.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(14, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(50, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(5000, "meters")
        },
        {
            name: "Gigamacro",
            height: math.unit(100000, "kilometers")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rivet", species: ["kobold"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2 + 7 / 12, "feet"),
            weight: math.unit(32, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/rivet/front.svg",
                extra: 1716 / 1658,
                bottom: 0.03
            }
        },
        foot: {
            height: math.unit(0.551, "feet"),
            name: "Rivet's Foot",
            image: {
                source: "./media/characters/rivet/foot.svg"
            },
            rename: true
        }
    },
    [
        {
            name: "Micro",
            height: math.unit(1.5, "inches"),
        },
        {
            name: "Normal",
            height: math.unit(2 + 7 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(85, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(2.2, "km")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Coffee", species: ["dog"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(150, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/coffee/front.svg",
                extra: 3666 / 3032,
                bottom: 0.04
            }
        },
        foot: {
            height: math.unit(1.29, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/coffee/foot.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(2, "inches"),
        },
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(800, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(25, "miles")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Chari-Gal", species: ["charizard"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(200, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/chari-gal/front.svg",
                extra: 1568 / 1385,
                bottom: 0.047
            }
        },
        gigantamax: {
            height: math.unit(6 * 16, "feet"),
            weight: math.unit(200 * 16 * 16 * 16, "lbs"),
            name: "Gigantamax",
            image: {
                source: "./media/characters/chari-gal/gigantamax.svg",
                extra: 1124 / 888,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 7 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(200, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Nova", species: ["wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/nova/front.svg",
                extra: 5000 / 4722,
                bottom: 0.02
            }
        }
    },
    [
        {
            name: "Micro-",
            height: math.unit(0.8, "inches")
        },
        {
            name: "Micro",
            height: math.unit(2, "inches"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Argent", species: ["kobold"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(3 + 1 / 12, "feet"),
            weight: math.unit(21.7, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/argent/front.svg",
                extra: 1471 / 1331,
                bottom: 100.8 / 1575.5
            }
        }
    },
    [
        {
            name: "Micro",
            height: math.unit(2, "inches")
        },
        {
            name: "Normal",
            height: math.unit(3 + 1 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(120, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mira al-Cul", species: ["snake"], tags: ["naga"] },
    {
        lamp: {
            height: math.unit(7 * 1559 / 989, "feet"),
            name: "Magic Lamp",
            image: {
                source: "./media/characters/mira-al-cul/lamp.svg",
                extra: 1617 / 1559
            }
        },
        front: {
            height: math.unit(7, "feet"),
            name: "Front",
            image: {
                source: "./media/characters/mira-al-cul/front.svg",
                extra: 1044 / 990
            }
        },
    },
    [
        {
            name: "Heavily Restricted",
            height: math.unit(7 * 1559 / 989, "feet")
        },
        {
            name: "Freshly Freed",
            height: math.unit(50 * 1559 / 989, "feet")
        },
        {
            name: "World Encompassing",
            height: math.unit(10000 * 1559 / 989, "miles")
        },
        {
            name: "Galactic",
            height: math.unit(1.433 * 1559 / 989, "zettameters")
        },
        {
            name: "Palmed Universe",
            height: math.unit(6000 * 1559 / 989, "yottameters"),
            default: true
        },
        {
            name: "Multiversal Matriarch",
            height: math.unit(8.87e10, "yottameters")
        },
        {
            name: "Void Mother",
            height: math.unit(3.14e110, "yottaparsecs")
        },
        {
            name: "Toying with Transcendence",
            height: math.unit(1e307, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kuro-shi Uchū", species: ["lugia"], tags: ["feral"] },
    {
        front: {
            height: math.unit(17 + 1 / 12, "feet"),
            weight: math.unit(476.2 * 5, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/kuro-shi-uchū/front.svg",
                extra: 2329 / 1835,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(2, "inches")
        },
        {
            name: "Normal",
            height: math.unit(12, "meters")
        },
        {
            name: "Planetary",
            height: math.unit(0.00929, "AU"),
            default: true
        },
        {
            name: "Universal",
            height: math.unit(20, "gigaparsecs")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Katherine", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(120, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/katherine/front.svg",
                extra: 2075 / 1969
            }
        },
        dress: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(120, "lbs"),
            name: "Dress",
            image: {
                source: "./media/characters/katherine/dress.svg",
                extra: 2258 / 2064
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1, "inches"),
            default: true
        },
        {
            name: "Normal",
            height: math.unit(5 + 2 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(100, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(80, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Yevis", species: ["cerberus"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 8 / 12, "feet"),
            weight: math.unit(250, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/yevis/front.svg",
                extra: 1938 / 1755
            }
        }
    },
    [
        {
            name: "Mortal",
            height: math.unit(7 + 8 / 12, "feet")
        },
        {
            name: "Battle",
            height: math.unit(25 + 11 / 12, "feet")
        },
        {
            name: "Wrath",
            height: math.unit(1654 + 11 / 12, "feet")
        },
        {
            name: "Planet Destroyer",
            height: math.unit(12000, "miles")
        },
        {
            name: "Galaxy Conqueror",
            height: math.unit(1.45, "zettameters"),
            default: true
        },
        {
            name: "Universal War",
            height: math.unit(184, "gigaparsecs")
        },
        {
            name: "Eternity War",
            height: math.unit(1.98e55, "yottaparsecs")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Xavier", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(63, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/xavier/front.svg",
                extra: 944 / 883
            }
        },
        frontStretch: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(63, "kg"),
            name: "Stretching",
            image: {
                source: "./media/characters/xavier/front-stretch.svg",
                extra: 962 / 820
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 8 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(100, "meters"),
            default: true
        },
        {
            name: "McLargeHuge",
            height: math.unit(10, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Joshii", species: ["cat", "rabbit", "demon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 5 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/joshii/front.svg"
            }
        },
        foot: {
            height: math.unit((5 + 5 / 12) * 0.1676, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/joshii/foot.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(2, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 5 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(785, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(24.5, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Goddess Elizabeth", species: ["wolf", "deity"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/goddess-elizabeth/front.svg",
                extra: 1800 / 1525,
                bottom: 0.005
            }
        },
        foot: {
            height: math.unit(6 * 0.25436 * 1800 / 1525 / 2, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/goddess-elizabeth/foot.svg"
            }
        },
        mouth: {
            height: math.unit(6, "feet"),
            name: "Mouth",
            image: {
                source: "./media/characters/goddess-elizabeth/mouth.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(12, "feet")
        },
        {
            name: "Normal",
            height: math.unit(80, "miles"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(15000, "parsecs")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kara", species: ["wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(144, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kara/front.svg"
            }
        },
        feet: {
            height: math.unit(6 / 6.765, "feet"),
            name: "Kara's Feet",
            rename: true,
            image: {
                source: "./media/characters/kara/feet.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(174, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Tyrone", species: ["tyrantrum"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(18, "feet"),
            weight: math.unit(4050, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/tyrone/front.svg",
                extra: 2520 / 2402,
                bottom: 0.025
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(18, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(300, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Danny", species: ["gryphon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 8 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/danny/front.svg",
                extra: 1490 / 1350
            }
        },
        back: {
            height: math.unit(7 + 8 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/danny/back.svg",
                extra: 1490 / 1350
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 8 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mallow", species: ["mouse"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(3.5, "inches"),
            weight: math.unit(19, "grams"),
            name: "Front",
            image: {
                source: "./media/characters/mallow/front.svg",
                extra: 471 / 431
            }
        },
        back: {
            height: math.unit(3.5, "inches"),
            weight: math.unit(19, "grams"),
            name: "Back",
            image: {
                source: "./media/characters/mallow/back.svg",
                extra: 471 / 431
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(3.5, "inches"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Starry Aqua", species: ["fennec-fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(9, "feet"),
            weight: math.unit(230, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/starry-aqua/front.svg"
            }
        },
        back: {
            height: math.unit(9, "feet"),
            weight: math.unit(230, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/starry-aqua/back.svg"
            }
        },
        hand: {
            height: math.unit(9 * 0.1168, "feet"),
            name: "Hand",
            image: {
                source: "./media/characters/starry-aqua/hand.svg"
            }
        },
        foot: {
            height: math.unit(9 * 0.18, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/starry-aqua/foot.svg"
            }
        }
    },
    [
        {
            name: "Micro",
            height: math.unit(3, "inches")
        },
        {
            name: "Normal",
            height: math.unit(9, "feet")
        },
        {
            name: "Macro",
            height: math.unit(300, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(3200, "feet")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Luka", species: ["husky"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(230, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/luka/front.svg",
                extra: 1,
                bottom: 0.025
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(12 + 8 / 12, "feet"),
            default: true
        },
        {
            name: "Minimacro",
            height: math.unit(20, "feet")
        },
        {
            name: "Macro",
            height: math.unit(250, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(5, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(8000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Natalie Nightring", species: ["lemur"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/natalie-nightring/front.svg",
                extra: 1,
                bottom: 0.06
            }
        },
    },
    [
        {
            name: "Uh Oh",
            height: math.unit(0.1, "mm")
        },
        {
            name: "Small",
            height: math.unit(3, "inches")
        },
        {
            name: "Human Scale",
            height: math.unit(6, "feet")
        },
        {
            name: "Librarian",
            height: math.unit(50, "feet"),
            default: true
        },
        {
            name: "Immense",
            height: math.unit(200, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Danni Rosie", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lbs"),
            name: "Front",
            image: {
                source: "./media/characters/danni-rosie/front.svg",
                extra: 1260 / 1128,
                bottom: 0.022
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(2, "inches"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Samantha Kruse", species: ["human"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/samantha-kruse/front.svg",
                extra: (985 / 935),
                bottom: 0.03
            }
        },
        frontUndressed: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Front (Undressed)",
            image: {
                source: "./media/characters/samantha-kruse/front-undressed.svg",
                extra: (973 / 923),
                bottom: 0.025
            }
        },
        fat: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(900, "lb"),
            name: "Front (Fat)",
            image: {
                source: "./media/characters/samantha-kruse/fat.svg",
                extra: 2688 / 2561
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Amelia Rosie", species: ["human"], tags: ["anthro"] },
    {
        back: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(4963, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/amelia-rosie/back.svg",
                extra: 1113 / 963,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Level 0",
            height: math.unit(5 + 4 / 12, "feet")
        },
        {
            name: "Level 1",
            height: math.unit(164597, "feet"),
            default: true
        },
        {
            name: "Level 2",
            height: math.unit(956243, "miles")
        },
        {
            name: "Level 3",
            height: math.unit(29421709423, "miles")
        },
        {
            name: "Level 4",
            height: math.unit(154, "lightyears")
        },
        {
            name: "Level 5",
            height: math.unit(4738272, "lightyears")
        },
        {
            name: "Level 6",
            height: math.unit(145787152896, "lightyears")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rook Kitara", species: ["raskatox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 11 / 12, "feet"),
            weight: math.unit(65, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/rook-kitara/front.svg",
                extra: 1347 / 1274,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Totally Unfair",
            height: math.unit(1.8, "mm")
        },
        {
            name: "Lap Rookie",
            height: math.unit(1.4, "feet")
        },
        {
            name: "Normal",
            height: math.unit(5 + 11 / 12, "feet"),
            default: true
        },
        {
            name: "How Did This Happen",
            height: math.unit(80, "miles")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Pisces", species: ["kelpie"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(300, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/pisces/front.svg",
                extra: 2255 / 2115,
                bottom: 0.03
            }
        },
        back: {
            height: math.unit(7, "feet"),
            weight: math.unit(300, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/pisces/back.svg",
                extra: 2146 / 2055,
                bottom: 0.04
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7, "feet"),
            default: true
        },
        {
            name: "Swimming Pool",
            height: math.unit(12.2, "meters")
        },
        {
            name: "Olympic Swimming Pool",
            height: math.unit(56.3, "meters")
        },
        {
            name: "Lake Superior",
            height: math.unit(93900, "meters")
        },
        {
            name: "Mediterranean Sea",
            height: math.unit(644457, "meters")
        },
        {
            name: "World's Oceans",
            height: math.unit(4567491, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Zelas", species: ["rabbit", "demon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2.3, "meters"),
            weight: math.unit(120, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/zelas/front.svg"
            }
        },
        side: {
            height: math.unit(2.3, "meters"),
            weight: math.unit(120, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/zelas/side.svg"
            }
        },
        back: {
            height: math.unit(2.3, "meters"),
            weight: math.unit(120, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/zelas/back.svg"
            }
        },
        foot: {
            height: math.unit(1.116, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/zelas/foot.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2.3, "meters")
        },
        {
            name: "Macro",
            height: math.unit(30, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Talbot", species: ["husky", "labrador"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1, "inch"),
            weight: math.unit(0.21, "grams"),
            name: "Front",
            image: {
                source: "./media/characters/talbot/front.svg",
                extra: 594 / 544
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1, "inch"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Fliss", species: ["sylveon"], tags: ["feral"] },
    {
        front: {
            height: math.unit(3 + 3 / 12, "feet"),
            weight: math.unit(51.8, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/fliss/front.svg",
                extra: 840 / 640
            }
        },
    },
    [
        {
            name: "Teeny Tiny",
            height: math.unit(1, "mm")
        },
        {
            name: "Small",
            height: math.unit(1, "inch"),
            default: true
        },
        {
            name: "Standard Sylveon",
            height: math.unit(3 + 3 / 12, "feet")
        },
        {
            name: "Large Nuisance",
            height: math.unit(33, "feet")
        },
        {
            name: "City Filler",
            height: math.unit(3000, "feet")
        },
        {
            name: "New Horizon",
            height: math.unit(6000, "miles")
        },

    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Fleta", species: ["lion"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5, "cm"),
            weight: math.unit(1.94, "g"),
            name: "Front",
            image: {
                source: "./media/characters/fleta/front.svg",
                extra: 835 / 803
            }
        },
        back: {
            height: math.unit(5, "cm"),
            weight: math.unit(1.94, "g"),
            name: "Back",
            image: {
                source: "./media/characters/fleta/back.svg",
                extra: 835 / 803
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(5, "cm"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Dominic", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(225, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/dominic/front.svg",
                extra: 1770 / 1620,
                bottom: 0.025
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(225, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/dominic/back.svg",
                extra: 1745 / 1620,
                bottom: 0.065
            }
        },
    },
    [
        {
            name: "Nano",
            height: math.unit(0.1, "mm")
        },
        {
            name: "Micro-",
            height: math.unit(1, "mm")
        },
        {
            name: "Micro",
            height: math.unit(4, "inches")
        },
        {
            name: "Normal",
            height: math.unit(6 + 4 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(115, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(955, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(8990, "feet")
        },
        {
            name: "Gigmacro",
            height: math.unit(9310, "miles")
        },
        {
            name: "Teramacro",
            height: math.unit(1567005010, "miles")
        },
        {
            name: "Examacro",
            height: math.unit(1425, "parsecs")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Major Colonel", species: ["polar-bear"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(400, "feet"),
            weight: math.unit(44444444, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/major-colonel/front.svg"
            }
        },
        back: {
            height: math.unit(400, "feet"),
            weight: math.unit(44444444, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/major-colonel/back.svg"
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(400, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Axel Lycan", species: ["cat", "wolf"], tags: ["anthro"] },
    {
        catFront: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front (Cat Side)",
            image: {
                source: "./media/characters/axel-lycan/cat-front.svg",
                extra: 430 / 402,
                bottom: 43 / 472.35
            }
        },
        catBack: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "lb"),
            name: "Back (Cat Side)",
            image: {
                source: "./media/characters/axel-lycan/cat-back.svg",
                extra: 447 / 419,
                bottom: 23.3 / 469
            }
        },
        wolfFront: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front (Wolf Side)",
            image: {
                source: "./media/characters/axel-lycan/wolf-front.svg",
                extra: 485 / 456,
                bottom: 19 / 504
            }
        },
        wolfBack: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "lb"),
            name: "Back (Wolf Side)",
            image: {
                source: "./media/characters/axel-lycan/wolf-back.svg",
                extra: 475 / 438,
                bottom: 39.2 / 514
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(1, "km"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Vanrel (Hyena)", species: ["hyena"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(175, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/vanrel-hyena/front.svg",
                extra: 1086 / 1010,
                bottom: 0.04
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Abbott Absol", species: ["absol"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(103, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/abbott-absol/front.svg",
                extra: 2010 / 1842
            }
        },
    },
    [
        {
            name: "Megamicro",
            height: math.unit(0.1, "mm")
        },
        {
            name: "Micro",
            height: math.unit(1, "inch")
        },
        {
            name: "Normal",
            height: math.unit(6, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Hector", species: ["werewolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(264, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/hector/front.svg",
                extra: 2280 / 2130,
                bottom: 0.07
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(12.25, "foot"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(160, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sal", species: ["deer"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sal/front.svg",
                extra: 1846 / 1699,
                bottom: 0.04
            }
        },
    },
    [
        {
            name: "Megamacro",
            height: math.unit(10, "miles"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ranger", species: ["dragon"], tags: ["feral"] },
    {
        front: {
            height: math.unit(3, "meters"),
            weight: math.unit(450, "kg"),
            name: "front",
            image: {
                source: "./media/characters/ranger/front.svg",
                extra: 2401 / 2243,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(3, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Theresa", species: ["sergal"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(14, "feet"),
            weight: math.unit(800, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/theresa/front.svg",
                extra: 3575 / 3346,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(14, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ine", species: ["wolver"], tags: ["feral"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(3, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/ine/front.svg",
                extra: 678 / 539,
                bottom: 0.023
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2.265, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Vial", species: ["crux"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5, "feet"),
            weight: math.unit(30, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/vial/front.svg",
                extra: 1365 / 1277,
                bottom: 0.04
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rovoska", species: ["gryphon"], tags: ["feral"] },
    {
        side: {
            height: math.unit(3.4, "meters"),
            weight: math.unit(1000, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/rovoska/side.svg",
                extra: 4403 / 1515
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(3.4, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Gunner Rotthbauer", species: ["rottweiler"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(315, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/gunner-rotthbauer/front.svg"
            }
        },
        back: {
            height: math.unit(8, "feet"),
            weight: math.unit(315, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/gunner-rotthbauer/back.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(3.5, "inches")
        },
        {
            name: "Normal",
            height: math.unit(8, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(250, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(1, "AU")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Allatia", species: ["tiger"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 5 / 12, "feet"),
            weight: math.unit(140, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/allatia/front.svg",
                extra: 1227 / 1180,
                bottom: 0.027
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 5 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(250, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(8, "miles")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Tene", species: ["dragon", "fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/tene/front.svg",
                extra: 1728 / 1578,
                bottom: 0.022
            }
        },
        stomping: {
            height: math.unit(2.025, "meters"),
            weight: math.unit(120, "lb"),
            name: "Stomping",
            image: {
                source: "./media/characters/tene/stomping.svg",
                extra: 938 / 873,
                bottom: 0.01
            }
        },
        sitting: {
            height: math.unit(1, "meter"),
            weight: math.unit(120, "lb"),
            name: "Sitting",
            image: {
                source: "./media/characters/tene/sitting.svg",
                extra: 437 / 415,
                bottom: 0.1
            }
        },
        feral: {
            height: math.unit(3.9, "feet"),
            weight: math.unit(250, "lb"),
            name: "Feral",
            image: {
                source: "./media/characters/tene/feral.svg",
                extra: 717 / 458,
                bottom: 0.179
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6, "feet")
        },
        {
            name: "Macro",
            height: math.unit(300, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(5, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Evander", species: ["gryphon"], tags: ["feral"] },
    {
        side: {
            height: math.unit(6, "feet"),
            name: "Side",
            image: {
                source: "./media/characters/evander/side.svg",
                extra: 877 / 477
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(0.83, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ka'Tamra \"Spaz\" Ci'Karan", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(12, "feet"),
            weight: math.unit(1000, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ka'tamra-spaz-ci'karan/front.svg",
                extra: 1762 / 1611
            }
        },
        back: {
            height: math.unit(12, "feet"),
            weight: math.unit(1000, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/ka'tamra-spaz-ci'karan/back.svg",
                extra: 1762 / 1611
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(12, "feet"),
            default: true
        },
        {
            name: "Kaiju",
            height: math.unit(150, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Zero Alurus", species: ["zebra"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/zero-alurus/front.svg"
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/zero-alurus/back.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 10 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(60, "feet"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(450, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mega Shi", species: ["yoshi"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(200, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mega-shi/front.svg",
                extra: 1279 / 1250,
                bottom: 0.02
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(200, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/mega-shi/back.svg",
                extra: 1279 / 1250,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(16 + 6 / 12, "feet")
        },
        {
            name: "Third Dimension",
            height: math.unit(40, "meters")
        },
        {
            name: "Normal",
            height: math.unit(660, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(10, "miles")
        },
        {
            name: "Planetary Launch",
            height: math.unit(500, "miles")
        },
        {
            name: "Interstellar",
            height: math.unit(1e9, "miles")
        },
        {
            name: "Leaving the Universe",
            height: math.unit(1, "gigaparsec")
        },
        {
            name: "Travelling Universes",
            height: math.unit(30e15, "parsecs")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Odyssey", species: ["lynx"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/odyssey/front.svg",
                extra: 1782 / 1582,
                bottom: 0.01
            }
        },
        side: {
            height: math.unit(5.7, "feet"),
            weight: math.unit(140, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/odyssey/side.svg",
                extra: 6462 / 5700
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 4 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(1, "km")
        },
        {
            name: "Megamacro",
            height: math.unit(3000, "km")
        },
        {
            name: "Gigamacro",
            height: math.unit(1, "AU"),
            default: true
        },
        {
            name: "Omniversal",
            height: math.unit(100e14, "lightyears")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mekuto", species: ["red-panda", "kitsune"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(300, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mekuto/front.svg",
                extra: 921 / 832,
                bottom: 0.03
            }
        },
        hand: {
            height: math.unit(6 / 10.24, "feet"),
            name: "Hand",
            image: {
                source: "./media/characters/mekuto/hand.svg"
            }
        },
        foot: {
            height: math.unit(6 / 5.05, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/mekuto/foot.svg"
            }
        },
    },
    [
        {
            name: "Minimicro",
            height: math.unit(0.2, "inches")
        },
        {
            name: "Micro",
            height: math.unit(1.5, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 11 / 12, "feet"),
            default: true
        },
        {
            name: "Minimacro",
            height: math.unit(17 + 9 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(177.5, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(152, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Dafydd Tomos", species: ["mikromare"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6.5, "inches"),
            weight: math.unit(13, "oz"),
            name: "Front",
            image: {
                source: "./media/characters/dafydd-tomos/front.svg",
                extra: 2990 / 2603,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(6.5, "inches"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Splinter", species: ["thylacine"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/splinter/front.svg",
                extra: 2990 / 2882,
                bottom: 0.04
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/splinter/back.svg",
                extra: 2990 / 2882,
                bottom: 0.04
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6, "feet")
        },
        {
            name: "Macro",
            height: math.unit(230, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "SnowGabumon", species: ["gabumon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(4 + 10 / 12, "feet"),
            weight: math.unit(480, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/snow-gabumon/front.svg",
                extra: 1140 / 963,
                bottom: 0.058
            }
        },
        back: {
            height: math.unit(4 + 10 / 12, "feet"),
            weight: math.unit(480, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/snow-gabumon/back.svg",
                extra: 1115 / 962,
                bottom: 0.041
            }
        },
        frontUndresed: {
            height: math.unit(4 + 10 / 12, "feet"),
            weight: math.unit(480, "lb"),
            name: "Front (Undressed)",
            image: {
                source: "./media/characters/snow-gabumon/front-undressed.svg",
                extra: 1061 / 960,
                bottom: 0.045
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1, "inch")
        },
        {
            name: "Normal",
            height: math.unit(4 + 10 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(200, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(120, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(9800, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Moody", species: ["dog"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.7, "meters"),
            weight: math.unit(140, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/moody/front.svg",
                extra: 3226 / 3007,
                bottom: 0.087
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1, "mm")
        },
        {
            name: "Normal",
            height: math.unit(1.7, "meters"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(80, "meters")
        },
        {
            name: "Macro+",
            height: math.unit(500, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Zyas", species: ["lion", "tiger"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/zyas/front.svg",
                extra: 1180 / 1120,
                bottom: 0.045
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(10, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(500, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(5, "miles")
        },
        {
            name: "Teramacro",
            height: math.unit(150000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Cuon", species: ["border-collie"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/cuon/front.svg",
                extra: 1390 / 1320,
                bottom: 0.008
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(3, "inches")
        },
        {
            name: "Normal",
            height: math.unit(18 + 9 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(360, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(360, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Nyanuxk", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2.4, "meters"),
            weight: math.unit(70, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/nyanuxk/front.svg",
                extra: 1172 / 1084,
                bottom: 0.065
            }
        },
        side: {
            height: math.unit(2.4, "meters"),
            weight: math.unit(70, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/nyanuxk/side.svg",
                extra: 1190 / 1132,
                bottom: 0.007
            }
        },
        back: {
            height: math.unit(2.4, "meters"),
            weight: math.unit(70, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/nyanuxk/back.svg",
                extra: 1200 / 1141,
                bottom: 0.015
            }
        },
        foot: {
            height: math.unit(0.52, "meters"),
            name: "Foot",
            image: {
                source: "./media/characters/nyanuxk/foot.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(2, "cm")
        },
        {
            name: "Normal",
            height: math.unit(2.4, "meters"),
            default: true
        },
        {
            name: "Smaller Macro",
            height: math.unit(120, "meters")
        },
        {
            name: "Bigger Macro",
            height: math.unit(1.2, "km")
        },
        {
            name: "Megamacro",
            height: math.unit(15, "kilometers")
        },
        {
            name: "Gigamacro",
            height: math.unit(2000, "km")
        },
        {
            name: "Teramacro",
            height: math.unit(500000, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ailbhe", species: ["gryphon"], tags: ["feral"] },
    {
        side: {
            height: math.unit(6, "feet"),
            name: "Side",
            image: {
                source: "./media/characters/ailbhe/side.svg",
                extra: 757 / 464,
                bottom: 0.041
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1.07, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Zevulfius", species: ["werewolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/zevulfius/front.svg",
                extra: 965 / 903
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/zevulfius/side.svg",
                extra: 939 / 900
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/zevulfius/back.svg",
                extra: 918 / 854,
                bottom: 0.005
            }
        },
        foot: {
            height: math.unit(6 / 3.72, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/zevulfius/foot.svg"
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(750, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(20, "km"),
            default: true
        },
        {
            name: "Gigamacro",
            height: math.unit(2000, "km")
        },
        {
            name: "Teramacro",
            height: math.unit(250000, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rikes", species: ["german-shepherd"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(100, "feet"),
            weight: math.unit(350, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/rikes/front.svg",
                extra: 1565 / 1483,
                bottom: 0.017
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(100, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Adam Silver-Mane", species: ["horse"], tags: ["anthro"] },
    {
        anthro: {
            height: math.unit(8, "feet"),
            weight: math.unit(120, "kg"),
            name: "Anthro",
            image: {
                source: "./media/characters/adam-silver-mane/anthro.svg",
                extra: 5743 / 5339,
                bottom: 0.07
            }
        },
        taur: {
            height: math.unit(16, "feet"),
            weight: math.unit(1500, "kg"),
            name: "Taur",
            image: {
                source: "./media/characters/adam-silver-mane/taur.svg",
                extra: 1713 / 1571,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8, "feet")
        },
        {
            name: "Minimacro",
            height: math.unit(80, "feet")
        },
        {
            name: "Macro",
            height: math.unit(800, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(8000, "feet")
        },
        {
            name: "Gigamacro",
            height: math.unit(800, "miles")
        },
        {
            name: "Teramacro",
            height: math.unit(80000, "miles")
        },
        {
            name: "Celestial",
            height: math.unit(8e6, "miles")
        },
        {
            name: "Star Dragon",
            height: math.unit(800000, "parsecs")
        },
        {
            name: "Godly",
            height: math.unit(800, "teraparsecs")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ky'owin", species: ["dragon", "cat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ky'owin/front.svg",
                extra: 3888 / 3068,
                bottom: 0.015
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 8 / 12, "feet")
        },
        {
            name: "Large",
            height: math.unit(68, "feet")
        },
        {
            name: "Macro",
            height: math.unit(132, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(340, "feet")
        },
        {
            name: "Macro++",
            height: math.unit(680, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(1, "mile")
        },
        {
            name: "Megamacro+",
            height: math.unit(10, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mal", species: ["imp"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(4, "feet"),
            weight: math.unit(50, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mal/front.svg",
                extra: 785 / 724,
                bottom: 0.07
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(4, "inches")
        },
        {
            name: "Normal",
            height: math.unit(4, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(200, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Jordan Deware", species: ["otter"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/jordan-deware/front.svg",
                extra: 1191 / 1012
            }
        },
    },
    [
        {
            name: "Nano",
            height: math.unit(0.01, "mm")
        },
        {
            name: "Minimicro",
            height: math.unit(1, "mm")
        },
        {
            name: "Micro",
            height: math.unit(0.5, "inches")
        },
        {
            name: "Normal",
            height: math.unit(4, "feet"),
            default: true
        },
        {
            name: "Minimacro",
            height: math.unit(40, "meters")
        },
        {
            name: "Small Macro",
            height: math.unit(400, "meters")
        },
        {
            name: "Macro",
            height: math.unit(4, "miles")
        },
        {
            name: "Megamacro",
            height: math.unit(40, "miles")
        },
        {
            name: "Megamacro+",
            height: math.unit(400, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(400000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kimiko", species: ["eastern-dragon"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/kimiko/side.svg",
                extra: 600 / 358
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(15, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(220, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(1450, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(11500, "feet")
        },
        {
            name: "Gigamacro",
            height: math.unit(9500, "miles")
        },
        {
            name: "Teramacro",
            height: math.unit(2208005005, "miles")
        },
        {
            name: "Examacro",
            height: math.unit(2750, "parsecs")
        },
        {
            name: "Zettamacro",
            height: math.unit(101500, "parsecs")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Andrew Sleepy", species: ["human"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(70, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/andrew-sleepy/front.svg"
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(70, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/andrew-sleepy/side.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1, "mm"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Judio", species: ["rabbit"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/judio/front.svg",
                extra: 1258 / 1110
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 6 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(1000, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(10, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Nomaxice", species: ["lynx", "raccoon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(68, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/nomaxice/front.svg",
                extra: 1498 / 1073,
                bottom: 0.075
            }
        },
        foot: {
            height: math.unit(1.1, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/nomaxice/foot.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(8, "cm")
        },
        {
            name: "Norm",
            height: math.unit(1.82, "m")
        },
        {
            name: "Norm+",
            height: math.unit(8.8, "feet")
        },
        {
            name: "Big",
            height: math.unit(8, "meters"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(18, "meters")
        },
        {
            name: "Macro+",
            height: math.unit(88, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Dydros", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(12, "feet"),
            weight: math.unit(1.5, "tons"),
            name: "Front",
            image: {
                source: "./media/characters/dydros/front.svg",
                extra: 863 / 800,
                bottom: 0.015
            }
        },
        back: {
            height: math.unit(12, "feet"),
            weight: math.unit(1.5, "tons"),
            name: "Back",
            image: {
                source: "./media/characters/dydros/back.svg",
                extra: 900 / 843,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Riggi", species: ["tiger", "wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(100, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/riggi/front.svg",
                extra: 5787 / 5303
            }
        },
        hyper: {
            height: math.unit(6 * 5 / 3, "feet"),
            weight: math.unit(400 * 5 / 3 * 5 / 3 * 5 / 3, "kg"),
            name: "Hyper",
            image: {
                source: "./media/characters/riggi/hyper.svg",
                extra: 3595 / 3485
            }
        },
    },
    [
        {
            name: "Small Macro",
            height: math.unit(50, "feet")
        },
        {
            name: "Default",
            height: math.unit(200, "feet"),
            default: true
        },
        {
            name: "Loom",
            height: math.unit(10000, "feet")
        },
        {
            name: "Cruising Altitude",
            height: math.unit(30000, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(100, "miles")
        },
        {
            name: "Continent Sized",
            height: math.unit(2800, "miles")
        },
        {
            name: "Earth Sized",
            height: math.unit(8000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Alexi", species: ["werewolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(250, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/alexi/front.svg",
                extra: 3483 / 3291,
                bottom: 0.04
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(250, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/alexi/back.svg",
                extra: 3533 / 3356,
                bottom: 0.021
            }
        },
        frontTransforming: {
            height: math.unit(8.58, "feet"),
            weight: math.unit(1300, "lb"),
            name: "Transforming",
            image: {
                source: "./media/characters/alexi/front-transforming.svg",
                extra: 437 / 409,
                bottom: 19 / 458.66
            }
        },
        frontTransformed: {
            height: math.unit(12.5, "feet"),
            weight: math.unit(4000, "lb"),
            name: "Transformed",
            image: {
                source: "./media/characters/alexi/front-transformed.svg",
                extra: 639 / 614,
                bottom: 30.55 / 671
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(3, "meters"),
            default: true
        },
        {
            name: "Minimacro",
            height: math.unit(30, "meters")
        },
        {
            name: "Macro",
            height: math.unit(500, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(9000, "km")
        },
        {
            name: "Teramacro",
            height: math.unit(384000, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kayroo", species: ["kangaroo"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kayroo/front.svg",
                extra: 1153 / 1038,
                bottom: 0.06
            }
        },
        foot: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Foot",
            image: {
                source: "./media/characters/kayroo/foot.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8, "feet"),
            default: true
        },
        {
            name: "Minimacro",
            height: math.unit(250, "feet")
        },
        {
            name: "Macro",
            height: math.unit(2800, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(5200, "feet")
        },
        {
            name: "Gigamacro",
            height: math.unit(27000, "feet")
        },
        {
            name: "Omega",
            height: math.unit(45000, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rhys", species: ["renamon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(18, "feet"),
            weight: math.unit(5800, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/rhys/front.svg",
                extra: 3386 / 3090,
                bottom: 0.07
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(18, "feet"),
            default: true
        },
        {
            name: "Working Size",
            height: math.unit(200, "feet")
        },
        {
            name: "Demolition Size",
            height: math.unit(2000, "feet")
        },
        {
            name: "Maximum Licensed Size",
            height: math.unit(5, "miles")
        },
        {
            name: "Maximum Observed Size",
            height: math.unit(10, "yottameters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Toto", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(250, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/toto/front.svg",
                extra: 527 / 479,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(3, "feet")
        },
        {
            name: "Normal",
            height: math.unit(10, "feet")
        },
        {
            name: "Macro",
            height: math.unit(150, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(1200, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "King", species: ["lion"], tags: ["anthro"] },
    {
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/king/back.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(2, "inches")
        },
        {
            name: "Normal",
            height: math.unit(8, "feet")
        },
        {
            name: "Macro",
            height: math.unit(200, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(50, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Cordite", species: ["candy-orca-dragon"], tags: ["anthro"] },
    {
        anthro: {
            height: math.unit(6 + 5 / 12, "feet"),
            weight: math.unit(280, "lb"),
            name: "Anthro",
            image: {
                source: "./media/characters/cordite/anthro.svg",
                extra: 1986 / 1905,
                bottom: 0.025
            }
        },
        feral: {
            height: math.unit(2, "feet"),
            weight: math.unit(90, "lb"),
            name: "Feral",
            image: {
                source: "./media/characters/cordite/feral.svg",
                extra: 1260 / 755,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Pianostrong", species: ["husky"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/pianostrong/front.svg",
                extra: 6577 / 6254,
                bottom: 0.02
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/pianostrong/side.svg",
                extra: 6106 / 5730
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/pianostrong/back.svg",
                extra: 6085 / 5733,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(100, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(300, "feet"),
            default: true
        },
        {
            name: "Macro++",
            height: math.unit(1000, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kona", species: ["deer"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kona/front.svg",
                extra: 2960 / 2629,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(11 + 8 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(850, "feet"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(1.5, "km"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(80, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(3500, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Levi", species: ["dragon"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(1.9, "meters"),
            weight: math.unit(326, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/levi/side.svg",
                extra: 1704 / 1334,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1.9, "meters"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(20, "meters")
        },
        {
            name: "Macro+",
            height: math.unit(200, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(2, "km")
        },
        {
            name: "Megamacro+",
            height: math.unit(20, "km")
        },
        {
            name: "Gigamacro",
            height: math.unit(2500, "km")
        },
        {
            name: "Gigamacro+",
            height: math.unit(120000, "km")
        },
        {
            name: "Teramacro",
            height: math.unit(7.77e6, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "BMC", species: ["sabertooth-tiger", "cougar"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 4 / 12, "feet"),
            weight: math.unit(188, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/bmc/front.svg",
                extra: 1067 / 1022,
                bottom: 0.047
            }
        },
    },
    [
        {
            name: "Human-sized",
            height: math.unit(6 + 4 / 12, "feet")
        },
        {
            name: "Small",
            height: math.unit(250, "feet")
        },
        {
            name: "Normal",
            height: math.unit(1250, "feet"),
            default: true
        },
        {
            name: "Good Day",
            height: math.unit(88, "miles")
        },
        {
            name: "Largest Measured Size",
            height: math.unit(11.2e6, "lightyears")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sven the Kaiju", species: ["monster", "fairy"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(20, "feet"),
            weight: math.unit(2016, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/sven-the-kaiju/front.svg",
                extra: 1479 / 1449,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Fairy",
            height: math.unit(6, "inches")
        },
        {
            name: "Normal",
            height: math.unit(20, "feet"),
            default: true
        },
        {
            name: "Rampage",
            height: math.unit(200, "feet")
        },
        {
            name: "Archfey Forest Guardian",
            height: math.unit(1, "mile")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Marik", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(4, "meters"),
            weight: math.unit(2, "tons"),
            name: "Front",
            image: {
                source: "./media/characters/marik/front.svg",
                extra: 1057 / 1003,
                bottom: 0.08
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4, "meters"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(20, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(50, "km")
        },
        {
            name: "Gigamacro",
            height: math.unit(100, "km")
        },
        {
            name: "Alpha Macro",
            height: math.unit(7.88e7, "yottameters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mel", species: ["human", "moth"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(110, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mel/front.svg",
                extra: 736 / 617,
                bottom: 0.017
            }
        },
    },
    [
        {
            name: "Pico",
            height: math.unit(3, "pm")
        },
        {
            name: "Nano",
            height: math.unit(3, "nm")
        },
        {
            name: "Micro",
            height: math.unit(0.3, "mm"),
            default: true
        },
        {
            name: "Micro+",
            height: math.unit(3, "mm")
        },
        {
            name: "Normal",
            height: math.unit(5 + 10.5 / 12, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Lykonous", species: ["monster"], tags: ["anthro"] },
    {
        kaiju: {
            height: math.unit(1.75, "meters"),
            weight: math.unit(55, "kg"),
            name: "Kaiju",
            image: {
                source: "./media/characters/lykonous/kaiju.svg",
                extra: 1055 / 946,
                bottom: 0.135
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2.5, "meters"),
            default: true
        },
        {
            name: "Kaiju Dragon",
            height: math.unit(60, "meters")
        },
        {
            name: "Mega Kaiju",
            height: math.unit(120, "km")
        },
        {
            name: "Giga Kaiju",
            height: math.unit(200, "megameters")
        },
        {
            name: "Terra Kaiju",
            height: math.unit(400, "gigameters")
        },
        {
            name: "Kaiju Dragon God",
            height: math.unit(13000, "exaparsecs")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Blü", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/blü/front.svg",
                extra: 1883 / 1564,
                bottom: 0.031
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(13, "feet"),
            default: true
        },
        {
            name: "Big Boi",
            height: math.unit(150, "meters")
        },
        {
            name: "Mini Stomper",
            height: math.unit(300, "meters")
        },
        {
            name: "Macro",
            height: math.unit(1000, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(11000, "meters")
        },
        {
            name: "Gigamacro",
            height: math.unit(11000, "km")
        },
        {
            name: "Teramacro",
            height: math.unit(420000, "km")
        },
        {
            name: "Examacro",
            height: math.unit(120, "parsecs")
        },
        {
            name: "God Tho",
            height: math.unit(98000000000, "parsecs")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Scales", species: ["dragon"], tags: ["taur"] },
    {
        taurFront: {
            height: math.unit(6, "feet"),
            weight: math.unit(200, "lb"),
            name: "Taur (Front)",
            image: {
                source: "./media/characters/scales/taur-front.svg",
                extra: 1,
                bottom: 0.05
            }
        },
        taurBack: {
            height: math.unit(6, "feet"),
            weight: math.unit(200, "lb"),
            name: "Taur (Back)",
            image: {
                source: "./media/characters/scales/taur-back.svg",
                extra: 1,
                bottom: 0.08
            }
        },
        anthro: {
            height: math.unit(6 * 7 / 12, "feet"),
            weight: math.unit(100, "lb"),
            name: "Anthro",
            image: {
                source: "./media/characters/scales/anthro.svg",
                extra: 1,
                bottom: 0.06
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Koragos", species: ["lizard"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/koragos/front.svg",
                extra: 841 / 794,
                bottom: 0.035
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/koragos/back.svg",
                extra: 841 / 810,
                bottom: 0.022
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 11 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(490, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(10, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(50, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Xylrem", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(250, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/xylrem/front.svg",
                extra: 3323 / 3050,
                bottom: 0.065
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(4, "feet")
        },
        {
            name: "Normal",
            height: math.unit(16, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(2720, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(25000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ikideru", species: ["german-shepherd"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(250, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/ikideru/front.svg",
                extra: 930 / 870,
                bottom: 0.087
            }
        },
        back: {
            height: math.unit(8, "feet"),
            weight: math.unit(250, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/ikideru/back.svg",
                extra: 919 / 852,
                bottom: 0.055
            }
        },
    },
    [
        {
            name: "Rare",
            height: math.unit(8, "feet"),
            default: true
        },
        {
            name: "Playful Loom",
            height: math.unit(80, "feet")
        },
        {
            name: "City Leaner",
            height: math.unit(230, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(2500, "feet")
        },
        {
            name: "Gigamacro",
            height: math.unit(26400, "feet")
        },
        {
            name: "Tectonic Shifter",
            height: math.unit(1.7, "megameters")
        },
        {
            name: "Planet Carer",
            height: math.unit(21, "megameters")
        },
        {
            name: "God",
            height: math.unit(11157.22, "parsecs")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Neo", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/neo/front.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(2, "inches"),
            default: true
        },
        {
            name: "Human Size",
            height: math.unit(5 + 8 / 12, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Chauncey (Chantz)", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(13 + 10 / 12, "feet"),
            weight: math.unit(5320, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/chauncey-chantz/front.svg",
                extra: 1587 / 1435,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(13 + 10 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(45, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(250, "miles")
        },
        {
            name: "Planetary",
            height: math.unit(10000, "miles")
        },
        {
            name: "Galactic",
            height: math.unit(40000, "parsecs")
        },
        {
            name: "Universal",
            height: math.unit(1, "yottameter")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Epifox", species: ["snake", "fox"], tags: ["naga"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/epifox/front.svg",
                extra: 1,
                bottom: 0.075
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(6, "inches")
        },
        {
            name: "Normal",
            height: math.unit(12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(3810, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(500, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Colin T.", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.8796, "m"),
            weight: math.unit(230, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/colin-t/front.svg",
                extra: 1272 / 1193,
                bottom: 0.07
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(0.571, "meters")
        },
        {
            name: "Normal",
            height: math.unit(1.8796, "meters"),
            default: true
        },
        {
            name: "Tall",
            height: math.unit(4, "meters")
        },
        {
            name: "Macro",
            height: math.unit(67.241, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(371.856, "meters")
        },
        {
            name: "Planetary",
            height: math.unit(12631.5689, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Matvei", species: ["shark"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.85, "meters"),
            weight: math.unit(80, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/matvei/front.svg",
                extra: 614 / 594,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1.85, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Quincy", species: ["phoenix"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(70, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/quincy/front.svg",
                extra: 3041 / 2751
            }
        },
        back: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(70, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/quincy/back.svg",
                extra: 3041 / 2751
            }
        },
        flying: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(70, "lb"),
            name: "Flying",
            image: {
                source: "./media/characters/quincy/flying.svg",
                extra: 1044 / 930
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(3, "cm")
        },
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(200, "meters"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(1000, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Vanrel", species: ["fennec-fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(4 + 7 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/vanrel/front.svg",
                extra: 1,
                bottom: 0.02
            }
        },
        elemental: {
            height: math.unit(3, "feet"),
            weight: math.unit(150, "lb"),
            name: "Elemental",
            image: {
                source: "./media/characters/vanrel/elemental.svg",
                extra: 192.3 / 162.8,
                bottom: 1.79 / 194.17
            }
        },
        side: {
            height: math.unit(4 + 7 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/vanrel/side.svg",
                extra: 1,
                bottom: 0.025
            }
        },
        tome: {
            height: math.unit(1.35, "feet"),
            weight: math.unit(10, "lb"),
            name: "Vanrel's Tome",
            rename: true,
            image: {
                source: "./media/characters/vanrel/tome.svg"
            }
        },
        beans: {
            height: math.unit(0.89, "feet"),
            name: "Beans",
            image: {
                source: "./media/characters/vanrel/beans.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kuiper Vanrel", species: ["elemental", "meerkat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 5 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kuiper-vanrel/front.svg",
                extra: 1118 / 1068,
                bottom: 0.09
            }
        },
        foot: {
            height: math.unit(0.55, "meters"),
            name: "Foot",
            image: {
                source: "./media/characters/kuiper-vanrel/foot.svg",
            }
        },
        battle: {
            height: math.unit(6.824, "feet"),
            weight: math.unit(150, "lb"),
            name: "Battle",
            image: {
                source: "./media/characters/kuiper-vanrel/battle.svg",
                extra: 1466 / 1327,
                bottom: 29 / 1492.5
            }
        },
        battleAlt: {
            height: math.unit(6.824, "feet"),
            weight: math.unit(150, "lb"),
            name: "Battle (Alt)",
            image: {
                source: "./media/characters/kuiper-vanrel/battle-alt.svg",
                extra: 2081/1965,
                bottom: 40/2121
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Keset Vanrel", species: ["elemental", "hyena"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(8 + 5 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/keset-vanrel/front.svg",
                extra: 1150 / 1084,
                bottom: 0.05
            }
        },
        hand: {
            height: math.unit(0.6, "meters"),
            name: "Hand",
            image: {
                source: "./media/characters/keset-vanrel/hand.svg"
            }
        },
        foot: {
            height: math.unit(0.94978, "meters"),
            name: "Foot",
            image: {
                source: "./media/characters/keset-vanrel/foot.svg"
            }
        },
        battle: {
            height: math.unit(7.408, "feet"),
            weight: math.unit(150, "lb"),
            name: "Battle",
            image: {
                source: "./media/characters/keset-vanrel/battle.svg",
                extra: 1890 / 1386,
                bottom: 73.28 / 1970
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Neos", species: ["mew"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/neos/front.svg",
                extra: 1696 / 992,
                bottom: 0.14
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(54, "cm"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(100, "m")
        },
        {
            name: "Megamacro",
            height: math.unit(10, "km")
        },
        {
            name: "Megamacro+",
            height: math.unit(100, "km")
        },
        {
            name: "Gigamacro",
            height: math.unit(100, "Mm")
        },
        {
            name: "Teramacro",
            height: math.unit(100, "Gm")
        },
        {
            name: "Examacro",
            height: math.unit(100, "Em")
        },
        {
            name: "Godly",
            height: math.unit(10000, "Ym")
        },
        {
            name: "Beyond Godly",
            height: math.unit(25, "multiverses")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sammy Mouse", species: ["mouse"], tags: ["anthro"] },
    {
        feminine: {
            height: math.unit(5, "feet"),
            weight: math.unit(100, "lb"),
            name: "Feminine",
            image: {
                source: "./media/characters/sammy-mouse/feminine.svg",
                extra: 2526 / 2425,
                bottom: 0.123
            }
        },
        masculine: {
            height: math.unit(5, "feet"),
            weight: math.unit(100, "lb"),
            name: "Masculine",
            image: {
                source: "./media/characters/sammy-mouse/masculine.svg",
                extra: 2526 / 2425,
                bottom: 0.123
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(5, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(60, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kole", species: ["kobold"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(4, "feet"),
            weight: math.unit(50, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kole/front.svg",
                extra: 1423 / 1303,
                bottom: 0.025
            }
        },
        back: {
            height: math.unit(4, "feet"),
            weight: math.unit(50, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/kole/back.svg",
                extra: 1426 / 1280,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rufran", species: ["kobold"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2 + 6 / 12, "feet"),
            weight: math.unit(20, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/rufran/front.svg",
                extra: 2041 / 1839,
                bottom: 0.055
            }
        },
        back: {
            height: math.unit(2 + 6 / 12, "feet"),
            weight: math.unit(20, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/rufran/back.svg",
                extra: 2054 / 1839,
                bottom: 0.01
            }
        },
        hand: {
            height: math.unit(0.2166, "meters"),
            name: "Hand",
            image: {
                source: "./media/characters/rufran/hand.svg"
            }
        },
        foot: {
            height: math.unit(0.185, "meters"),
            name: "Foot",
            image: {
                source: "./media/characters/rufran/foot.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1, "inch")
        },
        {
            name: "Normal",
            height: math.unit(2 + 6 / 12, "feet"),
            default: true
        },
        {
            name: "Big",
            height: math.unit(60, "feet")
        },
        {
            name: "Macro",
            height: math.unit(325, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Chip", species: ["espurr"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(0.3, "meters"),
            weight: math.unit(3.5, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/chip/front.svg",
                extra: 748 / 674
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1, "inch"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Torvid", species: ["gryphon"], tags: ["feral"] },
    {
        side: {
            height: math.unit(2.3, "meters"),
            weight: math.unit(3500, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/torvid/side.svg",
                extra: 1972 / 722,
                bottom: 0.035
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2.3, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Susan", species: ["goodra"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meters"),
            weight: math.unit(150.5, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/susan/front.svg",
                extra: 693 / 635,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Megamacro",
            height: math.unit(505, "miles"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Raindrops", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/raindrops/front.svg",
                extra: 2655 / 2461,
                bottom: 49/2705
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/raindrops/back.svg",
                extra: 2574 / 2400,
                bottom: 65/2634
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(6, "inches")
        },
        {
            name: "Normal",
            height: math.unit(6 + 2 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(131, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(15, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(4000, "miles")
        },
        {
            name: "Teramacro",
            height: math.unit(315000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Tezwa", species: ["lion"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2.794, "meters"),
            weight: math.unit(325, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/tezwa/front.svg",
                extra: 2083 / 1906,
                bottom: 0.031
            }
        },
        foot: {
            height: math.unit(0.687, "meters"),
            name: "Foot",
            image: {
                source: "./media/characters/tezwa/foot.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(9 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Typhus", species: ["typhlosion", "demon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(58, "feet"),
            weight: math.unit(89000, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/typhus/front.svg",
                extra: 816 / 800,
                bottom: 0.065
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(58, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Lyra Von Wulf", species: ["snake"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(12, "feet"),
            weight: math.unit(6, "tonnes"),
            name: "Front",
            image: {
                source: "./media/characters/lyra-von-wulf/front.svg",
                extra: 1,
                bottom: 0.10
            }
        },
        frontMecha: {
            height: math.unit(12, "feet"),
            weight: math.unit(12, "tonnes"),
            name: "Front (Mecha)",
            image: {
                source: "./media/characters/lyra-von-wulf/front-mecha.svg",
                extra: 1,
                bottom: 0.042
            }
        },
        maw: {
            height: math.unit(2.2, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/lyra-von-wulf/maw.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(12, "feet"),
            default: true
        },
        {
            name: "Classic",
            height: math.unit(50, "feet")
        },
        {
            name: "Macro",
            height: math.unit(500, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(1, "mile")
        },
        {
            name: "Gigamacro",
            height: math.unit(400, "miles")
        },
        {
            name: "Teramacro",
            height: math.unit(22000, "miles")
        },
        {
            name: "Solarmacro",
            height: math.unit(8600000, "miles")
        },
        {
            name: "Galactic",
            height: math.unit(1057000, "lightyears")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Dixon", species: ["canine"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 10 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/dixon/front.svg",
                extra: 3361 / 3209,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 10 / 12, "feet"),
            default: true
        },
        {
            name: "Big",
            height: math.unit(12, "meters")
        },
        {
            name: "Macro",
            height: math.unit(500, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(2, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kauko", species: ["cheetah"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(185, "cm"),
            weight: math.unit(68, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/kauko/front.svg",
                extra: 1455 / 1421,
                bottom: 0.03
            }
        },
        back: {
            height: math.unit(185, "cm"),
            weight: math.unit(68, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/kauko/back.svg",
                extra: 1455 / 1421,
                bottom: 0.004
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(185, "cm"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Varg", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/varg/front.svg",
                extra: 1108 / 1018,
                bottom: 0.0375
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5, "meters")
        },
        {
            name: "Macro",
            height: math.unit(200, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(20, "kilometers")
        },
        {
            name: "True Size",
            height: math.unit(211, "km"),
            default: true
        },
        {
            name: "Gigamacro",
            height: math.unit(1000, "km")
        },
        {
            name: "Gigamacro+",
            height: math.unit(8000, "km")
        },
        {
            name: "Teramacro",
            height: math.unit(1000000, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Dayza", species: ["sergal"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 7 / 12, "feet"),
            weight: math.unit(267, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/dayza/front.svg",
                extra: 1262 / 1200,
                bottom: 0.035
            }
        },
        side: {
            height: math.unit(7 + 7 / 12, "feet"),
            weight: math.unit(267, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/dayza/side.svg",
                extra: 1295 / 1245,
                bottom: 0.05
            }
        },
        back: {
            height: math.unit(7 + 7 / 12, "feet"),
            weight: math.unit(267, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/dayza/back.svg",
                extra: 1241 / 1170
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 7 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(155, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Xanthos", species: ["xenomorph"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 5 / 12, "feet"),
            weight: math.unit(160, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/xanthos/front.svg",
                extra: 1,
                bottom: 0.04
            }
        },
        back: {
            height: math.unit(6 + 5 / 12, "feet"),
            weight: math.unit(160, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/xanthos/back.svg",
                extra: 1,
                bottom: 0.03
            }
        },
        hand: {
            height: math.unit(0.928, "feet"),
            name: "Hand",
            image: {
                source: "./media/characters/xanthos/hand.svg"
            }
        },
        foot: {
            height: math.unit(1.286, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/xanthos/foot.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 5 / 12, "feet"),
            default: true
        },
        {
            name: "Normal+",
            height: math.unit(6, "meters")
        },
        {
            name: "Macro",
            height: math.unit(40, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(200, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(20, "km")
        },
        {
            name: "Megamacro+",
            height: math.unit(100, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Grynn", species: ["charr"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 3 / 12, "feet"),
            weight: math.unit(215, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/grynn/front.svg",
                extra: 4627 / 4209,
                bottom: 0.047
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(6, "inches")
        },
        {
            name: "Normal",
            height: math.unit(6 + 3 / 12, "feet"),
            default: true
        },
        {
            name: "Big",
            height: math.unit(104, "feet")
        },
        {
            name: "Macro",
            height: math.unit(944, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(9480, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(78752, "feet")
        },
        {
            name: "Megamacro+",
            height: math.unit(630128, "feet")
        },
        {
            name: "Megamacro++",
            height: math.unit(3150695, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mocha Aura", species: ["siberian-husky"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 5 / 12, "feet"),
            weight: math.unit(450, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mocha-aura/front.svg",
                extra: 1907 / 1817,
                bottom: 0.04
            }
        },
        back: {
            height: math.unit(7 + 5 / 12, "feet"),
            weight: math.unit(450, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/mocha-aura/back.svg",
                extra: 1900 / 1825,
                bottom: 0.045
            }
        },
    },
    [
        {
            name: "Nano",
            height: math.unit(1, "nm")
        },
        {
            name: "Megamicro",
            height: math.unit(1, "mm")
        },
        {
            name: "Micro",
            height: math.unit(3, "inches")
        },
        {
            name: "Normal",
            height: math.unit(7 + 5 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(30, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(3500, "feet")
        },
        {
            name: "Teramacro",
            height: math.unit(500000, "miles")
        },
        {
            name: "Petamacro",
            height: math.unit(50000000000000000, "parsecs")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ilisha Devya", species: ["alligator", "cobra", "deity"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ilisha-devya/front.svg",
                extra: 1,
                bottom: 0.175
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/ilisha-devya/back.svg",
                extra: 1,
                bottom: 0.015
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(500, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(10, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(100000, "miles")
        },
        {
            name: "Examacro",
            height: math.unit(1e9, "lightyears")
        },
        {
            name: "Omniversal",
            height: math.unit(1e33, "lightyears")
        },
        {
            name: "Beyond Infinite",
            height: math.unit(1e100, "lightyears")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mira", species: ["dragon"], tags: ["anthro"] },
    {
        Side: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/mira/side.svg",
                extra: 900 / 799,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Human Size",
            height: math.unit(6, "feet")
        },
        {
            name: "Macro",
            height: math.unit(100, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(10, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(25000, "miles")
        },
        {
            name: "Teramacro",
            height: math.unit(300, "AU")
        },
        {
            name: "Full Size",
            height: math.unit(4.5e10, "lightyears")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Holly", species: ["hyena"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/holly/front.svg",
                extra: 639 / 606
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/holly/back.svg",
                extra: 623 / 598
            }
        },
        frontWorking: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front (Working)",
            image: {
                source: "./media/characters/holly/front-working.svg",
                extra: 607 / 577,
                bottom: 0.048
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(12 + 3 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Porter", species: ["bernese-mountain-dog"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/porter/front.svg",
                extra: 1,
                bottom: 0.01
            }
        },
        frontRobes: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front (Robes)",
            image: {
                source: "./media/characters/porter/front-robes.svg",
                extra: 1.01,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(11 + 9 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Lucy", species: ["reshiram"], tags: ["anthro"] },
    {
        legendary: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Legendary",
            image: {
                source: "./media/characters/lucy/legendary.svg",
                extra: 1355 / 1100,
                bottom: 0.045
            }
        },
    },
    [
        {
            name: "Legendary",
            height: math.unit(86882 * 2, "miles"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Drusilla", species: ["grizzly-bear", "fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/drusilla/front.svg",
                extra: 678 / 635,
                bottom: 0.03
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/drusilla/back.svg",
                extra: 678 / 635,
                bottom: 0.005

            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(100, "feet")
        },
        {
            name: "Canon Height",
            height: math.unit(2000, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Renard Thatch", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/renard-thatch/front.svg",
                extra: 2411 / 2275,
                bottom: 0.01
            }
        },
        frontPosing: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lb"),
            name: "Front (Posing)",
            image: {
                source: "./media/characters/renard-thatch/front-posing.svg",
                extra: 2381 / 2261,
                bottom: 0.01
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/renard-thatch/back.svg",
                extra: 2428 / 2288
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(3, "inches")
        },
        {
            name: "Default",
            height: math.unit(6, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(75, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sekvra", species: ["water-monitor"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1450, "feet"),
            weight: math.unit(1.21e6, "tons"),
            name: "Front",
            image: {
                source: "./media/characters/sekvra/front.svg",
                extra: 1,
                bottom: 0.03
            }
        },
        frontClothed: {
            height: math.unit(1450, "feet"),
            weight: math.unit(1.21e6, "tons"),
            name: "Front (Clothed)",
            image: {
                source: "./media/characters/sekvra/front-clothed.svg",
                extra: 1,
                bottom: 0.03
            }
        },
        side: {
            height: math.unit(1450, "feet"),
            weight: math.unit(1.21e6, "tons"),
            name: "Side",
            image: {
                source: "./media/characters/sekvra/side.svg",
                extra: 1,
                bottom: 0.025
            }
        },
        back: {
            height: math.unit(1450, "feet"),
            weight: math.unit(1.21e6, "tons"),
            name: "Back",
            image: {
                source: "./media/characters/sekvra/back.svg",
                extra: 1,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(1450, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(15000, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Carmine", species: ["otter"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/carmine/front.svg",
                extra: 1,
                bottom: 0.035
            }
        },
        frontArmor: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front (Armor)",
            image: {
                source: "./media/characters/carmine/front-armor.svg",
                extra: 1,
                bottom: 0.035
            }
        },
    },
    [
        {
            name: "Large",
            height: math.unit(1, "mile")
        },
        {
            name: "Huge",
            height: math.unit(40, "miles"),
            default: true
        },
        {
            name: "Colossal",
            height: math.unit(2500, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Elyssia", species: ["banchofossa"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/elyssia/front.svg",
                extra: 2201 / 2035,
                bottom: 0.05
            }
        },
        frontClothed: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front (Clothed)",
            image: {
                source: "./media/characters/elyssia/front-clothed.svg",
                extra: 2201 / 2035,
                bottom: 0.05
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/elyssia/back.svg",
                extra: 2201 / 2035,
                bottom: 0.013
            }
        },
    },
    [
        {
            name: "Smaller",
            height: math.unit(150, "feet")
        },
        {
            name: "Standard",
            height: math.unit(1400, "feet"),
            default: true
        },
        {
            name: "Distracted",
            height: math.unit(15000, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Geno Maxwell", species: ["kirin"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 4 / 12, "feet"),
            weight: math.unit(500, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/geno-maxwell/front.svg",
                extra: 2207 / 2040,
                bottom: 0.015
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(3, "inches")
        },
        {
            name: "Normal",
            height: math.unit(7 + 4 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(220, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(11, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Regena Maxwell", species: ["kirin"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 4 / 12, "feet"),
            weight: math.unit(500, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/regena-maxwell/front.svg",
                extra: 3115 / 2770,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 4 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(220, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(11, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "XGlidingDragonX", species: ["arcanine", "dragon", "phoenix"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/x-gliding-dragon-x/front.svg",
                extra: 860 / 690,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1.7, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Quilly", species: ["quilava"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/quilly/front.svg",
                extra: 890 / 776
            }
        },
    },
    [
        {
            name: "Gigamacro",
            height: math.unit(404090, "miles"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Tempest", species: ["lugia"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 8 / 12, "feet"),
            weight: math.unit(350, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/tempest/front.svg",
                extra: 1175 / 1086,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 8 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rodger", species: ["mouse"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(4 + 5 / 12, "feet"),
            weight: math.unit(80, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/rodger/side.svg",
                extra: 1235 / 1118
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1, "inch")
        },
        {
            name: "Normal",
            height: math.unit(4 + 5 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(120, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Danyel", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/danyel/front.svg",
                extra: 1185 / 1123,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Shrunken",
            height: math.unit(0.5, "mm")
        },
        {
            name: "Micro",
            height: math.unit(1, "mm"),
            default: true
        },
        {
            name: "Upsized",
            height: math.unit(5 + 5 / 12, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Vivian Bijoux", species: ["seviper"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 6 / 12, "feet"),
            weight: math.unit(200, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/vivian-bijoux/front.svg",
                extra: 1,
                bottom: 0.072
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 6 / 12, "feet"),
            default: true
        },
        {
            name: "Bad Dream",
            height: math.unit(500, "feet")
        },
        {
            name: "Nightmare",
            height: math.unit(500, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Zeta", species: ["bear", "otter"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(260, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/zeta/front.svg",
                extra: 1968 / 1889,
                bottom: 0.06
            }
        },
        back: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(260, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/zeta/back.svg",
                extra: 1944 / 1858,
                bottom: 0.03
            }
        },
        hand: {
            height: math.unit(1.112, "feet"),
            name: "Hand",
            image: {
                source: "./media/characters/zeta/hand.svg"
            }
        },
        foot: {
            height: math.unit(1.48, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/zeta/foot.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(6, "inches")
        },
        {
            name: "Normal",
            height: math.unit(6 + 1 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(20, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Jamie Larsen", species: ["rabbit"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/jamie-larsen/front.svg",
                extra: 962 / 933,
                bottom: 0.02
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/jamie-larsen/back.svg",
                extra: 997 / 946
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(28 + 7 / 12, "feet"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(180, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(10, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(200000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Vance", species: ["flying-fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/vance/front.svg",
                extra: 1980 / 1890,
                bottom: 0.09
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(120, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/vance/back.svg",
                extra: 2081 / 1994,
                bottom: 0.014
            }
        },
        hand: {
            height: math.unit(0.88, "feet"),
            name: "Hand",
            image: {
                source: "./media/characters/vance/hand.svg"
            }
        },
        foot: {
            height: math.unit(0.64, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/vance/foot.svg"
            }
        },
    },
    [
        {
            name: "Small",
            height: math.unit(90, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(100, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(15, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Xochitl", species: ["jaguar"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/xochitl/front.svg",
                extra: 2297 / 2261,
                bottom: 0.065
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/xochitl/back.svg",
                extra: 2386 / 2354,
                bottom: 0.01
            }
        },
        foot: {
            height: math.unit(6 / 5 * 1.15, "feet"),
            weight: math.unit(150, "lb"),
            name: "Foot",
            image: {
                source: "./media/characters/xochitl/foot.svg"
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(80, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(400, "feet"),
            default: true
        },
        {
            name: "Gigamacro",
            height: math.unit(80000, "miles")
        },
        {
            name: "Gigamacro+",
            height: math.unit(400000, "miles")
        },
        {
            name: "Teramacro",
            height: math.unit(300, "AU")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Vincent", species: ["egyptian-vulture"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/vincent/front.svg",
                extra: 1130 / 1080,
                bottom: 0.055
            }
        },
        beak: {
            height: math.unit(6 * 0.1, "feet"),
            name: "Beak",
            image: {
                source: "./media/characters/vincent/beak.svg"
            }
        },
        hand: {
            height: math.unit(6 * 0.85, "feet"),
            weight: math.unit(150, "lb"),
            name: "Hand",
            image: {
                source: "./media/characters/vincent/hand.svg"
            }
        },
        foot: {
            height: math.unit(6 * 0.19, "feet"),
            weight: math.unit(150, "lb"),
            name: "Foot",
            image: {
                source: "./media/characters/vincent/foot.svg"
            }
        },
    },
    [
        {
            name: "Base",
            height: math.unit(6 + 5 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(300, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(2, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(1000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Jay", species: ["fox", "horse"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(265, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/jay/front.svg",
                extra: 1510 / 1430,
                bottom: 0.042
            }
        },
        back: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(265, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/jay/back.svg",
                extra: 1510 / 1430,
                bottom: 0.025
            }
        },
        clothed: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(265, "lb"),
            name: "Front (Clothed)",
            image: {
                source: "./media/characters/jay/clothed.svg",
                extra: 744 / 699,
                bottom: 0.043
            }
        },
        head: {
            height: math.unit(1.772, "feet"),
            name: "Head",
            image: {
                source: "./media/characters/jay/head.svg"
            }
        },
        sizeRay: {
            height: math.unit(1.331, "feet"),
            name: "Size Ray",
            image: {
                source: "./media/characters/jay/size-ray.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1, "inch")
        },
        {
            name: "Normal",
            height: math.unit(6 + 2 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(1, "mile")
        },
        {
            name: "Megamacro",
            height: math.unit(100, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Coatl", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meters"),
            weight: math.unit(500, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/coatl/front.svg",
                extra: 3948 / 3500,
                bottom: 0.082
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4, "meters")
        },
        {
            name: "Macro",
            height: math.unit(100, "meters"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(300, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(3, "gigameters")
        },
        {
            name: "Megamacro+",
            height: math.unit(300, "terameters")
        },
        {
            name: "Megamacro++",
            height: math.unit(3, "lightyears")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Shiroryu", species: ["dragon", "deity"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(50, "kg"),
            name: "front",
            image: {
                source: "./media/characters/shiroryu/front.svg",
                extra: 1990 / 1935
            }
        },
    },
    [
        {
            name: "Mortal Mingling",
            height: math.unit(3, "meters")
        },
        {
            name: "Kaiju-ish",
            height: math.unit(250, "meters")
        },
        {
            name: "Somewhat Godly",
            height: math.unit(400, "km"),
            default: true
        },
        {
            name: "Planetary",
            height: math.unit(300, "megameters")
        },
        {
            name: "Galaxy-dwarfing",
            height: math.unit(450, "kiloparsecs")
        },
        {
            name: "Universe Eater",
            height: math.unit(150, "gigaparsecs")
        },
        {
            name: "Almost Immeasurable",
            height: math.unit(1.3e266, "yottaparsecs")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Umeko", species: ["eastern-dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/umeko/front.svg",
                extra: 1,
                bottom: 0.019
            }
        },
        frontArmored: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front (Armored)",
            image: {
                source: "./media/characters/umeko/front-armored.svg",
                extra: 1,
                bottom: 0.021
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(220, "feet"),
            default: true
        },
        {
            name: "Guardian Dragon",
            height: math.unit(50, "miles")
        },
        {
            name: "Cosmic",
            height: math.unit(800000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Cassidy", species: ["leopard-seal"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/cassidy/front.svg",
                extra: 1,
                bottom: 0.043
            }
        },
    },
    [
        {
            name: "Canon Height",
            height: math.unit(120, "feet"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(400, "feet")
        },
        {
            name: "Macro++",
            height: math.unit(4000, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(3, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Isaac", species: ["moose"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/isaac/front.svg",
                extra: 896 / 815,
                bottom: 0.11
            }
        },
    },
    [
        {
            name: "Human Size",
            height: math.unit(8, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(400, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(50, "miles")
        },
        {
            name: "Canon Height",
            height: math.unit(200, "AU")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sleekit", species: ["rat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(72, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/sleekit/front.svg",
                extra: 4693 / 4487,
                bottom: 0.012
            }
        },
    },
    [
        {
            name: "Minimum Height",
            height: math.unit(10, "meters")
        },
        {
            name: "Smaller",
            height: math.unit(25, "meters")
        },
        {
            name: "Larger",
            height: math.unit(38, "meters"),
            default: true
        },
        {
            name: "Maximum height",
            height: math.unit(100, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Nillia", species: ["caracal"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/nillia/front.svg",
                extra: 2195 / 2037,
                bottom: 0.005
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/nillia/back.svg",
                extra: 2195 / 2037,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Canon Height",
            height: math.unit(489, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mesmyriza", species: ["shark", "dragon", "robot"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mesmyriza/front.svg",
                extra: 2067 / 1784,
                bottom: 0.035
            }
        },
        foot: {
            height: math.unit(6 / (250 / 35), "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/mesmyriza/foot.svg"
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(457, "meters"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(8, "megameters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Saudade", species: ["goat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(250, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/saudade/front.svg",
                extra: 1172 / 1139,
                bottom: 0.035
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(3, "inches")
        },
        {
            name: "Normal",
            height: math.unit(6, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(50, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(2800, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Keireer", species: ["keynain"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(100, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/keireer/front.svg",
                extra: 716 / 666,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 4 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mirja", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(90, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/mirja/front.svg",
                extra: 1789 / 1683,
                bottom: 0.05
            }
        },
        frontDressed: {
            height: math.unit(6, "feet"),
            weight: math.unit(90, "lb"),
            name: "Front (Dressed)",
            image: {
                source: "./media/characters/mirja/front-dressed.svg",
                extra: 1789 / 1683,
                bottom: 0.05
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(90, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/mirja/back.svg",
                extra: 953 / 917,
                bottom: 0.017
            }
        },
    },
    [
        {
            name: "\"Incognito\"",
            height: math.unit(3, "meters")
        },
        {
            name: "Strolling Size",
            height: math.unit(15, "km")
        },
        {
            name: "Larger Strolling Size",
            height: math.unit(400, "km")
        },
        {
            name: "Preferred Size",
            height: math.unit(5000, "km")
        },
        {
            name: "True Size",
            height: math.unit(30657809462086840000000000000000, "parsecs"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Nightraver", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(15, "feet"),
            weight: math.unit(880, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/nightraver/front.svg",
                extra: 2444 / 2160,
                bottom: 0.027
            }
        },
        back: {
            height: math.unit(15, "feet"),
            weight: math.unit(880, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/nightraver/back.svg",
                extra: 2309 / 2180,
                bottom: 0.005
            }
        },
        sole: {
            height: math.unit(2.878, "feet"),
            name: "Sole",
            image: {
                source: "./media/characters/nightraver/sole.svg"
            }
        },
        foot: {
            height: math.unit(2.285, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/nightraver/foot.svg"
            }
        },
        maw: {
            height: math.unit(2.67, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/nightraver/maw.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1, "cm")
        },
        {
            name: "Normal",
            height: math.unit(15, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(300, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(300, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(10000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Arc", species: ["raptor"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(2, "inches"),
            weight: math.unit(5, "grams"),
            name: "Side",
            image: {
                source: "./media/characters/arc/side.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(2, "inches"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Nebula Shahar", species: ["lucario"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.1938, "meters"),
            weight: math.unit(54, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/nebula-shahar/front.svg",
                extra: 1642 / 1436,
                bottom: 0.06
            }
        },
    },
    [
        {
            name: "Megamicro",
            height: math.unit(0.3, "mm")
        },
        {
            name: "Micro",
            height: math.unit(3, "cm")
        },
        {
            name: "Normal",
            height: math.unit(138, "cm"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(30, "m")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Shayla", species: ["otter"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5.24, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/shayla/front.svg",
                extra: 1512 / 1414,
                bottom: 0.01
            }
        },
        back: {
            height: math.unit(5.24, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/shayla/back.svg",
                extra: 1512 / 1414
            }
        },
        hand: {
            height: math.unit(0.7781496062992126, "feet"),
            name: "Hand",
            image: {
                source: "./media/characters/shayla/hand.svg"
            }
        },
        foot: {
            height: math.unit(1.4206036745406823, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/shayla/foot.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(0.32, "feet")
        },
        {
            name: "Normal",
            height: math.unit(5.24, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(492.12, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(186.41, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Pia Jr.", species: ["ziralkia"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2.2, "m"),
            weight: math.unit(120, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/pia-jr/front.svg",
                extra: 1000 / 970,
                bottom: 0.035
            }
        },
        hand: {
            height: math.unit(0.759 * 7.21 / 6, "feet"),
            name: "Hand",
            image: {
                source: "./media/characters/pia-jr/hand.svg"
            }
        },
        paw: {
            height: math.unit(1.185 * 7.21 / 6, "feet"),
            name: "Paw",
            image: {
                source: "./media/characters/pia-jr/paw.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1.2, "cm")
        },
        {
            name: "Normal",
            height: math.unit(2.2, "m"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(180, "m")
        },
        {
            name: "Megamacro",
            height: math.unit(420, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Pia Sr.", species: ["ziralkia"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "m"),
            weight: math.unit(115, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/pia-sr/front.svg",
                extra: 760 / 730,
                bottom: 0.015
            }
        },
        back: {
            height: math.unit(2, "m"),
            weight: math.unit(115, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/pia-sr/back.svg",
                extra: 760 / 730,
                bottom: 0.01
            }
        },
        hand: {
            height: math.unit(0.89 * 6.56 / 6, "feet"),
            name: "Hand",
            image: {
                source: "./media/characters/pia-sr/hand.svg"
            }
        },
        foot: {
            height: math.unit(1.83, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/pia-sr/foot.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(88, "mm")
        },
        {
            name: "Normal",
            height: math.unit(2, "m"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(200, "m")
        },
        {
            name: "Megamacro",
            height: math.unit(420, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "KIBIBYTE", species: ["bat", "demon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(8 + 2 / 12, "feet"),
            weight: math.unit(300, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kibibyte/front.svg",
                extra: 2221 / 2098,
                bottom: 0.04
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8 + 2 / 12, "feet"),
            default: true
        },
        {
            name: "Socialable Macro",
            height: math.unit(50, "feet")
        },
        {
            name: "Macro",
            height: math.unit(300, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(500, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Felix", species: ["siamese-cat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/felix/front.svg",
                extra: 762 / 722,
                bottom: 0.02
            }
        },
        frontClothed: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front (Clothed)",
            image: {
                source: "./media/characters/felix/front-clothed.svg",
                extra: 762 / 722,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 8 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(2600, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(450, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Tobo", species: ["mouse"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(250, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/tobo/front.svg",
                extra: 608 / 586,
                bottom: 0.023
            }
        },
        back: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(250, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/tobo/back.svg",
                extra: 608 / 586
            }
        },
    },
    [
        {
            name: "Nano",
            height: math.unit(2, "nm")
        },
        {
            name: "Megamicro",
            height: math.unit(0.1, "mm")
        },
        {
            name: "Micro",
            height: math.unit(1, "inch"),
            default: true
        },
        {
            name: "Human-sized",
            height: math.unit(6 + 1 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(250, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(75, "miles")
        },
        {
            name: "Texas-sized",
            height: math.unit(750, "miles")
        },
        {
            name: "Teramacro",
            height: math.unit(50000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Danny Kapowsky", species: ["husky"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(269, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/danny-kapowsky/front.svg",
                extra: 766 / 736,
                bottom: 0.044
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(269, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/danny-kapowsky/back.svg",
                extra: 797 / 760,
                bottom: 0.025
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(150, "feet"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(200, "feet")
        },
        {
            name: "Macro++",
            height: math.unit(300, "feet")
        },
        {
            name: "Macro+++",
            height: math.unit(400, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Finn", species: ["fennec-fox"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(170, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/finn/side.svg",
                extra: 1953 / 1807,
                bottom: 0.057
            }
        },
    },
    [
        {
            name: "Megamacro",
            height: math.unit(14445, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Roy", species: ["chameleon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 6 / 12, "feet"),
            weight: math.unit(125, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/roy/front.svg",
                extra: 1,
                bottom: 0.11
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(3, "inches"),
            default: true
        },
        {
            name: "Normal",
            height: math.unit(5 + 6 / 12, "feet")
        },
        {
            name: "Lesser Macro",
            height: math.unit(60, "feet")
        },
        {
            name: "Greater Macro",
            height: math.unit(120, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Aevsivs", species: ["spider"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(100, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/aevsivs/front.svg",
                extra: 1,
                bottom: 0.03
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(100, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/aevsivs/back.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(2, "inches"),
            default: true
        },
        {
            name: "Normal",
            height: math.unit(5, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Hildegard", species: ["lucario"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(159, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/hildegard/front.svg",
                extra: 289 / 269,
                bottom: 7.63/297.8
            }
        },
        back: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(159, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/hildegard/back.svg",
                extra: 280/260,
                bottom: 2.3/282
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Bernard & Wilder", species: ["lycanroc"], tags: ["anthro", "feral"] },
    {
        bernard: {
            height: math.unit(2 + 7 / 12, "feet"),
            weight: math.unit(66, "lb"),
            name: "Bernard",
            rename: true,
            image: {
                source: "./media/characters/bernard-wilder/bernard.svg",
                extra: 192 / 128,
                bottom: 0.05
            }
        },
        wilder: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(143, "lb"),
            name: "Wilder",
            rename: true,
            image: {
                source: "./media/characters/bernard-wilder/wilder.svg",
                extra: 361 / 312,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Hearth", species: ["houndoom"], tags: ["anthro"] },
    {
        anthro: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(155, "lb"),
            name: "Anthro",
            image: {
                source: "./media/characters/hearth/anthro.svg",
                extra: 260 / 250,
                bottom: 0.02
            }
        },
        feral: {
            height: math.unit(3.78, "feet"),
            weight: math.unit(35, "kg"),
            name: "Feral",
            image: {
                source: "./media/characters/hearth/feral.svg",
                extra: 153 / 135,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 1 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ingrid", species: ["delphox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(182, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ingrid/front.svg",
                extra: 294 / 268,
                bottom: 0.027
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Malgam", species: ["eevee"], tags: ["anthro"] },
    {
        eevee: {
            height: math.unit(2 + 10 / 12, "feet"),
            weight: math.unit(86, "lb"),
            name: "Malgam",
            image: {
                source: "./media/characters/malgam/eevee.svg",
                extra: 218 / 180,
                bottom: 0.2
            }
        },
        sylveon: {
            height: math.unit(4, "feet"),
            weight: math.unit(101, "lb"),
            name: "Future Malgam",
            rename: true,
            image: {
                source: "./media/characters/malgam/sylveon.svg",
                extra: 371 / 325,
                bottom: 0.015
            }
        },
        gigantamax: {
            height: math.unit(50, "feet"),
            name: "Gigantamax Malgam",
            rename: true,
            image: {
                source: "./media/characters/malgam/gigantamax.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2 + 10 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Fleur", species: ["lopunny"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 11 / 12, "feet"),
            weight: math.unit(188, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/fleur/front.svg",
                extra: 309 / 283,
                bottom: 0.007
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 11 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Jude", species: ["absol"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(122, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/jude/front.svg",
                extra: 288 / 273,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 4 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Seara", species: ["salazzle"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 11 / 12, "feet"),
            weight: math.unit(190, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/seara/front.svg",
                extra: 1,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 11 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Caspian", species: ["lugia"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(16 + 5 / 12, "feet"),
            weight: math.unit(524, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/caspian/front.svg",
                extra: 1,
                bottom: 0.04
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(16 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mika", species: ["rabbit"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(170, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mika/front.svg",
                extra: 1,
                bottom: 0.016
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sol", species: ["grovyle"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(268, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sol/front.svg",
                extra: 247 / 231,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Umiko", species: ["buizel", "floatzel"], tags: ["anthro"] },
    {
        buizel: {
            height: math.unit(2 + 5 / 12, "feet"),
            weight: math.unit(87, "lb"),
            name: "Buizel",
            image: {
                source: "./media/characters/umiko/buizel.svg",
                extra: 172 / 157,
                bottom: 0.01
            }
        },
        floatzel: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(250, "lb"),
            name: "Floatzel",
            image: {
                source: "./media/characters/umiko/floatzel.svg",
                extra: 262 / 248
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Iliac", species: ["inteleon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(146, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/iliac/front.svg",
                extra: 389 / 365,
                bottom: 0.035
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Topaz", species: ["blaziken"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(170, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/topaz/front.svg",
                extra: 317 / 303,
                bottom: 0.055
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Gabriel", species: ["lucario"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 11 / 12, "feet"),
            weight: math.unit(144, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/gabriel/front.svg",
                extra: 285 / 262,
                bottom: 0.004
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 11 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Tempest (Suicune)", species: ["suicune"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(6 + 5 / 12, "feet"),
            weight: math.unit(300, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/tempest-suicune/side.svg",
                extra: 195 / 154,
                bottom: 0.04
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Vulcan", species: ["charizard"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 2 / 12, "feet"),
            weight: math.unit(322, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/vulcan/front.svg",
                extra: 154 / 147,
                bottom: 0.04
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Gault", species: ["feraligatr"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 10 / 12, "feet"),
            weight: math.unit(264, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/gault/front.svg",
                extra: 161 / 140,
                bottom: 0.028
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 10 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Shard", species: ["weavile"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/shard/front.svg",
                extra: 273 / 238,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(3 + 6 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ashe", species: ["cat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 11 / 12, "feet"),
            weight: math.unit(146, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ashe/front.svg",
                extra: 400 / 373,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 11 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Beatrix", species: ["coyote"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 5 / 12, "feet"),
            weight: math.unit(135, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/beatrix/front.svg",
                extra: 392 / 379,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ignatius", species: ["delphox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ignatius/front.svg",
                extra: 245 / 222,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mei Li", species: ["mienshao"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(138, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mei-li/front.svg",
                extra: 237 / 229,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Puru", species: ["azumarill"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2 + 4 / 12, "feet"),
            weight: math.unit(62, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/puru/front.svg",
                extra: 206 / 149,
                bottom: 0.06
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2 + 4 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kee", species: ["aardwolf"], tags: ["taur"] },
    {
        taur: {
            height: math.unit(11, "feet"),
            weight: math.unit(500, "lb"),
            name: "Taur",
            image: {
                source: "./media/characters/kee/taur.svg",
                extra: 1,
                bottom: 0.04
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(11, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Cobalt (Dracha)", species: ["dracha"], tags: ["anthro"] },
    {
        anthro: {
            height: math.unit(7, "feet"),
            weight: math.unit(190, "lb"),
            name: "Anthro",
            image: {
                source: "./media/characters/cobalt-dracha/anthro.svg",
                extra: 231 / 225,
                bottom: 0.04
            }
        },
        feral: {
            height: math.unit(9 + 7 / 12, "feet"),
            weight: math.unit(294, "lb"),
            name: "Feral",
            image: {
                source: "./media/characters/cobalt-dracha/feral.svg",
                extra: 692 / 633,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Java", species: ["snake", "deity"], tags: ["naga"] },
    {
        fallen: {
            height: math.unit(11 + 8 / 12, "feet"),
            weight: math.unit(485, "lb"),
            name: "Java (Fallen)",
            rename: true,
            image: {
                source: "./media/characters/java/fallen.svg",
                extra: 226 / 208,
                bottom: 0.005
            }
        },
        godkin: {
            height: math.unit(10 + 6 / 12, "feet"),
            weight: math.unit(328, "lb"),
            name: "Java (Godkin)",
            rename: true,
            image: {
                source: "./media/characters/java/godkin.svg",
                extra: 270 / 262,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(11 + 8 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Skoll", species: ["wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 8 / 12, "feet"),
            weight: math.unit(320, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/skoll/front.svg",
                extra: 232 / 220,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 8 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Purna", species: ["panther"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(170, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/purna/front.svg",
                extra: 239 / 229,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kuva", species: ["cheetah"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(142, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kuva/front.svg",
                extra: 281 / 271,
                bottom: 0.006
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Embra", species: ["dracha"], tags: ["anthro"] },
    {
        anthro: {
            height: math.unit(9 + 2 / 12, "feet"),
            weight: math.unit(270, "lb"),
            name: "Anthro",
            image: {
                source: "./media/characters/embra/anthro.svg",
                extra: 200 / 187,
                bottom: 0.02
            }
        },
        feral: {
            height: math.unit(18 + 8 / 12, "feet"),
            weight: math.unit(576, "lb"),
            name: "Feral",
            image: {
                source: "./media/characters/embra/feral.svg",
                extra: 152 / 137,
                bottom: 0.037
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(9 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Grottos", species: ["dracha"], tags: ["anthro"] },
    {
        anthro: {
            height: math.unit(10 + 9 / 12, "feet"),
            weight: math.unit(224, "lb"),
            name: "Anthro",
            image: {
                source: "./media/characters/grottos/anthro.svg",
                extra: 350 / 332,
                bottom: 0.045
            }
        },
        feral: {
            height: math.unit(20 + 7 / 12, "feet"),
            weight: math.unit(629, "lb"),
            name: "Feral",
            image: {
                source: "./media/characters/grottos/feral.svg",
                extra: 207 / 190,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(10 + 9 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Frifna", species: ["dracha"], tags: ["anthro"] },
    {
        anthro: {
            height: math.unit(9 + 6 / 12, "feet"),
            weight: math.unit(298, "lb"),
            name: "Anthro",
            image: {
                source: "./media/characters/frifna/anthro.svg",
                extra: 282 / 269,
                bottom: 0.015
            }
        },
        feral: {
            height: math.unit(16 + 2 / 12, "feet"),
            weight: math.unit(624, "lb"),
            name: "Feral",
            image: {
                source: "./media/characters/frifna/feral.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(9 + 6 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Elise", species: ["mongoose"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(168, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/elise/front.svg",
                extra: 276 / 271
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Glade", species: ["wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 10 / 12, "feet"),
            weight: math.unit(210, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/glade/front.svg",
                extra: 258 / 247,
                bottom: 0.008
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 10 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rina", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 10 / 12, "feet"),
            weight: math.unit(129, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/rina/front.svg",
                extra: 266 / 255,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 10 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Veronica", species: ["fox", "synth"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(192, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/veronica/front.svg",
                extra: 319 / 309,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 1 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Braxton", species: ["great-dane"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(9 + 3 / 12, "feet"),
            weight: math.unit(1100, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/braxton/front.svg",
                extra: 1057 / 984,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(9 + 3 / 12, "feet")
        },
        {
            name: "Giant",
            height: math.unit(300, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(700, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(6000, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Blue Feyonics", species: ["phoenix"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 7 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/blue-feyonics/front.svg",
                extra: 1403 / 1306,
                bottom: 0.047
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Maxwell", species: ["shiba-inu", "wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.8, "meters"),
            weight: math.unit(60, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/maxwell/front.svg",
                extra: 2060 / 1873
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1, "mm")
        },
        {
            name: "Normal",
            height: math.unit(1.8, "meter"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(30, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(10, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Jack", species: ["wolf", "dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/jack/front.svg",
                extra: 1754 / 1640,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(80000, "feet"),
            default: true
        },
        {
            name: "Max size",
            height: math.unit(10, "lightyears")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Cafat", species: ["husky"], tags: ["taur"] },
    {
        upright: {
            height: math.unit(7, "feet"),
            weight: math.unit(170, "lb"),
            name: "Upright",
            image: {
                source: "./media/characters/cafat/upright.svg",
                bottom: 0.01
            }
        },
        uprightFull: {
            height: math.unit(7, "feet"),
            weight: math.unit(170, "lb"),
            name: "Upright (Full)",
            image: {
                source: "./media/characters/cafat/upright-full.svg",
                bottom: 0.01
            }
        },
        side: {
            height: math.unit(5, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/cafat/side.svg"
            }
        },
    },
    [
        {
            name: "Small",
            height: math.unit(7, "feet"),
            default: true
        },
        {
            name: "Large",
            height: math.unit(15.5, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Verin Raharra", species: ["sergal"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/verin-raharra/front.svg",
                extra: 5019 / 4835,
                bottom: 0.023
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 5 / 12, "feet"),
            default: true
        },
        {
            name: "Upsized",
            height: math.unit(20, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Nakata", species: ["hyena"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(230, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/nakata/front.svg",
                extra: 1.005,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7, "feet"),
            default: true
        },
        {
            name: "Big",
            height: math.unit(14, "feet")
        },
        {
            name: "Macro",
            height: math.unit(400, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Lily", species: ["ruppells-fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(4.91, "feet"),
            weight: math.unit(100, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/lily/front.svg",
                extra: 1585 / 1415,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4.91, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sheila", species: ["leopard-seal"], tags: ["anthro"] },
    {
        laying: {
            height: math.unit(4 + 4 / 12, "feet"),
            weight: math.unit(600, "lb"),
            name: "Laying",
            image: {
                source: "./media/characters/sheila/laying.svg",
                extra: 1333 / 1265,
                bottom: 0.16
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4 + 4 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sax", species: ["argonian"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(190, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sax/front.svg",
                extra: 1187 / 973,
                bottom: 0.042
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(4, "inches"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Pandora", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/pandora/front.svg",
                extra: 2720 / 2556,
                bottom: 0.015
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/pandora/back.svg",
                extra: 2720 / 2556,
                bottom: 0.01
            }
        },
        beans: {
            height: math.unit(6 / 8, "feet"),
            name: "Beans",
            image: {
                source: "./media/characters/pandora/beans.svg"
            }
        },
        skirt: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Skirt",
            image: {
                source: "./media/characters/pandora/skirt.svg",
                extra: 1622 / 1525,
                bottom: 0.015
            }
        },
        hoodie: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Hoodie",
            image: {
                source: "./media/characters/pandora/hoodie.svg",
                extra: 1622 / 1525,
                bottom: 0.015
            }
        },
        casual: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Casual",
            image: {
                source: "./media/characters/pandora/casual.svg",
                extra: 1622 / 1525,
                bottom: 0.015
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6, "feet")
        },
        {
            name: "Big Steppy",
            height: math.unit(1, "km"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Venio Darcony", species: ["hyena"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(10, "feet"),
            weight: math.unit(800, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/venio-darcony/side.svg",
                extra: 1373 / 1003,
                bottom: 0.037
            }
        },
        front: {
            height: math.unit(19, "feet"),
            weight: math.unit(800, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/venio-darcony/front.svg"
            }
        },
        back: {
            height: math.unit(19, "feet"),
            weight: math.unit(800, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/venio-darcony/back.svg"
            }
        },
        sideNsfw: {
            height: math.unit(10, "feet"),
            weight: math.unit(800, "kg"),
            name: "Side (NSFW)",
            image: {
                source: "./media/characters/venio-darcony/side-nsfw.svg",
                extra: 1373 / 1003,
                bottom: 0.037
            }
        },
        frontNsfw: {
            height: math.unit(19, "feet"),
            weight: math.unit(800, "kg"),
            name: "Front (NSFW)",
            image: {
                source: "./media/characters/venio-darcony/front-nsfw.svg"
            }
        },
        backNsfw: {
            height: math.unit(19, "feet"),
            weight: math.unit(800, "kg"),
            name: "Back (NSFW)",
            image: {
                source: "./media/characters/venio-darcony/back-nsfw.svg"
            }
        },
        sideArmored: {
            height: math.unit(10, "feet"),
            weight: math.unit(800, "kg"),
            name: "Side (Armored)",
            image: {
                source: "./media/characters/venio-darcony/side-armored.svg",
                extra: 1373 / 1003,
                bottom: 0.037
            }
        },
        frontArmored: {
            height: math.unit(19, "feet"),
            weight: math.unit(900, "kg"),
            name: "Front (Armored)",
            image: {
                source: "./media/characters/venio-darcony/front-armored.svg"
            }
        },
        backArmored: {
            height: math.unit(19, "feet"),
            weight: math.unit(900, "kg"),
            name: "Back (Armored)",
            image: {
                source: "./media/characters/venio-darcony/back-armored.svg"
            }
        },
        sword: {
            height: math.unit(10, "feet"),
            weight: math.unit(50, "lb"),
            name: "Sword",
            image: {
                source: "./media/characters/venio-darcony/sword.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(10, "feet")
        },
        {
            name: "Macro",
            height: math.unit(130, "feet"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(240, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Veski", species: ["shark"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/veski/front.svg",
                extra: 1299 / 1225,
                bottom: 0.04
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/veski/back.svg",
                extra: 1299 / 1225,
                bottom: 0.008
            }
        },
        maw: {
            height: math.unit(1.5 * 1.21, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/veski/maw.svg"
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(2, "km"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Isabelle", species: ["wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 7 / 12, "feet"),
            name: "Front",
            image: {
                source: "./media/characters/isabelle/front.svg",
                extra: 2130 / 1976,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Supermicro",
            height: math.unit(10, "micrometers")
        },
        {
            name: "Micro",
            height: math.unit(1, "inch")
        },
        {
            name: "Tiny",
            height: math.unit(5, "inches")
        },
        {
            name: "Standard",
            height: math.unit(5 + 7 / 12, "inches")
        },
        {
            name: "Macro",
            height: math.unit(80, "meters"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(250, "meters")
        },
        {
            name: "Gigamacro",
            height: math.unit(5, "km")
        },
        {
            name: "Cosmic",
            height: math.unit(2.5e6, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Hanzo", species: ["greninja"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/hanzo/front.svg",
                extra: 374 / 344,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Anna", species: ["greninja"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(130, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/anna/front.svg",
                extra: 169 / 145,
                bottom: 0.06
            }
        },
        full: {
            height: math.unit(4.96, "feet"),
            weight: math.unit(220, "lb"),
            name: "Full",
            image: {
                source: "./media/characters/anna/full.svg",
                extra: 138 / 114,
                bottom: 0.15
            }
        },
        tongue: {
            height: math.unit(2.53, "feet"),
            name: "Tongue",
            image: {
                source: "./media/characters/anna/tongue.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ian Corvid", species: ["crow"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ian-corvid/front.svg",
                extra: 150 / 142,
                bottom: 0.02
            }
        },
        back: {
            height: math.unit(7, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/ian-corvid/back.svg",
                extra: 150 / 143,
                bottom: 0.01
            }
        },
        stomping: {
            height: math.unit(7, "feet"),
            weight: math.unit(150, "lb"),
            name: "Stomping",
            image: {
                source: "./media/characters/ian-corvid/stomping.svg",
                extra: 76 / 72
            }
        },
        sitting: {
            height: math.unit(7 / 1.8, "feet"),
            weight: math.unit(150, "lb"),
            name: "Sitting",
            image: {
                source: "./media/characters/ian-corvid/sitting.svg",
                extra: 1400 / 1269,
                bottom: 0.15
            }
        },
    },
    [
        {
            name: "Tiny Microw",
            height: math.unit(1, "inch")
        },
        {
            name: "Microw",
            height: math.unit(6, "inches")
        },
        {
            name: "Crow",
            height: math.unit(7 + 1 / 12, "feet"),
            default: true
        },
        {
            name: "Macrow",
            height: math.unit(176, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Natalie Kellon", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(147, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/natalie-kellon/front.svg",
                extra: 1214 / 1141,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1 / 16, "inch")
        },
        {
            name: "Tiny",
            height: math.unit(4, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 7 / 12, "feet"),
            default: true
        },
        {
            name: "Amazon",
            height: math.unit(12, "feet")
        },
        {
            name: "Giantess",
            height: math.unit(160, "meters")
        },
        {
            name: "Titaness",
            height: math.unit(800, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Alluria", species: ["megalodon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/alluria/front.svg",
                extra: 806 / 738,
                bottom: 0.01
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/alluria/side.svg",
                extra: 800 / 750,
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/alluria/back.svg",
                extra: 806 / 738,
            }
        },
        frontMaid: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front (Maid)",
            image: {
                source: "./media/characters/alluria/front-maid.svg",
                extra: 806 / 738,
                bottom: 0.01
            }
        },
        sideMaid: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side (Maid)",
            image: {
                source: "./media/characters/alluria/side-maid.svg",
                extra: 800 / 750,
                bottom: 0.005
            }
        },
        backMaid: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back (Maid)",
            image: {
                source: "./media/characters/alluria/back-maid.svg",
                extra: 806 / 738,
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(6, "inches"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kyle", species: ["deer"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kyle/front.svg",
                extra: 1069 / 962,
                bottom: 77.228 / 1727.45
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(150, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Duncan", species: ["kangaroo"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(300, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/duncan/front.svg",
                extra: 1650 / 1482,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(100, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Memory", species: ["sugar-glider"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/memory/front.svg",
                extra: 3641 / 3545,
                bottom: 0.03
            }
        },
        back: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/memory/back.svg",
                extra: 3641 / 3545,
                bottom: 0.025
            }
        },
        frontSkirt: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Front (Skirt)",
            image: {
                source: "./media/characters/memory/front-skirt.svg",
                extra: 3641 / 3545,
                bottom: 0.03
            }
        },
        frontDress: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Front (Dress)",
            image: {
                source: "./media/characters/memory/front-dress.svg",
                extra: 3641 / 3545,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(6, "inches"),
            default: true
        },
        {
            name: "Normal",
            height: math.unit(5 + 4 / 12, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Luno", species: ["rabbit"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(4 + 11 / 12, "feet"),
            weight: math.unit(100, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/luno/front.svg",
                extra: 1535 / 1487,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(3, "inches")
        },
        {
            name: "Normal",
            height: math.unit(4 + 11 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(300, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(700, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Jamesy", species: ["deer"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(170, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/jamesy/front.svg",
                extra: 440 / 382,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(3, "inches")
        },
        {
            name: "Normal",
            height: math.unit(6 + 2 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(300, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(700, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mark", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(160, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mark/front.svg",
                extra: 3300 / 3100,
                bottom: 136.42 / 3440.47
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(120, "meters")
        },
        {
            name: "Bigger Macro",
            height: math.unit(350, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(8, "km"),
            default: true
        },
        {
            name: "Continental",
            height: math.unit(4550, "km")
        },
        {
            name: "Planetary",
            height: math.unit(65000, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mac", species: ["t-rex"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(400, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mac/front.svg",
                extra: 1048 / 987.7,
                bottom: 60 / 1107.6,
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(500, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Bari", species: ["ampharos"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(190, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/bari/front.svg",
                extra: 3156 / 2880,
                bottom: 0.03
            }
        },
        back: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(190, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/bari/back.svg",
                extra: 3260 / 2834,
                bottom: 0.025
            }
        },
        frontPlush: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(190, "lb"),
            name: "Front (Plush)",
            image: {
                source: "./media/characters/bari/front-plush.svg",
                extra: 1112 / 1061,
                bottom: 0.002
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(3, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 2 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(20, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Hunter Misha Raven", species: ["saint-bernard"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(275, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/hunter-misha-raven/front.svg"
            }
        },
    },
    [
        {
            name: "Mortal",
            height: math.unit(6 + 1 / 12, "feet")
        },
        {
            name: "Divine",
            height: math.unit(1.12134e34, "parsecs"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Max Calore", species: ["typhlosion"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 3 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/max-calore/front.svg",
                extra: 1700 / 1648,
                bottom: 0.01
            }
        },
        back: {
            height: math.unit(6 + 3 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/max-calore/back.svg",
                extra: 1700 / 1648,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 3 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Aspen", species: ["mexican-wolf"], tags: ["feral"] },
    {
        side: {
            height: math.unit(2 + 8 / 12, "feet"),
            weight: math.unit(99, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/aspen/side.svg",
                extra: 152 / 138,
                bottom: 0.032
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2 + 8 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sheila (Feral Wolf)", species: ["wolf"], tags: ["feral"] },
    {
        side: {
            height: math.unit(3 + 2 / 12, "feet"),
            weight: math.unit(224, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/sheila-feral-wolf/side.svg",
                extra: 179 / 166,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(3 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Michelle", species: ["fox"], tags: ["feral"] },
    {
        side: {
            height: math.unit(1 + 9 / 12, "feet"),
            weight: math.unit(38, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/michelle/side.svg",
                extra: 147 / 136.7,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1 + 9 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Nino", species: ["stoat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1 + 1 / 12, "feet"),
            weight: math.unit(18, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/nino/front.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1 + 1 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Viola", species: ["stoat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1, "feet"),
            weight: math.unit(16, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/viola/front.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Atlas", species: ["grizzly-bear"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 5 / 12, "feet"),
            weight: math.unit(580, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/atlas/front.svg",
                extra: 298.5 / 290,
                bottom: 0.015
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Davy", species: ["cat"], tags: ["feral"] },
    {
        side: {
            height: math.unit(1 + 10 / 12, "feet"),
            weight: math.unit(25, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/davy/side.svg",
                extra: 200 / 170,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1 + 10 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Fiona", species: ["deer"], tags: ["feral"] },
    {
        side: {
            height: math.unit(4 + 8 / 12, "feet"),
            weight: math.unit(166, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/fiona/side.svg",
                extra: 232 / 220,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4 + 8 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Lyla", species: ["european-honey-buzzard"], tags: ["feral"] },
    {
        front: {
            height: math.unit(2, "feet"),
            weight: math.unit(62, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/lyla/front.svg",
                bottom: 0.1
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Perseus", species: ["monitor-lizard"], tags: ["feral"] },
    {
        side: {
            height: math.unit(1.8, "feet"),
            weight: math.unit(44, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/perseus/side.svg",
                bottom: 0.21
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1.8, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Remus", species: ["great-blue-heron"], tags: ["feral"] },
    {
        side: {
            height: math.unit(4 + 2 / 12, "feet"),
            weight: math.unit(20, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/remus/side.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Raf", species: ["maned-wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(4 + 11 / 12, "feet"),
            weight: math.unit(114, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/raf/front.svg",
                bottom: 20.5/1863
            }
        },
        side: {
            height: math.unit(4 + 11 / 12, "feet"),
            weight: math.unit(114, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/raf/side.svg",
                bottom: 22/1822
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(2, "inches")
        },
        {
            name: "Normal",
            height: math.unit(4 + 11 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(70, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Liam Einarr", species: ["gray-wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.5, "meters"),
            weight: math.unit(68, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/liam-einarr/front.svg",
                extra: 2822 / 2666
            }
        },
        back: {
            height: math.unit(1.5, "meters"),
            weight: math.unit(68, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/liam-einarr/back.svg",
                extra: 2822 / 2666,
                bottom: 0.015
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1.5, "meters"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(150, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(35, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Linda", species: ["bull-terrier"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(75, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/linda/front.svg",
                extra: 930 / 874,
                bottom: 0.004
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Caylex", species: ["sergal"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 8 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/caylex/front.svg",
                extra: 821 / 772,
                bottom: 0.07
            }
        },
        back: {
            height: math.unit(6 + 8 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/caylex/back.svg",
                extra: 821 / 772,
                bottom: 0.022
            }
        },
        hand: {
            height: math.unit(1.25, "feet"),
            name: "Hand",
            image: {
                source: "./media/characters/caylex/hand.svg"
            }
        },
        foot: {
            height: math.unit(1.6, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/caylex/foot.svg"
            }
        },
        armored: {
            height: math.unit(6 + 8 / 12, "feet"),
            weight: math.unit(250, "lb"),
            name: "Armored",
            image: {
                source: "./media/characters/caylex/armored.svg",
                extra: 1420 / 1310,
                bottom: 0.045
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 8 / 12, "feet"),
            default: true
        },
        {
            name: "Normal+",
            height: math.unit(12, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Alana", species: ["wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 6 / 12, "feet"),
            weight: math.unit(288, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/alana/front.svg",
                extra: 679 / 653,
                bottom: 22.5 / 701
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 6 / 12, "feet")
        },
        {
            name: "Large",
            height: math.unit(50, "feet")
        },
        {
            name: "Macro",
            height: math.unit(100, "feet"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(200, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Hasani", species: ["hyena"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(210, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/hasani/front.svg",
                extra: 244 / 232,
                bottom: 0.01
            }
        },
        back: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(210, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/hasani/back.svg",
                extra: 244 / 232,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 1 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(175, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Nita", species: ["african-golden-cat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.82, "meters"),
            weight: math.unit(140, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/nita/front.svg",
                extra: 2473 / 2363,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1.82, "m")
        },
        {
            name: "Macro",
            height: math.unit(300, "m")
        },
        {
            name: "Mistake Canon",
            height: math.unit(0.5, "miles"),
            default: true
        },
        {
            name: "Big Mistake",
            height: math.unit(13, "miles")
        },
        {
            name: "Playing God",
            height: math.unit(2450, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Shiriko", species: ["kobold"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(4, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/shiriko/front.svg",
                extra: 195 / 188
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Deja", species: ["kangaroo"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            name: "front",
            image: {
                source: "./media/characters/deja/front.svg",
                extra: 926 / 840,
                bottom: 0.07
            }
        },
    },
    [
        {
            name: "Planck Length",
            height: math.unit(1.6e-35, "meters")
        },
        {
            name: "Normal",
            height: math.unit(30.48, "meters"),
            default: true
        },
        {
            name: "Universal",
            height: math.unit(8.8e26, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Anima", species: ["black-panther"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(8, "feet"),
            weight: math.unit(6300, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/anima/side.svg",
                bottom: 0.035
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Bianca", species: ["cat", "rabbit"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(350, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/bianca/front.svg",
                extra: 234 / 225,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Adinia", species: ["kelpie", "nykur"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/adinia/front.svg",
                extra: 1845 / 1672,
                bottom: 0.02
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/adinia/back.svg",
                extra: 1845 / 1672,
                bottom: 0.002
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(11 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Lykasa", species: ["monster"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(3, "meters"),
            weight: math.unit(200, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/lykasa/front.svg",
                extra: 1076 / 976,
                bottom: 0.06
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(3, "meters")
        },
        {
            name: "Kaiju",
            height: math.unit(120, "meters"),
            default: true
        },
        {
            name: "Mega Kaiju",
            height: math.unit(240, "km")
        },
        {
            name: "Giga Kaiju",
            height: math.unit(400, "megameters")
        },
        {
            name: "Tera Kaiju",
            height: math.unit(800, "gigameters")
        },
        {
            name: "Kaiju Dragon Goddess",
            height: math.unit(26, "zettaparsecs")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Malfaren", species: ["dragon"], tags: ["feral"] },
    {
        side: {
            height: math.unit(283 / 124 * 6, "feet"),
            weight: math.unit(35000, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/malfaren/side.svg",
                extra: 2500 / 1010,
                bottom: 0.01
            }
        },
        front: {
            height: math.unit(22.36, "feet"),
            weight: math.unit(35000, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/malfaren/front.svg",
                extra: 1631 / 1476,
                bottom: 0.01
            }
        },
        maw: {
            height: math.unit(6.9, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/malfaren/maw.svg"
            }
        },
    },
    [
        {
            name: "Big",
            height: math.unit(283 / 162 * 6, "feet"),
        },
        {
            name: "Bigger",
            height: math.unit(283 / 124 * 6, "feet")
        },
        {
            name: "Massive",
            height: math.unit(283 / 92 * 6, "feet"),
            default: true
        },
        {
            name: "👀💦",
            height: math.unit(283 / 73 * 6, "feet"),
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kernel", species: ["wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.7, "m"),
            weight: math.unit(70, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/kernel/front.svg",
                extra: 222 / 210,
                bottom: 0.007
            }
        },
    },
    [
        {
            name: "Nano",
            height: math.unit(17, "micrometers")
        },
        {
            name: "Micro",
            height: math.unit(1.7, "mm")
        },
        {
            name: "Small",
            height: math.unit(1.7, "cm")
        },
        {
            name: "Normal",
            height: math.unit(1.7, "m"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Jayne Folest", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.75, "meters"),
            weight: math.unit(65, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/jayne-folest/front.svg",
                extra: 2115 / 2007,
                bottom: 0.02
            }
        },
        back: {
            height: math.unit(1.75, "meters"),
            weight: math.unit(65, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/jayne-folest/back.svg",
                extra: 2115 / 2007,
                bottom: 0.005
            }
        },
        frontClothed: {
            height: math.unit(1.75, "meters"),
            weight: math.unit(65, "kg"),
            name: "Front (Clothed)",
            image: {
                source: "./media/characters/jayne-folest/front-clothed.svg",
                extra: 2115 / 2007,
                bottom: 0.035
            }
        },
        hand: {
            height: math.unit(1 / 1.260, "feet"),
            name: "Hand",
            image: {
                source: "./media/characters/jayne-folest/hand.svg"
            }
        },
        foot: {
            height: math.unit(1 / 0.918, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/jayne-folest/foot.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(4, "cm")
        },
        {
            name: "Normal",
            height: math.unit(1.75, "meters")
        },
        {
            name: "Macro",
            height: math.unit(47.5, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Algier", species: ["mouse"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(180, "cm"),
            weight: math.unit(70, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/algier/front.svg",
                extra: 596 / 572,
                bottom: 0.04
            }
        },
        back: {
            height: math.unit(180, "cm"),
            weight: math.unit(70, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/algier/back.svg",
                extra: 596 / 572,
                bottom: 0.025
            }
        },
        frontdressed: {
            height: math.unit(180, "cm"),
            weight: math.unit(150, "kg"),
            name: "Front-dressed",
            image: {
                source: "./media/characters/algier/front-dressed.svg",
                extra: 596 / 572,
                bottom: 0.038
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(5, "cm")
        },
        {
            name: "Normal",
            height: math.unit(180, "cm"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(64, "m")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Pretzel", species: ["synx"], tags: ["anthro"] },
    {
        upright: {
            height: math.unit(7, "feet"),
            weight: math.unit(300, "lb"),
            name: "Upright",
            image: {
                source: "./media/characters/pretzel/upright.svg",
                extra: 534 / 522,
                bottom: 0.065
            }
        },
        sprawling: {
            height: math.unit(3.75, "feet"),
            weight: math.unit(300, "lb"),
            name: "Sprawling",
            image: {
                source: "./media/characters/pretzel/sprawling.svg",
                extra: 314 / 281,
                bottom: 0.1
            }
        },
        tongue: {
            height: math.unit(2, "feet"),
            name: "Tongue",
            image: {
                source: "./media/characters/pretzel/tongue.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7, "feet"),
            default: true
        },
        {
            name: "Oversized",
            height: math.unit(15, "feet")
        },
        {
            name: "Huge",
            height: math.unit(30, "feet")
        },
        {
            name: "Macro",
            height: math.unit(250, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Roxi", species: ["fox"], tags: ["anthro", "feral"] },
    {
        sideFront: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front Side",
            image: {
                source: "./media/characters/roxi/side-front.svg",
                extra: 2924 / 2717,
                bottom: 0.08
            }
        },
        sideBack: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Back Side",
            image: {
                source: "./media/characters/roxi/side-back.svg",
                extra: 2904 / 2693,
                bottom: 0.06
            }
        },
        front: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/roxi/front.svg",
                extra: 2028 / 1907,
                bottom: 0.01
            }
        },
        frontAlt: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front (Alt)",
            image: {
                source: "./media/characters/roxi/front-alt.svg",
                extra: 1828 / 1798,
                bottom: 0.01
            }
        },
        sitting: {
            height: math.unit(2.8, "feet"),
            weight: math.unit(120, "lb"),
            name: "Sitting",
            image: {
                source: "./media/characters/roxi/sitting.svg",
                extra: 2660 / 2462,
                bottom: 0.1
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Shadow", species: ["dragon"], tags: ["feral"] },
    {
        side: {
            height: math.unit(55, "feet"),
            weight: math.unit(153, "tons"),
            name: "Side",
            image: {
                source: "./media/characters/shadow/side.svg",
                extra: 701 / 628,
                bottom: 0.02
            }
        },
        flying: {
            height: math.unit(145, "feet"),
            weight: math.unit(153, "tons"),
            name: "Flying",
            image: {
                source: "./media/characters/shadow/flying.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(55, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Marcie", species: ["kangaroo"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(200, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/marcie/front.svg",
                extra: 960 / 876,
                bottom: 58 / 1017.87
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(1, "mile"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kachina", species: ["wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(200, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kachina/front.svg",
                extra: 1290.68 / 1119,
                bottom: 36.5 / 1327.18
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kash", species: ["canine"], tags: ["feral"] },
    {
        looking: {
            height: math.unit(2, "meters"),
            weight: math.unit(300, "kg"),
            name: "Looking",
            image: {
                source: "./media/characters/kash/looking.svg",
                extra: 474 / 344,
                bottom: 0.03
            }
        },
        side: {
            height: math.unit(2, "meters"),
            weight: math.unit(300, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/kash/side.svg",
                extra: 302 / 251,
                bottom: 0.03
            }
        },
        front: {
            height: math.unit(2, "meters"),
            weight: math.unit(300, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/kash/front.svg",
                extra: 495 / 360,
                bottom: 0.015
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2, "meters"),
            default: true
        },
        {
            name: "Big",
            height: math.unit(3, "meters")
        },
        {
            name: "Large",
            height: math.unit(5, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Lalim", species: ["dragon"], tags: ["feral"] },
    {
        feeding: {
            height: math.unit(6.7, "feet"),
            weight: math.unit(350, "lb"),
            name: "Feeding",
            image: {
                source: "./media/characters/lalim/feeding.svg",
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6.7, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "De'Vout", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(9.5, "feet"),
            weight: math.unit(600, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/de'vout/front.svg",
                extra: 1443 / 1328,
                bottom: 0.025
            }
        },
        back: {
            height: math.unit(9.5, "feet"),
            weight: math.unit(600, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/de'vout/back.svg",
                extra: 1443 / 1328
            }
        },
        frontDressed: {
            height: math.unit(9.5, "feet"),
            weight: math.unit(600, "lb"),
            name: "Front (Dressed",
            image: {
                source: "./media/characters/de'vout/front-dressed.svg",
                extra: 1443 / 1328,
                bottom: 0.025
            }
        },
        backDressed: {
            height: math.unit(9.5, "feet"),
            weight: math.unit(600, "lb"),
            name: "Back (Dressed",
            image: {
                source: "./media/characters/de'vout/back-dressed.svg",
                extra: 1443 / 1328
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(9.5, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Talana", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(225, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/talana/front.svg",
                extra: 1410 / 1300,
                bottom: 0.015
            }
        },
        frontDressed: {
            height: math.unit(8, "feet"),
            weight: math.unit(225, "lb"),
            name: "Front (Dressed",
            image: {
                source: "./media/characters/talana/front-dressed.svg",
                extra: 1410 / 1300,
                bottom: 0.015
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Xeauvok", species: ["monster"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(7.2, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/xeauvok/side.svg",
                extra: 1975 / 1523,
                bottom: 0.07
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7.2, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Zara", species: ["human", "horse"], tags: ["taur"] },
    {
        side: {
            height: math.unit(10, "feet"),
            weight: math.unit(900, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/zara/side.svg",
                extra: 504 / 498
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(10, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Richard (Dragon)", species: ["dragon"], tags: ["feral"] },
    {
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/richard-dragon/side.svg",
                extra: 845 / 340,
                bottom: 0.017
            }
        },
        maw: {
            height: math.unit(2.97, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/richard-dragon/maw.svg"
            }
        },
    },
    [

    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Richard (Smeargle)", species: ["smeargle"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(4, "feet"),
            weight: math.unit(100, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/richard-smeargle/front.svg",
                extra: 2952 / 2820,
                bottom: 0.028
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4, "feet"),
            default: true
        },
        {
            name: "Dynamax",
            height: math.unit(20, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Klay", species: ["flying-fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(110, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/klay/front.svg",
                extra: 962 / 883,
                bottom: 0.04
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(110, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/klay/back.svg",
                extra: 962 / 883
            }
        },
        beans: {
            height: math.unit(1.15, "feet"),
            name: "Beans",
            image: {
                source: "./media/characters/klay/beans.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(6, "inches")
        },
        {
            name: "Mini",
            height: math.unit(3, "feet")
        },
        {
            name: "Normal",
            height: math.unit(6, "feet"),
            default: true
        },
        {
            name: "Big",
            height: math.unit(25, "feet")
        },
        {
            name: "Macro",
            height: math.unit(100, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(400, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Marcus", species: ["skunk"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(160, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/marcus/front.svg",
                extra: 734 / 676,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Little",
            height: math.unit(6, "feet")
        },
        {
            name: "Normal",
            height: math.unit(110, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(250, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(1000, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Claude DelRoute", species: ["goat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(275, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/claude-delroute/front.svg",
                extra: 230 / 214,
                bottom: 0.007
            }
        },
        side: {
            height: math.unit(7, "feet"),
            weight: math.unit(275, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/claude-delroute/side.svg",
                extra: 222 / 214,
                bottom: 0.01
            }
        },
        back: {
            height: math.unit(7, "feet"),
            weight: math.unit(275, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/claude-delroute/back.svg",
                extra: 230 / 214,
                bottom: 0.015
            }
        },
        maw: {
            height: math.unit(0.6407, "meters"),
            name: "Maw",
            image: {
                source: "./media/characters/claude-delroute/maw.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7, "feet"),
            default: true
        },
        {
            name: "Lorge",
            height: math.unit(20, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Dragonien", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(8 + 4 / 12, "feet"),
            weight: math.unit(600, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/dragonien/front.svg",
                extra: 100 / 94,
                bottom: 3.3 / 103.3445
            }
        },
        back: {
            height: math.unit(8 + 4 / 12, "feet"),
            weight: math.unit(600, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/dragonien/back.svg",
                extra: 776 / 746,
                bottom: 6.4 / 782.0616
            }
        },
        foot: {
            height: math.unit(1.54, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/dragonien/foot.svg",
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8 + 4 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(200, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(1, "mile")
        },
        {
            name: "Gigamacro",
            height: math.unit(1000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Desta", species: ["dratini"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(110, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/desta/front.svg",
                extra: 767/726,
                bottom: 11.7/779
            }
        },
        back: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(110, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/desta/back.svg",
                extra: 777/728,
                bottom: 6/784
            }
        },
        frontAlt: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(110, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/desta/front-alt.svg",
                extra: 1482 / 1417
            }
        },
        side: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(110, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/desta/side.svg",
                extra: 2579 / 2491,
                bottom: 0.053
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(6, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 2 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(62, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(1800, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Storm Alystar", species: ["demon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(10, "feet"),
            weight: math.unit(700, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/storm-alystar/front.svg",
                extra: 2112 / 1898,
                bottom: 0.034
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(3.5, "inches")
        },
        {
            name: "Normal",
            height: math.unit(10, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(400, "feet")
        },
        {
            name: "Deific",
            height: math.unit(60, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ilia", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2.35, "meters"),
            weight: math.unit(119, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/ilia/front.svg",
                extra: 1285 / 1255,
                bottom: 0.06
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2.35, "meters")
        },
        {
            name: "Macro",
            height: math.unit(140, "meters"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(100, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "KingDead", species: ["wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 5 / 12, "feet"),
            weight: math.unit(190, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kingdead/front.svg",
                extra: 1228 / 1177
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(7, "inches")
        },
        {
            name: "Normal",
            height: math.unit(6 + 5 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(150, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(200, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kyrehx", species: ["tigrex"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(600, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kyrehx/front.svg",
                extra: 1195 / 1095,
                bottom: 0.034
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(2, "inches")
        },
        {
            name: "Normal",
            height: math.unit(8, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(255, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Xang", species: ["zangoose"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(0.935 * (6 + 8 / 12), "feet"),
            weight: math.unit(184, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/xang/front.svg",
                extra: 845 / 755
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(0.935 * (6 + 8 / 12), "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(0.935 * 146, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(0.935 * 3, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Doc Weardno", species: ["fennec-fox"], tags: ["anthro"] },
    {
        frontDressed: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(140, "lb"),
            name: "Front (Dressed)",
            image: {
                source: "./media/characters/doc-weardno/front-dressed.svg",
                extra: 263 / 234
            }
        },
        backDressed: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(140, "lb"),
            name: "Back (Dressed)",
            image: {
                source: "./media/characters/doc-weardno/back-dressed.svg",
                extra: 266 / 238
            }
        },
        front: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(140, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/doc-weardno/front.svg",
                extra: 254 / 233
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(3, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 7 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(25, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(2, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Seth Whilst", species: ["snake"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(153, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/seth-whilst/front.svg",
                bottom: 0.07
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(5, "inches")
        },
        {
            name: "Normal",
            height: math.unit(6 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Pocket Jabari", species: ["mouse"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(3, "inches"),
            weight: math.unit(8, "grams"),
            name: "Front",
            image: {
                source: "./media/characters/pocket-jabari/front.svg",
                extra: 1024 / 974,
                bottom: 0.039
            }
        },
    },
    [
        {
            name: "Minimicro",
            height: math.unit(8, "mm")
        },
        {
            name: "Micro",
            height: math.unit(3, "inches"),
            default: true
        },
        {
            name: "Normal",
            height: math.unit(3, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sapphy", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(15, "feet"),
            weight: math.unit(3280, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sapphy/front.svg",
                extra: 671 / 577,
                bottom: 0.085
            }
        },
        back: {
            height: math.unit(15, "feet"),
            weight: math.unit(3280, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/sapphy/back.svg",
                extra: 631 / 607,
                bottom: 0.045
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(15, "feet")
        },
        {
            name: "Casual Macro",
            height: math.unit(120, "feet")
        },
        {
            name: "Macro",
            height: math.unit(2150, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(8, "miles")
        },
        {
            name: "Galaxy Mom",
            height: math.unit(6, "megalightyears")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kiro", species: ["fox", "wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(170, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kiro/front.svg",
                extra: 1064 / 1012,
                bottom: 0.052
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(6, "inches")
        },
        {
            name: "Normal",
            height: math.unit(6, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(72, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Irishfox", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(175, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/irishfox/front.svg",
                extra: 1912 / 1680,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Nano",
            height: math.unit(1, "mm")
        },
        {
            name: "Micro",
            height: math.unit(2, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(45, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Aronai Sieyes", species: ["cross-fox", "synth"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/aronai-sieyes/front.svg",
                extra: 1556 / 1480,
                bottom: 0.015
            }
        },
        side: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/aronai-sieyes/side.svg",
                extra: 1433 / 1390,
                bottom: 0.0393
            }
        },
        back: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/aronai-sieyes/back.svg",
                extra: 1544 / 1494,
                bottom: 0.02
            }
        },
        frontClothed: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front (Clothed)",
            image: {
                source: "./media/characters/aronai-sieyes/front-clothed.svg",
                extra: 1582 / 1527
            }
        },
        feral: {
            height: math.unit(18, "feet"),
            weight: math.unit(150 * 3 * 3 * 3, "lb"),
            name: "Feral",
            image: {
                source: "./media/characters/aronai-sieyes/feral.svg",
                extra: 1530 / 1240,
                bottom: 0.035
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(2, "inches")
        },
        {
            name: "Normal",
            height: math.unit(6 + 1 / 12, "feet"),
            default: true
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Xuna", species: ["wickerbeast"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(12, "feet"),
            weight: math.unit(410, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/xuna/front.svg",
                extra: 2184 / 1980
            }
        },
        side: {
            height: math.unit(12, "feet"),
            weight: math.unit(410, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/xuna/side.svg",
                extra: 2184 / 1980
            }
        },
        back: {
            height: math.unit(12, "feet"),
            weight: math.unit(410, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/xuna/back.svg",
                extra: 2184 / 1980
            }
        },
    },
    [
        {
            name: "Nano glow",
            height: math.unit(10, "nm")
        },
        {
            name: "Micro floof",
            height: math.unit(0.3, "m")
        },
        {
            name: "Huggable softy boi",
            height: math.unit(3.6576, "m"),
            default: true
        },
        {
            name: "Admirable floof",
            height: math.unit(80, "meters")
        },
        {
            name: "Gentle macro",
            height: math.unit(300, "meters")
        },
        {
            name: "Very careful floof",
            height: math.unit(3200, "meters")
        },
        {
            name: "The mega floof",
            height: math.unit(36000, "meters")
        },
        {
            name: "Giga-fur-Wicker",
            height: math.unit(4800000, "meters")
        },
        {
            name: "Licky world",
            height: math.unit(20000000, "meters")
        },
        {
            name: "Floofy cyan sun",
            height: math.unit(1500000000, "meters")
        },
        {
            name: "Milky Wicker",
            height: math.unit(1000000000000000000000, "meters")
        },
        {
            name: "The observing Wicker",
            height: math.unit(999999999999999999999999999, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Arokha Sieyes", species: ["kitsune"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/arokha-sieyes/front.svg",
                extra: 1425 / 1284,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(30, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Arokh Sieyes", species: ["kitsune"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/arokh-sieyes/front.svg",
                extra: 1830 / 1769,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6, "feet")
        },
        {
            name: "Macro",
            height: math.unit(30, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Goldeneye", species: ["gryphon"], tags: ["feral"] },
    {
        side: {
            height: math.unit(13 + 1 / 12, "feet"),
            weight: math.unit(8.5, "tonnes"),
            name: "Side",
            image: {
                source: "./media/characters/goldeneye/side.svg",
                extra: 1182 / 778,
                bottom: 0.067
            }
        },
        paw: {
            height: math.unit(3.4, "feet"),
            name: "Paw",
            image: {
                source: "./media/characters/goldeneye/paw.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(13 + 1 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Leonardo Lycheborne", species: ["wolf", "dog", "barghest"], tags: ["anthro", "feral", "taur"] },
    {
        front: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(210, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/leonardo-lycheborne/front.svg",
                extra: 390 / 365,
                bottom: 0.032
            }
        },
        side: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(210, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/leonardo-lycheborne/side.svg",
                extra: 390 / 365,
                bottom: 0.005
            }
        },
        back: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(210, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/leonardo-lycheborne/back.svg",
                extra: 392 / 366,
                bottom: 0.01
            }
        },
        hand: {
            height: math.unit(1.08, "feet"),
            name: "Hand",
            image: {
                source: "./media/characters/leonardo-lycheborne/hand.svg"
            }
        },
        foot: {
            height: math.unit(1.32, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/leonardo-lycheborne/foot.svg"
            }
        },
        were: {
            height: math.unit(20, "feet"),
            weight: math.unit(7800, "lb"),
            name: "Were",
            image: {
                source: "./media/characters/leonardo-lycheborne/were.svg",
                extra: 308 / 294,
                bottom: 0.048
            }
        },
        feral: {
            height: math.unit(7.5, "feet"),
            weight: math.unit(600, "lb"),
            name: "Feral",
            image: {
                source: "./media/characters/leonardo-lycheborne/feral.svg",
                extra: 210 / 186,
                bottom: 0.108
            }
        },
        taur: {
            height: math.unit(11, "feet"),
            weight: math.unit(3300, "lb"),
            name: "Taur",
            image: {
                source: "./media/characters/leonardo-lycheborne/taur.svg",
                extra: 320 / 303,
                bottom: 0.025
            }
        },
        barghest: {
            height: math.unit(11, "feet"),
            weight: math.unit(1300, "lb"),
            name: "Barghest",
            image: {
                source: "./media/characters/leonardo-lycheborne/barghest.svg",
                extra: 323 / 302,
                bottom: 0.027
            }
        },
        dick: {
            height: math.unit((6 + 1 / 12) / 4.09, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/leonardo-lycheborne/dick.svg"
            }
        },
        dickWere: {
            height: math.unit((20) / 3.8, "feet"),
            name: "Dick (Were)",
            image: {
                source: "./media/characters/leonardo-lycheborne/dick.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 1 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Jet", species: ["hyena"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(10, "feet"),
            weight: math.unit(350, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/jet/front.svg",
                extra: 2050 / 1980,
                bottom: 0.013
            }
        },
        back: {
            height: math.unit(10, "feet"),
            weight: math.unit(350, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/jet/back.svg",
                extra: 2050 / 1980,
                bottom: 0.013
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(6, "inches")
        },
        {
            name: "Normal",
            height: math.unit(10, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(100, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Tanarath", species: ["dragonoid"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(15, "feet"),
            weight: math.unit(2800, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/tanarath/front.svg",
                extra: 2392 / 2220,
                bottom: 0.03
            }
        },
        back: {
            height: math.unit(15, "feet"),
            weight: math.unit(2800, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/tanarath/back.svg",
                extra: 2392 / 2220,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(15, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Patty CattyBatty", species: ["cat", "bat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 1 / 12, "feet"),
            weight: math.unit(175, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/patty-cattybatty/front.svg",
                extra: 908 / 874,
                bottom: 0.025
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1, "inch")
        },
        {
            name: "Normal",
            height: math.unit(7 + 1 / 12, "feet")
        },
        {
            name: "Mini Macro",
            height: math.unit(155, "feet")
        },
        {
            name: "Macro",
            height: math.unit(1077, "feet")
        },
        {
            name: "Mega Macro",
            height: math.unit(47650, "feet"),
            default: true
        },
        {
            name: "Giga Macro",
            height: math.unit(440, "miles")
        },
        {
            name: "Tera Macro",
            height: math.unit(8700, "miles")
        },
        {
            name: "Planetary Macro",
            height: math.unit(32700, "miles")
        },
        {
            name: "Solar Macro",
            height: math.unit(550000, "miles")
        },
        {
            name: "Celestial Macro",
            height: math.unit(2.5, "AU")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Cappu", species: ["sheep"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(4 + 5 / 12, "feet"),
            weight: math.unit(90, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/cappu/front.svg",
                extra: 1247 / 1152,
                bottom: 0.012
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sebi", species: ["cat", "demon", "wolf"], tags: ["anthro"] },
    {
        frontDressed: {
            height: math.unit(70, "cm"),
            weight: math.unit(6, "kg"),
            name: "Front (Dressed)",
            image: {
                source: "./media/characters/sebi/front-dressed.svg",
                extra: 713.5 / 686.5,
                bottom: 0.003
            }
        },
        front: {
            height: math.unit(70, "cm"),
            weight: math.unit(5, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/sebi/front.svg",
                extra: 713.5 / 686.5,
                bottom: 0.003
            }
        }
    },
    [
        {
            name: "Normal",
            height: math.unit(70, "cm"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(8, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Typhek", species: ["t-rex"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/typhek/front.svg",
                extra: 1948 / 1929,
                bottom: 0.025
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/typhek/side.svg",
                extra: 2034 / 2010,
                bottom: 0.003
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/typhek/back.svg",
                extra: 2005 / 1978,
                bottom: 0.004
            }
        },
        palm: {
            height: math.unit(1.2, "feet"),
            name: "Palm",
            image: {
                source: "./media/characters/typhek/palm.svg"
            }
        },
        fist: {
            height: math.unit(1.1, "feet"),
            name: "Fist",
            image: {
                source: "./media/characters/typhek/fist.svg"
            }
        },
        foot: {
            height: math.unit(1.57, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/typhek/foot.svg"
            }
        },
        sole: {
            height: math.unit(2.05, "feet"),
            name: "Sole",
            image: {
                source: "./media/characters/typhek/sole.svg"
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(40, "stories"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(1, "mile")
        },
        {
            name: "Gigamacro",
            height: math.unit(4000, "solarradii")
        },
        {
            name: "Universal",
            height: math.unit(1.1, "universes")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kassy", species: ["sheep"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/kassy/side.svg",
                extra: 1280 / 1225,
                bottom: 0.002
            }
        },
        front: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kassy/front.svg",
                extra: 1280 / 1225,
                bottom: 0.025
            }
        },
        back: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/kassy/back.svg",
                extra: 1280 / 1225,
                bottom: 0.002
            }
        },
        foot: {
            height: math.unit(1.266, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/kassy/foot.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 7 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(137, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(1, "mile")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Neil", species: ["deer"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(200, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/neil/front.svg",
                extra: 1326 / 1250,
                bottom: 0.023
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 1 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(200, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Atticus", species: ["pig"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(190, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/atticus/front.svg",
                extra: 2934 / 2785,
                bottom: 0.025
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(180, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Milo", species: ["scolipede"], tags: ["feral"] },
    {
        side: {
            height: math.unit(9, "feet"),
            weight: math.unit(650, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/milo/side.svg",
                extra: 2644 / 2310,
                bottom: 0.032
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(9, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(300, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ijzer", species: ["dragon"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(8, "meters"),
            weight: math.unit(90000, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/ijzer/side.svg",
                extra: 2756 / 1600,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Small",
            height: math.unit(3, "meters")
        },
        {
            name: "Normal",
            height: math.unit(8, "meters"),
            default: true
        },
        {
            name: "Normal+",
            height: math.unit(10, "meters")
        },
        {
            name: "Bigger",
            height: math.unit(24, "meters")
        },
        {
            name: "Huge",
            height: math.unit(80, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Luca Cervicum", species: ["deer"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(153, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/luca-cervicum/front.svg",
                extra: 370 / 327,
                bottom: 0.015
            }
        },
        back: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(153, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/luca-cervicum/back.svg",
                extra: 367 / 333,
                bottom: 0.005
            }
        },
        frontGear: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(173, "lb"),
            name: "Front (Gear)",
            image: {
                source: "./media/characters/luca-cervicum/front-gear.svg",
                extra: 377 / 333,
                bottom: 0.006
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Oliver", species: ["goodra"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 1 / 12, "feet"),
            weight: math.unit(304, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/oliver/front.svg",
                extra: 157 / 143,
                bottom: 0.08
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 1 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Shane", species: ["gray-fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(140, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/shane/front.svg",
                extra: 304 / 289,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Shin", species: ["rat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(178, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/shin/front.svg",
                extra: 159 / 151,
                bottom: 0.015
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Xerxes", species: ["zoroark"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 10 / 12, "feet"),
            weight: math.unit(168, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/xerxes/front.svg",
                extra: 282 / 260,
                bottom: 0.045
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 10 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Chaska", species: ["maned-wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 7 / 12, "feet"),
            weight: math.unit(208, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/chaska/front.svg",
                extra: 332 / 319,
                bottom: 0.015
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Enuk", species: ["black-backed-jackal"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(208, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/enuk/front.svg",
                extra: 437 / 406,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 8 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Bruun", species: ["black-backed-jackal"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 10 / 12, "feet"),
            weight: math.unit(252, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/bruun/front.svg",
                extra: 197 / 187,
                bottom: 0.012
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 10 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Alexeev", species: ["samurott"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 10 / 12, "feet"),
            weight: math.unit(255, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/alexeev/front.svg",
                extra: 213 / 200,
                bottom: 0.05
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 10 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Evelyn", species: ["thylacine"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2 + 8 / 12, "feet"),
            weight: math.unit(22, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/evelyn/front.svg",
                extra: 208 / 180
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2 + 8 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Inca", species: ["gecko"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(139, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/inca/front.svg",
                extra: 294 / 291,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Magdalene", species: ["mewtwo-y", "mew"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 1 / 12, "feet"),
            weight: math.unit(84, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/magdalene/front.svg",
                extra: 293 / 273
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 1 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mera", species: ["flying-fox", "spectral-bat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 3 / 12, "feet"),
            weight: math.unit(185, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mera/front.svg",
                extra: 291 / 277,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 3 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ceres", species: ["zoroark"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 7 / 12, "feet"),
            weight: math.unit(160, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ceres/front.svg",
                extra: 1023 / 950,
                bottom: 0.027
            }
        },
        back: {
            height: math.unit(6 + 7 / 12, "feet"),
            weight: math.unit(160, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/ceres/back.svg",
                extra: 1023 / 950
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kris", species: ["ninetales"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 10 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kris/front.svg",
                extra: 885 / 803,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 10 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Taluthus", species: ["kitsune"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(120, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/taluthus/front.svg",
                extra: 903 / 833,
                bottom: 0.015
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(300, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Dawn", species: ["luxray"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(145, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/dawn/front.svg",
                extra: 2094 / 2016,
                bottom: 0.025
            }
        },
        back: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(160, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/dawn/back.svg",
                extra: 2112 / 2080,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Arador", species: ["water-dragon"], tags: ["anthro"] },
    {
        anthro: {
            height: math.unit(8 + 3 / 12, "feet"),
            weight: math.unit(450, "lb"),
            name: "Anthro",
            image: {
                source: "./media/characters/arador/anthro.svg",
                extra: 1835 / 1718,
                bottom: 0.025
            }
        },
        feral: {
            height: math.unit(4, "feet"),
            weight: math.unit(200, "lb"),
            name: "Feral",
            image: {
                source: "./media/characters/arador/feral.svg",
                extra: 1683 / 1514,
                bottom: 0.07
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8 + 3 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(82.5, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Dharsi", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 10 / 12, "feet"),
            weight: math.unit(125, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/dharsi/front.svg",
                extra: 716 / 630,
                bottom: 0.035
            }
        },
    },
    [
        {
            name: "Nano",
            height: math.unit(100, "nm")
        },
        {
            name: "Micro",
            height: math.unit(2, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 10 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(1000, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(10, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(3000, "miles")
        },
        {
            name: "Teramacro",
            height: math.unit(500000, "miles")
        },
        {
            name: "Teramacro+",
            height: math.unit(30, "galaxies")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Deathy", species: ["wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/deathy/front.svg",
                extra: 1552 / 1463,
                bottom: 0.025
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/deathy/side.svg",
                extra: 1604 / 1455,
                bottom: 0.025
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/deathy/back.svg",
                extra: 1580 / 1463,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(5, "millimeters")
        },
        {
            name: "Normal",
            height: math.unit(6 + 5 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Juniper", species: ["snake"], tags: ["naga", "goo"] },
    {
        front: {
            height: math.unit(16, "feet"),
            weight: math.unit(4000, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/juniper/front.svg",
                bottom: 0.04
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(16, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Hipster", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/hipster/front.svg",
                extra: 1312 / 1209,
                bottom: 0.025
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/hipster/back.svg",
                extra: 1281 / 1196,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1, "mm")
        },
        {
            name: "Normal",
            height: math.unit(4, "inches"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(500, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(1000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Tendirmuldr", species: ["cow"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/tendirmuldr/front.svg",
                extra: 1878 / 1772,
                bottom: 0.015
            }
        },
    },
    [
        {
            name: "Megamacro",
            height: math.unit(1500, "miles"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mort", species: ["demon"], tags: ["feral"] },
    {
        front: {
            height: math.unit(14, "feet"),
            weight: math.unit(12000, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mort/front.svg",
                extra: 365 / 318,
                bottom: 0.01
            }
        },
        side: {
            height: math.unit(14, "feet"),
            weight: math.unit(12000, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/mort/side.svg",
                extra: 365 / 318,
                bottom: 0.052
            },
            default: true
        },
        back: {
            height: math.unit(14, "feet"),
            weight: math.unit(12000, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/mort/back.svg",
                extra: 371 / 332,
                bottom: 0.18
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(14, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Lycoa", species: ["sergal"], tags: ["anthro", "goo"] },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(1, "ton"),
            name: "Front",
            image: {
                source: "./media/characters/lycoa/front.svg",
                extra: 1875 / 1789,
                bottom: 0.022
            }
        },
        back: {
            height: math.unit(8, "feet"),
            weight: math.unit(1, "ton"),
            name: "Back",
            image: {
                source: "./media/characters/lycoa/back.svg",
                extra: 1835 / 1781,
                bottom: 0.03
            }
        },
        head: {
            height: math.unit(2.1, "feet"),
            name: "Head",
            image: {
                source: "./media/characters/lycoa/head.svg"
            }
        },
        tailmaw: {
            height: math.unit(1.9, "feet"),
            name: "Tailmaw",
            image: {
                source: "./media/characters/lycoa/tailmaw.svg"
            }
        },
        tentacles: {
            height: math.unit(2.1, "feet"),
            name: "Tentacles",
            image: {
                source: "./media/characters/lycoa/tentacles.svg"
            }
        },
        dick: {
            height: math.unit(1.73, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/lycoa/dick.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(30, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Naldara", species: ["jackalope"], tags: ["anthro", "naga"] },
    {
        front: {
            height: math.unit(4 + 2 / 12, "feet"),
            weight: math.unit(70, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/naldara/front.svg",
                extra: 841 / 720,
                bottom: 0.04
            }
        },
        naga: {
            height: math.unit(23, "feet"),
            weight: math.unit(15000, "kg"),
            name: "Naga",
            image: {
                source: "./media/characters/naldara/naga.svg",
                extra: 3290/2959,
                bottom: 124/3432
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Briar", species: ["hyena"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(13 + 7 / 12, "feet"),
            weight: math.unit(1500, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/briar/front.svg",
                extra: 626 / 596,
                bottom: 0.08
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(13 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Vanguard", species: ["otter", "alligator"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(10, "feet"),
            weight: math.unit(500, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/vanguard/side.svg",
                extra: 502 / 425,
                bottom: 0.087
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(10, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Artemis", species: ["renamon", "construct"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7.5, "feet"),
            weight: math.unit(2, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/artemis/front.svg",
                extra: 1192 / 1075,
                bottom: 0.07
            }
        },
        frontNsfw: {
            height: math.unit(7.5, "feet"),
            weight: math.unit(2, "lb"),
            name: "Front (NSFW)",
            image: {
                source: "./media/characters/artemis/front-nsfw.svg",
                extra: 1192 / 1075,
                bottom: 0.07
            }
        },
        frontNsfwer: {
            height: math.unit(7.5, "feet"),
            weight: math.unit(2, "lb"),
            name: "Front (NSFW-er)",
            image: {
                source: "./media/characters/artemis/front-nsfwer.svg",
                extra: 1192 / 1075,
                bottom: 0.07
            }
        },
        side: {
            height: math.unit(7.5, "feet"),
            weight: math.unit(2, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/artemis/side.svg",
                extra: 1192 / 1075,
                bottom: 0.07
            }
        },
        sideNsfw: {
            height: math.unit(7.5, "feet"),
            weight: math.unit(2, "lb"),
            name: "Side (NSFW)",
            image: {
                source: "./media/characters/artemis/side-nsfw.svg",
                extra: 1192 / 1075,
                bottom: 0.07
            }
        },
        sideNsfwer: {
            height: math.unit(7.5, "feet"),
            weight: math.unit(2, "lb"),
            name: "Side (NSFW-er)",
            image: {
                source: "./media/characters/artemis/side-nsfwer.svg",
                extra: 1192 / 1075,
                bottom: 0.07
            }
        },
        maw: {
            height: math.unit(1.1, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/artemis/maw.svg"
            }
        },
        stomach: {
            height: math.unit(0.95, "feet"),
            name: "Stomach",
            image: {
                source: "./media/characters/artemis/stomach.svg"
            }
        },
        dickCanine: {
            height: math.unit(1, "feet"),
            name: "Dick (Canine)",
            image: {
                source: "./media/characters/artemis/dick-canine.svg"
            }
        },
        dickEquine: {
            height: math.unit(0.85, "feet"),
            name: "Dick (Equine)",
            image: {
                source: "./media/characters/artemis/dick-equine.svg"
            }
        },
        dickExotic: {
            height: math.unit(0.85, "feet"),
            name: "Dick (Exotic)",
            image: {
                source: "./media/characters/artemis/dick-exotic.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7.5, "feet"),
            default: true
        },
        {
            name: "Enlarged",
            height: math.unit(12, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kira", species: ["fluudrani"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 3 / 12, "feet"),
            weight: math.unit(160, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kira/front.svg",
                extra: 906 / 786,
                bottom: 0.01
            }
        },
        back: {
            height: math.unit(5 + 3 / 12, "feet"),
            weight: math.unit(160, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/kira/back.svg",
                extra: 882 / 757,
                bottom: 0.005
            }
        },
        frontDressed: {
            height: math.unit(5 + 3 / 12, "feet"),
            weight: math.unit(160, "lb"),
            name: "Front (Dressed)",
            image: {
                source: "./media/characters/kira/front-dressed.svg",
                extra: 906 / 786,
                bottom: 0.01
            }
        },
        beans: {
            height: math.unit(0.92, "feet"),
            name: "Beans",
            image: {
                source: "./media/characters/kira/beans.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 3 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Scramble", species: ["surkanu"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(145, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/scramble/front.svg",
                extra: 763 / 727,
                bottom: 0.05
            }
        },
        back: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(145, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/scramble/back.svg",
                extra: 826 / 737,
                bottom: 0.002
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 4 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Biscuit", species: ["surkanu"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(190, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/biscuit/side.svg",
                extra: 858 / 791,
                bottom: 0.044
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Poffin", species: ["kiiasi"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 2 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/poffin/front.svg",
                extra: 786 / 680,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Dhari", species: ["werewolf", "fennec-fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 3 / 12, "feet"),
            weight: math.unit(519, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/dhari/front.svg",
                extra: 1048 / 946,
                bottom: 0.015
            }
        },
        back: {
            height: math.unit(6 + 3 / 12, "feet"),
            weight: math.unit(519, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/dhari/back.svg",
                extra: 1048 / 931,
                bottom: 0.005
            }
        },
        frontDressed: {
            height: math.unit(6 + 3 / 12, "feet"),
            weight: math.unit(519, "lb"),
            name: "Front (Dressed)",
            image: {
                source: "./media/characters/dhari/front-dressed.svg",
                extra: 1713 / 1546,
                bottom: 0.02
            }
        },
        backDressed: {
            height: math.unit(6 + 3 / 12, "feet"),
            weight: math.unit(519, "lb"),
            name: "Back (Dressed)",
            image: {
                source: "./media/characters/dhari/back-dressed.svg",
                extra: 1699 / 1537,
                bottom: 0.01
            }
        },
        maw: {
            height: math.unit(0.95, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/dhari/maw.svg"
            }
        },
        wereFront: {
            height: math.unit(12 + 8 / 12, "feet"),
            weight: math.unit(4000, "lb"),
            name: "Front (Were)",
            image: {
                source: "./media/characters/dhari/were-front.svg",
                extra: 1065 / 969,
                bottom: 0.015
            }
        },
        wereBack: {
            height: math.unit(12 + 8 / 12, "feet"),
            weight: math.unit(4000, "lb"),
            name: "Back (Were)",
            image: {
                source: "./media/characters/dhari/were-back.svg",
                extra: 1065 / 969,
                bottom: 0.012
            }
        },
        wereMaw: {
            height: math.unit(0.625, "meters"),
            name: "Maw (Were)",
            image: {
                source: "./media/characters/dhari/were-maw.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 3 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rena Dyne", species: ["sabertooth-tiger"], tags: ["anthro"] },
    {
        anthro: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(175, "lb"),
            name: "Anthro",
            image: {
                source: "./media/characters/rena-dyne/anthro.svg",
                extra: 1849 / 1785,
                bottom: 0.005
            }
        },
        taur: {
            height: math.unit(15 + 6 / 12, "feet"),
            weight: math.unit(8000, "lb"),
            name: "Taur",
            image: {
                source: "./media/characters/rena-dyne/taur.svg",
                extra: 2315 / 2234,
                bottom: 0.033
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 7 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Weremeep", species: ["monster"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(600, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/weremeep/front.svg",
                extra: 967 / 862,
                bottom: 0.01
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8, "feet"),
            default: true
        },
        {
            name: "Lorg",
            height: math.unit(12, "feet")
        },
        {
            name: "Oh Lawd She Comin'",
            height: math.unit(20, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Reza", species: ["cat", "dragon"], tags: ["anthro", "feral"] },
    {
        front: {
            height: math.unit(4, "feet"),
            weight: math.unit(90, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/reza/front.svg",
                extra: 1183 / 1111,
                bottom: 0.017
            }
        },
        back: {
            height: math.unit(4, "feet"),
            weight: math.unit(90, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/reza/back.svg",
                extra: 1183 / 1111,
                bottom: 0.01
            }
        },
        drake: {
            height: math.unit(30, "feet"),
            weight: math.unit(246960, "lb"),
            name: "Drake",
            image: {
                source: "./media/characters/reza/drake.svg",
                extra: 2350 / 2024,
                bottom: 60.7 / 2403
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Athea", species: ["leopard"], tags: ["taur"] },
    {
        side: {
            height: math.unit(15, "feet"),
            weight: math.unit(14, "tons"),
            name: "Side",
            image: {
                source: "./media/characters/athea/side.svg",
                extra: 960 / 540,
                bottom: 0.003
            }
        },
        sitting: {
            height: math.unit(6 * 2.85, "feet"),
            weight: math.unit(14, "tons"),
            name: "Sitting",
            image: {
                source: "./media/characters/athea/sitting.svg",
                extra: 621 / 581,
                bottom: 0.075
            }
        },
        maw: {
            height: math.unit(7.59498031496063, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/athea/maw.svg"
            }
        },
    },
    [
        {
            name: "Lap Cat",
            height: math.unit(2.5, "feet")
        },
        {
            name: "Minimacro",
            height: math.unit(15, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(120, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(640, "feet")
        },
        {
            name: "Colossus",
            height: math.unit(2.2, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Seroko", species: ["je-stoff-drachen"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(8 + 8 / 12, "feet"),
            weight: math.unit(130, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/seroko/front.svg",
                extra: 1385 / 1280,
                bottom: 0.025
            }
        },
        back: {
            height: math.unit(8 + 8 / 12, "feet"),
            weight: math.unit(130, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/seroko/back.svg",
                extra: 1369 / 1238,
                bottom: 0.018
            }
        },
        frontDressed: {
            height: math.unit(8 + 8 / 12, "feet"),
            weight: math.unit(130, "kg"),
            name: "Front (Dressed)",
            image: {
                source: "./media/characters/seroko/front-dressed.svg",
                extra: 1366 / 1275,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8 + 8 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Quatzi", species: ["river-snaptail"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5.5, "feet"),
            weight: math.unit(160, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/quatzi/front.svg",
                extra: 2346 / 2242,
                bottom: 0.015
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5.5, "feet"),
            default: true
        },
        {
            name: "Big",
            height: math.unit(7.7, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sen", species: ["red-panda"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 11 / 12, "feet"),
            weight: math.unit(180, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sen/front.svg",
                extra: 1321 / 1254,
                bottom: 0.015
            }
        },
        side: {
            height: math.unit(5 + 11 / 12, "feet"),
            weight: math.unit(180, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/sen/side.svg",
                extra: 1321 / 1254,
                bottom: 0.007
            }
        },
        back: {
            height: math.unit(5 + 11 / 12, "feet"),
            weight: math.unit(180, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/sen/back.svg",
                extra: 1321 / 1254
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 11 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Fruity", species: ["sylveon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(166.6, "cm"),
            weight: math.unit(66.6, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/fruity/front.svg",
                extra: 1510 / 1386,
                bottom: 0.04
            }
        },
        back: {
            height: math.unit(166.6, "cm"),
            weight: math.unit(66.6, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/fruity/back.svg",
                extra: 1563 / 1435,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(166.6, "cm"),
            default: true
        },
        {
            name: "Demonic",
            height: math.unit(166.6, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Zost", species: ["monster"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(10, "feet"),
            weight: math.unit(500, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/zost/side.svg",
                extra: 966 / 880,
                bottom: 0.075
            }
        },
        mawFront: {
            height: math.unit(1.08, "meters"),
            name: "Maw (Front)",
            image: {
                source: "./media/characters/zost/maw-front.svg"
            }
        },
        mawSide: {
            height: math.unit(2.66, "feet"),
            name: "Maw (Side)",
            image: {
                source: "./media/characters/zost/maw-side.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(10, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Luci", species: ["hellhound"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/luci/front.svg",
                extra: 1985 / 1884,
                bottom: 0.04
            }
        },
        back: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/luci/back.svg",
                extra: 1892 / 1791,
                bottom: 0.002
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 4 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "2th", species: ["monster"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1500, "feet"),
            weight: math.unit(3.8e6, "tons"),
            name: "Front",
            image: {
                source: "./media/characters/2th/front.svg",
                extra: 3489 / 3350,
                bottom: 0.1
            }
        },
        foot: {
            height: math.unit(461, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/2th/foot.svg"
            }
        },
    },
    [
        {
            name: "\"Micro\"",
            height: math.unit(15 + 7 / 12, "feet")
        },
        {
            name: "Normal",
            height: math.unit(1500, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(5000, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(15, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(4000, "miles")
        },
        {
            name: "Galactic",
            height: math.unit(50, "AU")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Amethyst", species: ["snow-leopard"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 6 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/amethyst/front.svg",
                extra: 2078 / 2040,
                bottom: 0.045
            }
        },
        back: {
            height: math.unit(5 + 6 / 12, "feet"),
            weight: math.unit(220, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/amethyst/back.svg",
                extra: 2021 / 1989,
                bottom: 0.02
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 6 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Yumi Akiyama", species: ["border-collie"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(4 + 11 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/yumi-akiyama/front.svg",
                extra: 1327 / 1235,
                bottom: 0.02
            }
        },
        back: {
            height: math.unit(4 + 11 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/yumi-akiyama/back.svg",
                extra: 1287 / 1245,
                bottom: 0.002
            }
        },
    },
    [
        {
            name: "Galactic",
            height: math.unit(50, "galaxies"),
            default: true
        },
        {
            name: "Universal",
            height: math.unit(100, "universes")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rifter Yrmori", species: ["vendeilen"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(500, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/rifter-yrmori/front.svg",
                extra: 1180 / 1125,
                bottom: 0.02
            }
        },
        back: {
            height: math.unit(8, "feet"),
            weight: math.unit(500, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/rifter-yrmori/back.svg",
                extra: 1190 / 1145,
                bottom: 0.001
            }
        },
        wings: {
            height: math.unit(7.75, "feet"),
            weight: math.unit(500, "lb"),
            name: "Wings",
            image: {
                source: "./media/characters/rifter-yrmori/wings.svg",
                extra: 1357 / 1285
            }
        },
        maw: {
            height: math.unit(0.8, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/rifter-yrmori/maw.svg"
            }
        },
        mawfront: {
            height: math.unit(1.45, "feet"),
            name: "Maw (Front)",
            image: {
                source: "./media/characters/rifter-yrmori/maw-front.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(42, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Tahajin", species: ["monster", "star-warrior", "fluudrani", "fish", "snake", "construct"], tags: ["anthro", "naga"] },
    {
        were: {
            height: math.unit(25 + 6 / 12, "feet"),
            weight: math.unit(10000, "lb"),
            name: "Were",
            image: {
                source: "./media/characters/tahajin/were.svg",
                extra: 801 / 770,
                bottom: 0.042
            }
        },
        aquatic: {
            height: math.unit(6 + 4 / 12, "feet"),
            weight: math.unit(160, "lb"),
            name: "Aquatic",
            image: {
                source: "./media/characters/tahajin/aquatic.svg",
                extra: 572 / 542,
                bottom: 0.04
            }
        },
        chow: {
            height: math.unit(8 + 11 / 12, "feet"),
            weight: math.unit(450, "lb"),
            name: "Chow",
            image: {
                source: "./media/characters/tahajin/chow.svg",
                extra: 660 / 640,
                bottom: 0.015
            }
        },
        demiNaga: {
            height: math.unit(6 + 8 / 12, "feet"),
            weight: math.unit(300, "lb"),
            name: "Demi Naga",
            image: {
                source: "./media/characters/tahajin/demi-naga.svg",
                extra: 643 / 615,
                bottom: 0.1
            }
        },
        data: {
            height: math.unit(5, "inches"),
            weight: math.unit(0.1, "lb"),
            name: "Data",
            image: {
                source: "./media/characters/tahajin/data.svg"
            }
        },
        fluu: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(140, "lb"),
            name: "Fluu",
            image: {
                source: "./media/characters/tahajin/fluu.svg",
                extra: 628 / 592,
                bottom: 0.02
            }
        },
        starWarrior: {
            height: math.unit(4 + 5 / 12, "feet"),
            weight: math.unit(50, "lb"),
            name: "Star Warrior",
            image: {
                source: "./media/characters/tahajin/star-warrior.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(25 + 6 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Gabira", species: ["weasel", "monster"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(350, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/gabira/front.svg",
                extra: 608 / 580,
                bottom: 0.03
            }
        },
        back: {
            height: math.unit(8, "feet"),
            weight: math.unit(350, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/gabira/back.svg",
                extra: 608 / 580,
                bottom: 0.03
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sasha Katraine", species: ["clouded-leopard"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 3 / 12, "feet"),
            weight: math.unit(137, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sasha-katraine/front.svg",
                bottom: 0.045
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(5, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 3 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Der", species: ["gryphon"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(4, "inches"),
            weight: math.unit(200, "grams"),
            name: "Side",
            image: {
                source: "./media/characters/der/side.svg",
                extra: 719 / 400,
                bottom: 30.6 / 749.9187
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(4, "inches"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Fixerdragon", species: ["dragon"], tags: ["feral"] },
    {
        side: {
            height: math.unit(30, "meters"),
            weight: math.unit(700, "tonnes"),
            name: "Side",
            image: {
                source: "./media/characters/fixerdragon/side.svg",
                extra: (1293.0514 - 116.03) / 1106.86,
                bottom: 116.03 / 1293.0514
            }
        },
    },
    [
        {
            name: "Planck",
            height: math.unit(1.6e-35, "meters")
        },
        {
            name: "Micro",
            height: math.unit(0.4, "meters")
        },
        {
            name: "Normal",
            height: math.unit(30, "meters"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(1.2, "megameters")
        },
        {
            name: "Teramacro",
            height: math.unit(130, "terameters")
        },
        {
            name: "Yottamacro",
            height: math.unit(6200, "yottameters")
        },
    ]
));

characterMakers.push(() => makeCharacter(
    { name: "Kite", species: ["sergal"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(250, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kite/front.svg",
                extra: 2796 / 2659,
                bottom: 0.002
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(360, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(1500, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Poojawa Vynar", species: ["kitsune", "sabertooth-tiger"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 10 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/poojawa-vynar/front.svg",
                extra: (1506.1547 - 55) / 1356.6,
                bottom: 55 / 1506.1547
            }
        },
        frontTailless: {
            height: math.unit(5 + 10 / 12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front (Tailless)",
            image: {
                source: "./media/characters/poojawa-vynar/front-tailless.svg",
                extra: (1506.1547 - 55) / 1356.6,
                bottom: 55 / 1506.1547
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 10 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Violette", species: ["doberman"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(293, "meters"),
            weight: math.unit(70400, "tons"),
            name: "Front",
            image: {
                source: "./media/characters/violette/front.svg",
                extra: 1227 / 1180,
                bottom: 0.005
            }
        },
        back: {
            height: math.unit(293, "meters"),
            weight: math.unit(70400, "tons"),
            name: "Back",
            image: {
                source: "./media/characters/violette/back.svg",
                extra: 1227 / 1180,
                bottom: 0.005
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(293, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Alessandra", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1050, "feet"),
            weight: math.unit(200000, "tons"),
            name: "Front",
            image: {
                source: "./media/characters/alessandra/front.svg",
                extra: 960 / 912,
                bottom: 0.06
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(1050, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(900, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Person", species: ["cat", "dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5, "feet"),
            weight: math.unit(187, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/person/front.svg",
                extra: 3087 / 2945,
                bottom: 91 / 3181
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(3, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(90, "feet")
        },
        {
            name: "Max Size",
            height: math.unit(280, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ty", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(4.5, "meters"),
            weight: math.unit(3200, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ty/front.svg",
                extra: 1038 / 960,
                bottom: 31.156 / 1068
            }
        },
        back: {
            height: math.unit(4.5, "meters"),
            weight: math.unit(3200, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/ty/back.svg",
                extra: 1044 / 966,
                bottom: 7.48 / 1049
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4.5, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rocky", species: ["kobold"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(115, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/rocky/front.svg",
                extra: 1012 / 975,
                bottom: 54 / 1066
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 4 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ruin", species: ["sergal"], tags: ["anthro", "feral"] },
    {
        upright: {
            height: math.unit(6, "meters"),
            weight: math.unit(4000, "kg"),
            name: "Upright",
            image: {
                source: "./media/characters/ruin/upright.svg",
                extra: 668 / 661,
                bottom: 42 / 799.8396
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Robin", species: ["coyote"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5, "feet"),
            weight: math.unit(106, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/robin/front.svg",
                extra: 862 / 799,
                bottom: 42.4 / 914.8856
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Saian", species: ["ventura"], tags: ["feral"] },
    {
        side: {
            height: math.unit(3, "feet"),
            weight: math.unit(225, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/saian/side.svg",
                extra: 566 / 356,
                bottom: 79.7 / 643
            }
        },
        maw: {
            height: math.unit(2.85, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/saian/maw.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(3, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Equus Silvermane", species: ["horse"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(8, "feet"),
            weight: math.unit(300, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/equus-silvermane/side.svg",
                extra: 2176 / 2050,
                bottom: 65.7 / 2245
            }
        },
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(300, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/equus-silvermane/front.svg",
                extra: 4633 / 4400,
                bottom: 71.3 / 4706.915
            }
        },
        sideStepping: {
            height: math.unit(8, "feet"),
            weight: math.unit(300, "lb"),
            name: "Side (Stepping)",
            image: {
                source: "./media/characters/equus-silvermane/side-stepping.svg",
                extra: 1968 / 1860,
                bottom: 16.4 / 1989
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8, "feet")
        },
        {
            name: "Minimacro",
            height: math.unit(75, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(150, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(1000, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(1, "mile")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Windar", species: ["dragon"], tags: ["feral"] },
    {
        side: {
            height: math.unit(20, "feet"),
            weight: math.unit(30000, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/windar/side.svg",
                extra: 1491 / 1248,
                bottom: 82.56 / 1568
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(20, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Melody", species: ["dragon"], tags: ["feral"] },
    {
        side: {
            height: math.unit(15.66, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/melody/side.svg",
                extra: 1097 / 944,
                bottom: 11.8 / 1109
            }
        },
        sideOutfit: {
            height: math.unit(15.66, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side (Outfit)",
            image: {
                source: "./media/characters/melody/side-outfit.svg",
                extra: 1097 / 944,
                bottom: 11.8 / 1109
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(15.66, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Windera", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(8, "feet"),
            weight: math.unit(325, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/windera/front.svg",
                extra: 3180 / 2845,
                bottom: 178 / 3365
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sonear", species: ["lugia"], tags: ["feral"] },
    {
        front: {
            height: math.unit(28.75, "feet"),
            weight: math.unit(2000, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/sonear/front.svg",
                extra: 1041.1 / 964.9,
                bottom: 53.7 / 1096.6
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(28.75, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kanara", species: ["dinosaur"], tags: ["feral"] },
    {
        side: {
            height: math.unit(25.5, "feet"),
            weight: math.unit(23000, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/kanara/side.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(25.5, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ereus", species: ["gryphon"], tags: ["feral"] },
    {
        side: {
            height: math.unit(10, "feet"),
            weight: math.unit(1000, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/ereus/side.svg",
                extra: 1157 / 959,
                bottom: 153 / 1312.5
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(10, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "E-ter", species: ["wolf", "robot"], tags: ["feral"] },
    {
        side: {
            height: math.unit(4.5, "feet"),
            weight: math.unit(500, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/e-ter/side.svg",
                extra: 1550 / 1248,
                bottom: 146 / 1694
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4.5, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Yamie", species: ["orca"], tags: ["feral"] },
    {
        side: {
            height: math.unit(9.7, "feet"),
            weight: math.unit(4000, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/yamie/side.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(9.7, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Anders", species: ["unicorn", "deity"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(50, "feet"),
            weight: math.unit(50000, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/anders/front.svg",
                extra: 570 / 539,
                bottom: 14.7 / 586.7
            }
        },
    },
    [
        {
            name: "Large",
            height: math.unit(50, "feet")
        },
        {
            name: "Macro",
            height: math.unit(2000, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(12, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Reban", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 2 / 12, "feet"),
            weight: math.unit(300, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/reban/front.svg",
                extra: 516 / 487,
                bottom: 42.82 / 558.356
            }
        },
        dick: {
            height: math.unit(7 / 5, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/reban/dick.svg"
            }
        },
    },
    [
        {
            name: "Natural Height",
            height: math.unit(7 + 2 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(500, "feet"),
            default: true
        },
        {
            name: "Canon Height",
            height: math.unit(50, "AU")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Terrance Keayes", species: ["vole"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/terrance-keayes/front.svg",
                extra: 1.005,
                bottom: 151 / 1615
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/terrance-keayes/side.svg",
                extra: 1.005,
                bottom: 129.4 / 1544
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/terrance-keayes/back.svg",
                extra: 1.005,
                bottom: 58.4 / 1557.3
            }
        },
        dick: {
            height: math.unit(6 * 0.208, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/terrance-keayes/dick.svg"
            }
        },
    },
    [
        {
            name: "Canon Height",
            height: math.unit(35, "miles"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ofelia", species: ["gigantosaurus"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ofelia/front.svg",
                extra: 546 / 541,
                bottom: 39 / 583
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/ofelia/back.svg",
                extra: 564 / 559.5,
                bottom: 8.69 / 573.02
            }
        },
        maw: {
            height: math.unit(1, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/ofelia/maw.svg"
            }
        },
        foot: {
            height: math.unit(1.949, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/ofelia/foot.svg"
            }
        },
    },
    [
        {
            name: "Canon Height",
            height: math.unit(2000, "miles"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Samuel", species: ["snow-leopard"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/samuel/front.svg",
                extra: 265 / 258,
                bottom: 2 / 266.1566
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(100, "feet"),
            default: true
        },
        {
            name: "Full Size",
            height: math.unit(1000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Beishir Kiel", species: ["orca", "monster"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(300, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/beishir-kiel/front.svg",
                extra: 569 / 547,
                bottom: 41.9 / 609
            }
        },
        maw: {
            height: math.unit(6 * 0.202, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/beishir-kiel/maw.svg"
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(300, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Logan Grey", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/logan-grey/front.svg",
                extra: 2539 / 2393,
                bottom: 97.6 / 2636.37
            }
        },
        frontAlt: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front (Alt)",
            image: {
                source: "./media/characters/logan-grey/front-alt.svg",
                extra: 958 / 893,
                bottom: 15 / 970.768
            }
        },
        back: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/logan-grey/back.svg",
                extra: 958 / 893,
                bottom: 2.1881 / 970.9788
            }
        },
        dick: {
            height: math.unit(1.437, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/logan-grey/dick.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 8 / 12, "feet")
        },
        {
            name: "The 500 Foot Femboy",
            height: math.unit(500, "feet"),
            default: true
        },
        {
            name: "Megmacro",
            height: math.unit(20, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Draganta", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(8 + 2 / 12, "feet"),
            weight: math.unit(275, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/draganta/front.svg",
                extra: 1177 / 1135,
                bottom: 33.46 / 1212.1
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8 + 6 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(150, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(1000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Voski", species: ["corvid"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.72, "m"),
            weight: math.unit(80, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/voski/front.svg",
                extra: 2076.22 / 2022.4,
                bottom: 102.7 / 2177.3866
            }
        },
        frontNsfw: {
            height: math.unit(1.72, "m"),
            weight: math.unit(80, "lb"),
            name: "Front (NSFW)",
            image: {
                source: "./media/characters/voski/front-nsfw.svg",
                extra: 2076.22 / 2022.4,
                bottom: 102.7 / 2177.3866
            }
        },
        back: {
            height: math.unit(1.72, "m"),
            weight: math.unit(80, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/voski/back.svg",
                extra: 2104 / 2051,
                bottom: 10.45 / 2113.63
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1.72, "m")
        },
        {
            name: "Macro",
            height: math.unit(55, "m"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(300, "m")
        },
        {
            name: "Macro++",
            height: math.unit(700, "m")
        },
        {
            name: "Macro+++",
            height: math.unit(4500, "m")
        },
        {
            name: "Macro++++",
            height: math.unit(45, "km")
        },
        {
            name: "Macro+++++",
            height: math.unit(1220, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Icowom Lee", species: ["wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2.3, "m"),
            weight: math.unit(304, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/icowom-lee/front.svg",
                extra: 985 / 955,
                bottom: 25.4 / 1012
            }
        },
        fronttentacles: {
            height: math.unit(2.3, "m"),
            weight: math.unit(304, "kg"),
            name: "Front-tentacles",
            image: {
                source: "./media/characters/icowom-lee/front-tentacles.svg",
                extra: 985 / 955,
                bottom: 25.4 / 1012
            }
        },
        back: {
            height: math.unit(2.3, "m"),
            weight: math.unit(304, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/icowom-lee/back.svg",
                extra: 975 / 954,
                bottom: 9.5 / 985
            }
        },
        backtentacles: {
            height: math.unit(2.3, "m"),
            weight: math.unit(304, "kg"),
            name: "Back-tentacles",
            image: {
                source: "./media/characters/icowom-lee/back-tentacles.svg",
                extra: 975 / 954,
                bottom: 9.5 / 985
            }
        },
        frontDressed: {
            height: math.unit(2.3, "m"),
            weight: math.unit(304, "kg"),
            name: "Front (Dressed)",
            image: {
                source: "./media/characters/icowom-lee/front-dressed.svg",
                extra: 3076 / 2933,
                bottom: 51.4 / 3125.1889
            }
        },
        rump: {
            height: math.unit(0.776, "meters"),
            name: "Rump",
            image: {
                source: "./media/characters/icowom-lee/rump.svg"
            }
        },
        genitals: {
            height: math.unit(0.78, "meters"),
            name: "Genitals",
            image: {
                source: "./media/characters/icowom-lee/genitals.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2.3, "meters"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(94, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Shock Diamond", species: ["pharaoh-hound", "aeromorph"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(22, "meters"),
            weight: math.unit(21000, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/shock-diamond/front.svg",
                extra: 2204 / 2053,
                bottom: 65 / 2239.47
            }
        },
        frontNude: {
            height: math.unit(22, "meters"),
            weight: math.unit(21000, "kg"),
            name: "Front (Nude)",
            image: {
                source: "./media/characters/shock-diamond/front-nude.svg",
                extra: 2514 / 2285,
                bottom: 13 / 2527.56
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(3, "meters")
        },
        {
            name: "Macro",
            height: math.unit(22, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rory", species: ["dog", "magical"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/rory/front.svg",
                extra: 589 / 556,
                bottom: 45.7 / 635.76
            }
        },
        frontNude: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front (Nude)",
            image: {
                source: "./media/characters/rory/front-nude.svg",
                extra: 589 / 556,
                bottom: 45.7 / 635.76
            }
        },
        side: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/rory/side.svg",
                extra: 597 / 564,
                bottom: 55 / 653
            }
        },
        back: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/rory/back.svg",
                extra: 620 / 585,
                bottom: 8.86 / 630.43
            }
        },
        dick: {
            height: math.unit(0.86, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/rory/dick.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 4 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(100, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(140, "feet")
        },
        {
            name: "Macro++",
            height: math.unit(300, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sprisk", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(190, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sprisk/front.svg",
                extra: 1225 / 1180,
                bottom: 42.7 / 1266.4
            }
        },
        frontNsfw: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(190, "lb"),
            name: "Front (NSFW)",
            image: {
                source: "./media/characters/sprisk/front-nsfw.svg",
                extra: 1225 / 1180,
                bottom: 42.7 / 1266.4
            }
        },
        back: {
            height: math.unit(5 + 9 / 12, "feet"),
            weight: math.unit(190, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/sprisk/back.svg",
                extra: 1247 / 1200,
                bottom: 5.6 / 1253.04
            }
        },
    },
    [
        {
            name: "Tiny",
            height: math.unit(2, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 9 / 12, "feet"),
            default: true
        },
        {
            name: "Mini Macro",
            height: math.unit(18, "feet")
        },
        {
            name: "Macro",
            height: math.unit(100, "feet")
        },
        {
            name: "MACRO",
            height: math.unit(50, "miles")
        },
        {
            name: "M A C R O",
            height: math.unit(300, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Bunsen", species: ["dragon"], tags: ["feral"] },
    {
        side: {
            height: math.unit(15.6, "meters"),
            weight: math.unit(700000, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/bunsen/side.svg",
                extra: 1644 / 358
            }
        },
        foot: {
            height: math.unit(1.611 * 1644 / 358, "meter"),
            name: "Foot",
            image: {
                source: "./media/characters/bunsen/foot.svg"
            }
        },
    },
    [
        {
            name: "Small",
            height: math.unit(10, "feet")
        },
        {
            name: "Normal",
            height: math.unit(15.6, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sesh", species: ["finnish-spitz-dog"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(4 + 11 / 12, "feet"),
            weight: math.unit(140, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sesh/front.svg",
                extra: 3420 / 3231,
                bottom: 72 / 3949.5
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4 + 11 / 12, "feet")
        },
        {
            name: "Grown",
            height: math.unit(15, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(1500, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(30, "miles")
        },
        {
            name: "Continental",
            height: math.unit(3000, "miles")
        },
        {
            name: "Gravity Mass",
            height: math.unit(300000, "miles")
        },
        {
            name: "Planet Buster",
            height: math.unit(30000000, "miles")
        },
        {
            name: "Big",
            height: math.unit(3000000000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Pepper", species: ["zorgoia"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(9, "feet"),
            weight: math.unit(350, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/pepper/front.svg",
                extra: 1448 / 1312,
                bottom: 9.4 / 1457.88
            }
        },
        back: {
            height: math.unit(9, "feet"),
            weight: math.unit(350, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/pepper/back.svg",
                extra: 1423 / 1300,
                bottom: 4.6 / 1429
            }
        },
        maw: {
            height: math.unit(0.932, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/pepper/maw.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(9, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Maelstrom", species: ["monster"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/maelstrom/front.svg",
                extra: 2100 / 1883,
                bottom: 94 / 2196.7
            }
        },
    },
    [
        {
            name: "Less Kaiju",
            height: math.unit(200, "feet")
        },
        {
            name: "Kaiju",
            height: math.unit(400, "feet"),
            default: true
        },
        {
            name: "Kaiju-er",
            height: math.unit(600, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Lexir", species: ["sergal"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 5 / 12, "feet"),
            weight: math.unit(180, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/lexir/front.svg",
                extra: 180 / 172,
                bottom: 12 / 192
            }
        },
        back: {
            height: math.unit(6 + 5 / 12, "feet"),
            weight: math.unit(180, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/lexir/back.svg",
                extra: 183.84 / 175.5,
                bottom: 3.1 / 187
            }
        },
    },
    [
        {
            name: "Very Smal",
            height: math.unit(1, "nm")
        },
        {
            name: "Normal",
            height: math.unit(6 + 5 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(1, "mile")
        },
        {
            name: "Megamacro",
            height: math.unit(50, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Maksio", species: ["lizard"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.5, "meters"),
            weight: math.unit(100, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/maksio/front.svg",
                extra: 1549 / 1531,
                bottom: 123.7 / 1674.5429
            }
        },
        back: {
            height: math.unit(1.5, "meters"),
            weight: math.unit(100, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/maksio/back.svg",
                extra: 1541 / 1509,
                bottom: 97 / 1639
            }
        },
        hand: {
            height: math.unit(0.621, "feet"),
            name: "Hand",
            image: {
                source: "./media/characters/maksio/hand.svg"
            }
        },
        foot: {
            height: math.unit(1.611, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/maksio/foot.svg"
            }
        },
    },
    [
        {
            name: "Shrunken",
            height: math.unit(10, "cm")
        },
        {
            name: "Normal",
            height: math.unit(150, "cm"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Erza Bear", species: ["human", "dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(100, "feet"),
            name: "Front",
            image: {
                source: "./media/characters/erza-bear/front.svg",
                extra: 2449 / 2390,
                bottom: 46 / 2494
            }
        },
        back: {
            height: math.unit(100, "feet"),
            name: "Back",
            image: {
                source: "./media/characters/erza-bear/back.svg",
                extra: 2489 / 2430,
                bottom: 85.4 / 2480
            }
        },
        tail: {
            height: math.unit(42, "feet"),
            name: "Tail",
            image: {
                source: "./media/characters/erza-bear/tail.svg"
            }
        },
        tongue: {
            height: math.unit(8, "feet"),
            name: "Tongue",
            image: {
                source: "./media/characters/erza-bear/tongue.svg"
            }
        },
        dick: {
            height: math.unit(10.5, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/erza-bear/dick.svg"
            }
        },
        dickVertical: {
            height: math.unit(16.9, "feet"),
            name: "Dick (Vertical)",
            image: {
                source: "./media/characters/erza-bear/dick-vertical.svg"
            }
        },

    },
    [
        {
            name: "Macro",
            height: math.unit(100, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Violet Flor", species: ["skunk"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(172, "cm"),
            weight: math.unit(73, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/violet-flor/front.svg",
                extra: 1530 / 1442,
                bottom: 61.9 / 1588.8
            }
        },
        back: {
            height: math.unit(180, "cm"),
            weight: math.unit(73, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/violet-flor/back.svg",
                extra: 1692 / 1630,
                bottom: 20 / 1712
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(172, "cm"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Lynn Rhea", species: ["shark"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(220, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/lynn-rhea/front.svg",
                extra: 310 / 273
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(220, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/lynn-rhea/back.svg",
                extra: 310 / 273
            }
        },
        dicks: {
            height: math.unit(0.9, "feet"),
            name: "Dicks",
            image: {
                source: "./media/characters/lynn-rhea/dicks.svg"
            }
        },
        slit: {
            height: math.unit(0.4, "feet"),
            name: "Slit",
            image: {
                source: "./media/characters/lynn-rhea/slit.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1, "inch")
        },
        {
            name: "Macro",
            height: math.unit(60, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(2, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(3, "earths")
        },
        {
            name: "Galactic",
            height: math.unit(0.8, "galaxies")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Valathos", species: ["sea-monster"], tags: ["naga"] },
    {
        front: {
            height: math.unit(1600, "feet"),
            weight: math.unit(85758785169, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/valathos/front.svg",
                extra: 1451 / 1339
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(1600, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Azula", species: ["demon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 5 / 12, "feet"),
            weight: math.unit(300, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/azula/front.svg",
                extra: 3208 / 2880,
                bottom: 80.2 / 3277
            }
        },
        back: {
            height: math.unit(7 + 5 / 12, "feet"),
            weight: math.unit(300, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/azula/back.svg",
                extra: 3169 / 2822,
                bottom: 150.6 / 3321
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 5 / 12, "feet"),
            default: true
        },
        {
            name: "Big",
            height: math.unit(20, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rupert", species: ["shark"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 1 / 12, "feet"),
            weight: math.unit(110, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/rupert/front.svg",
                extra: 1549 / 1495,
                bottom: 54.2 / 1604.4
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 1 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sheera Castellar", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(8 + 4 / 12, "feet"),
            weight: math.unit(350, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sheera-castellar/front.svg",
                extra: 1957 / 1894,
                bottom: 26.97 / 1975.017
            }
        },
        side: {
            height: math.unit(8 + 4 / 12, "feet"),
            weight: math.unit(350, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/sheera-castellar/side.svg",
                extra: 1957 / 1894
            }
        },
        back: {
            height: math.unit(8 + 4 / 12, "feet"),
            weight: math.unit(350, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/sheera-castellar/back.svg",
                extra: 1957 / 1894
            }
        },
        angled: {
            height: math.unit((8 + 4 / 12) * (1 - 68 / 1875), "feet"),
            weight: math.unit(350, "lb"),
            name: "Angled",
            image: {
                source: "./media/characters/sheera-castellar/angled.svg",
                extra: 1807 / 1707,
                bottom: 68 / 1875
            }
        },
        genitals: {
            height: math.unit(2.2, "feet"),
            name: "Genitals",
            image: {
                source: "./media/characters/sheera-castellar/genitals.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(8 + 4 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(150, "feet"),
            default: true
        },
        {
            name: "Macro+",
            height: math.unit(800, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Jaipur", species: ["black-panther"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/jaipur/front.svg",
                extra: 3860 / 3731,
                bottom: 287 / 4140
            }
        },
        back: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/jaipur/back.svg",
                extra: 4060 / 3930,
                bottom: 151 / 4200
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1.85, "meters"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(150, "meters")
        },
        {
            name: "Macro+",
            height: math.unit(0.5, "miles")
        },
        {
            name: "Macro++",
            height: math.unit(2.5, "miles")
        },
        {
            name: "Macro+++",
            height: math.unit(12, "miles")
        },
        {
            name: "Macro++++",
            height: math.unit(120, "miles")
        },
        {
            name: "Macro+++++",
            height: math.unit(1200, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sheila (Wolf)", species: ["wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sheila-wolf/front.svg",
                extra: 1931 / 1808,
                bottom: 29.5 / 1960
            }
        },
        dick: {
            height: math.unit(1.464, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/sheila-wolf/dick.svg"
            }
        },
        muzzle: {
            height: math.unit(0.513, "feet"),
            name: "Muzzle",
            image: {
                source: "./media/characters/sheila-wolf/muzzle.svg"
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(70, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Almor", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(32, "meters"),
            weight: math.unit(300000, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/almor/front.svg",
                extra: 1408 / 1322,
                bottom: 94.6 / 1506.5
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(32, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Silver", species: ["shark"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(200, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/silver/front.svg",
                extra: 472.1 / 450.5,
                bottom: 26.5 / 499.424
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(800, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(250, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Pliskin", species: ["cat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/pliskin/front.svg",
                extra: 1469 / 1359,
                bottom: 70 / 1540
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(3, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 11 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(120, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sammy", species: ["samurott"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sammy/front.svg",
                extra: 1193 / 1089,
                bottom: 30.5 / 1226
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(1700, "feet"),
            default: true
        },
        {
            name: "Examacro",
            height: math.unit(2.5e9, "lightyears")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kuru", species: ["umbra"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(21, "meters"),
            weight: math.unit(12, "tonnes"),
            name: "Front",
            image: {
                source: "./media/characters/kuru/front.svg",
                extra: 4301 / 3785,
                bottom: 371.3 / 4691
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(21, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rakka", species: ["umbra"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(23, "meters"),
            weight: math.unit(12.2, "tonnes"),
            name: "Front",
            image: {
                source: "./media/characters/rakka/front.svg",
                extra: 4670 / 4169,
                bottom: 301 / 4968.7
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(23, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rhys (Feline)", species: ["cat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/rhys-feline/front.svg",
                extra: 2488 / 2308,
                bottom: 35.67 / 2519.19
            }
        },
    },
    [
        {
            name: "Really Small",
            height: math.unit(1, "nm")
        },
        {
            name: "Micro",
            height: math.unit(4, "inches")
        },
        {
            name: "Normal",
            height: math.unit(4 + 10 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(100, "feet")
        },
        {
            name: "Megamacto",
            height: math.unit(50, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Alydar", species: ["raven", "snow-leopard"], tags: ["feral"] },
    {
        side: {
            height: math.unit(30, "feet"),
            weight: math.unit(35000, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/alydar/side.svg",
                extra: 234 / 222,
                bottom: 6.5 / 241
            }
        },
        front: {
            height: math.unit(30, "feet"),
            weight: math.unit(35000, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/alydar/front.svg",
                extra: 223.37 / 210.2,
                bottom: 22.3 / 246.76
            }
        },
        top: {
            height: math.unit(64.54, "feet"),
            weight: math.unit(35000, "kg"),
            name: "Top",
            image: {
                source: "./media/characters/alydar/top.svg"
            }
        },
        anthro: {
            height: math.unit(30, "feet"),
            weight: math.unit(9000, "kg"),
            name: "Anthro",
            image: {
                source: "./media/characters/alydar/anthro.svg",
                extra: 432 / 421,
                bottom: 7.18 / 440
            }
        },
        maw: {
            height: math.unit(11.693, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/alydar/maw.svg"
            }
        },
        head: {
            height: math.unit(11.693, "feet"),
            name: "Head",
            image: {
                source: "./media/characters/alydar/head.svg"
            }
        },
        headAlt: {
            height: math.unit(12.861, "feet"),
            name: "Head (Alt)",
            image: {
                source: "./media/characters/alydar/head-alt.svg"
            }
        },
        wing: {
            height: math.unit(20.712, "feet"),
            name: "Wing",
            image: {
                source: "./media/characters/alydar/wing.svg"
            }
        },
        wingFeather: {
            height: math.unit(9.662, "feet"),
            name: "Wing Feather",
            image: {
                source: "./media/characters/alydar/wing-feather.svg"
            }
        },
        countourFeather: {
            height: math.unit(4.154, "feet"),
            name: "Contour Feather",
            image: {
                source: "./media/characters/alydar/contour-feather.svg"
            }
        },
    },
    [
        {
            name: "Diplomatic",
            height: math.unit(13, "feet"),
            default: true
        },
        {
            name: "Small",
            height: math.unit(30, "feet")
        },
        {
            name: "Normal",
            height: math.unit(95, "feet"),
            default: true
        },
        {
            name: "Large",
            height: math.unit(285, "feet")
        },
        {
            name: "Incomprehensible",
            height: math.unit(450, "megameters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Selicia", species: ["dragon"], tags: ["feral"] },
    {
        side: {
            height: math.unit(11, "feet"),
            weight: math.unit(1750, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/selicia/side.svg",
                extra: 440 / 396,
                bottom: 24.8 / 465.979
            }
        },
        maw: {
            height: math.unit(4.665, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/selicia/maw.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(11, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Layla", species: ["zorua", "vulpix"], tags: ["feral"] },
    {
        side: {
            height: math.unit(2 + 6 / 12, "feet"),
            weight: math.unit(30, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/layla/side.svg",
                extra: 244 / 188,
                bottom: 18.2 / 262.1
            }
        },
        back: {
            height: math.unit(2 + 6 / 12, "feet"),
            weight: math.unit(30, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/layla/back.svg",
                extra: 308 / 241.5,
                bottom: 8.9 / 316.8
            }
        },
        cumming: {
            height: math.unit(2 + 6 / 12, "feet"),
            weight: math.unit(30, "lb"),
            name: "Cumming",
            image: {
                source: "./media/characters/layla/cumming.svg",
                extra: 342 / 279,
                bottom: 595 / 938
            }
        },
        dickFlaccid: {
            height: math.unit(2.595, "feet"),
            name: "Flaccid Genitals",
            image: {
                source: "./media/characters/layla/dick-flaccid.svg"
            }
        },
        dickErect: {
            height: math.unit(2.359, "feet"),
            name: "Erect Genitals",
            image: {
                source: "./media/characters/layla/dick-erect.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1, "inch")
        },
        {
            name: "Small",
            height: math.unit(1, "foot")
        },
        {
            name: "Normal",
            height: math.unit(2 + 6 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(200, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(1000, "miles")
        },
        {
            name: "Planetary",
            height: math.unit(8000, "miles")
        },
        {
            name: "True Layla",
            height: math.unit(200000 * 7, "multiverses")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Knox", species: ["arcanine", "houndoom"], tags: ["feral"] },
    {
        back: {
            height: math.unit(10.5, "feet"),
            weight: math.unit(800, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/knox/back.svg",
                extra: 1486 / 1089,
                bottom: 107 / 1601.4
            }
        },
        side: {
            height: math.unit(10.5, "feet"),
            weight: math.unit(800, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/knox/side.svg",
                extra: 244 / 218,
                bottom: 14 / 260
            }
        },
    },
    [
        {
            name: "Compact",
            height: math.unit(10.5, "feet"),
            default: true
        },
        {
            name: "Dynamax",
            height: math.unit(210, "feet")
        },
        {
            name: "Full Macro",
            height: math.unit(850, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Shin (Pikachu)", species: ["pikachu"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(152, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/shin-pikachu/front.svg",
                extra: 1574 / 1480,
                bottom: 53.3 / 1626
            }
        },
        hand: {
            height: math.unit(1.055, "feet"),
            name: "Hand",
            image: {
                source: "./media/characters/shin-pikachu/hand.svg"
            }
        },
        foot: {
            height: math.unit(1.1, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/shin-pikachu/foot.svg"
            }
        },
        collar: {
            height: math.unit(0.386, "feet"),
            name: "Collar",
            image: {
                source: "./media/characters/shin-pikachu/collar.svg"
            }
        },
    },
    [
        {
            name: "Smallest",
            height: math.unit(0.5, "inches")
        },
        {
            name: "Micro",
            height: math.unit(6, "inches")
        },
        {
            name: "Normal",
            height: math.unit(6, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(150, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kayda", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(28, "feet"),
            weight: math.unit(10500, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kayda/front.svg",
                extra: 1536 / 1428,
                bottom: 68.7 / 1603
            }
        },
        back: {
            height: math.unit(28, "feet"),
            weight: math.unit(10500, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/kayda/back.svg",
                extra: 1557 / 1464,
                bottom: 39.5 / 1597.49
            }
        },
        dick: {
            height: math.unit(3.858, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/kayda/dick.svg"
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(28, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Brian", species: ["barbary-lion"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(10 + 11 / 12, "feet"),
            weight: math.unit(1400, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/brian/front.svg",
                extra: 737 / 692,
                bottom: 55.4 / 785
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(10 + 11 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Khemri", species: ["jackal"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 8 / 12, "feet"),
            weight: math.unit(140, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/khemri/front.svg",
                extra: 4780 / 4059,
                bottom: 80.1 / 4859.25
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(6, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 8 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Felix Braveheart", species: ["cerberus", "wolf"], tags: ["anthro", "feral"] },
    {
        front: {
            height: math.unit(13, "feet"),
            weight: math.unit(1700, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/felix-braveheart/front.svg",
                extra: 1222 / 1157,
                bottom: 53.2 / 1280
            }
        },
        back: {
            height: math.unit(13, "feet"),
            weight: math.unit(1700, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/felix-braveheart/back.svg",
                extra: 1277 / 1203,
                bottom: 50.2 / 1327
            }
        },
        feral: {
            height: math.unit(6, "feet"),
            weight: math.unit(400, "lb"),
            name: "Feral",
            image: {
                source: "./media/characters/felix-braveheart/feral.svg",
                extra: 682 / 625,
                bottom: 6.9 / 688
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(13, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Shadow Blade", species: ["horse"], tags: ["feral"] },
    {
        side: {
            height: math.unit(5 + 11 / 12, "feet"),
            weight: math.unit(1400, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/shadow-blade/side.svg",
                extra: 1726 / 1267,
                bottom: 58.4 / 1785
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 11 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Karla Halldor", species: ["nimbat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1 + 6 / 12, "feet"),
            weight: math.unit(25, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/karla-halldor/front.svg",
                extra: 1459 / 1383,
                bottom: 12 / 1472
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1 + 6 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ariam", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(160, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ariam/front.svg",
                extra: 714 / 617,
                bottom: 23.4 / 737,
            }
        },
        squatting: {
            height: math.unit(4.1, "feet"),
            weight: math.unit(160, "lb"),
            name: "Squatting",
            image: {
                source: "./media/characters/ariam/squatting.svg",
                extra: 2617 / 2112,
                bottom: 61.2 / 2681,
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 2 / 12, "feet"),
            default: true
        },
        {
            name: "Normal+",
            height: math.unit(4, "meters")
        },
        {
            name: "Macro",
            height: math.unit(50, "meters")
        },
        {
            name: "Macro+",
            height: math.unit(100, "meters")
        },
        {
            name: "Megamacro",
            height: math.unit(20, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Qodri Class-of-'Fortwelve-Six", species: ["wolxi"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.67, "meters"),
            weight: math.unit(140, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/qodri-class-of-'fortwelve-six/front.svg",
                extra: 438 / 410,
                bottom: 0.75 / 439
            }
        },
    },
    [
        {
            name: "Shrunken",
            height: math.unit(7.6, "cm")
        },
        {
            name: "Human Scale",
            height: math.unit(1.67, "meters")
        },
        {
            name: "Wolxi Scale",
            height: math.unit(36.7, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Izue Two-Mothers", species: ["wolxi"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.73, "meters"),
            weight: math.unit(240, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/izue-two-mothers/front.svg",
                extra: 469 / 437,
                bottom: 1.24 / 470.6
            }
        },
    },
    [
        {
            name: "Shrunken",
            height: math.unit(7.86, "cm")
        },
        {
            name: "Human Scale",
            height: math.unit(1.73, "meters")
        },
        {
            name: "Wolxi Scale",
            height: math.unit(38, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Teeku Love-Shack", species: ["wolxi"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.55, "meters"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/teeku-love-shack/front.svg",
                extra: 387 / 362,
                bottom: 1.51 / 388
            }
        },
    },
    [
        {
            name: "Shrunken",
            height: math.unit(7, "cm")
        },
        {
            name: "Human Scale",
            height: math.unit(1.55, "meters")
        },
        {
            name: "Wolxi Scale",
            height: math.unit(34.1, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Dejma the Red", species: ["wolxi"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.83, "meters"),
            weight: math.unit(135, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/dejma-the-red/front.svg",
                extra: 480 / 458,
                bottom: 1.8 / 482
            }
        },
    },
    [
        {
            name: "Shrunken",
            height: math.unit(8.3, "cm")
        },
        {
            name: "Human Scale",
            height: math.unit(1.83, "meters")
        },
        {
            name: "Wolxi Scale",
            height: math.unit(40, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Aki", species: ["deer"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.78, "meters"),
            weight: math.unit(65, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/aki/front.svg",
                extra: 452 / 415
            }
        },
        frontNsfw: {
            height: math.unit(1.78, "meters"),
            weight: math.unit(65, "kg"),
            name: "Front (NSFW)",
            image: {
                source: "./media/characters/aki/front-nsfw.svg",
                extra: 452 / 415
            }
        },
        back: {
            height: math.unit(1.78, "meters"),
            weight: math.unit(65, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/aki/back.svg",
                extra: 452 / 415
            }
        },
        rump: {
            height: math.unit(2.05, "feet"),
            name: "Rump",
            image: {
                source: "./media/characters/aki/rump.svg"
            }
        },
        dick: {
            height: math.unit(0.95, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/aki/dick.svg"
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(15, "cm")
        },
        {
            name: "Normal",
            height: math.unit(178, "cm"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(214, "m")
        },
        {
            name: "Macro+",
            height: math.unit(534, "m")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ari", species: ["catgirl"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 5 / 12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ari/front.svg",
                extra: 714.5 / 682,
                bottom: 8 / 722.5
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 5 / 12, "feet")
        },
        {
            name: "Macro",
            height: math.unit(100, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(100, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(80000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Bolt", species: ["keldeo"], tags: ["feral"] },
    {
        side: {
            height: math.unit(9, "feet"),
            weight: math.unit(400, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/bolt/side.svg",
                extra: 1126 / 896,
                bottom: 60 / 1187.3,
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(5, "inches")
        },
        {
            name: "Normal",
            height: math.unit(9, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(700, "feet")
        },
        {
            name: "Max Size",
            height: math.unit(1.52e22, "yottameters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Draekon Sylviar", species: ["dra'gal"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(4.53, "meters"),
            weight: math.unit(3, "tons"),
            name: "Front",
            image: {
                source: "./media/characters/draekon-sylviar/front.svg",
                extra: 1228 / 1068,
                bottom: 41 / 1270
            }
        },
        tail: {
            height: math.unit(1.772, "meter"),
            name: "Tail",
            image: {
                source: "./media/characters/draekon-sylviar/tail.svg"
            }
        },
        head: {
            height: math.unit(1.331, "meter"),
            name: "Head",
            image: {
                source: "./media/characters/draekon-sylviar/head.svg"
            }
        },
        hand: {
            height: math.unit(0.564, "meter"),
            name: "Hand",
            image: {
                source: "./media/characters/draekon-sylviar/hand.svg"
            }
        },
        foot: {
            height: math.unit(0.621, "meter"),
            name: "Foot",
            image: {
                source: "./media/characters/draekon-sylviar/foot.svg",
                bottom: 32 / 324
            }
        },
        dick: {
            height: math.unit(61, "cm"),
            name: "Dick",
            image: {
                source: "./media/characters/draekon-sylviar/dick.svg"
            }
        },
        dickseparated: {
            height: math.unit(61, "cm"),
            name: "Dick-separated",
            image: {
                source: "./media/characters/draekon-sylviar/dick-separated.svg"
            }
        },
    },
    [
        {
            name: "Small",
            height: math.unit(4.53 / 2, "meters"),
            default: true
        },
        {
            name: "Normal",
            height: math.unit(4.53, "meters"),
            default: true
        },
        {
            name: "Large",
            height: math.unit(4.53 * 2, "meters"),
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Brawler", species: ["german-shepherd"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 2 / 12, "feet"),
            weight: math.unit(180, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/brawler/front.svg",
                extra: 3301 / 3027,
                bottom: 138 / 3439
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 2 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Alex", species: ["bayleef"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(11, "feet"),
            weight: math.unit(1000, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/alex/front.svg",
                bottom: 44.5 / 620
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(5, "inches")
        },
        {
            name: "Normal",
            height: math.unit(11, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(9.5e9, "feet")
        },
        {
            name: "Max Size",
            height: math.unit(1.4e283, "yottameters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Zenari", species: ["zenari"], tags: ["anthro"] },
    {
        female: {
            height: math.unit(29.9, "m"),
            weight: math.unit(Math.pow((29.9 / 2), 3) * 80, "kg"),
            name: "Female",
            image: {
                source: "./media/characters/zenari/female.svg",
                extra: 3281.6 / 3217,
                bottom: 72.2 / 3353
            }
        },
        male: {
            height: math.unit(27.7, "m"),
            weight: math.unit(Math.pow((27.7 / 2), 3) * 80, "kg"),
            name: "Male",
            image: {
                source: "./media/characters/zenari/male.svg",
                extra: 3008 / 2991,
                bottom: 54.6 / 3069
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(29.7, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mactarian", species: ["mactarian"], tags: ["anthro"] },
    {
        female: {
            height: math.unit(23.8, "m"),
            weight: math.unit(Math.pow((23.8 / 2), 3) * 80, "kg"),
            name: "Female",
            image: {
                source: "./media/characters/mactarian/female.svg",
                extra: 2662 / 2569,
                bottom: 73 / 2736
            }
        },
        male: {
            height: math.unit(23.8, "m"),
            weight: math.unit(Math.pow((23.8 / 2), 3) * 80, "kg"),
            name: "Male",
            image: {
                source: "./media/characters/mactarian/male.svg",
                extra: 2673 / 2600,
                bottom: 76 / 2750
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(23.8, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Umok", species: ["umok"], tags: ["anthro"] },
    {
        female: {
            height: math.unit(19.3, "m"),
            weight: math.unit(Math.pow((19.3 / 2), 3) * 60, "kg"),
            name: "Female",
            image: {
                source: "./media/characters/umok/female.svg",
                extra: 2186 / 2078,
                bottom: 87 / 2277
            }
        },
        male: {
            height: math.unit(19.5, "m"),
            weight: math.unit(Math.pow((19.5 / 2), 3) * 60, "kg"),
            name: "Male",
            image: {
                source: "./media/characters/umok/male.svg",
                extra: 2233 / 2140,
                bottom: 24.4 / 2258
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(19.3, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Joraxian", species: ["joraxian"], tags: ["anthro"] },
    {
        female: {
            height: math.unit(26.15, "m"),
            weight: math.unit(Math.pow((26.15 / 2), 3) * 85, "kg"),
            name: "Female",
            image: {
                source: "./media/characters/joraxian/female.svg",
                extra: 2912 / 2824,
                bottom: 36 / 2956
            }
        },
        male: {
            height: math.unit(25.4, "m"),
            weight: math.unit(Math.pow((25.4 / 2), 3) * 85, "kg"),
            name: "Male",
            image: {
                source: "./media/characters/joraxian/male.svg",
                extra: 2877 / 2721,
                bottom: 82 / 2967
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(26.15, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sthara", species: ["sthara"], tags: ["anthro"] },
    {
        female: {
            height: math.unit(21.6, "m"),
            weight: math.unit(Math.pow((21.6 / 2), 3) * 80, "kg"),
            name: "Female",
            image: {
                source: "./media/characters/sthara/female.svg",
                extra: 2516 / 2347,
                bottom: 21.5 / 2537
            }
        },
        male: {
            height: math.unit(24, "m"),
            weight: math.unit(Math.pow((24 / 2), 3) * 80, "kg"),
            name: "Male",
            image: {
                source: "./media/characters/sthara/male.svg",
                extra: 2732 / 2607,
                bottom: 23 / 2732
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(21.6, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Luka Bryzant", species: ["german-shepherd"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 4 / 12, "feet"),
            weight: math.unit(175, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/luka-bryzant/front.svg",
                extra: 311 / 289,
                bottom: 4 / 315
            }
        },
        back: {
            height: math.unit(6 + 4 / 12, "feet"),
            weight: math.unit(175, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/luka-bryzant/back.svg",
                extra: 311 / 289,
                bottom: 3.8 / 313.7
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(10, "inches")
        },
        {
            name: "Normal",
            height: math.unit(6 + 4 / 12, "feet"),
            default: true
        },
        {
            name: "Large",
            height: math.unit(12, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Aman Aquila", species: ["husky", "german-shepherd"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(185, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/aman-aquila/front.svg",
                extra: 1013 / 976,
                bottom: 45.6 / 1057
            }
        },
        side: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(185, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/aman-aquila/side.svg",
                extra: 1054 / 1011,
                bottom: 15 / 1070
            }
        },
        back: {
            height: math.unit(5 + 7 / 12, "feet"),
            weight: math.unit(185, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/aman-aquila/back.svg",
                extra: 1026 / 970,
                bottom: 12 / 1039
            }
        },
        head: {
            height: math.unit(1.211, "feet"),
            name: "Head",
            image: {
                source: "./media/characters/aman-aquila/head.svg",
            }
        },
    },
    [
        {
            name: "Minimicro",
            height: math.unit(0.057, "inches")
        },
        {
            name: "Micro",
            height: math.unit(7, "inches")
        },
        {
            name: "Mini",
            height: math.unit(3 + 7 / 12, "feet")
        },
        {
            name: "Normal",
            height: math.unit(5 + 7 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(157 + 7 / 12, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(1557 + 7 / 12, "feet")
        },
        {
            name: "Gigamacro",
            height: math.unit(15557 + 7 / 12, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Hiphae", species: ["mouse"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(3 + 2 / 12, "inches"),
            weight: math.unit(0.3, "ounces"),
            name: "Front",
            image: {
                source: "./media/characters/hiphae/front.svg",
                extra: 1931 / 1683,
                bottom: 24 / 1955
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(3 + 1 / 2, "inches"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Nicky", species: ["shark"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 10 / 12, "feet"),
            weight: math.unit(165, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/nicky/front.svg",
                extra: 3144 / 2886,
                bottom: 45.6 / 3192
            }
        },
        back: {
            height: math.unit(5 + 10 / 12, "feet"),
            weight: math.unit(165, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/nicky/back.svg",
                extra: 3055 / 2804,
                bottom: 28.4 / 3087
            }
        },
        frontclothed: {
            height: math.unit(5 + 10 / 12, "feet"),
            weight: math.unit(165, "lb"),
            name: "Front-clothed",
            image: {
                source: "./media/characters/nicky/front-clothed.svg",
                extra: 3184.9 / 2926.9,
                bottom: 86.5 / 3239.9
            }
        },
        foot: {
            height: math.unit(1.16, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/nicky/foot.svg"
            }
        },
        feet: {
            height: math.unit(1.34, "feet"),
            name: "Feet",
            image: {
                source: "./media/characters/nicky/feet.svg"
            }
        },
        maw: {
            height: math.unit(0.9, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/nicky/maw.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 10 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(60, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(1, "mile")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Blair", species: ["seal"], tags: ["taur"] },
    {
        side: {
            height: math.unit(10, "feet"),
            weight: math.unit(600, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/blair/side.svg",
                bottom: 16.6 / 475,
                extra: 458 / 431
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(8, "inches")
        },
        {
            name: "Normal",
            height: math.unit(10, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(180, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Fisher", species: ["dog", "fish"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 4 / 12, "feet"),
            weight: math.unit(125, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/fisher/front.svg",
                extra: 444 / 390,
                bottom: 2 / 444.8
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(4, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 4 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(100, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Gliss", species: ["sergal"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6.71, "feet"),
            weight: math.unit(200, "lb"),
            capacity: math.unit(1000000, "people"),
            name: "Front",
            image: {
                source: "./media/characters/gliss/front.svg",
                extra: 2347 / 2231,
                bottom: 113 / 2462
            }
        },
        hammerspaceSize: {
            height: math.unit(6.71 * 717, "feet"),
            weight: math.unit(200, "lb"),
            capacity: math.unit(1000000, "people"),
            name: "Hammerspace Size",
            image: {
                source: "./media/characters/gliss/front.svg",
                extra: 2347 / 2231,
                bottom: 113 / 2462
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6.71, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Dune Anderson", species: ["wolf"], tags: ["feral"] },
    {
        side: {
            height: math.unit(1.44, "m"),
            weight: math.unit(80, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/dune-anderson/side.svg",
                bottom: 49 / 1426
            }
        },
    },
    [
        {
            name: "Wolf-sized",
            height: math.unit(1.44, "meters")
        },
        {
            name: "Normal",
            height: math.unit(5.05, "meters"),
            default: true
        },
        {
            name: "Big",
            height: math.unit(14.4, "meters")
        },
        {
            name: "Huge",
            height: math.unit(144, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Hind", species: ["protogen"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(425, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/hind/front.svg",
                extra: 2091 / 1860,
                bottom: 129 / 2220
            }
        },
        back: {
            height: math.unit(7, "feet"),
            weight: math.unit(425, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/hind/back.svg",
                extra: 2091 / 1860,
                bottom: 24.6 / 2309
            }
        },
        tail: {
            height: math.unit(2.8, "feet"),
            name: "Tail",
            image: {
                source: "./media/characters/hind/tail.svg"
            }
        },
        head: {
            height: math.unit(2.55, "feet"),
            name: "Head",
            image: {
                source: "./media/characters/hind/head.svg"
            }
        },
    },
    [
        {
            name: "XS",
            height: math.unit(0.7, "feet")
        },
        {
            name: "Normal",
            height: math.unit(7, "feet"),
            default: true
        },
        {
            name: "XL",
            height: math.unit(70, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Dylan (Skaven)", species: ["skaven"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/dylan-skaven/front.svg",
                extra: 2318 / 2063,
                bottom: 93.4 / 2410
            }
        },
    },
    [
        {
            name: "Nano",
            height: math.unit(1, "mm")
        },
        {
            name: "Micro",
            height: math.unit(1, "cm")
        },
        {
            name: "Normal",
            height: math.unit(2.1, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Solex Draconov", species: ["dragon", "kitsune"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 5 / 12, "feet"),
            weight: math.unit(357, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/solex-draconov/front.svg",
                extra: 1993 / 1865,
                bottom: 117 / 2111
            }
        },
    },
    [
        {
            name: "Natural Height",
            height: math.unit(7 + 5 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(350, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(1000, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(20, "km")
        },
        {
            name: "Megamacro+",
            height: math.unit(1000, "km")
        },
        {
            name: "Gigamacro",
            height: math.unit(2.5, "Gm")
        },
        {
            name: "Teramacro",
            height: math.unit(15, "Tm")
        },
        {
            name: "Galactic",
            height: math.unit(30, "Zm")
        },
        {
            name: "Universal",
            height: math.unit(21000, "Ym")
        },
        {
            name: "Omniversal",
            height: math.unit(9.861e50, "Ym")
        },
        {
            name: "Existential",
            height: math.unit(1e300, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mandarax", species: ["dragon"], tags: ["feral"] },
    {
        side: {
            height: math.unit(25, "feet"),
            weight: math.unit(90000, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/mandarax/side.svg",
                extra: 614 / 332,
                bottom: 55 / 630
            }
        },
        head: {
            height: math.unit(11.4, "feet"),
            name: "Head",
            image: {
                source: "./media/characters/mandarax/head.svg"
            }
        },
        belly: {
            height: math.unit(33, "feet"),
            name: "Belly",
            capacity: math.unit(500, "people"),
            image: {
                source: "./media/characters/mandarax/belly.svg"
            }
        },
        dick: {
            height: math.unit(8.46, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/mandarax/dick.svg"
            }
        },
        top: {
            height: math.unit(28, "meters"),
            name: "Top",
            image: {
                source: "./media/characters/mandarax/top.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(25, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Pixil", species: ["sylveon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5, "feet"),
            weight: math.unit(90, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/pixil/front.svg",
                extra: 2000 / 1618,
                bottom: 12.3 / 2011
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(10, "miles"),
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Angel", species: ["catgirl"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 2 / 12, "feet"),
            weight: math.unit(200, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/angel/front.svg",
                extra: 1830 / 1737,
                bottom: 22.6 / 1854,
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 2 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(1000, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(2, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(20, "earths")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mekana", species: ["cowgirl"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5, "feet"),
            weight: math.unit(180, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/mekana/front.svg",
                extra: 1671 / 1605,
                bottom: 3.5 / 1691
            }
        },
        side: {
            height: math.unit(5, "feet"),
            weight: math.unit(180, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/mekana/side.svg",
                extra: 1671 / 1605,
                bottom: 3.5 / 1691
            }
        },
        back: {
            height: math.unit(5, "feet"),
            weight: math.unit(180, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/mekana/back.svg",
                extra: 1671 / 1605,
                bottom: 3.5 / 1691
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Pixie", species: ["pony"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(4 + 6 / 12, "feet"),
            weight: math.unit(80, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/pixie/front.svg",
                extra: 1924 / 1825,
                bottom: 22.4 / 1946
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4 + 6 / 12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(40, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "The Lascivious", species: ["wolxi", "deity"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2.1, "meters"),
            weight: math.unit(200, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/the-lascivious/front.svg",
                extra: 1 / 0.893,
                bottom: 3.5 / 573.7
            }
        },
    },
    [
        {
            name: "Human Scale",
            height: math.unit(2.1, "meters")
        },
        {
            name: "Wolxi Scale",
            height: math.unit(46.2, "m"),
            default: true
        },
        {
            name: "Boinker of Buildings",
            height: math.unit(10, "km")
        },
        {
            name: "Shagger of Skyscrapers",
            height: math.unit(40, "km")
        },
        {
            name: "Banger of Boroughs",
            height: math.unit(4000, "km")
        },
        {
            name: "Screwer of States",
            height: math.unit(100000, "km")
        },
        {
            name: "Pounder of Planets",
            height: math.unit(2000000, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "AJ", species: ["wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/aj/front.svg",
                extra: 2039 / 1562,
                bottom: 40 / 2079
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(11 + 6 / 12, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(60, "megameters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Koros", species: ["dragon"], tags: ["feral"] },
    {
        side: {
            height: math.unit(31 + 8/12, "feet"),
            weight: math.unit(75000, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/koros/side.svg",
                extra: 1442/1297,
                bottom: 122.7/1562
            }
        },
        dicksKingsCrown: {
            height: math.unit(6, "feet"),
            name: "Dicks (King's Crown)",
            image: {
                source: "./media/characters/koros/dicks-kings-crown.svg"
            }
        },
        dicksTailSet: {
            height: math.unit(3, "feet"),
            name: "Dicks (Tail Set)",
            image: {
                source: "./media/characters/koros/dicks-tail-set.svg"
            }
        },
        dickCumming: {
            height: math.unit(7.98, "feet"),
            name: "Dick (Cumming)",
            image: {
                source: "./media/characters/koros/dick-cumming.svg"
            }
        },
        dicksBack: {
            height: math.unit(5.9, "feet"),
            name: "Dicks (Back)",
            image: {
                source: "./media/characters/koros/dicks-back.svg"
            }
        },
        dicksFront: {
            height: math.unit(3.72, "feet"),
            name: "Dicks (Front)",
            image: {
                source: "./media/characters/koros/dicks-front.svg"
            }
        },
        dicksPeeking: {
            height: math.unit(3.0, "feet"),
            name: "Dicks (Peeking)",
            image: {
                source: "./media/characters/koros/dicks-peeking.svg"
            }
        },
        eye: {
            height: math.unit(1.7, "feet"),
            name: "Eye",
            image: {
                source: "./media/characters/koros/eye.svg"
            }
        },
        headFront: {
            height: math.unit(11.69, "feet"),
            name: "Head (Front)",
            image: {
                source: "./media/characters/koros/head-front.svg"
            }
        },
        headSide: {
            height: math.unit(14, "feet"),
            name: "Head (Side)",
            image: {
                source: "./media/characters/koros/head-side.svg"
            }
        },
        leg: {
            height: math.unit(17, "feet"),
            name: "Leg",
            image: {
                source: "./media/characters/koros/leg.svg"
            }
        },
        mawSide: {
            height: math.unit(12.8, "feet"),
            name: "Maw (Side)",
            image: {
                source: "./media/characters/koros/maw-side.svg"
            }
        },
        mawSpitting: {
            height: math.unit(17, "feet"),
            name: "Maw (Spitting)",
            image: {
                source: "./media/characters/koros/maw-spitting.svg"
            }
        },
        slit: {
            height: math.unit(2.8, "feet"),
            name: "Slit",
            image: {
                source: "./media/characters/koros/slit.svg"
            }
        },
        stomach: {
            height: math.unit(6.8, "feet"),
            capacity: math.unit(20, "people"),
            name: "Stomach",
            image: {
                source: "./media/characters/koros/stomach.svg"
            }
        },
        wingspanBottom: {
            height: math.unit(114, "feet"),
            name: "Wingspan (Bottom)",
            image: {
                source: "./media/characters/koros/wingspan-bottom.svg"
            }
        },
        wingspanTop: {
            height: math.unit(104, "feet"),
            name: "Wingspan (Top)",
            image: {
                source: "./media/characters/koros/wingspan-top.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(31 + 8/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Vexx", species: ["skarlan"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(18 + 5/12, "feet"),
            weight: math.unit(3750, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/vexx/front.svg",
                extra: 426/396,
                bottom: 31.5/458
            }
        },
        maw: {
            height: math.unit(6, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/vexx/maw.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(18 + 5/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Baadra", species: ["skarlan"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(17 + 6/12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/baadra/front.svg",
                extra: 3137/2890,
                bottom: 168.4/3305
            }
        },
        back: {
            height: math.unit(17 + 6/12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/baadra/back.svg",
                extra: 3142/2890,
                bottom: 220/3371
            }
        },
        head: {
            height: math.unit(5.45, "feet"),
            name: "Head",
            image: {
                source: "./media/characters/baadra/head.svg"
            }
        },
        headAngry: {
            height: math.unit(4.95, "feet"),
            name: "Head (Angry)",
            image: {
                source: "./media/characters/baadra/head-angry.svg"
            }
        },
        headOpen: {
            height: math.unit(6, "feet"),
            name: "Head (Open)",
            image: {
                source: "./media/characters/baadra/head-open.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(17 + 6/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Juri", species: ["kitsune"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 3/12, "feet"),
            weight: math.unit(180, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/juri/front.svg",
                extra: 1401/1237,
                bottom: 18.5/1418
            }
        },
        side: {
            height: math.unit(7 + 3/12, "feet"),
            weight: math.unit(180, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/juri/side.svg",
                extra: 1424/1242,
                bottom: 18.5/1447
            }
        },
        sitting: {
            height: math.unit(6, "feet"),
            weight: math.unit(180, "lb"),
            name: "Sitting",
            image: {
                source: "./media/characters/juri/sitting.svg",
                extra: 1270/1143,
                bottom: 100/1343
            }
        },
        back: {
            height: math.unit(7 + 3/12, "feet"),
            weight: math.unit(180, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/juri/back.svg",
                extra: 1377/1240,
                bottom: 23.7/1405
            }
        },
        maw: {
            height: math.unit(2.8, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/juri/maw.svg"
            }
        },
        stomach: {
            height: math.unit(0.89, "feet"),
            capacity: math.unit(4, "liters"),
            name: "Stomach",
            image: {
                source: "./media/characters/juri/stomach.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 3/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Maxene Sita", species: ["fox"], tags: ["anthro"] },
    {
        fox: {
            height: math.unit(5 + 6/12, "feet"),
            weight: math.unit(140, "lb"),
            name: "Fox",
            image: {
                source: "./media/characters/maxene-sita/fox.svg",
                extra: 146/138,
                bottom: 2.1/148.19
            }
        },
        kitsune: {
            height: math.unit(10, "feet"),
            weight: math.unit(800, "lb"),
            name: "Kitsune",
            image: {
                source: "./media/characters/maxene-sita/kitsune.svg",
                extra: 185/176,
                bottom: 4.7/189.9
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 6/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Maia", species: ["mew"], tags: ["feral"] },
    {
        front: {
            height: math.unit(3 + 4/12, "feet"),
            weight: math.unit(70, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/maia/front.svg",
                extra: 227/219.5,
                bottom: 40 / 267
            }
        },
        back: {
            height: math.unit(3 + 4/12, "feet"),
            weight: math.unit(70, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/maia/back.svg",
                extra: 237/225
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(3 + 4/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Jabaro", species: ["cheetah"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 10/12, "feet"),
            weight: math.unit(197, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/jabaro/front.svg",
                extra: 225/216,
                bottom: 5.06/230
            }
        },
        back: {
            height: math.unit(5 + 10/12, "feet"),
            weight: math.unit(197, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/jabaro/back.svg",
                extra: 225/219,
                bottom: 1.9/227
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 10/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Risa", species: ["corvid"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 8/12, "feet"),
            weight: math.unit(139, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/risa/front.svg",
                extra: 270/260,
                bottom: 11.2/282
            }
        },
        back: {
            height: math.unit(5 + 8/12, "feet"),
            weight: math.unit(139, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/risa/back.svg",
                extra: 264/255,
                bottom: 4/268
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 8/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Weatley", species: ["chimera"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2 + 11/12, "feet"),
            weight: math.unit(30, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/weatley/front.svg",
                bottom: 10.7/414,
                extra: 403.5/362
            }
        },
        back: {
            height: math.unit(2 + 11/12, "feet"),
            weight: math.unit(30, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/weatley/back.svg",
                bottom: 10.7/414,
                extra: 403.5/362
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2 + 11/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Mercury Crescent", species: ["dragon", "kobold"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 2/12, "feet"),
            weight: math.unit(50, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/mercury-crescent/front.svg",
                extra: 1088/1033,
                bottom: 18.9/1109
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 2/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Diamond Jones", species: ["kobold"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "feet"),
            weight: math.unit(15, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/diamond-jones/front.svg",
                bottom: 16/568
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sweet Bit", species: ["gestalt", "kobold"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(3, "feet"),
            weight: math.unit(30, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/sweet-bit/front.svg",
                extra: 675/567,
                bottom: 27.7/703
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(3, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Umbrazen", species: ["mimic"], tags: ["feral"] },
    {
        side: {
            height: math.unit(9.178, "feet"),
            weight: math.unit(500, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/umbrazen/side.svg",
                extra: 1730/1473,
                bottom: 34.6/1765
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(9.178, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Arlist", species: ["jackal"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(10, "feet"),
            weight: math.unit(750, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/arlist/front.svg",
                extra: 961/778,
                bottom: 6.2/986
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(10, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Aradel", species: ["jackalope"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 1/12, "feet"),
            weight: math.unit(110, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/aradel/front.svg",
                extra: 324/303,
                bottom: 3.6/329.4
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 1/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Serryn", species: ["calico-rat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(3 + 8/12, "feet"),
            weight: math.unit(50, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/serryn/front.svg",
                extra: 1792/1656,
                bottom: 43.5/1840
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(3 + 8/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Xavier Thyme" },
    {
        front: {
            height: math.unit(7 + 10/12, "feet"),
            weight: math.unit(255, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/xavier-thyme/front.svg",
                extra: 3733/3642,
                bottom: 131/3869
            }
        },
        frontRaven: {
            height: math.unit(7 + 10/12, "feet"),
            weight: math.unit(255, "lb"),
            name: "Front (Raven)",
            image: {
                source: "./media/characters/xavier-thyme/front-raven.svg",
                extra: 4385/3642,
                bottom: 131/4517
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 10/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kiki", species: ["rabbit", "panda"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.6, "m"),
            weight: math.unit(50, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/kiki/front.svg",
                extra: 4682/3610,
                bottom: 115/4777
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1.6, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ryoko", species: ["oni"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(50, "m"),
            weight: math.unit(500, "tonnes"),
            name: "Front",
            image: {
                source: "./media/characters/ryoko/front.svg",
                extra: 4632/3926,
                bottom: 193/4823
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(50, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Elio", species: ["umbra"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(30, "m"),
            weight: math.unit(22, "tonnes"),
            name: "Front",
            image: {
                source: "./media/characters/elio/front.svg",
                extra: 4582/3720,
                bottom: 236/4828
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(30, "meters"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Azura", species: ["phoenix"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 3/12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/azura/front.svg",
                extra: 1149/1135,
                bottom: 45/1194
            }
        },
        frontClothed: {
            height: math.unit(6 + 3/12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front (Clothed)",
            image: {
                source: "./media/characters/azura/front-clothed.svg",
                extra: 1149/1135,
                bottom: 45/1194
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 3/12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(20 + 6/12, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(12, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(10000, "miles")
        },
        {
            name: "Teramacro",
            height: math.unit(900000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Zeus", species: ["pegasus"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(12, "feet"),
            weight: math.unit(1, "ton"),
            capacity: math.unit(660000, "gallons"),
            name: "Front",
            image: {
                source: "./media/characters/zeus/front.svg",
                extra: 5005/4717,
                bottom: 363/5388
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(12, "feet")
        },
        {
            name: "Preferred Size",
            height: math.unit(0.5, "miles"),
            default: true
        },
        {
            name: "Giga Horse",
            height: math.unit(300, "miles")
        },
        {
            name: "Riding Planets",
            height: math.unit(30, "megameters")
        },
        {
            name: "Cosmic Giant",
            height: math.unit(3, "zettameters")
        },
        {
            name: "Breeding God",
            height: math.unit(9.92e22, "yottameters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Fang", species: ["monster"], tags: ["feral"] },
    {
        side: {
            height: math.unit(9, "feet"),
            weight: math.unit(1500, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/fang/side.svg",
                extra: 924/866,
                bottom: 47.5/972.3
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(9, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(75 + 6/12, "feet")
        },
        {
            name: "Teramacro",
            height: math.unit(50000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rekhit", species: ["horse"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(10, "feet"),
            weight: math.unit(2, "tons"),
            name: "Front",
            image: {
                source: "./media/characters/rekhit/front.svg",
                extra: 2796/2590,
                bottom: 225/3022
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(10, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(500, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Dahlia Verrick" },
    {
        front: {
            height: math.unit(7 + 6.451/12, "feet"),
            weight: math.unit(310, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/dahlia-verrick/front.svg",
                extra: 1488/1365,
                bottom: 6.2/1495
            }
        },
        back: {
            height: math.unit(7 + 6.451/12, "feet"),
            weight: math.unit(310, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/dahlia-verrick/back.svg",
                extra: 1472/1351,
                bottom: 5.28/1477
            }
        },
        frontBusiness: {
            height: math.unit(7 + 6.451/12, "feet"),
            weight: math.unit(200, "lb"),
            name: "Front (Business)",
            image: {
                source: "./media/characters/dahlia-verrick/front-business.svg",
                extra: 1478/1381,
                bottom: 5.5/1484
            }
        },
        frontCasual: {
            height: math.unit(7 + 6.451/12, "feet"),
            weight: math.unit(200, "lb"),
            name: "Front (Casual)",
            image: {
                source: "./media/characters/dahlia-verrick/front-casual.svg",
                extra: 1478/1381,
                bottom: 5.5/1484
            }
        },
    },
    [
        {
            name: "Travel-Sized",
            height: math.unit(7.45, "inches")
        },
        {
            name: "Normal",
            height: math.unit(7 + 6.451/12, "feet"),
            default: true
        },
        {
            name: "Hitting the Town",
            height: math.unit(37 + 8/12, "feet")
        },
        {
            name: "Stomp in the Suburbs",
            height: math.unit(964 + 9.728/12, "feet")
        },
        {
            name: "Sit on the City",
            height: math.unit(61747 + 10.592/12, "feet")
        },
        {
            name: "Glomp the Globe",
            height: math.unit(252919327 + 4.832/12, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Balina Mahigan", species: ["wolf", "cow"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 4/12, "feet"),
            weight: math.unit(320, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/balina-mahigan/front.svg",
                extra: 447/428,
                bottom: 18/466
            }
        },
        back: {
            height: math.unit(6 + 4/12, "feet"),
            weight: math.unit(320, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/balina-mahigan/back.svg",
                extra: 445/428,
                bottom: 4.07/448
            }
        },
        arm: {
            height: math.unit(1.88, "feet"),
            name: "Arm",
            image: {
                source: "./media/characters/balina-mahigan/arm.svg"
            }
        },
        backPort: {
            height: math.unit(0.685, "feet"),
            name: "Back Port",
            image: {
                source: "./media/characters/balina-mahigan/back-port.svg"
            }
        },
        hoofpaw: {
            height: math.unit(1.41, "feet"),
            name: "Hoofpaw",
            image: {
                source: "./media/characters/balina-mahigan/hoofpaw.svg"
            }
        },
        leftHandBack: {
            height: math.unit(0.938, "feet"),
            name: "Left Hand (Back)",
            image: {
                source: "./media/characters/balina-mahigan/left-hand-back.svg"
            }
        },
        leftHandFront: {
            height: math.unit(0.938, "feet"),
            name: "Left Hand (Front)",
            image: {
                source: "./media/characters/balina-mahigan/left-hand-front.svg"
            }
        },
        rightHandBack: {
            height: math.unit(0.95, "feet"),
            name: "Right Hand (Back)",
            image: {
                source: "./media/characters/balina-mahigan/right-hand-back.svg"
            }
        },
        rightHandFront: {
            height: math.unit(0.95, "feet"),
            name: "Right Hand (Front)",
            image: {
                source: "./media/characters/balina-mahigan/right-hand-front.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 4/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Balina Mejeri", tags: ["wolf", "cow"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(320, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/balina-mejeri/front.svg",
                extra: 517/488,
                bottom: 44.2/561
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 4/12, "feet")
        },
        {
            name: "Business",
            height: math.unit(155, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Balbarian", species: ["wolf", "cow"], tags: ["anthro"] },
    {
        kneeling: {
            height: math.unit(6 + 4/12, "feet"),
            weight: math.unit(300*20, "lb"),
            name: "Kneeling",
            image: {
                source: "./media/characters/balbarian/kneeling.svg",
                extra: 922/862,
                bottom: 42.4/965
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 4/12, "feet")
        },
        {
            name: "Treasured",
            height: math.unit(18 + 9/12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(900, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Balina Amarini", species: ["wolf", "cow"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 4/12, "feet"),
            weight: math.unit(325, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/balina-amarini/front.svg",
                extra: 415/403,
                bottom: 19/433.4
            }
        },
        back: {
            height: math.unit(6 + 4/12, "feet"),
            weight: math.unit(325, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/balina-amarini/back.svg",
                extra: 415/403,
                bottom: 13.5/432
            }
        },
        overdrive: {
            height: math.unit(6 + 4/12, "feet"),
            weight: math.unit(400, "lb"),
            name: "Overdrive",
            image: {
                source: "./media/characters/balina-amarini/overdrive.svg",
                extra: 269/259,
                bottom: 12/282
            }
        },
    },
    [
        {
            name: "Boom",
            height: math.unit(9 + 10/12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(280, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Lady Kubwa", species: ["giraffe", "deity"], tags: ["anthro"] },
    {
        goddess: {
            height: math.unit(600, "feet"),
            weight: math.unit(2000000, "tons"),
            name: "Goddess",
            image: {
                source: "./media/characters/lady-kubwa/goddess.svg",
                extra: 1240.5/1223,
                bottom: 22/1263
            }
        },
        goddesser: {
            height: math.unit(900, "feet"),
            weight: math.unit(20000000, "lb"),
            name: "Goddess-er",
            image: {
                source: "./media/characters/lady-kubwa/goddess-er.svg",
                extra: 899/888,
                bottom: 12.6/912
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(600, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(250, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Tala Grovehorn", species: ["tauren"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 7/12, "feet"),
            weight: math.unit(250, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/tala-grovehorn/front.svg",
                extra: 2636/2525,
                bottom: 147/2781
            }
        },
        back: {
            height: math.unit(7 + 7/12, "feet"),
            weight: math.unit(250, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/tala-grovehorn/back.svg",
                extra: 2635/2539,
                bottom: 100/2732.8
            }
        },
        mouth: {
            height: math.unit(1.15, "feet"),
            name: "Mouth",
            image: {
                source: "./media/characters/tala-grovehorn/mouth.svg"
            }
        },
        dick: {
            height: math.unit(2.36, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/tala-grovehorn/dick.svg"
            }
        },
        slit: {
            height: math.unit(0.61, "feet"),
            name: "Slit",
            image: {
                source: "./media/characters/tala-grovehorn/slit.svg"
            }
        },
    },
    [
        
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Epona", species: ["unicorn"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 7/12, "feet"),
            weight: math.unit(225, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/epona/front.svg",
                extra: 2445/2290,
                bottom: 251/2696
            }
        },
        back: {
            height: math.unit(7 + 7/12, "feet"),
            weight: math.unit(225, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/epona/back.svg",
                extra: 2546/2408,
                bottom: 44/2589
            }
        },
        genitals: {
            height: math.unit(1.5, "feet"),
            name: "Genitals",
            image: {
                source: "./media/characters/epona/genitals.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 7/12, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Avia Bloodbourn", species: ["lion"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(518, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/avia-bloodbourn/front.svg",
                extra: 1466/1350,
                bottom: 65/1527
            }
        },
    },
    [
        
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Amera", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(9.35, "feet"),
            weight: math.unit(600, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/amera/front.svg",
                extra: 891/818,
                bottom: 30/922.7
            }
        },
        back: {
            height: math.unit(9.35, "feet"),
            weight: math.unit(600, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/amera/back.svg",
                extra: 876/824,
                bottom: 6.8/884
            }
        },
        dick: {
            height: math.unit(2.14, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/amera/dick.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(9.35, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Rosewen", species: ["vulpera"], tags: ["anthro"] },
    {
        kneeling: {
            height: math.unit(3 + 4/12, "feet"),
            weight: math.unit(90, "lb"),
            name: "Kneeling",
            image: {
                source: "./media/characters/rosewen/kneeling.svg",
                extra: 1835/1571,
                bottom: 27.7/1862
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(3 + 4/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sabah", species: ["lucario"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 10/12, "feet"),
            weight: math.unit(200, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sabah/front.svg",
                extra: 849/763,
                bottom: 33.9/881
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 10/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Purple Flame", species: ["pony"], tags: ["feral"] },
    {
        front: {
            height: math.unit(3 + 5/12, "feet"),
            weight: math.unit(40, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/purple-flame/front.svg",
                extra: 1577/1412,
                bottom: 97/1694
            }
        },
        frontDressed: {
            height: math.unit(3 + 5/12, "feet"),
            weight: math.unit(40, "kg"),
            name: "Front (Dressed)",
            image: {
                source: "./media/characters/purple-flame/front-dressed.svg",
                extra: 1577/1412,
                bottom: 97/1694
            }
        },
        headphones: {
            height: math.unit(0.85, "feet"),
            name: "Headphones",
            image: {
                source: "./media/characters/purple-flame/headphones.svg"
            }
        },
    },
    [
        {
            name: "Really Small",
            height: math.unit(5, "cm")
        },
        {
            name: "Micro",
            height: math.unit(1 + 5/12, "feet")
        },
        {
            name: "Normal",
            height: math.unit(3 + 5/12, "feet"),
            default: true
        },
        {
            name: "Minimacro",
            height: math.unit(125, "feet")
        },
        {
            name: "Macro",
            height: math.unit(0.5, "miles")
        },
        {
            name: "Megamacro",
            height: math.unit(50, "miles")
        },
        {
            name: "Gigantic",
            height: math.unit(750, "miles")
        },
        {
            name: "Planetary",
            height: math.unit(15000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Arsenal", species: ["wolf", "deity"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(14, "feet"),
            weight: math.unit(959, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/arsenal/front.svg",
                extra: 2357/2157,
                bottom: 93/2458
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(14, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Adira", species: ["mouse"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/adira/front.svg",
                extra: 1078/1029,
                bottom: 87/1166
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(4, "inches"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(50, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Grim", species: ["ceratosaurus"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(16, "feet"),
            weight: math.unit(1000, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/grim/front.svg",
                extra: 622/614,
                bottom: 18.1/642
            }
        },
        back: {
            height: math.unit(16, "feet"),
            weight: math.unit(1000, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/grim/back.svg",
                extra: 610.6/602,
                bottom: 40.8/652
            }
        },
        hunched: {
            height: math.unit(9.75, "feet"),
            weight: math.unit(1000, "lb"),
            name: "Hunched",
            image: {
                source: "./media/characters/grim/hunched.svg",
                extra: 304/297,
                bottom: 35.4/394
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(16, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sinja", species: ["monster", "fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2.3, "meters"),
            weight: math.unit(300, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sinja/front-sfw.svg",
                extra: 1393/1294,
                bottom: 70/1463
            }
        },
        frontNsfw: {
            height: math.unit(2.3, "meters"),
            weight: math.unit(300, "lb"),
            name: "Front (NSFW)",
            image: {
                source: "./media/characters/sinja/front-nsfw.svg",
                extra: 1393/1294,
                bottom: 70/1463
            }
        },
        back: {
            height: math.unit(2.3, "meters"),
            weight: math.unit(300, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/sinja/back.svg",
                extra: 1393/1294,
                bottom: 70/1463
            }
        },
        head: {
            height: math.unit(1.771, "feet"),
            name: "Head",
            image: {
                source: "./media/characters/sinja/head.svg"
            }
        },
        slit: {
            height: math.unit(0.8, "feet"),
            name: "Slit",
            image: {
                source: "./media/characters/sinja/slit.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2.3, "meters")
        },
        {
            name: "Macro",
            height: math.unit(91, "meters"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(91440, "meters")
        },
        {
            name: "Gigamacro",
            height: math.unit(60960000, "meters")
        },
        {
            name: "Teramacro",
            height: math.unit(9144000000, "meters")
        },

    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kyu", species: ["cat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1.7, "meters"),
            weight: math.unit(130, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kyu/front.svg",
                extra: 415/395,
                bottom: 5/420
            }
        },
        head: {
            height: math.unit(1.75, "feet"),
            name: "Head",
            image: {
                source: "./media/characters/kyu/head.svg"
            }
        },
        foot: {
            height: math.unit(0.81, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/kyu/foot.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(1.7, "meters")
        },
        {
            name: "Macro",
            height: math.unit(131, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(91440, "meters")
        },
        {
            name: "Gigamacro",
            height: math.unit(60960000, "meters")
        },
        {
            name: "Teramacro",
            height: math.unit(9144000000, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Joey", species: ["kangaroo"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7 + 1/12, "feet"),
            weight: math.unit(250, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/joey/front.svg",
                extra: 1791/1537,
                bottom: 28/1816
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(3, "inches")
        },
        {
            name: "Normal",
            height: math.unit(7 + 1/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Sam Evans", species: ["fox", "demon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(165, "cm"),
            weight: math.unit(140, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/sam-evans/front.svg",
                extra: 3417/3230,
                bottom: 41.3/3417
            }
        },
        frontSixTails: {
            height: math.unit(165, "cm"),
            weight: math.unit(140, "lb"),
            name: "Front-six-tails",
            image: {
                source: "./media/characters/sam-evans/front-six-tails.svg",
                extra: 3417/3230,
                bottom: 41.3/3417
            }
        },
        back: {
            height: math.unit(165, "cm"),
            weight: math.unit(140, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/sam-evans/back.svg",
                extra: 3227/3032,
                bottom: 6.8/3234
            }
        },
        face: {
            height: math.unit(0.68, "feet"),
            name: "Face",
            image: {
                source: "./media/characters/sam-evans/face.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(165, "cm"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(100, "meters")
        },
        {
            name: "Macro+",
            height: math.unit(800, "meters")
        },
        {
            name: "Macro++",
            height: math.unit(3, "km")
        },
        {
            name: "Macro+++",
            height: math.unit(30, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Juliet A", species: ["lizard"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(10, "feet"),
            weight: math.unit(750, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/juliet-a/front.svg",
                extra: 1766/1720,
                bottom: 43/1809
            }
        },
        back: {
            height: math.unit(10, "feet"),
            weight: math.unit(750, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/juliet-a/back.svg",
                extra: 1781/1734,
                bottom: 35/1810,
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(10, "feet"),
            default: true
        },
        {
            name: "Dragon Form",
            height: math.unit(250, "feet")
        },
        {
            name: "Macro",
            height: math.unit(1000, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(10000, "feet")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Wild", species: ["hyena"], tags: ["anthro"] },
    {
        regular: {
            height: math.unit(7 + 3/12, "feet"),
            weight: math.unit(260, "lb"),
            name: "Regular",
            image: {
                source: "./media/characters/wild/regular.svg",
                extra: 97.45/92,
                bottom: 6.8/104.3
            }
        },
        biggums: {
            height: math.unit(8 + 6 /12, "feet"),
            weight: math.unit(425, "lb"),
            name: "Biggums",
            image: {
                source: "./media/characters/wild/biggums.svg",
                extra: 97.45/92,
                bottom: 7.5/132.34
            }
        },
        mawRegular: {
            height: math.unit(1.24, "feet"),
            name: "Maw (Regular)",
            image: {
                source: "./media/characters/wild/maw.svg"
            }
        },
        mawBiggums: {
            height: math.unit(1.47, "feet"),
            name: "Maw (Biggums)",
            image: {
                source: "./media/characters/wild/maw.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7 + 3/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Vidar", species: ["deer"], tags: ["anthro", "feral"] },
    {
        front: {
            height: math.unit(2.5, "meters"),
            weight: math.unit(200, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/vidar/front.svg",
                extra: 2994/2795,
                bottom: 56/3061
            }
        },
        back: {
            height: math.unit(2.5, "meters"),
            weight: math.unit(200, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/vidar/back.svg",
                extra: 3131/2928,
                bottom: 13.5/3141.5
            }
        },
        feral: {
            height: math.unit(2.5, "meters"),
            weight: math.unit(2000, "kg"),
            name: "Feral",
            image: {
                source: "./media/characters/vidar/feral.svg",
                extra: 2790/1765,
                bottom: 6/2796
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2.5, "meters"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(100, "meters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Ash", species: ["zoroark"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 9/12, "feet"),
            weight: math.unit(120, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/ash/front.svg",
                extra: 2189/1961,
                bottom: 5.2/2194
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 9/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Gygabite", species: ["draconi"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(9, "feet"),
            weight: math.unit(10000, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/gygabite/front.svg",
                bottom: 31.7/537.8,
                extra: 505/370
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(9, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "P0tat0", species: ["protogen"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(12, "feet"),
            weight: math.unit(35000, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/p0tat0/front.svg",
                extra: 1065/921,
                bottom: 55.7/1121.25
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Dusk", species: ["arcanine"], tags: ["feral"] },
    {
        side: {
            height: math.unit(6.5, "feet"),
            weight: math.unit(800, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/dusk/side.svg",
                extra: 615/373,
                bottom: 53/664
            }
        },
        sitting: {
            height: math.unit(7, "feet"),
            weight: math.unit(800, "lb"),
            name: "Sitting",
            image: {
                source: "./media/characters/dusk/sitting.svg",
                extra: 753/425,
                bottom: 33/774
            }
        },
        head: {
            height: math.unit(6.1, "feet"),
            name: "Head",
            image: {
                source: "./media/characters/dusk/head.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Jay Direwolf", species: ["dire-wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(15, "feet"),
            weight: math.unit(7000, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/jay-direwolf/front.svg",
                extra: 1810/1732,
                bottom: 66/1892
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(15, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Anchovie", species: ["cat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(4 + 9/12, "feet"),
            weight: math.unit(130, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/anchovie/front.svg",
                extra: 382/350,
                bottom: 25/409
            }
        },
        back: {
            height: math.unit(4 + 9/12, "feet"),
            weight: math.unit(130, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/anchovie/back.svg",
                extra: 385/352,
                bottom: 16.6/402
            }
        },
        frontDressed: {
            height: math.unit(4 + 9/12, "feet"),
            weight: math.unit(130, "lb"),
            name: "Front (Dressed)",
            image: {
                source: "./media/characters/anchovie/front-dressed.svg",
                extra: 382/350,
                bottom: 25/409
            }
        },
        backDressed: {
            height: math.unit(4 + 9/12, "feet"),
            weight: math.unit(130, "lb"),
            name: "Back (Dressed)",
            image: {
                source: "./media/characters/anchovie/back-dressed.svg",
                extra: 385/352,
                bottom: 16.6/402
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(6.4, "inches")
        },
        {
            name: "Normal",
            height: math.unit(4 + 9/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "AcidRenamon", species: ["renamon", "skunk"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(2, "meters"),
            weight: math.unit(180, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/acidrenamon/front.svg",
                extra: 987/890,
                bottom: 22.8/1009
            }
        },
        back: {
            height: math.unit(2, "meters"),
            weight: math.unit(180, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/acidrenamon/back.svg",
                extra: 983/891,
                bottom: 8.4/992
            }
        },
        head: {
            height: math.unit(1.92, "feet"),
            name: "Head",
            image: {
                source: "./media/characters/acidrenamon/head.svg"
            }
        },
        rump: {
            height: math.unit(1.72, "feet"),
            name: "Rump",
            image: {
                source: "./media/characters/acidrenamon/rump.svg"
            }
        },
        tail: {
            height: math.unit(4.2, "feet"),
            name: "Tail",
            image: {
                source: "./media/characters/acidrenamon/tail.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(2, "meters"),
            default: true
        },
        {
            name: "Minimacro",
            height: math.unit(7, "meters")
        },
        {
            name: "Macro",
            height: math.unit(200, "meters")
        },
        {
            name: "Gigamacro",
            height: math.unit(0.2, "earths")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kenzie Lee", species: ["lycanroc"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kenzie-lee/front.svg",
                extra: 1525/1465,
                bottom: 45/1570
            }
        },
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/kenzie-lee/side.svg",
                extra: 5505/5383,
                bottom: 60/5573
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(152, "feet"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(7, "miles")
        },
        {
            name: "Gigamacro",
            height: math.unit(8000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Withers", species: ["hellhound"], tags: ["anthro"] },
    {
        side: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/withers/side.svg",
                extra: 1830/1728,
                bottom: 96/1927
            }
        },
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/withers/front.svg",
                extra: 1514/1438,
                bottom: 118/1632
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6, "feet")
        },
        {
            name: "Macro",
            height: math.unit(50, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(15, "miles"),
            default: true
        },
        {
            name: "Megamacro+",
            height: math.unit(100, "km")
        },
        {
            name: "Gigamacro",
            height: math.unit(4750, "miles")
        },
        {
            name: "Gigamacro+",
            height: math.unit(32000, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Nemoskii", species: ["skunk"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 7/12, "feet"),
            weight: math.unit(250, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/nemoskii/front.svg",
                extra: 2270/1734,
                bottom: 86/2354
            }
        },
        back: {
            height: math.unit(6 + 7/12, "feet"),
            weight: math.unit(250, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/nemoskii/back.svg",
                extra: 1845/1788,
                bottom: 10.5/1852
            }
        },
        head: {
            height: math.unit(1.31, "feet"),
            name: "Head",
            image: {
                source: "./media/characters/nemoskii/head.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 7/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Shui", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1, "mile"),
            weight: math.unit(265261.9, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/shui/front.svg",
                extra: 1633/1564,
                bottom: 91.5/1726
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(1, "mile"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Arokh Takakura", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(12 + 6/12, "feet"),
            weight: math.unit(1342, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/arokh-takakura/front.svg",
                extra: 1089/1043,
                bottom: 77.4/1176.7
            }
        },
        back: {
            height: math.unit(12 + 6/12, "feet"),
            weight: math.unit(1342, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/arokh-takakura/back.svg",
                extra: 1046/1019,
                bottom: 102/1150
            }
        },
    },
    [
        {
            name: "Big",
            height: math.unit(12 + 6/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Theo", species: ["cat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 6/12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/theo/front.svg",
                extra: 1184/1131,
                bottom: 7.4/1191
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(5, "inches")
        },
        {
            name: "Normal",
            height: math.unit(5 + 6/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Cecelia Swift", species: ["otter"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5 + 9/12, "feet"),
            weight: math.unit(130, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/cecelia-swift/front.svg",
                extra: 502/484,
                bottom: 23/523
            }
        },
        back: {
            height: math.unit(5 + 9/12, "feet"),
            weight: math.unit(130, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/cecelia-swift/back.svg",
                extra: 499/485,
                bottom: 12/511
            }
        },
        head: {
            height: math.unit(0.90, "feet"),
            name: "Head",
            image: {
                source: "./media/characters/cecelia-swift/head.svg"
            }
        },
        rump: {
            height: math.unit(1.75, "feet"),
            name: "Rump",
            image: {
                source: "./media/characters/cecelia-swift/rump.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5 + 9/12, "feet"),
            default: true
        },
        {
            name: "Big",
            height: math.unit(50, "feet")
        },
        {
            name: "Macro",
            height: math.unit(100, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(500, "feet")
        },
        {
            name: "Macro++",
            height: math.unit(1000, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kaunan", species: ["dragon"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/kaunan/front.svg",
                extra: 2890/2523,
                bottom: 49/2939
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(150, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Fei", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(175, "cm"),
            weight: math.unit(60, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/fei/front.svg",
                extra: 2581/2400,
                bottom: 82.2/2663
            }
        },
    },
    [
        {
            name: "Mortal",
            height: math.unit(175, "cm")
        },
        {
            name: "Normal",
            height: math.unit(3500, "m"),
            default: true
        },
        {
            name: "Stroll",
            height: math.unit(17.5, "km")
        },
        {
            name: "Showoff",
            height: math.unit(175, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Edrax", species: ["ferromorph"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(1000, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/edrax/front.svg",
                extra: 2838/2550,
                bottom: 130/2968
            }
        },
    },
    [
        {
            name: "Small",
            height: math.unit(7, "feet")
        },
        {
            name: "Normal",
            height: math.unit(1500, "meters")
        },
        {
            name: "Mega",
            height: math.unit(12000000, "km"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(10600000, "lightyears")
        },
        {
            name: "Hypermacro",
            height: math.unit(256, "yottameters")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Clove", species: ["rabbit"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(10, "feet"),
            weight: math.unit(750, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/clove/front.svg",
                extra: 2031/1860,
                bottom: 47.8/2080
            }
        },
        back: {
            height: math.unit(10, "feet"),
            weight: math.unit(750, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/clove/back.svg",
                extra: 2025/1859,
                bottom: 46/2071
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(10, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Alex (Rabbit)", species: ["rabbit"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(4, "feet"),
            weight: math.unit(50, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/alex-rabbit/front.svg",
                extra: 507/458,
                bottom: 18.5/527
            }
        },
        back: {
            height: math.unit(4, "feet"),
            weight: math.unit(50, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/alex-rabbit/back.svg",
                extra: 502/460,
                bottom: 18.9/521
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(4, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Zander Rose", species: ["meowth"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(1 + 3 / 12, "feet"),
            weight: math.unit(80, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/zander-rose/front.svg",
                extra: 916 / 797,
                bottom: 17 / 933
            }
        },
        back: {
            height: math.unit(1 + 3 / 12, "feet"),
            weight: math.unit(80, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/zander-rose/back.svg",
                extra: 903/779,
                bottom: 31/934
            }
        },

    },
    [
        {
            name: "Normal",
            height: math.unit(1 + 3 / 12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Razz", species: ["pavodragon"], tags: ["anthro", "feral"] },
    {
        anthro: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Anthro",
            image: {
                source: "./media/characters/razz/anthro.svg",
                extra: 1437/1343,
                bottom: 48/1485
            }
        },
      feral: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Feral",
            image: {
                source: "./media/characters/razz/feral.svg",
                extra: 2569/1385,
                bottom: 95/2664
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Morrigan", species: ["shark"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(9 + 4/12, "feet"),
            weight: math.unit(500, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/morrigan/front.svg",
                extra: 2707/2579,
                bottom: 156/2863
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(9 + 4/12, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Jenene", species: ["wolf"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(5, "stories"),
            weight: math.unit(4000, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/jenene/front.svg",
                extra: 1780/1710,
                bottom: 57/1837
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(5, "stories"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Vix Archaser", species: ["fox"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/vix-archaser/front.svg",
                extra: 2767/2562,
                bottom: 36/2803
            }
        },
    },
    [
        {
            name: "Micro",
            height: math.unit(1, "foot")
        },
        {
            name: "Normal",
            height: math.unit(6 + 5/12, "feet")
        },
        {
            name: "Minimacro",
            height: math.unit(500, "feet")
        },
        {
            name: "Macro",
            height: math.unit(4, "miles")
        },
        {
            name: "Megamacro",
            height: math.unit(250, "miles"),
            default: true
        },
        {
            name: "Gigamacro",
            height: math.unit(1, "universe")
        },
        {
            name: "Endgame",
            height: math.unit(100, "multiverses")
        }
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Faey", species: ["aaltranae"], tags: ["taur"] },
    {
        taurSfw: {
            height: math.unit(10, "meters"),
            weight: math.unit(17500, "kg"),
            name: "Taur",
            image: {
                source: "./media/characters/faey/taur-sfw.svg",
                extra: 1200/968,
                bottom: 41/1241
            }
        },
        chestmaw: {
            height: math.unit(2.01, "meters"),
            name: "Chestmaw",
            image: {
                source: "./media/characters/faey/chestmaw.svg"
            }
        },
        foot: {
            height: math.unit(2.43, "meters"),
            name: "Foot",
            image: {
                source: "./media/characters/faey/foot.svg"
            }
        },
        jaws: {
            height: math.unit(1.66, "meters"),
            name: "Jaws",
            image: {
                source: "./media/characters/faey/jaws.svg"
            }
        },
        tongues: {
            height: math.unit(2.01, "meters"),
            name: "Tongues",
            image: {
                source: "./media/characters/faey/tongues.svg"
            }
        },
    },
    [
        {
            name: "Small",
            height: math.unit(10, "meters"),
            default: true
        },
        {
            name: "Big",
            height: math.unit(500000, "km")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Roku", species: ["lion"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(7, "feet"),
            weight: math.unit(275, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/roku/front.svg",
                extra: 903/878,
                bottom: 37/940
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(7, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(500, "feet")
        },
        {
            name: "Megamacro",
            height: math.unit(200, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Lira", species: ["kitsune"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6 + 2/12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/lira/front.svg",
                extra: 1727/1605,
                bottom: 26/1753
            }
        },
        back: {
            height: math.unit(6 + 2/12, "feet"),
            weight: math.unit(150, "lb"),
            name: "Back",
            image: {
                source: "./media/characters/lira/back.svg",
                extra: 1713/159,
                bottom: 20/1733
            }
        },
        hand: {
            height: math.unit(0.75, "feet"),
            name: "Hand",
            image: {
                source: "./media/characters/lira/hand.svg"
            }
        },
        maw: {
            height: math.unit(0.65, "feet"),
            name: "Maw",
            image: {
                source: "./media/characters/lira/maw.svg"
            }
        },
        pawDigi: {
            height: math.unit(1.6, "feet"),
            name: "Paw Digi",
            image: {
                source: "./media/characters/lira/paw-digi.svg"
            }
        },
        pawPlanti: {
            height: math.unit(1.4, "feet"),
            name: "Paw Planti",
            image: {
                source: "./media/characters/lira/paw-planti.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(6 + 2/12, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(100, "feet")
        },
        {
            name: "Macro²",
            height: math.unit(1600, "feet")
        },
        {
            name: "Planetary",
            height: math.unit(20, "earths")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Hadjet", species: ["cat"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/hadjet/front.svg",
                extra: 1480/1346,
                bottom: 26/1506
            }
        },
        frontNsfw: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front (NSFW)",
            image: {
                source: "./media/characters/hadjet/front-nsfw.svg",
                extra: 1440/1358,
                bottom: 52/1492
            }
        },
    },
    [
        {
            name: "Macro",
            height: math.unit(10, "stories"),
            default: true
        },
        {
            name: "Megamacro",
            height: math.unit(1.5, "miles")
        },
        {
            name: "Megamacro+",
            height: math.unit(5, "miles")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Kodran", species: ["dragon", "machine"], tags: ["feral"] },
    {
        side: {
            height: math.unit(106, "feet"),
            weight: math.unit(500, "tonnes"),
            name: "Side",
            image: {
                source: "./media/characters/kodran/side.svg",
                extra: 553/480,
                bottom: 33/586
            }
        },
        front: {
            height: math.unit(132, "feet"),
            weight: math.unit(500, "tonnes"),
            name: "Front",
            image: {
                source: "./media/characters/kodran/front.svg",
                extra: 667/643,
                bottom: 42/709
            }
        },
        flying: {
            height: math.unit(350, "feet"),
            weight: math.unit(500, "tonnes"),
            name: "Flying",
            image: {
                source: "./media/characters/kodran/flying.svg"
            }
        },
        foot: {
            height: math.unit(33, "feet"),
            name: "Foot",
            image: {
                source: "./media/characters/kodran/foot.svg"
            }
        },
        footFront: {
            height: math.unit(19, "feet"),
            name: "Foot (Front)",
            image: {
                source: "./media/characters/kodran/foot-front.svg",
                extra: 261/261,
                bottom: 91/352
            }
        },
        headFront: {
            height: math.unit(53, "feet"),
            name: "Head (Front)",
            image: {
                source: "./media/characters/kodran/head-front.svg"
            }
        },
        headSide: {
            height: math.unit(65, "feet"),
            name: "Head (Side)",
            image: {
                source: "./media/characters/kodran/head-side.svg"
            }
        },
        throat: {
            height: math.unit(79, "feet"),
            name: "Throat",
            image: {
                source: "./media/characters/kodran/throat.svg"
            }
        },
    },
    [
        {
            name: "Large",
            height: math.unit(106, "feet"),
            default: true
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Pyxaron", species: ["draptor"], tags: ["feral"] },
    {
        side: {
            height: math.unit(11, "feet"),
            weight: math.unit(150, "lb"),
            name: "Side",
            image: {
                source: "./media/characters/pyxaron/side.svg",
                extra: 305/195,
                bottom: 17/322
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(11, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Meep", species: ["candy", "salamander"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/meep/front.svg",
                extra: 88/80,
                bottom: 6/94
            }
        },
    },
    [
        {
            name: "Fun Sized",
            height: math.unit(2, "inches"),
            default: true
        },
        {
            name: "Friend Sized",
            height: math.unit(8, "inches")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Holly (Rabbit)", species: ["rabbit"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(15, "feet"),
            weight: math.unit(2500, "lb"),
            name: "Front",
            image: {
                source: "./media/characters/holly-rabbit/front.svg",
                extra: 1433/1233,
                bottom: 125/1558
            }
        },
        dick: {
            height: math.unit(4.6, "feet"),
            name: "Dick",
            image: {
                source: "./media/characters/holly-rabbit/dick.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(15, "feet"),
            default: true
        },
        {
            name: "Macro",
            height: math.unit(250, "feet")
        },
        {
            name: "Macro+",
            height: math.unit(2500, "feet")
        },
    ]
))

characterMakers.push(() => makeCharacter(
    { name: "Drena", species: ["drenath"], tags: ["anthro"] },
    {
        front: {
            height: math.unit(3.02, "meters"),
            weight: math.unit(500, "kg"),
            name: "Front",
            image: {
                source: "./media/characters/drena/front.svg",
                extra: 282/243,
                bottom: 8/290
            }
        },
        side: {
            height: math.unit(3.02, "meters"),
            weight: math.unit(500, "kg"),
            name: "Side",
            image: {
                source: "./media/characters/drena/side.svg",
                extra: 280/245,
                bottom: 10/290
            }
        },
        back: {
            height: math.unit(3.02, "meters"),
            weight: math.unit(500, "kg"),
            name: "Back",
            image: {
                source: "./media/characters/drena/back.svg",
                extra: 278/243,
                bottom: 2/280
            }
        },
        foot: {
            height: math.unit(0.75, "meters"),
            name: "Foot",
            image: {
                source: "./media/characters/drena/foot.svg"
            }
        },
        maw: {
            height: math.unit(0.82, "meters"),
            name: "Maw",
            image: {
                source: "./media/characters/drena/maw.svg"
            }
        },
        rump: {
            height: math.unit(0.93, "meters"),
            name: "Rump",
            image: {
                source: "./media/characters/drena/rump.svg"
            }
        },
    },
    [
        {
            name: "Normal",
            height: math.unit(3.02, "meters"),
            default: true
        },
    ]
))

//characters

function makeCharacters() {
    const results = [];

    characterMakers.forEach(character => {
        results.push(character());
    });
    return results;
}
