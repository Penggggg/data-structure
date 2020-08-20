/**
 * 
 * @description
 * 题目
 * 
 * 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
 * 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
 * 返回滑动窗口中的最大值。  
 * 
 * 
 *  输入: nums = [ 1,3,-1,-3,5,3,6,7], 和 k = 3
    输出: [3,3,5,5,6,7] 
    解释: 

    滑动窗口的位置                最大值
    ---------------               -----
    [1  3  -1] -3  5  3  6  7      3
    1 [3  -1  -3] 5  3  6  7       3
    1  3 [-1  -3  5] 3  6  7       5
    1  3  -1 [-3  5  3] 6  7       5
    1  3  -1  -3 [5  3  6] 7       6
    1  3  -1  -3  5 [3  6  7]      7
 */

 
/**
 * 
 * @description
 * 
 * 思路：
 * 双端队列
 * 
 * 
 * 窗口内实现自排序（data[0]最大），每次输出窗口的 data[ 0 ]即可
 */
const slideWindow = ( arr: number[ ], k: number ) => {

    const win: number[ ] = [ ]; // 装的是下标
    const res: number[ ] = [ ];
    if ( !arr.length ) return [ ];

    for ( let i = 0; i < arr.length; i++ ) {
        if ( win[ 0 ] !== undefined && win[ 0 ] <= i - k) win.shift( ); // 把滑动之外的剔除
        while ( arr[ win[ win.length - 1 ]] < arr[ i ]) win.pop( ); // 装入当前值下标之前，把小于当前的先剔除
        win.push( i )
        if ( i >= k - 1 ) res.push( arr[ win[ 0 ]])
    }

    return res;
}