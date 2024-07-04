// every node points towards the next AND previous node

// Big tradeoff... takes up more memory

class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        let newNode = new Node(val)
        if (!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        if (!this.head){
            return undefined
        }
        let prevTail = this.tail
        if (this.head === this.tail){
            this.head = null
            this.tail = null
        } else {
            this.tail = prevTail.prev
            prevTail.prev = null
            this.tail.next = null
        }
        this.length--
        return prevTail
    }

    shift(){
        if (!this.head){
            return undefined
        }
        let prevHead = this.head
        if (this.head === this.tail){
            this.head = null
            this.tail = null
        } else {
            this.head = prevHead.next
            prevHead.next = null
            this.head.prev = null
        }
        this.length--
        return prevHead
    }

    unshift(val){
        let newNode = new Node(val)
        if (!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
}

let list = new DoublyLinkedList()

list.push(7)
list.push(8)
list.push(9)










