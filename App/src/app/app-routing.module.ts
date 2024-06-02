// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './pages/login/login.component';
// import { SignupComponent } from './pages/signup/signup.component';
// import { HomePageComponent } from './product-list/home-page.component';
// import { auth } from './guards/auth.guard.service';


// const routes: Routes = [
//   {
//     path: 'login',
//     component: LoginComponent
//   },
//   {
//     path: 'register',
//     component: SignupComponent
//   },
//   {
//     path: 'home',
//     component: HomePageComponent,
//     canActivate: [auth]
//   },
//   {
//     path: '', redirectTo: 'home', pathMatch: 'full'
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }