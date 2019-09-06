import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatihanComponent } from './latihan.component';

describe('LatihanComponent', () => {
  let component: LatihanComponent;
  let fixture: ComponentFixture<LatihanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatihanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatihanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
