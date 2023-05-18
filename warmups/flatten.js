// Prompt:

// Write a function named flatten that accepts a single array that may contain nested arrays and returns a new "flattened" array.
// A flattened array is an array that contains no nested arrays.
// Arrays maybe nested at any level.
// If any of the arrays have duplicate values those duplicate values should be present in the returned array.
// The values in the new array should maintain their ordering as shown in the examples below.



function flatten(array) {
    return array.reduce((result, elem) => Array.isArray(elem) ? [...result, ...flatten(elem)] : [...result, elem], [])
}

console.log(
    flatten( [1, [2, 3]] ),
    //=> [1, 2, 3]  (a new array) 
    flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] )
    //=> [1, 2, 3, 4, 1, 'a', 'b', 'c']
)