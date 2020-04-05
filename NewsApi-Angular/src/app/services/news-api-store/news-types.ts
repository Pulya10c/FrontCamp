
export interface SourceInterface {
  id: string;
  name: string;
}

export interface ArticleInterface {
  _id: string;
  source: SourceInterface;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface DataInterface {
  articles: ArticleInterface[];
  sources: SourceInterface[];
  totalResults: number;
}

export interface QueryParamsInterface {
  inputQueryText: string;
  selectedSource: string;
  onlyMy: boolean;
  page: number;
  articlesPerPage: number;
}
