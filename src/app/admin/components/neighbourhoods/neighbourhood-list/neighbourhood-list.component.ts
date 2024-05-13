import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { NeighbourhoodService } from '../../../../services/common/models/concrete/neighbourhood.service';
import { AlertifyService, MessageType, PositionType } from '../../../../services/admin/alertify.service';
import { GetListNeighbourhoodListItemDto } from '../../../../contracts/neighbourhood/getListNeighbourhoodListItemDto';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CreateNeighbourhoodCommand } from '../../../../contracts/neighbourhood/createNeighbourhoodCommand';
import { Paginate } from '../../../../contracts/common/paginate';
declare var $ : any;

@Component({
  selector: 'app-neighbourhood-list',
  templateUrl: './neighbourhood-list.component.html',
  styleUrl: './neighbourhood-list.component.css'
})
export class NeighbourhoodListComponent extends BaseComponent implements OnInit {
  constructor(private neighbourHoodService: NeighbourhoodService, private alertfy: AlertifyService,spinner: NgxSpinnerService) {
    super(spinner)
   }
   displayedColumns: string[] = ['id', 'districtId', 'districtName', 'name', 'delete', 'edit'];
   dataSource: MatTableDataSource<GetListNeighbourhoodListItemDto> = null;
   @ViewChild(MatPaginator) paginator: MatPaginator;
   
   createdNeighbourhood(createNeighbourhoodCommand: CreateNeighbourhoodCommand){
    this.getNeighbourhoods();
   }
    async getNeighbourhoods(){
      let allNeighbourhoods: Paginate<GetListNeighbourhoodListItemDto> = await this.neighbourHoodService.get(this.paginator? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5 ,() => this.hideSpinner(SpinnerType.BallAtom), errorMessage=> 
        this.alertfy.message(errorMessage, {
          dismissOthers: true,
          messageType: MessageType.Error,
          position: PositionType.TopRight
        })
      )
      this.dataSource = new MatTableDataSource<GetListNeighbourhoodListItemDto>(allNeighbourhoods.items);
      this.paginator.length = allNeighbourhoods.count;
      this.paginator.pageSize = allNeighbourhoods.size;
      this.paginator.pageIndex = allNeighbourhoods.index;
    }
    
    async pageChanged(){
      await this.getNeighbourhoods(); 
     }

     animation() {
      $(document).on('click','td',function() {
      alert('clicked');
      });
  }
     
  async ngOnInit() {
    this.showSpinner(SpinnerType.BallAtom);
    await this.getNeighbourhoods();
    this.hideSpinner(SpinnerType.BallAtom);
  }
}