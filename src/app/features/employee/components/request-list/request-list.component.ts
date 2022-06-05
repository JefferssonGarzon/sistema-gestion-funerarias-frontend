import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  iteration: any[] = [1,2,3,4,5,6,7,8,9];
  constructor() { }

  ngOnInit(): void {
  }

}
