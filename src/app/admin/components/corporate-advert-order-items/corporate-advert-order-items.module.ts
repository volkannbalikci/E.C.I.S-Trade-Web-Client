import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateAdvertOrderItemAddComponent } from './corporate-advert-order-item-add/corporate-advert-order-item-add.component';
import { CorporateAdvertOrderItemDetailsComponent } from './corporate-advert-order-item-details/corporate-advert-order-item-details.component';
import { CorporateAdvertOrderItemEditComponent } from './corporate-advert-order-item-edit/corporate-advert-order-item-edit.component';
import { CorporateAdvertOrderItemListComponent } from './corporate-advert-order-item-list/corporate-advert-order-item-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CorporateAdvertOrderItemAddComponent,
    CorporateAdvertOrderItemDetailsComponent,
    CorporateAdvertOrderItemEditComponent,
    CorporateAdvertOrderItemListComponent
  ],
  exports: [
    CorporateAdvertOrderItemAddComponent,
    CorporateAdvertOrderItemDetailsComponent,
    CorporateAdvertOrderItemEditComponent,
    CorporateAdvertOrderItemListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "add", component: CorporateAdvertOrderItemAddComponent},
      {path: "details", component: CorporateAdvertOrderItemDetailsComponent},
      {path: "edit", component: CorporateAdvertOrderItemEditComponent},
      {path: "list", component: CorporateAdvertOrderItemListComponent}
    ])
  ]
})
export class CorporateAdvertOrderItemsModule { }
