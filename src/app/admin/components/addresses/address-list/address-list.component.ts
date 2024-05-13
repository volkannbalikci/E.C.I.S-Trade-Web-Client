import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertifyService, MessageType, PositionType } from '../../../../services/admin/alertify.service';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { GetListAddressListItemDto } from '../../../../contracts/address/getListAddressListItemDto';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CreateAddressCommand } from '../../../../contracts/address/createAddressCommand';
import { Paginate } from '../../../../contracts/common/paginate';
import { AddressService } from '../../../../services/common/models/concrete/address.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrl: './address-list.component.css'
})
export class AddressListComponent extends BaseComponent implements OnInit {
  constructor(private alertfy: AlertifyService, spinner: NgxSpinnerService, private addressService: AddressService
  ) {
    super(spinner)
   }
   displayedColumns: string[] = ['addressId', 'countryId', 'countryName', 'cityId', 'cityName', 'districtId', 'districtName', 'neighbourhoodId', 'neighbourhoodName', 'addressDetails', 'postalCode', 'delete', 'edit'];
   dataSource: MatTableDataSource<GetListAddressListItemDto> = null;
   @ViewChild(MatPaginator) paginator: MatPaginator;

   createdAddress(createdAddress: CreateAddressCommand){
    this.getAddresses();
   }

   async getAddresses(){
    let allAddresses: Paginate<GetListAddressListItemDto> = await this.addressService.get(this.paginator? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5 ,() => this.hideSpinner(SpinnerType.BallAtom), errorMessage=> 
    this.alertfy.message(errorMessage, {
      dismissOthers: true,
      messageType: MessageType.Error,
      position: PositionType.TopRight
    })
    )
    this.dataSource = new MatTableDataSource<GetListAddressListItemDto>(allAddresses.items);
    this.paginator.length = allAddresses.count;
    this.paginator.pageSize = allAddresses.size;
    this.paginator.pageIndex = allAddresses.index
    }
  
   async pageChanged(){
    await this.getAddresses(); 
    
   }

  async ngOnInit() {
    this.showSpinner(SpinnerType.BallAtom);
    await this.getAddresses();
    this.hideSpinner(SpinnerType.BallAtom);
  }

}
