import React from 'react';

const FormRow = ({ type, name, value, onChange, handleChange, labelText }) => {
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
