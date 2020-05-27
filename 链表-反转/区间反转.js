"use strict";
/**
 *
 * @description
 *
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 说明: 1 ≤ m ≤ n ≤ 链表长度。
 *
 * 输入: 1->2->3->4->5->NULL， m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
 */
/**
 *
 * @description
 * 方法一
 *
 * 虽然是要一趟遍历，但是遍历本身可以被拆分
 *
 * 把原链表拆成3段：
 * 0 ～ m-1      【1】
 * m ~ n       【2，3，4】（换next）【4，3，2】
 * n+1 ~ end     【5】
 *
 * 再重新拼接起来
 *
 */
var reserverAreaLinkList = function (item, m, n) {
    /** m的前一个元素 */
    var beforeM = undefined;
    for (var i = 0; i < m - 1; i++) {
        beforeM = item.next;
    }
    if (!beforeM) {
        return;
    }
    /** m、n元素 */
    var mEle = beforeM.next;
    var nEle;
    /** n的下一个 */
    var aferN;
    var pre = beforeM;
    var cur = mEle;
    /** 遍历区间 */
    for (var i = 0; i < m - n; i++) {
        if (!cur) {
            return;
        }
        var next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
        nEle = cur;
    }
    if (!!nEle) {
        aferN = nEle.next;
    }
    // 拼接3段
    beforeM.next = nEle;
    if (!!nEle) {
        nEle.next = aferN;
    }
};
