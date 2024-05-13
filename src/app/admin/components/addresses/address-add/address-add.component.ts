import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { CountryService } from '../../../../services/common/models/concrete/country.service';
import { CityService } from '../../../../services/common/models/concrete/city.service';
import { DistrictService } from '../../../../services/common/models/concrete/district.service';
import { NeighbourhoodService } from '../../../../services/common/models/concrete/neighbourhood.service';
import { AddressService } from '../../../../services/common/models/concrete/address.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, PositionType } from '../../../../services/admin/alertify.service';
import { MatPaginator } from '@angular/material/paginator';
import { GetListCountryListItemDto } from '../../../../contracts/country/getListCountryListItemDto';
import { GetListCityListItemDto } from '../../../../contracts/city/getListCityListItemDto';
import { GetListDistrictListItemDto } from '../../../../contracts/district/getListDistrictListItemDto';
import { GetListNeighbourhoodListItemDto } from '../../../../contracts/neighbourhood/getListNeighbourhoodListItemDto';
import { Paginate } from '../../../../contracts/common/paginate';
import { CreateDistrictCommand } from '../../../../contracts/district/createDistrictCommand';
import { CreateAddressCommand } from '../../../../contracts/address/createAddressCommand';

@Component({
  selector: 'app-address-add',
  templateUrl: './address-add.component.html',
  styleUrl: './address-add.component.css'
})
export class AddressAddComponent extends BaseComponent implements OnInit  {
  constructor(private addressService: AddressService, private countryService: CountryService, private cityService: CityService, private districtService: DistrictService, private neighbourhoodService: NeighbourhoodService,spinner: NgxSpinnerService, private alertfy: AlertifyService) {
    super(spinner)
   }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    this.getCountries();
    this.getCities();
    this.getDistricts();
    this.getNeighbourhoods();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  countries: GetListCountryListItemDto[] = null;
  cities: GetListCityListItemDto[] = null;
  districts: GetListDistrictListItemDto[] = null;
  neighbouthoods: GetListNeighbourhoodListItemDto[] = null;

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

   async getDistricts(){
    let allDistricts: Paginate<GetListDistrictListItemDto> = await this.districtService.get(0, this.districts? this.districts.length : 25  ,() => this.hideSpinner(SpinnerType.BallAtom), errorMessage=> 
      this.alertfy.message(errorMessage, {
        dismissOthers: true,
        messageType: MessageType.Error,
        position: PositionType.TopRight
      })
    )
    this.districts = allDistricts.items;
    this.districts.length = allDistricts.count;
   }

   async getNeighbourhoods(){
    let allNeighbourhoods: Paginate<GetListNeighbourhoodListItemDto> = await this.neighbourhoodService.get(0, this.neighbouthoods? this.neighbouthoods.length : 25  ,() => this.hideSpinner(SpinnerType.BallAtom), errorMessage=> 
      this.alertfy.message(errorMessage, {
        dismissOthers: true,
        messageType: MessageType.Error,
        position: PositionType.TopRight
      })
    )
    this.neighbouthoods = allNeighbourhoods.items;
    this.neighbouthoods.length = allNeighbourhoods.count;
   }

   countryId: string
    cityId: string
    districtId: string
    neighbourhoodId: string
    postalCode: string
    addressDetails: string

  @Output() createdAddress : EventEmitter<CreateAddressCommand> = new EventEmitter();
  create(countryId: any, cityId: any, districtId: any, neighbourhoodId: any, postalCode: HTMLInputElement, addressDetails: HTMLInputElement){
    this.showSpinner(SpinnerType.BallAtom)
    const create_address_command: CreateAddressCommand = new CreateAddressCommand();
    create_address_command.countryId = countryId;
    create_address_command.cityId = cityId;
    create_address_command.districtId = districtId;
    create_address_command.neighbourhoodId = neighbourhoodId;
    create_address_command.postalCode = postalCode.value;
    create_address_command.addressDetails = addressDetails.value;
    this.addressService.create(create_address_command, () => 
      {
        this.hideSpinner(SpinnerType.BallAtom)
        this.alertfy.message("Adres Başarıyla Eklenmiştir", {
          dismissOthers:true,
          messageType: MessageType.Success,
          position: PositionType.TopRight
        });
        this.createdAddress.emit(create_address_command);
      });
  }
}
