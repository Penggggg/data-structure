/**
 * 
 * @description
 * 
 * 堆：是一颗二叉树。
 * 但其自上而下，值为从大到小（最大堆）或从小到大（最小堆）
 * 
 * 不像优先队列，没有长度限制。
 * 
 * 两个非常关键的操作 —— siftUp 和 siftDown：
 * 向这个堆的数组末尾又添加了一个元素，那现在可能就不符合堆的结构特点了。那么现在我将新增的节点和其父节点进行比较，如果父节点优先级小于它，则两者交换，不断向上比较直到根节点为止，这样就保证了堆的正确结构。而这样的操作就是siftUp。
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
 * 实现最大堆（二叉树）
 * 另外：数组 即 最大堆
 * 
 * Tips：堆的细节在内部，甚至传进来的arr只是metadata
 * 数组到堆的映射，体现在内部API上，如：_parent _leftChild
 */
class MaxHeap {

    data: number[ ] = [ ];

    constructor( arr = [ ]) {
        this.data = arr;
    }

    /** 增加 */
    public add( val: number ) {
        this.data.push( val );
        this._siftUp( this.data.length - 1 );
    }

    /** 优先级最高出堆 */
    public extractMax( ) {

        // 保存第一个点（最大）
        const result = this.data[ 0 ];
        // 最大点与最小点互换
        this._swap( 0, this.data.length - 1 );
        // 最后一点出堆
        this.data.pop( );
        // 最小点下沉
        this._siftDown( 0 );
    
        return result;
    }

    /** 交换位置 */
    private _swap( i: number, j: number ) {
        /**
         * es6：
         * let x = 1;
         * let y = 2;
         * 
         * // 互换。等号左边是指针，右边是值
         * [ y, x ] = [ x, y ]
         */
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
        const parentIndex = this._parent( k );
        if ( this.data[ parentIndex ] !== undefined && 
            this.data[ parentIndex ] < this.data[ k ]) {
                this._swap( parentIndex, k );
                this._siftUp( parentIndex );
        } 
    }

    /** 下沉 */
    private _siftDown( k: number ) {
        const [ leftIndex, rightIndex ] = [ this._leftChild( k ), this._rightChild( k )];
        const maxvalIndex = this._findMaxIn3( k, leftIndex, rightIndex );
        if ( k !== maxvalIndex ) {
            this._swap( k, maxvalIndex );
            this._siftDown( maxvalIndex );
        }
    }

    /** 找出三个数中的最大数 */
    private _findMaxIn3( index1: number, index2: number, index3: number ) {
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