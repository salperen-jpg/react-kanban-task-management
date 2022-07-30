import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/context';
import { getCategories, getTasks } from '../utils/helpers';
import { Status } from '../components';
import styled from 'styled-components';
import AddNewColumn from './AddNewColumn';

const Board = () => {
  const { filteredBoard } = useGlobalContext();
  useEffect(() => {
    if (Object.keys(filteredBoard).length === 0) return;
  }, [filteredBoard]);

  if (filteredBoard?.tasks?.length === 0) {
    return <h3>There is no board right now </h3>;
  }
  return (
    <Wrapper>
      {filteredBoard?.categories?.map((stat, index) => {
        return (
          <Status
            key={index}
            stat={stat}
            tasks={getTasks(filteredBoard.tasks, stat)}
          />
        );
      })}
      <div className='status'>
        <AddNewColumn />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  gap: 3rem;
  .status {
    flex: 0 0 300px;
  }
`;

export default Board;
