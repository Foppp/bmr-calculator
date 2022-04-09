/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/react';
import AgeInput from './components/AgeInput.jsx';
import HeigthInput from './components/HeigthInput.jsx';
import WeightInput from './components/WeightInput.jsx';

const imputSteps = [
  { id: 1, name: 'Age', active: true },
  { id: 2, name: 'Height', active: false },
  { id: 3, name: 'Weight', active: false },
];

const forms = {
  1: AgeInput,
  2: HeigthInput,
  3: WeightInput,
};

const Calculator = () => {
  const [activeFormId, setActiveFormId] = useState(1);
  // const FormComponent = forms[activeFormId];

  // const nextStep = (steps) => {
  //   const step = activeFormId < steps.length ? activeFormId + 1 : activeFormId;
  //   setActiveFormId(step);
  // };

  // const prevStep = (steps) =>
  //   activeFormId === 1
  //     ? setActiveFormId(activeFormId)
  //     : setActiveFormId(activeFormId - 1);

  return (
    <div className='container'>
      {/* <FormComponent /> */}
      <button className='btn btn-primary' onClick={() => setActiveFormId(activeFormId + 1)}>
        Prev
      </button>
      <button
        className='btn btn-secondary'
        onClick={() => setActiveFormId(activeFormId - 1)}
      >
        Next
      </button>
      <p>{activeFormId}</p>
    </div>
  );
};

export default Calculator;
