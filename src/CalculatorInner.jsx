import React from 'react';
import c from './Calculator.module.css';
import {resultValidator, inputValidator} from './validators.js';
import Select from 'react-select';



const CalculatorInner = () => {
  let [input, setInput] = React.useState("");
  let [value, setValue] = React.useState("");
  let result = 0;

  const handleInput = (val) => {
    if (input || inputValidator(val)) {
    setInput(val)}
  };

  const handleClick = () => {
    switch (value) {
      case " F to C":
        result = ((input - 32) * 5) / 9;
        break;
      case " C to F":
        result = (input * 9) / 5 + 32;
        break;
      case " Cm to Ft":
        result = input / 30.48;
        break;
      case " Ft to Cm":
        result = input * 30.48;
        break;
      case " Inch to Cm":
        result = input == 0 ? 0 : parseInt(input) * 2.54;
        break;
     default:
    return result; }};

  const options = [
   { value: " F to C", label: '°F to °C' },
   { value: " C to F" , label: '°C to °F' },
   { value: " Ft to Cm", label: 'Ft to Cm' },
   { value: " Cm to Ft", label: 'Cm to Ft' },
   { value: " Inch to Cm", label: 'Inch to Cm' },
  ]

  return (
    <fieldset className={c.container}>
      <legend>What would you like to convert?</legend>
      <Select
        value={options[value]}
        onChange={(option) => setValue(option.value)}
        onSubmit={handleClick()}
        options = {options}
      />
      <input
        style={{border: '1px solid lightgrey', paddingLeft: '10px', borderRadius: '3px'}}
        placeholder={0}
        value={input}
        onChange={(e) => handleInput(e.target.value)}
      />
      <div>The result is {resultValidator(result)}</div>
      <button className = {c.button} onClick = {() => setInput('')}>Clear</button>
      <p style={{textAlign: 'right', position: 'relative', fontSize: '10px'}}>ScarletHeavens2022</p>
    </fieldset>
    
  );
};

export default CalculatorInner;