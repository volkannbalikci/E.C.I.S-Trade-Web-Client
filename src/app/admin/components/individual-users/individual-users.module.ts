import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualUserEditComponent } from './individual-user-edit/individual-user-edit.component';
import { IndividualUserListComponent } from './individual-user-list/individual-user-list.component';
import { IndividualUserAddComponent } from './individual-user-add/individual-user-add.component';
import { IndividualUserDetailsComponent } from './individual-user-details/individual-user-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IndividualUserEditComponent,
    IndividualUserListComponent,
    IndividualUserAddComponent,
    IndividualUserDetailsComponent
  ],
  exports: [
    IndividualUserEditComponent,
    IndividualUserListComponent,
    IndividualUserAddComponent,
    IndividualUserDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "add", component: IndividualUserAddComponent},
      {path: "details", component: IndividualUserDetailsComponent},
      {path: "edit", component: IndividualUserEditComponent},
      {path: "list", component: IndividualUserListComponent}
    ])
  ]
})
export class IndividualUsersModule { }
