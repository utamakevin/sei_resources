function countBlanks(array) {
    let counter = 0
    for(let i = 0; i < array.length; i++) {
        
        if(array[i].trim().length == 0) {
            counter++
        }
    }
    return counter
}