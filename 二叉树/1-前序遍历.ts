/// <reference path="../global.d.ts" />

/**
 * 
 * @description
 * 题目：
 * 
 * 前序遍历一个二叉树
 */


/**
 * 
 * @description
 * 方法1：最小模型法
 * 
 * 
 * Tips1: 把父、左子、右子，视为一个最小模型
 * 找出模型规律
 * 
 * 主要操作留给最后一层
 */
const frontTraverse = ( node: BinaryTreeNode ) => {
    const arr: number[ ] = [ ];
    const traverse = ( node: BinaryTreeNode | undefined ) => {
        if ( !node ) return;
        
    }
    traverse( node );
    return arr;
}

