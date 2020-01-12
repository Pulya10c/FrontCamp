import videoListReducer, { initialState } from 'reducers/videoListReducer';
import { DESCENDING, TITLE, API, RELEASE_DATE } from 'src/constants';
import * as VideoListActions from 'actions/videoListActions';

const state = undefined;

describe('Test videoListReducer', () => {
  it('case SAVE_MOVIES', () => {
    const action = VideoListActions._saveMovies({ test: 'test' });
    expect(videoListReducer(state, action)).toEqual({
      ...initialState,
      movies: { test: 'test' }
    });
  });

  it('case SET_SEARCH_BY_VALUE', () => {
    const action = VideoListActions.updateFilterConfigBy[API.SEARCH_BY]('test');
    expect(videoListReducer(state, action)).toEqual({
      ...initialState,
      filterConfig: {
        ...initialState.filterConfig,
        [API.SEARCH_BY]: 'test'
      }
    });
  });

  it('case SET_SEARCH_VALUE', () => {
    const action = VideoListActions.updateFilterConfigBy[API.SEARCH]('test');
    expect(videoListReducer(state, action)).toEqual({
      ...initialState,
      filterConfig: {
        ...initialState.filterConfig,
        [API.SEARCH]: 'test'
      }
    });
  });

  it('case SET_SORT_ORDER_VALUE', () => {
    const action = VideoListActions.updateFilterConfigBy[API.SORT_ORDER](
      'test'
    );
    expect(videoListReducer(state, action)).toEqual({
      ...initialState,
      filterConfig: {
        ...initialState.filterConfig,
        [API.SORT_ORDER]: 'test'
      }
    });
  });

  it('case SET_SORT_BY_VALUE', () => {
    const action = VideoListActions.updateFilterConfigBy[API.SORT_BY]('test');
    expect(videoListReducer(state, action)).toEqual({
      ...initialState,
      filterConfig: {
        ...initialState.filterConfig,
        [API.SORT_BY]: 'test'
      }
    });
  });

  it('case SET_OFFSET_VALUE', () => {
    const action = VideoListActions.updateFilterConfigBy[API.OFFSET](10);
    expect(videoListReducer(state, action)).toEqual({
      ...initialState,
      filterConfig: {
        ...initialState.filterConfig,
        [API.OFFSET]: 10
      }
    });
  });

  it('case SET_LIMIT_VALUE', () => {
    const action = VideoListActions.updateFilterConfigBy[API.LIMIT](20);
    expect(videoListReducer(state, action)).toEqual({
      ...initialState,
      filterConfig: {
        ...initialState.filterConfig,
        [API.LIMIT]: 20
      }
    });
  });

  it('default case should return initial state ', () => {
    expect(videoListReducer(state, { type: 'unExisted type' })).toEqual({
      ...initialState
    });
  });
});
