import QueryStringGenerator from './services/QueryStringGenerator';
import RequestService from './services/RequestService';

class Model {
  data = {
    totalResults: 0,
    sources: [],
    articles: [],
  };
  queryParams = {
    inputQueryText: '',
    selectedSource: '',
    language: '',
    page: 1,
    articlesPerPage: 10,
  };

  bindDataArticlesReceived = callback => {
    this.onDataArticlesReceived = callback;
  };

  bindDataArticlesUpdated = callback => {
    this.onDataArticlesUpdated = callback;
  };

  bindDataSourcesReceived = callback => {
    this.onDataSourcesReceived = callback;
  };

  getArticlesSources = () => {
    const queryString = QueryStringGenerator.getQueryStringSources();
    RequestService.getResponse(queryString, this._saveSources);
  };

  getMoreArticles = () => {
    this.queryParams.page += 1;
    const fullQueryString = QueryStringGenerator.getQueryStringArticles(this.queryParams);
    RequestService.getResponse(fullQueryString, this._updatePreviousReceivedData);
  };

  searchArticles = () => {
    this.queryParams.page = 1; // forced due to previous Search
    const fullQueryString = QueryStringGenerator.getQueryStringArticles(this.queryParams);
    RequestService.getResponse(fullQueryString, this._saveReceivedData);
  };

  updateSelectedSource = sourceId => {
    this.queryParams.selectedSource = sourceId;
  };

  updateLanguage = checked => {
    this.queryParams.language = checked ? 'en' : '';
  };

  updateQueryText = text => {
    this.queryParams.inputQueryText = text;
  };

  _saveSources = ({ sources }) => {
    this.data.sources = sources.map(({ name, id }) => ({ name, id }));
    this.onDataSourcesReceived();
  };

  _updatePreviousReceivedData = ({ articles }) => {
    this.data.articles = articles;
    this.onDataArticlesUpdated();
  };

  _saveReceivedData = ({ articles, totalResults }) => {
    this.data.articles = articles;
    this.data.totalResults = totalResults;
    this.onDataArticlesReceived();
  };
}

export default Model;
