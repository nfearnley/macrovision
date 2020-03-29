const countryData = [["Zimbabwe",389139344886.9551,750673.8733651662],
["Zambia",747284247537.2109,1086883.0186403147],
["Yemen",451258576476.0622,732380.0886973133],
["Vietnam",322580142233.8691,1620340.0069434382],
["Venezuela",903362423260.6332,1268421.1333824312],
["Vatican",708035.2009967731,962.0919227031534],
["Vanuatu",11272612217.230469,724821.180486814],
["Uzbekistan",443189293470.79034,925450.9622003306],
["Uruguay",177556026488.23483,537144.1098412299],
["Micronesia",485384430.1673484,497698.88020277687],
["Marshall Is.",237267604.69041273,596010.1204389479],
["N. Mariana Is.",393374965.5941958,521292.78521092737],
["U.S. Virgin Is.",316452461.7983862,76083.04112096527],
["Guam",483286229.8419917,40613.86482889021],
["American Samoa",120670011.38210917,11393.258948078432],
["Puerto Rico",8962997659.680859,64074.185139127105],
["United States of America",7395600901146.306,4416577.67125368],
["S. Geo. and the Is.",3672610161.3615127,541130.1405687116],
["Br. Indian Ocean Ter.",132703649.71481176,23927.13214168381],
["Saint Helena",176325296.97059375,858614.8478942969],
["Pitcairn Is.",38762723.72906426,9947.043438498837],
["Anguilla",83463147.70539355,10944.95591457092],
["Falkland Is.",11407563931.810585,115733.80786623771],
["Cayman Is.",301854204.8866253,55649.92891612647],
["Bermuda",66129884.79864475,14170.070838986676],
["British Virgin Is.",135659839.00635678,39337.39147364931],
["Turks and Caicos Is.",330946239.46105736,22295.623846674607],
["Montserrat",79959829.21916744,14289.738497356197],
["Jersey",126615043.3254982,10747.64788802222],
["Guernsey",48162890.29292152,8669.790417446953],
["Isle of Man",558555897.1337135,38796.33187357233],
["United Kingdom",238676325934.20435,1189944.9208031525],
["United Arab Emirates",71327840366.80205,384133.37813312514],
["Ukraine",566035099860.9688,788296.8051475236],
["Uganda",242282384312.5569,631576.9601751247],
["Turkmenistan",467750968131.5653,839363.1829681154],
["Turkey",769691262374.0961,722569.6732223395],
["Tunisia",156527421728.6396,789088.1320598596],
["Trinidad and Tobago",5113137631.486823,140397.5005812163],
["Tonga",431566020.3443055,320138.22561586066],
["Togo",57164823768.625984,558731.6162212695],
["Timor-Leste",15046954462.017887,152793.66089818784],
["Thailand",510098217767.71954,1619380.770898294],
["Tanzania",935952438752.1539,1184178.6995700544],
["Tajikistan",142199499148.0953,483654.0574189293],
["Taiwan",36053557208.26353,372963.9766519672],
["Syria",185640544641.68024,557652.0954689037],
["Switzerland",41274119762.43174,216315.97720416306],
["Sweden",438024606986.8549,1504429.298743872],
["eSwatini",17026560042.71935,174431.7420524613],
["Suriname",145631226029.04276,461624.95471358934],
["S. Sudan",619555696187.3568,967389.4690412045],
["Sudan",1823113741930.2935,1476475.5597421676],
["Sri Lanka",66124083045.496185,429682.22706557147],
["Spain",502306447910.3953,1635350.4179064203],
["South Korea",97223628369.57718,601119.1956874104],
["South Africa",1201313004316.9548,2610977.935124006],
["Somalia",466566432575.35144,1499709.9382876973],
["Somaliland",168351995213.79407,390642.89676351653],
["Solomon Is.",25650473129.46542,578770.3949851494],
["Slovakia",48398536087.06279,203261.203718588],
["Slovenia",20232561580.98236,160068.21134683487],
["Singapore",486021211.437919,20225.536237134802],
["Sierra Leone",71972760575.6476,343787.02394271526],
["Seychelles",174784533.9529513,25242.78960756224],
["Serbia",77565621952.11682,437004.38001379266],
["Senegal",197200724879.79358,482495.828194891],
["Saudi Arabia",1876920659569.8032,1731541.0179994444],
["São Tomé and Principe",987713799.1340775,183769.6354790035],
["San Marino",68412302.4541662,10648.615483748506],
["Samoa",2707197663.6432486,64906.43346873014],
["St. Vin. and Gren.",311777981.9328877,73908.48702186492],
["Saint Lucia",552532214.4432642,41832.1780762757],
["St. Kitts and Nevis",233457364.84892097,33611.3165210983],
["Rwanda",25432979416.460854,194263.81591629382],
["Russia",12260202932316.434,3560470.967805952],
["Romania",235572110822.79977,511775.734059509],
["Qatar",11096933045.51641,176815.8874033715],
["Portugal",90307109615.50954,998968.539638029],
["Poland",312014177111.07056,640535.7412870524],
["Philippines",281057743959.40845,1718076.5819676248],
["Peru",1267155955843.7405,1995728.9021881635],
["Paraguay",398866915158.8791,917283.5274261177],
["Papua New Guinea",458779192212.65924,1130765.9358040402],
["Panama",74205999390.06693,264696.7787718505],
["Palau",340878459.50629926,517052.0287502567],
["Pakistan",859524386785.3461,1469710.3651343188],
["Oman",310787792152.7695,1070214.542524525],
["Norway",367133579651.0089,2385216.7060012324],
["North Korea",122468780802.42119,588059.4963699913],
["Nigeria",902360824740.1309,1061421.9606103392],
["Niger",1166100114277.5962,1292547.0104424185],
["Nicaragua",129303176135.86368,475217.15790626826],
["New Zealand",261814748299.48175,3689126.851095178],
["Niue",197426811.4028381,19132.955440874972],
["Cook Is.",60789397.586407654,7022.5841140376415],
["Netherlands",36945283257.48706,320420.62752667535],
["Aruba",155610147.7334076,21273.574070595867],
["Curaçao",430636502.7957001,37272.29377335269],
["Nepal",146897265742.68607,444685.714905498],
["Nauru",27857326.929205168,6837.885050868505],
["Namibia",815249049721.9235,1313620.097072748],
["Mozambique",776726637654.2103,1783994.2739365236],
["Morocco",569461707436.853,1568964.057126951],
["W. Sahara",90445408946.43513,753950.5689598573],
["Montenegro",13694356087.203959,186259.07726854514],
["Mongolia",1523220033380.0608,1167861.7008469645],
["Moldova",33169044187.407303,337142.42228660494],
["Monaco",12441227.214953318,4358.924994750582],
["Mexico",1869251872115.2632,1952717.1931632007],
["Mauritius",1883408037.236669,58244.37292394249],
["Mauritania",1025913853088.3635,1381248.2365973846],
["Malta",274389289.46838915,28460.46151930112],
["Mali",1232601050983.55,1627107.3969575989],
["Maldives",66533401.41569023,113326.64317645758],
["Malaysia",308992459615.961,718187.2787975309],
["Malawi",119609014979.11723,857620.1974737616],
["Madagascar",588900729223.3076,1482448.58655397],
["Macedonia",25412477905.618904,167763.72453596117],
["Luxembourg",2617671383.8561177,80342.33188741696],
["Lithuania",64607579583.07534,281048.67513132055],
["Liechtenstein",138276163.29779017,23752.2207550655],
["Libya",1593059310499.89,1497618.019207641],
["Liberia",95716150483.6803,465053.78239422245],
["Lesotho",30082796345.318073,229266.99044660022],
["Lebanon",10032218276.214746,178392.40295671904],
["Latvia",64322936300.70786,265314.902976771],
["Laos",227818875873.76996,948849.152950645],
["Kyrgyzstan",198302186040.08304,445731.6344993663],
["Kuwait",17363674046.35398,174092.9296542175],
["Kosovo",10934378053.958687,156624.8853211386],
["Kiribati",749876516.2319429,1640873.5549117292],
["Kenya",591341928787.2559,1125704.8672718687],
["Kazakhstan",2599180457875.023,1623701.7704947665],
["Jordan",88907886654.7211,466293.2802000827],
["Japan",362212921360.73126,2165372.9852266936],
["Jamaica",10954550076.122593,89945.55843724968],
["Italy",297660112212.5112,1141814.8482783942],
["Israel",22312088308.202045,440068.5190686877],
["Palestine",6346588255.6763935,147154.65650790438],
["Ireland",68780229828.73004,431856.09038575046],
["Iraq",435620846425.7123,917708.4745529837],
["Iran",1587189329130.203,1609326.8856119388],
["Indonesia",1376120815624.1582,1744126.536779939],
["India",2996785519779.1226,2913361.292821804],
["Iceland",101230587354.09766,349260.02852581645],
["Hungary",93030668685.61838,312850.1016063739],
["Honduras",113540433651.57697,393145.8344003861],
["Haiti",26847869783.21849,228390.3778166956],
["Guyana",211580943542.51562,815280.8732392456],
["Guinea-Bissau",32110045925.27114,193638.58665067697],
["Guinea",244390003515.538,606536.8383934512],
["Guatemala",108545037717.66335,453811.808616631],
["Grenada",286659850.5792823,25441.67357828665],
["Greece",129895379857.02574,758011.3923877806],
["Ghana",239260752213.2803,711081.7448205692],
["Germany",355238332286.4327,864383.9331295767],
["Georgia",69359250287.62083,279164.4830880575],
["Gambia",10330073933.169783,82849.92829168624],
["Gabon",260344608670.4254,690549.2981542662],
["France",542817083203.5144,1048476.4725933974],
["St. Pierre and Miquelon",205698521.0710492,38521.03284769018],
["Wallis and Futuna Is.",131747281.48261458,121776.95699873005],
["St-Martin",49111962.95304994,5163.071682498663],
["St-Barthélemy",24579682.143066566,5240.150468570514],
["Fr. Polynesia",2468010584.9118123,1312958.5639801438],
["New Caledonia",18686602242.002316,384267.482542537],
["Fr. S. Antarctic Lands",6972080045.671423,212730.6071924777],
["Åland",761484218.2741673,43735.30591570062],
["Finland",328803220559.3977,1129138.3189881397],
["Fiji",18421467533.17885,1023558.9822519792],
["Ethiopia",1117394387297.408,1258373.6645802632],
["Estonia",45523111130.11329,234417.94183103752],
["Eritrea",123523023760.42888,620786.9941184958],
["Eq. Guinea",26682583611.083134,311126.02900633094],
["El Salvador",20428674917.927784,140987.38922767458],
["Egypt",992610233498.9838,1075384.9272076394],
["Ecuador",254390202866.9375,715644.6113114202],
["Dominican Rep.",48656193669.522415,253316.76342836596],
["Dominica",699392379.7985094,45176.55587233428],
["Djibouti",21745285809.27461,196704.14706825247],
["Greenland",2077887017677.4016,2549914.0725153135],
["Faeroe Is.",1037375875.3441107,104805.39300545029],
["Denmark",42463519493.804115,344332.082885141],
["Czechia",78562446344.69705,273918.8118478958],
["N. Cyprus",3477858554.32716,74094.73032340445],
["Cyprus",5720072668.184293,68303.11611356054],
["Cuba",108838187496.02383,373416.4420118391],
["Croatia",54464922570.24997,453624.1186228944],
["Côte d'Ivoire",321698831252.9052,706903.5592170395],
["Costa Rica",51575396471.50047,346860.4426889592],
["Dem. Rep. Congo",2266976093724.1265,2035904.2956146006],
["Congo",345009155130.8312,961723.9757879174],
["Comoros",1588682598.6376357,111334.98741429756],
["Colombia",1123596248307.3215,1822038.428059104],
["China",8060425748741.967,3689010.6633797465],
["Macao",22790451.33582536,5609.2494132003585],
["Hong Kong",1031202202.4066887,41167.39922811497],
["Chile",662506100339.9237,3913004.5904785832],
["Chad",1250306336304.5803,1747717.1001141844],
["Central African Rep.",615443921593.4967,963245.901521966],
["Cabo Verde",3585645473.0986457,264469.72585925215],
["Canada",8252315173326.137,3925175.4429551493],
["Cameroon",463047177129.98676,1254568.7304865085],
["Cambodia",181325584795.91324,478513.2128836198],
["Myanmar",654908635592.5571,2024676.7575958604],
["Burundi",27257646471.915493,238454.34370384598],
["Burkina Faso",273060011767.93573,628020.0386516866],
["Bulgaria",112483755019.30702,336003.0361266016],
["Brunei",5683983704.47261,111143.6940463348],
["Brazil",7542040031981.433,3915588.1752071916],
["Botswana",577537077673.9358,1005033.7114702462],
["Bosnia and Herz.",51762900143.40118,302391.7470669987],
["Bolivia",1076652528362.6862,1452616.8315824775],
["Bhutan",39941207799.865746,179051.81149080832],
["Benin",116541637410.61739,684764.1659558142],
["Belize",22820786611.704403,288554.77214008226],
["Belgium",30685782396.868896,220012.43908339023],
["Belarus",206593675978.1894,539327.6016509426],
["Barbados",390177698.8208726,28438.43733392629],
["Bangladesh",135631880598.23056,641362.7611422196],
["Bahrain",542666078.421561,48940.616137428195],
["Bahamas",12572006886.202946,657347.8029052814],
["Azerbaijan",86480375203.77911,388647.32676976256],
["Austria",83960555499.05753,289718.05858780514],
["Australia",6916075626359.462,4253387.647790333],
["Indian Ocean Ter.",143103838.04993325,207167.46611093302],
["Heard I. and McDonald Is.",419494189.5592296,24277.108307189614],
["Norfolk Island",41234971.619761944,9164.00266587067],
["Ashmore and Cartier Is.",2724124.8113709954,1337.1383696935786],
["Armenia",29606246853.694744,268723.39105833217],
["Argentina",2628180984838.9795,3439095.945263166],
["Antigua and Barb.",433754090.8784384,79797.82491219617],
["Angola",1231065800103.1306,1487384.312862242],
["Andorra",442811110.96016896,23181.443248610587],
["Algeria",2258264650157.1177,1980213.5544527844],
["Albania",28382259570.98209,333197.42270929285],
["Afghanistan",637227926969.2654,1010493.9286560246],
["Siachen Glacier",2122758731.8166118,61495.05302246724],
["Antarctica",9873880556033.318,3705614.001089979],
["Sint Maarten",41933349.229216255,5539.704322566973]];


function makeState(views, name, height, width, area) {
    views[name] = {
        attributes: {
            height: {
                name: "Height",
                power: 1,
                type: "length",
                base: height
            },
            width: {
                name: "Width",
                power: 1,
                type: "length",
                base: width
            },
            area: {
                name: "Area",
                power: 2,
                type: "area",
                base: area
            },
        },
        name: name,
        image: {
            source: "./media/naturals/states/" + name.toLowerCase().replace(" ", "-") + ".svg"
        }
    }
}

function makePlanet(name, diameter, mass, image) {
    return {
        name: name,
        constructor: () => makeObject(
            name,
            {
                body: {
                    height: diameter,
                    mass: mass,
                    image: (image === undefined ? {
                        source: "./media/naturals/planet-generic.svg"
                    } : image),
                    name: "Body"
                }
            }
        )
    };
}

function makeMountains() {
    const views = {};

    [
        ["Everest", 29029],
        ["K2", 28251],
        ["Kilimanjaro", 19341],
        ["Rainier", 14409],
        ["Pikes Peak", 14114],
        ["Fuji", 12388],
        ["Olympus", 9573],
    ].forEach(mountain => {
        views[mountain[0]] = {
            height: math.unit(mountain[1], "feet"),
            image: { source: "./media/naturals/mountain.svg" },
            name: mountain[0],
            rename: true
        }
    });
    return {
        name: "Mountains",
        constructor: () => makeObject(
            "Mountains",
            views
        )
    };
}

function makeStates() {
    
    const stateViews = {};

    makeState(stateViews, "Alaska", math.unit(2071.44, "km"), math.unit(2483.83, "km"), math.unit(1723337, "km^2"));
    makeState(stateViews, "California", math.unit(1048.82, "km"), math.unit(852.02, "km"), math.unit(423967, "km^2"));
    makeState(stateViews, "Colorado", math.unit(442.44, "km"), math.unit(604.47, "km"), math.unit(269601, "km^2"));
    makeState(stateViews, "Florida", math.unit(716.79, "km"), math.unit(723.97, "km"), math.unit(170312, "km^2"));
    makeState(stateViews, "Maine", math.unit(505.94, "km"), math.unit(330.98, "km"), math.unit(91633, "km^2"));
    makeState(stateViews, "Montana", math.unit(497.99, "km"), math.unit(983.98, "km"), math.unit(380831, "km^2"));
    makeState(stateViews, "New York", math.unit(494.92, "km"), math.unit(536.63, "km"), math.unit(141297, "km^2"));
    makeState(stateViews, "Texas", math.unit(1183.33, "km"), math.unit(1226.69, "km"), math.unit(695662, "km^2"));

    return makeEntity( {name: "States" }, stateViews);
}

function makeGIS(data, category) {
    return {
        name: category,
        constructor: () => {
            views = {};
            data.forEach(entry => {
                name = entry[0]
                views[entry[0]] = {
                    attributes: {
                        height: {
                            name: "Size",
                            power: 1,
                            type: "length",
                            base: math.unit(entry[2], "meters")
                        },
                        area: {
                            name: "Area",
                            power: 2,
                            type: "area",
                            base: math.unit(entry[1], "meters^2")
                        },
                    },
                    name: name,
                    rename: true,
                    image: {
                        source: "./media/naturals/" + category.toLowerCase().replace(/ /g, "-") + "/" + name.toLowerCase().replace(/ /g, "-") + ".svg"
                    }
                }
            });
        
            return makeEntity( {name: category }, views);
        }
    }
    
}
function makeNaturals() {
    const results = [];

    results.push(makeHeightWeight(
        [
            ["Mercury", 4879, "km", 0.330e24, "kg", "./media/naturals/planet-generic.svg"],
            ["Venus", 12104, "km", 4.87e24, "kg", "./media/naturals/planet-generic.svg"],
            ["Earth", 12756, "km", 5.97e24, "kg", "./media/naturals/planet-generic.svg"],
            ["Moon", 3475, "km", 0.073e24, "kg", "./media/naturals/planet-generic.svg"],
            ["Mars", 6792, "km", 0.642e24, "kg", "./media/naturals/planet-generic.svg"],
            ["Jupiter", 142984, "km", 1898e24, "kg", "./media/naturals/planet-generic.svg"],
            ["Saturn", 120536, "km", 568e24, "kg", "./media/naturals/saturn.svg"],
            ["Uranus", 51118, "km", 86.8e24, "kg", "./media/naturals/planet-generic.svg"],
            ["Neptune", 49528, "km", 102e24, "kg", "./media/naturals/planet-generic.svg"],
            ["Pluto", 2370, "km", 0.0146e24, "kg", "./media/naturals/planet-generic.svg"]
        ],
        "Planets",
        "",
        ""
    ));

    results.push(makeHeight(
        [
            ["orbit-of-mercury", 0.387 * 2, "AU", "./media/naturals/orbit.svg"],
            ["orbit-of-venus", 0.723 * 2, "AU", "./media/naturals/orbit.svg"],
            ["orbit-of-earth", 1 * 2, "AU", "./media/naturals/orbit.svg"],
            ["orbit-of-mars", 1.524 * 2, "AU", "./media/naturals/orbit.svg"],
            ["orbit-of-jupiter", 5.2044 * 2, "AU", "./media/naturals/orbit.svg"],
            ["orbit-of-saturn", 9.5826 * 2, "AU", "./media/naturals/orbit.svg"],
            ["orbit-of-uranus", 19.21840 * 2, "AU", "./media/naturals/orbit.svg"],
            ["orbit-of-neptune", 30.11 * 2, "AU", "./media/naturals/orbit.svg"],
            ["orbit-of-pluto", 39.482 * 2, "AU", "./media/naturals/orbit.svg"],
        ],
        "Orbits",
        "",
        ""
    ));

    results.push(makeHeightWeight(
        [
            ["Sun", 2*1, "solarradii", 1, "solarmasses", "./media/naturals/planet-generic.svg"],
            ["White Dwarf", 14000, "km", 1e30, "kg", "./media/naturals/planet-generic.svg"],
            ["Polaris", 2*37.5, "solarradii", 5.4, "solarmasses", "./media/naturals/planet-generic.svg"],
            ["Sun (Red Giant)", 2*256, "solarradii", 1, "solarmasses", "./media/naturals/planet-generic.svg"],
            ["Betelgeuse", 2*887, "solarradii", 11.6, "solarmasses", "./media/naturals/planet-generic.svg"],
            ["VY Canis Majoris", 2*1420, "solarradii", 17, "solarmasses", "./media/naturals/planet-generic.svg"],
        ],
        "Stars",
        "",
        ""
    ));

    results.push(makePlanet("Milky Way", math.unit(105700, "lightyears"), math.unit(3e+39, "kg"), { source: "./media/naturals/milky-way.svg" }));
    results.push(makePlanet("Observable Universe", math.unit(1, "universe"), math.unit(10e53, "kg")));
    results.push(makePlanet("Multiverse", math.unit(1e30, "lightyears"), math.unit(1e100, "kg")));

    results.push({
        name: "States",
        constructor: makeStates
    });

    results.push(makeMountains());

    results.push(makeGIS(
        countryData.sort((c1, c2) => {
            return c1[0].localeCompare(c2[0])
        }),
        "Countries"
    ));


    results.sort((b1, b2) => {
        e1 = b1.constructor();
        e2 = b2.constructor();
        return -math.subtract(e1.views[e1.defaultView].height, e2.views[e2.defaultView].height).value;
    });


    return results;
}
