/**
 * 
 * @description
 * 
 * 回文链表：正想和反向遍历，序列一样的链表
 * 
 * 题目：请判断一个单链表是否为回文链表
 * 用 O(n) 时间复杂度和 O(1) 空间复杂度解决
 * 
 * 输入: 1->2->2->1 （ 偶数 ）
 * 输出: true 
 * 
 * 输入: 1->2->3->2->1 ( 奇数 )
 * 输出: true 
 */


/**
 * 
 * @description
 * 方法1，相对速度法
 * 
 * Tips1:
 * 慢指针为参考系，快指针每次相对慢指针向多走一步，
 * 如果快指针到达了尾巴，则慢指针刚好在链表中间。
 * 
 * Tips2:
 * 找到一半走，可选择翻转（上一半、下一半来比较）
 * 
 */
const isPalindrome = ( start?: LinkListItem ) => {

    if ( !start ) { return false; }

    /** 下一半 链表的开头 */
    let halfStart!: LinkListItem | undefined;
    let slow: LinkListItem | undefined = { value: '' };
    let fast: LinkListItem | undefined = { value: '' };

    slow.next = start;
    fast.next = start;

    /** 只遍历了O(n/2)就能拿到中间点 */
    while ( !!fast && !!fast.next ) {
        if ( !slow ) { return false; }

        slow = slow.next;
        fast = fast.next.next;
    };

    if ( !slow ) { return false; }

    /** 分奇偶 */
    halfStart = slow.next;
    if ( !halfStart ) { return; }

    /** 先反转下一半 */
    const reverse = ( pre?: LinkListItem, cur?: LinkListItem ): LinkListItem | undefined => {
        if ( !cur ) { return pre; }
        let next = cur.next;
        cur.next = pre;
        return reverse( cur, next );
    }

    /** 拿到下半段，反转后的第一个值 */
    let newStart: LinkListItem | undefined = start;
    let newHalfStart = reverse( undefined, halfStart );
    if ( !newHalfStart ) { return false; }

    /** 下一半 跟 上一半 进行对比 */
    while ( !!newHalfStart ) {
        if ( !!newStart && newHalfStart.value === newStart.value ) {
            newStart = newStart.next;
            newHalfStart = newHalfStart.next;
        } else { 
            return false;
        }
    }

    return true;

}