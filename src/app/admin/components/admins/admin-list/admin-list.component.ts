import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrl: './admin-list.component.css'
})
export class AdminListComponent extends BaseComponent implements OnInit  {
  constructor(spinner: NgxSpinnerService) {
    super(spinner)
   }
   ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
  }
}
