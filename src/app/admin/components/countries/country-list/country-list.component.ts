import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountryService } from '../../../../services/common/models/concrete/country.service';
import { AlertifyService, MessageType, PositionType } from '../../../../services/admin/alertify.service';
import { GetListCountryListItemDto } from '../../../../contracts/country/getListCountryListItemDto';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CreateCountryCommand } from '../../../../contracts/country/createCountryCommand';
import { Paginate } from '../../../../contracts/common/paginate';
declare var $ : any;

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent extends BaseComponent implements OnInit {
  constructor(private countryService: CountryService, private alertfy: AlertifyService,spinner: NgxSpinnerService) {
    super(spinner)
   }
   displayedColumns: string[] = ['countryId', 'countryName', 'countryShortName' , 'delete', 'edit'];
   dataSource: MatTableDataSource<GetListCountryListItemDto> = null;
   @ViewChild(MatPaginator) paginator: MatPaginator;

   createdCategory(createdCategory: CreateCountryCommand){
    this.getCountries();
   }
    async getCountries(){
      let allCountries: Paginate<GetListCountryListItemDto> = await this.countryService.get(this.paginator? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5 ,() => this.hideSpinner(SpinnerType.BallAtom), errorMessage=> 
        this.alertfy.message(errorMessage, {
          dismissOthers: true,
          messageType: MessageType.Error,
          position: PositionType.TopRight
        })
      )
      this.dataSource = new MatTableDataSource<GetListCountryListItemDto>(allCountries.items);
      this.paginator.length = allCountries.count;
      this.paginator.pageSize = allCountries.size;
      this.paginator.pageIndex = allCountries.index;
    }
    
    async pageChanged(){
      await this.getCountries(); 
     }

     animation() {
      $(document).on('click','td',function() {
      alert('clicked');
      });
  }
     
  async ngOnInit() {
    this.showSpinner(SpinnerType.BallAtom);
    await this.getCountries();
    this.hideSpinner(SpinnerType.BallAtom);
  }
}

