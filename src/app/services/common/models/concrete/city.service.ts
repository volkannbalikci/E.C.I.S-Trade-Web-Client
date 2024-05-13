import { Injectable } from '@angular/core';
import { AlertifyService, MessageType, PositionType } from '../../../admin/alertify.service';
import { HttpClientService } from '../../http-client.service';
import { CreateCityCommand } from '../../../../contracts/city/createCityCommand';
import { GetListCityListItemDto } from '../../../../contracts/city/getListCityListItemDto';
import { Paginate } from '../../../../contracts/common/paginate';
import { HttpErrorResponse } from '@angular/common/http';
import { DeletedCityResponse } from '../../../../contracts/city/deletedCityResponse';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {


  constructor(private alertfy: AlertifyService,private httpClientService: HttpClientService) { }
  create(createCityCommand: CreateCityCommand, successCallBack?: any) {
    this.httpClientService.post({
      controller: "Cities"
    },createCityCommand)
    .subscribe(result => {
      successCallBack();
    })
  }
  async get(pageIndex: number = 0, pageSize: number = 5,successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) : Promise<Paginate<GetListCityListItemDto>> {
    const promiseData: Promise<Paginate<GetListCityListItemDto>> = this.httpClientService.get<Paginate<GetListCityListItemDto>>({
        controller: "Cities",
        queryString: `PageIndex=${pageIndex}&PageSize=${pageSize}`
    }).toPromise();

    promiseData.then(d => successCallBack())
    .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message));

    return await promiseData;
}

  update() {
    
  }
  async delete(id: string) : Promise<DeletedCityResponse> {
    const deletedCategoryResponse: Observable<DeletedCityResponse> = this.httpClientService.delete<DeletedCityResponse>({
      controller: "Cities"
    },id);
    this.alertfy.message(`ID'si :${id}           Olan Şehir Başarıyla Silinmiştir`,{messageType: MessageType.Success, position: PositionType.TopRight})
    return await firstValueFrom(deletedCategoryResponse);
  }
}
