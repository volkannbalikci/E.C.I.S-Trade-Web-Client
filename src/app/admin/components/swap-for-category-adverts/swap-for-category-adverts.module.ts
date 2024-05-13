import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapForCategoryAdvertAddComponent } from './swap-for-category-advert-add/swap-for-category-advert-add.component';
import { SwapForCategoryAdvertEditComponent } from './swap-for-category-advert-edit/swap-for-category-advert-edit.component';
import { SwapForCategoryAdvertDetailsComponent } from './swap-for-category-advert-details/swap-for-category-advert-details.component';
import { SwapForCategoryAdvertListComponent } from './swap-for-category-advert-list/swap-for-category-advert-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SwapForCategoryAdvertAddComponent,
    SwapForCategoryAdvertEditComponent,
    SwapForCategoryAdvertDetailsComponent,
    SwapForCategoryAdvertListComponent
  ],
  exports: [
    SwapForCategoryAdvertAddComponent,
    SwapForCategoryAdvertEditComponent,
    SwapForCategoryAdvertDetailsComponent,
    SwapForCategoryAdvertListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "add", component:SwapForCategoryAdvertAddComponent},
      {path: "details", component:SwapForCategoryAdvertDetailsComponent},
      {path: "edit", component:SwapForCategoryAdvertEditComponent},
      {path: "list", component:SwapForCategoryAdvertListComponent}
    ])
  ]
})
export class SwapForCategoryAdvertsModule { }