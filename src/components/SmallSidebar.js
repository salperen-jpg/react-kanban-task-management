import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { useGlobalContext } from '../context/context';
const SmallSidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();
  return (
    <Wrapper>
      <div className={isSidebarOpen ? 'sidebar open-sidebar' : 'sidebar'}>
        <div className='content'>
          <button className='btn close-btn' onClick={toggleSidebar}>
            <MdClose />
          </button>
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
    height: 90%;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;
export default SmallSidebar;
