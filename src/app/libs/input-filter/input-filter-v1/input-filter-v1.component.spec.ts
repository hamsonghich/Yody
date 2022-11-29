import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFilterV1Component } from './input-filter-v1.component';

describe('InputFilterV1Component', () => {
  let component: InputFilterV1Component;
  let fixture: ComponentFixture<InputFilterV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFilterV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFilterV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
