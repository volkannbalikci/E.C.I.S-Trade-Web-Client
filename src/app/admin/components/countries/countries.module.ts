import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryEditComponent } from './country-edit/country-edit.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryAddComponent } from './country-add/country-add.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { DirectivesModule } from '../../../directives/directives/directives.module';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogsModule } from '../../../dialogs/dialogs/dialogs.module';


@NgModule({
  declarations: [
    CountryEditComponent,
    CountryListComponent,
    CountryAddComponent,
    CountryDetailsComponent
  ],
  exports: [
    CountryEditComponent,
    CountryListComponent,
    CountryAddComponent,
    CountryDetailsComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    DialogsModule,
    MatSidenavModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatPaginatorModule, MatTableModule, MatDialogModule,
    RouterModule.forChild([
      {path: "add", component: CountryAddComponent},
      {path: "details", component: CountryDetailsComponent},
      {path: "edit", component: CountryEditComponent},
      {path: "list", component: CountryListComponent}
    ])
  ]
})
export class CountriesModule { }
