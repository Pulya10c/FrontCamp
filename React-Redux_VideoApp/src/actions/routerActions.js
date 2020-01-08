import { history } from 'src/configureStore';

export const goBack = () => {
  history.goBack();
};

export const goForward = () => {
  history.goForward();
};

export const goTo = (routePath, searchStr = '') => {
  history.push({
    pathname: routePath,
    search: searchStr
  });
};
