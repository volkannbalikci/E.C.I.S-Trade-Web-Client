import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateAdvertListComponent } from './corporate-advert-list/corporate-advert-list.component';
import { CorporateAdvertDetailsComponent } from './corporate-advert-details/corporate-advert-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CorporateAdvertListComponent,
    CorporateAdvertDetailsComponent
  ],
  exports: [
    CorporateAdvertListComponent,
    CorporateAdvertDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "list", component: CorporateAdvertListComponent},
      {path: "details", component: CorporateAdvertDetailsComponent}
   ])
  ]
})
export class CorporateAdvertsModule { }
