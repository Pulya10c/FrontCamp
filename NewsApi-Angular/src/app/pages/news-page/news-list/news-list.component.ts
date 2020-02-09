import { Component, OnInit } from "@angular/core";
import { NewsApiStoreService } from "../../../services/news-api-store/news-api-store.service";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.scss"]
})
export class NewsListComponent implements OnInit {
  articles = [];
  isEmpty = true;
  constructor(private NewsApiStore: NewsApiStoreService) {
  }

  ngOnInit() {
    this.NewsApiStore.fetchArticles();
    this.NewsApiStore.dataObserv.subscribe(({ articles }) => {
      this.isEmpty = !this.articles.length;
      this.articles = articles;
    });
  }
}
