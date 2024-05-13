import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { IndividualUserModule } from './individual-user/individual-user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatDialogModule } from '@angular/material/dialog';
import { DialogsModule } from './dialogs/dialogs/dialogs.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
    {provide: "baseUrl", useValue: "https://localhost:44303/api", multi: true},
    provideAnimationsAsync()
  ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AdminModule,
        IndividualUserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        NgxSpinnerModule,
        MatDialogModule,
        DialogsModule
    ]
})
export class AppModule { }
