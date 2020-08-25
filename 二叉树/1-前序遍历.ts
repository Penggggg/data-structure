/**
 * 
 * @description
 * 题目：
 * 
 * 前序遍历一个二叉树
 * 顺序：父、左子、右子
 */





/**
 * 
 * @description
 * 
 * 思路：
 * 最小模型法，找出模型规律
 */
const frontTraverse = ( n: any ) => {
    let res: any = [ ];
    const loop = ( n: any ) => {
        if ( !n ) return;
        res.push( n );
        loop( n.left );
        loop( n.right );
    }
    loop( n );
    return res;
}

