const rotate = matrix => {
    let [start, end] = [0, matrix.length - 1];
    // 外层while表示旋转的层数
    while (start < end) {
        let [i, j] = [start, end];
        // 内层while每次旋转的次数
        while (i < end) {
            // 对应位置，强行旋转
            [matrix[start][i], matrix[i][end], matrix[end][j], matrix[j][start]] = [
                matrix[j][start],
                matrix[start][i],
                matrix[i][end],
                matrix[end][j],
            ];
            i++;
            j--;
        }
        start++;
        end--;
    }
};

// 方法一：使用辅助数组
var rotate1 = function (matrix) {
    const n = matrix.length;
    const matrix_new = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // 对于矩阵中第 i 行的第 j 个元素，在旋转后，它出现在倒数第 i 列的第 j 个位置。
            matrix_new[j][n - i - 1] = matrix[i][j];
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i, j] = matrix_new[i, j];
        }

    }
};