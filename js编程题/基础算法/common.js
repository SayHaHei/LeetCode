function swap(a, i, j) {
	a[i] = a[i] + a[j];
	a[j] = a[i] - a[j];
	a[i] = a[i] - a[j];
}
function heapify(a, fatherIndex, len) {
	var leftIndex = fatherIndex * 2 + 1;
	var rightIndex = fatherIndex * 2 + 2;
	var index = fatherIndex;
	if (leftIndex < len && a[leftIndex] > a[index]) {
		index = leftIndex;
	}
	if (rightIndex < len && a[rightIndex] > a[index]) {
		index = rightIndex;
	}
	if (index != fatherIndex) {
        swap(a, index, fatherIndex);
        heapify(a, index, len);
	}
}
function buildHeap(a) {
    var len = a.length;
    var lastIndex = Math.floor(len/2);
	for (var i = lastIndex; i >= 0; i--) {
		heapify(a, i, len);
    }
}
function heapSort(a) {
    buildHeap(a);
    console.log(a);
	//取出操作
}
a = [1,32,4,6,667];
heapSort(a);