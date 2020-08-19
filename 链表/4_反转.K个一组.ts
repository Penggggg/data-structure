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
 * 
 * 思路：
 * 递归框框法
 * 
 * Tips:
 * 每次递归通过return节点的指针，
 * 进行大组之间的拼接
 */
const resverseK = ( k: number, k_s?: LinkListItem ) => {

    if ( !k_s ) return;

    // 检查剩余节点，是否满足K个
    let check: any= k_s;
    for ( let i = 1; i < k; i++ ) {
        if ( !!check ) { 
            check = check.next;
        }
        return k_s;
    }

    let pre;
    let next;
    let cur: any = k_s;

    for ( let i = 0; i < k; i++ ) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    
    k_s.next = resverseK( k, next ); // 连接两组
    return cur; // 返回本组最后一个节点
}
