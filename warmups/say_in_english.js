// Given a number from 0 to 99, spell out that number in English.

// If the input to the program is 22, then the output should be 'twenty-two'.

// sayInEnglish(22) // => 'twenty-two'
// Your program should complain loudly if given a number outside the blessed range.


const ones = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
}

const tens = {
    2: 'twenty',
    3: 'thirty',
    4: 'fourty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninty'
}



function sayInEnglish(num) {
    // debugger
    if(num < 13) {
        let word = ones[num]
        return word 
    } else if(num.toString().length === 2 && num > 12 && num.toString().split('')[0] === '1' ) {

        let onesWord = ones[num.toString().split('')[1]]

        if(onesWord === 'three') {
            onesWord = 'thir'
        }
        if(onesWord === 'five') {
            onesWord = 'fif'
        }
        if(onesWord === 'eight') {
            onesWord = 'eigh'
        }
    
        let word = onesWord + 'teen'
        return word
        
    } else if(num.toString().length === 2) {
        tensWord = tens[Number(num.toString().split('')[0])]
        if(num.toString().split('')[1] === '0') {
            return tensWord
        } else {
            return tensWord + '-' + ones[num.toString().split('')[1].toString()]
        }
    } else {
        return 'NOT IN RANGE! (0-99 ONLY!)'
    
    }
}

for(let i = 0; i <= 100; i++) {
    console.log(sayInEnglish(i))
}