/**
 * 
 * @description
 * 
 * 给定一个链表，判断链表中是否形成环。
 */



/**
 * 
 * @description
 * 
 * 方法一，Set
 * 
 * Tips：
 * 在值比较的一些算法中，可以用Set来思考。
 * 
 * 这里可以用递归吗？
 * 不行，递归只能在相邻两个执行中进行数据传输。
 * 且，Set要作为统筹，不能在每个递归中，都拿到同一个Set。
 * 
 */
const isRound1 = ( item?: LinkListItem ) => {

    if ( !item ) { return false; }

    let set = new Set( );
    let cur: LinkListItem | undefined = item;

    while ( !!cur ) {
        if ( set.has( cur )) {
            return true;
        }
        set.add( cur );
        cur = cur.next;
    }
    return false;
}



/**
 * 
 * @description
 * 
 * 方法2，相对速度法
 * 
 * Tips:
 * 慢指针为参考系，快指针每次相对慢指针向前走一步，如果两者相遇，则表明已经形成了环。
 */
const isRound2 = ( item?: LinkListItem ) => {

    if ( !item ) { return false; }

    let slow: LinkListItem | undefined = item;
    let fast: LinkListItem | undefined = item;

    while ( !!slow && !!fast && !!fast.next ) {
        slow = slow.next;
        fast = fast.next.next;

        // 两者相遇
        if ( slow === fast ) {
            return true
        }
    }
    return false;
}
