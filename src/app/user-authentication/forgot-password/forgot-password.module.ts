import { Component, ViewChild, NgModule, ViewContainerRef } from '@angular/core';
import { Http } from '@angular/http';

import { SharedModule } from '../../shared/shared.module';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';

import { ForgotPasswordComponent } from './forgot-password.component';

@NgModule({
    imports: [
        SharedModule,
        ForgotPasswordRoutingModule
    ],
	declarations: [
        ForgotPasswordComponent
    ]
})
export class ForgotPasswordModule {}

