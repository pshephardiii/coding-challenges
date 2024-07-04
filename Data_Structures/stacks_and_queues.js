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






