import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapForProductAdvertAddComponent } from './swap-for-product-advert-add/swap-for-product-advert-add.component';
import { SwapForProductAdvertEditComponent } from './swap-for-product-advert-edit/swap-for-product-advert-edit.component';
import { SwapForProductAdvertDetailsComponent } from './swap-for-product-advert-details/swap-for-product-advert-details.component';
import { SwapForProductAdvertListComponent } from './swap-for-product-advert-list/swap-for-product-advert-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SwapForProductAdvertAddComponent,
    SwapForProductAdvertEditComponent,
    SwapForProductAdvertDetailsComponent,
    SwapForProductAdvertListComponent
  ],
  exports: [
    SwapForProductAdvertAddComponent,
    SwapForProductAdvertEditComponent,
    SwapForProductAdvertDetailsComponent,
    SwapForProductAdvertListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "add", component:SwapForProductAdvertAddComponent},
      {path: "details", component:SwapForProductAdvertDetailsComponent},
      {path: "edit", component:SwapForProductAdvertEditComponent},
      {path: "list", component:SwapForProductAdvertListComponent}
    ])
  ]
})
export class SwapForProductAdvertsModule { }
