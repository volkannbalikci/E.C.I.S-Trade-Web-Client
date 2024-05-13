import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddressEditComponent } from './user-address-edit/user-address-edit.component';
import { UserAddressListComponent } from './user-address-list/user-address-list.component';
import { UserAddressAddComponent } from './user-address-add/user-address-add.component';
import { UserAddressDetailsComponent } from './user-address-details/user-address-details.component';
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
    UserAddressEditComponent,
    UserAddressListComponent,
    UserAddressAddComponent,
    UserAddressDetailsComponent
  ],
  exports: [
    UserAddressEditComponent,
    UserAddressListComponent,
    UserAddressAddComponent,
    UserAddressDetailsComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    DialogsModule,
    MatSidenavModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatPaginatorModule, MatTableModule, MatDialogModule, MatSelectModule, FormsModule,
    RouterModule.forChild([
      {path: "add", component:UserAddressAddComponent},
      {path: "details", component:UserAddressDetailsComponent},
      {path: "edit", component:UserAddressEditComponent},
      {path: "list", component:UserAddressListComponent}
    ])
  ]
})
export class UserAddressesModule { }
