import React from 'react';

const FormRow = ({ type, name, value, handleChange, labelText, min, max }) => {
  if (min && max) {
    return (
      <div className='form-row'>
        <label htmlFor=''>{labelText ? labelText : name}</label>
        <input
          type={type}
          className='form-input'
          name={name}
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
        />
      </div>
    );
  }

  return (
    <div className='form-row'>
      <label htmlFor=''>{labelText ? labelText : name}</label>
      <input
        type={type}
        className='form-input'
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;
