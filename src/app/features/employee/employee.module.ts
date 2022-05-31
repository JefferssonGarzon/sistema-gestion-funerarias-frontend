import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './components/employee/employee.component';
import { SharedModule } from 'src/app/shared/shared.module';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

import { ListBurialServicesComponent } from './components/list-burial-services/list-burial-services.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListPlansComponent } from './components/list-plans/list-plans.component';
import { RequestListComponent } from './components/request-list/request-list.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ListNewsComponent } from './components/list-news/list-news.component';
import { ModalCreateEditBurialServicesComponent } from './components/modal-create-edit-burial-services/modal-create-edit-burial-services.component';
import { ModalCreateEditProductsComponent } from './components/modal-create-edit-products/modal-create-edit-products.component';
import { ModalCreateEditPlansComponent } from './components/modal-create-edit-plans/modal-create-edit-plans.component';
import { ModalCreateEditNewsComponent } from './components/modal-create-edit-news/modal-create-edit-news.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeComponent,
    ListBurialServicesComponent,
    ListProductsComponent,
    ListPlansComponent,
    RequestListComponent,
    ListUsersComponent,
    ListNewsComponent,
    ModalCreateEditBurialServicesComponent,
    ModalCreateEditProductsComponent,
    ModalCreateEditPlansComponent,
    ModalCreateEditNewsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule,
  ]
})
export class EmployeeModule { }
