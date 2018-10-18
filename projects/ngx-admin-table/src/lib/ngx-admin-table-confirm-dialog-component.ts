import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'ngx-admin-table-confirm-dialog',
    template: `
        <h2 mat-dialog-title>Confirm!</h2>
        <mat-dialog-content>
            <p>Do you want to delete this record?</p>
        </mat-dialog-content>
        
        <mat-dialog-actions>
            <button mat-button mat-dialog-close>No</button>
            <button mat-button (click)="ok()">Yes</button>
        </mat-dialog-actions>
        `,
    styles: []
})
export class NgxAdminTableConfirmDialogComponent implements OnInit {
    constructor(private dialogRef: MatDialogRef<NgxAdminTableConfirmDialogComponent>) { }

    ngOnInit() { }

    ok() {
        this.dialogRef.close({ status: true });
    }

}
