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
var addTwoNumbers = function (l1, l2) {
    let sum = l1.val + l2.val
    let ac = {
        val: sum % 10,
    }
    let temp = ac

    let carry = Math.floor(sum / 10)
    while (l1.next || l2.next || carry) {
        l1 = l1.next || {next: null}//当数值参与逻辑或运算时，结果为true，会返回第一个为真的值；如果结果为false，会返回第二个为假的值；
        l2 = l2.next || {next: null}
        let v1 = l1.val || 0
        let v2 = l2.val || 0
        let sum = v1 + v2 + carry
        temp.next = {
            val: sum % 10
        }
        temp = temp.next
        carry = Math.floor(sum / 10)
    }
    return ac
};