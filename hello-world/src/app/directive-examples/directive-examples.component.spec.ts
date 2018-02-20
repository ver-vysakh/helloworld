import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveExamplesComponent } from './directive-examples.component';

describe('DirectiveExamplesComponent', () => {
  let component: DirectiveExamplesComponent;
  let fixture: ComponentFixture<DirectiveExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
