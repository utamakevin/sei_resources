// Write a program to decode this message:
    // NQRZOHGJH LV OLPLWHG. LPDJLQDWLRQ HQFLUFOHV WKH ZRUOG

// This is a form of cryptography known as the Caesar Cipher. It has a shift parameter of 3.

// Instead of writing messages using the normal alphabet:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ

// we shift every letter by 3 to as follows:
// DEFGHIJKLMNOPQRSTUVWXYZABC

// which means if the original message is HELLO.

// H is now K, E is now H, L is now O, O is now R
// The encrypted message of HELLO will be KHOOR

// decode the second secret message to unlock your bonus 🎁

    // BRXU OXQFK LV QRZ HAWHQGHG WR WKUHH KRXUV HYHUBGDB
// if you want more, here's one more, and it rhymes... for sure

    // FLYLOLCDWLRQ DGYDQFHV EB HAWHQGLQJ WKH QXPEHU RI LPSRUWDQW RSHUDWLRQV ZKLFK ZH FDQ SHUIRUP ZLWKRXW WKLQNLQJ DERXW WKHP

const shiftedLettersArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ .,?'.split('')
const unshiftedLettersArr = 'DEFGHIJKLMNOPQRSTUVWXYZABC .,?'.split('')

function decipherCode(str) {
    const letterArr = str.toUpperCase().split('')

    let result = []

    letterArr.forEach(letter => {
        let letterIndex = unshiftedLettersArr.indexOf(letter)
        let processedLetter = shiftedLettersArr[letterIndex]

        result.push(processedLetter)
    })

    return result.join('')
}


console.log(decipherCode('khoor'))
console.log(decipherCode('NQRZOHGJH LV OLPLWHG. LPDJLQDWLRQ HQFLUFOHV WKH ZRUOG'))
console.log(decipherCode('BRXU OXQFK LV QRZ HAWHQGHG WR WKUHH KRXUV HYHUBGDB'))
console.log(decipherCode('FLYLOLCDWLRQ DGYDQFHV EB HAWHQGLQJ WKH QXPEHU RI LPSRUWDQW RSHUDWLRQV ZKLFK ZH FDQ SHUIRUP ZLWKRXW WKLQNLQJ DERXW WKHP'))