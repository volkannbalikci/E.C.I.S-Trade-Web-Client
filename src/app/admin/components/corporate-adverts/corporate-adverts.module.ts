import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateAdvertAddComponent } from './corporate-advert-add/corporate-advert-add.component';
import { CorporateAdvertDetailsComponent } from './corporate-advert-details/corporate-advert-details.component';
import { CorporateAdvertEditComponent } from './corporate-advert-edit/corporate-advert-edit.component';
import { CorporateAdvertListComponent } from './corporate-advert-list/corporate-advert-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CorporateAdvertAddComponent,
    CorporateAdvertDetailsComponent,
    CorporateAdvertEditComponent,
    CorporateAdvertListComponent
  ],
  exports: [
    CorporateAdvertAddComponent,
    CorporateAdvertDetailsComponent,
    CorporateAdvertEditComponent,
    CorporateAdvertListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "add", component: CorporateAdvertAddComponent},
      {path: "details", component: CorporateAdvertDetailsComponent},
      {path: "edit", component: CorporateAdvertEditComponent},
      {path: "list", component: CorporateAdvertListComponent}
    ])
  ]
})
export class CorporateAdvertsModule { }
