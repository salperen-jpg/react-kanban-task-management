import React from 'react';
import { useGlobalContext } from '../context/context';
import styled from 'styled-components';
import FormRow from './FormRow';
import { MdClose } from 'react-icons/md';

const AddNewTaskForm = () => {
  const { filteredBoard, toggleAddTask } = useGlobalContext();
  const [task, setTask] = React.useState({
    taskName: '',
    taskDescription: '',
    category: '',
    priority: '',
  });
  const { isAddTaskOpen } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  return (
    <Wrapper>
      <div className={isAddTaskOpen ? 'task show' : 'task'}>
        <div className='content'>
          <button className='close-btn btn' onClick={toggleAddTask}>
            <MdClose />
          </button>
          <h3>Add new Task</h3>
          <form onSubmit={handleSubmit}>
            <FormRow
              type='text'
              name='taskName'
              value={task.taskName}
              handleChange={handleChange}
              labelText='Task Name'
            />
            <FormRow
              type='text'
              name='taskDescription'
              value={task.taskDescription}
              handleChange={handleChange}
              labelText='Task Description'
            />
            <FormRow
              type='number'
              name='priority'
              value={task.priority}
              handleChange={handleChange}
              labelText='Task Priority'
            />
            <div className='form-row'>
              <label htmlFor='category'>Category</label>
              <select
                name='category'
                value={task.category}
                id='category'
                onChange={handleChange}
                className='select-input'
              >
                {filteredBoard?.categories?.map((cate, index) => {
                  return (
                    <option value={cate} key={index}>
                      {cate}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className='form-row'>
              <button className='submit-btn btn'>Add Task</button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  .task {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.2);
    display: grid;
    place-items: center;
    transition: var(--transition);
    opacity: 0;
    z-index: -1;
  }
  .show {
    opacity: 1;
    z-index: 4;
  }
  .content {
    background-color: var(--clr-white);
    padding: 3rem;
    position: relative;
    width: 90vw;
    max-width: 40rem;
  }
  .close-btn {
    background-color: transparent;
    color: inherit;
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
  }
  .select-input {
    height: 3rem;
    width: 100%;
    margin-bottom: 0.5rem;
    outline: none;
    border: 1px solid var(--grey-300);
    border-radius: 10px;
    padding: 0.5rem 0.7rem;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    color: inherit;
  }
  .submit-btn {
    width: 100%;
    height: 3rem;
  }
  @media (min-width: 800px) {
    form {
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default AddNewTaskForm;
