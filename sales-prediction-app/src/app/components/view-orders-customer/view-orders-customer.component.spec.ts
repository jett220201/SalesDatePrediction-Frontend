import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrdersCustomerComponent } from './view-orders-customer.component';

describe('ViewOrdersCustomerComponent', () => {
  let component: ViewOrdersCustomerComponent;
  let fixture: ComponentFixture<ViewOrdersCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewOrdersCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOrdersCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
