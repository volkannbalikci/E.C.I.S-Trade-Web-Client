import { Injectable } from '@angular/core';
import { AlertifyService, MessageType, PositionType } from '../../../admin/alertify.service';
import { HttpClientService } from '../../http-client.service';
import { CreateAddressCommand } from '../../../../contracts/address/createAddressCommand';
import { GetListAddressListItemDto } from '../../../../contracts/address/getListAddressListItemDto';
import { Paginate } from '../../../../contracts/common/paginate';
import { HttpErrorResponse } from '@angular/common/http';
import { DeletedAddressResponse } from '../../../../contracts/address/deletedAddressResponse';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private alertfy: AlertifyService,private httpClientService: HttpClientService) { }
  create(createAddressCommand: CreateAddressCommand, successCallBack?: any) {
    this.httpClientService.post({
      controller: "Addresses"
    },createAddressCommand)
    .subscribe(result => {
      successCallBack();
    })
  }
  async get(pageIndex: number = 0, pageSize: number = 5,successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) : Promise<Paginate<GetListAddressListItemDto>> {
    const promiseData: Promise<Paginate<GetListAddressListItemDto>> = this.httpClientService.get<Paginate<GetListAddressListItemDto>>({
        controller: "Addresses",
        queryString: `PageIndex=${pageIndex}&PageSize=${pageSize}`
    }).toPromise();

    promiseData.then(d => successCallBack())
    .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message));

    return await promiseData;
}

  update() {
    
  }
  async delete(id: string) : Promise<DeletedAddressResponse> {
    const deletedCategoryResponse: Observable<DeletedAddressResponse> = this.httpClientService.delete<DeletedAddressResponse>({
      controller: "Addresses"
    },id);
    this.alertfy.message(`ID'si :${id}           Olan Adres Başarıyla Silinmiştir`,{messageType: MessageType.Success, position: PositionType.TopRight})
    return await firstValueFrom(deletedCategoryResponse);
  }
}
