import * as types from './actionsTypes';

// Action functions
export function setBranches(branches) {
  return {
    type: types.SET_BRANCHES,
    payload: {
      branches,
    },
  };
}

export function setSuccessMessage(message) {
  return {
    type: types.SET_SUCCESS_MESSAGE,
    payload: {
      message,
    },
  };
}

export function setErrorMessage(message) {
  return {
    type: types.SET_ERROR_MESSAGE,
    payload: {
      message,
    },
  };
}

export function clearBranches() {
  return {
    type: types.CLEAR_BRANCHES,
    payload: {
      branches: [],
    },
  };
}

export function clearBranch() {
  return {
    type: types.CLEAR_BRANCH,
    payload: {
      branch: '',
    },
  };
}

export function clearEnvironment() {
  return {
    type: types.CLEAR_ENVIRONMENT,
    payload: {
      environment: '',
    },
  };
}

export function clearPlatform() {
  return {
    type: types.CLEAR_PLATFORM,
    payload: {
      platform: '',
    },
  };
}

export function clearSBI() {
  return {
    type: types.CLEAR_SBI,
    payload: {
      sbi: '',
    },
  };
}

export function selectBranch(branch) {
  return {
    type: types.SELECT_BRANCH,
    payload: {
      branch,
    },
  };
}

export function selectEnvironment(environment) {
  return {
    type: types.SELECT_ENVIRONMENT,
    payload: {
      environment,
    },
  };
}

export function selectPlatform(platform) {
  return {
    type: types.SELECT_PLATFORM,
    payload: {
      platform,
    },
  };
}

export function selectSBI(sbi) {
  return {
    type: types.SELECT_SBI,
    payload: {
      sbi,
    },
  };
}
