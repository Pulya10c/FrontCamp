import currentVideoReducer, {
  initialState
} from 'reducers/currentVideoReducer';

import * as CurrentVideoActions from 'actions/currentVideoActions';

const state = undefined;

describe('Test currentVideoReducer', () => {
  it('case SAVE_FILM', () => {
    const action = CurrentVideoActions._saveFilm({ test: 'test' });
    expect(currentVideoReducer(state, action)).toEqual({
      ...initialState,
      test: 'test'
    });
  });

  it('default case should return initial state ', () => {
    expect(currentVideoReducer(state, { type: 'unExisted type' })).toEqual({
      ...initialState
    });
  });
});
