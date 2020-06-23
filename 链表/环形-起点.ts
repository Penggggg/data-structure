/// <reference path="../global.d.ts" />

/**
 * 
 * @description
 * 
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 如，【1～3】是环外的一条绳，【3，4，5....., 3 】是环，则返回3
 */




/**
 * 
 * @description
 * 返回环的起点
 */
const getRoundStart = ( start?: LinkListItem ) => {

    if ( !start ) { return null; }
    
    let set = new Set( );
    let cur: LinkListItem | undefined = start.next;

    set.add( start );

    while ( !!cur ) {
        const next = cur.next;
        if ( set.has( next )) { return next; }

        set.add( cur );
        cur = cur.next;
    }
    return null;
}

