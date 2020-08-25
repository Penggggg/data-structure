/**
 * 
 * @description
 * 题目：
 * 
 * 给定一个非空二叉树，返回其最大路径和。
 * 

        -10
        / \
       9  20
         /  \
        15   7

    输出: 42
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 动态规划，计算所有节点以该节点为顶点的最大路径。
 * 
 * 拆：Max(x) = x.val + max( Arm(x.left)) + max( Arm(x.right))
 * 方向：因为需要先解子问题，所有是自底向上（dfs）
 */
var maxPathSum = ( root: any ) => {
    let dpMax = -Infinity;
    const dfs = ( n: any ): any => {
        if ( !n ) return 0;
        const leftVal = dfs( n.left );
        const rightVal = dfs( n.right );
        dpMax = Math.max( dpMax, n.val + leftVal + rightVal ); // 更新max值
        return Math.max( leftVal, rightVal, 0 ) + n.val; // 递归，向上返回当前节点的最大路径值
    }
    dfs( root );
    return dpMax;
};