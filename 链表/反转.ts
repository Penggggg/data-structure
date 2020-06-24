/**
 * 
 * @description
 * 
 * 题目：反转一个单链表
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 */







/**
 * 
 * @description
 * 自己做的
 */
const reverse1 = ( item?: LinkListItem ) => {
    if ( !item ) return null;

    const innerReverse = ( cur?: LinkListItem ) => {
        if ( !cur ) return;
        const nextEle = cur.next;

        if ( !nextEle ) return;
        nextEle.next = cur;

        innerReverse( nextEle );        
    }

    item.next = undefined;
    innerReverse( item );
}











/**
 * @description
 * 方法1，【递归法】
 * 
 * 判断 next 是否存在，存在的话进行递归
 * 
 */
let reverseList = (head: any) =>{
    let reverse = (pre: any, cur: any): any => {
      if(!cur) return pre;
      // 保存 next 节点
      cur.next = pre;
      return reverse(cur, cur.next);
    }
    return reverse(null, head);
}
  