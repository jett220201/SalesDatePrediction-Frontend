import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderCustomerComponent } from './new-order-customer.component';

describe('NewOrderCustomerComponent', () => {
  let component: NewOrderCustomerComponent;
  let fixture: ComponentFixture<NewOrderCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewOrderCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewOrderCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
