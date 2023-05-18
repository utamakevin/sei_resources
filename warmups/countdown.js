// Write a function called countDown that accepts a single number as argument.

// The function should console log numbers starting from the number passed in all the way down to 1. Then finally console log blast off

/*
function countDown(number) {
    let i = number
    while (i >= 0) {
        if (i > 0) {
            console.log(i)
        }
    i -= 1
    }
    console.log("blast off")
}
*/


// dependency - something as a parameter that we don't know the value until it is being input --- rather than hard coding
function countDown(number, func) {
    for(let i = number; i > 0; i -= 1) {
        console.log(i)
    }

    // run the function/block of code
    // countDown does not care what function this is
    func()
}

function printKaboom() {
    console.log("kaboom")
}