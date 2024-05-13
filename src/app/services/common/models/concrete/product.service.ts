import { Injectable } from '@angular/core';
import { HttpClientService } from '../../http-client.service';
import { GetListProductListItemDto } from '../../../../contracts/products/getListProductListItemDto';
import { HttpErrorResponse } from '@angular/common/http';
import { Paginate } from '../../../../contracts/common/paginate';
import { CreateProductCommand } from '../../../../contracts/products/createProductCommand';


@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private httpClientService: HttpClientService) { }
    create(createProductCommand: CreateProductCommand, successCallBack?: any) {
        this.httpClientService.post({
          controller: "Products"
        },createProductCommand)
        .subscribe(result => {
          successCallBack();
        })
      }

    async get(pageIndex: number = 0, pageSize: number = 5,successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) : Promise<Paginate<GetListProductListItemDto>> {
        const promiseData: Promise<Paginate<GetListProductListItemDto>> = this.httpClientService.get<Paginate<GetListProductListItemDto>>({
            controller: "Products",
            queryString: `PageIndex=${pageIndex}&PageSize=${pageSize}`
        }).toPromise();

        promiseData.then(d => successCallBack())
        .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message));

        return await promiseData;
    }

    async getProductsByCategoryId(id: string,pageIndex: number = 0, pageSize: number = 5,successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) : Promise<Paginate<GetListProductListItemDto>> {
        const promiseData: Promise<Paginate<GetListProductListItemDto>> = this.httpClientService.get<Paginate<GetListProductListItemDto>>({
            controller: "Products/getByCategoryId",
            queryString: `PageIndex=${pageIndex}&PageSize=${pageSize}`
        },id).toPromise();

        promiseData.then(d => successCallBack())
        .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message));

        return await promiseData;
    }

    async getProductsByBrandId(id: string,pageIndex: number = 0, pageSize: number = 5,successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) : Promise<Paginate<GetListProductListItemDto>> {
        const promiseData: Promise<Paginate<GetListProductListItemDto>> = this.httpClientService.get<Paginate<GetListProductListItemDto>>({
            controller: "Products/getByBrandId",
            queryString: `PageIndex=${pageIndex}&PageSize=${pageSize}`
        },id).toPromise();

        promiseData.then(d => successCallBack())
        .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message));

        return await promiseData;
    }

    update() {
        throw new Error('Method not implemented.');
    }
    delete() {
        throw new Error('Method not implemented.');
    }
}
