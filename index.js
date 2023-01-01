function compareNumber(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    console.log(firstNumber + " is greather than " + secondNumber);
  } else if (firstNumber < secondNumber) {
    console.log(firstNumber + " is less than " + secondNumber);
  } else {
    console.log("Both the numbers are equal");
  }
}

compareNumber(12, 3);

function print() {
  console.log("this is printed in the console");
}

print();

//function expression syntax

const add = function addNumber(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const result = add(2, 3);
console.log(result);

// anonymous function
const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const person = {
  firstName: "Muhammad",
  lastName: "Iqbal",
  print: function () {
    console.log("this is function is a property of an object");
  },
};

person.print();
person.name;
