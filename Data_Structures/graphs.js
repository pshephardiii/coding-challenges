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
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }
    }
}

let graph = new Graph()
graph.addVertex('fun')
graph.addVertex('times')
graph.addEdge('fun', 'times')

console.log(graph)
