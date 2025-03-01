import { OrderDetails } from "./orderDetails.model";

export interface Order {
    id? : number,
    customerId : number,
    employeeId : number,
    orderDate : Date,
    requiredDate : Date,
    shippedDate : Date,
    shipperId : number,
    freight: number,
    shipName : string,
    shipAddress : string,
    shipCity : string,
    shipRegion : string | null,
    shipPostalCode : string | null,
    shipCountry : string,
    details : OrderDetails
}

export interface OrderView {
    Orderid: number,
    Requireddate: string,
    Shippeddate: string,
    Shipname: string,
    Shipaddress: string,
    Shipcity: string
}