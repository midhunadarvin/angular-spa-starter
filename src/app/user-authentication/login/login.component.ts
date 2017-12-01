import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../../config/app.config';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class UserLoginComponent implements OnInit {

  username: any;
  password: any;

  constructor(private http: Http,
              private homeService: HomeService,
              private router: Router) {
                this.username = '';
                this.password = '';
              }

 ngOnInit() {
  this.username = '';
  this.password = '';
 }

 onForgotPasswordClick() {
  this.router.navigateByUrl("/forgot-password");
 }

 login() {
  if((this.username == '')&&(this.password == '')){
  }
  else {
    let obj = {
      emailId: this.username,
      password: this.password
    }
    this.homeService.userLogin(obj).subscribe(
        resp => {
          if(resp.status == 1){
            console.log(resp);
            localStorage.setItem('authToken',resp.data.authToken);
            this.router.navigateByUrl("/home");
          }
          else {
          }
        },
        error => {
        }
      );
  }
 }

}
