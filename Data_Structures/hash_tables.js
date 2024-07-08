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