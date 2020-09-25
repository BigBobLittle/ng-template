import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHealthAdviceComponent } from './add-health-advice.component';

describe('AddHealthAdviceComponent', () => {
  let component: AddHealthAdviceComponent;
  let fixture: ComponentFixture<AddHealthAdviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHealthAdviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHealthAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
