import { Component, ViewChild, NgModule, ViewContainerRef } from '@angular/core';
import { Http } from '@angular/http';

import { SharedModule } from '../../shared/shared.module';
import { UserLoginRoutingModule } from './login-routing.module';

import { UserLoginComponent } from './login.component';


@NgModule({
    imports: [
        SharedModule,
        UserLoginRoutingModule
    ],
	declarations: [
        UserLoginComponent
    ]
})
export class UserLoginModule {}

