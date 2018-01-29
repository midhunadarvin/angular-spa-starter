import { Injectable } from '@angular/core';
import { Resource, ResourceParams, ResourceAction, ResourceMethodStrict } from 'ngx-resource';
import { ResourceMethod } from 'ngx-resource/src/Interfaces';
import { RequestMethod } from '@angular/http';

import { environment } from '../../../environments/environment';

@Injectable()
@ResourceParams({
	url: environment.API_ENDPOINT + '/search/'
})
export class GithubSearchResource extends Resource {

	@ResourceAction({
		method: RequestMethod.Get,
		path: '/repositories'
	})
	get: ResourceMethod<{ q: any}, any>;

}
