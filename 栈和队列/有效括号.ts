/**
 * 
 * @description
 * 题目：
 * 
 * 给定一个只包括 ( ) { } [ ] 的字符串，
 * 左括号必须用相同类型的右括号闭合。 左括号必须以正确的顺序闭合。
 * 
    输入: "()[]{}"
    输出: true

    输入: "{[]}"
    输出: true

    输入: "([)]"
    输出: false
 * 
 */



/**
 * 
 * @description
 * 方法一：就近匹配
 * 
 * Tips1：
 * 因为在“闭合”这个场景，无论是一下哪种方式，都是就近匹配的。
 * 1："()[]{}"
 * 2："{[]}"
 *
 * 即：遇到右括号时，要消除掉最近的左括号
 * 
 * Tips2:
 * 手动分开左、右括号
 */
const effectiveChar = ( s: string ) => {
    const stack = [ ];

    if ( s.length % 2 === 1 ) { return false; }

    for ( let i = 0; i < s.length; i++ ) {
        const ch = s[ i ];

        // 遇到左括号
        if ( ch === '(' || ch === '[' || ch === '{' ) {
            stack.push( ch );

        // 遇到右括号
        } else {
            const left = stack.pop( );
            if ( !left ) { return false;}
            if (( ch === ')' && left !== '(' ) ||
                ( ch === '}' && left !== '{' ) ||
                ( ch === ']' && left !== '[' )) {
                    return false;
            }
        }
    }

    return true;
}