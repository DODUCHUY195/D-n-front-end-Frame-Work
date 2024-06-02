

import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators ,FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { CommonModule } from '@angular/common';
import  bcrypt  from 'bcryptjs';
import { error } from 'console';
import { User } from '../../interfaces/auth-users';

@Component({
  selector: 'app-signup',
  standalone:true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports:[CommonModule,FormsModule, ReactiveFormsModule,RouterLinkActive,RouterModule]
})
export class SignupComponent implements OnInit {
  registerForm!:FormGroup
  
  ngOnInit(): void{
   
    this.registerForm = this.fb.group({
      
      email: ['', [Validators.required, Validators.email]],
      password :  ['', [Validators.required,Validators.minLength(6)]]
      
    })
  
  }
 

  constructor(
    private fb: FormBuilder,
    private authService: UsersService,
    private router: Router
  ) { 
    
  }



  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  
  submitSignUp() {
    
    
    if(this.registerForm.valid){
    
    this.authService.registerUser(this.registerForm.value).subscribe(
      data => {
        console.log('Create product successfully!', data);
      alert("Thành Công!");
        this.router.navigate(['/login']);
      },(error) => {
        if (error.status === 400) { 
          alert('Email already exists.'); 
        } else {
          console.error('An error occurred:', error);
        }
      }
    )
  }
  else{
    alert("Vui lòng nhập đủ điều kiện");
  }
 




}

 

}




