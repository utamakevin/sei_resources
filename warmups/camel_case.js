// Write a function called toCamelCase that accepts a single string as argument.
// The toCamelCase function should return the string as camel-cased, removing each _ or - characters and capitalizing the character following the _ or -.
// If the string argument does not contain a "_" or a "-", return the same string.

function toCamelCase(str) {
    strArr = str.split('')
    specialChar = []

    for(let i = 0; i < strArr.length; i++) {
        if(strArr[i] === '-' || strArr[i] === '_') {
            specialChar.push(strArr[i])
            strArr[i + 1] = strArr[i + 1].toUpperCase()
        }
    }

    resultArr = strArr.filter(elem => !specialChar.includes(elem))

    return resultArr.join('')
}

// console.log(
//     toCamelCase( 'sei' ), // => 'sei'
//     toCamelCase( 'sei-rocks' ), // => 'seiRocks'
//     toCamelCase( 'banana_Turkey_potato' ), // => 'bananaTurkeyPotato'
//     toCamelCase( 'Mama-mia' ), // => 'MamaMia'
//     toCamelCase( 'A_b_c' ) // => 'ABC'
// )