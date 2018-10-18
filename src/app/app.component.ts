import { Component, OnInit } from '@angular/core';
import { NgxAdminTableColumn, NgxAdminTableColumnType, NgxAdminTableResult, INgxAdminTable } from 'projects/ngx-admin-table/src/public_api';
import { Subscription, Observable, Subject } from 'rxjs';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, INgxAdminTable {


  _columns: NgxAdminTableColumn[] = [];
  _actions: string[] = [];
  private _source=new Subject<NgxAdminTableResult<any>>();
  $source= this._source.asObservable();
  //change
  private _changeSource = new Subject<boolean>();
  $changeSource = this._changeSource.asObservable();

  constructor() {

  }

  ngOnInit() {

    this.initColumns();

  }

  private initColumns() {
    this._columns = [
      {
        id: 'name',
        name: 'Name',
        type: NgxAdminTableColumnType.Text
      },
      {
        id: 'status',
        name: 'Status',
        type: NgxAdminTableColumnType.YesNo
      },
      {
        id: 'action',
        name: 'Action',
        type: NgxAdminTableColumnType.Action
      }
    ];
  }

  onTablePageChanged(page: PageEvent) {
    console.log(page);
  }
  OnTableAction(data: any) {
    console.log(data);
  }
}
