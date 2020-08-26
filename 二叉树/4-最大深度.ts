/**
 * 
 * @description
 * 
 * 题目：
 * 给定一个二叉树，找出其最大深度。
 * 
 *     3
      / \
     9  20
       /  \
      15   7

  输出: 2
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 最优解：动态规划
 * 关系：X的最大深度 = max( x.left + 1, x.right + 1 )
 * 方向：dfs + 自下而上
 */
const maxDeep = ( n?: any ): any => {
   let dp = 0;
   if ( !n ) return 0;
   dp = Math.max( maxDeep( n.left ) + 1, maxDeep( n.right ) + 1 );
   return dp;
}