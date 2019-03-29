import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriositiesPage } from './curiosities.page';

describe('CuriositiesPage', () => {
  let component: CuriositiesPage;
  let fixture: ComponentFixture<CuriositiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuriositiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuriositiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
