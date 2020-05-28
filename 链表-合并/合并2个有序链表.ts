/**
 * 
 * @description
 * 题目
 * 
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 */


/**
 * 
 * @description
 * 方法一：递归
 * 
 * Tips1：分析是否可以递归
 * Tips2：在函数内部递归，而不是函数本身递归，可以通过闭包，在每次递归的时候存放一些数据
 * 
 */
const compose1 = ( list1: LinkListItem, list2: LinkListItem ) => {

    // 初始化一个链表
    let result: LinkListItem = { value: '' };
    let resultCur = result;

    // 内部递归
    const innerCompose = ( listItem1?: LinkListItem, listItem2?: LinkListItem ) => {

        // 左边
        if (( !!listItem1 && !!listItem2 && listItem1.value <= listItem2.value ) ||
            ( !!listItem1 && !listItem2 )) {
                resultCur.next = listItem1;
                resultCur = listItem1;
            }

        // 右边
        if (( !!listItem1 && listItem2 && listItem2.value < listItem1.value ) ||
            ( !listItem1 && !!listItem2 )) {
                resultCur.next = listItem2;
                resultCur = listItem2;
            }
        // 递归
        if (( !!listItem1 && !!listItem1.next ) || ( !!listItem2 && !!listItem2.next )) {
            innerCompose( 
                listItem1 ? listItem1.next : undefined,
                listItem2 ? listItem2.next : undefined 
            )
        }
    }

    innerCompose( list1, list2 );

    return result;
}


/**
 * 
 * @description
 * 方法二：递归优化版
 * 
 * Tips1：递归时，通过相邻执行的数据交互，达到递归的效果
 */
const compose2 = ( list1: LinkListItem, list2: LinkListItem ) => {
    // 这个函数名很有意思，意思是把剩余2段，合并起来
    const merge = ( l1?: LinkListItem, l2?: LinkListItem ) => {
        if ( !l1 ) { return l2; }
        if ( !l2 ) { return l1; }
        if ( l1.value > l2.value ) {
            l2.next = merge( l1, l2.next );
            return l2;
        } else {
            l1.next = merge( l1.next, l2 );
            return l1;
        }
    }
    return merge( list1, list2 );
}