import * as types from '../actions/actionsTypes';

const initialState = {
  data: [
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

function DataTables(state = initialState, action) {
  switch (action.type) {
    case types.SET_DATA_TABLE_DATA :
		case types.CLEAR_DATA_TABLE_DATA :
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default DataTables;
