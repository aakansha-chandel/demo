import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GJMapComponent } from './gj-map.component';

describe('GJMapComponent', () => {
  let component: GJMapComponent;
  let fixture: ComponentFixture<GJMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GJMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GJMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
