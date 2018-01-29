import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { DataService } from '../services/data.service';
import { GlobalService } from '../services/global.service';
import { IRepo } from '../shared/models/repo.model';

declare var google: any;

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	@ViewChild('search')
	searchElementRef: ElementRef;
	repos: Array<IRepo>;

	private cats = [];
	private isLoading = true;
	private searchControl = new FormControl();
	private cat = {};
	private isEditing = false;
	private addCatForm: FormGroup;
	private name = new FormControl('', Validators.required);
	private age = new FormControl('', Validators.required);
	private weight = new FormControl('', Validators.required);

	constructor(
		private dataService: DataService,
		private formBuilder: FormBuilder,
		public globalService: GlobalService) { }

	ngOnInit(): void {
		this.getRepos();
		this.addCatForm = this.formBuilder.group({
			name: this.name,
			age: this.age,
			weight: this.weight
		});
	}

	private getRepos(): void {
		const inputParams = {
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
