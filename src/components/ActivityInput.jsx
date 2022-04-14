import React from 'react';

const ActivityInput = () => {
  return (
    <div className='col-12'>
      <label htmlFor='inputState' className='form-label'>
        Exercises
      </label>
      <select id='inputState' className='form-select' defaultValue={1}>
        <option value='1' disabled>
          Choose...
        </option>
        <option value='2'>1</option>
      </select>
    </div>
  );
};

export default ActivityInput;
