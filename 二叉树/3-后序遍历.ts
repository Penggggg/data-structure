/**
 * 
 * @description
 * 题目：
 * 
 * 中序遍历一个二叉树
 */


/**
 * 
 * @description
 * 
 * 
 * 思路：
 * 最小模型法
 */
const lastTraverse = ( n: any ) => {
    let res: any = [ ];
    const loop = ( n: any ) => {
        if ( !n ) return;
        loop( n.left );
        loop( n.right );
        res.push( n );
    }
    loop( n );
    return res;
}
