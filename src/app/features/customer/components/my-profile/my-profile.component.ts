import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  myProfileForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.myProfileForm = this.fb.group({
      name: [''],
      lastname: [''],
      dateofbirth: [''],
      email: [''],
      doc: [''],
      address: ['']
    })
  }
}
