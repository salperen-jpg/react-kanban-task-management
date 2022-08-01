import React from 'react';
import { BsListTask } from 'react-icons/bs';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { useGlobalContext } from '../context/context';
const BoardsLinks = ({ sidebarlink }) => {
  const handleSmallSidebar = () => {
    toggleSidebar();
  };

  const {
    allBoards,
    filteredBoard,
    toggleAddBoard,
    handleFilteredBoard,
    toggleSidebar,
  } = useGlobalContext();
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
              if (sidebarlink) {
                handleSmallSidebar();
              }
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
  .add-task {
    color: green;
    cursor: pointer;
    display: flex;
  }
`;

export default BoardsLinks;
