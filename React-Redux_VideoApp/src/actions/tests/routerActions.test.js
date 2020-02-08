import { goTo } from 'actions/routerActions';

import { history } from 'src/configureStore';

history.push = jest.fn();

describe('routerActions -> goTo', () => {
  beforeEach(() => {
    history.push.mockClear();
  });

  it('should call history push method once and with correct args case 1', () => {
    goTo('/test');

    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).nthCalledWith(1, {
      pathname: '/test',
      search: ''
    });
  });

  it('should call history push method once and with correct args case 2', () => {
    goTo('/test', 'searchStr');

    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).nthCalledWith(1, {
      pathname: '/test',
      search: 'searchStr'
    });
  });
});
