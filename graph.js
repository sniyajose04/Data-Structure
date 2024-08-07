//---------adjacency matrix-----------//

// const martics = [
//     [0,1,0],
//     [1,0,1],
//     [0,1,0]
// ]

// console.log(martics[0][2])

//----------adjacency list------------//

// const adjacencyList = {
//     'A': ['B'],
//     'B': ['A', 'C'],
//     'C': ['C']
// };

// console.log(adjacencyList['C']); 


class Graph {
    constructor() {
        this.vertices = [];
        this.edges = {};
    }

    addVertex(vertex) {
        this.vertices.push(vertex);
        this.edges[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        if (this.edges[vertex1]) this.edges[vertex1].push(vertex2);
        if (this.edges[vertex2]) this.edges[vertex2].push(vertex1);
    }

    bfs(startVertex) {
        let visited = {};
        let queue = [];

        visited[startVertex] = true;
        queue.push(startVertex);

        while (queue.length > 0) {
            const vertex = queue.shift();
            console.log(vertex);

            this.edges[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
    }

    dfs(startVertex) {
        let visited = {};
        const dfsHelper = (vertex) => {
            visited[vertex] = true;
            console.log(vertex);

            this.edges[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    dfsHelper(neighbor);
                }
            });
        }

        dfsHelper(startVertex);
    }
}

const graph = new Graph();

graph.addVertex('1');
graph.addVertex('2');
graph.addVertex('3');
graph.addVertex('4');

graph.addEdge('1', '2');
graph.addEdge('2', '3');
graph.addEdge('3', '4');
graph.addEdge('4', '1');

console.log('BFS:');
graph.bfs('1');

console.log('DFS:');
graph.dfs('1');


