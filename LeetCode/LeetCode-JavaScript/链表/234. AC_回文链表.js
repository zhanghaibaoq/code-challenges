var isPalindrome = function (head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    /*     let [left, right] = [0, arr.length - 1];
        while (left < right) {
            if (arr[left] !== arr[right]) return false;
            left++;
            right--;
        }
        return true; */
    return arr.every((item, index) => item === arr[arr.length - index - 1]);
    // return arr.join('') == arr.reverse().join('') // 翻转数组判断与原数组相同
};
