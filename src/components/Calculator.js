import React from 'react';
import "./Calculator.css"
import { useState } from 'react';


const Calculator = ({startValue}) => {
  var [currentDisplay, setCurrentDisplay] = useState(startValue);
  var result = 0;

  const Calculate = () => {
    console.clear();
    const resultBefore = currentDisplay.split(" ");
    var i = 0;
    checkSigns(resultBefore, i);
    setCurrentDisplay((result).toString());
  }
  
  const checkSigns = (resultBefore, i) => {
    

    console.log("before", resultBefore);
    var m;
    for (m = 0; m < resultBefore.length; m++) {
      if (resultBefore.at(m) === "×") {
        resultBefore[m-1] = ((parseInt(resultBefore[m-1]) * parseInt(resultBefore[m+1]))).toString();
        resultBefore.splice(m, 2);
        console.log("spliced ×", resultBefore);
      }
      if (resultBefore.at(m) === "÷") {
        resultBefore[m-1] = ((parseInt(resultBefore[m-1]) / parseInt(resultBefore[m+1]))).toString();
        resultBefore.splice(m, 2);
        console.log("spliced ÷", resultBefore);
      }
    }
    for (m = 0; m < resultBefore.length; m++) {
      if (resultBefore.at(m) === "+") {
        resultBefore[m-1] = ((parseInt(resultBefore[m-1]) + parseInt(resultBefore[m+1]))).toString();
        resultBefore.splice(m, 2);
      }
      if (resultBefore.at(m) === "-") {
        resultBefore[m-1] = ((parseInt(resultBefore[m-1]) - parseInt(resultBefore[m+1]))).toString();
        resultBefore.splice(m, 2);
      }
    }
    result = parseFloat(resultBefore);
  }

  const deleteLast = () => {
    if (currentDisplay === "") {
      return;
    }
    var newDisplay = currentDisplay.split("");
    var newValue = "";
    if (newDisplay.at(-1) === " ") {
      newDisplay.slice(0, -3).forEach((element) => {newValue += element});
    }
    else {
      newDisplay.slice(0, -1).forEach((element) => {newValue += element});
    }
    setCurrentDisplay(newValue);
  }

  const ifICanAddOperator = () => {
    if ((currentDisplay.at(-2) !== "+" && currentDisplay.at(-2) !== "-" && currentDisplay.at(-2) !== "×" && currentDisplay.at(-2) !== "÷" && currentDisplay !== "") || (currentDisplay.at(0) === "-" && !currentDisplay.includes(" "))) {
      return true;
    }
    else {
      return false;
    }
  }

  return (
    <>
      <h3>Display: {currentDisplay}</h3>
      <div className="buttons__grid">
        <button onClick={() => setCurrentDisplay(currentDisplay + "7")}>7</button>
        <button onClick={() => setCurrentDisplay(currentDisplay + "8")}>8</button>
        <button onClick={() => setCurrentDisplay(currentDisplay + "9")}>9</button>
        <button onClick={() => {if (ifICanAddOperator()){setCurrentDisplay(currentDisplay + " + ")}}}>+</button>
        <button onClick={() => setCurrentDisplay(currentDisplay + "4")}>4</button>
        <button onClick={() => setCurrentDisplay(currentDisplay + "5")}>5</button>
        <button onClick={() => setCurrentDisplay(currentDisplay + "6")}>6</button>
        <button onClick={() => {if (ifICanAddOperator()){setCurrentDisplay(currentDisplay + " - ")}}}>-</button>
        <button onClick={() => setCurrentDisplay(currentDisplay + "1")}>1</button>
        <button onClick={() => setCurrentDisplay(currentDisplay + "2")}>2</button>
        <button onClick={() => setCurrentDisplay(currentDisplay + "3")}>3</button>
        <button onClick={() => {if (ifICanAddOperator()){setCurrentDisplay(currentDisplay + " × ")}}}>×</button>
        <button onClick={() => setCurrentDisplay(currentDisplay + "0")}>0</button>
        <button onClick={() => deleteLast()}>DEL</button>
        <button onClick={() => setCurrentDisplay("")}>CE</button>
        <button onClick={() => {if (ifICanAddOperator()){setCurrentDisplay(currentDisplay + " ÷ ")}}}>÷</button>
        <button className="width-4" onClick={() => {try {if (ifICanAddOperator()){Calculate()}}catch{console.log("error")}}}>ENTER</button>
        <button className="width-4" onClick={() => {if (ifICanAddOperator()){Calculate()}}}>ENTER WITH ERRORS</button>
      </div>
    </>
  )
}

export default Calculator
