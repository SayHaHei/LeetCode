// 希尔排序(Shell Sort)是插入排序的一种，它是针对直接插入排序算法的改进。该方法又称缩小增量排序，因DL．Shell于1959年提出而得名。
// 希尔排序实质上是一种分组插入方法。它的基本思想是：对于n个待排序的数列，取一个小于n的整数gap(gap被称为步长)将待排序元素分成若干个组子序列，所有距离为gap的倍数的记录放在同一个组中；然后，对各组内的元素进行直接插入排序。 这一趟排序完成之后，每一个组的元素都是有序的。然后减小gap的值，并重复执行上述的分组和排序。重复这样的操作，当gap=1时，整个数列就是有序的。
var arr1 = [2, 5, 1, 9, 0];
function shellSort(arr) {
	var gap = Math.floor(arr.length / 2);
	while (gap >= 1) {
		for (var i = gap; i < arr.length; i++) {
			var j,
				temp = arr[i];
			for (j = i - gap; j >= 0 && temp < arr[j]; j = j - gap) {
				arr[j + gap] = arr[j];
			}
			arr[j + gap] = temp;
		}
		console.log("gap=" + gap);
		console.log(arr);
		gap = Math.floor(gap / 2);
	}
}
shellSort(arr1);
