import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { AppRoutingModule } from './app-routing.module';
import { AddPageModule } from './pages/add-page/add-page.module';
import { ArticlePageModule } from './pages/article-page/article-page.module';
import { EditPageModule } from './pages/edit-page/edit-page.module';
import { NewsPageModule } from './pages/news-page/news-page.module';
import { NotFoundPageModule } from './pages/not-found-page/not-found-page.module';

import { NewsApiStoreService } from './services/news-api-store/news-api-store.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddPageModule,
    ArticlePageModule,
    EditPageModule,
    NewsPageModule,
    NotFoundPageModule
  ],
  providers: [NewsApiStoreService],
  bootstrap: [AppComponent]
})

export class AppModule { }
