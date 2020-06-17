/// <reference path="../global.d.ts" />

/**
 * 
 * @description
 * 题目：
 * 
 * 验证一个二叉树，是否为搜索二叉树
 * 
 * 二叉搜索树：
 * 1、节点的左子树只包含小于当前节点的数
 * 2、节点的右子树只包含大于当前节点的数
 * 3、子树也要是搜索树
 * 
 */


/**
 * 
 * @description
 * 方法1: DFS + 递归
 */
var isValidBST = function(root) {
    const help = (node, max, min) => {
        if(node == null) return true;
        if(node.val >= max || node.val <= min) return false;
        // 左孩子更新上界，右孩子更新下界，相当于边界要求越来越苛刻
        return help(node.left, node.val, min)
                && help(node.right, max, node.val);
    }
    return help(root, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
};