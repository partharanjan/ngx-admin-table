import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAdminTableComponent } from './ngx-admin-table.component';
import { NgxAdminTableConfirmDialogComponent } from './ngx-admin-table-confirm-dialog-component';
import { MatDialogModule, MatPaginatorModule, MatTableModule, MatButtonModule, MatSlideToggleModule, MatIconModule } from '@angular/material';
import { NgxColorSpinnerModule } from "ngx-color-spinner";


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    NgxColorSpinnerModule
  ],
  declarations: [NgxAdminTableComponent, NgxAdminTableConfirmDialogComponent],
  entryComponents: [NgxAdminTableConfirmDialogComponent],
  exports: [NgxAdminTableComponent]
})
export class NgxAdminTableModule { }
