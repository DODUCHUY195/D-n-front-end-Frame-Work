import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterLinkWithHref, RouterModule,Router} from '@angular/router';
import { Product } from '../../../interfaces/Product';


import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { ProductService } from '../../../service/product.service';
import { UsersService } from '../../../service/users.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {
  
  isLoggedIn = false;
  products: Product[] = [];
  constructor(private producservice: ProductService,private authService: UsersService,private route: Router

  ) {}

  getAll(){
    this.producservice.getProducts().subscribe((Data) => {
      this.products = Data;
    });
  }
  ngOnInit() {
    this.getAll();
  }

  onDelete(id:any){
    if(confirm("Bạn có chắc chắn muốn xoá không?")){
    this.producservice.Delete(id).subscribe((data)=>{
      this.getAll();
    })
  }
  }


  
}