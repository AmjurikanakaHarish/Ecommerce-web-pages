import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidstshirtsComponent } from './kidstshirts.component';

describe('KidstshirtsComponent', () => {
  let component: KidstshirtsComponent;
  let fixture: ComponentFixture<KidstshirtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidstshirtsComponent]
    });
    fixture = TestBed.createComponent(KidstshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
