import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BurialServicesComponent } from './components/burial-services/burial-services.component';
import { PlansComponent } from './components/plans/plans.component';
import { ProductsComponent } from './components/products/products.component';
import { ViewNewsComponent } from './components/view-news/view-news.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    BurialServicesComponent,
    PlansComponent,
    ProductsComponent,
    ViewNewsComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatMenuModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    BurialServicesComponent,
    PlansComponent,
    ProductsComponent,
    ViewNewsComponent,
  ],
})
export class SharedModule { }
