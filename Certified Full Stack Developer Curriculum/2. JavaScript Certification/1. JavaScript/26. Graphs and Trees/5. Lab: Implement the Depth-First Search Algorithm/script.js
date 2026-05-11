function dfs(graph, root) {
    const visited = new Array(graph.length).fill(false);
    const stack = [];
    const result = [];

    stack.push(root);
    visited[root] = true;

    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node);

        for (let neighbour = 0; neighbour < graph.length; neighbour++) {
            if (graph[node][neighbour] === 1 && !visited[neighbour]) {
                visited[neighbour] = true;
                stack.push(neighbour);
            }
        }
    }

    return result;
}

console.log(dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 1));

console.log("");

console.log(dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 3));

console.log("");

console.log(dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]], 3));

console.log("");

console.log(dfs([[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]], 3));

console.log("");

console.log(dfs([[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]], 0));