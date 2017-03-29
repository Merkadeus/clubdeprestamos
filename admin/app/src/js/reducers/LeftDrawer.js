import * as types from '../actions/actionsTypes';

const initialState = {
  drawerView: false,
};

function User(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_DRAWER :
      return {
        ...state,
        drawerView: !state.drawerView,
      };
    case types.CLEAR_DRAWER :
      return {
        ...state,
        drawerView: false,
      };
    default:
      return state;
  }
}

export default User;
