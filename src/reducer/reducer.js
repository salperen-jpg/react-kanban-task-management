import { TOGGLE_SIDEBAR } from '../actions';

export const reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, isSidebarOpen: !state.isSidebarOpen };
  }
  throw new Error(`The action type ${action.type} could not find`);
};
