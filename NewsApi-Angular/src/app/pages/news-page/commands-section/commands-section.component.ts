import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { NewsApiStoreService } from "../../../services/news-api-store/news-api-store.service";

@Component({
  selector: "app-commands-section",
  templateUrl: "./commands-section.component.html",
  styleUrls: ["./commands-section.component.scss"]
})
export class CommandsSectionComponent implements OnInit {
  searchForm = new FormGroup({
    selectedSource: new FormControl(""),
    inputQueryText: new FormControl(""),
    onlyMy: new FormControl("")
  });
  sources = [];

  constructor(private NewsApiStore: NewsApiStoreService) {}

  ngOnInit() {
    this.NewsApiStore.fetchArticlesSources();
    this.NewsApiStore.dataObserv.subscribe(({ sources }) => {
      this.sources = sources;
    });
  }

  isDisabledSearch() {
    return false;
    //  !this.searchForm.selectedSource || !this.searchForm.inputQueryText;
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
