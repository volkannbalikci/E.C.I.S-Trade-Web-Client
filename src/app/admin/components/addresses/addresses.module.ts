import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressAddComponent } from './address-add/address-add.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { RouterModule } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { DirectivesModule } from '../../../directives/directives/directives.module';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogsModule } from '../../../dialogs/dialogs/dialogs.module';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AddressEditComponent,
    AddressListComponent,
    AddressAddComponent,
    AddressDetailsComponent
  ],
  exports: [
    AddressEditComponent,
    AddressListComponent,
    AddressAddComponent,
    AddressDetailsComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    DialogsModule,
    MatSidenavModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatPaginatorModule, MatTableModule, MatDialogModule, MatSelectModule, FormsModule,
    RouterModule.forChild([
{path: "add", component: AddressAddComponent},
{path: "details", component: AddressDetailsComponent},
{path: "edit", component: AddressEditComponent},
{path: "list", component: AddressListComponent}
    ])
  ]
})
export class AddressesModule { }
