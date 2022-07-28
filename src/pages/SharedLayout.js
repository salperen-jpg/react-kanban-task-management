import React from 'react';
import { Outlet } from 'react-router-dom';
import { BigSidebar, Navbar, SmallSidebar } from '../components';
import styled from 'styled-components';

const SharedLayout = () => {
  return (
    <Wrapper>
      <main>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className='kanban'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  main {
    display: grid;
    grid-template-columns: 1fr;
  }
  .kanban {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    main {
      grid-template-columns: auto 1fr;
    }
    .kanban {
      width: 90%;
    }
  }
`;
export default SharedLayout;
