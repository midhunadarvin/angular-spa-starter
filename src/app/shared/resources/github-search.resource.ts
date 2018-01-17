import { Injectable } from '@angular/core';
import { Resource, ResourceParams, ResourceAction, ResourceMethodStrict } from 'ngx-resource';
import { ResourceMethod } from 'ngx-resource/src/Interfaces';
import { RequestMethod } from '@angular/http';

import { AppConfig } from '../../config/app.config';

@Injectable()
@ResourceParams({
	url: AppConfig.API_ENDPOINT + '/search/'
})
export class GithubSearchResource extends Resource {

	@ResourceAction({
		method: RequestMethod.Get,
		path: '/repositories'
	})
	public get: ResourceMethod<{ q: any}, any>;

}
