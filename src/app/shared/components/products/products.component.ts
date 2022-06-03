import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  iteration = [1,2,3,4];
  constructor() { }

  ngOnInit(): void {
  }

}
