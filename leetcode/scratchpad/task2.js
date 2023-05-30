// D is an array of difficulties
// X is an integer
function solution(D, X) {
    daysCounter = 0

    while (D.length > 0) {
        if (Math.abs(D[0] - D[1]) <= X) {
            if(Math.max(D[0], D[1], D[2]) - Math.min(D[0], D[1], D[2]) <= X) {
                D = D.slice(3)
                daysCounter++
                console.log(D)
            } else {
                D = D.slice(2)
                daysCounter++
                console.log(D)
            }
        } else {
            D = D.slice(1)
            daysCounter++
            console.log(D)
        }
    }
    return daysCounter
}

console.log(solution2([5, 8, 2, 7], 3))
// console.log(solution2([1, 12, 10, 4, 5, 2], 2))

function solution2(D, X) {
    let daysCounter = 0
    let ittinerary = []
    let differenceMinMax = 0

    while(D.length > 0) {
        if (differenceMinMax > X) {
            console.log('if')
            ittinerary = []
            console.log(ittinerary)
            differenceMinMax = 0
            daysCounter++
            console.log('counter ' + daysCounter)
        } else {
            console.log('else')
            ittinerary.push(D[0])
            console.log('ittinerary = ' + ittinerary)

            D = D.slice(1)
            console.log('D = ' + D)
            
            differenceMinMax = ittinerary.length === 0 ? 0 : Math.max(...ittinerary) - Math.min(...ittinerary)

            console.log('difference = ' + differenceMinMax)
        }
    }
    return 'ret ' + daysCounter
}