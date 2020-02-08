import uiStateReducer, { initialState } from 'reducers/uiStateReducer';

import * as UiStateActions from 'actions/uiStateActions';

const state = undefined;

describe('Test uiStateReducer', () => {
  it('case START_FETCHING', () => {
    const action = UiStateActions.startFetching();
    expect(uiStateReducer(state, action)).toEqual({
      ...initialState,
      fetching: true
    });
  });

  it('case FINISH_FETCHING', () => {
    const action = UiStateActions.finishFetching();
    expect(uiStateReducer(state, action)).toEqual({
      ...initialState,
      fetching: false
    });
  });

  it('case SET_ERROR', () => {
    const action = UiStateActions.setError({
      name: 'errorName',
      message: 'error message'
    });
    expect(uiStateReducer(state, action)).toEqual({
      ...initialState,
      error: {
        name: 'errorName',
        message: 'error message'
      }
    });
  });

  it('default case should return initial state ', () => {
    expect(uiStateReducer(state, { type: 'unExisted type' })).toEqual({
      ...initialState
    });
  });
});
