import { Component, OnInit, Input, EventEmitter, Output, ViewChild, OnDestroy } from '@angular/core';
import { NgxAdminTableColumn, NgxAdminTableColumnType, NgxAdminTableResult } from './ngx-admin-table';
import { Observable, Subscription } from 'rxjs';
import { MatPaginator, MatDialog, PageEvent } from '@angular/material';
import { NgxAdminTableConfirmDialogComponent } from './ngx-admin-table-confirm-dialog-component';

@Component({
  selector: 'ngx-admin-table',
  templateUrl: './ngx-admin-table.component.html',
  styleUrls: ['./ngx-admin-table.component.css']
})
export class NgxAdminTableComponent implements OnInit, OnDestroy {

  @Input() cols: NgxAdminTableColumn[];
  @Input() source: Observable<NgxAdminTableResult<any>>;
  @Input() changeSource: Observable<boolean>;
  @Input() actions: String[] = [];

  @Output() onPageChanged = new EventEmitter<PageEvent>();
  @Output() onAction = new EventEmitter<any>();

  @ViewChild('paging') paging: MatPaginator;

  _loading: boolean = true;
  _rows: any[] = [];
  _total: Number;
  _columnType = NgxAdminTableColumnType;
  _displayColumns: String[] = [];

  sourceSubscription: Subscription;
  changeSourceSubscription: Subscription;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.toDisplayColumn();

    this.sourceSubscription = this.source.subscribe((result) => {
      this._total = result.total;
      this._rows = result.items;
      this._loading = false;
    });

    this.changeSourceSubscription = this.changeSource.subscribe((result) => {
      this._loading = true;
      if (result) {
        //true meaning reset
        this.paging.pageIndex = 0;
      }
    });
  }

  private toDisplayColumn() {
    this.cols.forEach(col => {
      this._displayColumns.push(col.id);
    });
  }

  getColumnName(colId: String): String {
    return this.cols.filter(m => m.id == colId)[0].name;
  }

  getColumnType(colId: String): NgxAdminTableColumnType {
    return this.cols.filter(m => m.id == colId)[0].type;
  }

  onSideToggleChaged(colId: String, row: any) {
    this.onAction.emit({ action: 'status', col: colId, row: row });
  }

  onPaging(page: PageEvent) {
    this._loading = true;
    this.onPageChanged.emit(page);
  }

  actionClicked(name: String, row: any) {
    if (name == 'delete') {
      //display the popup for confirmation
      let deleteDialog = this.dialog.open(NgxAdminTableConfirmDialogComponent, {
        width: '300px',
        disableClose: true
      });
      deleteDialog.afterClosed().subscribe((result) => {
        if (result) {
          if (result.status) {
            this.onAction.emit({ action: name, row: row });
          }
        }
      });
    }
    else {
      this.onAction.emit({ action: name, row: row });
    }
  }

  ngOnDestroy() {
    if (this.sourceSubscription) {
      this.sourceSubscription.unsubscribe();
    }
  }
}