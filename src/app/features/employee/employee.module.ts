import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './components/employee/employee.component';
import { SharedModule } from 'src/app/shared/shared.module';

import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    MatSidenavModule,
  ]
})
export class EmployeeModule { }
