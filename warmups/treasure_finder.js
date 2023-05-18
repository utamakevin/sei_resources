let map1 = [
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","X","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
  ];

let map2 = [
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","X","A","A","A"]
];

let map3 = [
    ["A","A","A","A","A"],
    ["A","A","V","A","A"],
    ["A","A","A","V","A"],
    ["v","v","V","v","X"],
    ["A","V","A","A","A"]
  ];

let map4 = [
    ["A","A","A","A","A"],
    ["A","A","V","A","A"],
    ["X","A","A","V","A"],
    ["v","v","V","v","A"],
    ["A","V","A","A","A"]
];


function treasureFinder(map) {
    let locationArray = []
    for(array of map) {
        if(array.includes("X")) {
            locationArray.push(array.indexOf("X")) // x coordinate
            locationArray.push(map.indexOf(array)) // y coordinate
            
            return locationArray
        }
    }
}