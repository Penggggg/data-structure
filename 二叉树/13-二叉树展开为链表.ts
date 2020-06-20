var flatten = function(root) {
    if(root == null) return;
    flatten(root.left);
    flatten(root.right);
    if(root.left) {
        let p = root.left;
        while(p.right) {
            p = p.right;
        }
        p.right = root.right;
        root.right = root.left;
        root.left = null;
    }
};