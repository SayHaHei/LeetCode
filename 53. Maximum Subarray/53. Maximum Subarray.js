/**

 @param {number[]} nums
 @return {number}
 */
var maxSubArray = function (nums) {
    let max = nums[0];
    for (var i = 0, len = nums.length; i < len; i++) {
        let sum = nums[i];
        for (j = i + 1; j < len; j++) {
            sum += nums[j];
            if (sum > max) max = sum;
            if (max < nums[j])
                max = nums[j];
            if (max < nums[i])
                max = nums[i];
        }
    }
    return max;
};