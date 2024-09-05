import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeepackageComponent } from './zeepackage.component';

describe('ZeepackageComponent', () => {
  let component: ZeepackageComponent;
  let fixture: ComponentFixture<ZeepackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeepackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZeepackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
