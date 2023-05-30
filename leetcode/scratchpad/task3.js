// X is an array
// Y is an array
// W is an integer

function solution(X, Y, W) {
    sortedX = X.sort((a, b) => a - b)
    let numberOfRollerRun = 0

    while (sortedX.length > 0) {
        let rollerEnd = W + Math.min(...sortedX)
        sortedX = sortedX.filter(x => x > rollerEnd)
        numberOfRollerRun++
    }
    return numberOfRollerRun
}


solution([2, 4, 2, 6, 7, 1], 0, 2)