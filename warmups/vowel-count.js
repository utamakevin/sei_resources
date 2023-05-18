function countVowels(string) {
    
    let array = string.toLowerCase().split("")
    let counter = 0

    for (let index = 0; index < array.length; index++) {
        
        if(array[index] === "a" || array[index] === "i" || array[index] === "u" || array[index] === "e" || array[index] === "o") {
            counter++
        }
    }

    return counter
}





const vowels = ["a", "e", "i", "o", "u"]
function countVowelsToo(string) {
    let count = 0
    string
        .toLowerCase()
        .split("")
        .forEach((letter) => {
            if (vowels.includes(letter)) {
            count++
        }
    });
    return count;

}

function countVowelsThree(str) {
    let vowelCount = 0
    for (letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            vowelCount += 1
        }
    }
    return vowelCount
}


//using RegExp
function countVowelsFour(str) {
    return str.split(new RegExp(/[aeiou]/gi)).length-1
}
