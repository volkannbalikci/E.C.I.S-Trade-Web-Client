import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountryService } from '../../../../services/common/models/concrete/country.service';
import { AlertifyService, MessageType, PositionType } from '../../../../services/admin/alertify.service';
import { CreateCountryCommand } from '../../../../contracts/country/createCountryCommand';
import { CreateCategoryCommand } from '../../../../contracts/category/createCategoryCommand';

@Component({
  selector: 'app-country-add',
  templateUrl: './country-add.component.html',
  styleUrl: './country-add.component.css'
})
export class CountryAddComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService, private categoryService: CountryService, private alertfy: AlertifyService) {
    super(spinner)
   }
  ngOnInit(): void {
  this.showSpinner(SpinnerType.BallAtom);
  }

  @Output() createdCountry: EventEmitter<CreateCountryCommand> = new EventEmitter();
  create(name: any, shortName: any){
    this.showSpinner(SpinnerType.BallAtom)
    const create_country_command: CreateCountryCommand = new CreateCountryCommand();
    create_country_command.name = name.value;
    create_country_command.shortName = shortName.value;
    this.categoryService.create(create_country_command, () => 
      {
        this.hideSpinner(SpinnerType.BallAtom)
        this.alertfy.message("Ülke Başarıyla Eklenmiştir", {
          dismissOthers:true,
          messageType: MessageType.Success,
          position: PositionType.TopRight
        });
        this.createdCountry.emit(create_country_command);
      });
  }
}
