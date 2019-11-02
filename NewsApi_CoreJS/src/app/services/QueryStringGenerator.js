class QueryStringGenerator {
  baseURL = 'https://newsapi.org/v2/';
  everything = 'everything?';
  sources = 'sources?';
  API_KEY = process.env.API_KEY;

  getQueryStringSources = () => {
    let queryString = `${this.baseURL}${this.sources}`;
    queryString += this._addApiKey(this.API_KEY);
    return queryString;
  };

  getQueryStringArticles = ({ inputQueryText, language, selectedSource, articlesPerPage, page }) => {
    let queryString = `${this.baseURL}${this.everything}`;
    queryString += this._addQueryText(inputQueryText);
    queryString += this._addSortByPopularity();
    queryString += this._addSource(selectedSource);
    queryString += this._addLanguage(language);
    queryString += this._addArticlesPerPage(articlesPerPage);
    queryString += this._addPage(page);

    queryString += this._addApiKey(this.API_KEY);

    return queryString;
  };

  _addArticlesPerPage = articlesPerPage => {
    return `&pageSize=${articlesPerPage}`;
  };

  _addPage = page => {
    return `&page=${page}`;
  };

  _addSortByPopularity = () => {
    return '&sortBy=popularity';
  };

  _addLanguage = language => {
    return language ? `&language=${language}` : '';
  };

  _addSource = sourceId => {
    return sourceId ? `&sources=${sourceId}` : '';
  };

  _addQueryText = queryText => {
    return queryText ? `q=${encodeURIComponent(queryText.replace(/\s+/g, '+'))}` : '';
  };

  _addApiKey = key => `&apiKey=${key}`;
}

export default new QueryStringGenerator();
