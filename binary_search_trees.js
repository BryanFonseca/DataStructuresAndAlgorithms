class TreeNode
{
  constructor(data, left = null, right = null)
  {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class BinarySearchTree
{
  constructor(root = null)
  {
    this.root = root;
  }
  search(searchValue, node)
  {
    if(!node || node.data === searchValue)
    {
      return node;
    }
    if(searchValue < node.data)
    {
      return this.search(searchValue, node.left);
    }
    else
    {
      return this.search(searchValue, node.right);
    }
  }
}

let a = new TreeNode(10);
let b = new TreeNode(33);
let c = new TreeNode(25, a, b);
let d = new TreeNode(56);
let e = new TreeNode(89);
let f = new TreeNode(75, d, e);
let root = new TreeNode(50, c, f);

let bsTree = new BinarySearchTree(root);
console.log(bsTree.search(10, root));
