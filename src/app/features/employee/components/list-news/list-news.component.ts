import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreateEditNewsComponent } from '../modal-create-edit-news/modal-create-edit-news.component';


@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    const dialogRef = this.dialog.open(ModalCreateEditNewsComponent, {
      width: '800px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

}
