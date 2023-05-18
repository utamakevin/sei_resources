// Write a function called balancedBrackets that accepts a single string as argument.
// The input string is composed entirely of parentheses, brackets and/or curly braces, i.e., (), [] and/or {}. Referred to as "braces" from this point forward...
// The balancedBraces function should return true if the string's braces are "balanced" and false if they are not.
// The brackets are considered unbalanced if any closing bracket does not close the same type of opening bracket, ignoring already matched brackets between them. Examples explain it best...
// Examples:

// balancedBrackets( '()' ) // => true
// balancedBrackets( '(]' ) // => false
// balancedBrackets( '[{}]' ) // => true
// balancedBrackets( '[(])' ) // => false
// balancedBrackets( '[({}[])]' ) // => true
// balancedBrackets( '[({}[])}' ) // => false

const openBracket = ['(','[','{']

const map = {
    '(': ')',
    '[': ']',
    '{': '}'
}

function balancedBrackets(string) {
    
    arr = string.trim().split('')
    reverserArr = arr.slice(0).reverse()

    if (arr.length === 0) {
        console.log(true)
        return true
    } 

    if (openBracket.includes(arr[0])) {
        if (arr.slice(1).includes(map[arr[0]])) {
            let reversedIndex = reverserArr.indexOf(map[arr[0]])
            string = arr.slice((1), (arr.length - reversedIndex - 1)).join('')
            return balancedBrackets(string)
        } else {
            console.log(false)
            return false
        }
    }
}



balancedBrackets( '(]' ) // => false
balancedBrackets( '[{}]' ) // => true
balancedBrackets( '[(])' ) // => false
balancedBrackets( '[({}[])]' ) // => true
balancedBrackets( '[({}[])}' ) // => false
balancedBrackets( '[({}[})]' ) // => false