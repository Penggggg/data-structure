/**
 * 
 * @description
 * 题目
 * 
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 * 
 * 输入: n = 12
   输出: 3 
   解释: 12 = 4 + 4 + 4.
 */


/**
 * 
 * @description
 * 方法1：二分拆解法
 * 
 * Tips1：
 * 把数 N拆解成2个数： x + y，
 * 并保证，x 或 y其中一个是完全平方数
 * 然后，继续拆解另一个数x/y
 */
var numSquares =( n: number ) => {
    let queue: number[ ][ ] = [];
    /** 0 是第一个step */
    queue.push([ n, 0 ]);
    while( queue.length ) {
        let [ num, step ] = queue.shift( );

        /** 不断循环 */
        for(let i = 1; ; i ++) {
            /** 质数的另一个数 */
            let nextNum = num - i * i;
            if(nextNum < 0) break;
            if(nextNum === 0) return step + 1;
            queue.push([ nextNum, step + 1 ]);
        }
    }
};