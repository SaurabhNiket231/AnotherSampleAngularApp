import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';
import {CUSTOMERS} from '../mock-customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers = CUSTOMERS;
  selectedCustomer: Customer;
  fullName:string ;

  constructor() { }

  ngOnInit() {
  }

onSelect(customer:Customer):void{
  this.selectedCustomer = customer;
  this.fullName= this.selectedCustomer.firstName+" "+this.selectedCustomer.lastName;
}

}
