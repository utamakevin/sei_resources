// Design a HashSet without using any built-in hash table libraries.

// Implement MyHashSet class:

// void add(key) Inserts the value key into the HashSet.
// bool contains(key) Returns whether the value key exists in the HashSet or not.
// void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 
class MyHashSet {
    constructor() {
        this.hash = []
    }

    get all() {
        return this.hash
    }

    add(key) {
        if (!this.hash.includes(key)) {
            this.hash.push(key)
            this.hash.sort((a, b) => a - b)
            return key + ' inserted'
        } else {
            return key + ' already existed'
        }
    }

    contains(key) {
        if (this.hash.includes(key)) {
            return true
        } else return false
    }

    remove(key) {
        if (this.hash.includes(key)) {
            this.hash.splice(this.hash.indexOf(key), 1)
            return key + ' removed'
        } else {
            return key + ' does not exist'
        }
    }
}

hash = new MyHashSet
hash.add(1)
hash.add(2)
hash.add(3)
hash.remove(2)
console.log(hash.all)