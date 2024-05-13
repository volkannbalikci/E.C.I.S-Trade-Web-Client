import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddressListComponent,
    AddressEditComponent,
    AddressDetailsComponent
  ],
  exports: [
    AddressListComponent,
    AddressEditComponent,
    AddressDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "details", component: AddressDetailsComponent},
      {path: "edit", component: AddressEditComponent},
      {path: "list", component: AddressListComponent}
    ])
  ]
})
export class AddressesModule { }
