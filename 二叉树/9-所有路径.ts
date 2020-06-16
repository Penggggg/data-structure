/**
 * 
 * @description
 * 题目：
 * 
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
 * tips：
 * 
 * 深度优先遍历写法：
 * 
 * dfs( node) => {
 *   if ( !node ) return;
 *   dfs( node.left )
 *   dfs( node.right )
 * }
 */
var binaryTreePaths = function(root: any) {
    let path: any = [];
    let res: any = [];
    let dfs = (node: any) => {
        if(node == null) return;
        path.push(node);
        dfs(node.left);
        dfs(node.right);
        if(!node.left && !node.right) 
            res.push(path.map((item: any ) => item.val).join('->'));
        // 注意每访问完一个节点记得把它从path中删除，达到回溯效果
        path.pop();
    }
    dfs(root);
    return res;
};