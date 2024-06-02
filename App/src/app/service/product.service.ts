import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartData = new EventEmitter<Product[] | []>();
  
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
  getProductById(id: string) {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }

  addProduct(product: Product){
    return this.http.post('http://localhost:3000/products',product);
  }


  Delete(id: number): Observable<any>{
    return this.http.delete<any>('http://localhost:3000/products' + "/"+id);
  }
  
  // Edit(id: Number){
  //   return this.http.get<Product>(`http://localhost:3000/products/${id}`)
  // }

  Update(data: Product){
    return this.http.put<Product>(`http://localhost:3000/products/${data.id}`,data);
  }

  // Login(){
  //   return this.http.get("http://localhost:3000/users");
  // }

  Register(users: Product): Observable<any>{
  return this.http.post('http://localhost:3000/register',users);
  }
  
}