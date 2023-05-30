function solution(S) {
    let arrayS = S.split('')

    let counter = 0

    for (i = 0; i < S.length; i++) {
        testedString = arrayS
        testedString.push(arrayS[0])
        testedString.shift()
        
        
        console.log(testedString)
        if (testedString[0] === testedString[S.length - 1]) {
            counter++
        }
    }

    console.log(counter)
}

solution("abbaa")