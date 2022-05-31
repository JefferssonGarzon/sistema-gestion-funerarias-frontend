import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-create-edit-burial-services',
  templateUrl: './modal-create-edit-burial-services.component.html',
  styleUrls: ['./modal-create-edit-burial-services.component.css']
})
export class ModalCreateEditBurialServicesComponent implements OnInit {

  serviceForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.serviceForm = this.fb.group({
      service: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
      image: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
    })
  }
}
