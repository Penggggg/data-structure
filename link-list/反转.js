"use strict";
/// <reference path="../global.d.ts" />
/**
 * @description
 *
 * 反转一个单链表
 *
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 *
 * 需要定义好数据结构
 */
/**
 * @description
 * 方法一，【遍历法】
 *
 * 用 next 指针 + while, 从头开始【遍历】
 *
 * Tipss:
 * 【虚拟框框法】，每次只框住2个元素，并处理逻辑
 * 处理完一次后，框框往后移一位
 */
var reverseLinkList1 = function (item) {
    if (!item) {
        return null;
    }
    var pre = undefined;
    var cur = item;
    while (cur) {
        var next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
};
/**
 * @description
 * 方法2，【递归法】
 *
 * 判断 next 是否存在，存在的话进行递归
 *
 */
var reverseLinkList2 = function (item) {
    if (!item) {
        return null;
    }
    var innerReverse = function (item, pre) {
        if (!item) {
            return null;
        }
        var next = item.next;
        item.next = pre;
        innerReverse(next, item);
    };
    innerReverse(item);
};
