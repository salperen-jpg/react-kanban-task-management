import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';

const AddNewColumn = () => {
  return (
    <Wrapper>
      <button className='btn'>
        <AiOutlinePlus />
        Add new Column
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  border-radius: var(--radius);
  display: grid;
  place-items: center;
  background-color: var(--clr-white);
  button {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: transparent;
    color: inherit;
  }
`;
export default AddNewColumn;
