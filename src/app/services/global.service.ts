import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GlobalService {
	sidebarActive$: Observable<boolean>;
	spinnerActive$: Observable<boolean>;

	private sidebarActive: boolean;
	private sidebarActiveSource = new Subject<boolean>();

	private spinnerActive: boolean;
	private spinnerActiveSource = new Subject<boolean>();

	constructor(private http: HttpClient) {
		this.sidebarActive$ = this.sidebarActiveSource.asObservable();
		this.spinnerActive$ = this.spinnerActiveSource.asObservable();
	}

	toggleSidebar(): void {
		this.sidebarActive = !this.sidebarActive;
		this.sidebarActiveSource.next(this.sidebarActive);
	}

	toggleSpinner(): void {
		this.spinnerActive = !this.spinnerActive;
		this.spinnerActiveSource.next(this.spinnerActive);

		if (this.spinnerActive)
			setTimeout(() => {
				this.spinnerActive = false;
				this.spinnerActiveSource.next(this.spinnerActive);
			}, 5000);
	}

	showSpinner(): void {
		this.spinnerActive = true;
		this.spinnerActiveSource.next(this.spinnerActive);
	}

	hideSpinner(): void {
		this.spinnerActive = false;
		this.spinnerActiveSource.next(this.spinnerActive);
	}

}
