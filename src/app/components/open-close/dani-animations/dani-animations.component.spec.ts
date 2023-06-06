import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaniAnimationsComponent } from './dani-animations.component';

describe('DaniAnimationsComponent', () => {
  let component: DaniAnimationsComponent;
  let fixture: ComponentFixture<DaniAnimationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaniAnimationsComponent]
    });
    fixture = TestBed.createComponent(DaniAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
