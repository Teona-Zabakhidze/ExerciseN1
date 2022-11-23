///// Ex.1.

function lettersComparison(a, b) {
  if (a == b) {
    return "They are equal";
  } else {
    return "They are not equal";
  }
}
console.log(lettersComparison(5, 5));
console.log(lettersComparison(17, 3));

//// Ex. 2.

function CovertFToC(fahrenheit) {
  if (typeof fahrenheit !== "number") {
    return False;
  } else {
    return (fahrenheit - 32) / 1.8;
  }
}

console.log(CovertFToC(87));

/// Ex. 3.

function figure(a, b, operator) {
  if (typeof a != "number" || typeof b != "number") {
    return false;
  }
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  }
}

console.log(figure(7, 5, "+"));
console.log(figure(3, "t", "+"));
