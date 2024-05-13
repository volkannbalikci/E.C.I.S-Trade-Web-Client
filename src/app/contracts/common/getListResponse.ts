import { BasePageableModel } from "./basePageableModel";

export class GetListResponse<T> extends BasePageableModel{
    items: T[];
}