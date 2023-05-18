const readlineSync = require('readline-sync')


while(true) {
    answer = readlineSync.prompt()

    if(answer === answer.toUpperCase() && answer !== '' && answer !== '?') {
        console.log('Woah, chill out!')
    } else if(answer.includes('?')) {
        console.log('Sure.')
    } else if(answer.trim() === '') {
        console.log('Fine. Be that way!')
    } else {
        console.log('Whatever.')
    }
} 