import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CountryListComponent
  ],
  exports: [
    CountryListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "list", component: CountryListComponent}
   ])
  ]
})
export class CountriesModule { }
