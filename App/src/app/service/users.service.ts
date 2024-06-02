import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../interfaces/auth-users';
import { tap } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})



export class UsersService {
 
user!:User
  private baseUrl = 'http://localhost:3000';


  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

  registerUser(userDetails: User) {
    return this.http.post(`${this.baseUrl}/register`, userDetails);
  }
  login(loginData: User): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, loginData).pipe(
      tap(response => {
        if (isPlatformBrowser(this.platformId)) {
          const token = response.accessToken;   
         localStorage.setItem('authToken', token);
         console.log(token);
         window.location.href = '/admin';
        }
      })
    );
  }

  logout(): void {
    if(isPlatformBrowser(this.platformId)){
    localStorage.removeItem('authToken');
    window.location.href = '/login';
    }
  }

  isLoggedIn(): any {
    if(isPlatformBrowser(this.platformId)){
    return !!localStorage.getItem('authToken');
    }
  }

  
  checkAdminAccess(): void {
    if(isPlatformBrowser(this.platformId)){
    const tokenn =  localStorage.getItem('authToken');
    if (!tokenn) {
      alert("Ban k co quyen admin vui long dang nhap");
      window.location.href = '/login';
    }
  }
  }

}