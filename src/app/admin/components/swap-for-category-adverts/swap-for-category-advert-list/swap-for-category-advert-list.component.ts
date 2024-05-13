import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-swap-for-category-advert-list',
  templateUrl: './swap-for-category-advert-list.component.html',
  styleUrl: './swap-for-category-advert-list.component.css'
})
export class SwapForCategoryAdvertListComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService) {
    super(spinner)
   }
  ngOnInit(): void {
  this.showSpinner(SpinnerType.BallAtom);
  }
}