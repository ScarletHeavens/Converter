import React from 'react';

const Calculator = () => {
let [input, setInput] = React.useState('');
let [value, setValue] = React.useState('');
let result;

const handleInput = (val) => { 
    const reg = /^[0-9'\b]+$/;
    if (!val || reg.test(val)) {
       setInput(val);
     }
}

const handleChange = (val) => {
    setValue(val);
}
const handleClick = () => {
switch(value){
    case " F to C":
        result = (input - 32) * 5 / 9;
        break;
    case " C to F":
        result = (input * 9 / 5) + 32;
        break;
    case  " Cm to Ft":
        result =  (input/30.48);
        break;
    case " Ft to Cm":
            result = (input * 30.48);
            break;
} return result;
}

  return(
       <fieldset> 
          <legend>What would you like to convert?</legend>
        <select  value={value} 
        onChange={e => handleChange(e.target.value)} > 
            <option value =" F to C">°F to °C</option>
            <option value =" C to F">°C to °F</option>
            <option value =" Ft to Cm">Ft to Cm</option>
            <option value =" Cm to Ft">Cm to Ft</option>
        </select>
        <input placeholder = {0} value={input} onChange = {e => handleInput(e.target.value)}/> 
         <button onClick = {handleClick()}>Calculate</button> 
         <div>Your result is {result}</div>
       </fieldset>
    )
}

export default Calculator;