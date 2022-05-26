import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    CommonModule, 
    FeaturesRoutingModule, 
    SharedModule,
  ],
  exports: [
  ]
})
export class FeaturesModule {}
