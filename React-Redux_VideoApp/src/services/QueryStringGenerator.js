import { API } from 'src/constants';

class QueryStringGenerator {
  baseURL = 'https://reactjs-cdp.herokuapp.com';
  movies = '/movies';

  // sortBy -> Field to sort by
  // sortOrder -> Value to define sort direction - 'desc' or 'asc'
  // search -> Search value
  // searchBy -> Type of search (title or genres Available values : title, genres)
  // filter -> Array to filter by genres
  // offset -> Offset in result array for pagination
  // limit -> Limit amount of items in result array for pagination

  getUrlForRequest = searchStr => {
    return `${this.baseURL}${this.movies}${searchStr}`;
  };

  getSearchStr = ({ sortBy, sortOrder, search, searchBy, offset, limit }) => {
    let searchStr = `?`;
    searchStr += this._addSortBy(sortBy);
    searchStr += this._addSortOrder(sortOrder);
    searchStr += this._addSearch(search);
    searchStr += this._addSearchBy(searchBy);
    searchStr += this._addOffset(offset);
    searchStr += this._addLimit(limit);

    return searchStr;
  };

  _addOffset = offset => {
    return offset ? `&${API.OFFSET}=${offset}` : '';
  };

  _addSortOrder = sortOrder => {
    return sortOrder ? `&${API.SORT_ORDER}=${sortOrder}` : '';
  };

  _addSearchBy = searchBy => {
    return searchBy ? `&${API.SEARCH_BY}=${searchBy}` : '';
  };

  _addSearch = queryText => {
    return queryText
      ? `&${API.SEARCH}=${encodeURIComponent(queryText.replace(/\s+/g, '+'))}`
      : '';
  };

  _addSortBy = sortBy => {
    return sortBy ? `&${API.SORT_BY}=${sortBy}` : '';
  };

  _addLimit = limit => {
    return limit ? `&${API.LIMIT}=${limit}` : '';
  };
}

export default new QueryStringGenerator();
