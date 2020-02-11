import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup,Validators } from "@angular/forms";
import { NewsApiStoreService } from "../../../services/news-api-store/news-api-store.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-form",
  templateUrl: "./add-form.component.html",
  styleUrls: ["./add-form.component.scss"]
})
export class AddFormComponent implements OnInit {
  addForm;

  constructor(
    private NewsApiStore: NewsApiStoreService,
    private router: Router
  ) {}

  onSubmit() {
    this.NewsApiStore.addArticle(this.addForm.value);
    this.router.navigate(["news"]);
  }

  ngOnInit() {
    this.addForm = new FormGroup({
      title: new FormControl("", [
        Validators.required,
        Validators.minLength(4)
      ]),
      description: new FormControl(""),
      content: new FormControl("", [Validators.required]),
      urlToImage: new FormControl(""),
      publishedAt: new FormControl(""),
      author: new FormControl(""),
      source: new FormControl("")
    });
  }
}
