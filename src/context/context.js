import React, { useContext, useEffect, useReducer } from 'react';
import { reducer } from '../reducer/reducer';
import {
  TOGGLE_SIDEBAR,
  OPEN_ADD_BOARD,
  HANDLE_ADD_BOARD,
  SET_FILTERED_BOARD,
  HANDLE_FILTERED_BOARD,
  TOGGLE_NEW_COLUMN,
  HANDLE_NEW_COLUMN,
} from '../actions';
import { data } from '../utils/data';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
const KanbanContext = React.createContext();

const initialState = {
  isSidebarOpen: false,
  filteredBoard: {},
  allBoards: data,
  isAddBoardOpen: false,
  isAddNewColumn: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };
  const toggleAddBoard = () => {
    dispatch({ type: OPEN_ADD_BOARD });
  };
  const toggleAddNewColumn = () => {
    dispatch({ type: TOGGLE_NEW_COLUMN });
  };

  const handleAddBoard = (boardName) => {
    dispatch({ type: HANDLE_ADD_BOARD, payload: boardName });
  };

  const handleFilteredBoard = (val) => {
    dispatch({ type: HANDLE_FILTERED_BOARD, payload: val });
  };

  const handleNewColumn = (val) => {
    dispatch({ type: HANDLE_NEW_COLUMN, payload: val });
  };

  // useEffect(() => {
  //   setLocalStorage(state.allBoards);
  // }, [state.allBoards]);

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
        toggleAddNewColumn,
        handleNewColumn,
      }}
    >
      {children}
    </KanbanContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(KanbanContext);
};
