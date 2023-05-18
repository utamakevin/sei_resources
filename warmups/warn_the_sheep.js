// A wolf in sheep's clothing
// You are a sheep farmer, and are plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the right hand side of the array: [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)

// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue relative to you.

// Note: there will always be exactly one wolf in the array.

// Examples:
// warnTheSheep(["sheep", "wolf", "sheep"]) //=> "Oi! Sheep number 1! You are about to be eaten by a wolf!"
// warnTheSheep(["sheep", "sheep", "wolf"]) //=> "Pls go away and stop eating my sheep"
// warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]) //=> "Oi! Sheep number 5! You are about to be eaten by a wolf!"

function warnTheSheep(array) {

    if(array[array.length - 1] === 'wolf') {
        return 'Pls go away and stop eating my sheep'
    } else {
        let sheepInDangerNumber = array.length - array.indexOf('wolf') - 1
        return `Oi! Sheep number ${sheepInDangerNumber}! You are about to be eaten by a wolf!`
    }
}