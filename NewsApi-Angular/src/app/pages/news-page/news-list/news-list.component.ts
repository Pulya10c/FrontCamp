import { Component, OnInit } from "@angular/core";
import { NewsApiStoreService } from "../../../services/news-api-store/news-api-store.service";
import { filter } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.scss"]
})
export class NewsListComponent implements OnInit {
  articles = [];
  isEmpty = true;
  constructor(
    private NewsApiStore: NewsApiStoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.NewsApiStore.dataObserv.subscribe(({ articles }) => {
      this.isEmpty = !this.articles.length;
      this.articles = articles;
      console.log("articles list", articles);
    });
  }

  redirectToEditPage(articleID) {
    this.router.navigate([`edit/${articleID}`]);
  }

  removeArticle(articleID) {
    this.NewsApiStore.deleteArticle(articleID);
  }
}
