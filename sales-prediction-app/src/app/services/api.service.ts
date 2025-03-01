import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order, OrderView } from '../models/order.model';
import { Product } from '../models/product.model';
import { Customer } from '../models/customer.model';
import { Shipper } from '../models/shipper.model';
import { Employee } from '../models/employee.model';
import { OrderDetails } from '../models/orderDetails.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getSaleDatePrediction() : Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/api/Customers/GetAll`);
  }

  getSaleDatePredictionByCustomerName(name: string) : Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/api/Customers/GetByCustomerName?customerName=${name}`);
  }

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/api/Products`);
  }

  getShippers() : Observable<Shipper[]> {
    return this.http.get<Shipper[]>(`${this.apiUrl}/api/Shippers`);
  }

  getEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/api/Employees`);
  }

  getOrdersByCustomer(customerId : number) : Observable<OrderView[]> {
    return this.http.get<OrderView[]>(`${this.apiUrl}/api/Orders?customerId=${customerId}`);
  }

  createNewOrder(order : Order, orderDetail : OrderDetails): Observable<{ orderId : number}> {
    const body = { 
      order: order, 
      orderDetail: orderDetail 
    };
    return this.http.post<{ orderId : number }>(`${this.apiUrl}/api/Orders`, body);
  }
}
