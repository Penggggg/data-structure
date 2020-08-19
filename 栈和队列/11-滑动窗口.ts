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
 * 方法一：双端队列
 * 
 * Tips1：
 * 窗口长度为k，但只要输出大值，所以窗口内部长度不一定为k
 * 
 * Tips2：
 * 窗口内实现自排序（由大到小排序），每次输出窗口的 data[ 0 ]即可
 */
const slideWindow = ( arr: number[ ], k: number ) => {

    const _window: number[ ] = [ ];
    const result: number[ ] = [ ];
    if ( !arr.length ) return [ ];

    for ( let i = 0; i < arr.length; i++ ) {

        /** 如果窗已经满k个了，则踢出第一个 */
        if ( _window.length >= k ) _window.shift( );

        /** 每次 push 进来一个新的值，就将 window 中目前前面所有比它小的值都删除 */
        while( _window[ _window.length - 1 ] < arr[ i ]) {
            _window.pop( );
        }

        _window.push( arr[ i ]);
        if ( i >= k - 1 )  result.push( _window[ 0 ])
    }

    return result;
}