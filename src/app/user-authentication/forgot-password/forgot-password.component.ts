import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../../config/app.config';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent implements OnInit {

  email: any;

  constructor(private http: Http,
              private homeService: HomeService,
              private router: Router
  ) {
    this.email = '';
  }
              
 ngOnInit() {

 }

 forgotPassword(){
   if(this.email == ''){

   }
   else{
    let obj = {
      email: this.email
    };

    this.homeService.resetPassword(obj).subscribe(
      resp => {
        if(resp.status == 1){
          this.router.navigateByUrl("/login");
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
