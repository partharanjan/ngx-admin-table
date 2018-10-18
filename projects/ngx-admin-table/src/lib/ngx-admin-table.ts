import { PageEvent } from "@angular/material";

export enum NgxAdminTableColumnType {
    Text,
    Number,
    YesNo,
    DateOnly,
    TimeOnly,
    DateTime,
    Action
}

export class NgxAdminTableColumn {
    constructor() { }
    id: String;
    name: String;
    type: NgxAdminTableColumnType;
}

export interface INgxAdminTable {
    onTablePageChanged(page: PageEvent);
    OnTableAction(data: any);
}

export class NgxAdminTableResult<T>{
    total:number;
    items:T[];
}