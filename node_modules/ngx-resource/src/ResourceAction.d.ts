import { URLSearchParams } from '@angular/http';
import { ResourceActionBase } from './Interfaces';
import { Resource } from './Resource';
export declare function ResourceAction(methodOptions?: ResourceActionBase): (target: Resource, propertyKey: string) => void;
export declare function setDataToObject(ret: any, resp: any): any;
export declare function appendSearchParams(search: URLSearchParams, key: string, value: any): void;
