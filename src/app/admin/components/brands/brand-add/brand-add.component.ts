import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { BrandService } from '../../../../services/common/models/concrete/brand.service';
import { AlertifyService, MessageType, PositionType } from '../../../../services/admin/alertify.service';
import { CreateBrandCommand } from '../../../../contracts/brand/createBrandCommand';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrl: './brand-add.component.css'
})
export class BrandAddComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService, private brandService: BrandService, private alertfy: AlertifyService) {
    super(spinner)
   }
  ngOnInit(): void {
  this.showSpinner(SpinnerType.BallAtom);
  }
  @Output() createdBrand: EventEmitter<CreateBrandCommand> = new EventEmitter();
  create(name: HTMLInputElement, websiteUrl: HTMLInputElement){
    this.showSpinner(SpinnerType.BallAtom)
    const create_brand_command: CreateBrandCommand = new CreateBrandCommand();
    create_brand_command.name = name.value;
    create_brand_command.websiteUrl = websiteUrl.value;
    this.brandService.create(create_brand_command, () => 
      {
        this.hideSpinner(SpinnerType.BallAtom)
        this.alertfy.message("Kategori Başarıyla Eklenmiştir", {
          dismissOthers:true,
          messageType: MessageType.Success,
          position: PositionType.TopRight
        });
        this.createdBrand.emit(create_brand_command);
      });
  }
}
