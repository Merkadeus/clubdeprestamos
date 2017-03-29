import * as types from '../actions/actionsTypes';

const initialState = {
  auth: false,
  user: {},
};

function User(state = initialState, action) {
  switch (action.type) {
    case types.SUCCESS_LOGIN :
    case types.SUCCESS_LOGOUT :
    case types.ERROR_LOGIN :
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default User;
