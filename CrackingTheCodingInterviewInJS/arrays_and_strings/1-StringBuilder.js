//

// Initializes a new instance of the StringBuilder class
// and appends the given value if supplied
function StringBuilder(value) {
  this.strings = new Array("");
  // this (value) -> StringBuilder { strings: [ '' ] }
  this.append(value);
}

// Appends the given value to the end of this instance.
StringBuilder.prototype.append = function (value) {
  if (value) {
    this.strings.push(value);
  }
};

// Clears the string buffer
StringBuilder.prototype.clear = function () {
  this.strings.length = 1;
};

// Converts this instance to a String.
StringBuilder.prototype.toString = function () {
  return this.strings.join("");
};

// O(xn^2) -> O(n^2)
// On each concatenation a new copy of string is created and,
// two strings are copied over character by character
// the first iteration will require us to copy x character, second 2x, third 3x ..
// O (x + 2x + .... + nx) this reduces to O(xn^2)
const joinWords1 = (words) => {
  let sentence = "";
  for (const word of words) {
    sentence = sentence + word;
  }
  return sentence;
};

// Better approach
const joinWords2 = (words) => {
  const sentence = new StringBuilder("");
  for (const word of words) {
    sentence.append(word);
  }
  return sentence.toString();
};

console.log(joinWords1("hy, how are you?"));
console.log(joinWords2("hy, how are you?"));
