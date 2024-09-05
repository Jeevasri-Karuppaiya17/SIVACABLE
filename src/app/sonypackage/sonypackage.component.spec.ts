import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonypackageComponent } from './sonypackage.component';

describe('SonypackageComponent', () => {
  let component: SonypackageComponent;
  let fixture: ComponentFixture<SonypackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonypackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonypackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
