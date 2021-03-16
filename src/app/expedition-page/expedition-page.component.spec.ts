import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditionPageComponent } from './expedition-page.component';

describe('ExpeditionPageComponent', () => {
  let component: ExpeditionPageComponent;
  let fixture: ComponentFixture<ExpeditionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpeditionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeditionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
