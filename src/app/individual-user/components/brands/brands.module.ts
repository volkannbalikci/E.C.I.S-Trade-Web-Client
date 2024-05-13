import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandListComponent } from './brand-list/brand-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BrandListComponent
  ],
  exports: [
    BrandListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "list", component: BrandListComponent}
    ])
  ]
})
export class BrandsModule { }
