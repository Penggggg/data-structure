/** 链表 */
type LinkList = {
    next?: LinkListItem
}

/** 链表 */
type LinkListItem = {
    value: any,
    next?: LinkListItem
}

/** 二叉树 */
type BinaryTreeNode = {
    val: number,
    left?: BinaryTreeNode
    right?: BinaryTreeNode
}