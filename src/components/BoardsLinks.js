import React from 'react';
import { BsListTask } from 'react-icons/bs';
import styled from 'styled-components';

import { useGlobalContext } from '../context/context';
const BoardsLinks = () => {
  const { allBoards, filteredBoard, toggleAddBoard, handleFilteredBoard } =
    useGlobalContext();
  return (
    <Wrapper>
      {allBoards.map(function (board) {
        return (
          <li
            key={board.id}
            className={
              filteredBoard.boardName === board.boardName ? 'active' : null
            }
            onClick={() => {
              handleFilteredBoard(board.boardName);
            }}
          >
            <BsListTask />
            <span>{board.boardName}</span>
          </li>
        );
      })}
      <li className='add-task' onClick={toggleAddBoard}>
        <BsListTask />
        <span>Create new Board</span>
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  .active {
    background-color: var(--primary-700);
    width: 90%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    color: var(--clr-white);
  }
`;

export default BoardsLinks;
