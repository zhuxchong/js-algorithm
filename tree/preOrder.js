const bt = require("../mock-data/bt");
const preOrder = (root) => {
  if (!root) return;
  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
};
preOrder(bt);
