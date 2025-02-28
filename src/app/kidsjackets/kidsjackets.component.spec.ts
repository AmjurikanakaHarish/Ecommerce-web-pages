import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsjacketsComponent } from './kidsjackets.component';

describe('KidsjacketsComponent', () => {
  let component: KidsjacketsComponent;
  let fixture: ComponentFixture<KidsjacketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidsjacketsComponent]
    });
    fixture = TestBed.createComponent(KidsjacketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
