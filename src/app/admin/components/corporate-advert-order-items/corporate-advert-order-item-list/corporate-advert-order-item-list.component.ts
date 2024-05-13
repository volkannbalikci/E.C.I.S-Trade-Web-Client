import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';

@Component({
  selector: 'app-corporate-advert-order-item-list',
  templateUrl: './corporate-advert-order-item-list.component.html',
  styleUrl: './corporate-advert-order-item-list.component.css'
})
export class CorporateAdvertOrderItemListComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService) {
    super(spinner)
   }
  ngOnInit(): void {
  this.showSpinner(SpinnerType.BallScaleMultiple);
  }

}
