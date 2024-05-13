import { Injectable } from '@angular/core';
import { CreateBrandCommand } from '../../../../contracts/brand/createBrandCommand';
import { AlertifyService, MessageType, PositionType } from '../../../admin/alertify.service';
import { HttpClientService } from '../../http-client.service';
import { GetListBrandListItemDto } from '../../../../contracts/brand/getListBrandListItemDto';
import { Paginate } from '../../../../contracts/common/paginate';
import { HttpErrorResponse } from '@angular/common/http';
import { DeletedBrandResponse } from '../../../../contracts/brand/deletedBrandResponse';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private alertfy: AlertifyService,private httpClientService: HttpClientService) { }

  create(createBrandCommand: CreateBrandCommand, successCallBack?: any) {
    this.httpClientService.post({
      controller: "Brands"
    },createBrandCommand)
    .subscribe(result => {
      successCallBack();
    })

  }
  async get(pageIndex: number = 0, pageSize: number = 5,successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) : Promise<Paginate<GetListBrandListItemDto>> {
    const promiseData: Promise<Paginate<GetListBrandListItemDto>> = this.httpClientService.get<Paginate<GetListBrandListItemDto>>({
        controller: "Brands",
        queryString: `PageIndex=${pageIndex}&PageSize=${pageSize}`
    }).toPromise();

    promiseData.then(d => successCallBack())
    .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message));

    return await promiseData;
}

  update() {
    
  }
  async delete(id: string) : Promise<DeletedBrandResponse> {
    const deletedCategoryResponse: Observable<DeletedBrandResponse> = this.httpClientService.delete<DeletedBrandResponse>({
      controller: "Categories"
    },id);
    this.alertfy.message(`ID'si :${id}           Olan Kategori Başarıyla Silinmiştir`,{messageType: MessageType.Success, position: PositionType.TopRight})
    return await firstValueFrom(deletedCategoryResponse);
  }
}
