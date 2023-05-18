Prompt:
/*
Write a function called removeEnds that accepts a single string argument, then returns the a string with the first and last characters removed.
If the length of the string argument is less than 3, return an empty string.
Examples:

removeEnds('SEI Rocks!') //=> "DI Rocks"
remmoveEnds('abc') //=> "b" 
removeEnds('a') //=> ""
*/

function removeEnds(string) {
        result = string.slice(1, -1)
        return result
}