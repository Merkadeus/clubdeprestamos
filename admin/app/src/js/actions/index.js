import * as types from './actionsTypes';

export function login(credentials) {
  return dispatch => {
    if (credentials.username && credentials.password) {
      const user = {
        name: 'Randall',
        lastName: 'Sánchez',
      };
      sessionStorage.setItem('auth', true);
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

export function setInvestors(investors) {
  return dispatch => {
    dispatch({
      type: types.SET_INVESTORS,
      payload: {
        investors,
      },
    });
  };
}

export function setReadInvestors() {
  return dispatch => {
    dispatch({
      type: types.SET_READ_INVESTORS,
    });
  };
}

export function clearInvestors() {
  return dispatch => {
    dispatch({
      type: types.CLEAR_INVESTORS,
      payload: {
        investors: {},
      },
    });
  };
}

export function setLoans(loans) {
  return dispatch => {
    dispatch({
      type: types.SET_LOANS,
      payload: {
        loans,
      },
    });
  };
}

export function setReadLoans() {
  return dispatch => {
    dispatch({
      type: types.SET_READ_LOANS,
    });
  };
}

export function clearLoans() {
  return dispatch => {
    dispatch({
      type: types.CLEAR_LOANS,
      payload: {
        loans: {},
      },
    });
  };
}

export function selectPage(selectedPage) {
	return dispatch => {
		dispatch({
			type: types.SELECT_PAGE,
			payload: {
				selectedPage,
			},
		});
	};
}

export function setDataTableData(data) {
	return dispatch => {
		dispatch({
			type: types.SET_DATA_TABLE_DATA,
			payload: {
				data,
			},
		});
	};
}

export function clearDataTableData() {
	return dispatch => {
		dispatch({
			type: types.CLEAR_DATA_TABLE_DATA,
			payload: {
				data: [],
			},
		});
	};
}
