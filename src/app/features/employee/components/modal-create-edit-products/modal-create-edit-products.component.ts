import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-create-edit-products',
  templateUrl: './modal-create-edit-products.component.html',
  styleUrls: ['./modal-create-edit-products.component.css']
})
export class ModalCreateEditProductsComponent implements OnInit {

  productForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.productForm = this.fb.group({
      product: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
      state: [false, Validators.compose([Validators.required])],
      image: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])]
    })
  }
}
