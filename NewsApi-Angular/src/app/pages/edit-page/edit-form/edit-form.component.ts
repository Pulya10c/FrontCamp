import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NewsApiStoreService } from '../../../services/news-api-store/news-api-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private NewsApiStore: NewsApiStoreService,
    private router: Router
  ) {}

  onSubmit() {
    const id = this.router.url.split('/').pop();
    this.NewsApiStore.updateArticle({ ...this.editForm.value, _id: id });
    this.router.navigate(['news']);
  }

  ngOnInit() {
    this.NewsApiStore.dataObserv
      .subscribe(({ articles }) => {
        const article = articles.find(
          ({ _id }) => _id === this.router.url.split('/').pop()
        );

        const {
          title,
          description,
          urlToImage,
          publishedAt,
          author,
          content,
          source: { name }
        } = article;

        this.editForm = new FormGroup({
          title: new FormControl(title),
          description: new FormControl(description),
          content: new FormControl(content),
          urlToImage: new FormControl(urlToImage),
          publishedAt: new FormControl(publishedAt),
          author: new FormControl(author),
          source: new FormControl(name)
        });
      })
      .unsubscribe();
  }
}
