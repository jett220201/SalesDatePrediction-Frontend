import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DatePipe } from "@angular/common";
import { OrderView } from '../../models/order.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-view-orders-customer',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [DatePipe],
  templateUrl: './view-orders-customer.component.html',
  styleUrl: './view-orders-customer.component.css'
})
export class ViewOrdersCustomerComponent implements OnInit {
  displayedColumns: string[] = ['Orderid', 'Requireddate', 'Shippeddate', 'Shipname', 'Shipaddress', 'Shipcity'];
  dataSource = new MatTableDataSource<OrderView>();
  customer: Customer;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private datePipe: DatePipe, 
    @Inject(MAT_DIALOG_DATA) public data: { customer: Customer, orders: OrderView[] },
    private dialogRef: MatDialogRef<ViewOrdersCustomerComponent>,
  ) {
    this.customer = data.customer;
    this.dataSource.data = data.orders;
  }

  ngOnInit(): void {
    this.dataSource.data.forEach(order => {
      order.Requireddate = this.datePipe.transform(order.Requireddate, 'M/d/yyyy, hh:mm:ss a')!;
      order.Shippeddate = this.datePipe.transform(order.Shippeddate, 'M/d/yyyy, hh:mm:ss a')!;
    });

    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  closeViewOrdersModal() {
    this.dialogRef.close();
  }
}
