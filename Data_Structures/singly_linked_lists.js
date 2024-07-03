// Ordered data structure
// Linked list consists of nodes, and each node has a value and a pointer to another node or null
// contains a head, tail, and length property

// My thought: contains value, but also references next node

// Diagram:

// 4 --> 6 --> 8 --> 2 --> null
// Head ---------> Tail

// Why singly linked? Each node only points towards one other (not reflexive)

// Compared to arrays:

// No indices
// Connected via nodes with a next pointer
// Random access is not allowed
// Big upside: if you care about insertion and deletion, can be better than arrays

// Starter code:

// class for each node:

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

// Bad way of representing linked list:

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("Johnny")

// Singly Linked List Class

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    // push method
    push(val){
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    // default pop method
    pop(){
        if (this.length === 0) {
            return undefined
        } 
        let current = this.head
        // This loop should end with current as the second to last node
        for (let i = 1; i < this.length - 1; i++) {
            current = current.next
        }
        // Same the tail value before setting it to null
        let removed = current.next
        // Set tail value to null
        current.next = null
        // Set second to last node as new tail
        this.tail = current
        // Reduce length of list
        this.length--
        if (this.length === 0) {
            let val = this.head
            this.head = null
            this.tail = null
            return val
        }
        // Return saved value of removed node
        return removed
    }

    // Shift (remove node from the beginning)
    shift() {
        if (this.length === 0) {
            return undefined
        }
        let prevHead = this.head
        this.head = prevHead.next
        this.length--
        if (!this.head) {
            this.tail = null
        }
        return prevHead
    }

    // Unshift (add node to beginning)
    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }
        let current = this.head
        let count = 0
        while(count < index) {
            current = current.next
            count++
        }
        return current
    }

    set(index, value) {
        let setNode = list.get(index)
        if (!setNode) {
            return false
        } else {
            setNode.val = value
            return true
        }
    }
}



let list = new SinglyLinkedList()

list.unshift(1)
list.unshift(2)
list.unshift('uhohohoh')
list.unshift(3)
list.set(0, "it worked")
console.log(list.set(-2, "oh boy"))





