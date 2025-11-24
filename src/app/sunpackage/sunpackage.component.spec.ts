import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunpackageComponent } from './sunpackage.component';

describe('SunpackageComponent', () => {
  let component: SunpackageComponent;
  let fixture: ComponentFixture<SunpackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunpackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
