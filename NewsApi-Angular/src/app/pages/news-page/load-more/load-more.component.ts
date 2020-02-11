import { Component, OnInit } from "@angular/core";
import { NewsApiStoreService } from "../../../services/news-api-store/news-api-store.service";

@Component({
  selector: "app-load-more",
  templateUrl: "./load-more.component.html",
  styleUrls: ["./load-more.component.scss"]
})
export class LoadMoreComponent implements OnInit {
  public totalResults: number;
  public page: number;
  public articlesPerPage: number;
  public isAvailable: boolean;

  constructor(private NewsApiStore: NewsApiStoreService) {}

  ngOnInit() {
    this.NewsApiStore.queryParamsObserv.subscribe(
      ({ page, articlesPerPage }) => {
        this.page = page;
        this.articlesPerPage = articlesPerPage;
      }
    );
    this.NewsApiStore.dataObserv.subscribe(({ totalResults }) => {
      this.totalResults = totalResults;
      this.isAvailable = this.totalResults > this.articlesPerPage * this.page;
    });
  }

  loadMoreNews() {
    this.NewsApiStore.updateSearchParams({ page: ++this.page });
    this.NewsApiStore.loadMoreArticles();
  }
}
