/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
  
    result = nums1.filter(num => num !== 0);
    result2 = nums2.filter(num => num !== 0);
    
    nums1 = result.concat(result2).sort();

    // something is missing and it is not
    // returning the right num1 array.
    console.log(nums1);
};