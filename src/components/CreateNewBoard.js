import React from 'react';
import { useGlobalContext } from '../context/context';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import FormRow from './FormRow';
const CreateNewBoard = () => {
  const { isAddBoardOpen, toggleAddBoard, handleAddBoard } = useGlobalContext();
  const [boardName, setBoardName] = React.useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!boardName) {
      toast.error('Board name must be provided');
      return;
    }
    handleAddBoard(boardName);
    setBoardName('');
  };

  const handleChange = (e) => {
    setBoardName(e.target.value);
  };

  return (
    <Wrapper>
      <div className={isAddBoardOpen ? 'add-board show' : 'add-board'}>
        <form onSubmit={handleSubmit}>
          <h3>Add new board</h3>
          <button
            type='button'
            className='btn close-btn'
            onClick={toggleAddBoard}
          >
            <MdClose />
          </button>
          <FormRow
            type='text'
            name='bordName'
            value={boardName}
            handleChange={handleChange}
            labelText='Board Name'
          />
          <button type='submit' className='btn submit-btn'>
            create board
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  .add-board {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.2);
    display: grid;
    place-items: center;
    z-index: -1;
    transform: scale(0);
    transition: var(--transition);
  }
  .show {
    z-index: 10;
    transform: scale(1);
  }
  h3 {
    font-weight: 600;
  }
  .close-btn {
    background-color: transparent;
    color: inherit;
    font-size: 2.2rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  form {
    width: 90vw;
    max-width: 30rem;
    background-color: var(--clr-white);
    padding: 3rem;
    position: relative;

    .submit-btn {
      width: 100%;
      height: 3rem;
    }
  }
`;

export default CreateNewBoard;
