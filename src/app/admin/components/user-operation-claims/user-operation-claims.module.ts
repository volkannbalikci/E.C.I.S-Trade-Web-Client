import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOperationClaimEditComponent } from './user-operation-claim-edit/user-operation-claim-edit.component';
import { UserOperationClaimListComponent } from './user-operation-claim-list/user-operation-claim-list.component';
import { UserOperationClaimAddComponent } from './user-operation-claim-add/user-operation-claim-add.component';
import { UserOperationClaimDetailsComponent } from './user-operation-claim-details/user-operation-claim-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserOperationClaimEditComponent,
    UserOperationClaimListComponent,
    UserOperationClaimAddComponent,
    UserOperationClaimDetailsComponent
  ],
  exports: [
    UserOperationClaimEditComponent,
    UserOperationClaimListComponent,
    UserOperationClaimAddComponent,
    UserOperationClaimDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "add", component: UserOperationClaimAddComponent},
      {path: "details", component: UserOperationClaimDetailsComponent},
      {path: "edit", component: UserOperationClaimEditComponent},
      {path: "list", component: UserOperationClaimListComponent}
    ])
  ]
})
export class UserOperationClaimsModule { }
