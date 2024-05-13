import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ProductsModule } from '../products/products.module';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { DirectivesModule } from '../../../directives/directives/directives.module';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogsModule } from '../../../dialogs/dialogs/dialogs.module';



@NgModule({
  declarations: [
    CategoryEditComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryDetailsComponent
  ],
  exports: [
    CategoryEditComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    DirectivesModule,
    DialogsModule,
    MatSidenavModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatPaginatorModule, MatTableModule, MatDialogModule,
    RouterModule.forChild([
      {path: "add", component: CategoryAddComponent},
      {path: "details", component: CategoryDetailsComponent},
      {path: "edit", component: CategoryEditComponent},
      {path: "lists", component: CategoryListComponent}
    ])
  ]
})
export class CategoriesModule { }
