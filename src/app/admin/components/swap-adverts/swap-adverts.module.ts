import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapAdvertAddComponent } from './swap-advert-add/swap-advert-add.component';
import { SwapAdvertEditComponent } from './swap-advert-edit/swap-advert-edit.component';
import { SwapAdvertListComponent } from './swap-advert-list/swap-advert-list.component';
import { SwapAdvertDetailsComponent } from './swap-advert-details/swap-advert-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SwapAdvertAddComponent,
    SwapAdvertEditComponent,
    SwapAdvertListComponent,
    SwapAdvertDetailsComponent
  ],
  exports: [
    SwapAdvertAddComponent,
    SwapAdvertEditComponent,
    SwapAdvertListComponent,
    SwapAdvertDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "add", component:SwapAdvertAddComponent},
      {path: "details", component:SwapAdvertDetailsComponent},
      {path: "edit", component:SwapAdvertEditComponent},
      {path: "list", component:SwapAdvertListComponent}
    ])
  ]
})
export class SwapAdvertsModule { }
