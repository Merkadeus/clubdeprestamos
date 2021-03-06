import * as types from '../actions/actionsTypes';

const initialState = {
  pending: 5,
	investors: [
		{
			id: 1,
			name: 'Randall',
			lastName: 'Sánchez Araya',
			cellphone: '87108517',
			signupDate: '26-03-2017',
		},
		{
			id: 2,
			name: 'Johan',
			lastName: 'Blanco',
			cellphone: '88888888',
			signupDate: '26-03-2017',
		},
		{
			id: 3,
			name: 'Ricardo',
			lastName: 'Bbbbbbb',
			cellphone: '88888888',
			signupDate: '26-03-2017',
		},
		{
			id: 4,
			name: 'Ccccccc',
			lastName: 'Ddddddd',
			cellphone: '88888888',
			signupDate: '26-03-2017',
		},
		{
			id: 5,
			name: 'Eeeeeeee',
			lastName: 'Ffffffff',
			cellphone: '88888888',
			signupDate: '26-03-2017',
		},
		{
			id: 6,
			name: 'Ggggggg',
			lastName: 'Hhhhhhhh',
			cellphone: '88888888',
			signupDate: '26-03-2017',
		},
		{
			id: 7,
			name: 'Iiiiiiii',
			lastName: 'Jjjjjjjjj',
			cellphone: '88888888',
			signupDate: '26-03-2017',
		},
	],
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
