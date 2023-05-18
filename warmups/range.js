// Write a function called range that accepts two integers as arguments and returns an array of integers starting with the first argument up to one less than the second argument.

// The range function must be called with the first argument less than or equal to the second argument, otherwise return the string "First argument must be less than or equal to second argument".

function range(startingNumber, endingNumber) {
    if (startingNumber <= endingNumber) {
        let outputArray = []
        for (let i = startingNumber; i < endingNumber; i++) {
            outputArray.push(i)
        } 
        return (outputArray)
    } else {
        return `First argument must be less than or equal to second argument`
    }
}
