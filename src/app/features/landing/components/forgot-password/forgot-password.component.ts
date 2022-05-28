import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  recoveryEmail: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  show(){
    console.log(this.recoveryEmail);
    
  }
}
