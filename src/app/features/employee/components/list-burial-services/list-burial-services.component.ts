import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreateEditBurialServicesComponent } from '../modal-create-edit-burial-services/modal-create-edit-burial-services.component';

@Component({
  selector: 'app-list-burial-services',
  templateUrl: './list-burial-services.component.html',
  styleUrls: ['./list-burial-services.component.css']
})
export class ListBurialServicesComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    const dialogRef = this.dialog.open(ModalCreateEditBurialServicesComponent, {
      width: '800px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

}
