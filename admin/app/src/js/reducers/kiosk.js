import * as types from '../actions/actionsTypes';

const initialState = {
  // TODO replace this with the kiosk->reducer->branches
  branches: [
    {key: 'b1', value: 'b1', text: 'branch1'},
    {key: 'b2', value: 'b2', text: 'branch2'},
    {key: 'b3', value: 'b3', text: 'branch3'},
  ],
  branch: '', // Branch selected
  environments: [
    {key: 'qa', value: 'qa', text: 'qa'},
    {key: 'uat', value: 'uat', text: 'uat'},
    {key: 'dev', value: 'dev', text: 'dev'},
    {key: 'prod', value: 'prod', text: 'prod'},
  ],
  environment: '', // Environment selected
  loading: false,
  message: {},
  platforms: ['android', 'ios'],
  platform: '', // Platform selected
  sbis: [
    {key: 'dh', value: 'dh', text: 'Davita Home'},
    {key: 'vh', value: 'vh', text: 'Village Home'},
    {key: 'p1', value: 'p1', text: 'Pilot1'},
    {key: 'p2', value: 'p2', text: 'Pilot2'},
    {key: 'dmgnm', value: 'dmgnm', text: 'New Mexico'},
  ],
  sbi: '', // SBI selected
};

function kiosk(state = initialState, action) {
  switch (action.type) {
    case types.SET_BRANCHES :
    case types.CLEAR_BRANCHES :
    case types.SELECT_BRANCH :
    case types.CLEAR_BRANCH :
    case types.SELECT_ENVIRONMENT :
    case types.CLEAR_ENVIRONMENT :
    case types.TOGGLE_LOADING :
    case types.SET_SUCCESS_MESSAGE :
    case types.SET_ERROR_MESSAGE :
    case types.SELECT_PLATFORM :
    case types.CLEAR_PLATFORM :
    case types.SELECT_SBI :
    case types.CLEAR_SBI :
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default kiosk;
