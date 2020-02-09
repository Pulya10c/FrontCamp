import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
 addForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    content: new FormControl(''),
    urlToImage: new FormControl(''),
    date: new FormControl(''),
    author: new FormControl(''),
    source: new FormControl('')
  });
  constructor() { }

  isDisabledSearch() {
    console.log('1', 1)
  }

  ngOnInit() {
  }

}
