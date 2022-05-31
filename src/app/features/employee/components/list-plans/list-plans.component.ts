import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalCreateEditPlansComponent } from '../modal-create-edit-plans/modal-create-edit-plans.component';

@Component({
  selector: 'app-list-plans',
  templateUrl: './list-plans.component.html',
  styleUrls: ['./list-plans.component.css']
})
export class ListPlansComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    const dialogRef = this.dialog.open(ModalCreateEditPlansComponent, {
      width: '800px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

}
