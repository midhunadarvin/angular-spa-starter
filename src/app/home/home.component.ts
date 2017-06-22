import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { DataService } from '../services/data.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cats = [];
  isLoading = true;

  cat = {};
  isEditing = false;
  public repos: Array<Object>; 
  addCatForm: FormGroup;
  name = new FormControl('', Validators.required);
  age = new FormControl('', Validators.required);
  weight = new FormControl('', Validators.required);

  constructor(private http: Http,
              private dataService: DataService,
              public toast: ToastComponent,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getRepos();

    this.addCatForm = this.formBuilder.group({
      name: this.name,
      age: this.age,
      weight: this.weight
    });
  }

  getRepos() {
    let inputParams = { 
      q: 'angular',
      sort: 'stars',
      page: 1,
      per_page: 10
    };
    this.dataService.searchRepos(inputParams).subscribe(
      data => this.repos = data.items,
      error => console.log(error),
      () => this.isLoading = false
    );
  }
}
