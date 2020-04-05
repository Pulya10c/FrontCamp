import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsApiStoreService } from '../../../services/news-api-store/news-api-store.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-article-section',
  templateUrl: './article-section.component.html',
  styleUrls: ['./article-section.component.scss']
})
export class ArticleSectionComponent implements OnInit {
  article = {};
  id: string;
  constructor(
    private NewsApiStore: NewsApiStoreService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  removeArticle() {
    this.NewsApiStore.deleteArticle(this.id);
    this.router.navigate(['news']);
  }

  redirectToEditPage() {
    this.router.navigate([`edit/${this.id}`]);
  }

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.id = id;
    });

    this.NewsApiStore.dataObserv.subscribe(({ articles }) => {
      this.article = articles.find(({ _id }) => _id === this.id);
    });
  }
}
