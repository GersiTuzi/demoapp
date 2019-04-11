import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementViewComponent } from './departement-view.component';

describe('DepartementViewComponent', () => {
  let component: DepartementViewComponent;
  let fixture: ComponentFixture<DepartementViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartementViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
