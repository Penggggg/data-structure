/**
 * 
 * @description
 * 
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 说明: 1 ≤ m ≤ n ≤ 链表长度。
 * 
 * 输入: 1->2->3->4->5， m = 2, n = 4
 * 输出: 1->4->3->2->5
 */








/**
 * 
 * @description
 * 方法一
 * 
 * 虽然是要一趟遍历，但是遍历本身可以被拆分
 * 
 * 把原链表拆成3段：
 * 0 ～ m-1      
 * m ~ n       // 需要翻转
 * n+1 ~ end 
 * 
 * 再重新拼接起来
 * 
 */
const reserverAreaLinkList = ( i: any, s: number, e: number ) => {
    
    let count = n - m;
    let p = dummyHead = new ListNode();
    let pre, cur, start, tail;
    p.next = head;
    for(let i = 0; i < m - 1; i ++) {
        p = p.next;
    }
    // 保存前节点
    front = p;
    // 同时保存区间首节点
    pre = tail = p.next;
    cur = pre.next;
    // 区间反转
    for(let i = 0; i < count; i++) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    // 前节点的 next 指向区间末尾
    front.next = pre;
    // 区间首节点的 next 指向后节点(循环完后的cur就是区间后面第一个节点，即后节点)
    tail.next = cur;
    return dummyHead.next;
}

