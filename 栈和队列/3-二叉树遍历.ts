/**
 * 
 * @description
 * 题目：
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）
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
 * 方法一，最小模型法
 * 
 * Tips1：
 * 以 节点A -> A.left -> A.right 的顺序、操作次序为最小模型，跑通模型的逻辑。
 * 然后通过递归或while或循环，跑完剩余循环
 * 
 * Tips2：
 * 队列进出：unshift、pop
 * 栈进出：unshift、shift
 */
const normalTraverse = ( node?: BinaryTreeNode ) => {
    if ( !node ) { return[ ];}

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
                innerOutput.unshift( n.left.val );
            }
            if ( !!n.right ) {
                queenNodes.unshift( n.right );
                innerOutput.unshift( n.right.val );
            }
        }
        
        result.push( innerOutput );
        queenNodes.length > 0 && innerTraverse( queenNodes );
    }

    innerTraverse([ node ]);
    return result;
}