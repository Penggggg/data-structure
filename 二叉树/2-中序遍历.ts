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
const midTraverse = ( n: any ) => {
    let res: any = [ ];
    const loop = ( n: any ) => {
        if ( !n ) return;
        loop( n.left );
        res.push( n );
        loop( n.right );
    }
    loop( n );
    return res;
}
