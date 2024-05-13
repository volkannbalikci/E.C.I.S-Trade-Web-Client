import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-corporate-advert-order-list',
  templateUrl: './corporate-advert-order-list.component.html',
  styleUrl: './corporate-advert-order-list.component.css'
})
export class CorporateAdvertOrderListComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService) {
    super(spinner)
   }
  ngOnInit(): void {
  this.showSpinner(SpinnerType.BallAtom);
  }
}
