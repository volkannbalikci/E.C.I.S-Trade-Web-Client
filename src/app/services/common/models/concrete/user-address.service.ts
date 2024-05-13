import { Injectable } from '@angular/core';
import { AlertifyService, MessageType, PositionType } from '../../../admin/alertify.service';
import { HttpClientService } from '../../http-client.service';
import { CreateUserAddressCommand } from '../../../../contracts/userAddress/createUserAddressCommand';
import { Paginate } from '../../../../contracts/common/paginate';
import { GetListUserAddressListItemDto } from '../../../../contracts/userAddress/getListUserAddressListItemDto';
import { HttpErrorResponse } from '@angular/common/http';
import { DeletedUserAddressResponse } from '../../../../contracts/userAddress/deletedUserAddressResponse';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAddressService {
  constructor(private alertfy: AlertifyService,private httpClientService: HttpClientService) { }
  create(createUserAddressCommand: CreateUserAddressCommand, successCallBack?: any) {
    this.httpClientService.post({
      controller: "UserAddresses"
    },createUserAddressCommand)
    .subscribe(result => {
      successCallBack();
    })
  }
  async get(pageIndex: number = 0, pageSize: number = 5,successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) : Promise<Paginate<GetListUserAddressListItemDto>> {
    const promiseData: Promise<Paginate<GetListUserAddressListItemDto>> = this.httpClientService.get<Paginate<GetListUserAddressListItemDto>>({
        controller: "UserAddresses",
        queryString: `PageIndex=${pageIndex}&PageSize=${pageSize}`
    }).toPromise();

    promiseData.then(d => successCallBack())
    .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message));

    return await promiseData;
}

  update() {
    
  }
  async delete(id: string) : Promise<DeletedUserAddressResponse> {
    const deletedCategoryResponse: Observable<DeletedUserAddressResponse> = this.httpClientService.delete<DeletedUserAddressResponse>({
      controller: "UserAddresses"
    },id);
    this.alertfy.message(`ID'si :${id}           Olan Kullanıcı Adresi Başarıyla Silinmiştir`,{messageType: MessageType.Success, position: PositionType.TopRight})
    return await firstValueFrom(deletedCategoryResponse);
  }
}
