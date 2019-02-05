import { PageEvent } from "@angular/material";

export enum NgxAdminTableColumnType {
    Text,
    Number,
    YesNo,
    Date,
    Time,
    DateTime,
    Action
}

export class NgxAdminTableColumn {
    constructor() { }
    id: string;
    name: string;
    type: NgxAdminTableColumnType;
}

export interface INgxAdminTable {
    onTablePageChanged(page: PageEvent);
    onTableAction(data: any);
}

export class NgxAdminTableResult<T>{
    total: number;
    items: T[];
}