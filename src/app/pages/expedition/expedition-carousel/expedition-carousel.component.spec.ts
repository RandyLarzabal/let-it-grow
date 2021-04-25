import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditionCarouselComponent } from './expedition-carousel.component';

describe('ExpeditionCarouselComponent', () => {
  let component: ExpeditionCarouselComponent;
  let fixture: ComponentFixture<ExpeditionCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpeditionCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeditionCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
