import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { CityService } from '../../../../services/common/models/concrete/city.service';
import { AlertifyService, MessageType, PositionType } from '../../../../services/admin/alertify.service';
import { GetListCityListItemDto } from '../../../../contracts/city/getListCityListItemDto';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CreateCityCommand } from '../../../../contracts/city/createCityCommand';
import { Paginate } from '../../../../contracts/common/paginate';
declare var $: any;

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent extends BaseComponent implements OnInit {
  constructor(private cityService: CityService, private alertfy: AlertifyService,spinner: NgxSpinnerService) {
    super(spinner)
   }
   displayedColumns: string[] = ['cityId', 'cityName', 'countryId', 'countryName', 'countryShortName', 'delete', 'edit'];
   dataSource: MatTableDataSource<GetListCityListItemDto> = null;
   @ViewChild(MatPaginator) paginator: MatPaginator;
   
   createdCity(createCity: CreateCityCommand){
    this.getCities();
   }
    async getCities(){
      let allCities: Paginate<GetListCityListItemDto> = await this.cityService.get(this.paginator? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5 ,() => this.hideSpinner(SpinnerType.BallAtom), errorMessage=> 
        this.alertfy.message(errorMessage, {
          dismissOthers: true,
          messageType: MessageType.Error,
          position: PositionType.TopRight
        })
      )
      this.dataSource = new MatTableDataSource<GetListCityListItemDto>(allCities.items);
      this.paginator.length = allCities.count;
      this.paginator.pageSize = allCities.size;
      this.paginator.pageIndex = allCities.index;
    }
    
    async pageChanged(){
      await this.getCities(); 
     }

     animation() {
      $(document).on('click','td',function() {
      alert('clicked');
      });
  }
     
  async ngOnInit() {
    this.showSpinner(SpinnerType.BallAtom);
    await this.getCities();
    this.hideSpinner(SpinnerType.BallAtom);
  }
}
