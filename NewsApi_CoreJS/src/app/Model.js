import QueryStringGenerator from './services/QueryStringGenerator';
import RequestService from './services/RequestService';
import { setLoggerForSetProps } from './common/Loggers';

class Model {
  data = setLoggerForSetProps({
    totalResults: 0,
    sources: [],
    articles: [],
  });
  queryParams = {
    inputQueryText: '',
    selectedSource: '',
    language: '',
    page: 1,
    articlesPerPage: 10,
  };
  error = null;
  requestService = new RequestService();
  getResponse = this.requestService.factory('GET');

  bindDataArticlesReceived = (errorCallback, callback) => {
    this.onDataArticlesReceived = callback;
    this.onError = errorCallback;
  };

  bindDataSourcesReceived = (errorCallback, callback) => {
    this.onDataSourcesReceived = callback;
    this.onError = errorCallback;
  };

  getArticlesSources = () => {
    const queryString = QueryStringGenerator.getQueryStringSources();
    this.getResponse(queryString, this._saveError, this._saveSources);
  };

  getMoreArticles = () => {
    this.queryParams.page += 1;
    const fullQueryString = QueryStringGenerator.getQueryStringArticles(this.queryParams);
    this.getResponse(fullQueryString, this._saveError, this._updatePreviousReceivedData);
  };

  searchArticles = () => {
    this.queryParams.page = 1; // forced due to previous Search
    this.error = null;
    const fullQueryString = QueryStringGenerator.getQueryStringArticles(this.queryParams);
    this.getResponse(fullQueryString, this._saveError, this._saveReceivedData);
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

  _saveError = ({ message }) => {
    this.error = { message };
    this.onError();
  };

  _saveSources = ({ sources }) => {
    this.data.sources = sources.map(({ name, id }) => ({ name, id }));
    this.onDataSourcesReceived();
  };

  _saveReceivedData = ({ articles, totalResults }) => {
    this.data.articles = articles;
    this.data.totalResults = totalResults;
    this.onDataArticlesReceived();
  };

  _updatePreviousReceivedData = ({ articles }) => {
    this.data.articles = this.data.articles.concat(articles);
    this.onDataArticlesReceived();
  };
}

export default Model;
