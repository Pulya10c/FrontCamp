import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: NewsPageComponent },
  { path: 'news/:id', component: ArticlePageComponent },
  { path: 'edit/:id', component: EditPageComponent },
  { path: 'add', component: AddPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
