import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
class QueryStringGeneratorService {
  private onlyMyURL = 'http://localhost:3000/';
  private baseURL = 'https://newsapi.org/v2/';
  private everything = 'everything?';
  private sources = 'sources?';
  private news = 'news';
  private apiKey = environment.apiKey;

  getQueryStringSources() {
    let queryString = `${this.baseURL}${this.sources}`;
    queryString += this.addApiKey(this.apiKey);
    return queryString;
  }

  getOnlyMyURL() {
    return `${this.onlyMyURL}${this.news}`;
  }

  getQueryStringArticles({ inputQueryText, onlyMy, selectedSource, articlesPerPage, page }) {
    if (onlyMy) {
      return this.getOnlyMyURL();
    }

    let queryString = `${this.baseURL}${this.everything}`;
    queryString += this.addQueryText(inputQueryText);
    queryString += this.addSortByPopularity();
    queryString += this.addSource(selectedSource);
    queryString += this.addOnlyMy(onlyMy);
    queryString += this.addArticlesPerPage(articlesPerPage);
    queryString += this.addPage(page);

    queryString += this.addApiKey(this.apiKey);

    return queryString;
  }

  addArticlesPerPage(articlesPerPage) {
    return `&pageSize=${articlesPerPage}`;
  }

  addPage(page) {
    return `&page=${page}`;
  }

  addSortByPopularity() {
    return '&sortBy=popularity';
  }

  addOnlyMy(onlyMy) {
    return onlyMy ? `&onlyMy=${onlyMy}` : '';
  }

  addSource(sourceId) {
    return sourceId ? `&sources=${sourceId}` : '';
  }

  addQueryText(queryText) {
    return queryText ? `q=${encodeURIComponent(queryText.replace(/\s+/g, '+'))}` : '';
  }

  addApiKey(key) {
    return `&apiKey=${key}`;
  }

  constructor() { }
}

export default new QueryStringGeneratorService();
