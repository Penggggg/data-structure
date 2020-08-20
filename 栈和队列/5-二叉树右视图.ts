/**
 * 
 * @description
 * 题目：
 * 
 * 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * 
 * 
 *    1            <---
    /   \
    2     3         <---
     \     \
      5     4       <---

    输出: [1, 3, 4]
 */


/**
 * 
 * @description
 * 方法1: 广度优先，方向优先
 */

const binaryTreeRight = ( node?: BinaryTreeNode ) => {
    if ( !node ) return;
    const result: any = [ ];
    const queue = [ node ];
    while ( !!queue.length ) {
        let _queue: any = [ ];
        for ( let n of queue ) {
            _queue.push( n.left );
            _queue.push( n.right );
        }
        _queue = _queue.filter(( x: any ) => x !== undefined );
        result.push( _queue.pop( )) // 推入最右的那一个
    }
    return result.filter(( x: any ) => x !== undefined ).map(( x: any ) => x.val );
}