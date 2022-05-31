import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-create-edit-news',
  templateUrl: './modal-create-edit-news.component.html',
  styleUrls: ['./modal-create-edit-news.component.css']
})
export class ModalCreateEditNewsComponent implements OnInit {

  viewForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  buildForm(){
    this.viewForm = this.fb.group({
      notice: ['', Validators.compose([Validators.required])],
      state: [false, Validators.compose([Validators.required])],
      image: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
    })
  }
}
