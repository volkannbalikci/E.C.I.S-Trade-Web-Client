import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminEditComponent,
    AdminListComponent,
    AdminAddComponent,
    AdminDetailsComponent
  ],
  exports: [
    AdminEditComponent,
    AdminListComponent,
    AdminAddComponent,
    AdminDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "add", component: AdminAddComponent},
      {path: "details", component: AdminDetailsComponent},
      {path: "edit", component: AdminEditComponent},
      {path: "list", component: AdminListComponent}
    ])
  ]
})
export class AdminsModule { }
