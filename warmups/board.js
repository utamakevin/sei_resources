function boardWithRowsAndCols(numOfRows, numOfCols) {
    if (numOfCols === undefined) {
        numOfCols = 8
    }

    if (numOfRows === undefined) {
        numOfRows = 8
    }
        
    let result = ''
    let oddLine = '# '.repeat(numOfCols) + '\n'
    let evenLine = ' #'.repeat(numOfCols) + '\n'

    for (i = 1 ; i <= numOfRows; i++) {
        if (i % 2 === 0) {
            result = result.concat(evenLine)
        } else {
            result = result.concat(oddLine)
        }
    }

    console.log(result)
}

function boardwithRows(numOfRows) {
    let result = ''
    let oddLine = '# # # # # # # # \n'
    let evenLine = ' # # # # # # # #\n'

    if (numOfRows === undefined) {
        numOfRows = 8
    }

    for (i = 1 ; i <= numOfRows; i++) {
        if (i % 2 === 0) {
            result = result.concat(evenLine)
        } else {
            result = result.concat(oddLine)
        }
    }

    console.log(result)
}

function crappyBoard() {
    console.log('# # # # # # # #\n # # # # # # # #\n# # # # # # # # \n # # # # # # # #\n# # # # # # # # \n # # # # # # # #\n# # # # # # # # \n # # # # # # # # \n')
}