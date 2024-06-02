import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/auth-users';
import { error } from 'console';

@Component({
  selector: 'app-login',
  standalone:true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports:[ReactiveFormsModule,CommonModule,RouterLinkActive,RouterModule]
})
export class LoginComponent implements OnInit {
  
  users: User[] = [];
  loginForm!:FormGroup;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)])
    })
    
  }


  constructor(
    private fb: FormBuilder,
    private authService: UsersService,
    private router: Router,
    
  ) { }

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() { return this.loginForm.controls['password']; }

  
  loginUser(): void {
    
    if(this.loginForm.valid){
  
    const loginData = this.loginForm.value;
   
      this.authService.login(loginData).subscribe((data: any) => {
        if(data){
        console.log("Infor Email And Password",data);
        this.router.navigate(['/home']);
        this.authService.checkAdminAccess();
        }else {
          console.error('Invalid email or password');
          
        }
    },(error) => {
      alert("Email or password not available");
    }
  );
    }else {
      console.log('Form is invalid');
    } 
    
    }

    

}


  





  
