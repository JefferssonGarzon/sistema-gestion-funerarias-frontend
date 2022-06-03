import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurialServicesComponent } from 'src/app/shared/components/burial-services/burial-services.component';
import { PlansComponent } from 'src/app/shared/components/plans/plans.component';
import { ProductsComponent } from 'src/app/shared/components/products/products.component';
import { ViewNewsComponent } from 'src/app/shared/components/view-news/view-news.component';
import { CustomerComponent } from './components/customer/customer.component';
import { MyBurialServicesComponent } from './components/my-burial-services/my-burial-services.component';
import { MyPlansComponent } from './components/my-plans/my-plans.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MyRequestsComponent } from './components/my-requests/my-requests.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      {
        path: 'my-profile',
        component: MyProfileComponent
      },
      {
        path: 'my-plans',
        component: MyPlansComponent
      },
      {
        path: 'my-burial-services',
        component: MyBurialServicesComponent
      },
      {
        path: 'my-requests',
        component: MyRequestsComponent
      },
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
        path: 'plans',
        component: PlansComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
