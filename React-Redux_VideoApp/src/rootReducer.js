import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import videoListReducer from 'reducers/videoListReducer';
import currentVideoReducer from 'reducers/currentVideoReducer';
import uiStateReducer from 'reducers/uiStateReducer';

export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  uiState: uiStateReducer,
  videoList: videoListReducer,
  currentVideo: currentVideoReducer
});
