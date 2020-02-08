import { SAVE_FILM } from 'actions/currentVideoActions';

export const initialState = {};

const ACTION_HANDLERS = {
  [SAVE_FILM]: (state, { payload }) => {
    return {
      ...payload
    };
  }
};

const currentVideoReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export default currentVideoReducer;
