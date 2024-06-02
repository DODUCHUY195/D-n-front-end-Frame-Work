import { Component, Inject, NgModule, PLATFORM_ID } from '@angular/core';

import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HomePageComponent } from './product-list/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HeadersComponent } from './component/headers/headers.component';
import { LoginComponent } from './pages/login/login.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersService } from './service/users.service';
import { routes } from './app.routes';
// import { Product } from './interfaces/Product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  RouterModule,
    FormsModule,
    CommonModule,
    HeadersComponent,
    RouterOutlet,
    
    HttpClientModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: []
})
export class AppComponent {
  // isLoggedIn = false;

  constructor(
    private userService: UsersService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  // ngOnInit(): void {
  //   if (isPlatformBrowser(this.platformId)) {
  //     this.checkTokenPeriodically();
  //     this.isLoggedIn = this.userService.isLoggedIn();
  //   }
  // }

  // logout(): void {
  //   this.userService.logout();
  // }

  // checkTokenPeriodically(): void {
  //   if (isPlatformBrowser(this.platformId)) {
  //     setInterval(() => {
  //       this.userService.checkAdminAccess();
  //       this.isLoggedIn = this.userService.isLoggedIn();
  //     }, 5000); // Kiểm tra mỗi 5 giây
  //   }
  // }
}



