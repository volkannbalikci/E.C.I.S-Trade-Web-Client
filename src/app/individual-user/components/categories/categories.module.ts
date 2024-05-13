import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CategoryListComponent
  ],
  exports: [
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "list", component: CategoryListComponent}
    ])
  ]
})
export class CategoriesModule { }
