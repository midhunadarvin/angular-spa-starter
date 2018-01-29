import { Injectable } from '@angular/core';
import { Resource, ResourceParams, ResourceAction, ResourceMethodStrict } from 'ngx-resource';
import { ResourceMethod } from 'ngx-resource/src/Interfaces';
import { RequestMethod } from '@angular/http';

import { environment } from '../../../environments/environment';
interface IQuery {
	owner?: number;
	repo?: string;
	since?: number;
}
@Injectable()
@ResourceParams({
		url: environment.API_ENDPOINT + '/repos/'
})
export class GithubRepoResource extends Resource {

	@ResourceAction({
		method: RequestMethod.Get,
		path: '/{!owner}/{!repo}'
	})
	get: ResourceMethod<IQuery, any>;

}
