/**
 * 
 * @description
 * 题目：
 * 
 * 求二叉树的直径
 * 直径为：任意两个结点路径长度中的最大值。这条路径可能穿过根结点，也可能不
 */

/**
 * 
 * @description
 * 方法1
 * 
 * 理解题意，其实是 rootSum和childSum的比较
 */
var diameterOfBinaryTree = function(root: any) {
    // 求最大深度
    let maxDepth = (node: any): any => {
      if(node == null) return 0;
      return Math.max(maxDepth(node.left) + 1, maxDepth(node.right) + 1);
    }
    let help = (node: any) => {
        if(node == null) return 0;
        let rootSum = maxDepth(node.left) + maxDepth(node.right);
        let childSum = Math.max(help(node.left), help(node.right));
        return Math.max(rootSum, childSum);
    }
    if(root == null) return 0;
    return help(root);
};

/**
 * 
 * @description
 * 方法2: 优化版
 * 
 * 自底向上传递，不用多次遍历
 */
var diameterOfBinaryTree2 = function(root: any) {
    let help = (node: any ): any => {
        if(node == null) return 0;
        let left = node.left ? help(node.left) + 1: 0;
        let right = node.right ? help(node.right) + 1: 0;
        let cur = left + right;
        if(cur > max) max = cur; 
        // 这个返回的操作相当关键
        return Math.max(left, right);
    }
    let max = 0;
    if(root == null) return 0;
    help(root);
    return max;
};