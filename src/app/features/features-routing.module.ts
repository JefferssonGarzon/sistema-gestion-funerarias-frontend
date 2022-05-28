import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurialServicesComponent } from '../shared/components/burial-services/burial-services.component';
import { ProductsComponent } from '../shared/components/products/products.component';
import { ViewNewsComponent } from '../shared/components/view-news/view-news.component';
import { ForgotPasswordComponent } from './landing/components/forgot-password/forgot-password.component';
import { SignUpComponent } from './landing/components/sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
    children: [
      {
        path: 'news',
        component: ViewNewsComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'services',
        component: BurialServicesComponent
      },
      {
        path: 'sing-up',
        component: SignUpComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: '**',
        redirectTo: 'landing/news',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: '**',
    redirectTo: 'landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
