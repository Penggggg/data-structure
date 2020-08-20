/// <reference path="../global.d.ts" />


/**
 * 
 * @description
 * 题目：
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。
 * 
 * 
 *     3
      / \
     9  20
        /  \
       15   7
 * 

        [
            [3],
            [20,9],
            [15,7]
        ]
 */

/**
 * 
 * @description 
 * 
 * 思路1：
 * 操作方向发生改变
 * 
 * 思路2：
 * 数据源的方向发生改变
 */
const ZTraverse1 = ( node?: BinaryTreeNode ) => {
    if ( !node ) return [ ];
    
    let dir = true;
    const result = [ ];
    let queue: any = [ node ];

    while ( !!queue.length ) {
        const _queue: any = [ ];
        const level = [ ];
        for ( let n of queue ) {
            level.push( n.val )
            _queue[ !dir ? 'push' : 'unshift' ]( n.left )
            _queue[ !dir ? 'push' : 'unshift' ]( n.right )
        }
        dir = !dir;
        result.push( level );
        queue = _queue.filter(( x: any ) => !!x );
    }
    return result;
}
 