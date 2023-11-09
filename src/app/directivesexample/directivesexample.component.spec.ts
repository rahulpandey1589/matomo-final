import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesexampleComponent } from './directivesexample.component';

describe('DirectivesexampleComponent', () => {
  let component: DirectivesexampleComponent;
  let fixture: ComponentFixture<DirectivesexampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesexampleComponent]
    });
    fixture = TestBed.createComponent(DirectivesexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
