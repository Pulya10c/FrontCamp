import { createSelector } from 'reselect'
import get from 'lodash/get';
import { PATHS } from 'src/constants'

export const routerSelector = state => get(state, 'router');

export const locationSelector = createSelector(
  [routerSelector],
  router => get(router, 'location')
);

export const routerSearchSelector = createSelector(
  [locationSelector],
  location => get(location, 'search')
);

export const pathNameSelector = createSelector(
  [locationSelector],
  location => get(location, 'pathname')
);


export const isVideoListPath = createSelector(
  [locationSelector],
  location => get(location, 'pathname') === PATHS.VIDEO_LIST_PAGE
);

