// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-parentheses
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const leftBrace = ["(", "{", "["];
  const rightBrace = [")", "}", "]"];
  let stack = [];
  const braceDict = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  if (!s) {
    return true;
  }
  if (s.length % 2 === 1) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (leftBrace.includes(s[i])) {
      stack.push(s[i]);
    } else if (rightBrace.includes(s[i])) {
      const poper = stack.pop();

      if (poper !== braceDict[s[i]]) {
        return false;
      }
    } else {
      continue;
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}
