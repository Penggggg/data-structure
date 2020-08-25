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
 * 
 * 思路：
 * 横向切层法，同层元素装进一个数组
 * 判断数组是否镜面对称
 */
const isSymmetry = ( n?: any ) => {
    if ( !n ) return true;

    let level = 1;
    let arr = [ n ];
    while ( arr.length ) {
        const _arr = [ ];
        while( arr.length ) {
            const top = arr.shift( );
            const end = arr.pop( );
            if ( !end && level !== 1 ) return false;
            if ( top.val !== end.val ) return false;
            _arr.push( top.left );
            _arr.push( top.right );
            _arr.push( end.left );
            _arr.push( end.right );
            level++;
        }
        arr = _arr;
    }
    return true;
}


/**
 * 
 * @description
 * 
 * 思路：
 * 递归：同一层中，对称地进行对比
 * 
 */
const isSymmetry2 = ( n?: any ) => {
    const helper = ( n1?: any, n2?: any ): any => {
        if (( !!n1 && !n2 ) || ( !n1 && !!n2 )) return false;
        if (( !!n1 && !!n2 ) && ( n1.val !== n2.val )) return false;
        return helper( n1.left, n2.right ) && helper( n1.right, n2.left )
    }
    return helper( n.left, n.right );
}