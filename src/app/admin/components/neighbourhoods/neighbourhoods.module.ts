import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeighbourhoodAddComponent } from './neighbourhood-add/neighbourhood-add.component';
import { NeighbourhoodEditComponent } from './neighbourhood-edit/neighbourhood-edit.component';
import { NeighbourhoodDetailsComponent } from './neighbourhood-details/neighbourhood-details.component';
import { NeighbourhoodListComponent } from './neighbourhood-list/neighbourhood-list.component';
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
    NeighbourhoodAddComponent,
    NeighbourhoodEditComponent,
    NeighbourhoodDetailsComponent,
    NeighbourhoodListComponent
  ],
  exports: [
    NeighbourhoodAddComponent,
    NeighbourhoodEditComponent,
    NeighbourhoodDetailsComponent,
    NeighbourhoodListComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    DialogsModule,
    MatSidenavModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatPaginatorModule, MatTableModule, MatDialogModule, MatSelectModule, FormsModule,
    RouterModule.forChild([
      {path: "add", component: NeighbourhoodAddComponent},
      {path: "details", component: NeighbourhoodDetailsComponent},
      {path: "edit", component: NeighbourhoodEditComponent},
      {path: "list", component: NeighbourhoodListComponent}
    ])
  ]
})
export class NeighbourhoodsModule { }
