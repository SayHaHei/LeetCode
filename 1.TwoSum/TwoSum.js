/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = {}
    for (var i = 0; i < nums.length; i++) {
        var key = parseInt(nums[i])
        if (map[key]) {
            map[key] = map[key].concat(i)
        } else {
            map[key] = [i]
        }
    }

    for (var i = 0; i < nums.length; i++) {
        var needed = parseInt(target - nums[i])
        if (map[needed]) {
            for (var index of map[needed]) {
                if (index !== i) {
                    return [i, index]
                }
            }
        }
    }
};