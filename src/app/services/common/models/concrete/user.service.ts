import { Injectable } from '@angular/core';
import { AlertifyService, MessageType, PositionType } from '../../../admin/alertify.service';
import { HttpClientService } from '../../http-client.service';
import { CreateUserCommand } from '../../../../contracts/user/createUserCommand';
import { GetListUserListItemDto } from '../../../../contracts/user/getListUserListItemDto';
import { Paginate } from '../../../../contracts/common/paginate';
import { HttpErrorResponse } from '@angular/common/http';
import { DeletedUserResponse } from '../../../../contracts/user/deletedUserResponse';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private alertfy: AlertifyService,private httpClientService: HttpClientService) { }
  create(createUserCommand: CreateUserCommand, successCallBack?: any) {
    this.httpClientService.post({
      controller: "Users"
    },createUserCommand)
    .subscribe(result => {
      successCallBack();
    })
  }
  async get(pageIndex: number = 0, pageSize: number = 5,successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) : Promise<Paginate<GetListUserListItemDto>> {
    const promiseData: Promise<Paginate<GetListUserListItemDto>> = this.httpClientService.get<Paginate<GetListUserListItemDto>>({
        controller: "Users",
        queryString: `PageIndex=${pageIndex}&PageSize=${pageSize}`
    }).toPromise();

    promiseData.then(d => successCallBack())
    .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message));

    return await promiseData;
}

  update() {
    
  }
  async delete(id: string) : Promise<DeletedUserResponse> {
    const deletedCategoryResponse: Observable<DeletedUserResponse> = this.httpClientService.delete<DeletedUserResponse>({
      controller: "Users"
    },id);
    this.alertfy.message(`ID'si :${id}           Olan Kullanıcı Başarıyla Silinmiştir`,{messageType: MessageType.Success, position: PositionType.TopRight})
    return await firstValueFrom(deletedCategoryResponse);
  }
}
