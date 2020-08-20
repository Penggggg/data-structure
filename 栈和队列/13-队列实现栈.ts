/**
 * 
 * @description
 * 
 * 思路:
 * 利用双队列
 * 
 * 队列1：一直出队列，把最后一个元素返回
   队列2：把队列1的出队元素，装好
 * 
 * 队列1 和 队列2 再互换
 */

/**
 * 
 * @description
 * 先实现一个队列
 */
class Queue {

    data: any[ ] = [ ];

    constructor( meta: any[ ]) {
        this.data = meta;
    }

    public add( num: any ) {
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