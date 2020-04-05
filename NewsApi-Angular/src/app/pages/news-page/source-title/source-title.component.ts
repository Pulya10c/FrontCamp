import { Component, OnInit } from '@angular/core';
import { NewsApiStoreService } from '../../../services/news-api-store/news-api-store.service';
import { SourceInterface } from '../../../services/news-api-store/news-types';

@Component({
  selector: 'app-source-title',
  templateUrl: './source-title.component.html',
  styleUrls: ['./source-title.component.scss']
})
export class SourceTitleComponent implements OnInit {
  sources: SourceInterface[];
  selectedSource = '';
  constructor(private NewsApiStore: NewsApiStoreService) {}

  ngOnInit() {
    this.NewsApiStore.dataObserv.subscribe(({ sources }) => {
      this.sources = sources;
    });
    this.NewsApiStore.queryParamsObserv.subscribe(({ selectedSource }) => {
      if (selectedSource && this.sources.length) {
        this.selectedSource = this.sources.find(
          ({ id }) => id === selectedSource
        ).name;
      } else {
        this.selectedSource = '';
      }
    });
  }
}
