import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ResourceProviders } from './src/ResourceProviders';
export * from './src/Resource';
export * from './src/ResourceAction';
export * from './src/ResourceCRUD';
export * from './src/ResourceCRUDBase';
export * from './src/ResourceGlobalConfig';
export * from './src/ResourceModel';
export * from './src/ResourceParams';
export * from './src/ResourceProviders';
var ResourceModule = (function () {
    function ResourceModule() {
    }
    ResourceModule.forRoot = function () {
        return {
            ngModule: ResourceModule,
            providers: ResourceProviders.providers[ResourceProviders.mainProvidersName]
        };
    };
    ResourceModule.forChild = function (subSet) {
        return {
            ngModule: ResourceModule,
            providers: ResourceProviders.providers[subSet] ? ResourceProviders.providers[subSet] : []
        };
    };
    return ResourceModule;
}());
export { ResourceModule };
ResourceModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpModule]
            },] },
];
/** @nocollapse */
ResourceModule.ctorParameters = function () { return []; };
