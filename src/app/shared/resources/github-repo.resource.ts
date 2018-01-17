import { Injectable } from '@angular/core';
import { Resource, ResourceParams, ResourceAction, ResourceMethodStrict } from 'ngx-resource';
import { ResourceMethod } from 'ngx-resource/src/Interfaces';
import { RequestMethod } from '@angular/http';

import { AppConfig } from '../../config/app.config';
interface IQuery {
	owner?: number;
	repo?: string;
	since?: number;
}
@Injectable()
@ResourceParams({
	url: AppConfig.API_ENDPOINT + '/repos/'
})
export class GithubRepoResource extends Resource {

	@ResourceAction({
		method: RequestMethod.Get,
		path: '/{!owner}/{!repo}'
	})
	public get: ResourceMethod<IQuery, any>;

}
