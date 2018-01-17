import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		data: { some_data: 'some value' },
		children: [
			{
				path: '',
				component: HomeComponent
			},
			{
				path: 'about',
				component: AboutComponent
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}
