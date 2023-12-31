//Create a function to add
function add(num1, num2){
  return num1 + num2;
}

//Create a function to subtract
function substract(num1, num2){
  return num1 - num2;
}

//Create a function to multiply
function multiply(num1, num2){
  return num1 * num2;
}

//Create a function to divide
function divide(num1, num2){
  return num1 / num2;
}

//Create variables for the numbers and the operator
let num1;
let num2;
let operator = "";

//Create a function operate() that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(operator, num1, num2){
  if(operator == '+'){
    return add(num1, num2);
  }else if(operator == '-'){
    return substract(num1, num2);
  }else if(operator == 'x'){
    return multiply(num1, num2);
  }else if(operator == '÷'){
    return divide(num1, num2);
  }
}
