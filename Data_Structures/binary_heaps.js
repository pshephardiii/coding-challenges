// Heaps are a category of trees, so everything that applies to trees will apply to heaps

// Min and Max heaps (we will focus on the latter)

// Binary Heap: in max heap, parent nodes are always larger than child nodes (opposite is true in a min heap)

// Still can only have up to two children per parent node
// sibling order is not guaranteed, however
// left is not necessarily the smaller number, etc.

// a binary heap is as compact as possible... all the children of each node are as full as they can be and left children are filled out first

// used to implement priority queue
// also used with graph traversal algorithms

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

    // extractMax() {

    // }
}

let heap = new MaxBinaryHeap()
console.log(heap.insert(1))
console.log(heap.insert(2))
console.log(heap.insert(40))
console.log(heap.insert(3))
console.log(heap.insert(33))
console.log(heap.insert(35))
console.log(heap.insert(100))
