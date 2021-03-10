import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualitePageComponent } from './actualite-page.component';

describe('ActualitePageComponent', () => {
  let component: ActualitePageComponent;
  let fixture: ComponentFixture<ActualitePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualitePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualitePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
