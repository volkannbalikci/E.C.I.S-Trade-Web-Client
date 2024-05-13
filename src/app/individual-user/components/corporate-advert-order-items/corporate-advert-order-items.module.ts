import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateAdvertOrderItemListComponent } from './corporate-advert-order-item-list/corporate-advert-order-item-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CorporateAdvertOrderItemListComponent,
  ],
  exports: [
    CorporateAdvertOrderItemListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
       {path: "list", component: CorporateAdvertOrderItemListComponent}
    ])
  ]
})
export class CorporateAdvertOrderItemsModule { }
