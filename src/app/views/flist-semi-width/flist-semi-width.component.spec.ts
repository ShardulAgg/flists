import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlistSemiWidthComponent } from './flist-semi-width.component';

describe('FlistSemiWidthComponent', () => {
  let component: FlistSemiWidthComponent;
  let fixture: ComponentFixture<FlistSemiWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlistSemiWidthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlistSemiWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
