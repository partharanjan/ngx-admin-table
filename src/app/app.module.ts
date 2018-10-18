import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgxAdminTableModule } from 'projects/ngx-admin-table/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxAdminTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
