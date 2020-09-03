// 十进制转二进制
function dec2bin(decNum) {
  let result = [];
  // 不断用 2 取余，压入堆栈中，直到最后的 0 或 1
  while (decNum > 1) {
    result.push(decNum % 2);
    decNum = parseInt(decNum / 2);
  }
  // 把最后的 0 或 1 压入堆栈
  result.push(decNum);

  // 用字符串拼接余数，pop 使余数倒序
  let binNum = "";
  while (result.length != 0) {
    binNum += result.pop();
  }
  return binNum;
}

let num = 100;
console.log(dec2bin(num)); // 1100100
