import { startFetching, finishFetching, setError } from 'actions/uiStateActions';

describe('uiStateActions -> startFetching', () => {
  it('should return correct object', () => {
    expect(startFetching()).toEqual({
      type: 'UI/START_FETCHING'
    });
  });
});

describe('uiStateActions -> finishFetching', () => {
  it('should return correct object', () => {
    expect(finishFetching()).toEqual({
      type: 'UI/FINISH_FETCHING'
    });
  });
});

describe('uiStateActions -> setError', () => {
  it('should return correct object', () => {
    expect(setError({ name: 'test', message: 'test message' })).toEqual({
      type: 'UI/SET_ERROR',
      payload: { name: 'test', message: 'test message' }
    });
  });
});
