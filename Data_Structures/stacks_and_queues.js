// stacks

// abstract data structure
// LIFO principle: last in first out

// last element added is first one removed

// Use cases: managing function invocations, undo/redo, routing (history object), algorithms for trees and graphs

// Big O:
// Insertion: O(1)
// Removal: 0(1)
// searching and access: O(N) - typically don't use stacks for these

// Making a stack out of an array:

let stack = []

stack.push("google")
stack.push("instagram")
stack.push("youtube")

stack.pop()

// push and pop in tandem helps array function like a stack

// Another way with array:

let stack2 = []

stack2.unshift("create new file")
stack2.unshift("resized file")
stack2.unshift("cloned out wrinkle")

stack2.shift()

// shift and unshift can be used too

// We should ALWAYS use the push/pop method for efficiency's sake

// Also, if you are worried about efficiency, arrays aren't the way to go for stacks, as they store indices needlessly

// Stack as a singly linked list:

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    // this is really unshift!
    push(val){
        let newNode = new Node(val)
        if (!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }
    // this is really shift!
    pop(){
        let prevFirst = this.first
        if (!this.first) {
            return null
        } else if (this.first === this.last) {
            this.last = null
        } 
        this.first = this.first.next
        this.size--
        return prevFirst.val
    }
}

// Queues

// FIFO data structure: first in first out

// use cases: background tasks, uploading or downloading resources, printing/task processing

// Creating a queue with an array

let q = []

q.push("First")
q.push("Second")
q.push("Third")

q.shift()

// push and shift in tandem create a queue 

let q2 = []

q.unshift("First")
q.unshift("Second")
q.unshift("Third")

q.pop()

// same with unshift and pop

// Both require complete reindexing of the entire queue

// Linked List Based Queue:

class Node2 {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val) {
        let newNode = new Node2(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else{
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }

    dequeue() {
        if (!this.first) {
            return null
        } 
        let prevFirst = this.first
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return prevFirst.val
    }
}

let q3 = new Queue()

q3.enqueue("first in line")
q3.enqueue("second in line")
console.log(q3.dequeue())

