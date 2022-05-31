import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import {MatSidenavModule} from '@angular/material/sidenav';

import { AdminComponent } from './components/admin/admin.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';


@NgModule({
  declarations: [
    AdminComponent,
    ListEmployeesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule, 
    SharedModule,
    MatSidenavModule,
  ]
})
export class AdminModule { }
