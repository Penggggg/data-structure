/**
 * 
 * @description
 * 题目
 * 
 * 一个链表，每k个节点一组进行翻转
 * k是一个正整数，它的值小于或等于链表的长度。
 * 如果节点总数不是k的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 
 * 链表：1->2->3->4->5
 * 当 k = 2 时，应当返回: 2->1->4->3->5
 * 当 k = 3 时，应当返回: 3->2->1->4->5
 */




/**
 * 
 * @description
 * 方法1，递归框框法( K + 1 )，
 * 
 * 另外递归的时候，可以进行数据交互
 */
const resverseK = ( k: number, kuangStart?: LinkListItem ) => {

    if ( !kuangStart ) { return; }

    // 检查 剩余节点是否满足K个
    let checkHeader: LinkListItem | undefined = kuangStart;
    for ( let i = 1; i < k; i ++ ) {
        if ( checkHeader ) { 
            checkHeader = checkHeader.next;
        } else {
            return;
        }
    }

    let pre: LinkListItem | undefined = undefined;
    let cur: LinkListItem | undefined = kuangStart;
    
    for ( let i = 0; i < k; i++ ) {
        
        let next: LinkListItem | undefined = cur ? cur.next : undefined;
        if ( cur ) {
            cur.next = pre;
        }
        
        pre = cur;
        cur = next;
    }

    // cur为下一组的起点( kuangNext )
    kuangStart.next = resverseK( k, cur );

    // pre为本组最后一个节点
    return pre;

}
