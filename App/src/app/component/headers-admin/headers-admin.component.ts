import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-headers-admin',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './headers-admin.component.html',
  styleUrl: './headers-admin.component.css'
})
export class HeadersAdminComponent implements OnInit{
  isLoggedIn = false;
  constructor(private authService: UsersService){}
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }
  logout(): void {
    this.authService.logout();
  }
}
