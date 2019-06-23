/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    var i = 0, j = nums.length - 1;
    if (target > nums[j]) {
        return nums.length
    }
    while (i <= j) {
        var mid = parseInt((i + j) / 2);
        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] > target) {
            j--
        } else if (nums[mid] < target) {
            i++
        }
    }
    return i
};