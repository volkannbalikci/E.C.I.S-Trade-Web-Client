import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateUserEditComponent } from './corporate-user-edit/corporate-user-edit.component';
import { CorporateUserListComponent } from './corporate-user-list/corporate-user-list.component';
import { CorporateUserAddComponent } from './corporate-user-add/corporate-user-add.component';
import { CorporateUserDetailsComponent } from './corporate-user-details/corporate-user-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CorporateUserEditComponent,
    CorporateUserListComponent,
    CorporateUserAddComponent,
    CorporateUserDetailsComponent
  ],
  exports: [
    CorporateUserEditComponent,
    CorporateUserListComponent,
    CorporateUserAddComponent,
    CorporateUserDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "add", component: CorporateUserAddComponent},
      {path: "details", component: CorporateUserDetailsComponent},
      {path: "edit", component: CorporateUserEditComponent},
      {path: "list", component: CorporateUserListComponent}
    ])
  ]
})
export class CorporateUsersModule { }
