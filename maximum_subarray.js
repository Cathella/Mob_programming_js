/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = nums[0];
    var sum = 0;
    
    for (var i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        
        if (sum > max) {
            max = sum;
        }
        
        if (sum < 0) {
            sum = 0;
        }
    }
    
    return max;
};
