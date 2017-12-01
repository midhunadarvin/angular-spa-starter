import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../../config/app.config';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})

export class ResetPasswordComponent implements OnInit {

  newPassword: any;
  confirmPassword: any;
  token: any;

  constructor(private http: Http,
              private router: Router,
              public homeService: HomeService) {
                this.newPassword = '';
                this.confirmPassword = '';
                this.token = '';
              }
 ngOnInit() {
  this.validateToken();
 }

 validateToken(){
  let url = window.location.href;
  let length = url.length;
  var position = url.search("=");
  this.token = url.slice(position+1,length);
  if((this.token == '')||(this.token == window.location.href)){
    this.router.navigateByUrl("/login");
  }
  else{
    let obj = {
      access_token: this.token
    };

    this.homeService.validateToken(obj).subscribe(
      resp => {
        if(resp.status == 1){
          console.log("Token Validated");
        }
        else {
          this.router.navigateByUrl("/login");
        }
      },
      error => {
        this.router.navigateByUrl("/login");
      }
    );
  }
 }

 cancel(){
  this.router.navigateByUrl("/login");
 }

 resetPassword() {
  if((this.newPassword == '')||(this.confirmPassword == '')){
    console.log('Please enter passwords');
  }
  else {
    if(this.newPassword != this.confirmPassword){
      console.log('Passwords do not  match');
    }
    else{
      if(this.newPassword.length < 8){
        console.log('Password too short');
      }
      else{
        let obj = {
          password: this.newPassword,
          access_token: this.token
        };
        this.homeService.resetPassword(obj).subscribe(
          resp => {
            if(resp.status == 1){
              this.router.navigateByUrl("/login");
              console.log('Password sucessfully reset');
            }
            else {
              console.log('Network error, Please try again later');
            }
          },
          error => {
            console.log('Network error, Please try again later');
          }
        );
      }
    }
  }
 }

}
