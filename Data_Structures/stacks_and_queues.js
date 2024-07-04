// stacks

// abstract data structure
// LIFO principle: last in first out

// last element added is first one removed

// Use cases: managing function invocations, undo/redo, routing (history object), algorithms for trees and graphs

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

