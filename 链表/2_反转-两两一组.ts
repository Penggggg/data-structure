/**
 * 
 * @description
 * 题目
 * 
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 
 * 输入: 1->2->3->4
 * 输出: 2->1->4->3
 */



/**
 * 
 * @description
 * 
 * 思路
 * 方法一，循环法
 * 
 * 画图可以把变更前后的逻辑大致描绘出来
 * 
 * Tips:
 * 【虚拟框框法】每次大框住4个元素，小框两两为一组，处理逻辑
 * 处理完一次后，大框往后移4位
 * 
 */
const reverseTwins1 = ( item?: LinkListItem ) => {

    // 特殊情况
    if ( !item ) return null;
    if ( !item.next ) return item;

    // 第一个框的开头（此框有2个元素）
    let k1_s: LinkListItem | undefined = item;
    let result = k1_s.next; // 第一个框的结尾元素就是结果

    while ( k1_s ) {

        if ( !k1_s ) break

        // 第一个框的结尾元素
        let k1_e: LinkListItem | undefined = k1_s.next;
        if ( !k1_e ) { break; }

        // 下一个框的开头元素
        let k2_s: LinkListItem | undefined = k1_e.next;
        if ( !k2_s ) { break; }

        // 下一个框的结尾元素
        let k2_e: LinkListItem | undefined = k2_s.next;

        // 第一个框内部翻转
        k1_e.next = k1_s;

        // 第二个框内部翻转
        let Next= undefined;
        if ( !!k2_e ) {
            Next = k2_e.next; // 记住原指针
            k2_e.next = k2_s;
        }

        // 两个框之间重组（第一个框的结束，指向第二个框的开始）
        k1_s.next = !!k2_e ? k2_e : k2_s

        // 大框移动
        k1_s = k2_e ? 
            Next :
            undefined;
    }

    return result;
}