import {
  HANDLE_ADD_BOARD,
  HANDLE_FILTERED_BOARD,
  HANDLE_NEW_COLUMN,
  OPEN_ADD_BOARD,
  SET_FILTERED_BOARD,
  TOGGLE_ADD_TASK,
  TOGGLE_NEW_COLUMN,
  TOGGLE_SIDEBAR,
} from '../actions';

export const reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, isSidebarOpen: !state.isSidebarOpen };
  }
  if (action.type === OPEN_ADD_BOARD) {
    return { ...state, isAddBoardOpen: !state.isAddBoardOpen };
  }
  if (action.type === SET_FILTERED_BOARD) {
    return { ...state, filteredBoard: state.allBoards[0] };
  }
  if (action.type === HANDLE_ADD_BOARD) {
    const boardName = action.payload;
    const newBoard = {
      id: state.allBoards.length + 1,
      boardName,
      tasks: [],
    };
    return {
      ...state,
      allBoards: [...state.allBoards, newBoard],
      isAddBoardOpen: false,
    };
  }
  if (action.type === HANDLE_FILTERED_BOARD) {
    const singleBoard = state.allBoards.find(
      (single) => single.boardName === action.payload
    );
    console.log(singleBoard);
    return { ...state, filteredBoard: singleBoard };
  }
  if (action.type === TOGGLE_NEW_COLUMN) {
    return { ...state, isAddNewColumn: !state.isAddNewColumn };
  }
  if (action.type === HANDLE_NEW_COLUMN) {
    const columnName = action.payload;
    console.log(state.filteredBoard.categories);
    return {
      ...state,
      filteredBoard: {
        ...state.filteredBoard,
        categories: [...state.filteredBoard.categories, columnName],
      },
    };
  }
  if (action.type === TOGGLE_ADD_TASK) {
    return { ...state, isAddTaskOpen: !state.isAddTaskOpen };
  }
  throw new Error(`The action type ${action.type} could not find`);
};
