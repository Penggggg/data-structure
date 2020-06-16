/// <reference path="../global.d.ts" />

/**
 * 
 * @description
 * 题目：
 * 
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 对称的：
 *     1
      / \
     2   2
    / \ / \
   3  4 4  3
 *
 *
 * 不对称：
 *     1
      / \
     2   2
      \   \
      3    3
 */


/**
 * 
 * @description
 * 方法1：横向切层法
 * 
 * 把同一层的元素装进一个数组，判断数组是否对称
 * 若对称，则递归往下走
 * 
 * Tips1：
 * 要画图，更加直观
 */
const isTreeSymmetry = ( node?: BinaryTreeNode ) => {

    if ( !node ) return true;

    let level = 0;
    let arr: ( BinaryTreeNode | undefined )[ ] = [ node ];

    while ( arr.length > 0 ) {

        if ( level !== 0 && arr.length === 0 ) return true;
        if ( level !== 0 && ( arr.length % 2 === 1 || arr.filter( x => !!x ).length % 2 === 1 )) return false;

        // 下一层的节点列表
        const next: ( BinaryTreeNode | undefined )[ ] = arr.filter( x => !!x )
            .reduce(( pre, cur ) => {
                return [ ...pre, cur.left, cur.right ]
            }, [ ]);
        
        // 判断数组是否对称
        const valArr = arr.map( x => !!x ? x.val : undefined );
        const isSymmetry = valArr
            .slice( 0, valArr.length / 2 )
            .every(( v, k ) => v === valArr.slice( valArr.length / 2 )[( valArr.length / 2 ) - 1 - k ])

        if ( !isSymmetry ) return false;

        // 进入下一层
        level++;
        arr = next;
    }
}


/**
 * 
 * @description
 * 方法2：递归法、最小模型法
 * 
 * Tips1：
 * 同一层中，对称地进行对比
 */
const isTreeSymmetry2 = ( node?: BinaryTreeNode ) => {
    const helper = ( node1?: BinaryTreeNode, node2?: BinaryTreeNode ) => {
        if ( !node1 || !node2 ) return false;
        if ( !!node1 && !!node2 && node1.val !== node2.val ) return false;
        return helper( node1.left, node2.right ) && helper( node1.right, node2.left )
    }
    return helper( node.left, node.right );
}