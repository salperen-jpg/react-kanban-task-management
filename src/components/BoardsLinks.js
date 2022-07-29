import React from 'react';
import { BsListTask, BsPlus } from 'react-icons/bs';

import { useGlobalContext } from '../context/context';
const BoardsLinks = () => {
  const { allBoards, toggleAddBoard } = useGlobalContext();
  return (
    <ul>
      {allBoards.map(function (board) {
        return (
          <li key={board.id}>
            <BsListTask />
            <span>{board.boardName}</span>
          </li>
        );
      })}
      <li className='add-task' onClick={toggleAddBoard}>
        <BsListTask />
        <span>Create new Board</span>
      </li>
    </ul>
  );
};

export default BoardsLinks;
