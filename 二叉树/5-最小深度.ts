/**
 * 
 * @description
 * 
 * 题目：
 * 给定一个二叉树，找出其最小深度。
 * 
 * 
 *     3
      / \
     9  20
       /  \
      15   7

    输出： 1
 */

/**
 * 
 * @description
 * 
 * 思路：
 * 最优解通常伴随动态规划
 */
const minDeep = ( n?: any ): any => {
    let dp = 0;
    if ( !n ) return 0;
    dp = Math.min( minDeep( n.left ) + 1, minDeep( n.right ) + 1 );
    return dp;
 }