/**
 * @description
 * 
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 说明: 1 ≤ m ≤ n ≤ 链表长度。
 * 
 * 输入: 1->2->3->4->5->NULL， m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
 */








/**
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
const reserverAreaLinkList = ( item: LinkListItem, m: number, n: number ) => {

    /** m的前一个元素 */
    let beforeM: LinkListItem | undefined = undefined;

    for ( let i = 0; i < m - 1; i++ ) {
        beforeM = item.next;
    }

    if ( !beforeM ) { return; }

    /** m、n元素 */
    let mEle = beforeM.next;
    let nEle: LinkListItem | undefined;

    /** n的下一个 */
    let aferN: LinkListItem | undefined;

    let pre = beforeM;
    let cur = mEle;

    /** 遍历区间 */
    for ( let i = 0; i < m - n; i++ ) {
        if ( !cur ) { return; }

        let next = cur.next;
        cur.next = pre;

        pre = cur;
        cur = next;
        
        nEle = cur;
    }

    if ( !!nEle ) {
        aferN = nEle.next
    }

    // 拼接3段
    beforeM.next = nEle;
    if ( !!nEle ) {
        nEle.next = aferN;
    }
}