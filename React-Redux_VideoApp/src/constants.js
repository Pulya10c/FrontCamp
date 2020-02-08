export const SM_SCREEN_SIZE = 576;
export const MD_SCREEN_SIZE = 768;

export const PATHS = {
  ANY: '*',
  HOME: '/',
  VIDEO_LIST_PAGE: '/search',
  CURRENT_VIDEO_PAGE: '/film/:id'
};

export const API = {
  SEARCH: 'search',
  SEARCH_BY: 'searchBy',
  SORT_ORDER: 'sortOrder',
  SORT_BY: 'sortBy',
  OFFSET: 'offset',
  LIMIT: 'limit'
};

export const TITLE = { text: 'Title', code: 'title' };
export const GENRES = { text: 'Genres', code: 'genres' };

export const RELEASE_DATE = { text: 'Release date', code: 'release_date' };
export const RATING = { text: 'Rating', code: 'vote_average' };

export const ASCENDING = 'asc';
export const DESCENDING = 'desc';

export const SORT_BY_VALUES = [RELEASE_DATE, RATING];
export const SEARCH_BY_VALUES = [TITLE, GENRES];
export const SORT_ORDER_VALUES = [ASCENDING, DESCENDING];
