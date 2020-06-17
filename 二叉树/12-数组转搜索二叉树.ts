/**
 * 
 * @description
 * 题目：
 * 将一个按照升序排列的【有序数组】转换为一棵高度平衡二叉搜索树
 * 
 * 给定有序数组: [-10,-3,0,5,9],

    一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

        0
      / \
     -3   9
    /   /
  -10  5
 */


/**
 * 
 * @description
 * tips:
 * 
 * 由于已经是有序了，找中点即可
 */
var sortedArrayToBST = function(nums) {
    let help = (start, end) => {
        if(start > end) return null;
        if(start === end) return new TreeNode(nums[start]);
        let mid = Math.floor((start + end) / 2);
        // 找出中点建立节点
        let node = new TreeNode(nums[mid]);
        node.left = help(start, mid - 1);
        node.right = help(mid + 1, end);
        return node;
    }
    return help(0, nums.length - 1);
};