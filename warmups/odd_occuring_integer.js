function OddOccuringInteger(arr) {
    arr.sort((a, b) => a - b)
    console.log(arr)
    let result = null
    arr.forEach(int => {
        let filteredArr = arr.filter(x => x === int)
        
        if(filteredArr.length % 2 !== 0) {
            result = int
        }        
    })
    return result
}

console.log('answer is ' + OddOccuringInteger([20,1,-1,2,-2,3,3,8,8,1,2,4,20,4,-1,-2,8]))