import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhSearchComponent } from './gh-search.component';

describe('GhSearchComponent', () => {
  let component: GhSearchComponent;
  let fixture: ComponentFixture<GhSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
