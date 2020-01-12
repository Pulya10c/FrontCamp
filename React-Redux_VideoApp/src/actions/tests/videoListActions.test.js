import {
  createSearchAndRedirect,
  sortByValueAndFetchMovies,
  fetchMovies,
  _updateFilterConfigInOrderToSearchParams
} from 'actions/videoListActions';

import { PATHS } from 'src/constants';
import RequestService from 'services/RequestService';
import QueryStringGenerator from 'services/QueryStringGenerator';
import * as uiActions from 'actions/uiStateActions';
import * as routerActions from 'actions/routerActions';
import * as routerSelectors from 'selectors/routerSelectors';
import * as videoListSelectors from 'selectors/videoListSelectors';

console.error = jest.fn();

const mockSearchStr =
  '?&sortBy=release_date&sortOrder=desc&limit=15&offset=10&searchBy=title&search=test';

const mockFilterConfig = {
  search: 'test',
  searchBy: 'title',
  sortOrder: 'desc',
  sortBy: 'release_date',
  offset: 10,
  limit: 15
};

routerSelectors.routerSearchSelector = jest
  .fn()
  .mockImplementation(() => mockSearchStr);

videoListSelectors.filterConfigSelector = jest
  .fn()
  .mockImplementation(() => mockFilterConfig);

QueryStringGenerator.getSearchStr = jest
  .fn()
  .mockImplementation(() => 'searchStr');

routerActions.goTo = jest.fn().mockImplementation(() => 'goTo');

uiActions.startFetching = jest
  .fn()
  .mockImplementation(() => 'uiActions.startFetching');
uiActions.finishFetching = jest
  .fn()
  .mockImplementation(() => 'uiActions.finishFetching');
uiActions.setError = jest.fn().mockImplementation(() => 'uiActions.setError');

RequestService.getResponse = jest
  .fn()
  .mockImplementation(() => Promise.resolve({}));

describe('videoListActions -> sortByValueAndFetchMovies', () => {
  const dispatchMockFn = jest.fn();

  beforeEach(() => {
    dispatchMockFn.mockClear();
  });

  it('should return function with 1 function as arguments', () => {
    const returnedFunc = sortByValueAndFetchMovies('title');
    expect(typeof returnedFunc).toBe('function');
    expect(returnedFunc).toHaveProperty('length', 1);
  });

  it('dispatch function should be called 2 times', () => {
    sortByValueAndFetchMovies('title')(dispatchMockFn);
    expect(dispatchMockFn).toHaveBeenCalledTimes(2);
  });
});

describe('currentVideoActions -> createSearchAndRedirect', () => {
  const dispatchMockFn = jest.fn();
  const getStateMockFn = jest.fn();

  beforeEach(() => {
    dispatchMockFn.mockClear();
    getStateMockFn.mockClear();
    routerActions.goTo.mockClear();
  });

  it('should return function with 2 functions as arguments', () => {
    const returnedFunc = createSearchAndRedirect();
    expect(typeof returnedFunc).toBe('function');
    expect(returnedFunc).toHaveProperty('length', 2);
  });

  it('dispatch function should be called 0 times', () => {
    createSearchAndRedirect()(dispatchMockFn, getStateMockFn);
    expect(dispatchMockFn).toHaveBeenCalledTimes(0);
  });

  it('dispatch function should be called 0 times', () => {
    createSearchAndRedirect()(dispatchMockFn, getStateMockFn);
    expect(getStateMockFn).toHaveBeenCalledTimes(1);
  });

  it('goTo function should be called once and with correct args', () => {
    createSearchAndRedirect()(dispatchMockFn, getStateMockFn);
    expect(routerActions.goTo).toHaveBeenCalledTimes(1);
    expect(routerActions.goTo).nthCalledWith(
      1,
      PATHS.VIDEO_LIST_PAGE,
      'searchStr'
    );
  });
});

describe('currentVideoActions -> fetchMovies and _updateFilterConfigInOrderToSearchParams', () => {
  const dispatchMockFn = jest.fn();
  const getStateMockFn = jest.fn();

  beforeEach(() => {
    dispatchMockFn.mockClear();
    getStateMockFn.mockClear();
    console.error.mockClear();
  });

  it('should return function with 2 functions as arguments', () => {
    const returnedFunc = fetchMovies();
    expect(typeof returnedFunc).toBe('function');
    expect(returnedFunc).toHaveProperty('length', 2);
  });

  it('dispatch function should be called 4 times in case the same filter config and search string', async () => {
    await fetchMovies()(dispatchMockFn, getStateMockFn);
    expect(dispatchMockFn).toHaveBeenCalledTimes(4);
  });

  it('getState function should be called once', async () => {
    await fetchMovies()(dispatchMockFn, getStateMockFn);
    expect(getStateMockFn).toHaveBeenCalledTimes(1);
  });

  it('dispatch function should be called third time with correct args in case error', async () => {
    RequestService.getResponse = jest
      .fn()
      .mockImplementationOnce(() => Promise.reject({}));

    await fetchMovies()(dispatchMockFn, getStateMockFn);
    expect(dispatchMockFn).nthCalledWith(3, 'uiActions.setError');
  });

  it('console error should be called once in case error', async () => {
    RequestService.getResponse = jest
      .fn()
      .mockImplementationOnce(() => Promise.reject({}));

    await fetchMovies()(dispatchMockFn, getStateMockFn);
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it('dispatch function should be called 0 times in _updateFilterConfigInOrderToSearchParams in case the same filter config and search string', () => {
    _updateFilterConfigInOrderToSearchParams(
      mockSearchStr,
      mockFilterConfig
    )(dispatchMockFn);
    expect(dispatchMockFn).toHaveBeenCalledTimes(0);
  });

  it('dispatch function should be called 2 times in _updateFilterConfigInOrderToSearchParams in case NOT the same filter config and search string (different search value)', () => {
    const mockSearchStr =
      '?&sortBy=release_date&sortOrder=desc&limit=15&offset=10&searchBy=title&search=differ';

    _updateFilterConfigInOrderToSearchParams(
      mockSearchStr,
      mockFilterConfig
    )(dispatchMockFn);
    expect(dispatchMockFn).toHaveBeenCalledTimes(2);
  });

  it('dispatch function should be called 4 times in _updateFilterConfigInOrderToSearchParams in case NOT the same filter config and search string (different searchBy and limit values)', () => {
    const mockSearchStr =
      '?&sortBy=release_date&sortOrder=desc&limit=20&offset=10&searchBy=genres&search=test';

    _updateFilterConfigInOrderToSearchParams(
      mockSearchStr,
      mockFilterConfig
    )(dispatchMockFn);
    expect(dispatchMockFn).toHaveBeenCalledTimes(4);
  });

  it('dispatch function should be called 4 times in _updateFilterConfigInOrderToSearchParams in case NOT the same filter config and search string (different sortOrder and offset values)', () => {
    const mockSearchStr =
      '?&sortBy=release_date&sortOrder=asc&limit=15&offset=15&searchBy=title&search=test';

    _updateFilterConfigInOrderToSearchParams(
      mockSearchStr,
      mockFilterConfig
    )(dispatchMockFn);
    expect(dispatchMockFn).toHaveBeenCalledTimes(4);
  });
});
