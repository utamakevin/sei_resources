// Given a person's allergy score, determine whether or not they're allergic to a given item.

// An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).

// The list of items (and their value) that were tested are:

// eggs (1)
// peanuts (2)
// shellfish (4)
// strawberries (8)
// tomatoes (16)
// chocolate (32)
// pollen (64)
// cats (128)
// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.

// Now, given just that score of 34, your program should be able to say whether Tom is allergic to any one of those allergens listed above

// let allergies = new Allergies(34)
// allergies.isAllergicTo('eggs') // => false
// allergies.isAllergicTo('peanuts') // => true
// allergies.isAllergicTo('shellfish') // => false
// allergies.isAllergicTo('chocolate') // => true
// tests are provided below for your reference

class Allergies {

    constructor(score) {
        this.scoreArr = score.toString(2).split('').reverse()

        const item = ['cats', 'pollen', 'chocolate', 'tomatoes', 'strawberries', 'shellfish', 'peanuts', 'eggs'].reverse()
    
        this.allergies = []
        for(let i = 0; i < this.scoreArr.length; i++) {
            if(this.scoreArr[i] === '1') {
                this.allergies = [...this.allergies, item[i]]
            }
        }
        console.log(this.allergies)
    }


    isAllergicTo(allergen) {
        return this.allergies.includes(allergen)
    }

}

let allergies = new Allergies(34)
console.log(allergies)
console.log(allergies.isAllergicTo('eggs'))
console.log(allergies.isAllergicTo('peanuts'))
console.log(allergies.isAllergicTo('shellfish'))
console.log(allergies.isAllergicTo('chocolate'))