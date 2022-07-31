import React from 'react';
import { Board, CreateNewBoard } from '../components';
import { NewColumnForm } from '../components';
import AddNewTaskForm from '../components/AddNewTaskForm';

const Dashboard = () => {
  return (
    <>
      <Board />
      <CreateNewBoard />
      <NewColumnForm />
      <AddNewTaskForm />
    </>
  );
};

export default Dashboard;
