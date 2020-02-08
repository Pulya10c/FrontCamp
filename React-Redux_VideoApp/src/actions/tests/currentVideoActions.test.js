import {
  fetchCurrentVideoAndSimilarFilms,
  resetSearchAngRedirect
} from 'actions/currentVideoActions';

import { API, PATHS } from 'src/constants';
import RequestService from 'services/RequestService';
import * as videoListActions from 'actions/videoListActions';
import * as uiActions from 'actions/uiStateActions';
import * as routerActions from 'actions/routerActions';

console.error = jest.fn();

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

videoListActions.updateFilterConfigBy[
  API.SEARCH
] = jest.fn().mockImplementation(() => 'updateFilterConfigBy.SEARCH');
videoListActions.updateFilterConfigBy[
  API.SEARCH_BY
] = jest.fn().mockImplementation(() => 'updateFilterConfigBy.SEARCH_BY');

videoListActions.fetchMovies = jest
  .fn()
  .mockImplementation(() => 'fetchMovies');

describe('currentVideoActions -> fetchCurrentVideoAndSimilarFilms', () => {
  const dispatchMockFn = jest.fn();
  const getStateMockFn = jest.fn();

  beforeEach(() => {
    dispatchMockFn.mockClear();
    getStateMockFn.mockClear();
    console.error.mockClear();
  });

  it('should return function with 2 functions as arguments', () => {
    const returnedFunc = fetchCurrentVideoAndSimilarFilms(1);
    expect(typeof returnedFunc).toBe('function');
    expect(returnedFunc).toHaveProperty('length', 2);
  });

  it('dispatch function should be called 6 times', async () => {
    await fetchCurrentVideoAndSimilarFilms(1)(dispatchMockFn, getStateMockFn);
    expect(dispatchMockFn).toHaveBeenCalledTimes(6);
  });

  it('dispatch function should be called first time with correct args', async () => {
    await fetchCurrentVideoAndSimilarFilms(1)(dispatchMockFn, getStateMockFn);
    expect(dispatchMockFn).nthCalledWith(1, 'uiActions.startFetching');
  });

  it('dispatch function should be called second time with correct args', async () => {
    await fetchCurrentVideoAndSimilarFilms(1)(dispatchMockFn, getStateMockFn);
    expect(dispatchMockFn).nthCalledWith(2, 'uiActions.finishFetching');
  });

  it('dispatch function should be called 3 time with correct args', async () => {
    await fetchCurrentVideoAndSimilarFilms(1)(dispatchMockFn, getStateMockFn);
    expect(dispatchMockFn).nthCalledWith(3, {
      type: 'CURRENT_VIDEO/SAVE_FILM',
      payload: {}
    });
  });

  it('getState function should be called once', async () => {
    await fetchCurrentVideoAndSimilarFilms(1)(dispatchMockFn, getStateMockFn);
    expect(getStateMockFn).toHaveBeenCalledTimes(1);
  });

  it('dispatch function should be called 4 time with correct args', async () => {
    await fetchCurrentVideoAndSimilarFilms(1)(dispatchMockFn, getStateMockFn);
    expect(dispatchMockFn).nthCalledWith(4, 'updateFilterConfigBy.SEARCH');
  });

  it('dispatch function should be called 5 time with correct args', async () => {
    await fetchCurrentVideoAndSimilarFilms(1)(dispatchMockFn, getStateMockFn);
    expect(dispatchMockFn).nthCalledWith(5, 'updateFilterConfigBy.SEARCH_BY');
  });

  it('dispatch function should be called 6 time with correct args', async () => {
    await fetchCurrentVideoAndSimilarFilms(1)(dispatchMockFn, getStateMockFn);
    expect(dispatchMockFn).nthCalledWith(6, 'fetchMovies');
  });

  it('dispatch function should be called second time with correct args in case error', async () => {
    RequestService.getResponse = jest
      .fn()
      .mockImplementationOnce(() => Promise.reject({}));

    await fetchCurrentVideoAndSimilarFilms(1)(dispatchMockFn, getStateMockFn);
    expect(dispatchMockFn).nthCalledWith(2, 'uiActions.setError');
  });

  it('console error should be called once in case error', async () => {
    RequestService.getResponse = jest
      .fn()
      .mockImplementationOnce(() => Promise.reject({}));

    await fetchCurrentVideoAndSimilarFilms(1)(dispatchMockFn, getStateMockFn);
    expect(console.error).toHaveBeenCalledTimes(1);
  });
});

describe('currentVideoActions -> resetSearchAngRedirect', () => {
  const dispatchMockFn = jest.fn();

  beforeEach(() => {
    dispatchMockFn.mockClear();
    routerActions.goTo.mockClear();
  });

  it('should return function with 1 function as arguments', () => {
    const returnedFunc = resetSearchAngRedirect();
    expect(typeof returnedFunc).toBe('function');
    expect(returnedFunc).toHaveProperty('length', 1);
  });

  it('dispatch function should be called 2 times', () => {
    resetSearchAngRedirect()(dispatchMockFn);
    expect(dispatchMockFn).toHaveBeenCalledTimes(2);
  });

  it('dispatch function should be called 1 time with correct args', () => {
    resetSearchAngRedirect()(dispatchMockFn);
    expect(dispatchMockFn).nthCalledWith(1, 'updateFilterConfigBy.SEARCH');
  });

  it('dispatch function should be called 2 time with correct args', () => {
    resetSearchAngRedirect()(dispatchMockFn);
    expect(dispatchMockFn).nthCalledWith(2, 'updateFilterConfigBy.SEARCH_BY');
  });

  it('goTo function should be called once and with correct args', () => {
    resetSearchAngRedirect()(dispatchMockFn);
    expect(routerActions.goTo).toHaveBeenCalledTimes(1);
    expect(routerActions.goTo).nthCalledWith(1, PATHS.VIDEO_LIST_PAGE);
  });
});
