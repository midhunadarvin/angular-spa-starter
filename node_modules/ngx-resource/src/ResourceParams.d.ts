import { Type } from '@angular/core';
import { ResourceParamsBase } from './Interfaces';
import { Resource } from './Resource';
export declare function ResourceParams(params?: ResourceParamsBase): (target: Type<Resource>) => void;
