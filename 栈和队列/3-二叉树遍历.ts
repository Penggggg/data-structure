/**
 * 
 * @description
 * 题目：
 * 给定一个二叉树，【按层】遍历的节点
 * 
 *   3
    / \
   9  20
     /  \
    15   7

 * 输出：
    [
        [3],
        [9,20],
        [15,7]
    ]
 */



/**
 * 
 * @description
 * 
 * 思路：
 * while ( !!queue.length ) 
 * 节点A -> A.left -> A.right
 */
const levelMap = ( node?: BinaryTreeNode ) => {
    if ( !node ) return [ ];

    const result = [ ];
    let queue: any = [ node ];

    while ( !!queue.length ) {
        const _queue = [ ];
        const level = [ ];
        for ( let n of queue ) {
            level.push( n.val )
            _queue.push( n.left );
            _queue.push( n.right );
        }
        result.push( level );
        queue = _queue.filter( x => !!x );
    }
    return result;
}