import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtvpackageComponent } from './etvpackage.component';

describe('EtvpackageComponent', () => {
  let component: EtvpackageComponent;
  let fixture: ComponentFixture<EtvpackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtvpackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtvpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
