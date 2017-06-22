import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ResourceResult } from 'ngx-resource';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { GithubRepoResource } from '../shared/resources/github-repo.resource';
import { GithubSearchResource } from '../shared/resources/github-search.resource'

@Injectable()
export class DataService {

  private headers = new Headers({ 'Accept': '*', 'Content-Type': 'application/json' });

  constructor(private githubRepoResource: GithubRepoResource, private githubSearchResource: GithubSearchResource) {
    githubRepoResource.setHeaders(this.headers);
    githubRepoResource.setHeaders(this.headers);
  }

  getRepos(params): Observable<any> {
    return this.githubRepoResource.get(params).$observable;
  }

  searchRepos(params): Observable<any> {
    return this.githubSearchResource.get(params).$observable;
  }
}
