// Heaps are a category of trees, so everything that applies to trees will apply to heaps

// Min and Max heaps (we will focus on the latter)

// Binary Heap: in max heap, parent nodes are always larger than child nodes (opposite is true in a min heap)

// Still can only have up to two children per parent node
// sibling order is not guaranteed, however
// left is not necessarily the smaller number, etc.

// a binary heap is as compact as possible... all the children of each node are as full as they can be and left children are filled out first

// used to implement priority queue
// also used with graph traversal algorithms

// BIG O NOTATION:
// O(log N) for both insertion and removal
// O(N) for search

// we can use arrays/lists to store heaps

// for any index of an array n, the left child is stored at 2n + 1 and the right child is stored at 2n + 2

// for any index of an array n, the parent is at index Math.floor((n - 1) / 2)

// Binary Heap Class:

class MaxBinaryHeap {
    constructor(){
        this.vals = []
    }

    // add to end, bubble up

    insert(val) {
        this.vals.push(val)
        let index = this.vals.length - 1
        let parentIndex = Math.floor((index - 1) / 2)
        // Keep swapping the new value with its parent until the parent is greater
        while(this.vals[index] > this.vals[parentIndex]) {
            let temp = this.vals[index]
            this.vals[index] = this.vals[parentIndex]
            this.vals[parentIndex] = temp
            index = parentIndex
            parentIndex = Math.floor((index - 1) / 2)
        }
        return this
    }

    extractMax() {
        let removedMax = this.vals[0]
        this.vals[0] = this.vals[this.vals.length - 1]
        this.vals.pop()

        // If array is empty or has one value after pop, no need to run the rest of the function
        if (this.vals.length <= 1) {
            return removedMax
        }
        let index = 0
        let leftChildIndex = 1
        let rightChildIndex = 2

        // while the swapped value is less than either of its children, get swapping
        // Won't run if the child indices extend beyond the length of the array, as then their values become undefined and the while condition will fail by default... this will happen if the swapped value has no children
        while (this.vals[index] < this.vals[leftChildIndex] || this.vals[index] < this.vals[rightChildIndex]) {

            let temp = this.vals[index]

            // if the swapped value is less than the left child and the left child is greater than its sibling, swap the value with the left child
            if (this.vals[index] < this.vals[leftChildIndex] && this.vals[leftChildIndex] > this.vals[rightChildIndex]) {

                this.vals[index] = this.vals[leftChildIndex]
                this.vals[leftChildIndex] = temp
                index = leftChildIndex

            // Otherwise, either the swapped value is greater than the left but not the right or it is less than both but the right child is the greater sibling, so swap with the right child instead
            } else {

                this.vals[index] = this.vals[rightChildIndex]
                this.vals[rightChildIndex] = temp
                index = rightChildIndex
            }
                                  
            // Update the child index variables based on the new index
            leftChildIndex = 2 * index + 1
            rightChildIndex = 2 * index + 2

        }
        return removedMax
    }
}

let heap = new MaxBinaryHeap()

heap.insert(2)
// heap.insert(40)
// heap.insert(100)
// heap.insert(33)
// heap.insert(35)
// heap.insert(3)
// heap.insert(10)
// heap.insert(25)
heap.insert(1)

// console.log(heap.extractMax())
// console.log(heap)

// PRIORITY QUEUE

// a data structure where each element has a priority... elements with higher priorities are served before elements with lower priorities

class PriorityQueue {
    constructor() {
        this.vals = []
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority)
        this.vals.push(newNode)
        let index = this.vals.length - 1
        let parentIndex = Math.floor((index - 1) / 2)
        let parent = this.vals[parentIndex]
        // Keep swapping the new node with its parent until the parent is a higher priority
        while(parent && newNode.priority < parent.priority) {
            let temp = this.vals[index]
            this.vals[index] = this.vals[parentIndex]
            this.vals[parentIndex] = temp
            index = parentIndex
            parentIndex = Math.floor((index - 1) / 2)
            parent = this.vals[parentIndex]
        }
        return this
    }

    dequeue() {
        let topPriority = this.vals[0]
        this.vals[0] = this.vals[this.vals.length - 1]
        this.vals.pop()

        // If array is empty or has one value after pop, no need to run the rest of the function
        if (this.vals.length <= 1) {
            return topPriority
        }
        let index = 0
        let leftChildIndex = 1
        let rightChildIndex = 2

        let current = this.vals[index]
        let leftChild = this.vals[leftChildIndex]
        let rightChild = this.vals[rightChildIndex]

        // while the swapped value is less than either of its children, get swapping
        // Need to check if children are undefined to avoid error
        while ((leftChild && current.priority > leftChild.priority) || (rightChild && current.priority > rightChild.priority)) {

            let temp = current

            // logic here is a bit much, but the idea is that left child must not be undefined, it must have a higher priority than current, and either the right child is undefined or not as highly prioritized as the left child.  If all of those conditions are met, swap the current with the left child.
            if ((leftChild && current.priority > leftChild.priority) && (!rightChild || leftChild.priority < rightChild.priority)) {

                this.vals[index] = this.vals[leftChildIndex]
                this.vals[leftChildIndex] = temp
                index = leftChildIndex
                current = this.vals[index]

            // Otherwise, either the left child is undefined, the current is a higher priority than left, or the right child is a higher priority than the left.  In any case, need to swap current with right child.
            } else {

               this.vals[index] = this.vals[rightChildIndex]
               this.vals[rightChildIndex] = temp
                index = rightChildIndex
                current = this.vals[index]
            }
                                  
            // Update the child variables based on the new index
            leftChildIndex = 2 * index + 1
            rightChildIndex = 2 * index + 2
            leftChild = this.vals[leftChildIndex]
            rightChild = this.vals[rightChildIndex]

        }
        return topPriority
    }
}

class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}

let list = new PriorityQueue()
list.enqueue("I am first", 3)
list.enqueue("I am second but higher priority", 2)
list.enqueue("I am low priority", 5)
list.enqueue("I am important!", 1)
list.enqueue("a duplicate", 4)
list.enqueue("help me", 7)

list.dequeue()
list.enqueue("new guy", 8)
list.dequeue()
list.enqueue("big dog", 1)
list.enqueue("loooow", 6)
list.enqueue("kind of ok", 10)


console.log(list)
