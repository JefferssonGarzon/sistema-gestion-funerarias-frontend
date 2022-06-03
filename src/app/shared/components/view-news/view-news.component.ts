import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit {

  iteration = [1,2,3,4];
  constructor() { }

  ngOnInit(): void {
  }

}
