import { OnInit, Component } from '@angular/core';

import { GlobalService } from './services/global.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	loading: boolean;

	constructor(private globalService: GlobalService) {}

	ngOnInit(): void {
		// Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		// Add 'implements OnInit' to the class.
		this.globalService.spinnerActive$.subscribe(value => {
			this.loading = value;
		});
	}
}
