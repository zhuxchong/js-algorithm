class Stack {
  constructor() {
    this.data = [];
  }
  pop(num) {
    if (this.data.length) return this.data.pop();
    throw new Error("stack is empty");
  }
  push(num) {
    this.data.push(num);
  }
  peek() {
    if (this.data.length) return this.data[this.data.length - 1];
    throw new Error("stack is empty");
  }
}
