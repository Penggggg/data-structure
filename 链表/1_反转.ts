/**
 * 
 * @description
 * 
 * 题目：反转一个单链表
 * 
 * 输入: 1->2->3->4->5
 * 输出: 5->4->3->2->1
 */



/**
 * @description
 * 
 * 思路：
 * 将翻转链表，转化为针对俩俩节点为一组的递归操作。
 * 
 * 技巧：
 * 遍历方向无法更改（从原链头到链尾），但是每组的处理方向为，由前向后
 * 
 * 递归公式：
 * reverse( pre, cur ) = （翻转逻辑）+ reverse( cur, cur.next )
 * 
 * 终止条件：
 * cur === undefind
 */
let reverseList = ( head: any ) => {
    let reverse = ( pre: any, cur: any ): any => {
        if( !cur ) return pre; // 返回链头
        const next = cur.next // 先保存一份指针
        cur.next = pre; // 翻转
        return reverse( cur, next );
    }
    return reverse( null, head );
}
  