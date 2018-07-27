import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CustomerComponent } from "./customer/customer.component";
import { RoutingModule } from "./routing.module";
//import { Routes, RouterModule } from "@angular/router";
import { PendingCustomerComponent } from './pending-customer/pending-customer.component';
import { PendingMeasurementComponent } from './pending-measurement/pending-measurement.component';
import { MeasurementComponent } from './measurement/measurement.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent, CustomerComponent, PendingCustomerComponent, PendingMeasurementComponent, MeasurementComponent, NewCustomerComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule, MatMenuModule, MatIconModule, BrowserAnimationsModule,
    MatButtonModule, RoutingModule
   // RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

  
 }
