import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsChildComponent } from './doctors-child.component';

describe('DoctorsChildComponent', () => {
  let component: DoctorsChildComponent;
  let fixture: ComponentFixture<DoctorsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
