import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchMultipleComponent } from './fetch-multiple.component';

describe('FetchMultipleComponent', () => {
  let component: FetchMultipleComponent;
  let fixture: ComponentFixture<FetchMultipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchMultipleComponent]
    });
    fixture = TestBed.createComponent(FetchMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
