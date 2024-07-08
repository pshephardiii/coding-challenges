// sometimes called a hash map

// hash tables are used to store key-value pairs (basically an object/map in js)
// like arrays, but keys are not ordered
// fast for finding, adding, and removing values

// Ex. storing color hex values with more readable keys, like "pink"

// We'd need a way to convert keys into valid array indices
// A function that performs this task is called a hash function

// Ex. "pink" could correspond with 0, "red" with 1, etc.

// Hash Functions

// some hash functions are one-way, in that the output doesn't tell you anything on its own

// Big O:
// insert, deletion, access: O(1) - average case

// What makes a good hash? (not a crytpographically secure one)
// Fast (constant time)
// Distributes uniformly (doesn't cluster outputs at specific indices)
// Deterministic (same input yields same output)

// char code UTF values: "a".charCodeAt(0)... if you subtract by 96, you could alphabetic positioning (example "a" would be 1)

// Hash that works on strings only:

function hash(key, arrayLen) {
    let total = 0
    for (let char of key) {
        // the value will be the UTF code of char - 96
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen
    }
    return total
}

// problem: not constant time and could make data clustered

// an improved (still not great) hash that uses prime numbers:

function hash(key, arrayLen) {
    let total = 0
    let prime = 31
    // put a cap on the number of times we loop even if key has more than 100 characters
    for (let i = 0; i< Math.min(key.length, 100); i++) {
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total * prime + value) % arrayLen
    }
    return total
}

// handling collisions:

// two strategies:

// 1. separate chaining
// at each index in our array we store values using a more sophisticated data structure (like an array or a linked list)
// We can store multiple key-value pairs at the same position

// 2. Linear probing
// only store one piece of data at each position
// when we find a collision, we search through the array to find the next empty slot

// We'll use separate chaining

// Hash Table Class:

class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0
        let prime = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * prime + value) % this.keyMap.length
        }
        return total
    }

    set(key, value) {
        let index = this._hash(key)
        let data = [key, value]
        // if the indexed spot is itself an array, that means there is data already in it, so we can just push the new data in as a separate array
        // if it's not an array, just set the indexed spot to an array that has the data as a subarray
        Array.isArray(this.keyMap[index]) ? this.keyMap[index].push(data) : 
        this.keyMap[index] = [data]
        return this.keyMap
    }

    get(key) {
        let index = this._hash(key)
        let mapIndex = this.keyMap[index]
        // check if it is array to avoid error
        if (Array.isArray(mapIndex)) {
            // if it is array, loop through and look for a subarray that includes the key
            for (let i = 0; i < mapIndex.length; i ++) {
                if (mapIndex[i][0] === key) {
                    return mapIndex[i][1]
                }
            }
        }
        // if the indexed spot is empty or doesn't contain a subarray with the key, return undefined
        return undefined
    }

    keys() {
        let result = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (!this.keyMap[i]) {
                continue
            }
            for (let j = 0; j < this.keyMap[i].length; j++) {
                // use this conditional if you only want to return unique keys/values
                if (!result.includes(this.keyMap[i][j][0])) {
                    result.push(this.keyMap[i][j][0])
                }
            }
        }
        return result
    }

    values() {
        let result = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (!this.keyMap[i]) {
                continue
            }
            for (let j = 0; j < this.keyMap[i].length; j++) {
                if (!result.includes(this.keyMap[i][j][1])) {
                    result.push(this.keyMap[i][j][1])
                }
            }
        }
        return result
    }
}

let table = new HashTable()

table.set("red", 77)
table.set("red", 77)
table.set("pink", 3)
console.log(table.set("oh boy", 8000))
console.log(table.get("pink"))
console.log(table.keys())
console.log(table.values())