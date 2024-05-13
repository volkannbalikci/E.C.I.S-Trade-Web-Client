import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeighbourhoodListComponent } from './neighbourhood-list/neighbourhood-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NeighbourhoodListComponent
  ],
  exports: [
    NeighbourhoodListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "list", component: NeighbourhoodListComponent}
    ])
  ]
})
export class NeighbourhoodsModule { }
