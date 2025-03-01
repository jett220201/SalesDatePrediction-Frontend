import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer } from '../../models/customer.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee.model';
import { Shipper } from '../../models/shipper.model';
import { Product } from '../../models/product.model';
import { Order } from '../../models/order.model';
import { OrderDetails } from '../../models/orderDetails.model';

@Component({
  selector: 'app-new-order-customer',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './new-order-customer.component.html',
  styleUrl: './new-order-customer.component.css'
})
export class NewOrderCustomerComponent implements OnInit{
  orderForm: FormGroup;
  employees : Employee[] = [];
  shippers : Shipper[] = [];
  products : Product[] = [];
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data : Customer,
    private dialogRef: MatDialogRef<NewOrderCustomerComponent>,
  ) {
    this.orderForm = this.fb.group({
      employee: ['', Validators.required],
      shipper: ['', Validators.required],
      shipName: ['', Validators.required],
      shipAddress: ['', Validators.required],
      shipCity: ['', Validators.required],
      shipCountry: ['', Validators.required],
      orderDate: ['', Validators.required],
      requiredDate: ['', Validators.required],
      shippedDate: ['', Validators.required],
      freight: [0, Validators.required],
      product: ['', Validators.required],
      unitPrice: ['', Validators.required],
      quantity: ['', Validators.required],
      discount: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadEmployees();
    this.loadShippers();
    this.loadProducts();
  }

  loadEmployees() {
    this.apiService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  loadShippers() {
    this.apiService.getShippers().subscribe(data => {
      this.shippers = data;
    });
  }

  loadProducts() {
    this.apiService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  closeNewOrderModal() {
    this.dialogRef.close();
  }

  sendNewOrder() {
    if(this.orderForm.valid){
      this.apiService.createNewOrder({
        customerId: this.data.CustomerId,
        employeeId: this.orderForm.value.employee,
        orderDate: this.orderForm.value.orderDate,
        requiredDate: this.orderForm.value.requiredDate,
        shippedDate: this.orderForm.value.shippedDate,
        shipperId: this.orderForm.value.shipper,
        freight: this.orderForm.value.freight,
        shipName: this.orderForm.value.shipName,
        shipAddress: this.orderForm.value.shipAddress,
        shipCity: this.orderForm.value.shipCity,
        shipRegion: null,
        shipPostalCode: null,
        shipCountry: this.orderForm.value.shipCountry
      } as Order, {
        productId: this.orderForm.value.product,
        price: this.orderForm.value.unitPrice,
        quantity: this.orderForm.value.quantity,
        discount: this.orderForm.value.discount
      } as OrderDetails).subscribe({
        next: () => {
          this.dialogRef.close();
        },
        error: (err) => {
          this.errorMessage = 'An error occurred while creating the order. Please try again.';
          console.error(err);
        }
      });
    }
  }
}
