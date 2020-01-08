import has from 'lodash/has';

import { filterConfigSelector } from 'selectors/videoListSelectors';
import QueryStringGenerator from 'services/QueryStringGenerator';
import RequestService from 'services/RequestService';
import * as uiActions from 'actions/uiStateActions';
import { goTo } from 'actions/routerActions';
import { routerSearchSelector } from 'selectors/routerSelectors';
import { PATHS, API } from 'src/constants';

const MODULE_NAME = 'VIDEO_LIST';

export const SET_SEARCH_VALUE = `${MODULE_NAME}/SET_SEARCH_VALUE`;
export const SET_SEARCH_BY_VALUE = `${MODULE_NAME}/SET_SEARCH_BY_VALUE`;
export const SET_SORT_ORDER_VALUE = `${MODULE_NAME}/SET_SORT_ORDER_VALUE`;
export const SET_SORT_BY_VALUE = `${MODULE_NAME}/SET_SORT_BY_VALUE`;
export const SET_OFFSET_VALUE = `${MODULE_NAME}/SET_OFFSET_VALUE`;
export const SET_LIMIT_VALUE = `${MODULE_NAME}/SET_LIMIT_VALUE`;

export const SAVE_MOVIES = `${MODULE_NAME}/SAVE_MOVIES`;
export const UPDATE_FILTER_FROM_SEARCH_PARAMS = `${MODULE_NAME}/UPDATE_FILTER_FROM_SEARCH_PARAMS`;

export const updateFilterConfigBy = {
  [API.SEARCH_BY]: value => ({
    type: SET_SEARCH_BY_VALUE,
    payload: value
  }),
  [API.SEARCH]: value => ({
    type: SET_SEARCH_VALUE,
    payload: value
  }),
  [API.SORT_ORDER]: value => ({
    type: SET_SORT_ORDER_VALUE,
    payload: value
  }),
  [API.SORT_BY]: value => ({
    type: SET_SORT_BY_VALUE,
    payload: value
  }),
  [API.OFFSET]: value => ({
    type: SET_OFFSET_VALUE,
    payload: value
  }),
  [API.LIMIT]: value => ({
    type: SET_LIMIT_VALUE,
    payload: value
  })
};

export const setSortOrderValue = value => {
  return {
    type: SET_SORT_ORDER_VALUE,
    payload: value
  };
};

export const saveMovies = movies => {
  return {
    type: SAVE_MOVIES,
    payload: movies
  };
};

export const updateFilterFromSearchParams = () => {
  return {
    type: UPDATE_FILTER_FROM_SEARCH_PARAMS
  };
};

export const createSearch = () => (dispatch, getState) => {
  try {
    const state = getState();
    const filterConfig = filterConfigSelector(state);
    const searchStr = QueryStringGenerator.getSearchStr(filterConfig);
    goTo(PATHS.VIDEO_LIST_PAGE, searchStr);
    dispatch(fetchMovies());
  } catch (error) {
    console.error(error);
    dispatch(uiActions.setError(error));
  }
};

const updateFilterConfigInOrderToSearchParams = (
  searchStr,
  filterConfig
) => dispatch => {
  const searchParams = new URLSearchParams(searchStr);

  for (const [key, value] of searchParams) {
    if (has(filterConfig, key) && filterConfig[key] !== value) {
      dispatch(updateFilterFromSearchParams());
      dispatch(updateFilterConfigBy[key](value));
    }
  }
};

export const fetchMovies = () => async (dispatch, getState) => {
  try {
    dispatch(uiActions.startFetching());
    const state = getState();
    const searchStr = routerSearchSelector(state);
    const filterConfig = filterConfigSelector(state);
    dispatch(updateFilterConfigInOrderToSearchParams(searchStr, filterConfig));

    const queryString = QueryStringGenerator.getUrlForRequest(searchStr);
    const movies = await RequestService.getResponse(queryString);
    dispatch(uiActions.finishFetching());
    dispatch(saveMovies(movies));
  } catch (error) {
    console.error(error);
    dispatch(uiActions.setError(error));
  }
};
