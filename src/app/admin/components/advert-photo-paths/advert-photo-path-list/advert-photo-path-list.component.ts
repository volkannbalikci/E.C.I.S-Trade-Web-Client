import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-advert-photo-path-list',
  templateUrl: './advert-photo-path-list.component.html',
  styleUrl: './advert-photo-path-list.component.css'
})
export class AdvertPhotoPathListComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService) {
    super(spinner)
   }
  ngOnInit(): void {
  this.showSpinner(SpinnerType.BallAtom);
  }
}
