// There are 100 fans lined up in a row, all fans are initially off. A user goes to every fan multiple times and toggle (if off then on, if on then off) them in the following way:

// In the first time, the user toggles every fan

// In the second time, the user toggles every second fan, i.e., 2nd, 4th, 6th, ...

// In the third time, the user toggles every third fan, i.e. 3rd, 6th, 9th, ...

// and like that, in the 100th time, the user toogle the 100th fan.

// Question: Write a function that shows which fans are on after the last time.

let fansArr = Array(100).fill(false)

function fans() {
    for(iteration = 1; iteration <= 100; iteration++) {
        for (const index in fansArr) { 
            if ((index + 1) % iteration === 0) {
                fansArr[index] = !fansArr[index]
            }
        }
    }
    return fansArr
}

console.log(fans())