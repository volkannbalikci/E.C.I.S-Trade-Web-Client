import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateUserDetailsComponent } from './corporate-user-details/corporate-user-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CorporateUserDetailsComponent
  ],
  exports: [
    CorporateUserDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "details", component: CorporateUserDetailsComponent}
   ])
  ]
})
export class CorporateUsersModule { }
