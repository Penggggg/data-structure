
/**
 * 
 * @description
 *
 * 思路：
 * 基于大顶堆，只是封装了Max
 */

 import { MaxHeap } from './7-实现最大堆';

class PriorityQueue {

    max!: number;
    maxHeap!: MaxHeap;

    constructor( max: number ) {
        this.max = max;
        this.maxHeap = new MaxHeap( );
    }

    /** 插入 */
    public add( val: number ) {
        if ( this.maxHeap.getSize( ) >= this.max ) return;
        this.maxHeap.add( val );
    }

    /** 删除 */
    public dequeue( ) {
        return this.maxHeap.extractMax( );
    }
}