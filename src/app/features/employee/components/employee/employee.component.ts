import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text:string;
  path:string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  templateMenu: MenuItem[] = [
    {
      text: 'Usuarios',
      path: '/employee/users'
    },
    {
      text: 'Planes',
      path: '/employee/plans'
    },
    {
      text: 'Productos',
      path: '/employee/products'
    },
    {
      text: 'Servicios',
      path: '/employee/services'
    },
    {
      text: 'Solicitudes',
      path: '/employee/requests'
    },
    {
      text: 'Noticas',
      path: '/employee/news'
    },
    {
      text: 'Cerrar sesion',
      path: '/landing'
    },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
