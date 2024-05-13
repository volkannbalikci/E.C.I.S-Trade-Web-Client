import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualAdvertAddComponent } from './individual-advert-add/individual-advert-add.component';
import { IndividualAdvertEditComponent } from './individual-advert-edit/individual-advert-edit.component';
import { IndividualAdvertDetailsComponent } from './individual-advert-details/individual-advert-details.component';
import { IndividualAdvertListComponent } from './individual-advert-list/individual-advert-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IndividualAdvertAddComponent,
    IndividualAdvertEditComponent,
    IndividualAdvertDetailsComponent,
    IndividualAdvertListComponent
  ],
  exports: [
    IndividualAdvertAddComponent,
    IndividualAdvertEditComponent,
    IndividualAdvertDetailsComponent,
    IndividualAdvertListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "add", component: IndividualAdvertAddComponent},
      {path: "details", component: IndividualAdvertDetailsComponent},
      {path: "edit", component: IndividualAdvertEditComponent},
      {path: "list", component: IndividualAdvertListComponent}
    ])
  ]
})
export class IndividualAdvertsModule { }
