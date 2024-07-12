// Collection of nodes and connections between those nodes

// Uses include social networks, location/mapping, routing algorithms, visual hierarchy, file system optimizations, recommendation algorithms, etc.

// Terminology: 

// Vertex: a node
// Edge: connection between nodes
// Weighted/Unweighted: values assigned to distances between vertices
// Directed/Undirected: directions assigned to distanced between vertices

// Types:

// Tree is a special type of graph where there is only one path between two nodes

// Directed graph: there is a direction(s) assigned to the edge (one-way or two-way)
// Undirected graph: all edges are two-way (or have no direction... this would mean the same thing)

// Weighted graph: edges have a value associated to them
// Unweighted: edges have no value

// Storing graphs:

// Method 1: Adjacency Matrix
// Nested arrays... rows and columns
// So, you have a row and column for each node.  When the nodes connect (Like row A and column B), you put a 1.  If not, 0.

// Below: A is connected to B and D, but B and D are not connected.  B is also connected to C, which is not connected to any other node.  This kind of diagram would be represented as a 2d array. *** this is undirected graph ***

//  | A | B | C | D |
// A| 0 | 1 | 0 | 1 |
// B| 1 | 0 | 1 | 0 |
// C| 0 | 1 | 0 | 0 |
// D| 1 | 0 | 0 | 0 |

// Method 2: Adjacency List

// use a list to store edges
// Use hash table to list each node as a key and their values as the nodes they are connected to

// Big O: Matrix vs List
// *** V is for number of vertices, E is number of edges
// Add vertex: O(1) for List, O(V^2) for Matrix
// Add edges: both O(1)
// Remove vertex: O(V + E) vs O(V^2)
// Remove edge: O(E) vs O(1)
// Query: O(V + E) vs O(1)
// Storage: O(V + E) vs O(V^2)

// if you have a lot of edges, matrix can be good, but list is better in terms of number of vertices

// List: can take up less space, faster to iterate over all edges, can be slower to lookup a specific edge

// Matrix: takes up more space, slower to iterate over all edges, faster to lookup specific edge

// For our purposes, we'll use the adjacency list, as data tends to be sparse in the real world

// Graph Class (undirected):

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }
    // order would matter if we were making a directed graph
    // Does not account for weighted graph as wwritten
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }
    }

    // For weighted graph
    addEdgeWeighted(vertex1, vertex2, weight) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push({node:vertex2, weight})
            this.adjacencyList[vertex2].push({node:vertex1, weight})
        }
    }

    // Does not account for weighted graph as written
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
                v => v !== vertex2
            )
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
                v => v !== vertex1
            )
        }
    }

    // Does not account for weighted graph as written
    removeVertex(vertex) {
        let i = 0
        while (this.adjacencyList[vertex].length !== 0) {
            let secondVertex = this.adjacencyList[vertex][i]
            this.removeEdge(vertex, secondVertex)
        }
        delete this.adjacencyList[vertex]
    }

    // Graph traversal - depth first search - recursive
    RecursiveDFS(startingVertex) {
        // array to store final result of traversed nodes in order
        let result = []
        // object to keep track of which nodes have already been visited
        let visited = {}
        // need a variable for the adjacency list so that it can be accessed in the helper function
        let adjList = this.adjacencyList

        // helper recursive function
        function DFS(vertex) {
            // If there's no vertex, just return
            if (!vertex) {
                return null
            }

            // Add vertex as a key into visited with the value true
            visited[vertex] = true
            // Push vertex into result array
            result.push(vertex)

            // Use a for each loop to check if the vertex's neighbors are in the visited object.  If they are not, return the recursive function with those unvisited vertices
            // Needed a for each here... if you use simple for loop, it will stop the loop after the first return of the recursive function, but we need to check every neighbor
            adjList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return DFS(neighbor)
                }
            })
        }
        DFS(startingVertex)
        return result
    }

    // iterate using a stack for depth first search
    iterativeDFS(startingVertex) {
        let stack = [startingVertex]
        let result = []
        let visited = {}
        let vertex = null

        visited[startingVertex] = true
        
        while (stack.length) {
            vertex = stack.pop()
            result.push(vertex)
            // For each neighbor of the most recently popped vertex, check to see if they have been visited
            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return result
    }

    // Check all of the original node's neighbors before moving on down the line
    breadthFirst(startingVertex) {
        let queue = [startingVertex]
        let result = []
        let visited = {}
        let vertex = null
        visited[startingVertex] = true

        while (queue.length) {
            vertex = queue.shift()
            result.push(vertex)
            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }
        return result
    }

    // updated with the binary heap priority queue
    shortestDistance(start, end) {
        // to keep track of minimum distances from start to each node
        let distances = {}
        
        let q = new UpgradedPriorityQueue()

        // keep track of the path of shortest distance to each node...
        // That is, for each node, track the node previous
        let previous = {}
        // This will be returned
        let path = []
        let smallest = null
        // build up initial state
        for (let key in this.adjacencyList) {
            if (key === start) {
                distances[key] = 0
                q.enqueue(key, 0)
            } else {
                distances[key] = Infinity
                q.enqueue(key, Infinity)
            }
            previous[key] = null
        }
        
        while (q.vals.length > 0) {
            smallest = q.dequeue().val
            // Check if dequeued is the end point
            if (smallest === end) {
                // push values from previous into path
                while (previous[smallest]) {
                    path.push(smallest)
                    // this is how smallest gets assigned to starting value
                    smallest = previous[smallest]
                }
                break
            }
            // Loop through the neighboring nodes of the dequeued node
            for (let index in this.adjacencyList[smallest]) {
                // index is just the index of the node, so we need to set the adjacent node in a variable here
                let nextNode = this.adjacencyList[smallest][index]
                // Check the distance to the dequeued node plus the weight of the adjacent node
                let candidate = distances[smallest] + nextNode.weight
                // nextItem will be the value of the next node
                let nextItem = nextNode.node
                // If the current distance to the next node is more than our candidate distance, make the candidate the new shortest path
                if (candidate < distances[nextItem]) {
                    // update distance to next item
                    distances[nextItem] = candidate
                    // update the previous node for the next item
                    previous[nextItem] = smallest
                    // Throw the updated next item on the queue to eventually be dequeued 
                    q.enqueue(nextItem, candidate)
                }
              
            }
        }
        // Add the starting point to path then reverse it to see path from start to end
        return path.concat(smallest).reverse()
    }
}

// simple priority queue
class PriorityQueue {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
}

// This is the upgraded priority queue from the binary heaps section
class UpgradedPriorityQueue {
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
        // This is a bit confusing, because the lower the priority number, the higher the priority.
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

let g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")


let wg = new Graph()
wg.addVertex("A")
wg.addVertex("B")
wg.addVertex("C")
wg.addVertex("D")
wg.addVertex("E")
wg.addVertex("F")

wg.addEdgeWeighted("A","B", 4)
wg.addEdgeWeighted("A","C", 2)
wg.addEdgeWeighted("B", "E", 3)
wg.addEdgeWeighted("C", "D", 2)
wg.addEdgeWeighted("C", "F", 4)
wg.addEdgeWeighted("D", "E", 3)
wg.addEdgeWeighted("D", "F", 1)
wg.addEdgeWeighted("E", "F", 1)

console.log(wg.shortestDistance("A", "E"))

// Graph Traversal

// Visiting every vertex in a graph/updating/checking

// Uses: peer to peer networking, web crawlers, finding "closest" matches/recommendations
// Shortest path problems: GPS navigation, solving mazes, AI

// Depth first search
// Explore as far as possible down one branch before backtracking

// See class above for methods!

// Dijkstra's Algorithm:

// ** involves a priority queue from binary heaps section ***

// Find the shortest path between two vertices on a weighted graph (this is what I thought it was)
// Use cases: GPS, network routing, biology (models spread of viruses among humans), airline tickets, etc.

// Weighted graph add-ons: see class above

// Dijkstra's: basic idea
// From starting point, find the closest node
// From the new node, check how far each of its neighbors are
// For each neighboring node, calculate distance by summing the total edges that lead to that node from the starting node
// If new total distance to a node is less than the previous total, we store the new shorter distance for that node
// Eventually, we'll have the shortest distance from the starting node to every node, including the target node.
// This distance will trace the shortest distance to each node along the way

// See shortestDistance method above!