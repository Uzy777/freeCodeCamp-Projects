function dfsNQueens(n) {
    if (n < 1) {
        return [];
    }

    const solutions = [];

    const colsUsed = new Array(n).fill(false);
    const diagDownUsed = new Array(2 * n - 1).fill(false);
    const diagUpUsed = new Array(2 * n - 1).fill(false);

    const placement = [];

    function dfs(row) {
        if (row === n) {
            solutions.push(placement.slice());
            return;
        }

        for (let col = 0; col < n; col++) {
            const down = row - col + (n - 1);
            const up = row + col;

            if (colsUsed[col] || diagDownUsed[down] || diagUpUsed[up]) {
                continue;
            }

            colsUsed[col] = true;
            diagDownUsed[down] = true;
            diagUpUsed[up] = true;
            placement.push(col);

            dfs(row + 1);

            placement.pop();
            colsUsed[col] = false;
            diagDownUsed[down] = false;
            diagUpUsed[up] = false;
        }
    }

    dfs(0);
    return solutions;
}

console.log(dfsNQueens(1));        // [[0]]
console.log(dfsNQueens(2));        // []
console.log(dfsNQueens(3));        // []
console.log(dfsNQueens(4));        // [[1,3,0,2],[2,0,3,1]]
console.log(dfsNQueens(5).length); // 10
console.log(dfsNQueens(8).length); // 92