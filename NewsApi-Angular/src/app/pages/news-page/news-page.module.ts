import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './news-page.component';
import { NewsListComponent } from './news-list/news-list.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { SourceTitleComponent } from './source-title/source-title.component';
import { CommandsSectionComponent } from './commands-section/commands-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NewsPageComponent,
    NewsListComponent,
    LoadMoreComponent,
    CommandsSectionComponent,
    SourceTitleComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class NewsPageModule { }
