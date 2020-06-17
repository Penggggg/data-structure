/**
 * 
 * @description
 * 题目：
 * 
 * 给定一个非空二叉树，返回其最大路径和。
 * 
 * 输入: [ -10,9,20,null,null,15,7]

        -10
        / \
       9  20
         /  \
        15   7

        输出: 42
 */

var maxPathSum = function(root: any) {
    let help = (node:any) => {
        if(node == null) return 0;
        let left = Math.max(help(node.left), 0);
        let right = Math.max(help(node.right), 0);
        let cur = left + node.val + right;
        // 如果发现某一个节点上的路径值比max还大，则更新max
        if(cur > max) max = cur;
        // left 和 right 永远是"一根筋"，中间不会有转折
        return Math.max(left, right) + node.val;
    }
    let max = Number.MIN_SAFE_INTEGER;
    help(root);
    return max;
};