import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NeighbourhoodService } from '../../../../services/common/models/concrete/neighbourhood.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DistrictService } from '../../../../services/common/models/concrete/district.service';
import { AlertifyService, MessageType, PositionType } from '../../../../services/admin/alertify.service';
import { GetListDistrictListItemDto } from '../../../../contracts/district/getListDistrictListItemDto';
import { Paginate } from '../../../../contracts/common/paginate';
import { CreateDistrictCommand } from '../../../../contracts/district/createDistrictCommand';
import { CreateNeighbourhoodCommand } from '../../../../contracts/neighbourhood/createNeighbourhoodCommand';

@Component({
  selector: 'app-neighbourhood-add',
  templateUrl: './neighbourhood-add.component.html',
  styleUrl: './neighbourhood-add.component.css'
})
export class NeighbourhoodAddComponent extends BaseComponent implements OnInit {
  constructor(private neighbourhoodService: NeighbourhoodService, spinner: NgxSpinnerService, private districtService: DistrictService, private alertfy: AlertifyService) {
    super(spinner)
   }
  ngOnInit(): void {
  this.showSpinner(SpinnerType.BallAtom);
  this.getDistricts();
  }

  districts: GetListDistrictListItemDto[] = null


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

  @Output() createdNeighbourhood: EventEmitter<CreateNeighbourhoodCommand> = new EventEmitter();
  create(districtId: any, name: HTMLInputElement){
    this.showSpinner(SpinnerType.BallAtom)
    const create_neighbourhood_command: CreateNeighbourhoodCommand = new CreateNeighbourhoodCommand();
    create_neighbourhood_command.districtId = districtId;
    create_neighbourhood_command.name = name.value;
    this.neighbourhoodService.create(create_neighbourhood_command, () => 
      {
        this.hideSpinner(SpinnerType.BallAtom)
        this.alertfy.message("Mahalle Başarıyla Eklenmiştir", {
          dismissOthers:true,
          messageType: MessageType.Success,
          position: PositionType.TopRight
        });
        this.createdNeighbourhood.emit(create_neighbourhood_command);
      });
  }
}
