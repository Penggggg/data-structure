/// <reference path="../global.d.ts" />

/**
 * 
 * @description
 * 题目：
 * 
 * 后序遍历一个二叉树
 */


/**
 * 
 * @description
 * 方法1：最小模型法、路径法
 * 
 * 
 * Tips1: 
 * 
 * 把父、左子、右子，视为一个最小模型
 * 找出模型的路径及其规律
 */
const RTraverse = ( node: BinaryTreeNode ) => {
    const arr: number[ ] = [ ];
    const traverse = ( node: BinaryTreeNode ) => {
        if ( !!node.left ) {
            arr.push( node.left.val );
            traverse( node.left  );
        }

        if ( !!node.right ) {
            arr.push( node.right.val );
            traverse( node.right  );
        }

        arr.push( node.val );
    }
    traverse( node );
    return arr;
}
