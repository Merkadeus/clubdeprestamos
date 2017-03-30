import * as types from '../actions/actionsTypes';

const initialState = {
  pending: 5,
};

function User(state = initialState, action) {
  switch (action.type) {
    case types.SET_INVESTORS :
    case types.CLEAR_INVESTORS :
      return {
        ...state,
        ...action.payload,
      };
    case types.SET_READ_INVESTORS :
      return {
        ...state,
        pending: 0,
      };
    default:
      return state;
  }
}

export default User;
