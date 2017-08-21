import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ResourceModule } from 'ngx-resource';
import { ToastComponent } from './toast/toast.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
   imports: [
       BrowserModule,
       FormsModule,
       ReactiveFormsModule,
       HttpModule,
       AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAbgbFXX-AunchKLoDFhmgiYUJaVsmCXKc',
        libraries: ["places"]
       }),
       ResourceModule.forRoot()
   ],
   exports: [
       // Shared Modules
       BrowserModule,
       FormsModule,
       ReactiveFormsModule,
       HttpModule,
       AgmCoreModule,
       // Shared Components
       ToastComponent
   ],
   declarations: [ToastComponent],
   providers: [ToastComponent],
})
export class SharedModule { }
