import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityEditComponent } from './city-edit/city-edit.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityAddComponent } from './city-add/city-add.component';
import { CityDetailsComponent } from './city-details/city-details.component';
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
    CityEditComponent,
    CityListComponent,
    CityAddComponent,
    CityDetailsComponent
  ],
  exports: [
    CityEditComponent,
    CityListComponent,
    CityAddComponent,
    CityDetailsComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    DialogsModule,
    MatSidenavModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatPaginatorModule, MatTableModule, MatDialogModule, MatSelectModule, FormsModule,
    RouterModule.forChild([
      {path: "add", component: CityAddComponent},
      {path: "details", component: CityDetailsComponent},
      {path: "edit", component: CityEditComponent},
      {path: "list", component: CityListComponent}
    ])
  ]
})
export class CitiesModule { }
