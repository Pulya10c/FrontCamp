import {
  START_FETCHING,
  FINISH_FETCHING,
  SET_ERROR
} from 'actions/uiStateActions';

export const initialState = {
  error: null,
  fetching: false
};

const ACTION_HANDLERS = {
  [START_FETCHING]: state => {
    return {
      ...state,
      fetching: true
    };
  },
  [FINISH_FETCHING]: state => {
    return {
      ...state,
      fetching: false
    };
  },
  [SET_ERROR]: (state, { payload }) => {
    return {
      ...state,
      error: { ...payload }
    };
  }
};

const uiStateReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export default uiStateReducer;
