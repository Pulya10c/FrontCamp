import { Component, OnInit } from '@angular/core';
import { NewsApiStoreService } from '../../../services/news-api-store/news-api-store.service';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ArticleInterface } from '../../../services/news-api-store/news-types';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  articles: ArticleInterface[];
  isEmpty: boolean;
  constructor(
    private NewsApiStore: NewsApiStoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.NewsApiStore.dataObserv.subscribe(({ articles }) => {
      this.isEmpty = !articles.length;
      this.articles = articles;
    });
  }

  redirectToEditPage(articleID) {
    this.router.navigate([`edit/${articleID}`]);
  }

  removeArticle(articleID) {
    this.NewsApiStore.deleteArticle(articleID);
  }
}
