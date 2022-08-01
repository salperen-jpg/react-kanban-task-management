import React from 'react';
import { useGlobalContext } from '../context/context';
import { MdOutlineWbSunny, MdDarkMode } from 'react-icons/md';
import styled from 'styled-components';
const Theme = () => {
  const { theme, toggleDarkMode } = useGlobalContext();

  React.useEffect(() => {
    document.documentElement.className = theme;
  });
  return (
    <Wrapper>
      <div className='theme'>
        {theme === 'light-theme' ? (
          <button className='btn theme-btn' onClick={toggleDarkMode}>
            <MdDarkMode />
          </button>
        ) : (
          <button className='btn theme-btn' onClick={toggleDarkMode}>
            <MdOutlineWbSunny />
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .theme {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .theme-btn {
    color: var(--gray-500);
    background-color: transparent;
    font-size: 3rem;
    padding: 0;
    display: block;
  }
`;

export default Theme;
