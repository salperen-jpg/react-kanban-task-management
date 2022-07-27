import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
import Logo from './Logo';
const BigSidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();

  return (
    <Wrapper>
      <div
        className={
          !isSidebarOpen ? 'big-sidebar open-sidebar ' : 'big-sidebar '
        }
      >
        <header>
          <Logo />
        </header>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;

    .big-sidebar {
      width: 225px;
      background-color: var(--clr-white);
      min-height: 100vh;
      height: 100%;
      margin-left: -225px;
      transition: var(--transition);
    }
    .open-sidebar {
      margin-left: 0;
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
  }
`;
export default BigSidebar;
