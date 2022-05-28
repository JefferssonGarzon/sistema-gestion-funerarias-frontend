import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './component/customer/customer.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatSidenavModule,
    SharedModule,
  ]
})
export class CustomerModule { }
