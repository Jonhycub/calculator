//Create a function to add
function add(num1, num2){
  return num1 + num2;
}

//Create a function to subtract
function subtract(num1, num2){
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
    return subtract(num1, num2);
  }else if(operator == 'x'){
    return multiply(num1, num2);
  }else if(operator == '÷'){
    return divide(num1, num2);
  }
}

//Function to make sure the input is only a number or an operation symbol.
function validateInput() {
  let inputField = document.getElementById('myInput');
  inputField.value = inputField.value.replace(/[^0-9+\-/.]/g, '');
}

//Store the display value in a variable
let displayValue =  document.querySelector('.display-input').value;


//Event Listeners for all the buttons
const buttonClear = document.querySelector('#clear');
buttonClear.addEventListener('click', () =>{
  displayValue = '';
  populateDisplay();
});

const buttonDelete = document.querySelector('#delete');
buttonDelete.addEventListener('click', () =>{
  displayValue = displayValue.slice(0, -1);
  populateDisplay();
});

const button7 = document.querySelector('#seven');
button7.addEventListener('click', () =>{
  displayValue += '7';
  populateDisplay();
});

const button8 = document.querySelector('#eight');
button8.addEventListener('click', () =>{
  displayValue += '8';
  populateDisplay();
});

const button9 = document.querySelector('#nine');
button9.addEventListener('click', () =>{
  displayValue += '9';
  populateDisplay();
});

const buttonDivide = document.querySelector('#divide');
buttonDivide.addEventListener('click', () =>{
  displayValue += '÷';
  populateDisplay();
});

const button4 = document.querySelector('#four');
button4.addEventListener('click', () =>{
  displayValue += '4';
  populateDisplay();
});

const button5 = document.querySelector('#five');
button5.addEventListener('click', () =>{
  displayValue += '5';
  populateDisplay();
});

const button6 = document.querySelector('#six');
button6.addEventListener('click', () =>{
  displayValue += '6';
  populateDisplay();
});

const buttonMultiply = document.querySelector('#multiply');
buttonMultiply.addEventListener('click', () =>{
  displayValue += 'x';
  populateDisplay();
});

const button1 = document.querySelector('#one');
button1.addEventListener('click', () =>{
  displayValue += '1';
  populateDisplay();
});

const button2 = document.querySelector('#two');
button2.addEventListener('click', () =>{
  displayValue += '2';
  populateDisplay();
});

const button3 = document.querySelector('#three');
button3.addEventListener('click', () =>{
  displayValue += '3';
  populateDisplay();
});

const buttonSubtract = document.querySelector('#minus');
buttonSubtract.addEventListener('click', () =>{
  displayValue += '-';
  populateDisplay();
});

// const buttonPoint = document.querySelector('#point');   Disabled for now to not have to deal with Floats
// buttonPoint.addEventListener('click', () =>{
//   displayValue += '.';
//   populateDisplay();
// });

const button0 = document.querySelector('#zero');
button0.addEventListener('click', () =>{
  displayValue += '0';
  populateDisplay();
});

const buttonEquals = document.querySelector('#equals');
buttonEquals.addEventListener('click', () =>{
  displayValue += '=';
  populateDisplay();
});

const buttonAdd = document.querySelector('#plus');
buttonAdd.addEventListener('click', () =>{
  displayValue += '+';
  populateDisplay();
});

//Create the functions that populate the display when you click the number buttons.
function populateDisplay(){
  const display = document.querySelector('.display-input');
  display.value = displayValue;
}


