import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
import BoardsLinks from './BoardsLinks';
import Logo from './Logo';
import { MdOutlineWbSunny, MdDarkMode } from 'react-icons/md';
import { BiHide } from 'react-icons/bi';
import Theme from './Theme';
const BigSidebar = () => {
  const { isSidebarOpen, allBoards, theme, toggleDarkMode } =
    useGlobalContext();

  React.useEffect(() => {
    document.documentElement.className = theme;
  });
  return (
    <Wrapper>
      <div
        className={
          !isSidebarOpen ? 'big-sidebar open-sidebar ' : 'big-sidebar '
        }
      >
        <div>
          <header>
            <Logo />
          </header>
          <h4>All Boards({allBoards.length})</h4>
          <div className='links'>
            <BoardsLinks />
          </div>
        </div>

        <Theme />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    .big-sidebar {
      width: 250px;
      background-color: var(--clr-white);
      min-height: 100vh;
      height: 100%;
      margin-left: -250px;
      transition: var(--transition);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .open-sidebar {
      margin-left: 0;
    }
    h4 {
      padding-left: 2.5rem;
      margin-top: 1rem;
      letter-spacing: 0.1rem;
      font-weight: 600;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 3rem;
      img {
        width: 8rem;
      }
    }
    .links {
      margin: 2rem 0;

      li {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 0.5rem;
        width: 90%;
        padding: 0.7rem 0;
        padding-left: 2.5rem;
        cursor: pointer;
        transition: all 0.3s linear;

        span {
          display: flex;
          align-items: center;
          font-size: 1.1rem;
        }
        svg {
          font-size: 1.3rem;
        }
      }
    }
    li:hover {
      padding-left: 3rem;
      border-left: 0.5rem solid var(--primary-800);
      width: 100%;
    }
    .add-task {
      color: var(--primary-800);
      cursor: pointer;
    }
    .plus {
      margin-right: 0.2rem;
      font-size: 1.4rem;
    }
  }
  .active {
    background-color: var(--primary-700);
    width: 90%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    color: var(--clr-white);
  }
`;
export default BigSidebar;
