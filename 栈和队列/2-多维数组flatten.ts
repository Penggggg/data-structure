
/**
 * 
 * @description
 * 题目：
 * 
 * [1, [2, [3, [4, 5]]], 6] -> [1, 2, 3, 4, 5, 6]
 */


/**
 * 
 * @description
 * 方法1:：最小功能拆解 + 递归
 */
const flatten2 = ( nest: any[ ]): any[ ] => {
    return nest.reduce(( cur, pre ) => (
        pre.concat( Array.isArray( cur ) ? flatten( cur ) : pre )
    ), [ ]);
}