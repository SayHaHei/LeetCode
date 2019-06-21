/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 === null || l2 === null) {
        return l1 === null ? l2 : l1
    }


    var result;
    var temp;
    if (l1.val <= l2.val) {
        result = l1
        temp = l1
        l1 = l1.next
    } else {
        result = l2
        temp = l2
        l2 = l2.next
    }
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            temp.next = l1

            l1 = l1.next;
        } else {
            temp.next = l2;
            l2 = l2.next;
        }
        temp = temp.next
    }
    if (l1 != null) {
        temp.next = l1
    } else if (l2 != null) {
        temp.next = l2
    }
    return result
};