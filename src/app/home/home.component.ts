import * as $ from 'jquery';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

import { DataService } from '../services/data.service';
import { ToastComponent } from '../shared/toast/toast.component';

declare var google: any;

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	cats = [];
	isLoading = true;

	// For Google Maps Module Intergration
	title: string = 'My first AGM project';
	latitude: number = 51.678418;
	longitude: number = 7.809007;
	zoom: number;

	@ViewChild("search")
	public searchElementRef: ElementRef;
	//create search FormControl
	searchControl = new FormControl();

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
		private formBuilder: FormBuilder,
		private mapsAPILoader: MapsAPILoader,
		private ngZone: NgZone) { }

	ngOnInit() {
		this.getRepos();

		this.addCatForm = this.formBuilder.group({
			name: this.name,
			age: this.age,
			weight: this.weight
		});

		//load Places Autocomplete
		this.mapsAPILoader.load().then(() => {
			console.log(google.maps);
			let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
				types: ["address"]
			});
			autocomplete.addListener("place_changed", () => {
				this.ngZone.run(() => {
					//get the place result
					let place: google.maps.places.PlaceResult = autocomplete.getPlace();

					//verify result
					if (place.geometry === undefined || place.geometry === null) {
						return;
					}

					//set latitude, longitude and zoom
					this.latitude = place.geometry.location.lat();
					this.longitude = place.geometry.location.lng();
					this.zoom = 12;
				});
			});
		});
	}

	ngAfterViewInit() {
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
