import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { Product } from '../interfaces/Product';
import { ProductService } from '../service/product.service';



@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})

export class ProductDetailComponent implements OnInit{

  productData:undefined | Product
  constructor(private activeRoute:ActivatedRoute,private product:ProductService){
  }

  ngOnInit() : void{
    let productId = this.activeRoute.snapshot.paramMap.get('id');
    // console.warn(productId);
    productId && this.product.getProductById(productId).subscribe((result) => {
      // console.warn(result);
      this.productData = result;
    })
  }

  addToCart(product: Product) {
    alert(`Them vao gio hang thanh cong: ${product.title}`);
  }
}


