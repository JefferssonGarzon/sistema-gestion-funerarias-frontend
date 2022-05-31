import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './components/customer/customer.component';

import { SharedModule } from 'src/app/shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';

import { MyPlansComponent } from './components/my-plans/my-plans.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MyBurialServicesComponent } from './components/my-burial-services/my-burial-services.component';
import { MyRequestsComponent } from './components/my-requests/my-requests.component';

@NgModule({
  declarations: [
    CustomerComponent,
    MyPlansComponent,
    MyProfileComponent,
    MyBurialServicesComponent,
    MyRequestsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    MatSidenavModule,
    SharedModule,
    MatCardModule,
    MatDividerModule,
  ]
})
export class CustomerModule { }
