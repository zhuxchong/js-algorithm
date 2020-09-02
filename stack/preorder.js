//leetcode preorder by stack
const bt = require("../mock-data/bt");
const preorder = (root) => {
  const res = [];
  const stack = [];
  if (root) stack.push(root);
  while (stack.length) {
    const n = stack.pop();
    res.push(n.val);
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
  return res;
};
console.log(preorder(bt));
