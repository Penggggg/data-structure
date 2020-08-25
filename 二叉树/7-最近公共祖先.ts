/**
 * 
 * @description
 * 
 * 题目：
 * 输入一个二叉树，及2个节点p、q
 * 找到它们的最近公共祖先
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
 */




/**
 * 
 * @description
 * 
 * 思路：
 * 构造关系法
 * 
 * 因为二叉树只有从上到下的关系链
 * 而寻求 子 -> 父 的关系则需要构造从下到上的关系
 * 
 * 1、构造 子->父 关系的哈希表
 * 2、找到p所有祖先的集合
 * 3、一个个找q祖先节点，若发现p祖先集合存在，则返回
 */
var commonAncestor = ( root: any, p: any, q: any ): any => {

    if( root === null || root === p || root === q ) return root;

    let set = new Set( );
    let map = new WeakMap( );
    let queue = [ ];
    queue.push( root );

    while ( queue.length ) {  // 构造 子父关系
        let size = queue.length;
        while( size-- ) {
            let n = queue.shift();
            if( n.left ) {
                queue.push( n.left );
                map.set( n.left, n );
            }
            if( n.right ) {
                queue.push( n.right );
                map.set( n.right, n );
            }
        }
    }

    while( p ) { // 查询p的所有祖先
        set.add( p );
        p = map.get( p );
    }

    while( q ) { // 查询q祖先的过程中，匹配p的祖先
        if( set.has( q )) return q;
        q = map.get( q );
    }

    return undefined;
};