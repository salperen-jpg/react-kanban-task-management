import React, { useContext, useEffect, useReducer } from 'react';
import { reducer } from '../reducer/reducer';
import { TOGGLE_SIDEBAR } from '../actions';
import { data } from '../utils/data';
const KanbanContext = React.createContext();

const initialState = {
  isSidebarOpen: false,
  filteredBoard: data[1],
  allBoards: data,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  return (
    <KanbanContext.Provider value={{ ...state, toggleSidebar }}>
      {children}
    </KanbanContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(KanbanContext);
};
