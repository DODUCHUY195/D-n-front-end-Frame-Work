import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/Product';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  AbstractControl, ValidationErrors
} from '@angular/forms';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeadersAdminComponent } from '../../../component/headers-admin/headers-admin.component';
import { FootersAdminComponent } from '../../../component/footers-admin/footers-admin.component';

import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule,HeadersAdminComponent,FootersAdminComponent],
  templateUrl: './products-add.component.html',
  styleUrl: './products-add.component.scss',
})
export class ProductAddComponent implements OnInit {
  
  productForm!: FormGroup;
  constructor(
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder
  ) {
    
  }

 
  ngOnInit(): void {this.productForm = this.fb.group({
    title: new FormControl ('', [Validators.required, Validators.minLength(5),Validators.maxLength(15)]),
    price: new FormControl ('', [Validators.required, Validators.min(0)]),
    description: new FormControl('',[Validators.required,Validators.maxLength(50)]),
  });
}
  handleSubmit() {
    
    if (this.productForm.valid) {
      this.productService
        .addProduct(this.productForm.value)
        .subscribe((data) => {
          console.log('Create product successfully!', data);
          alert('Create product successfully!');
          this.router.navigate(['/admin']);
        });
    }
  }
 
  
  
  // get title(){
  //   return this.productForm.get('title');
  // }

  // get description(){
  //   return this.productForm.get('description');
  // }

  // get price(){
  //   return this.productForm.get('price');
  // }
}