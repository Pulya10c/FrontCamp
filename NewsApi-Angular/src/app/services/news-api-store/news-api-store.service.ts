import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, of } from "rxjs";
import QueryStringGeneratorService from "../query-string-generator/query-string-generator.service";
import { filter } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class NewsApiStoreService {
  public DATA;
  public QUERY_PARAMS;
  public dataObserv;
  public queryParamsObserv;

  constructor(private http: HttpClient) {
    this.DATA = new BehaviorSubject<any>({
      articles: [],
      sources: [],
      totalResults: 0
    });

    this.QUERY_PARAMS = new BehaviorSubject<any>({
      inputQueryText: "Angular",
      selectedSource: "",
      onlyMy: "",
      page: 1,
      articlesPerPage: 10
    });

    this.dataObserv = this.DATA.asObservable();
    this.queryParamsObserv = this.QUERY_PARAMS.asObservable();
  }

  getQueryParams(): any {
    return this.QUERY_PARAMS.getValue();
  }

  private setQueryParams(val: any) {
    this.QUERY_PARAMS.next(val);
  }

  getData(): any {
    return this.DATA.getValue();
  }

  private setData(val: any) {
    this.DATA.next(val);
  }

  fetchArticlesSources() {
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

  fetchArticles() {
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

  loadMoreArticles() {
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

  updateSearchParams(params) {
    const queryParams = this.getQueryParams();
    const newQueryParams = {
      ...queryParams,
      ...params
    };
    this.setQueryParams(newQueryParams);
    console.log("params", params);
    console.log("newQueryParams", newQueryParams);
  }

  deleteArticle(articleID) {
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

  updateArticle(article) {
    const queryParams = this.getQueryParams();
    if (queryParams.onlyMy) {
      console.log("!!!!", article);
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

  addArticle(article) {
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

  getUniqId() {
    return `${performance.now()}`.replace(".", "");
  }

  // getArticle(articleID: any) {
  //   console.log("articleID", articleID);
  //   return this.dataObserv.pipe(
  //     filter(({ articles }) => articles.id === articleID)
  //   );
  // }

  // private readonly inputQueryText: string = 'type script';
  // private readonly selectedSource: string = ';
  // private readonly onlyMy: boolean = false;
  // private readonly page: number = 1;
  // private readonly articlesPerPage: number = 10;

  // readonly sources$ = this.SOURCES.asObservable();
  // readonly totalResults$ = this.TOTAL_RESULTS.asObservable();
  // readonly articlesObserver = this.ARTICLES.asObservable();

  // readonly inputQueryText$ = this.INPUT_QUERY_TEXT.asObservable();
  // readonly selectedSource$ = this.SELECTED_SOURCE.asObservable();
  // readonly onlyMy$ = this.ONLY_MY.asObservable();
  // readonly page$ = this.PAGE.asObservable();
  // readonly articlesPerPage$ = this.ARTICLES_PER_PAGE.asObservable();

  // getMoreArticles = () => {
  //   this.queryParams.page += 1;
  //   const fullQueryString = QueryStringGenerator.getQueryStringArticles(
  //     this.queryParams
  //   );
  //   this.getResponse(
  //     fullQueryString,
  //     this._saveError,
  //     this._updatePreviousReceivedData
  //   );
  // };

  // searchArticles = () => {
  //   this.queryParams.page = 1; // forced due to previous Search
  //   this.error = null;
  //   const fullQueryString = QueryStringGenerator.getQueryStringArticles(
  //     this.queryParams
  //   );
  //   this.getResponse(fullQueryString, this._saveError, this._saveReceivedData);
  // };

  // updateSelectedSource = sourceId => {
  //   this.queryParams.selectedSource = sourceId;
  // };

  // updateLanguage = checked => {
  //   this.queryParams.language = checked ? 'en' : ';
  // };

  // updateQueryText = text => {
  //   this.queryParams.inputQueryText = text;
  // };

  // _saveError = ({ message }) => {
  //   this.error = { message };
  //   this.onError();
  // };

  // _saveSources = ({ sources }) => {
  //   this.data.sources = sources.map(({ name, id }) => ({ name, id }));
  //   this.onDataSourcesReceived();
  // };

  // _saveReceivedData = ({ articles, totalResults }) => {
  //   this.data.articles = articles;
  //   this.data.totalResults = totalResults;
  //   this.onDataArticlesReceived();
  // };

  // _updatePreviousReceivedData = ({ articles }) => {
  //   this.data.articles = this.data.articles.concat(articles);
  //   this.onDataArticlesReceived();
  // };

  // /** GET heroes from the server */
  // getHeroes(): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.heroesUrl).pipe(
  //     tap(_ => this.log('fetched heroes')),
  //     catchError(this.handleError<Hero[]>('getHeroes'', []))
  //   );
  // }

  // /** GET hero by id. Return `undefined` when id not found */
  // getHeroNo404<Data>(id: number): Observable<Hero> {
  //   const url = `${this.heroesUrl}/?id=${id}`;
  //   return this.http.get<Hero[]>(url).pipe(
  //     map(heroes => heroes[0]), // returns a {0|1} element array
  //     tap(h => {
  //       const outcome = h ? `fetched` : `did not find`;
  //       this.log(`${outcome} hero id=${id}`);
  //     }),
  //     catchError(this.handleError<Hero>(`getHero id=${id}`))
  //   );
  // }

  // /** GET hero by id. Will 404 if id not found */
  // getHero(id: number): Observable<Hero> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.get<Hero>(url).pipe(
  //     tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<Hero>(`getHero id=${id}`))
  //   );
  // }

  // /* GET heroes whose name contains search term */
  // searchHeroes(term: string): Observable<Hero[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
  //     tap(_ => this.log(`found heroes matching '${term}'`)),
  //     catchError(this.handleError<Hero[]>('searchHeroes'', []))
  //   );
  // }

  // //////// Save methods //////////

  // /** POST: add a new hero to the server */
  // addHero(hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
  //     tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
  //     catchError(this.handleError<Hero>('addHero'))
  //   );
  // }

  // /** DELETE: delete the hero from the server */
  // deleteHero(hero: Hero | number): Observable<Hero> {
  //   const id = typeof hero === 'number' ? hero : hero.id;
  //   const url = `${this.heroesUrl}/${id}`;

  //   return this.http.delete<Hero>(url, this.httpOptions).pipe(
  //     tap(_ => this.log(`deleted hero id=${id}`)),
  //     catchError(this.handleError<Hero>('deleteHero'))
  //   );
  // }

  // /** PUT: update the hero on the server */
  // updateHero(hero: Hero): Observable<any> {
  //   return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
  //     tap(_ => this.log(`updated hero id=${hero.id}`)),
  //     catchError(this.handleError<any>('updateHero'))
  //   );
  // }

  // /**
  //  * Handle Http operation that failed.
  //  * Let the app continue.
  //  * @param operation - name of the operation that failed
  //  * @param result - optional value to return as the observable result
  //  */
  // private handleError<T>(operation = 'operation'', result?: T) {
  //   return (error: any): Observable<T> => {
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  // /** Log a HeroService message with the MessageService */
  // private log(message: string) {
  //   this.messageService.add(`HeroService: ${message}`);
  // }
}
