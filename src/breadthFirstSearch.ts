interface Graph {
  [key: string]: string[];
}

export function breadthFirstSearch(graph: Graph, startNode: string): void {
  const queue: string[] = [startNode];
  const visited: Set<string> = new Set();

  while (queue.length > 0) {
    let current: string = queue.shift();

    for (let neighbour of graph[current]) {
      if (!visited.has(current)) {
        console.log("visited");
        visited.add(current);
        queue.push(neighbour);
      }
    }
  }

  console.log("outside while loop");
}
