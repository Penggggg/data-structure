/**
 * 
 * @description
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 * 
 * 输入:
    [
        1->4->5,
        1->3->4,
        2->6
    ]
 * 输出: 1->1->2->3->4->4->5->6
 */


const compose = ( list1: LinkListItem, list2: LinkListItem ) => {
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

/**
 * 
 * @description
 * 方法1：每次合并2条
 * 
 * Tips1: 递归法
 * 上一个训练中，已经掌握了，2条链表合并的方式
 * 这一次中，除了K条链表一次性对比，还可以最小颗粒化的逐步处理，每次合并2条，直到K条变成1条
 * 
 */
const composeK = ( list: LinkListItem[ ]) => {

    let _list = [ ...list ];
    let cur: LinkListItem | undefined = { value: '' };

    const innerCompose = ( l1?: LinkListItem, l2?: LinkListItem ) => {
        if ( _list.length === 0 ) { return; }
        if ( !l1 ) { return l2; }
        if ( !l2 ) { return l1; }
        cur = compose( l1, l2 );
        innerCompose( cur, _list.pop( ))
    }
    innerCompose( cur, _list.pop( ));
    return cur;
}

/**
 * 
 * @description
 * 方法2，优化版
 * 
 */
const mergeKLists = ( lists: LinkListItem[ ]) => {
    const _mergeLists = ( lists: LinkListItem[ ], start: number, end: number ): any => {
        if ( end - start < 0 ) return null;
        if ( end - start === 0 ) return lists[ end ];

        let mid = Math.floor( start + ( end - start ) / 2 );
        return compose(
            _mergeLists( lists, start, mid ), 
            _mergeLists (lists, mid + 1, end )
        );
    }
    return _mergeLists( lists, 0, lists.length - 1 );
}