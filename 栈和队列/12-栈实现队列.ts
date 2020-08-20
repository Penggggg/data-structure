/**
 * 
 * @description
 * 
 * 思路:
 * 双栈
 * 
 * 栈1：容器
 * 栈2：装载 栈1 出栈的元素
 */


/** 
 * 
 * 先实现一个栈
 */
class Stack {

    data: number[ ] = [ ];

    constructor( meta: number[ ]) {
        this.data = meta;
    }

    public add( num: any ) {
        num !== undefined && this.data.unshift( num );
        return this.data;
    }

    public del( ) {
        return this.data.shift( );
    }
}

class stackQueue {

    con = new Stack([ ]);
    temp = new Stack([ ]);

    public add( num: number ) {
        this.con.add( num );
    }

    public del( ) {
        /** con一直出栈，把最后一个元素返回 */
        /** 返回之后，把出栈的元素装回 */

        while ( this.con.data.length > 1 ) {
            this.temp.add( this.con.del( ));
        }

        const result = this.con.del( );

        while( this.temp.data.length > 0 ) {
            this.con.add( this.temp.del( ));
        }

        return result;
    }

    public empty( ) {
        return this.con.data.length === 0;
    }

}