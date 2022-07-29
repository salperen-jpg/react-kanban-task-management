import React from 'react';
import SingleTask from './SingleTask';
import styled from 'styled-components';

const Status = ({ stat, tasks }) => {
  return (
    <Wrapper className='status'>
      <header>
        <h4>
          {stat}({tasks.length})
        </h4>
        <div className='circle'></div>
      </header>
      <div className='all-tasks'>
        {tasks.map((task) => {
          return <SingleTask key={task.id} {...task} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  header {
    display: flex;
    margin-bottom: 1rem;
    gap: 1rem;
    align-items: center;
    h4 {
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      font-weight: 600;
    }
    .circle {
      height: 0.9rem;
      width: 0.9rem;
      background-color: black;
      border-radius: 50%;
    }
  }
  .all-tasks {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
export default Status;
