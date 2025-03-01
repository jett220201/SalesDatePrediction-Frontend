import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from "../../services/api.service";
import { Customer } from "../../models/customer.model";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DatePipe } from "@angular/common";
import { ViewOrdersCustomerComponent } from "../view-orders-customer/view-orders-customer.component";
import { NewOrderCustomerComponent } from "../new-order-customer/new-order-customer.component";

@Component({
    selector: 'app-customer',
    templateUrl: './customers.component.html',
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatIconModule,
        ReactiveFormsModule        
    ],
    providers: [DatePipe],
    styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
    displayedColumns : string[] = ['CustomerName', 'LastOrderDate', 'NextPredictedOrderDate', 'ViewOrdersButton', 'NewOrderButton'];
    dataSource = new MatTableDataSource<Customer>();
    
    searchControl = new FormControl();

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(private apiService : ApiService, private datePipe : DatePipe, private dialog: MatDialog) {}

    ngOnInit(): void {
        this.loadAllCustomers();

        this.searchControl.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(value => {
            this.loadCustomerByName(value);
        });
    }

    loadAllCustomers() {
        this.apiService.getSaleDatePrediction().subscribe(data => {
            data.forEach(customer => {
                customer.LastOrderDate = this.datePipe.transform(customer.LastOrderDate, 'M/d/yyyy')!;
                customer.NextPredictedOrderDate = this.datePipe.transform(customer.NextPredictedOrderDate, 'M/d/yyyy')!;
            });

            this.dataSource.data = data;
            setTimeout(() => {
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            });
        });
    }

    loadCustomerByName(customerName : string) {
        if(!customerName) {
            this.loadAllCustomers();
            return;
        }
        this.apiService.getSaleDatePredictionByCustomerName(customerName).subscribe(data => {
            data.forEach(customer => {
                customer.LastOrderDate = this.datePipe.transform(customer.LastOrderDate, 'M/d/yyyy')!;
                customer.NextPredictedOrderDate = this.datePipe.transform(customer.NextPredictedOrderDate, 'M/d/yyyy')!;
            });

            this.dataSource.data = data;
            setTimeout(() => {
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            });
        });
    }

    openViewOrdersModal(customer : Customer): void {
        this.apiService.getOrdersByCustomer(customer.CustomerId).subscribe(orders => {
            const dialogRef = this.dialog.open(ViewOrdersCustomerComponent, {
                width: '1200px',
                panelClass: 'custom-dialog-container',
                data: {customer, orders}
            });
        });
    }

    openNewOrder(customer : Customer) {
        const dialogRef = this.dialog.open(NewOrderCustomerComponent, {
            width: '700px',
            panelClass: 'custom-form-dialog-container',
            data: customer
        });
    }
}