// Bob, Jimbo and Fish love mini golf. But, every time they hand in their score cards none of the scores are ever totalled. Calculate everyone's individual score.

Bob = [3, 2, 6, 11, 9, 2, 6, 9, 10]
// Hole 1 = 3
// Hole 2 = 2
// Hole 3 = 6
// Hole 4 = 11
// Hole 5 = 9
// Hole 6 = 2
// Hole 7 = 6
// Hole 8 = 9
// Hole 9 = 10

Jimbo = [5, 12, 9, 22, 13, 7, 16, 10, 11]
// Hole 1 = 5
// Hole 2 = 12
// Hole 3 = 9
// Hole 4 = 22
// Hole 5 = 13
// Hole 6 = 7
// Hole 7 = 16
// Hole 8 = 10
// Hole 9 = 11

Fish = [2, 2, 4, 5, 4, 3, 6, 4, 1]
// Hole 1 = 2
// Hole 2 = 2
// Hole 3 = 4
// Hole 4 = 5
// Hole 5 = 4
// Hole 6 = 3
// Hole 7 = 6
// Hole 8 = 4
// Hole 9 = 1

function countTotal(name) {
    let sum = 0
    for(let i = 0; i < name.length; i++) {
        sum += name[i]
    }
    return sum
}
