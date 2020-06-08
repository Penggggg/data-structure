/**
 * 
 * @description
 * 题目：
 * 
 *  输入:
    [
        1->4->5,
        1->3->4,
        2->6
    ]
    输出: 1->1->2->3->4->4->5->6
 */


/**
 * 
 * @description
 * 
 * Tips1: 
 * 之前的方法是，写一个方法合并两个有序链表，三条链表则合并两两2次
 * 
 * Tips2:
 * 只要涉及 排序 功能的，都能用优先队列解决
 */

import { PriorityQueueMin } from './9-前K个高频元素';

var mergeKLists = function(lists) {
    let dummyHead = p = new ListNode();
    // 定义优先级的函数，重要！
    let pq = new PriorityQueue(lists.length, (a, b) => a.val <= b.val);
    // 将头结点推入优先队列
    for(let i = 0; i < lists.length; i++) 
        if(lists[i]) pq.enqueue(lists[i]);
    // 取出值最小的节点，如果 next 不为空，继续推入队列
    while(pq.getSize()) {
        let min = pq.dequeue();
        p.next = min;
        p = p.next;
        if(min.next) pq.enqueue(min.next);
    }
    return dummyHead.next;
};