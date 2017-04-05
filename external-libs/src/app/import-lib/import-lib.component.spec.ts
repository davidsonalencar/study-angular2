import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportLibComponent } from './import-lib.component';

describe('ImportLibComponent', () => {
  let component: ImportLibComponent;
  let fixture: ComponentFixture<ImportLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
