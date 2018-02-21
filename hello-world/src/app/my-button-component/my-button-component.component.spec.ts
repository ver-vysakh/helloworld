import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyButtonComponentComponent } from './my-button-component.component';

describe('MyButtonComponentComponent', () => {
  let component: MyButtonComponentComponent;
  let fixture: ComponentFixture<MyButtonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyButtonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
