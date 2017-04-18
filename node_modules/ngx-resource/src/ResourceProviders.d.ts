import { Provider, Type } from '@angular/core';
import { Resource } from './Resource';
export declare class ResourceProviders {
    static mainProvidersName: string;
    static providers: {
        [id: string]: Provider[];
    };
    static add(resource: Type<Resource>, subSet?: string): void;
    static get(subSet?: string): Provider[];
}
