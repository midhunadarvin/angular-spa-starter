import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()
export class DataService {

	constructor(private http: HttpClient) {
		//
	}

	getRepos(params): Observable<any> {
		return this.http.get<any>(environment.API_ENDPOINT + '/repos/' + params.owner + '/' + params.repo);
	}

	searchRepos(params): Observable<any> {
		return this.http.get<any>(environment.API_ENDPOINT + '/search/repositories', { params });
	}
}
