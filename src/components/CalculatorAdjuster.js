import React from 'react'
import "./Calculator.css"
import { useState } from 'react';
//import ReactSlider from "react-slider";

const CalculatorAdjuster = ({setBorderRadius}) => {
  const [radius, setRadius] = useState(10);

  const changeRadius = (event) => {
    setRadius(event.target.value)
    setBorderRadius(radius);
    //console.log("CalculatorAdjuster", radius);
  };

  return (
    <>
      <h3>Adjust your calculator!</h3>
      <input
        type="range"
        className="calculator__slider"
        id="calc__button--border-radius"
        name="calc__button--border-radius"
        min="0"
        max="20"
        value={radius}
        onChange = {changeRadius}
      >
      </input>
      <label htmlFor="calc__button--border-radius">Button radius {radius}</label>
    </>
  )
}

export default CalculatorAdjuster
