// morning everyone, it's warmup time! Define 2 variables and use if statements to translate the following flowchart into code. Come back at 9:45am

// https://venngage-wordpress.s3.amazonaws.com/uploads/2018/02/flow-chart-template-1.png


// let isInRelationship = false
// let isSerious = true

// let isInRelationship = Boolean(process.argv[2])
// let isSerious = Boolean(process.argv[3])

let isInRelationship = process.argv[2]
let isSerious = process.argv[3]

// let isInRelationship = Boolean("sss")
// let isSerious = Boolean("aaa")

console.log(isInRelationship)
console.log(isSerious)

if (isInRelationship && isSerious) {
        console.log("Romantic dinner for two!")
    } else {
        console.log("Head to the closest bar!")
    }