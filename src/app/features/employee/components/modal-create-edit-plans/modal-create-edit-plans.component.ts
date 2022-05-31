import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-create-edit-plans',
  templateUrl: './modal-create-edit-plans.component.html',
  styleUrls: ['./modal-create-edit-plans.component.css']
})
export class ModalCreateEditPlansComponent implements OnInit {

  plansForm!: FormGroup;
  constructor(public dialogRef: MatDialogRef<ModalCreateEditPlansComponent>,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.plansForm = this.fb.group({
      plan: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
      state: [false, Validators.compose([Validators.required])],
      image: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])]
    })
  }
}
