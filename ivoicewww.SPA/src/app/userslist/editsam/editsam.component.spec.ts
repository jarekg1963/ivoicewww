import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsamComponent } from './editsam.component';

describe('EditsamComponent', () => {
  let component: EditsamComponent;
  let fixture: ComponentFixture<EditsamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
