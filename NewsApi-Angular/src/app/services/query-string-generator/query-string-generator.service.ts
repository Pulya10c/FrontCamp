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

  getQueryStringSources(): string {
    let queryString = `${this.baseURL}${this.sources}`;
    queryString += this.addApiKey(this.apiKey);
    return queryString;
  }

  getOnlyMyURL(): string {
    return `${this.onlyMyURL}${this.news}`;
  }

  getQueryStringArticles({ inputQueryText, onlyMy, selectedSource, articlesPerPage, page }): string {
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

  addArticlesPerPage(articlesPerPage: number): string {
    return `&pageSize=${articlesPerPage}`;
  }

  addPage(page: number ): string {
    return `&page=${page}`;
  }

  addSortByPopularity(): string {
    return '&sortBy=popularity';
  }

  addOnlyMy(onlyMy: boolean ): string {
    return onlyMy ? `&onlyMy=${onlyMy}` : '';
  }

  addSource(sourceId: string ): string {
    return sourceId ? `&sources=${sourceId}` : '';
  }

  addQueryText(queryText: string ): string {
    return queryText ? `q=${encodeURIComponent(queryText.replace(/\s+/g, '+'))}` : '';
  }

  addApiKey(key: string ): string {
    return `&apiKey=${key}`;
  }

  constructor() { }
}

export default new QueryStringGeneratorService();
