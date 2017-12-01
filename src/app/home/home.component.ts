import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';

import { DataService } from '../services/data.service';
import { GlobalService } from '../services/global.service';

declare var google: any;

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	cats = [];
	isLoading = true;
	searchControl = new FormControl();
	cat = {};
	isEditing = false;
	addCatForm: FormGroup;
	name = new FormControl('', Validators.required);
	age = new FormControl('', Validators.required);
	weight = new FormControl('', Validators.required);

	@ViewChild("search")
	public searchElementRef: ElementRef;
	public repos: Array<Object>;	

	constructor(
		private http: Http,
		private dataService: DataService,
		private formBuilder: FormBuilder,
		private globalService: GlobalService) { }

	ngOnInit() {
		this.getRepos();

		this.addCatForm = this.formBuilder.group({
			name: this.name,
			age: this.age,
			weight: this.weight
		});

	}

	ngAfterViewInit() {
	}

	getRepos() {
		let inputParams = {
			q: 'angular',
			sort: 'stars',
			page: 1,
			per_page: 6
		};
		this.dataService.searchRepos(inputParams).subscribe(
			data => this.repos = data.items,
			error => console.log(error),
			() => this.isLoading = false
		);
	}

}
