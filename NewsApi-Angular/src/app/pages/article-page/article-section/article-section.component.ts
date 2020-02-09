import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NewsApiStoreService } from "../../../services/news-api-store/news-api-store.service";

import { map } from "rxjs/operators";
@Component({
  selector: "app-article-section",
  templateUrl: "./article-section.component.html",
  styleUrls: ["./article-section.component.scss"]
})
export class ArticleSectionComponent implements OnInit {
  article = {};
  id;
  constructor(
    private NewsApiStore: NewsApiStoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.id = id;
    });

    this.NewsApiStore.dataObserv.subscribe(({ articles }) => {
      this.article = articles.find(({ id }) => id === this.id);
    });
  }
}
