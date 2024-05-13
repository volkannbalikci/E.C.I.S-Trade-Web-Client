import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateAdvertOrderAddComponent } from './corporate-advert-order-add/corporate-advert-order-add.component';
import { CorporateAdvertOrderEditComponent } from './corporate-advert-order-edit/corporate-advert-order-edit.component';
import { CorporateAdvertOrderDetailsComponent } from './corporate-advert-order-details/corporate-advert-order-details.component';
import { CorporateAdvertOrderListComponent } from './corporate-advert-order-list/corporate-advert-order-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CorporateAdvertOrderAddComponent,
    CorporateAdvertOrderEditComponent,
    CorporateAdvertOrderDetailsComponent,
    CorporateAdvertOrderListComponent
  ],
  exports: [
    CorporateAdvertOrderAddComponent,
    CorporateAdvertOrderEditComponent,
    CorporateAdvertOrderDetailsComponent,
    CorporateAdvertOrderListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "add", component: CorporateAdvertOrderAddComponent},
      {path: "details", component: CorporateAdvertOrderDetailsComponent},
      {path: "edit", component: CorporateAdvertOrderEditComponent},
      {path: "list", component: CorporateAdvertOrderListComponent}
    ])
  ]
})
export class CorporateAdvertOrdersModule { }
