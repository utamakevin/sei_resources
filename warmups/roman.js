// Write a function to convert from normal numbers to Roman Numerals: e.g.

//  1  -> I
// 10  -> X
//  7  -> VII
// There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

const chars = {
    M:  1000,
    CM: 900,
    D:  500,
    CD: 400,
    C:  100,
    XC: 90,
    L:  50,
    XL: 40,
    X:  10,
    IX: 9,
    V:  5,
    IV: 4,
    I:  1,
}

function roman(number) {
    let result = ''

    for (key in chars) {
        result += key.repeat(Math.floor(number / chars[key]))
        number %= chars[key]
    }

    return result
}


console.log(roman(1))
console.log(roman(2))
console.log(roman(3))
console.log(roman(4))
console.log(roman(5))
console.log(roman(6))
console.log(roman(7))
console.log(roman(8))
console.log(roman(9))
console.log(roman(10))
console.log(roman(2357))