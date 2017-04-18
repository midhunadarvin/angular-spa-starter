import { Observable } from 'rxjs/Rx';
export declare class ResourceModel<R> {
    $resolved: boolean;
    $observable: Observable<any>;
    $abortRequest: () => void;
    $resource: R;
    static create(data?: any, commit?: boolean): void;
    $setData(data: any): this;
    $save(): this;
    $create(): this;
    $update(): this;
    $remove(): this;
    toJSON(): any;
    protected isNew(): boolean;
    private $resource_method(methodName);
}
