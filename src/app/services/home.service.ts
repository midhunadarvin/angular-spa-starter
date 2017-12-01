import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ResourceResult } from 'ngx-resource';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthenticationResource } from '../shared/resources/authentication.resource';

@Injectable()
export class HomeService {

  private headers = new Headers({ 'Accept': '*', 'Content-Type': 'application/json' });

  constructor(
    private authenticationResource: AuthenticationResource) {
    authenticationResource.setHeaders(this.headers);
  }

  userLogin(params): Observable<any> {
    return this.authenticationResource.login(params).$observable;
  }

  forgotPassword(params): Observable<any> {
    return this.authenticationResource.forgotPassword(params).$observable;
  }

  validateToken(params): Observable<any> {
    return this.authenticationResource.validateToken(params).$observable;
  }

  resetPassword(params): Observable<any> {
    return this.authenticationResource.resetPassword(params).$observable;
  }

}
