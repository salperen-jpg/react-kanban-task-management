import React from 'react';
import { FaAlignLeft } from 'react-icons/fa';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
import Logo from './Logo';
const Navbar = () => {
  const { toggleSidebar } = useGlobalContext();
  return (
    <Wrapper>
      <div className='nav-center'>
        <button className='btn toggle-sidebar' onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <h3>Dashboard</h3>
          <Logo />
        </div>

        <button className='btn'>Add task</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  background-color: var(--clr-white);
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-sidebar {
    background-color: transparent;
    color: var(--primary-600);
    font-size: 2rem;
  }
  h3 {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-center {
      width: 90%;
    }
    h3 {
      display: block;
      margin: 0;
      letter-spacing: 0.1rem;
    }
    img {
      display: none;
    }
  }
`;

export default Navbar;
