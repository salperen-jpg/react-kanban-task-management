import { data } from './data';
export const setLocalStorage = (boards) => {
  localStorage.setItem('boards', JSON.stringify(boards));
};

export const getLocalStorage = () => {
  return localStorage.getItem('boards')
    ? JSON.parse(localStorage.getItem('boards'))
    : data;
};
