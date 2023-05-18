// Write a function, noGoose, that takes an array of strings as an argument and returns an array with all the geese removed

// The geese are any strings in the following array, which is pre-populated in your solution:
// let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// For example, if this array were passed as an argument:
// ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with no 'geese'.

function noGoose(arr) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

    return arr.filter(str => !geese.includes(str))
}

console.log(noGoose(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))