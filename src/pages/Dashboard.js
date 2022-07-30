import React from 'react';
import { Board, CreateNewBoard } from '../components';
import { NewColumnForm } from '../components';

const Dashboard = () => {
  return (
    <>
      <Board />
      <CreateNewBoard />
      <NewColumnForm />
    </>
  );
};

export default Dashboard;
