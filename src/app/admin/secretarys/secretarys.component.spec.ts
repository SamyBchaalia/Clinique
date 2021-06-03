import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretarysComponent } from './secretarys.component';

describe('SecretarysComponent', () => {
  let component: SecretarysComponent;
  let fixture: ComponentFixture<SecretarysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretarysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretarysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
