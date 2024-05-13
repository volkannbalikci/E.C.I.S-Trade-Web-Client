import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityListComponent } from './city-list/city-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CityListComponent
  ],
  exports: [
    CityListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "list", component: CityListComponent}
    ])
  ]
})
export class CitiesModule { }
