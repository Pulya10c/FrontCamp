import QueryStringGenerator from 'services/QueryStringGenerator';
import RequestService from 'services/RequestService';
import { updateFilterConfigBy, fetchMovies } from 'actions/videoListActions';
import { API, GENRES, TITLE, PATHS } from 'src/constants';
import { currentVideoGenresSelector } from 'selectors/currentVideoSelectors';
import * as uiActions from 'actions/uiStateActions';
import { goTo } from 'actions/routerActions';

const MODULE_NAME = 'CURRENT_VIDEO';

export const SAVE_FILM = `${MODULE_NAME}/SAVE_FILM`;
export const SET_SELECTED_FILM_ID = `${MODULE_NAME}/SET_SELECTED_FILM_ID`;

// export for test
export const _saveFilm = film => {
  return {
    type: SAVE_FILM,
    payload: film
  };
};

export const fetchCurrentVideoAndSimilarFilms = id => async (
  dispatch,
  getState
) => {
  try {
    const queryString = QueryStringGenerator.getUrlForRequest(id);
    dispatch(uiActions.startFetching());
    const film = await RequestService.getResponse(queryString);
    dispatch(uiActions.finishFetching());
    dispatch(_saveFilm(film));
    const state = getState();
    const genres = currentVideoGenresSelector(state);
    dispatch(updateFilterConfigBy[API.SEARCH](genres.join(' ')));
    dispatch(updateFilterConfigBy[API.SEARCH_BY](GENRES));
    dispatch(fetchMovies());
  } catch (error) {
    console.error(error);
    dispatch(uiActions.setError(error));
  }
};

export const resetSearchAngRedirect = () => dispatch => {
  dispatch(updateFilterConfigBy[API.SEARCH](''));
  dispatch(updateFilterConfigBy[API.SEARCH_BY](TITLE.code));
  goTo(PATHS.VIDEO_LIST_PAGE);
};
