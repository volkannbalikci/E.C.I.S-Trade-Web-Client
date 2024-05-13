import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../../services/common/http-client.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner)
   }
  ngOnInit(): void {
  this.showSpinner(SpinnerType.BallAtom);
  this.httpClientService.put({
    controller: "Categories"
  }, {
    id: "e057d434-c83a-47e9-aff4-10816826d1f3",
    name: "Ofis Malzemeleri",
    description: "Ofis Masa Takımı, Ofis Sandalye Takımı"
  }).subscribe();
  }
}
