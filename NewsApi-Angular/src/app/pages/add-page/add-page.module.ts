import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPageComponent } from './add-page.component';
import { AddFormComponent } from './add-form/add-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AddPageComponent, AddFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class AddPageModule { }
