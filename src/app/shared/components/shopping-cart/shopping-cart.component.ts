import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  productList: any[] = [1,2,3,4,5,6,7,8,9,0];
  constructor() { }

  ngOnInit(): void {
  }

}
