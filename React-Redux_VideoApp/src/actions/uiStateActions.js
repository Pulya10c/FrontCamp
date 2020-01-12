const MODULE_NAME = 'UI';

export const START_FETCHING = `${MODULE_NAME}/START_FETCHING`;
export const FINISH_FETCHING = `${MODULE_NAME}/FINISH_FETCHING`;
export const SET_ERROR = `${MODULE_NAME}/SET_ERROR`;

export const startFetching = () => {
  return {
    type: START_FETCHING
  };
};

export const finishFetching = () => {
  return {
    type: FINISH_FETCHING
  };
};

export const setError = ({ name, message }) => {
  return {
    type: SET_ERROR,
    payload: {
      name,
      message
    }
  };
};
