import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePageComponent } from './article-page.component';
import { ArticleSectionComponent } from './article-section/article-section.component';


@NgModule({
  declarations: [ArticlePageComponent, ArticleSectionComponent],
  imports: [
    CommonModule
  ]
})
export class ArticlePageModule { }
