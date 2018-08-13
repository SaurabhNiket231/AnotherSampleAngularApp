import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { SaleEntryComponent } from './sale-entry/sale-entry.component';
import { SaleDetailsComponent } from './sale-details/sale-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomerRegisterComponent,
    CustomerSearchComponent,
    CustomerDetailComponent,
    ProductEntryComponent,
    ProductDetailComponent,
    ProductSearchComponent,
    SaleEntryComponent,
    SaleDetailsComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
