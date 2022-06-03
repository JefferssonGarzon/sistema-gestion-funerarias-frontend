import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burial-services',
  templateUrl: './burial-services.component.html',
  styleUrls: ['./burial-services.component.css']
})
export class BurialServicesComponent implements OnInit {
  
  iteration = [1,2,3,4];
  constructor() { }

  ngOnInit(): void {
  }

}
