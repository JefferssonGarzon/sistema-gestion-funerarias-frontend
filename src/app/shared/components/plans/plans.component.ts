import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  iteration = [1,2,3,4];
  constructor() { }

  ngOnInit(): void {
  }

}
