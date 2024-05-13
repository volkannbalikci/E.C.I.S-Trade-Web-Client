import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistrictListComponent } from './district-list/district-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DistrictListComponent
  ],
  exports: [
    DistrictListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "list", component: DistrictListComponent}
   ])
  ]
})
export class DistrictsModule { }
