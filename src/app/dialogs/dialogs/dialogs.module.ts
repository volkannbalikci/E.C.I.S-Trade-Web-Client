import { NgModule } from '@angular/core';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    DeleteDialogComponent,
  ],
  imports: [
    MatDialogModule
  ],
  exports: [
    DeleteDialogComponent,
  ]

})
export class DialogsModule {
  
 }

