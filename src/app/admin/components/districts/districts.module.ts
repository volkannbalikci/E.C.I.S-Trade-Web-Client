import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistrictEditComponent } from './district-edit/district-edit.component';
import { DistrictListComponent } from './district-list/district-list.component';
import { DistrictAddComponent } from './district-add/district-add.component';
import { DistrictDetailsComponent } from './district-details/district-details.component';
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
    DistrictEditComponent,
    DistrictListComponent,
    DistrictAddComponent,
    DistrictDetailsComponent
  ],
  exports: [
    DistrictEditComponent,
    DistrictListComponent,
    DistrictAddComponent,
    DistrictDetailsComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    DialogsModule,
    MatSidenavModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatPaginatorModule, MatTableModule, MatDialogModule, MatSelectModule, FormsModule,
    RouterModule.forChild([
      {path: "add", component: DistrictAddComponent},
      {path: "details", component: DistrictDetailsComponent},
      {path: "edit", component: DistrictEditComponent},
      {path: "list", component: DistrictListComponent}
    ])
  ]
})
export class DistrictsModule { }
