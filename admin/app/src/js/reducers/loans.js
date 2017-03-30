import * as types from '../actions/actionsTypes';

const initialState = {
  pending: 5,
};

function Loans(state = initialState, action) {
  switch (action.type) {
    case types.SET_LOANS :
    case types.CLEAR_LOANS :
      return {
        ...state,
        ...action.payload,
      };
    case types.SET_READ_LOANS :
      return {
        ...state,
        pending: 0,
      };
    default:
      return state;
  }
}

export default Loans;
