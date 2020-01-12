import {
  SET_SEARCH_VALUE,
  SET_SEARCH_BY_VALUE,
  SET_SORT_ORDER_VALUE,
  SET_SORT_BY_VALUE,
  SET_OFFSET_VALUE,
  SET_LIMIT_VALUE,
  SAVE_MOVIES
} from 'actions/videoListActions';
import { DESCENDING, TITLE, API, RELEASE_DATE } from 'src/constants';

export const initialState = {
  movies: {},
  filterConfig: {
    [API.SEARCH]: '',
    [API.SEARCH_BY]: TITLE.code,
    [API.SORT_ORDER]: DESCENDING,
    [API.SORT_BY]: RELEASE_DATE.code,
    [API.OFFSET]: 0,
    [API.LIMIT]: 15
  }
};

const ACTION_HANDLERS = {
  [SET_SEARCH_VALUE]: (state, { payload }) => {
    return {
      ...state,
      filterConfig: {
        ...state.filterConfig,
        [API.SEARCH]: payload
      }
    };
  },
  [SET_SEARCH_BY_VALUE]: (state, { payload }) => {
    return {
      ...state,
      filterConfig: {
        ...state.filterConfig,
        [API.SEARCH_BY]: payload
      }
    };
  },
  [SET_SORT_ORDER_VALUE]: (state, { payload }) => {
    return {
      ...state,
      filterConfig: {
        ...state.filterConfig,
        [API.SORT_ORDER]: payload
      }
    };
  },
  [SET_SORT_BY_VALUE]: (state, { payload }) => {
    return {
      ...state,
      filterConfig: {
        ...state.filterConfig,
        [API.SORT_BY]: payload
      }
    };
  },
  [SET_OFFSET_VALUE]: (state, { payload }) => {
    return {
      ...state,
      filterConfig: {
        ...state.filterConfig,
        [API.OFFSET]: payload
      }
    };
  },
  [SET_LIMIT_VALUE]: (state, { payload }) => {
    return {
      ...state,
      filterConfig: {
        ...state.filterConfig,
        [API.LIMIT]: payload
      }
    };
  },
  [SAVE_MOVIES]: (state, { payload }) => {
    return {
      ...state,
      movies: payload
    };
  }
};

const videoListReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export default videoListReducer;
