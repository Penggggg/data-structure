/**
 * 
 * @description
 * 题目
 * 
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 输入: 1->2->3->4
 * 输出: 2->1->4->3
 */



/**
 * 
 * @description
 * 方法一，画图法
 * 
 * 画图（同一个图）可以把变更前后的逻辑大致描绘出来
 * 
 * Tips:
 * 【虚拟框框法】每次大框住4个元素，小框两两为一组，处理逻辑
 * 处理完一次后，大框往后移4位
 * 
 */
const reverseTwins1 = ( item?: LinkListItem ) => {

    if ( !item ) { return; }

    // 第一个框（框住2元素）的开头元素
    let firstKuangStart: LinkListItem | undefined = item;

    while ( firstKuangStart ) {

        if ( !firstKuangStart ) { return; }

        // 第一个框的结尾元素
        let firstKuangEnd: LinkListItem | undefined = firstKuangStart.next;
        if ( !firstKuangEnd ) { return; }

        // 下一个框的开头元素
        let secondKuangStart: LinkListItem | undefined = firstKuangEnd.next;
        if ( !secondKuangStart ) { return; }

        // 下一个框的结尾元素
        let secondKuangEnd: LinkListItem | undefined = secondKuangStart.next;

        // 第一个框内部翻转
        firstKuangEnd.next = firstKuangStart;

        // 第二个框内部翻转
        if ( !!secondKuangEnd ) {
            secondKuangEnd.next = secondKuangStart;
        }

        // 两个框之间重组
        firstKuangStart.next = !!secondKuangEnd ?
            secondKuangEnd : secondKuangStart

        // 大框移动
        firstKuangStart = secondKuangEnd ? 
            secondKuangEnd.next :
            undefined;
    }
}



/**
 * 
 * @description
 * 方法二，同上，递归
 */
const reverseTwins2 = ( item?: LinkListItem ) => {
    if ( !item ) { return; }

    const innerLoop = ( firstKuangStart?: LinkListItem ) => {
        if ( !firstKuangStart ) { return; }

        // 第一个框的结尾元素
        let firstKuangEnd: LinkListItem | undefined = firstKuangStart.next;
        if ( !firstKuangEnd ) { return; }

        // 下一个框的开头元素
        let secondKuangStart: LinkListItem | undefined = firstKuangEnd.next;
        if ( !secondKuangStart ) { return; }

        // 下一个框的结尾元素
        let secondKuangEnd: LinkListItem | undefined = secondKuangStart.next;

        // 第一个框内部翻转
        firstKuangEnd.next = firstKuangStart;

        // 第二个框内部翻转
        if ( !!secondKuangEnd ) {
            secondKuangEnd.next = secondKuangStart;
        }

        // 两个框之间重组
        firstKuangStart.next = !!secondKuangEnd ?
            secondKuangEnd : secondKuangStart;

        innerLoop( !!secondKuangEnd ? secondKuangEnd.next : undefined );
    }
    innerLoop( item );
}




/** 
 * 
 * @description
 * 方法三，框框法：2+1 ( 递归 )
 * 
 * Tips:
 * 【虚拟框框法：2+1】每次框住2个，然后跟此框后的1个进行交互
 */
const reverseTwins3 = ( kuangStart?: LinkListItem ) => {
    if ( !kuangStart ) { return; }

    let kuangEnd = kuangStart.next;
    let KuangNext = !!kuangEnd ? kuangEnd.next : undefined;

    kuangStart.next = KuangNext;
    if ( !!kuangEnd ) {
        kuangEnd.next = kuangStart;
    }
    reverseTwins3( kuangStart );
}
