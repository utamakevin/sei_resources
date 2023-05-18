
function palindrome(str) {
// debugger
    
    for(let index = 0; index < (parseInt(str.length/2)); index++) {
        if (str[index]!==str[str.length-1-index]) {
            return false
        }
    }
    return true
}



function isPalindrome(string) {
    string = string.replaceAll(" ", "").toLowerCase()
    if (string === string.split("").reverse().join("")) {
        return true
    } else {
        return false
    }
}