export const dijkstra = (graph, start, end) => {
  const distances = {};
  const previous = {};
  const queue = [];

  // Initialize distances and queue
  graph.forEach((node) => {
    distances[node.name] = Infinity;
    previous[node.name] = null;
    queue.push(node.name);
  });
  distances[start] = 0;

  while (queue.length > 0) {
    // Get the node with the smallest distance
    queue.sort((a, b) => distances[a] - distances[b]);
    const current = queue.shift();

    if (current === end) break;

    const neighbors = graph.find((node) => node.name === current).neighbors;
    neighbors.forEach(({ name, distance }) => {
      const alt = distances[current] + distance;
      if (alt < distances[name]) {
        distances[name] = alt;
        previous[name] = current;
      }
    });

  }
 
  console.log(distances);
  // Reconstruct the shortest path
  const path = [];
  let currentNode = end;
  while (currentNode) {
    path.unshift(currentNode);
    currentNode = previous[currentNode];
  }

  return { path, distance: distances[end] };
};
