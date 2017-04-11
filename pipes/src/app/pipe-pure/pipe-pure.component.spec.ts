import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePureComponent } from './pipe-pure.component';

describe('PipePureComponent', () => {
  let component: PipePureComponent;
  let fixture: ComponentFixture<PipePureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipePureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipePureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
