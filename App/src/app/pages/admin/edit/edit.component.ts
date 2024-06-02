import { Component, NgModule, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/Product';

import {ActivatedRoute, Router} from '@angular/router';
import { HeadersAdminComponent } from '../../../component/headers-admin/headers-admin.component';
import { FootersAdminComponent } from '../../../component/footers-admin/footers-admin.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, NgModelGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [HeadersAdminComponent,FootersAdminComponent,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})

export class EditComponent implements OnInit{
  editForm!:FormGroup
  productId!: any;
  product!: Product;
  constructor(
    private router:Router,
      private route: ActivatedRoute,
      private productService: ProductService,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      title: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl (0, [Validators.required, Validators.min(0)]),
      description: new FormControl('',Validators.required),
    });
  }

  ngOnInit(): void {
    
      this.productId = this.route.snapshot.paramMap.get('id');
      this.getProductById(this.productId);
  }

  getProductById(id: string): void {
      this.productService.getProductById(id)
          .subscribe(product => this.product = product);
  }

  onSubmit(): void {
    if(this.editForm.valid){
      this.productService.Update(this.product)
          .subscribe(() => {
            this.router.navigate(['/admin']);
              // Đã cập nhật sản phẩm, bạn có thể thực hiện các hành động tiếp theo ở đây
          });
    }
      }
 
}
