import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './product-list/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

import { LayoutAdminComponent } from './component/layout-admin/layout-admin.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LayoutClientComponent } from './component/layout-client/layout-client.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

import { EditComponent } from './pages/admin/edit/edit.component';
import { ProductAddComponent } from './pages/admin/products-add/products-add.component';
// import { AdminGuard } from './guards/auth.guard.service';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard.service';
// import { RoleGuardService } from './role-guard.service';

export const routes: Routes = [
  {
    path: '',
    component: LayoutClientComponent,
    
    children: [
      { path: '', component: HomePageComponent 
      
      },
      {
        path: 'home',
        redirectTo: '/'
        
      },
      {
        path: 'about',
        component: AboutPageComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'details/:id',
        component: ProductDetailComponent,
      },
    ],
  },

  {
    path: 'admin',
    component: LayoutAdminComponent,
    canActivate: [AuthGuard],
    
    children: [
      {path:'',component: DashboardComponent},
      {
        path: 'products-add',
        component: ProductAddComponent,
      },
      {
        path: 'edit/:id',
        component: EditComponent,
      },
      {
        path: '**',
        component: NotFoundPageComponent,
      },
    
    ],
  }
  
  
  
  
];


