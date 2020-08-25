/**
 * 
 * @description
 * 
 * 题目：
 * 验证一个二叉树，是否为搜索二叉树
 * 
 * 二叉搜索树：
 * 1、节点的左子树只包含小于当前节点的数
 * 2、节点的右子树只包含大于当前节点的数
 * 3、子树也要符合要求
 * 
 */


/**
 * 
 * @description
 * 
 * 思路: 
 * 最小模型验证 + 递归
 */
var isValidBST = ( root: any ) =>  {
    const help = ( n: any, max: any, min: any ): any => {
        if( n === null ) return true;
        if( n.val >= max || n.val <= min ) return false;
        return help( n.left, n.val, min ) // 边界要求越来越苛刻
                && help( n.right, max, n.val );
    }
    return help( root, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER );
};