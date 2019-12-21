function bubbleSort(nums) {
	var length = nums.length;
	for (var i = 0; i < length; i++) {
		var flag = false;
		for (var j = 0; j < n - i - 1; j++) {
			if (nums[j] > nums[j + 1]) {
				nums[j] = nums[i] + nums[j];
				nums[i] = nums[j] - nums[i];
                nums[j] = nums[j] - nums[i];
                flag = true;
            }
            if(!flag){
                return;
            }
		}
	}
}
