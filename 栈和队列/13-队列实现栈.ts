/**
 * 
 * @description
 * 题目：
 * 
 * 同上
 */

/**
 * 
 * @description
 * 方法1
 * 
 * Tips1:
 * 用2个队列，实现栈的进出顺序
 * 
 * 队列1：一直出队列，把最后一个元素返回
   队列2，把队列1的出队元素，装好
 * 
 * 队列1：
 * 队列2：均为装载出队列的元素
 */

/**
 * 
 * @description
 * 先实现一个队列
 */
class Queue {

    data: number[ ] = [ ];

    constructor( meta: number[ ]) {
        this.data = meta;
    }

    public add( num: number | undefined ) {
        num !== undefined && this.data.unshift( num );
    }

    public del( ) {
        return this.data.pop( );
    }
}

class queueStack {

    queue1 = new Queue([ ]);
    queue2 = new Queue([ ]);

    public add( num: number ) {
        const con = this.queue1.data.length > 0 ? 
            this.queue1 : this.queue2;
        con.add( num );
    } 

    public del( ) {
        const target = this.queue1.data.length > 0 ? 
            this.queue1 : this.queue2;
        const temp = this.queue1.data.length === 0 ? 
            this.queue1 : this.queue2;

        while ( target.data.length > 1 ) {
            temp.add( target.del( ))
        }
        return target.del( );
    }
}