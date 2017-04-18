import { Http, Request } from '@angular/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ResourceParamsBase } from './Interfaces';
import { ResourceActionBase } from './Interfaces';
import { ResourceModel } from './ResourceModel';
export declare class Resource {
    protected http: Http;
    protected injector: Injector;
    private _url;
    private _path;
    private _headers;
    private _params;
    private _data;
    constructor(http: Http, injector: Injector);
    /**
     * Get main url of the resource
     * @returns {string|Promise<string>}
     */
    getUrl(methodOptions?: ResourceActionBase): string | Promise<string>;
    /**
     * Set resource url
     * @param url
     */
    setUrl(url: string): void;
    /**
     * Get path of the resource
     * @returns {string|Promise<string>}
     */
    getPath(methodOptions?: ResourceActionBase): string | Promise<string>;
    /**
     * Set resource path
     * @param path
     */
    setPath(path: string): void;
    /**
     * Get headers
     * @returns {any|Promise<any>}
     */
    getHeaders(methodOptions?: ResourceActionBase): any | Promise<any>;
    /**
     * Set resource headers
     * @param headers
     */
    setHeaders(headers: any): void;
    /**
     * Get default params
     * @returns {any|Promise<any>|{}}
     */
    getParams(methodOptions?: ResourceActionBase): any | Promise<any>;
    /**
     * Set default resource params
     * @param params
     */
    setParams(params: any): void;
    /**
     * Get default data
     * @returns {any|Promise<any>|{}}
     */
    getData(methodOptions?: ResourceActionBase): any | Promise<any>;
    /**
     * Set default resource params
     * @param data
     */
    setData(data: any): void;
    /**
     * That is called before executing request
     * @param req
     */
    requestInterceptor(req: Request, methodOptions?: ResourceActionBase): Request;
    /**
     * Request observable interceptor
     * @param observable
     * @returns {Observable<any>}
     */
    responseInterceptor(observable: Observable<any>, req: Request, methodOptions?: ResourceActionBase): Observable<any>;
    removeTrailingSlash(): boolean;
    initResultObject(): any;
    map(item: any): any;
    filter(item: any): boolean;
    getResourceOptions(): ResourceParamsBase;
    createModel(): ResourceModel<any>;
    protected _request(req: Request, methodOptions?: ResourceActionBase): Observable<any>;
    private _getUrl(methodOptions?);
    private _getPath(methodOptions?);
    private _getHeaders(methodOptions?);
    private _getParams(methodOptions?);
    private _getData(methodOptions?);
}
