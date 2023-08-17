/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    // nums.sort((a,b)=>a-b);
    // for(let i=0;i<nums.length;i+=2){
    //     if(nums[i]!=nums[i+1])
    //         return nums[i];
    // }

    let res = 0;
    nums.forEach(num => {
        res ^= num; //异或运算
    });
    return res;
    
    // return nums.reduce((a,b)=>a^b)
};

/* 

具体来说：
0 ^ 0 = 0
1 ^ 1 = 0
0 ^ 1 = 1
1 ^ 0 = 1


异或运算还具有一些有用的性质：
结合律：(a ^ b) ^ c = a ^ (b ^ c)
交换律：a ^ b = b ^ a
对于任意值 a，a ^ a = 0
对于任意值 a，a ^ 0 = a

*/