import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
}                           from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class authGuard implements CanActivate{

	constructor(private http: Http, private router: Router) { };

  canActivate() {
    // Imaginary method that is supposed to validate an auth token and return a boolean
    if(localStorage.getItem("authToken")){
      return true;
    }
    else{
      this.router.navigate(['/home']);
      return false;
    }
  }

}