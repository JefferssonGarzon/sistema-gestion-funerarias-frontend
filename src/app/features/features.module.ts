import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FeaturesRoutingModule } from './features-routing.module';
import { SharedModule } from '../shared/shared.module';

import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { LandingComponent } from './landing/landing.component';
import { SignUpComponent } from './landing/components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './landing/components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    LandingComponent,
    SignUpComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule, 
    FeaturesRoutingModule, 
    SharedModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
  ]
})
export class FeaturesModule {}
