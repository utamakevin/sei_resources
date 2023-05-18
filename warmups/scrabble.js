// Write a program that, given a word, computes the scrabble score for that word.

    // Scrabble.score("cabbage")
    // # => 14
    // Scrabble.score("cat")
    // # => 5
// Your program should be in a file named scrabble.js



// let values = 
// {
//     1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], 
//     2: ['D', 'G'],
//     3: ['B', 'C', 'M', 'P'],
//     4: ['F', 'H', 'V', 'W', 'Y'],
//     5: ['K'],
//     8: ['J', 'X'],
//     10: ['Q', 'Z']

// }

// let value1 = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']

// let value2 = ['D', 'G']

// let value3 = ['B', 'C', 'M', 'P']

// let value4 = ['F', 'H', 'V', 'W', 'Y']

// let value5 = ['K']

// let value8 = ['J', 'X']

// let value10 = ['Q', 'Z']

let values = {
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10
}

const Scrabble = {
    score(str) {
        return str
        .toUpperCase()
        .split('')
        .map(elem => values[elem])
        .reduce((totalScore, score) => totalScore + score)
    }
}

console.log(Scrabble.score('cabbage'))