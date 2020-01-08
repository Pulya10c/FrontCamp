import { createSelector } from 'reselect'
import get from 'lodash/get';

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
