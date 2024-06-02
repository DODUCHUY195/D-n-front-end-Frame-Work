
import { Inject, Injectable, OnInit, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from '../service/users.service';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedIn = false;
  constructor(private userService: UsersService, private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  
  canActivate(): any {
    if (isPlatformBrowser(this.platformId)) {
      this.checkTokenPeriodically();
      this.isLoggedIn = this.userService.isLoggedIn();
    }
    if (isPlatformBrowser(this.platformId)) {
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
return false;
}

checkTokenPeriodically(): void {
  if (isPlatformBrowser(this.platformId)) {
    setInterval(() => {
      this.userService.checkAdminAccess();
      this.isLoggedIn = this.userService.isLoggedIn();
    }, 0); // Kiểm tra mỗi 5 giây
  }
}


}