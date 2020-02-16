import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import QueryStringGeneratorService from '../query-string-generator/query-string-generator.service';
import { filter } from 'rxjs/operators';
import {
  SourceInterface,
  ArticleInterface,
  DataInterface,
  QueryParamsInterface
} from './news-types';

@Injectable({ providedIn: 'root' })
export class NewsApiStoreService {
  private DATA: BehaviorSubject<DataInterface>;
  private QUERY_PARAMS: BehaviorSubject<QueryParamsInterface>;

  public dataObserv: Observable<DataInterface>;
  public queryParamsObserv: Observable<QueryParamsInterface>;

  constructor(private http: HttpClient) {
    this.DATA = new BehaviorSubject<DataInterface>({
      articles: [],
      sources: [],
      totalResults: 0
    });

    this.QUERY_PARAMS = new BehaviorSubject<QueryParamsInterface>({
      inputQueryText: 'Hello world',
      selectedSource: '',
      onlyMy: false,
      page: 1,
      articlesPerPage: 10
    });

    this.dataObserv = this.DATA.asObservable();
    this.queryParamsObserv = this.QUERY_PARAMS.asObservable();
  }

  getQueryParams(): QueryParamsInterface {
    return this.QUERY_PARAMS.getValue();
  }

  private setQueryParams(val: QueryParamsInterface): void {
    this.QUERY_PARAMS.next(val);
  }

  getData(): DataInterface {
    return this.DATA.getValue();
  }

  private setData(val: DataInterface): void {
    this.DATA.next(val);
  }

  fetchArticlesSources(): void {
    this.http
      .get<any>(QueryStringGeneratorService.getQueryStringSources())
      .subscribe(({ sources }) => {
        const data = this.getData();
        const newData = {
          ...data,
          sources: sources.map(({ name, id }) => ({ name, id }))
        };
        this.setData(newData);
      });
  }

  fetchArticles(): void {
    this.http
      .get<any>(
        QueryStringGeneratorService.getQueryStringArticles(
          this.getQueryParams()
        )
      )
      .subscribe(({ articles, totalResults }) => {
        const data = this.getData();
        const newData = {
          ...data,
          articles: articles.map(article => ({
            _id: this.getUniqId(),
            ...article
          })),
          totalResults
        };
        this.setData(newData);
      });
  }

  loadMoreArticles(): void {
    this.http
      .get<any>(
        QueryStringGeneratorService.getQueryStringArticles(
          this.getQueryParams()
        )
      )
      .subscribe(({ articles, totalResults }) => {
        const data = this.getData();
        const newData = {
          ...data,
          articles: [
            ...data.articles,
            ...articles.map(article => ({
              _id: this.getUniqId(),
              ...article
            }))
          ],
          totalResults
        };
        this.setData(newData);
      });
  }

  updateSearchParams(params): void {
    const queryParams = this.getQueryParams();
    const newQueryParams = {
      ...queryParams,
      ...params
    };
    this.setQueryParams(newQueryParams);
  }

  deleteArticle(articleID): void {
    const queryParams = this.getQueryParams();
    if (queryParams.onlyMy) {
      this.http
        .delete<any>(
          `${QueryStringGeneratorService.getQueryStringArticles(
            queryParams
          )}/${articleID}`
        )
        .subscribe();
    }
    const data = this.getData();
    const newData = {
      ...data,
      articles: data.articles.filter(({ _id }) => _id !== articleID)
    };
    this.setData(newData);
  }

  updateArticle(article): void {
    const queryParams = this.getQueryParams();
    if (queryParams.onlyMy) {
      this.http
        .put<any>(
          `${QueryStringGeneratorService.getQueryStringArticles(queryParams)}/${
            article._id
          }`,
          article
        )
        .subscribe();
    }
    const data = this.getData();
    const newData = {
      ...data,
      articles: [
        ...data.articles.filter(({ _id }) => _id !== article._id),
        { ...article, source: { name: article.source, id: article.source } }
      ]
    };
    this.setData(newData);
  }

  addArticle(article): void {
    this.http
      .post<any>(`${QueryStringGeneratorService.getOnlyMyURL()}`, article)
      .subscribe();

    const data = this.getData();
    const newData = {
      ...data,
      articles: [
        ...data.articles,
        {
          ...article,
          _id: this.getUniqId(),
          source: { name: article.source, id: article.source }
        }
      ]
    };
    this.setData(newData);
  }

  getUniqId(): string {
    return `${performance.now()}`.replace('.', '');
  }
}
