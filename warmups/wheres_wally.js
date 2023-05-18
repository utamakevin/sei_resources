// Write a function to find Wally in a given array and return the index position. There will always be one Wally in the array.


let park = [
    { name: 'Wizard Whitebeard'}, 
    { name: 'Woof' }, 
    { name: 'Wenda' }, 
    { name: 'Wally' }]

// loop - go through each object in the array
// check if the object is wally

function wheresWally(arr) {
    let index = 0

    while (index < arr.length) {
       
        index = index + 1 // index++ is sugar shortcut

    }


}


/*
function wheresWally(location) {
    return location.findIndex(location => location.name === "Wally")
} 
*/

// Answer:
/*
function wheresWally(location) {
let i = 0
while (i < location.length) {
    if (location[i].name === "Wally") {
        return i 
    }
    i++
}
}

*/

console.log(wheresWally(park));
console.log(wheresWally(station));

// The station is even more busy than the park! Can your function find Wally in the station?

let station = [
    { name: 'Wizard Whitebeard'}, 
    { name: 'Woof' }, 
    { name: 'Wally' }, 
    { name: 'Welma' }, 
    { name: 'Odlaw' }, 
    { name: 'Wenda' }
  ];