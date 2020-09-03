import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodbeyComponent } from './goodbey.component';

describe('GoodbeyComponent', () => {
  let component: GoodbeyComponent;
  let fixture: ComponentFixture<GoodbeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodbeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodbeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
