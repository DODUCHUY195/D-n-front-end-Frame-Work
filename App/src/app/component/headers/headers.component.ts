import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { compileComponentClassMetadata } from '@angular/compiler';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterModule,CommonModule],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css'
})
export class HeadersComponent implements OnInit{
  isLoggedIn = false;
constructor(private authService: UsersService){
  
}
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }
  
  logout(): void {
    this.authService.logout();
  }
}
