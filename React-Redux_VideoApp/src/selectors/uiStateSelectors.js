import { createSelector } from 'reselect'
import get from 'lodash/get';

export const uiStateSelector = state => get(state, 'uiState');

export const fetchingSelector = createSelector(
  [ uiStateSelector ],
  uiState => get(uiState, 'fetching', false)
);

export const errorSelector = createSelector(
  [ uiStateSelector ],
  uiState => get(uiState, 'error', null)
);

