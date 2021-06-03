import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotorsComponent } from './dotors.component';

describe('DotorsComponent', () => {
  let component: DotorsComponent;
  let fixture: ComponentFixture<DotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
