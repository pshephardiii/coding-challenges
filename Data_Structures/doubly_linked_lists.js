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

    get(index){
        if (index >= this.length || index < 0) {
            return null
        }
        let count, current
        let mid = Math.floor(this.length / 2)
        if (index > mid) {
            current = this.tail
            count = this.length - 1
            while (count > index) {
                current = current.prev
                count--
            }
        } else {
            current = this.head
            count = 0
            while (count < index) {
                current = current.next
                count++
            }
        }
        return current
    }

    set(index, value){
        let setNode = this.get(index)
        if (!setNode) {
            return false
        } else{
            setNode.val = value
            return true
        }
    }

    insert(index, value){
        if (index < 0 || index > this.length) {
            return false
        } else if (index === this.length) {
            this.push(value)
            return true
        } else if (index === 0) {
            this.unshift(value)
            return true
        } else {
            let newNode = new Node(value)
            let prevNode = this.get(index - 1)
            let nextNode = this.get(index + 1)
            prevNode.next = newNode
            nextNode.prev = newNode
            newNode.next = nextNode
            newNode.prev = prevNode
            this.length++
            return true
        }
    }
}

let list = new DoublyLinkedList()

list.push(7)
list.push(8)
list.push(9)










