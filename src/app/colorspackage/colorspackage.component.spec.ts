import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorspackageComponent } from './colorspackage.component';

describe('ColorspackageComponent', () => {
  let component: ColorspackageComponent;
  let fixture: ComponentFixture<ColorspackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorspackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorspackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
