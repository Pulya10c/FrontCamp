import { history } from 'src/configureStore';

export const goTo = (routePath, searchStr = '') => {
  history.push({
    pathname: routePath,
    search: searchStr
  });
};
