import { Injectable } from '@angular/core';
import { AlertifyService, MessageType, PositionType } from '../../../admin/alertify.service';
import { HttpClientService } from '../../http-client.service';
import { CreateDistrictCommand } from '../../../../contracts/district/createDistrictCommand';
import { Paginate } from '../../../../contracts/common/paginate';
import { GetListDistrictListItemDto } from '../../../../contracts/district/getListDistrictListItemDto';
import { HttpErrorResponse } from '@angular/common/http';
import { DeletedDistrictResponse } from '../../../../contracts/district/deletedDistrictResponse';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  constructor(private alertfy: AlertifyService,private httpClientService: HttpClientService) { }
  create(createDistrictCommand: CreateDistrictCommand, successCallBack?: any) {
    this.httpClientService.post({
      controller: "Districts"
    },createDistrictCommand)
    .subscribe(result => {
      successCallBack();
    })
  }
  async get(pageIndex: number = 0, pageSize: number = 5,successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) : Promise<Paginate<GetListDistrictListItemDto>> {
    const promiseData: Promise<Paginate<GetListDistrictListItemDto>> = this.httpClientService.get<Paginate<GetListDistrictListItemDto>>({
        controller: "Districts",
        queryString: `PageIndex=${pageIndex}&PageSize=${pageSize}`
    }).toPromise();

    promiseData.then(d => successCallBack())
    .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message));

    return await promiseData;
}

  update() {
    
  }
  async delete(id: string) : Promise<DeletedDistrictResponse> {
    const deletedCategoryResponse: Observable<DeletedDistrictResponse> = this.httpClientService.delete<DeletedDistrictResponse>({
      controller: "Countries"
    },id);
    this.alertfy.message(`ID'si :${id}           Olan Semt Başarıyla Silinmiştir`,{messageType: MessageType.Success, position: PositionType.TopRight})
    return await firstValueFrom(deletedCategoryResponse);
  }
}
