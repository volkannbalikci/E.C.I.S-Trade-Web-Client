import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { DistrictService } from '../../../../services/common/models/concrete/district.service';
import { AlertifyService, MessageType, PositionType } from '../../../../services/admin/alertify.service';
import { GetListDistrictListItemDto } from '../../../../contracts/district/getListDistrictListItemDto';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CreateDistrictCommand } from '../../../../contracts/district/createDistrictCommand';
import { Paginate } from '../../../../contracts/common/paginate';
declare var $: any;

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrl: './district-list.component.css'
})
export class DistrictListComponent extends BaseComponent implements OnInit {
  constructor(private districtService: DistrictService, private alertfy: AlertifyService,spinner: NgxSpinnerService) {
    super(spinner)
   }
   displayedColumns: string[] = ['id', 'cityId', 'cityName', 'districtName', 'delete', 'edit'];
   dataSource: MatTableDataSource<GetListDistrictListItemDto> = null;
   @ViewChild(MatPaginator) paginator: MatPaginator;
   
   createdDistrict(createDistrict: CreateDistrictCommand){
    this.getDistricts();
   }
    async getDistricts(){
      let allDistricts: Paginate<GetListDistrictListItemDto> = await this.districtService.get(this.paginator? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5 ,() => this.hideSpinner(SpinnerType.BallAtom), errorMessage=> 
        this.alertfy.message(errorMessage, {
          dismissOthers: true,
          messageType: MessageType.Error,
          position: PositionType.TopRight
        })
      )
      this.dataSource = new MatTableDataSource<GetListDistrictListItemDto>(allDistricts.items);
      this.paginator.length = allDistricts.count;
      this.paginator.pageSize = allDistricts.size;
      this.paginator.pageIndex = allDistricts.index;
    }
    
    async pageChanged(){
      await this.getDistricts(); 
     }

     animation() {
      $(document).on('click','td',function() {
      alert('clicked');
      });
  }
     
  async ngOnInit() {
    this.showSpinner(SpinnerType.BallAtom);
    await this.getDistricts();
    this.hideSpinner(SpinnerType.BallAtom);
  }
}
