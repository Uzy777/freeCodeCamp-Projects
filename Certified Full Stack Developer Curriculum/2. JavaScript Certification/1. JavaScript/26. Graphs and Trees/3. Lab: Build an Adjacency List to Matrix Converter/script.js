function adjacencyListToMatrix(graph) {
    const n = Object.keys(graph).length;
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));

    for (const node in graph) {
        const from = Number(node);
        for (const to of graph[node]) {
            matrix[from][to] = 1;
        }
    }

    for (const row of matrix) {
        console.log(row);
    }

    return matrix
}


console.log(adjacencyListToMatrix({ 0: [1, 2], 1: [2], 2: [0, 3], 3: [2] }));

console.log("");

console.log(adjacencyListToMatrix({ 0: [1], 1: [0] }));

console.log("");

console.log(adjacencyListToMatrix({ 0: [], 1: [], 2: [] }));
