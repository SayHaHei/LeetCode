// 直接插入排序(Straight Insertion Sort)的基本思想是：把n个待排序的元素看成为一个有序表和一个无序表。开始时有序表中只包含1个元素，无序表中包含有n-1个元素，排序过程中每次从无序表中取出第一个元素，将它插入到有序表中的适当位置，使之成为新的有序表，重复n-1次可完成排序过程。
function insert_sort(nums){
    var length = nums.length;
    for(var i=1;i<length;i++){
        var j=i-1;
        for(;j>=0;j--){
            if(nums[j]<nums[i]){
                break;
            }
        }
        var tempTarget = nums[i];
        var tempPosition = i;
        if(j+1!=i){
            while(j+1 < tempPosition){
                nums[tempPosition] = nums[tempPosition -1];
                tempPosition--;
            }
            nums[j+1] = tempTarget;
        }
        
    }
    return nums;
}
console.log(insert_sort([1,2,3,6,5,4]));