import { Component, OnInit } from "@angular/core";
import { NewsApiStoreService } from "../../../services/news-api-store/news-api-store.service";

@Component({
  selector: "app-source-title",
  templateUrl: "./source-title.component.html",
  styleUrls: ["./source-title.component.scss"]
})
export class SourceTitleComponent implements OnInit {
  selectedSource = "";
  constructor(private NewsApiStore: NewsApiStoreService) {}

  ngOnInit() {
    this.NewsApiStore.queryParamsObserv.subscribe(({ selectedSource }) => {
      this.selectedSource = selectedSource;
    });
  }
}
