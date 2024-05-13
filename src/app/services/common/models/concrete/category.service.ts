import { Injectable } from '@angular/core';
import { HttpClientService } from '../../http-client.service';
import { CreateCategoryCommand } from '../../../../contracts/category/createCategoryCommand';
import { Paginate } from '../../../../contracts/common/paginate';
import { GetListCategoryListItemDto } from '../../../../contracts/category/getListCategoryListItemDto';
import { HttpErrorResponse } from '@angular/common/http';
import { DeletedCategoryResponse } from '../../../../contracts/category/deletedCategoryResponse';
import { Observable, firstValueFrom } from 'rxjs';
import { AlertifyService, MessageType, PositionType } from '../../../admin/alertify.service';
declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class CategoryService{

  constructor(private alertfy: AlertifyService,private httpClientService: HttpClientService) { }
  create(createCategoryCommand: CreateCategoryCommand, successCallBack?: any) {
    this.httpClientService.post({
      controller: "categories"
    },createCategoryCommand)
    .subscribe(result => {
      successCallBack();
    })
  }
  async get(pageIndex: number = 0, pageSize: number = 5,successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) : Promise<Paginate<GetListCategoryListItemDto>> {
    const promiseData: Promise<Paginate<GetListCategoryListItemDto>> = this.httpClientService.get<Paginate<GetListCategoryListItemDto>>({
        controller: "Categories",
        queryString: `PageIndex=${pageIndex}&PageSize=${pageSize}`
    }).toPromise();

    promiseData.then(d => successCallBack())
    .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message));

    return await promiseData;
}

  update() {
    
  }
  async delete(id: string) : Promise<DeletedCategoryResponse> {
    const deletedCategoryResponse: Observable<DeletedCategoryResponse> = this.httpClientService.delete<DeletedCategoryResponse>({
      controller: "Categories"
    },id);
    this.alertfy.message(`ID'si :${id}           Olan Kategori Başarıyla Silinmiştir`,{messageType: MessageType.Success, position: PositionType.TopRight})
    return await firstValueFrom(deletedCategoryResponse);
  }
}
