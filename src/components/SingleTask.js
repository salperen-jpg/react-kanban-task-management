import React from 'react';
import styled from 'styled-components';

const SingleTask = ({ id, task, text, category, createdAt }) => {
  return (
    <Wrapper>
      <p>{task}</p>
      <span>{text}</span>
      <small>{createdAt}</small>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background-color: var(--clr-white);
  padding: 1rem;

  box-shadow: var(--shadow);
  border-radius: var(--radius);
  transition: var(--transition);
  p {
    letter-spacing: 0.1rem;
    margin-bottom: 0.75rem;
    color: var(--grey-700);
    font-weight: 600;
  }
  span {
    font-size: 0.8rem;
    line-height: 1.7;
    letter-spacing: 1px;
  }
  small {
    margin-top: 1rem;
    display: block;
    text-align: right;

    color: var(--primary-500);
  }
  &:hover {
    box-shadow: var(--shadow-darker);
  }
`;

export default SingleTask;
