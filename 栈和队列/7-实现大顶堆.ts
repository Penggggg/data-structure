/**
 * 
 * @description
 * 
 * 堆是一颗二叉树
 * 自上而下，从大到小
 * 
 * 不像优先队列，没有长度限制
 * 
 * 堆两个关键操作 —— siftUp 和 siftDown
 * 向堆添加元素，有可能不符合其结构特点了，则需要调整
 * 将新增节点和其父节点进行比较，如果父节点小于它，则两者交换，不断向上比较直到根节点
 * 这样就保证了堆的正确结构，而这样的操作就是siftUp（有点像冒泡排序）
 * 
 *   如：
 *      20
        / \
       15  8
      /  \
     9   7
 */


/**
 * 
 * @description
 * 
 * 功能：
 * 用数组实现大顶堆
 * 
 * 思路：
 * 树与数组之间是有映射关系的
 * 可数组来表示二叉树
 */
export class MaxHeap {

    data: number[ ] = [ ];

    constructor( arr = [ ]) {
        this.data = arr;
    }

    /** 增加 */
    public add( val: number ) {
        this.data.push( val );
        this._siftUp( this.data.length - 1 ); // 上浮插入的元素
    }

    /** 出堆 */
    public extractMax( ) {

        const result = this.data[ 0 ];
        this._swap( 0, this.data.length - 1 ); // 最大点与最小点互换
        
        this.data.pop( ); // 最大点出堆
        this._siftDown( 0 ); // 最小点下沉
    
        return result;
    }

    /** 获取长度 */
    public getSize( ) {
        return this.data.length;
    }

    /** 交换位置 */
    private _swap( i: number, j: number ) {
        [ this.data[ j ], this.data[ i ]] = [ this.data[ i ], this.data[ j ]];
    }

    /** 找到父节点 */
    private _parent( index: number ) { 
        return Math.floor(( index - 1 ) / 2 )
    }

    /** 子：左 */
    private _leftChild( index: number ) { 
        return index * 2 + 1;
    }

    /** 子：右 */
    private _rightChild( index: number ) { 
        return index * 2 + 2;
    }

    /** 上浮 */
    private _siftUp( k: number ) {
        const p = this._parent( k ); // 父亲节点下标
        if ( this.data[ p ] !== undefined && 
            this.data[ p ] < this.data[ k ]) {
                this._swap( p, k );
                this._siftUp( p ); // 递归冒泡
        } 
    }

    /** 下沉 */
    private _siftDown( k: number ) {
        const [ l, r ] = [ this._leftChild( k ), this._rightChild( k )];
        const maxIndex = this._findMax( k, l, r );
        if ( k !== maxIndex ) {
            this._swap( k, maxIndex );
            this._siftDown( maxIndex ); // 递归向下冒泡
        }
    }

    /** 找出三个数中的最大数 */
    private _findMax( index1: number, index2: number, index3: number ) {
        const [ num1, num2, num3 ] = [ this.data[ index1 ], this.data[ index2 ], this.data[ index3 ]];
        const num2Index: any = {
            num1: index1,
            num2: index2,
            num3: index3
        };
        const max = Math.max.apply( null, [
            num1, num2, num3
        ].filter( x => x !== undefined ));
        return num2Index[ max ];
    }
}