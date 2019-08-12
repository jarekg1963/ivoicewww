import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestivoiceComponent } from './testivoice.component';

describe('TestivoiceComponent', () => {
  let component: TestivoiceComponent;
  let fixture: ComponentFixture<TestivoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestivoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestivoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
