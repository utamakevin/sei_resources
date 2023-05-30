
function countGoodStrings(zero, one, low, high) {
    let result = 0
    let number = 0
    
    while (String(number.toString(2)).length <= high) {
        let bin = number.toString(2)
        let alteredBin = bin.replaceAll(1, '1'.repeat(one)).replaceAll(0, '0'.repeat(zero))

        if(alteredBin.length <= high) {
            // console.log(alteredBin)
            result++
        }
        number++
    }
    return result
}

console.log(countGoodStrings(1, 1, 3, 3))