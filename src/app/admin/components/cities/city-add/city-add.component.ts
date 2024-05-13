import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { CityService } from '../../../../services/common/models/concrete/city.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatPaginator } from '@angular/material/paginator';
import { GetListCityListItemDto } from '../../../../contracts/city/getListCityListItemDto';
import { GetListCountryListItemDto } from '../../../../contracts/country/getListCountryListItemDto';
import { Paginate } from '../../../../contracts/common/paginate';
import { AlertifyService, MessageType, PositionType } from '../../../../services/admin/alertify.service';
import { CountryService } from '../../../../services/common/models/concrete/country.service';
import { CreateCityCommand } from '../../../../contracts/city/createCityCommand';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrl: './city-add.component.css'
})
export class CityAddComponent extends BaseComponent implements OnInit  {
  constructor(private cityService: CityService,private countryService: CountryService, spinner: NgxSpinnerService, private alertfy: AlertifyService) {
    super(spinner)
   }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    this.getCountries();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  countries: GetListCountryListItemDto[] = null


  async getCountries(){
   let allCountries: Paginate<GetListCountryListItemDto> = await this.countryService.get(0, this.countries? this.countries.length : 25  ,() => this.hideSpinner(SpinnerType.BallAtom), errorMessage=> 
     this.alertfy.message(errorMessage, {
       dismissOthers: true,
       messageType: MessageType.Error,
       position: PositionType.TopRight
     })
   )
   this.countries = allCountries.items;
   this.countries.length = allCountries.count;
  }

  @Output() createdCity: EventEmitter<CreateCityCommand> = new EventEmitter();
  create(countryId: string, cityName: HTMLInputElement){
    console.log(countryId + "   aaaa" + cityName.value);
    this.showSpinner(SpinnerType.BallAtom)
    const create_city_command: CreateCityCommand = new CreateCityCommand();
    create_city_command.countryId = countryId;
    create_city_command.name = cityName.value;
    this.cityService.create(create_city_command, () => 
      {
        this.hideSpinner(SpinnerType.BallAtom)
        this.alertfy.message("Şehir Başarıyla Eklenmiştir", {
          dismissOthers:true,
          messageType: MessageType.Success,
          position: PositionType.TopRight
        });
        this.createdCity.emit(create_city_command);
      });
  }
}
