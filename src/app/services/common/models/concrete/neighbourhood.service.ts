import { Injectable } from '@angular/core';
import { AlertifyService, MessageType, PositionType } from '../../../admin/alertify.service';
import { HttpClientService } from '../../http-client.service';
import { CreateNeighbourhoodCommand } from '../../../../contracts/neighbourhood/createNeighbourhoodCommand';
import { GetListNeighbourhoodListItemDto } from '../../../../contracts/neighbourhood/getListNeighbourhoodListItemDto';
import { Paginate } from '../../../../contracts/common/paginate';
import { HttpErrorResponse } from '@angular/common/http';
import { DeletedNeighbourhoodResponse } from '../../../../contracts/neighbourhood/deletedNeighbourhoodResponse';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NeighbourhoodService {
  constructor(private alertfy: AlertifyService,private httpClientService: HttpClientService) { }
  create(createNeighbourhoodCommand: CreateNeighbourhoodCommand, successCallBack?: any) {
    this.httpClientService.post({
      controller: "Neighbourhoods"
    },createNeighbourhoodCommand)
    .subscribe(result => {
      successCallBack();
    })
  }
  async get(pageIndex: number = 0, pageSize: number = 5,successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) : Promise<Paginate<GetListNeighbourhoodListItemDto>> {
    const promiseData: Promise<Paginate<GetListNeighbourhoodListItemDto>> = this.httpClientService.get<Paginate<GetListNeighbourhoodListItemDto>>({
        controller: "Neighbourhoods",
        queryString: `PageIndex=${pageIndex}&PageSize=${pageSize}`
    }).toPromise();

    promiseData.then(d => successCallBack())
    .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message));

    return await promiseData;
}

  update() {
    
  }
  async delete(id: string) : Promise<DeletedNeighbourhoodResponse> {
    const deletedCategoryResponse: Observable<DeletedNeighbourhoodResponse> = this.httpClientService.delete<DeletedNeighbourhoodResponse>({
      controller: "Neighbourhoods"
    },id);
    this.alertfy.message(`ID'si :${id}           Olan Mahalle Başarıyla Silinmiştir`,{messageType: MessageType.Success, position: PositionType.TopRight})
    return await firstValueFrom(deletedCategoryResponse);
  }
}
