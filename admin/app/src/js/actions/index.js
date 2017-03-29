import * as types from './actionsTypes';

export function login(credentials) {
  return dispatch => {
    if (credentials.username && credentials.password) {
      const user = {
        name: 'Randall',
        lastName: 'Sánchez',
      };
      dispatch({
        type: types.SUCCESS_LOGIN,
        payload: {
          auth: true,
          user,
        },
      });
    } else {
      const error = {
        message: 'Error login',
      };
      dispatch({
        type: types.ERROR_LOGIN,
        payload: {
          error,
        },
      });
    }
  };
}

export function toggleDrawer() {
  return dispatch => {
    dispatch({
      type: types.TOGGLE_DRAWER,
    });
  };
}
