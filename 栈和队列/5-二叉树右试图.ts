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
    if ( !node ) { return [ ];}

    const result = [ node.val ];
    const innerTraverse = ( nodes: BinaryTreeNode[ ]) => {

        const queen = [ ];
        const _node = [ ...nodes ];
        let target: BinaryTreeNode | null = null;

        while ( _node.length > 0 ) {

            /** 出队列 */
            const n = _node.pop( );
            if ( !n ) { return; }

            const r = n.right;
            const l = n.left;

            if ( !target ) {
                target = r || l || null;
            }

            if ( !!r ) { queen.unshift( r )}
            if ( !!l ) { queen.unshift( l )}
        }
        
        !!target && result.push( target.val );
        queen.length > 0 && innerTraverse( queen );
    }

    innerTraverse([ node ]);
    return result;
}

/**
 * 
 * @description
 * 方法2: 广度优先，方向优先
 */

const binaryTreeRight2 = ( node?: BinaryTreeNode ) => {
    if ( !node ) { return [ ];}

    const result: number[ ] = [ ];
    const innerTraverse = ( nodes: BinaryTreeNode[ ]) => {

        const queen = [ ];
        const _node = [ ...nodes ];

        /** 直接拿到该层的最右元素 */
        _node.length > 0 && result.push( nodes[ nodes.length - 1 ].val );

        while ( _node.length > 0 ) {

            /** 出队列 */
            const n = _node.pop( );
            if ( !n ) { return; }

            const r = n.right;
            const l = n.left;

            if ( !!r ) { queen.unshift( r )}
            if ( !!l ) { queen.unshift( l )}
        }
        queen.length > 0 && innerTraverse( queen );
    }

    innerTraverse([ node ]);
    return result;
}