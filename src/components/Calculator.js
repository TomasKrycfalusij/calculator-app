import React from 'react';
import "./Calculator.css"
import { useState } from 'react';


const Calculator = ({startValue}) => {
  const [currentDisplay, setCurrentDisplay] = useState(startValue);
  var result = 0;

  const Calculate = () => {
    console.clear();
    const resultBefore = currentDisplay.split(" ");
    resultBefore.forEach((element) => checkSigns(element, resultBefore));
    setCurrentDisplay((result).toString());
  }

  const checkSigns = (element, resultBefore) => {
    console.log(resultBefore.length);
    console.log("[0] = " + parseInt(resultBefore[0]));
    if (resultBefore.length <= 1) {
      result = parseInt(resultBefore[0]);
    }
    else if (element === "+") {
      result += parseInt(resultBefore[0]);
      result += parseInt(resultBefore[2]);
      console.log("+", result)
    }
    else if (element === "-") {
      result += parseInt(resultBefore[0]);
      result -= parseInt(resultBefore[2]);
      console.log("-", result)
    }
  }

  return (
    <>
      <h3>Display: {currentDisplay}</h3>
      <div className="buttons__grid">
        <button onClick={() => setCurrentDisplay(currentDisplay + "7")}>7</button>
        <button onClick={() => setCurrentDisplay(currentDisplay + "8")}>8</button>
        <button onClick={() => setCurrentDisplay(currentDisplay + "9")}>9</button>
        <button onClick={() => {if (currentDisplay.at(-2) !== "+" && currentDisplay.at(-2) !== "-" && currentDisplay !== ""){setCurrentDisplay(currentDisplay + " + ")}}}>+</button>
        <button onClick={() => setCurrentDisplay(currentDisplay + "4")}>4</button>
        <button onClick={() => setCurrentDisplay(currentDisplay + "5")}>5</button>
        <button onClick={() => setCurrentDisplay(currentDisplay + "6")}>6</button>
        <button onClick={() => {if (currentDisplay.at(-2) !== "+" && currentDisplay.at(-2) !== "-" && currentDisplay !== ""){setCurrentDisplay(currentDisplay + " - ")}}}>-</button>
        <button onClick={() => setCurrentDisplay(currentDisplay + "1")}>1</button>
        <button onClick={() => setCurrentDisplay(currentDisplay + "2")}>2</button>
        <button onClick={() => setCurrentDisplay(currentDisplay + "3")}>3</button>
        <button onClick={() => setCurrentDisplay("")}>CE</button>
        <button className="width-4" onClick={() => {try{if (currentDisplay.at(-2) !== "+" && currentDisplay.at(-2) !== "-" && currentDisplay !== ""){Calculate()}}catch{console.log("error")}}}>ENTER</button>
        <button className="width-4" onClick={() => {if (currentDisplay.at(-2) !== "+" && currentDisplay.at(-2) !== "-" && currentDisplay !== ""){Calculate()}}}>ENTER WITH ERRORS</button>
        <button className="width-4" onClick={() => console.log("Display is: " + currentDisplay)}>SHOW</button>
      </div>
    </>
  )
}

export default Calculator
