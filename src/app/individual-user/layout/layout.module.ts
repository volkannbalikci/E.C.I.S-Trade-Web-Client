import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ComponentsModule as LayoutComponentsModule } from './components/components.module';
import { ComponentsModule } from '../components/components.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutComponentsModule,
    RouterModule,
    MatSidenavModule,
    ComponentsModule
  ],
  exports: [
    LayoutComponent,
    ComponentsModule
  ]
})
export class LayoutModule { }
