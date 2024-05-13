import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertEditComponent } from './advert-edit/advert-edit.component';
import { AdvertListComponent } from './advert-list/advert-list.component';
import { AdvertAddComponent } from './advert-add/advert-add.component';
import { AdvertDetailsComponent } from './advert-details/advert-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdvertEditComponent,
    AdvertListComponent,
    AdvertAddComponent,
    AdvertDetailsComponent
  ],
  exports:  [
    AdvertEditComponent,
    AdvertListComponent,
    AdvertAddComponent,
    AdvertDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "add", component: AdvertAddComponent},
      {path: "details", component: AdvertDetailsComponent},
      {path: "edit", component: AdvertEditComponent},
      {path: "list", component: AdvertListComponent}
    ])
  ]
})
export class AdvertsModule { }
