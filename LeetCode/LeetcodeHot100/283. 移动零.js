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

    // let i = 0;
    // for (let j = 0; j < nums.length; j++) {
    //     if (nums[j] !== 0) {
    //         [nums[j], nums[i]] = [nums[i], nums[j]];
    //         i++;
    //     }
    // }
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

// 遍历nums，遇到为0的数，将其删除，然后在最后添加一个0，重置下标，继续从当前位置开始判断。
var moveZeroes2 = function(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (j++ < nums.length) {
            if (nums[i] === 0) {
                nums.splice(i, 1);
                nums.push(0);
                i--;
            }
        }
    }
};