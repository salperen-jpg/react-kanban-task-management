import React, { useContext, useEffect, useReducer } from 'react';
import { reducer } from '../reducer/reducer';
import {
  TOGGLE_SIDEBAR,
  OPEN_ADD_BOARD,
  HANDLE_ADD_BOARD,
  SET_FILTERED_BOARD,
  HANDLE_FILTERED_BOARD,
} from '../actions';

import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
const KanbanContext = React.createContext();

const initialState = {
  isSidebarOpen: false,
  filteredBoard: {},
  allBoards: getLocalStorage(),
  isAddBoardOpen: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };
  const toggleAddBoard = () => {
    dispatch({ type: OPEN_ADD_BOARD });
  };

  const handleAddBoard = (boardName) => {
    dispatch({ type: HANDLE_ADD_BOARD, payload: boardName });
  };

  const handleFilteredBoard = (val) => {
    dispatch({ type: HANDLE_FILTERED_BOARD, payload: val });
  };

  useEffect(() => {
    setLocalStorage(state.allBoards);
  }, [state.allBoards]);

  useEffect(() => {
    dispatch({ type: SET_FILTERED_BOARD });
  }, []);

  return (
    <KanbanContext.Provider
      value={{
        ...state,
        toggleSidebar,
        toggleAddBoard,
        handleAddBoard,
        handleFilteredBoard,
      }}
    >
      {children}
    </KanbanContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(KanbanContext);
};
