import * as types from '../actions/actionsTypes';

const initialState = {
  selectedPage: 'Dashboard',
};

function General(state = initialState, action) {
  switch (action.type) {
    case types.SELECT_PAGE :
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default General;
