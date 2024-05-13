import { Injectable } from '@angular/core';
import { AlertifyService, MessageType, PositionType } from '../../../admin/alertify.service';
import { HttpClientService } from '../../http-client.service';
import { CreateCountryCommand } from '../../../../contracts/country/createCountryCommand';
import { GetListCountryListItemDto } from '../../../../contracts/country/getListCountryListItemDto';
import { Paginate } from '../../../../contracts/common/paginate';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { DeletedCountryResponse } from '../../../../contracts/country/deletedCountryResponse';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

 
  constructor(private alertfy: AlertifyService,private httpClientService: HttpClientService) { }
  create(createCountryCommand: CreateCountryCommand, successCallBack?: any) {
    this.httpClientService.post({
      controller: "Countries"
    },createCountryCommand)
    .subscribe(result => {
      successCallBack();
    })
  }
  async get(pageIndex: number = 0, pageSize: number = 5,successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) : Promise<Paginate<GetListCountryListItemDto>> {
    const promiseData: Promise<Paginate<GetListCountryListItemDto>> = this.httpClientService.get<Paginate<GetListCountryListItemDto>>({
        controller: "Countries",
        queryString: `PageIndex=${pageIndex}&PageSize=${pageSize}`
    }).toPromise();

    promiseData.then(d => successCallBack())
    .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message));

    return await promiseData;
}

  update() {
    
  }
  async delete(id: string) : Promise<DeletedCountryResponse> {
    const deletedCategoryResponse: Observable<DeletedCountryResponse> = this.httpClientService.delete<DeletedCountryResponse>({
      controller: "Countries"
    },id);
    this.alertfy.message(`ID'si :${id}           Olan Kategori Başarıyla Silinmiştir`,{messageType: MessageType.Success, position: PositionType.TopRight})
    return await firstValueFrom(deletedCategoryResponse);
  }
}
