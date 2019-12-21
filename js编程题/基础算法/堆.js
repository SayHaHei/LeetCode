// /* function insert(a, n, value) {
// 	var son;
// 	n += 1;
// 	a[n] = value;
// 	son = n;
// 	while (son > 1 && a[son] < a[son / 2]) {
// 		[a[son], a[son / 2]] = [a[son / 2], a[son]];
// 	}
// }
// function Delete(a, n) {
// 	a[1] = a[n];
// 	n--;
// 	Adjust(a, 1, n);
// }
// function Adjust(a, father, n) {
// 	var Child, father_value;
// 	for (father_value = a[father]; 2 * father <= n; father = Child) {
// 		Child = 2 * father;//左儿子节点
// 		if (Child + 1 <= n && a[Child] > a[Child + 1]) Child++;
// 		if (a[Child] < father_value) a[father] = a[Child];
// 		else break;
// 	}
// 	a[father] = father_value;//将father_value放到当前位置
// }
//  */
// var len;
function swap(a, i, j) {
	a[i] = a[i] + a[j];
	a[j] = a[i] - a[j];
	a[i] = a[i] - a[j];
}
function maxHeap(a, father_index, len) {
	var index = father_index;
	var left_index = father_index * 2 + 1;
	var right_index = father_index * 2 + 2;
	if (left_index < len && a[left_index] > a[index]) {
		index = left_index;
	}
	if (right_index < len && a[right_index] > a[index]) {
		index = right_index;
	}
	if (index != father_index) {
        swap(a, index, father_index)
		maxHeap(a, index, len);
	}
}
function buildHeap(a) {
	var len = a.length;
	var lastIndex = Math.floor(len / 2);
	for (var i = lastIndex; i >= 0; i--) {
		maxHeap(a, i, len);
	}
}
function heapSort(a) {
    buildHeap(a);
    console.log(a);
	
}
a = [1,32,4,6,667];
heapSort(a);

