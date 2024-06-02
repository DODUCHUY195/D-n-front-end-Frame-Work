import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/Product';
import { RouterModule } from '@angular/router';
import { ProductService } from '../service/product.service';
import { UsersService } from '../service/users.service';




@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  
  products: Product[] | undefined;
  constructor(private producservice: ProductService,private authService: UsersService) {}
  ngOnInit() {
    this.producservice.getProducts().subscribe((Data) => {
      this.products = Data;
    });

    
  }

  addToCart(product: Product) {
    alert(`Them vao gio hang thanh cong: ${product.title}`);
  }

  
}