import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeImpureComponent } from './pipe-impure.component';

describe('PipeImpureComponent', () => {
  let component: PipeImpureComponent;
  let fixture: ComponentFixture<PipeImpureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeImpureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeImpureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
