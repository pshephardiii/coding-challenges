// trees are data structure that consists of nodes in a parent/child relationship

// trees are non-linear... more than one pathway through a tree (branching)
// compared to singly linked lists... no branching, only one pathway

// node can only point towards child
// with trees, no pointing towards parent or sibling(s)

// root is the top node in a tree
// child is node directly connected to another node moving away from root
// leaf: a node with no children
// edge: connection between one node and another (what I would refer to as a branch on a tree)

// USES FOR TREES

// HTML DOM, network routing, abstract syntax trees (explaining syntax of programming language), AI, decision tree, folders in operating systems, JSON

// BINARY TREES

// binary tree: each node can have at most two children (they can have less)

// BINARY SEARCH TREES

// special case of binary tree
// sorted in a particular way (data that can be compared)

// EXAMPLE: from root integer, every node less than parent branches to left, every branch to the right is greater

// searching a binary tree:
// similar to a binary search in an array

// BIG O:
// Insertion: O(log n)
// Searching: O(log n)
// Worst case... O(N) if it's a completely one sided tree (only one super long branch)

// TREE TRAVERSAL (trees in general)

// how do we visit every node one time?
// Ex. looking if a value is in an unordered tree

// breadth first approach: working along tree horizontally (by sibling)
// depth first: going down the tree vertically then back up

// BINARY SEARCH TREE CLASS

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return this
        }
        let current = this.root
        while(true) {
            if (newNode.val > current.val) {
                if (newNode.val === current.val) {
                    return undefined
                }
                if (!current.right) {
                    current.right = newNode
                    return this
                } else {
                    current = current.right
                }
            } else {
                if (!current.left) {
                    current.left = newNode
                    return this
                } else {
                    current = current.left
                }
            }
        }
    }

    find(val) {
        if (!this.root) {
            return false
        }
        let current = this.root
        let found = false
        while(current && !found) {
            if (val < current.val) {
                current = current.left
            } else if (val > current.val) {
                current = current.right
            } else {
                found = true
            }
        }
        return found
    }

    // BREADTH FIRST SEARCH

    // Create a queue (this can be an array) and a variable to store the values of nodes visited

    // Loop as long as there is anything in the queue
    // Check for left and right property on each dequeued node
    // Return variable that stores all of our values

    BFSearch() {

        let node = this.root
        let queue = []
        let visited = []
    
        queue.push(this.root)
    
        while (queue.length > 0) {
            node = queue.shift()
            visited.push(node.val)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        return visited
    }
}

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

let tree = new BinarySearchTree()

tree.insert(5)
tree.insert(7)
tree.insert(4)
tree.insert(3)
tree.insert(1200)

console.log(tree.BFSearch())






