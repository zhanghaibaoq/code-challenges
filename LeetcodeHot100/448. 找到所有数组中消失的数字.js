const findDisappearedNumbers = nums => {
    const len = nums.length;
    for (const num of nums) {
        const x = (num - 1) % len;
        nums[x] += len;
    }
    const res = [];
    for (let i = 0; i < len; i++) {
        if (nums[i] <= len) res.push(i + 1);
    }
    return res;
};

function findDisappearedNumbers1(nums) {
    const numSet = new Set(nums);
    const result = [];

    for (let i = 1; i <= nums.length; i++) {
        if (!numSet.has(i)) {
            result.push(i);
        }
    }
    return result;
}


var findDisappearedNumbers2 = function (nums) {
    const res = []
    for (let i = 1; i <= nums.length; i++) {
        if (nums.includes(i)) {
            continue;
        }
        res.push(i)
    }
    return res;
};
//test
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
