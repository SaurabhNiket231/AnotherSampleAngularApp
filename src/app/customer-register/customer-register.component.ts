import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {
  submitted = false;
  genders = ['Male','Female'];
  model:Customer = new Customer(0,"","","",new Date(),"","","","","","");
  constructor(private customerService:CustomerService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.submitted=true;
  }
  newCustomer()
  {
    this.model = new Customer(0,"","","",new Date(),"","","","","","");
    
  }

}
