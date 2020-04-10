/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BT{
    constructor(node = null){
        this.root = new Node(node);
    }



    findMaxLength = () =>{}

    findMinLength = () => {}
}

var diameterOfBinaryTree = function(root) {
    return findMaxLength(root)+findMinLength(root)
};

let tree = new BT('a')
console.log(tree.root.data)
console.log(tree)