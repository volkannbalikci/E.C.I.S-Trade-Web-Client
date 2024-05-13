import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateAdvertOrderListComponent } from './corporate-advert-order-list/corporate-advert-order-list.component';
import { CorporateAdvertOrderDetailsComponent } from './corporate-advert-order-details/corporate-advert-order-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CorporateAdvertOrderListComponent,
    CorporateAdvertOrderDetailsComponent
  ],
  exports: [
    CorporateAdvertOrderListComponent,
    CorporateAdvertOrderDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "list", component: CorporateAdvertOrderListComponent},
      {path: "details", component: CorporateAdvertOrderDetailsComponent}
   ])
  ]
})
export class CorporateAdvertOrdersModule { }
