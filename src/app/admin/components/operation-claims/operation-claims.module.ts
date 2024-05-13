import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationClaimEditComponent } from './operation-claim-edit/operation-claim-edit.component';
import { OperationClaimListComponent } from './operation-claim-list/operation-claim-list.component';
import { OperationClaimAddComponent } from './operation-claim-add/operation-claim-add.component';
import { OperationClaimDetailsComponent } from './operation-claim-details/operation-claim-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    OperationClaimEditComponent,
    OperationClaimListComponent,
    OperationClaimAddComponent,
    OperationClaimDetailsComponent
  ],
  exports: [
    OperationClaimEditComponent,
    OperationClaimListComponent,
    OperationClaimAddComponent,
    OperationClaimDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "add", component: OperationClaimAddComponent},
      {path: "details", component: OperationClaimDetailsComponent},
      {path: "edit", component: OperationClaimEditComponent},
      {path: "list", component: OperationClaimListComponent}
    ])
  ]
})
export class OperationClaimsModule { }
