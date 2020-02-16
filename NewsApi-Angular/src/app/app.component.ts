import { Component, OnInit } from '@angular/core';
import { NewsApiStoreService } from './services/news-api-store/news-api-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NewsApi-Angular';

  constructor(private NewsApiStore: NewsApiStoreService) {}

  ngOnInit() {
    this.NewsApiStore.fetchArticles();
  }
}
