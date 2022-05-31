import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text:string;
  path:string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  templateMenu: MenuItem[] = [
    {
      text: 'Mi perfil',
      path: '/customer/my-profile'
    },
    {
      text: 'Mi planes',
      path: '/customer/my-plans'
    },
    {
      text: 'Mis servicios',
      path: '/customer/my-burial-services'
    },
    {
      text: 'Mis solicitudes',
      path: '/customer/my-requests'
    },
    {
      text: 'Cerrar sesión',
      path: '/landing'
    },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
