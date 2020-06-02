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
 * Tips1：
 * 操作方向发生改变
 */
const ZTraverse1 = ( node?: BinaryTreeNode ) => {
    if ( !node ) { return[ ];}

    const result: any = [ 
        [ node.val ]
    ];

    const innerTraverse = ( nodes: BinaryTreeNode[ ], direction: 'from-left' | 'from-right' ) => {

        const _nodes = [ ...nodes ];

        /** 用来输出 */
        const innerOutput: number[ ] = [ ];

        /** 用来下次遍历 */
        const queenNodes: BinaryTreeNode[ ] = [ ];

        while ( _nodes.length > 0 ) {

            const n = direction === 'from-right' ?
                _nodes.pop( ) : _nodes.shift( );

            if ( !n ) { return;}

            const l = n.left;
            const r = n.right;

            if ( direction === 'from-right' ) {
                if ( !!r ) {
                    queenNodes.unshift( r );
                    innerOutput.push( r.val );
                }
                if ( !!l ) {
                    queenNodes.unshift( l );
                    innerOutput.push( l.val );
                }
            } else {
                if ( !!l ) {
                    queenNodes.unshift( r );
                    innerOutput.push( r.val );
                }
                if ( !!r ) {
                    queenNodes.unshift( r );
                    innerOutput.push( r.val );
                }
            }
            result.push( innerOutput );
            queenNodes.length > 0 && innerTraverse( queenNodes, direction === 'from-left' ? 'from-right' : 'from-left' );
        }
    }

    innerTraverse([ node ], 'from-right');
    return result;
}


/**
 * 
 * @description 
 * 
 * Tips1：
 * 除了操作方向发生改变以外，也可以是数据源的方向发生改变
 */
const ZTraverse2 = ( node?: BinaryTreeNode ) => {
    if ( !node ) { return[ ];}

    let level = 1;
    const result: any[ ] = [
        [ node.val ]
    ];

    const innerTraverse = ( nodes: BinaryTreeNode[ ]) => {

        let _nodes = [ ...nodes ];

        /** 用来输出 */
        const innerOutput: number[ ] = [ ];

        /** 用来下次遍历 */
        const queenNodes: BinaryTreeNode[ ] = [ ];

        /** 先进先出 -> 队列 */
        while ( _nodes.length > 0 ) {

            const n = _nodes.pop( );

            if ( !n ) { return; }
            if ( !!n.left ) {
                queenNodes.unshift( n.left );
                innerOutput.push( n.left.val );
            }
            if ( !!n.right ) {
                queenNodes.unshift( n.right );
                innerOutput.push( n.right.val );
            }
        }
        
        result.push( innerOutput );
        queenNodes.length > 0 && innerTraverse((( level++ ) % 2 === 1 ) ? queenNodes.reverse( ) : queenNodes );
    }

    innerTraverse([ node ]);
    return result;
}