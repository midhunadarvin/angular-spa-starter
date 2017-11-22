import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ResourceModule } from 'ngx-resource';
import { ToastComponent } from './toast/toast.component';
import { AgmCoreModule } from '@agm/core';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
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
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AgmCoreModule,
        // Shared Components
        ToastComponent,
        NavbarComponent,
        SidebarComponent
    ],
    declarations: [ToastComponent, NavbarComponent, SidebarComponent],
    providers: [ToastComponent],
})
export class SharedModule { }
