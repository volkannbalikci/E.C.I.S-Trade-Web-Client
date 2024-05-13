import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandEditComponent } from './brand-edit/brand-edit.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandAddComponent } from './brand-add/brand-add.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ProductsModule } from '../products/products.module';
import { DirectivesModule } from '../../../directives/directives/directives.module';
import { DialogsModule } from '../../../dialogs/dialogs/dialogs.module';


@NgModule({
  declarations: [
    BrandEditComponent,
    BrandListComponent,
    BrandAddComponent,
    BrandDetailsComponent,
  ],
  exports: [
    BrandEditComponent,
    BrandListComponent,
    BrandAddComponent,
    BrandDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    DialogsModule,
    DirectivesModule,
    MatInputModule, MatPaginatorModule, MatTableModule, MatFormFieldModule, MatSidenavModule, MatButtonModule, MatDialogModule,
    RouterModule.forChild([
      {path: "add", component: BrandAddComponent },
      {path: "details", component: BrandDetailsComponent},
      {path: "edit", component: BrandEditComponent},
      {path: "lists", component: BrandListComponent}
    ])
  ]
})
export class BrandsModule { }
