import { Injectable } from '@angular/core';
import { Resource, ResourceParams, ResourceAction, ResourceMethodStrict } from 'ngx-resource';
import { ResourceMethod } from 'ngx-resource/src/Interfaces';
import { RequestMethod } from '@angular/http';

import { AppConfig } from '../../config/app.config';
import { IData } from '../models/user.model';

@Injectable()
@ResourceParams({
  url: AppConfig.API_ENDPOINT
})

export class AuthenticationResource extends Resource {

  @ResourceAction({
    method: RequestMethod.Get,
    path: '/login' + AppConfig.API_ENDPOINT_EXT
  })
  login: ResourceMethod<IData, any>;

  @ResourceAction({
    method: RequestMethod.Get,
    path: '/reset-password' + AppConfig.API_ENDPOINT_EXT
  })
  resetPassword: ResourceMethod<IData, any>;

   @ResourceAction({
    method: RequestMethod.Get,
    path: '/forgot-password' + AppConfig.API_ENDPOINT_EXT
  })
  validateToken: ResourceMethod<IData, any>;

   @ResourceAction({
    method: RequestMethod.Get,
    path: '/validate-token' + AppConfig.API_ENDPOINT_EXT
  })
  forgotPassword: ResourceMethod<IData, any>;

}
