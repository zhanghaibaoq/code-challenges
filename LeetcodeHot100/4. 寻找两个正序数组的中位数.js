var findMedianSortedArrays = function (nums1, nums2) {
  let arr = [...nums1, ...nums2].sort((a, b) => a - b);
  return arr.length & 1 ? arr[(arr.length - 1) / 2] : (arr[arr.length / 2] + arr[(arr.length - 2) / 2]) / 2;
};
// 复杂度分析
// arr.length & 1 判断奇偶