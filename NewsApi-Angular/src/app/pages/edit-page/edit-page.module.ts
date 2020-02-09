import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPageComponent } from './edit-page.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditPageComponent, EditFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class EditPageModule { }
