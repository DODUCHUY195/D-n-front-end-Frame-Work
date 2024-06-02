import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomePageComponent } from './product-list/home-page.component';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';

import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { ToastrModule } from 'ngx-toastr';
import { UsersService } from './service/users.service';

@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [UsersService],
  bootstrap: []
})
export class AppModule { }