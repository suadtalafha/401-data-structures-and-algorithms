"use strict";


function fizzBuzzTree(tree) {
  function replaceValue(value) {
    let newValue;
    if (value % 5 === 0 && value % 3 === 0) {
      newValue = "FizzBuzz";
    } else if (value % 5 === 0) {
      newValue = "Buzz";
    } else if (value % 3 === 0) {
      newValue = "Fizz";
    } else {
      newValue = value.toString();
    }
    return newValue;
  }

  function trevers(tree) {
    let result = {};
    for (const key in tree) {
      const value = tree[key];
      if (value && typeof value === "object") {
        result[key] = trevers(value);
      } else {
        result[key] = replaceValue(value);
      }
    }
    return result;
  }
  return trevers(tree);
}

module.exports = fizzBuzzTree;
