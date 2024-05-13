import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, PositionType } from '../../../../services/admin/alertify.service';
import { UserAddressService } from '../../../../services/common/models/concrete/user-address.service';
import { GetListUserAddressListItemDto } from '../../../../contracts/userAddress/getListUserAddressListItemDto';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Paginate } from '../../../../contracts/common/paginate';
import { CreateUserAddressCommand } from '../../../../contracts/userAddress/createUserAddressCommand';

@Component({
  selector: 'app-user-address-list',
  templateUrl: './user-address-list.component.html',
  styleUrl: './user-address-list.component.css'
})
export class UserAddressListComponent extends BaseComponent implements OnInit {
  constructor(private alertfy: AlertifyService, spinner: NgxSpinnerService, private userAddressService: UserAddressService
  ) {
    super(spinner)
   }
   displayedColumns: string[] = ['id', 'userId', 'countryId', 'cityId', 'districtId', 'neighbourhoodId', 'countryName', 'cityName', 'districtName', 'neighbourhoodName', 'addressPostalCode', 'addressDetails', 'userAddressIsMain', 'delete', 'edit'];
   dataSource: MatTableDataSource<GetListUserAddressListItemDto> = null;
   @ViewChild(MatPaginator) paginator: MatPaginator;

   createdUserAddress(createdUserAddress: CreateUserAddressCommand){
    this.getUserAddresses();
   }  

   async getUserAddresses(){
    let allUserAddresses: Paginate<GetListUserAddressListItemDto> = await this.userAddressService.get(this.paginator? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5 ,() => this.hideSpinner(SpinnerType.BallAtom), errorMessage=> 
    this.alertfy.message(errorMessage, {
      dismissOthers: true,
      messageType: MessageType.Error,
      position: PositionType.TopRight
    })
    )
    this.dataSource = new MatTableDataSource<GetListUserAddressListItemDto>(allUserAddresses.items);
    this.paginator.length = allUserAddresses.count;
    this.paginator.pageSize = allUserAddresses.size;
    this.paginator.pageIndex = allUserAddresses.index
    }

    async pageChanged(){
      await this.getUserAddresses(); 
     }

  async ngOnInit(){
    await this.getUserAddresses();
    this.showSpinner(SpinnerType.BallAtom);
  }
  }
  
