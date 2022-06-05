import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  iteration: any[] = [1,2,3,4,5];
  constructor() { }

  ngOnInit(): void {
  }

}
