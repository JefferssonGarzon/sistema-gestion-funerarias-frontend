import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  regForm!:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(){
    this.regForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
      address: ['', Validators.compose([Validators.required, Validators.maxLength(40)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      lastname: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      id: ['', Validators.compose([Validators.required])],
      datebirth: ['', Validators.compose([Validators.required])]
    })
  }

  register(){
    console.log(this.regForm.value);
    
  }
}
