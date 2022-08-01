import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { useGlobalContext } from '../context/context';
import BoardsLinks from './BoardsLinks';
import Theme from './Theme';
const SmallSidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();
  return (
    <Wrapper>
      <div className={isSidebarOpen ? 'sidebar open-sidebar' : 'sidebar'}>
        <div className='content'>
          <button className='btn close-btn' onClick={toggleSidebar}>
            <MdClose />
          </button>
          <div className='small-sidebar-links'>
            <BoardsLinks sidebarlink />
          </div>
          <Theme />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  .sidebar {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    display: grid;
    place-items: center;
  }
  .open-sidebar {
    visibility: visible;
    opacity: 1;
  }
  .content {
    background-color: var(--clr-white);
    width: 90%;
    max-width: 500px;
    height: 90%;
    position: relative;
    padding: 7rem;
    .close-btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background-color: transparent;
      padding: 0;
      font-size: 2.5rem;
      color: inherit;
    }

    .small-sidebar-links {
      margin-bottom: 7rem;
      li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
        background-color: transparent;
        font-size: 1.3rem;
        cursor: pointer;
      }
      .add-task {
        display: flex;
        align-items: center;
        background-color: var(--cl);
      }
      .active {
        color: var(--primary-500);
      }
    }
  }

  @media (min-width: 992px) {
    display: none;
  }
`;
export default SmallSidebar;
