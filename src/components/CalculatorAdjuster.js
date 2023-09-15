import React from 'react'
import "./Calculator.css"

const CalculatorAdjuster = ({value, changeFunction, min, max, name}) => {
  return (
    <>
      <input
        type="range"
        className="calculator__slider"
        id="calc__button--border-radius"
        name="calc__button--border-radius"
        min={min}
        max={max}
        value={value}
        onChange = {changeFunction}
      >
      </input>
      <label htmlFor="calc__button--border-radius">{name} {value}</label>
    </>
  )
}

export default CalculatorAdjuster
