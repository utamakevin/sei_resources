function numberChain(startInt, endInt) {
    let chain = `(${startInt})`

    if (startInt < endInt) {
        for(let counter = startInt + 1; counter <= endInt; counter++) {

            chain = chain + `-(${counter})`
        }

    } else if (startInt > endInt) {
        for(let counter = startInt - 1; counter >= endInt; counter--) {
            
            chain = chain + `-(${counter})`
        }
    }

    return chain
}
