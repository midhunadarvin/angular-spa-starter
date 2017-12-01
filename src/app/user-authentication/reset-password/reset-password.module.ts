import { Component, ViewChild, NgModule, ViewContainerRef } from '@angular/core';
import { Http } from '@angular/http';

import { SharedModule } from '../../shared/shared.module';
import { ResetPasswordRoutingModule } from './reset-password-routing.module';

import { ResetPasswordComponent } from './reset-password.component';

@NgModule({
    imports: [
        SharedModule,
        ResetPasswordRoutingModule
    ],
	declarations: [
        ResetPasswordComponent
    ]
})
export class ResetPasswordModule {}

