import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlistFullWidthComponent } from './flist-full-width.component';

describe('FlistFullWidthComponent', () => {
  let component: FlistFullWidthComponent;
  let fixture: ComponentFixture<FlistFullWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlistFullWidthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlistFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
