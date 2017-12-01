import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {AppConfig} from '../config/app.config';

@Injectable()
export class UploadService {

	constructor(private http: Http) { };

	upload(url,formData, options): Promise<string> {
    	return this.http.post(url, formData, options)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}