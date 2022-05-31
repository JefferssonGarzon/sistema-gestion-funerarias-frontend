import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { ListBurialServicesComponent } from './components/list-burial-services/list-burial-services.component';
import { ListNewsComponent } from './components/list-news/list-news.component';
import { ListPlansComponent } from './components/list-plans/list-plans.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { RequestListComponent } from './components/request-list/request-list.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: 'users',
        component: ListUsersComponent
      },
      {
        path:'services',
        component: ListBurialServicesComponent
      },
      {
        path: 'products',
        component: ListProductsComponent
      },
      {
        path: 'plans',
        component: ListPlansComponent
      },
      {
        path: 'requests',
        component: RequestListComponent
      },
      {
        path: 'news',
        component: ListNewsComponent
      }
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
export class EmployeeRoutingModule { }
