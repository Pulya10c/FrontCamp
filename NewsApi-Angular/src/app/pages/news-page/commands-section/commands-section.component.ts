import { Component, OnInit, OnChanges } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NewsApiStoreService } from "../../../services/news-api-store/news-api-store.service";

@Component({
  selector: "app-commands-section",
  templateUrl: "./commands-section.component.html",
  styleUrls: ["./commands-section.component.scss"]
})
export class CommandsSectionComponent implements OnInit, OnChanges {
  searchForm;
  sources = [];
  isDisabledSearch: boolean;

  constructor(private NewsApiStore: NewsApiStoreService) {}

  ngOnInit() {
    this.NewsApiStore.fetchArticlesSources();
    this.NewsApiStore.dataObserv.subscribe(({ sources }) => {
      this.sources = sources;
    });
    this.NewsApiStore.queryParamsObserv.subscribe(
      ({ inputQueryText, selectedSource, onlyMy }) => {
        this.searchForm = new FormGroup({
          selectedSource: new FormControl(selectedSource, [
            Validators.required
          ]),
          inputQueryText: new FormControl(inputQueryText),
          onlyMy: new FormControl(onlyMy)
        });
      }
    );
  }

  ngOnChanges() {
    // this.isDisabledSearch =
    //   !this.searchForm.selectedSource || !this.searchForm.inputQueryText;
    // console.log("isDisabledSearch", this.isDisabledSearch);
  }

  addArticle() {
    console.log("2", 2);
  }

  onSubmit() {
    console.log(this.searchForm.value);
    this.NewsApiStore.updateSearchParams(this.searchForm.value);
    this.NewsApiStore.fetchArticles();
    this.makeACall();
  }

  makeACall() {
    console.log("this.NewsApiStore", this.NewsApiStore);
    // return this.httpClient.get<any>('http://localhost:3000/news').subscribe((data)=> this.data = data);
  }
}
