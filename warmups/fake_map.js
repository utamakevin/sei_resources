// Time to fool some archaeologists
// You are a villain trying to trap an adventuring archaeologist.

// Write a function makeFakeMap that expects 2 arguments and returns an array of arrays representing a fake map.

// The map should be filled with A except for the first element of the first array, which should be an uppercase X

// makeFakeMap(5, 5);
// [
//   ["X","A","A","A","A"],
//   ["A","A","A","A","A"],
//   ["A","A","A","A","A"],
//   ["A","A","A","A","A"],
//   ["A","A","A","A","A"]
// ]


// makeFakeMap(2, 2);
// [
//   ["X","A"],
//   ["A","A"],
// ]


// makeFakeMap(3, 2);
// [
//   ["X","A"],
//   ["A","A"],
//   ["A","A"]
// }
function makeFakeMap(yCoordinate, xCoordinate) {
    let mapArray = []

    for(let i = 0; i < yCoordinate; i++) {
            mapArray[i] = []
        for(let j = 0; j < xCoordinate; j++) {
            mapArray[i].push("A")
        }
    }

    mapArray[0][0] = "X"
    return mapArray
}