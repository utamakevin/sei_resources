# Problem
All things need algorithm to sort out. Example: have dinner, do dishes, bring plate - which one first? and how?

# Watch Breaking Bad - 1 season (4k)
Option 1: bittorrent ftp download
Option 2: Amazon order bluray 1 season (next day delivery) 24hrs


# What if I want to watch 2 seasons - computer science is about how things scale - bigger sample size
Option 1 requires 40hr
Option 2 requires 24hr - constant

# constant - O(1)
# log
# linear - O(n)
# quadratic - O(n^2)
# exponential
# factorial

Big O notation - all about the worst case scenario

lets say we have an array of numbers
we are looking for one particular number in the array
if the first element is what you're looking for - you're lucky - but what if it isn't? how to be effective and efficient?

# hash table

let table = {
    20: 2,
    1: 1,
    3: 1
}

for (num of numbers) {
    if (lookup table for num if it exists) {
        increment count
    } else {
        set to 1
    }
}

for (key in obj) {
    if table[key] is odd {

    }
}

O(n) - linear

js - object is basically a hash table

arrays, stack, queue

lookup a key is constant time no matter how big the table gets
looking for elements in an array is linear time - gets longer as the array gets bigger


```javascript
let game = {
    mary: 5,
    jo: 4,
    lisa: 10
}

```

hashtable = [, , , , , , , , , , ['mary', 5], , , , , , , ] // 100

mary ===> ['m', 'a', 'r', 'r', 'y']
hash('mary') // => 65

