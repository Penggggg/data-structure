/**
 * 
 * @description
 * 题目：
 * 
 * 输入一个二叉树，及2个节点p/q
 * 找到它们的最近公共祖先
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
 */

/**
 * 
 * @description
 * 方法1：构造关系法
 * 
 * 因为二叉树只有从上到下的关系链
 * 而寻求 子 -> 父 的关系则需要构造从下到上的关系
 * 
 * 1、构造二叉树关系链
 * 2、找到p所有祖先的集合
 * 3、一个个找q祖先节点，若发现p祖先集合存在，则返回
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root == null || root == p || root == q) return root;
    let set = new Set();
    let map = new WeakMap();
    let queue = [];
    queue.push(root);
    // 层序遍历
    while(queue.length) {
        let size = queue.length;
        while(size --) {
            let front = queue.shift();
            if(front.left) {
                queue.push(front.left);
                // 记录父亲节点
                map.set(front.left, front);
            }
            if(front.right) {
                queue.push(front.right);
                // 记录父亲节点
                map.set(front.right, front);
            }
        }
    }
    // 构造 p 的上层节点集合
    while(p) {
        set.add(p);
        p = map.get(p);
    }
    while(q) {
        // 一旦发现公共节点重合，直接返回
        if(set.has(q))return q;
        q = map.get(q);
    }
};