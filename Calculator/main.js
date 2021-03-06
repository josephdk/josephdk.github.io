var firstNumber;
var firstOperator;
var finalDigits;
var result;

function assign(selectedDigit) {
  // If the selected digits isn't a number
  if (isNaN(selectedDigit)){
    // If the first button pressed was an operator, do nothing
    if(!finalDigits && !result){
      return;
    }

    // If nothing is stored in firstOperator, don't calculate - yet
    if (!firstOperator){
      firstOperator = selectedDigit;
      firstNumber = finalDigits;
      finalDigits = null;
    } else {
      calculate(finalDigits);
      firstOperator = selectedDigit;
      console.log(result);
      document.getElementById('result').innerHTML = result;
      finalDigits = null;
    }
  } else if(!finalDigits) {
    finalDigits = selectedDigit;
    document.getElementById('result').innerHTML = finalDigits;
  } else {
    finalDigits = finalDigits + selectedDigit;
    document.getElementById('result').innerHTML = finalDigits;
  }
}

function calculate(dig) {
  if (firstOperator === "+"){
    if(!result){
      result = Number(firstNumber) + Number(dig);
      return;
    }
    result = Number(result) + Number(dig);
  } else if (firstOperator === "-"){
   if(!result){
      result = Number(firstNumber) - Number(dig);
      return;
    }
    result = Number(result) - Number(dig);
  } else if (firstOperator === "*"){
   if(!result){
      result = Number(firstNumber) * Number(dig);
      return;
    }
    result = Number(result) * Number(dig);
  } else if (firstOperator === "/"){
   if(!result){
      result = Number(firstNumber) / Number(dig);
      return;
    }
    result = Number(result) / Number(dig);
  }
}

function results() {
  if (!firstOperator || !firstNumber){
    return;
  }
  calculate(finalDigits);
  document.getElementById('result').innerHTML = result;
  firstOperator = null;
  firstNumber = null;
}

function clearCalculator() {
  result = null;
  firstOperator = null;
  firstNumber = null;
  finalDigits = null;
  document.getElementById('result').innerHTML = '0';
}
