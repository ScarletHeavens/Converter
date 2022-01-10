import React from 'react';

const Calculator = () => {
  let [input, setInput] = React.useState("");
  let [value, setValue] = React.useState(" F to C");
  let result = 0;

  const handleInput = (val) => {
    const reg = /^[0-9'.\b]+$/;
    if (!val || reg.test(val)) {
      setInput(val);
    }
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
        result = input === 0 ? 0 : parseInt(input) * 2.54;
        break;
     default:
    return result; }};

  let validator = () => {
    return result === 0 || result === 32
      ? result
      : !Number(result)
      ? " in inches? Insert a valid number."
      : result.toFixed(2);
  };

  return (
    <fieldset>
      <legend>What would you like to convert?</legend>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={handleClick()}
      >
        <option value=" F to C">°F to °C</option>
        <option value=" C to F">°C to °F</option>
        <option value=" Ft to Cm">Ft to Cm</option>
        <option value=" Cm to Ft">Cm to Ft</option>
        <option value=" Inch to Cm">Inch to Cm</option>
      </select>
      <input
        placeholder={0}
        value={input}
        onChange={(e) => handleInput(e.target.value)}
      />
      <div>Your result is {validator()}</div>
      <button onClick = {() => setInput('')}>Clear</button>
    </fieldset>
  );
};

export default Calculator;