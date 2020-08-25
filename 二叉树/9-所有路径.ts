/**
 * 
 * @description
 * 
 * 题目：
 * 求二叉树所有路径：从根节点到所有叶子节点的路径。
 * 
 * 
 * 输入:

      1
    /   \
   2     3
    \
     5

    输出: ["1->2->5", "1->3"]
 */





/**
 * 
 * @description
 * 
 * 递推：
 * dfs( n ) = dfs( n.left ) 串行 dfs( n.right )
 * 
 * 终止：
 * !n.left && !n.right
 * 
 * 时间老人：
 * 此层及以上的元素
 * 
 * 回溯：
 * 回退此层元素
 */

const treePaths = ( root: any ) => {
    if ( !root ) return [ ];

    const res: any[ ] = [ ];
    const paths: any[ ] = [ ];
    const dfs = ( n: any ) => {
        paths.push( n.val );
        if ( !n.left && !n.right ) { // 叶子节点
            res.push( paths.join('->'));
            paths.pop( );
        }
        !!n.left && dfs( n.left );
        !!n.right && dfs( n.right );
    }
    dfs( root );
    return res;
}