import { AbstractControl } from "@angular/forms";
import { ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export interface Product {
 
  id?: number;
  title: string;
  price: number;
  thumbnail: string;
  description?: string;
  }

  interface CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult>
  }

