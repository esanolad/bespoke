import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CustomerComponent } from "./customer/customer.component";
import { PendingCustomerComponent } from './pending-customer/pending-customer.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { PendingMeasurementComponent } from './pending-measurement/pending-measurement.component';
import { MeasurementComponent } from './measurement/measurement.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { LoggedGuard } from "./logged.guard";

const appRoutes:Routes=[
    {path:'customer/:id',component:CustomerComponent},
    {path:'newCustomer',canActivate: [LoggedGuard], component:NewCustomerComponent},
    {path:'pendingCustomer', component:PendingCustomerComponent},
    {path:'newMeasurement', component:MeasurementComponent},
    {path:'pendingMeasurement', component:PendingMeasurementComponent},
    {path:'', redirectTo:'/',pathMatch:'full'},
    {path:'**',component:PageNotFoundComponent}
]
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class RoutingModule{
   // tt:string
}
