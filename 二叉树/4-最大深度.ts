/// <reference path="../global.d.ts" />

/**
 * 
 * @description
 * 题目：
 * 
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树 [ 3, 9, 20, null, null, 15, 7 ]：输出 3
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
 * 
 * Tips1: 用递归实现最小模型
 */
const maxDepth = ( root?: BinaryTreeNode ): any => {
    if ( !root ) return 0;
    return Math.max( maxDepth( root.left ) + 1, maxDepth( root.right ) + 1 )
}


/**
 * 
 * @description
 * 方法2：队列
 */
const maxDepth2 = function( root: any ): any {
  if(root == null) return 0;
  let queue = [root];
  let level = 0;
  while(queue.length) {
      let size = queue.length;
      // 处理同一层，queue都是某一层的节点
      while(size --) {
          let front = queue.shift();
          if(front.left) queue.push(front.left);
          if(front.right) queue.push(front.right);
      }
      // level ++ 后的值代表着现在已经处理完了几层节点
      level ++;
  }
  return level;
};
