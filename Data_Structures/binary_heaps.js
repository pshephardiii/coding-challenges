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

console.log(heap.extractMax())
console.log(heap)