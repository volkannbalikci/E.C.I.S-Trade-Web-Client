import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { DistrictService } from '../../../../services/common/models/concrete/district.service';
import { AlertifyService, MessageType, PositionType } from '../../../../services/admin/alertify.service';
import { CreateDistrictCommand } from '../../../../contracts/district/createDistrictCommand';
import { CityService } from '../../../../services/common/models/concrete/city.service';
import { GetListCityListItemDto } from '../../../../contracts/city/getListCityListItemDto';
import { Paginate } from '../../../../contracts/common/paginate';

@Component({
  selector: 'app-district-add',
  templateUrl: './district-add.component.html',
  styleUrl: './district-add.component.css'
})
export class DistrictAddComponent extends BaseComponent implements OnInit {
  constructor(private cityService: CityService, spinner: NgxSpinnerService, private districtService: DistrictService, private alertfy: AlertifyService) {
    super(spinner)
   }
  ngOnInit(): void {
  this.showSpinner(SpinnerType.BallAtom);
  this.getCities();
  }

  cities: GetListCityListItemDto[] = null


  async getCities(){
   let allCities: Paginate<GetListCityListItemDto> = await this.cityService.get(0, this.cities? this.cities.length : 25  ,() => this.hideSpinner(SpinnerType.BallAtom), errorMessage=> 
     this.alertfy.message(errorMessage, {
       dismissOthers: true,
       messageType: MessageType.Error,
       position: PositionType.TopRight
     })
   )
   this.cities = allCities.items;
   this.cities.length = allCities.count;
  }

  @Output() createdDistrict: EventEmitter<CreateDistrictCommand> = new EventEmitter();
  create(CityId: any, Name: HTMLInputElement){
    this.showSpinner(SpinnerType.BallAtom)
    const create_district_command: CreateDistrictCommand = new CreateDistrictCommand();
    create_district_command.cityId = CityId;
    create_district_command.name = Name.value;
    this.districtService.create(create_district_command, () => 
      {
        this.hideSpinner(SpinnerType.BallAtom)
        this.alertfy.message("Semt Başarıyla Eklenmiştir", {
          dismissOthers:true,
          messageType: MessageType.Success,
          position: PositionType.TopRight
        });
        this.createdDistrict.emit(create_district_command);
      });
  }
}

