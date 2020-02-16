import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsApiStoreService } from '../../../services/news-api-store/news-api-store.service';
import { isDisabledSearchDirective } from './is-disabled-search';

@Component({
  selector: 'app-commands-section',
  templateUrl: './commands-section.component.html',
  styleUrls: ['./commands-section.component.scss']
})
export class CommandsSectionComponent implements OnInit {
  searchForm: FormGroup;
  sources = [];

  constructor(private NewsApiStore: NewsApiStoreService) {}

  ngOnInit() {
    this.NewsApiStore.fetchArticlesSources();
    this.NewsApiStore.dataObserv.subscribe(({ sources }) => {
      this.sources = sources;
    });
    this.NewsApiStore.queryParamsObserv.subscribe(
      ({ inputQueryText, selectedSource, onlyMy }) => {
        this.searchForm = new FormGroup(
          {
            selectedSource: new FormControl(selectedSource),
            inputQueryText: new FormControl(inputQueryText),
            onlyMy: new FormControl(onlyMy)
          },
          { validators: isDisabledSearchDirective }
        );
      }
    );
  }

  onSubmit() {
    this.NewsApiStore.updateSearchParams(this.searchForm.value);
    this.NewsApiStore.fetchArticles();
  }
}
