const moveZeroes = (arr) => {
    let i = 0;
    let j = 0;
    while (j < arr.length) {
        if (arr[j] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
        j++;
    }
    return arr;
};

const moveZeroes1 = (nums) => {
    let index = 0; // 当前非零元素要放置的位置
    // 将非零元素按顺序放置到数组的前面‘
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index++] = nums[i];
        }
    }
    // 将后面剩余的位置填充为零
    while (index < nums.length)
        nums[index++] = 0;

    return nums;
};