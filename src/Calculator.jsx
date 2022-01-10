import React from 'react';
import Bubbles from './Bubbles';
import CalculatorInner from './CalculatorInner';

const Calculator = () => {
  return (
    <div>
      <Bubbles />
      <Bubbles />
      <Bubbles />
      <Bubbles />
      <Bubbles />
      <CalculatorInner />
    </div>
  );
};

export default Calculator;