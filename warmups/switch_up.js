// Write a method switchUp that takes a string as an argument and returns the string with the case for each letter switched e.g. lowercase letter must become uppercase and vice versa.

// switchUp("Switch caSe FoR eVery letter") // => "sWITCH CAsE fOr EvERY LETTER"



function switchUp(string) {
    // convert string to array
    let newString = ""

    // loop through the string
    // check and switch each letter case
    for(letter of string) {
        if(letter === letter.toUpperCase()) {
            newString += letter.toLowerCase()  
        } else {
            newString += letter.toUpperCase()
        }
    }
    // return the value
    return newString
}

console.log(switchUp("Switch caSe FoR eVery letter"))