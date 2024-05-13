import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualUserDetailsComponent } from './individual-user-details/individual-user-details.component';
import { IndividualUserEditComponent } from './individual-user-edit/individual-user-edit.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IndividualUserDetailsComponent,
    IndividualUserEditComponent,
  ],
  exports: [
    IndividualUserDetailsComponent,
    IndividualUserEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "details", component: IndividualUserDetailsComponent},
      {path: "edit", component: IndividualUserEditComponent}
    ])
  ]
})
export class IndividualUsersModule { }
