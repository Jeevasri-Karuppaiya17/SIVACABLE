import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarpackageComponent } from './starpackage.component';

describe('StarpackageComponent', () => {
  let component: StarpackageComponent;
  let fixture: ComponentFixture<StarpackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarpackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
