/**
 * 
 * @description
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 * 
 * 输入: nums = [ 1, 1, 1, 2, 2, 3 ], k = 2
   输出: [1,2]
 */


/**
 * 
 * @description
 * 
 * Tips1:
 * 排序类，可以用大顶堆 / 小顶堆完成
 * 
 * Tips2:
 * 固定长度的，如k个，则可用优先队列解决
 * 
 * Tips3:
 * 在确定使用优先队列时，先把模型简化为数组，简化核心逻辑：
 * 往数组插入元素时，只要 元素N 比 数组中最小元素（data[ 0 ] ）大，即可插入 + 删除顶部元素
 * 
 * Tips4:
 * 优先队列/队列，在满状态时，可以根据具体需求，来做以下操作：不响应丶插入，其compare函数在new实例时进行定义
 */


/**
 * 
 * @description
 * 先实现一个最小堆
 */
class MinHeap {

    data: number[ ] = [ ];

    constructor( arr = [ ]) {
        this.data = arr;
    }

    /** 增加 */
    public add( val: number ) {
        this.data.push( val );
        this._siftUp( this.data.length - 1 );
    }

    /** 获取长度 */
    public getSize( ) {
        return this.data.length;
    }

    /**  获取首个元素 */
    public getFront( ) {
        return this.data[ 0 ] || null;
    }

    /** 优先级最高出堆 */
    public extractFront( ) {

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
            this.data[ parentIndex ] > this.data[ k ]) {
                this._swap( parentIndex, k );
                this._siftUp( parentIndex );
        } 
    }

    /** 下沉 */
    private _siftDown( k: number ) {
        const [ leftIndex, rightIndex ] = [ this._leftChild( k ), this._rightChild( k )];
        const maxvalIndex = this._findMinIn3( k, leftIndex, rightIndex );
        if ( k !== maxvalIndex ) {
            this._swap( k, maxvalIndex );
            this._siftDown( maxvalIndex );
        }
    }

    /** 找出三个数中的最小数 */
    private _findMinIn3( index1: number, index2: number, index3: number ) {
        const [ num1, num2, num3 ] = [ this.data[ index1 ], this.data[ index2 ], this.data[ index3 ]];
        const num2Index: any = {
            num1: index1,
            num2: index2,
            num3: index3
        };
        const max = Math.min.apply( null, [
            num1, num2, num3
        ].filter( x => x !== undefined ));
        return num2Index[ max ];
    }
}

/**
 * 
 * @description
 * 在实现最小堆的优先队列
 */
export class PriorityQueueMin {

    max!: number;
    minHeap!: MinHeap;
    compareFun!: any;

    constructor( max: number, compareFun: any ) {
        this.max = max;
        this.minHeap = new MinHeap( );
        this.compareFun = compareFun;
    }

    public getData( ) {
        return this.minHeap.data;
    }

    /** 插入 */
    public add( val: number ) {
        /** 满状态时 */
        if ( this.minHeap.getSize( ) >= this.max ) {
            if ( !this.compareFun( val, this.minHeap.getFront( ))) return;
            this.dequeue( );
        };
        this.minHeap.add( val );
    }

    /** 删除 */
    public dequeue( ) {
        return this.minHeap.extractFront( );
    }
}

/**
 * 
 * @description
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 */
const topFrequency = ( arr: number[ ], k: number ) => {

    const num2Frequency: {
        [ key: number ]: number 
    } = Array.from( 
        new Set( arr )
    ).reduce(( pre, cur ) =>  ({
        ...pre,
        [ cur ]: arr.filter( x => x === cur ).length
    }),{ });

    const priorityQueueMin = new PriorityQueueMin( 2, ( e1: any, e2: any ) => num2Frequency[ e1 ] > num2Frequency[ e2 ]);

    Array.from( new Set( arr )).map( k => priorityQueueMin.add( k ));

    return priorityQueueMin.getData( );
}