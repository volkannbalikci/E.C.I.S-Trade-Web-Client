import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { HttpClientService } from '../../../../services/common/http-client.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css'
})
export class CategoryDetailsComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner)
   }

  ngOnInit(): void {
  this.showSpinner(SpinnerType.BallAtom);
  this.httpClientService.delete({
    controller: "Categories"
  },"e057d434-c83a-47e9-aff4-10816826d1f3").subscribe();
}
}
