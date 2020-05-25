/**
 * @description
 * 
 * 题目：反转一个单链表
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
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
const reverseLinkList1 = ( item?: LinkListItem ) => {

    if ( !item ) { return null; }

    let pre: LinkListItem | undefined = undefined;
    let cur: LinkListItem | undefined = item;

    while ( cur ) {

        let next: LinkListItem | undefined = cur.next;
        cur.next = pre;

        pre = cur;
        cur = next;
    }
}

/**
 * @description
 * 方法2，【递归法】
 * 
 * 判断 next 是否存在，存在的话进行递归
 * 
 */
const reverseLinkList2 = ( item?: LinkListItem ) => {
    if ( !item ) { return null; }

    const innerReverse = ( item?: LinkListItem, pre?: LinkListItem ) => {
        if ( !item ) { return null; }

        const next = item.next;
        item.next = pre;
        innerReverse( next, item );
    }

    innerReverse( item );
}