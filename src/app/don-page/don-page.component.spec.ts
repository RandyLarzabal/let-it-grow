import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonPageComponent } from './don-page.component';

describe('DonPageComponent', () => {
  let component: DonPageComponent;
  let fixture: ComponentFixture<DonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
