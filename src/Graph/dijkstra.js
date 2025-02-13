import { MinPriorityQueue } from "@datastructures-js/priority-queue";

export const dijkstra = (graph, start, end) => {
  const distances = {};
  const previous = {};
  const pq = new MinPriorityQueue((node) => node.distance);
  const visited = new Set();

  // Convert graph to a Map for fast lookup
  const graphMap = new Map(graph.map(node => [node.name, node.neighbors]));

  // Initialize distances
  graph.forEach(({ name }) => {
    distances[name] = Infinity;
    previous[name] = null;
  });
  distances[start] = 0;
  
  // Start with the source node
  pq.enqueue({ name: start, distance: 0 });

  while (!pq.isEmpty()) {
    const { name: current, distance: currentDist } = pq.dequeue();

    if (visited.has(current)) continue; // Skip if already processed
    visited.add(current);

    if (current === end) break; // Stop if we reached the target node

    const neighbors = graphMap.get(current) || []; // Get all neighbor data from the graphMap
    for (const { name, distance } of neighbors) {
      const newDist = currentDist + distance;
      if (newDist < distances[name]) {
        distances[name] = newDist;
        previous[name] = current;
        pq.enqueue({ name, distance: newDist });
      }
    }
  }

  // Reconstructing the shortest path
  const path = [];
  let currentNode = end;
  while (currentNode) {
    path.unshift(currentNode);
    currentNode = previous[currentNode];
  }

  return { path };
};
