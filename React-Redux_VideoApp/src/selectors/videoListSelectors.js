import { createSelector } from 'reselect';
import get from 'lodash/get';

export const videoListSelector = state => get(state, 'videoList');

export const filterConfigSelector = createSelector(
  [videoListSelector],
  videoList => get(videoList, 'filterConfig')
);

export const searchSelector = createSelector(
  [filterConfigSelector],
  filterConfig => get(filterConfig, 'search')
);

export const searchBySelector = createSelector(
  [filterConfigSelector],
  filterConfig => get(filterConfig, 'searchBy')
);

export const sortBySelector = createSelector(
  [filterConfigSelector],
  filterConfig => get(filterConfig, 'sortBy')
);

export const moviesSelector = createSelector([videoListSelector], videoList =>
  get(videoList, 'movies')
);

export const moviesDataSelector = createSelector([moviesSelector], movies =>
  get(movies, 'data', [])
);

export const videoListTotalSelector = createSelector([moviesSelector], movies =>
  get(movies, 'total')
);
