// For building the encrypted string:

// Take every 2nd character from the string, then the other characters that are not every 2nd character, and concat them as a new String.
// Do the above n times!
// To do the above, you must build an encrypt(message, n) function that performs like this:

// encrypt("This is a test!", 1) // "hsi  etTi sats!"
// encrypt("This is a test!", 2) // "s eT ashi tist!"

// encrypt("0123456789", 1) // "1357902468"
// encrypt("0123456789", 2) // "3704815926"


function encrypt(str, n) {

    for(j = 0; j < n; j++) {
        let primary = []
        let secondary = []

        for (i = 0; i < str.length; i++) {
            if (i % 2 !== 0) {
                primary.push(str[i])
            } else {
                secondary.push(str[i])
            }
        }
        str = primary.concat(secondary)
    }
    console.log(str.join(''))
    return str.join('')
}

encrypt("This is a test!", 1) // "hsi  etTi sats!"
encrypt("This is a test!", 2) // "s eT ashi tist!"

encrypt("0123456789", 1) // "1357902468"
encrypt("0123456789", 2) // "3704815926"