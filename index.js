// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = [];
  var strArr = s.split('');
  for (var i = 0; i < strArr.length; i++) {
    var char = strArr[i];
    if (char === '(') stack.push(')');
    else if (char === '{') stack.push('}');
    else if (char === '[') stack.push(']');
    else if (stack.length === 0 || char !== stack.pop()) return false;
  }
  return stack.length === 0;
};

console.log(isValid('(){}'));
