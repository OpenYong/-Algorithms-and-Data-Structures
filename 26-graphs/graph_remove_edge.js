class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (el) => el !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (el) => el !== vertex1
    );
  }
}

let g = new Graph();
g.addVertex("철수");
g.addVertex("영희");
g.addVertex("맹구");

g.addEdge("철수", "맹구");
g.addEdge("철수", "영희");

g.removeEdge("철수", "맹구");

console.log(g.adjacencyList);

// 일단은 양방향 그래프.
