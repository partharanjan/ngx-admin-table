import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAdminTableComponent } from './ngx-admin-table.component';

describe('NgxAdminTableComponent', () => {
  let component: NgxAdminTableComponent;
  let fixture: ComponentFixture<NgxAdminTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAdminTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAdminTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
