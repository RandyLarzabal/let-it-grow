import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigappPageComponent } from './ligapp-page.component';

describe('LigappPageComponent', () => {
  let component: LigappPageComponent;
  let fixture: ComponentFixture<LigappPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigappPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LigappPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
