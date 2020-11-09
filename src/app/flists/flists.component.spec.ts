import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlistsComponent } from './flists.component';

describe('FlistsComponent', () => {
  let component: FlistsComponent;
  let fixture: ComponentFixture<FlistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
