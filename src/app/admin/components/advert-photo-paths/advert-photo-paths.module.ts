import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertPhotoPathEditComponent } from './advert-photo-path-edit/advert-photo-path-edit.component';
import { AdvertPhotoPathListComponent } from './advert-photo-path-list/advert-photo-path-list.component';
import { AdvertPhotoPathAddComponent } from './advert-photo-path-add/advert-photo-path-add.component';
import { AdvertPhotoPathDetailsComponent } from './advert-photo-path-details/advert-photo-path-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdvertPhotoPathEditComponent,
    AdvertPhotoPathListComponent,
    AdvertPhotoPathAddComponent,
    AdvertPhotoPathDetailsComponent
  ],
  exports: [
    AdvertPhotoPathEditComponent,
    AdvertPhotoPathListComponent,
    AdvertPhotoPathAddComponent,
    AdvertPhotoPathDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "add", component: AdvertPhotoPathAddComponent},
      {path: "details", component: AdvertPhotoPathDetailsComponent},
      {path: "edit", component: AdvertPhotoPathEditComponent},
      {path: "list", component: AdvertPhotoPathListComponent}
    ])
  ]
})
export class AdvertPhotoPathsModule { }
