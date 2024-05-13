import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-swap-for-product-advert-list',
  templateUrl: './swap-for-product-advert-list.component.html',
  styleUrl: './swap-for-product-advert-list.component.css'
})
export class SwapForProductAdvertListComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService) {
    super(spinner)
   }
  ngOnInit(): void {
  this.showSpinner(SpinnerType.BallAtom);
  }
}