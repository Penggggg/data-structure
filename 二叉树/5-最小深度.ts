/// <reference path="../global.d.ts" />

/**
 * 
 * @description
 * 题目：
 * 
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树 [ 3, 9, 20, null, null, 15, 7 ]：输出 2
 * 
 *     3
      / \
     9  20
       /  \
      15   7
 */

/**
 * 
 * @description
 * 方法一：最小模型、递归法
 */
const minDepth = function( root: any ): any {
    if(root == null) return 0;
    // 左右孩子都不为空才能像刚才那样调用
    if(root.left && root.right)
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    // 右孩子为空了，直接忽略之
    else if(root.left)
        return minDepth(root.left) + 1;
    // 左孩子为空，忽略
    else if(root.right)
        return minDepth(root.right) + 1;
    // 两个孩子都为空，说明到达了叶子节点，返回 1
    else return 1;
};


/**
 * 
 * @description
 * 队列
 */
var minDepth2 = function(root: any): any {
    if(root == null) return 0;
    let queue = [root];
    let level = 0;
    while(queue.length) {
        let size = queue.length;
        while(size --) {
            let front = queue.shift();
            // 找到叶子节点
            if(!front.left && !front.right) return level + 1; // 可终止多层while
            if(front.left) queue.push(front.left);
            if(front.right) queue.push(front.right);
        }
        // level ++ 后的值代表着现在已经处理完了几层节点
        level ++;
    }
    return level;
};